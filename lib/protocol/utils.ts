import { Ber } from "asn1";

let DISCONNECT_REASON;

const FastBuffer = Buffer[Symbol.species];
const TypedArrayFill = Object.getPrototypeOf(Uint8Array.prototype).fill;

export function readUInt32BE(buf, offset) {
  return (
    buf[offset++] * 16777216 +
    buf[offset++] * 65536 +
    buf[offset++] * 256 +
    buf[offset]
  );
}

export function bufferCopy(
  { length, buffer, byteOffset },
  dest,
  srcStart,
  srcEnd,
  destStart
) {
  if (!destStart) destStart = 0;
  if (srcEnd > length) srcEnd = length;
  let nb = srcEnd - srcStart;
  const destLeft = dest.length - destStart;
  if (nb > destLeft) nb = destLeft;
  dest.set(new Uint8Array(buffer, byteOffset + srcStart, nb), destStart);
  return nb;
}

export function bufferSlice(
  {
    length,
    buffer,
    byteOffset,
  }: {
    length: number;
    buffer: Uint8Array | ArrayBufferLike;
    byteOffset: number;
  },
  start: number,
  end?: number
) {
  if (end === undefined) end = length;
  return new FastBuffer(buffer, byteOffset + start, end - start);
}

export function makeBufferParser() {
  let pos = 0;
  let buffer;

  const self = {
    init: (buf, start) => {
      buffer = buf;
      pos = typeof start === "number" ? start : 0;
    },
    pos: () => pos,
    length: () => (buffer ? buffer.length : 0),
    avail: () => (buffer && pos < buffer.length ? buffer.length - pos : 0),
    clear: () => {
      buffer = undefined;
    },
    readUInt32BE: () => {
      if (!buffer || pos + 3 >= buffer.length) return;
      return (
        buffer[pos++] * 16777216 +
        buffer[pos++] * 65536 +
        buffer[pos++] * 256 +
        buffer[pos++]
      );
    },
    readUInt64BE: (behavior?: string) => {
      if (!buffer || pos + 7 >= buffer.length) return;
      switch (behavior) {
        case "always":
          return BigInt(`0x${buffer.hexSlice(pos, (pos += 8))}`);
        // @ts-expect-error TS(7029): Fallthrough case in switch.
        case "maybe":
          if (buffer[pos] > 0x1f)
            return BigInt(`0x${buffer.hexSlice(pos, (pos += 8))}`);
        // FALLTHROUGH
        default:
          return (
            buffer[pos++] * 72057594037927940 +
            buffer[pos++] * 281474976710656 +
            buffer[pos++] * 1099511627776 +
            buffer[pos++] * 4294967296 +
            buffer[pos++] * 16777216 +
            buffer[pos++] * 65536 +
            buffer[pos++] * 256 +
            buffer[pos++]
          );
      }
    },
    skip: (n) => {
      if (buffer && n > 0) pos += n;
    },
    skipString: () => {
      const len = self.readUInt32BE();
      if (len === undefined) return;
      pos += len;
      return pos <= buffer.length ? len : undefined;
    },
    readByte: () => {
      if (buffer && pos < buffer.length) return buffer[pos++];
    },
    readBool: () => {
      if (buffer && pos < buffer.length) return !!buffer[pos++];
    },
    readList: () => {
      const list = self.readString(true);
      if (list === undefined) return;
      return list ? list.split(",") : [];
    },
    readString: (dest?: number | boolean, maxLen?: number) => {
      if (typeof dest === "number") {
        maxLen = dest;
        dest = undefined;
      }

      const len = self.readUInt32BE();
      if (len === undefined) return;

      if (
        buffer.length - pos < len ||
        (typeof maxLen === "number" && len > maxLen)
      ) {
        return;
      }

      if (dest) {
        if (Buffer.isBuffer(dest))
          // @ts-expect-error TS(2554): Expected 5 arguments, but got 4.
          return bufferCopy(buffer, dest, pos, (pos += len));
        return buffer.utf8Slice(pos, (pos += len));
      }
      return bufferSlice(buffer, pos, (pos += len));
    },
    readRaw: (len?: number) => {
      if (!buffer) return;
      if (typeof len !== "number")
        return bufferSlice(buffer, pos, (pos += buffer.length - pos));
      if (buffer.length - pos >= len)
        return bufferSlice(buffer, pos, (pos += len));
    },
  };

  return self;
}

