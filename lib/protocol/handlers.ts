import { HANDLERS } from "./kex";
import { MISC_HANDLERS } from "./handlers.misc";

export const MESSAGE_HANDLERS = new Array(256);

[HANDLERS, MISC_HANDLERS].forEach((handlers) => {
  for (let [type, handler] of Object.entries(handlers || {})) {
    const _type = Number(type);
    if (isFinite(_type) && _type >= 0 && _type < MESSAGE_HANDLERS.length)
      MESSAGE_HANDLERS[type] = handler;
  }
});

export default MESSAGE_HANDLERS;
