cmd_Release/obj.target/sshcrypto/src/binding.o := c++ -o Release/obj.target/sshcrypto/src/binding.o ../src/binding.cc '-DNODE_GYP_MODULE_NAME=sshcrypto' '-DUSING_UV_SHARED=1' '-DUSING_V8_SHARED=1' '-DV8_DEPRECATION_WARNINGS=1' '-DV8_DEPRECATION_WARNINGS' '-DV8_IMMINENT_DEPRECATION_WARNINGS' '-D_GLIBCXX_USE_CXX11_ABI=1' '-D_DARWIN_USE_64_BIT_INODE=1' '-D_LARGEFILE_SOURCE' '-D_FILE_OFFSET_BITS=64' '-DOPENSSL_API_COMPAT=0x10100000L' '-DREAL_OPENSSL_MAJOR=1' '-DBUILDING_NODE_EXTENSION' -I/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node -I/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/src -I/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/deps/openssl/config -I/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/deps/openssl/openssl/include -I/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/deps/uv/include -I/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/deps/zlib -I/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/deps/v8/include -I../../../../node_modules/nan  -O3 -gdwarf-2 -flto -mmacosx-version-min=10.15 -arch arm64 -Wall -Wendif-labels -W -Wno-unused-parameter -std=gnu++17 -stdlib=libc++ -fno-rtti -fno-exceptions -fno-strict-aliasing -MMD -MF ./Release/.deps/Release/obj.target/sshcrypto/src/binding.o.d.raw -I/opt/homebrew/opt/curl/include  -c
Release/obj.target/sshcrypto/src/binding.o: ../src/binding.cc \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/node.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/cppgc/common.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8config.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-array-buffer.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-local-handle.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-internal.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-version.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-object.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-maybe.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-persistent-handle.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-weak-callback-info.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-primitive.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-data.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-value.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-traced-handle.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-container.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-context.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-snapshot.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-date.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-debug.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-script.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-message.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-exception.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-extension.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-external.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-function.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-function-callback.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-template.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-memory-span.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-initialization.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-callbacks.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-isolate.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-embedder-heap.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-microtask.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-statistics.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-promise.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-unwinder.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-embedder-state-scope.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-platform.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-json.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-locker.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-microtask-queue.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-primitive-object.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-proxy.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-regexp.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-typed-array.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-value-serializer.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-wasm.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/node_version.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/node_buffer.h \
  ../../../../node_modules/nan/nan.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/uv.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/uv/errno.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/uv/version.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/uv/unix.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/uv/threadpool.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/uv/darwin.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/node_object_wrap.h \
  ../../../../node_modules/nan/nan_callbacks.h \
  ../../../../node_modules/nan/nan_callbacks_12_inl.h \
  ../../../../node_modules/nan/nan_maybe_43_inl.h \
  ../../../../node_modules/nan/nan_converters.h \
  ../../../../node_modules/nan/nan_converters_43_inl.h \
  ../../../../node_modules/nan/nan_new.h \
  ../../../../node_modules/nan/nan_implementation_12_inl.h \
  ../../../../node_modules/nan/nan_persistent_12_inl.h \
  ../../../../node_modules/nan/nan_weak.h \
  ../../../../node_modules/nan/nan_object_wrap.h \
  ../../../../node_modules/nan/nan_private.h \
  ../../../../node_modules/nan/nan_typedarray_contents.h \
  ../../../../node_modules/nan/nan_json.h \
  ../../../../node_modules/nan/nan_scriptorigin.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/configuration.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/./configuration_asm.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/./archs/darwin64-arm64-cc/asm/include/openssl/configuration.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/err.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/./err_asm.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/./archs/darwin64-arm64-cc/asm/include/openssl/err.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/macros.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/opensslconf.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/opensslv.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/./opensslv_asm.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/./archs/darwin64-arm64-cc/asm/include/openssl/opensslv.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/e_os2.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/types.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/safestack.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/./safestack_asm.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/./archs/darwin64-arm64-cc/asm/include/openssl/safestack.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/stack.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/bio.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/./bio_asm.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/./archs/darwin64-arm64-cc/asm/include/openssl/bio.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/crypto.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/./crypto_asm.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/./archs/darwin64-arm64-cc/asm/include/openssl/crypto.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/cryptoerr.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/symhacks.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/cryptoerr_legacy.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/core.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/bioerr.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/lhash.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/./lhash_asm.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/./archs/darwin64-arm64-cc/asm/include/openssl/lhash.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/evp.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/core_dispatch.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/evperr.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/params.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/bn.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/bnerr.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/objects.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/obj_mac.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/asn1.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/./asn1_asm.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/./archs/darwin64-arm64-cc/asm/include/openssl/asn1.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/asn1err.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/objectserr.h \
  /Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/hmac.h