export function makeError(msg, level, fatal) {
  const err = new Error(msg);
  if (typeof level === "boolean") {
    fatal = level;
    (err as any).level = "protocol";
  } else {
    (err as any).level = level || "protocol";
  }
  (err as any).fatal = !!fatal;
  return err;
}

export function writeUInt32BE(buf, value, offset) {
  buf[offset++] = value >>> 24;
  buf[offset++] = value >>> 16;
  buf[offset++] = value >>> 8;
  buf[offset++] = value;
  return offset;
}

const utilBufferParser = makeBufferParser();
export function doFatalError(
  protocol?: any,
  msg?: string | Error,
  level?: string | number,
  reason?: number
) {
  let err;
  if (DISCONNECT_REASON === undefined)
    ({ DISCONNECT_REASON } = require("./constants.js"));
  if (msg instanceof Error) {
    // doFatalError(protocol, err[, reason])
    err = msg;
    if (typeof level !== "number") reason = DISCONNECT_REASON.PROTOCOL_ERROR;
    else reason = level;
  } else {
    // doFatalError(protocol, msg[, level[, reason]])
    err = makeError(msg, level, true);
  }
  if (typeof reason !== "number") reason = DISCONNECT_REASON.PROTOCOL_ERROR;
  protocol.disconnect(reason);
  protocol._destruct();
  protocol._onError(err);
  return Infinity;
}

export const bufferFill = (
  buf: Buffer,
  value?: number,
  start?: number,
  end?: number
) => TypedArrayFill.call(buf, value, start, end);
export const writeUInt32LE = (buf, value, offset) => {
  buf[offset++] = value;
  buf[offset++] = value >>> 8;
  buf[offset++] = value >>> 16;
  buf[offset++] = value >>> 24;
  return offset;
};
export const bufferParser = makeBufferParser();
export const readString = (
  buffer,
  start?: number,
  dest?: number | boolean,
  maxLen?: number
) => {
  if (typeof dest === "number") {
    maxLen = dest;
    dest = undefined;
  }

  if (start === undefined) start = 0;

  const left = buffer.length - start;
  if (start < 0 || start >= buffer.length || left < 4) return;

  const len = readUInt32BE(buffer, start);
  if (left < 4 + len || (typeof maxLen === "number" && len > maxLen)) return;

  start += 4;
  const end = start + len;
  buffer._pos = end;

  if (dest) {
    // @ts-expect-error TS(2554): Expected 5 arguments, but got 4.
    if (Buffer.isBuffer(dest)) return bufferCopy(buffer, dest, start, end);
    return buffer.utf8Slice(start, end);
  }
  return bufferSlice(buffer, start, end);
};
export const sigSSHToASN1 = (sig, type) => {
  switch (type) {
    case "ssh-dss": {
      if (sig.length > 40) return sig;
      // Change bare signature r and s values to ASN.1 BER values for OpenSSL
      const asnWriter = new (Ber as any).Writer();
      asnWriter.startSequence();
      let r = sig.slice(0, 20);
      let s = sig.slice(20);
      if (r[0] & 0x80) {
        const rNew = Buffer.allocUnsafe(21);
        rNew[0] = 0x00;
        r.copy(rNew, 1);
        r = rNew;
      } else if (r[0] === 0x00 && !(r[1] & 0x80)) {
        r = r.slice(1);
      }
      if (s[0] & 0x80) {
        const sNew = Buffer.allocUnsafe(21);
        sNew[0] = 0x00;
        s.copy(sNew, 1);
        s = sNew;
      } else if (s[0] === 0x00 && !(s[1] & 0x80)) {
        s = s.slice(1);
      }
      asnWriter.writeBuffer(r, Ber.Integer);
      asnWriter.writeBuffer(s, Ber.Integer);
      asnWriter.endSequence();
      return asnWriter.buffer;
    }
    case "ecdsa-sha2-nistp256":
    case "ecdsa-sha2-nistp384":
    case "ecdsa-sha2-nistp521": {
      utilBufferParser.init(sig, 0);
      const r = utilBufferParser.readString();
      const s = utilBufferParser.readString();
      utilBufferParser.clear();
      if (r === undefined || s === undefined) return;

      const asnWriter = new (Ber as any).Writer();
      asnWriter.startSequence();
      asnWriter.writeBuffer(r, Ber.Integer);
      asnWriter.writeBuffer(s, Ber.Integer);
      asnWriter.endSequence();
      return asnWriter.buffer;
    }
    default:
      return sig;
  }
};
export const convertSignature = (signature, keyType) => {
  switch (keyType) {
    case "ssh-dss": {
      if (signature.length <= 40) return signature;
      // This is a quick and dirty way to get from BER encoded r and s that
      // OpenSSL gives us, to just the bare values back to back (40 bytes
      // total) like OpenSSH (and possibly others) are expecting
      const asnReader = new (Ber as any).Reader(signature);

      asnReader.readSequence();
      let r = asnReader.readString(Ber.Integer, true);
      let s = asnReader.readString(Ber.Integer, true);
      let rOffset = 0;
      let sOffset = 0;
      if (r.length < 20) {
        const rNew = Buffer.allocUnsafe(20);
        rNew.set(r, 1);
        r = rNew;
        r[0] = 0;
      }
      if (s.length < 20) {
        const sNew = Buffer.allocUnsafe(20);
        sNew.set(s, 1);
        s = sNew;
        s[0] = 0;
      }
      if (r.length > 20 && r[0] === 0) rOffset = 1;
      if (s.length > 20 && s[0] === 0) sOffset = 1;
      const newSig = Buffer.allocUnsafe(
        r.length - rOffset + (s.length - sOffset)
      );
      bufferCopy(r, newSig, rOffset, r.length, 0);
      bufferCopy(s, newSig, sOffset, s.length, r.length - rOffset);
      return newSig;
    }
    case "ecdsa-sha2-nistp256":
    case "ecdsa-sha2-nistp384":
    case "ecdsa-sha2-nistp521": {
      if (signature[0] === 0) return signature;
      // Convert SSH signature parameters to ASN.1 BER values for OpenSSL
      const asnReader = new (Ber as any).Reader(signature);
      asnReader.readSequence();
      const r = asnReader.readString(Ber.Integer, true);
      const s = asnReader.readString(Ber.Integer, true);
      if (r === null || s === null) return;
      const newSig = Buffer.allocUnsafe(4 + r.length + 4 + s.length);
      writeUInt32BE(newSig, r.length, 0);
      newSig.set(r, 4);
      writeUInt32BE(newSig, s.length, 4 + r.length);
      newSig.set(s, 4 + 4 + r.length);
      return newSig;
    }
  }

  return signature;
};
export const sendPacket = (
  proto?: any,
  packet?: string | Buffer,
  bypass?: boolean
) => {
  if (!bypass && proto._kexinit !== undefined) {
    // We're currently in the middle of a handshake

    if (proto._queue === undefined) proto._queue = [];
    proto._queue.push(packet);
    proto._debug && proto._debug("Outbound: ... packet queued");
    return false;
  }
  proto._cipher.encrypt(packet);
  return true;
};
export { FastBuffer };
export default {
  bufferCopy,
  bufferSlice,
  FastBuffer,
  bufferFill,
  makeError,
  doFatalError,
  readUInt32BE,
  writeUInt32BE,
  writeUInt32LE,
  makeBufferParser,
  bufferParser,
  readString,
  sigSSHToASN1,
  convertSignature,
  sendPacket,
};