../src/binding.cc:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/node.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/cppgc/common.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8config.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-array-buffer.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-local-handle.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-internal.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-version.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-object.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-maybe.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-persistent-handle.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-weak-callback-info.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-primitive.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-data.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-value.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-traced-handle.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-container.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-context.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-snapshot.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-date.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-debug.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-script.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-message.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-exception.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-extension.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-external.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-function.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-function-callback.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-template.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-memory-span.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-initialization.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-callbacks.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-isolate.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-embedder-heap.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-microtask.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-statistics.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-promise.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-unwinder.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-embedder-state-scope.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-platform.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-json.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-locker.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-microtask-queue.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-primitive-object.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-proxy.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-regexp.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-typed-array.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-value-serializer.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/v8-wasm.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/node_version.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/node_buffer.h:
../../../../node_modules/nan/nan.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/uv.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/uv/errno.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/uv/version.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/uv/unix.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/uv/threadpool.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/uv/darwin.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/node_object_wrap.h:
../../../../node_modules/nan/nan_callbacks.h:
../../../../node_modules/nan/nan_callbacks_12_inl.h:
../../../../node_modules/nan/nan_maybe_43_inl.h:
../../../../node_modules/nan/nan_converters.h:
../../../../node_modules/nan/nan_converters_43_inl.h:
../../../../node_modules/nan/nan_new.h:
../../../../node_modules/nan/nan_implementation_12_inl.h:
../../../../node_modules/nan/nan_persistent_12_inl.h:
../../../../node_modules/nan/nan_weak.h:
../../../../node_modules/nan/nan_object_wrap.h:
../../../../node_modules/nan/nan_private.h:
../../../../node_modules/nan/nan_typedarray_contents.h:
../../../../node_modules/nan/nan_json.h:
../../../../node_modules/nan/nan_scriptorigin.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/configuration.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/./configuration_asm.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/./archs/darwin64-arm64-cc/asm/include/openssl/configuration.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/err.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/./err_asm.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/./archs/darwin64-arm64-cc/asm/include/openssl/err.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/macros.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/opensslconf.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/opensslv.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/./opensslv_asm.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/./archs/darwin64-arm64-cc/asm/include/openssl/opensslv.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/e_os2.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/types.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/safestack.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/./safestack_asm.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/./archs/darwin64-arm64-cc/asm/include/openssl/safestack.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/stack.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/bio.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/./bio_asm.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/./archs/darwin64-arm64-cc/asm/include/openssl/bio.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/crypto.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/./crypto_asm.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/./archs/darwin64-arm64-cc/asm/include/openssl/crypto.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/cryptoerr.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/symhacks.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/cryptoerr_legacy.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/core.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/bioerr.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/lhash.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/./lhash_asm.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/./archs/darwin64-arm64-cc/asm/include/openssl/lhash.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/evp.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/core_dispatch.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/evperr.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/params.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/bn.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/bnerr.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/objects.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/obj_mac.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/asn1.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/./asn1_asm.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/./archs/darwin64-arm64-cc/asm/include/openssl/asn1.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/asn1err.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/objectserr.h:
/Users/jonlucadecaro/Library/Caches/node-gyp/18.7.0/include/node/openssl/hmac.h:
