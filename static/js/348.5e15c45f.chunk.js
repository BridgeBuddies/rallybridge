"use strict";(self.webpackChunktest_ui=self.webpackChunktest_ui||[]).push([[348],{38348:function(e,n,r){var t,_={};_.__wbindgen_placeholder__=e.exports;var o=r(94498),i=o.TextDecoder,a=o.TextEncoder,c=new i("utf-8",{ignoreBOM:!0,fatal:!0});c.decode();var u=null;function l(){return null!==u&&u.buffer===t.memory.buffer||(u=new Uint8Array(t.memory.buffer)),u}function s(e,n){return c.decode(l().subarray(e,e+n))}var f=new Array(32).fill(void 0);f.push(void 0,null,!0,!1);var d=f.length;function g(e){d===f.length&&f.push(f.length+1);var n=d;return d=f[n],f[n]=e,n}function p(e){return f[e]}function b(e){var n=p(e);return function(e){e<36||(f[e]=d,d=e)}(e),n}var w=0,h=new a("utf-8"),v="function"===typeof h.encodeInto?function(e,n){return h.encodeInto(e,n)}:function(e,n){var r=h.encode(e);return n.set(r),{read:e.length,written:r.length}};function y(e,n,r){if(void 0===r){var t=h.encode(e),_=n(t.length);return l().subarray(_,_+t.length).set(t),w=t.length,_}for(var o=e.length,i=n(o),a=l(),c=0;c<o;c++){var u=e.charCodeAt(c);if(u>127)break;a[i+c]=u}if(c!==o){0!==c&&(e=e.slice(c)),i=r(i,o,o=c+3*e.length);var s=l().subarray(i+c,i+o);c+=v(e,s).written}return w=c,i}function m(e){return void 0===e||null===e}var x=null;function A(){return null!==x&&x.buffer===t.memory.buffer||(x=new Int32Array(t.memory.buffer)),x}var k=null;function C(e){var n=typeof e;if("number"==n||"boolean"==n||null==e)return""+e;if("string"==n)return'"'+e+'"';if("symbol"==n){var r=e.description;return null==r?"Symbol":"Symbol("+r+")"}if("function"==n){var t=e.name;return"string"==typeof t&&t.length>0?"Function("+t+")":"Function"}if(Array.isArray(e)){var _=e.length,o="[";_>0&&(o+=C(e[0]));for(var i=1;i<_;i++)o+=", "+C(e[i]);return o+="]"}var a,c=/\[object ([^\]]+)\]/.exec(toString.call(e));if(!(c.length>1))return toString.call(e);if("Object"==(a=c[1]))try{return"Object("+JSON.stringify(e)+")"}catch(u){return"Object"}return e instanceof Error?e.name+": "+e.message+"\n"+e.stack:a}var S=new Uint32Array(2),j=new BigUint64Array(S.buffer);function O(e,n){return l().subarray(e/1,e/1+n)}function W(e,n){if(!(e instanceof n))throw new Error("expected instance of "+n.name);return e.ptr}e.exports.add_liquidity=function(e,n,r,_,o,i){var a=y(e,t.__wbindgen_malloc,t.__wbindgen_realloc),c=w,u=y(n,t.__wbindgen_malloc,t.__wbindgen_realloc),l=w,s=y(r,t.__wbindgen_malloc,t.__wbindgen_realloc),f=w,d=y(_,t.__wbindgen_malloc,t.__wbindgen_realloc),g=w,p=y(o,t.__wbindgen_malloc,t.__wbindgen_realloc),h=w;j[0]=i;var v=S[0],m=S[1];return b(t.add_liquidity(a,c,u,l,s,f,d,g,p,h,v,m))},e.exports.remove_liquidity=function(e,n,r,_,o,i){var a=y(e,t.__wbindgen_malloc,t.__wbindgen_realloc),c=w,u=y(n,t.__wbindgen_malloc,t.__wbindgen_realloc),l=w,s=y(r,t.__wbindgen_malloc,t.__wbindgen_realloc),f=w,d=y(_,t.__wbindgen_malloc,t.__wbindgen_realloc),g=w,p=y(o,t.__wbindgen_malloc,t.__wbindgen_realloc),h=w;j[0]=i;var v=S[0],m=S[1];return b(t.remove_liquidity(a,c,u,l,s,f,d,g,p,h,v,m))},e.exports.claim_shares=function(e,n,r,_,o,i){var a=y(e,t.__wbindgen_malloc,t.__wbindgen_realloc),c=w,u=y(n,t.__wbindgen_malloc,t.__wbindgen_realloc),l=w,s=y(r,t.__wbindgen_malloc,t.__wbindgen_realloc),f=w,d=y(_,t.__wbindgen_malloc,t.__wbindgen_realloc),g=w,p=y(o,t.__wbindgen_malloc,t.__wbindgen_realloc),h=w;j[0]=i;var v=S[0],m=S[1];return b(t.claim_shares(a,c,u,l,s,f,d,g,p,h,v,m))},e.exports.create_pool=function(e,n,r,_){var o=y(e,t.__wbindgen_malloc,t.__wbindgen_realloc),i=w,a=y(n,t.__wbindgen_malloc,t.__wbindgen_realloc),c=w,u=y(r,t.__wbindgen_malloc,t.__wbindgen_realloc),l=w,s=y(_,t.__wbindgen_malloc,t.__wbindgen_realloc),f=w;return b(t.create_pool(o,i,a,c,u,l,s,f))},e.exports.migrate_tokens=function(e,n,r,_,o,i){var a=y(e,t.__wbindgen_malloc,t.__wbindgen_realloc),c=w,u=y(n,t.__wbindgen_malloc,t.__wbindgen_realloc),l=w,s=y(r,t.__wbindgen_malloc,t.__wbindgen_realloc),f=w,d=y(_,t.__wbindgen_malloc,t.__wbindgen_realloc),g=w,p=y(o,t.__wbindgen_malloc,t.__wbindgen_realloc),h=w;j[0]=i;var v=S[0],m=S[1];return b(t.migrate_tokens(a,c,u,l,s,f,d,g,p,h,v,m))},e.exports.pool_address=function(e,n,r){try{var _=t.__wbindgen_add_to_stack_pointer(-16),o=y(e,t.__wbindgen_malloc,t.__wbindgen_realloc),i=w,a=y(n,t.__wbindgen_malloc,t.__wbindgen_realloc),c=w,u=y(r,t.__wbindgen_malloc,t.__wbindgen_realloc),l=w;t.pool_address(_,o,i,a,c,u,l);var s=A()[_/4+0],f=A()[_/4+1],d=O(s,f).slice();return t.__wbindgen_free(s,1*f),d}finally{t.__wbindgen_add_to_stack_pointer(16)}},e.exports.authority_address=function(e){try{var n=t.__wbindgen_add_to_stack_pointer(-16),r=y(e,t.__wbindgen_malloc,t.__wbindgen_realloc),_=w;t.authority_address(n,r,_);var o=A()[n/4+0],i=A()[n/4+1],a=O(o,i).slice();return t.__wbindgen_free(o,1*i),a}finally{t.__wbindgen_add_to_stack_pointer(16)}},e.exports.share_mint_address=function(e,n){try{var r=t.__wbindgen_add_to_stack_pointer(-16),_=y(e,t.__wbindgen_malloc,t.__wbindgen_realloc),o=w,i=y(n,t.__wbindgen_malloc,t.__wbindgen_realloc),a=w;t.share_mint_address(r,_,o,i,a);var c=A()[r/4+0],u=A()[r/4+1],l=O(c,u).slice();return t.__wbindgen_free(c,1*u),l}finally{t.__wbindgen_add_to_stack_pointer(16)}},e.exports.from_custody_address=function(e,n){try{var r=t.__wbindgen_add_to_stack_pointer(-16),_=y(e,t.__wbindgen_malloc,t.__wbindgen_realloc),o=w,i=y(n,t.__wbindgen_malloc,t.__wbindgen_realloc),a=w;t.from_custody_address(r,_,o,i,a);var c=A()[r/4+0],u=A()[r/4+1],l=O(c,u).slice();return t.__wbindgen_free(c,1*u),l}finally{t.__wbindgen_add_to_stack_pointer(16)}},e.exports.to_custody_address=function(e,n){try{var r=t.__wbindgen_add_to_stack_pointer(-16),_=y(e,t.__wbindgen_malloc,t.__wbindgen_realloc),o=w,i=y(n,t.__wbindgen_malloc,t.__wbindgen_realloc),a=w;t.to_custody_address(r,_,o,i,a);var c=A()[r/4+0],u=A()[r/4+1],l=O(c,u).slice();return t.__wbindgen_free(c,1*u),l}finally{t.__wbindgen_add_to_stack_pointer(16)}},e.exports.parse_pool=function(e){var n=function(e,n){var r=n(1*e.length);return l().set(e,r/1),w=e.length,r}(e,t.__wbindgen_malloc),r=w;return b(t.parse_pool(n,r))},e.exports.init=function(){t.init()};var N=null;function I(e,n){for(var r=n(4*e.length),_=(null!==N&&N.buffer===t.memory.buffer||(N=new Uint32Array(t.memory.buffer)),N),o=0;o<e.length;o++)_[r/4+o]=g(e[o]);return w=e.length,r}function q(e,n){try{return e.apply(this,n)}catch(r){t.__wbindgen_exn_store(g(r))}}var E=function(){function e(n){var r=t.hash_constructor(g(n));return e.__wrap(r)}return e.__wrap=function(n){var r=Object.create(e.prototype);return r.ptr=n,r},e.prototype.__destroy_into_raw=function(){var e=this.ptr;return this.ptr=0,e},e.prototype.free=function(){var e=this.__destroy_into_raw();t.__wbg_hash_free(e)},e.prototype.toString=function(){try{var e=t.__wbindgen_add_to_stack_pointer(-16);t.hash_toString(e,this.ptr);var n=A()[e/4+0],r=A()[e/4+1];return s(n,r)}finally{t.__wbindgen_add_to_stack_pointer(16),t.__wbindgen_free(n,r)}},e.prototype.equals=function(n){return W(n,e),0!==t.hash_equals(this.ptr,n.ptr)},e.prototype.toBytes=function(){try{var e=t.__wbindgen_add_to_stack_pointer(-16);t.hash_toBytes(e,this.ptr);var n=A()[e/4+0],r=A()[e/4+1],_=O(n,r).slice();return t.__wbindgen_free(n,1*r),_}finally{t.__wbindgen_add_to_stack_pointer(16)}},e}();e.exports.Hash=E;var P=function(){function e(){}return e.__wrap=function(n){var r=Object.create(e.prototype);return r.ptr=n,r},e.prototype.__destroy_into_raw=function(){var e=this.ptr;return this.ptr=0,e},e.prototype.free=function(){var e=this.__destroy_into_raw();t.__wbg_instruction_free(e)},e}();e.exports.Instruction=P;var U=function(){function e(){var n=t.instructions_constructor();return e.__wrap(n)}return e.__wrap=function(n){var r=Object.create(e.prototype);return r.ptr=n,r},e.prototype.__destroy_into_raw=function(){var e=this.ptr;return this.ptr=0,e},e.prototype.free=function(){var e=this.__destroy_into_raw();t.__wbg_instructions_free(e)},e.prototype.push=function(e){W(e,P);var n=e.ptr;e.ptr=0,t.instructions_push(this.ptr,n)},e}();e.exports.Instructions=U;var B=function(){function e(){}return e.prototype.__destroy_into_raw=function(){var e=this.ptr;return this.ptr=0,e},e.prototype.free=function(){var e=this.__destroy_into_raw();t.__wbg_message_free(e)},Object.defineProperty(e.prototype,"recent_blockhash",{get:function(){var e=t.__wbg_get_message_recent_blockhash(this.ptr);return E.__wrap(e)},set:function(e){W(e,E);var n=e.ptr;e.ptr=0,t.__wbg_set_message_recent_blockhash(this.ptr,n)},enumerable:!1,configurable:!0}),e}();e.exports.Message=B;var T=function(){function e(n){var r=t.pubkey_constructor(g(n));return e.__wrap(r)}return e.__wrap=function(n){var r=Object.create(e.prototype);return r.ptr=n,r},e.prototype.__destroy_into_raw=function(){var e=this.ptr;return this.ptr=0,e},e.prototype.free=function(){var e=this.__destroy_into_raw();t.__wbg_pubkey_free(e)},e.prototype.toString=function(){try{var e=t.__wbindgen_add_to_stack_pointer(-16);t.pubkey_toString(e,this.ptr);var n=A()[e/4+0],r=A()[e/4+1];return s(n,r)}finally{t.__wbindgen_add_to_stack_pointer(16),t.__wbindgen_free(n,r)}},e.prototype.isOnCurve=function(){return 0!==t.pubkey_isOnCurve(this.ptr)},e.prototype.equals=function(n){return W(n,e),0!==t.pubkey_equals(this.ptr,n.ptr)},e.prototype.toBytes=function(){try{var e=t.__wbindgen_add_to_stack_pointer(-16);t.pubkey_toBytes(e,this.ptr);var n=A()[e/4+0],r=A()[e/4+1],_=O(n,r).slice();return t.__wbindgen_free(n,1*r),_}finally{t.__wbindgen_add_to_stack_pointer(16)}},e.createWithSeed=function(n,r,_){W(n,e);var o=y(r,t.__wbindgen_malloc,t.__wbindgen_realloc),i=w;W(_,e);var a=t.pubkey_createWithSeed(n.ptr,o,i,_.ptr);return e.__wrap(a)},e.createProgramAddress=function(n,r){var _=I(n,t.__wbindgen_malloc),o=w;W(r,e);var i=t.pubkey_createProgramAddress(_,o,r.ptr);return e.__wrap(i)},e.findProgramAddress=function(n,r){var _=I(n,t.__wbindgen_malloc),o=w;return W(r,e),b(t.pubkey_findProgramAddress(_,o,r.ptr))},e}();e.exports.Pubkey=T;var z=function(){function e(){}return e.prototype.__destroy_into_raw=function(){var e=this.ptr;return this.ptr=0,e},e.prototype.free=function(){var e=this.__destroy_into_raw();t.__wbg_systeminstruction_free(e)},e.createAccount=function(e,n,r,_,o){W(e,T),W(n,T),j[0]=r;var i=S[0],a=S[1];j[0]=_;var c=S[0],u=S[1];W(o,T);var l=t.systeminstruction_createAccount(e.ptr,n.ptr,i,a,c,u,o.ptr);return P.__wrap(l)},e.createAccountWithSeed=function(e,n,r,_,o,i,a){W(e,T),W(n,T),W(r,T);var c=y(_,t.__wbindgen_malloc,t.__wbindgen_realloc),u=w;j[0]=o;var l=S[0],s=S[1];j[0]=i;var f=S[0],d=S[1];W(a,T);var g=t.systeminstruction_createAccountWithSeed(e.ptr,n.ptr,r.ptr,c,u,l,s,f,d,a.ptr);return P.__wrap(g)},e.assign=function(e,n){W(e,T),W(n,T);var r=t.systeminstruction_assign(e.ptr,n.ptr);return P.__wrap(r)},e.assignWithSeed=function(e,n,r,_){W(e,T),W(n,T);var o=y(r,t.__wbindgen_malloc,t.__wbindgen_realloc),i=w;W(_,T);var a=t.systeminstruction_assignWithSeed(e.ptr,n.ptr,o,i,_.ptr);return P.__wrap(a)},e.transfer=function(e,n,r){W(e,T),W(n,T),j[0]=r;var _=S[0],o=S[1],i=t.systeminstruction_transfer(e.ptr,n.ptr,_,o);return P.__wrap(i)},e.transferWithSeed=function(e,n,r,_,o,i){W(e,T),W(n,T);var a=y(r,t.__wbindgen_malloc,t.__wbindgen_realloc),c=w;W(_,T),W(o,T),j[0]=i;var u=S[0],l=S[1],s=t.systeminstruction_transferWithSeed(e.ptr,n.ptr,a,c,_.ptr,o.ptr,u,l);return P.__wrap(s)},e.allocate=function(e,n){W(e,T),j[0]=n;var r=S[0],_=S[1],o=t.systeminstruction_allocate(e.ptr,r,_);return P.__wrap(o)},e.allocateWithSeed=function(e,n,r,_,o){W(e,T),W(n,T);var i=y(r,t.__wbindgen_malloc,t.__wbindgen_realloc),a=w;j[0]=_;var c=S[0],u=S[1];W(o,T);var l=t.systeminstruction_allocateWithSeed(e.ptr,n.ptr,i,a,c,u,o.ptr);return P.__wrap(l)},e.createNonceAccount=function(e,n,r,_){W(e,T),W(n,T),W(r,T),j[0]=_;var o=S[0],i=S[1];return b(t.systeminstruction_createNonceAccount(e.ptr,n.ptr,r.ptr,o,i))},e.advanceNonceAccount=function(e,n){W(e,T),W(n,T);var r=t.systeminstruction_advanceNonceAccount(e.ptr,n.ptr);return P.__wrap(r)},e.withdrawNonceAccount=function(e,n,r,_){W(e,T),W(n,T),W(r,T),j[0]=_;var o=S[0],i=S[1],a=t.systeminstruction_withdrawNonceAccount(e.ptr,n.ptr,r.ptr,o,i);return P.__wrap(a)},e.authorizeNonceAccount=function(e,n,r){W(e,T),W(n,T),W(r,T);var _=t.systeminstruction_authorizeNonceAccount(e.ptr,n.ptr,r.ptr);return P.__wrap(_)},e}();e.exports.SystemInstruction=z,e.exports.__wbindgen_json_parse=function(e,n){return g(JSON.parse(s(e,n)))},e.exports.__wbg_instruction_new=function(e){return g(P.__wrap(e))},e.exports.__wbindgen_object_drop_ref=function(e){b(e)},e.exports.__wbindgen_string_new=function(e,n){return g(s(e,n))},e.exports.__wbg_pubkey_new=function(e){return g(T.__wrap(e))},e.exports.__wbindgen_string_get=function(e,n){var r=p(n),_="string"===typeof r?r:void 0,o=m(_)?0:y(_,t.__wbindgen_malloc,t.__wbindgen_realloc),i=w;A()[e/4+1]=i,A()[e/4+0]=o},e.exports.__wbindgen_is_undefined=function(e){return void 0===p(e)},e.exports.__wbindgen_number_get=function(e,n){var r=p(n),_="number"===typeof r?r:void 0;(null!==k&&k.buffer===t.memory.buffer||(k=new Float64Array(t.memory.buffer)),k)[e/8+1]=m(_)?0:_,A()[e/4+0]=!m(_)},e.exports.__wbindgen_number_new=function(e){return g(e)},e.exports.__wbg_debug_675b0ecb65722d2a=function(e){console.debug(p(e))},e.exports.__wbg_error_cc38ce2b4b661e1d=function(e){console.error(p(e))},e.exports.__wbg_info_e0c9813e6fd3bdc1=function(e){console.info(p(e))},e.exports.__wbg_log_3445347661d4505e=function(e){console.log(p(e))},e.exports.__wbg_warn_5ec7c7c02d0b3841=function(e){console.warn(p(e))},e.exports.__wbg_new_693216e109162396=function(){return g(new Error)},e.exports.__wbg_stack_0ddaca5d1abfb52f=function(e,n){var r=y(p(n).stack,t.__wbindgen_malloc,t.__wbindgen_realloc),_=w;A()[e/4+1]=_,A()[e/4+0]=r},e.exports.__wbg_error_09919627ac0992f5=function(e,n){try{console.error(s(e,n))}finally{t.__wbindgen_free(e,n)}},e.exports.__wbg_new_949bbc1147195c4e=function(){return g(new Array)},e.exports.__wbindgen_is_function=function(e){return"function"===typeof p(e)},e.exports.__wbindgen_is_object=function(e){var n=p(e);return"object"===typeof n&&null!==n},e.exports.__wbg_next_c4151d46d5fa7097=function(e){return g(p(e).next)},e.exports.__wbg_next_7720502039b96d00=function(){return q((function(e){return g(p(e).next())}),arguments)},e.exports.__wbg_done_b06cf0578e89ff68=function(e){return p(e).done},e.exports.__wbg_value_e74a542443d92451=function(e){return g(p(e).value)},e.exports.__wbg_iterator_4fc4ce93e6b92958=function(){return g(Symbol.iterator)},e.exports.__wbg_get_4d0f21c2f823742e=function(){return q((function(e,n){return g(Reflect.get(p(e),p(n)))}),arguments)},e.exports.__wbg_call_888d259a5fefc347=function(){return q((function(e,n){return g(p(e).call(p(n)))}),arguments)},e.exports.__wbg_newwithlength_75ee2b96c288e6bc=function(e){return g(new Array(e>>>0))},e.exports.__wbg_set_1820441f7fb79aad=function(e,n,r){p(e)[n>>>0]=b(r)},e.exports.__wbg_isArray_eb7ad55f2da67dde=function(e){return Array.isArray(p(e))},e.exports.__wbg_push_284486ca27c6aa8b=function(e,n){return p(e).push(p(n))},e.exports.__wbg_values_364ae56c608e6824=function(e){return g(p(e).values())},e.exports.__wbg_buffer_397eaa4d72ee94dd=function(e){return g(p(e).buffer)},e.exports.__wbg_new_a7ce447f15ff496f=function(e){return g(new Uint8Array(p(e)))},e.exports.__wbg_set_969ad0a60e51d320=function(e,n,r){p(e).set(p(n),r>>>0)},e.exports.__wbg_length_1eb8fc608a0d4cdb=function(e){return p(e).length},e.exports.__wbg_instanceof_Uint8Array_08a1f3a179095e76=function(e){return p(e)instanceof Uint8Array},e.exports.__wbindgen_debug_string=function(e,n){var r=y(C(p(n)),t.__wbindgen_malloc,t.__wbindgen_realloc),_=w;A()[e/4+1]=_,A()[e/4+0]=r},e.exports.__wbindgen_throw=function(e,n){throw new Error(s(e,n))},e.exports.__wbindgen_rethrow=function(e){throw b(e)},e.exports.__wbindgen_memory=function(){return g(t.memory)};var F=r(53774).join("/","wormhole_migration_bg.wasm"),J=r(99474).readFileSync(F),M=new WebAssembly.Module(J),R=new WebAssembly.Instance(M,_);t=R.exports,e.exports.__wasm=t},53774:function(e,n,r){var t=r(54501);function _(e){if("string"!==typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function o(e,n){for(var r,t="",_=0,o=-1,i=0,a=0;a<=e.length;++a){if(a<e.length)r=e.charCodeAt(a);else{if(47===r)break;r=47}if(47===r){if(o===a-1||1===i);else if(o!==a-1&&2===i){if(t.length<2||2!==_||46!==t.charCodeAt(t.length-1)||46!==t.charCodeAt(t.length-2))if(t.length>2){var c=t.lastIndexOf("/");if(c!==t.length-1){-1===c?(t="",_=0):_=(t=t.slice(0,c)).length-1-t.lastIndexOf("/"),o=a,i=0;continue}}else if(2===t.length||1===t.length){t="",_=0,o=a,i=0;continue}n&&(t.length>0?t+="/..":t="..",_=2)}else t.length>0?t+="/"+e.slice(o+1,a):t=e.slice(o+1,a),_=a-o-1;o=a,i=0}else 46===r&&-1!==i?++i:i=-1}return t}var i={resolve:function(){for(var e,n="",r=!1,i=arguments.length-1;i>=-1&&!r;i--){var a;i>=0?a=arguments[i]:(void 0===e&&(e=t.cwd()),a=e),_(a),0!==a.length&&(n=a+"/"+n,r=47===a.charCodeAt(0))}return n=o(n,!r),r?n.length>0?"/"+n:"/":n.length>0?n:"."},normalize:function(e){if(_(e),0===e.length)return".";var n=47===e.charCodeAt(0),r=47===e.charCodeAt(e.length-1);return 0!==(e=o(e,!n)).length||n||(e="."),e.length>0&&r&&(e+="/"),n?"/"+e:e},isAbsolute:function(e){return _(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,n=0;n<arguments.length;++n){var r=arguments[n];_(r),r.length>0&&(void 0===e?e=r:e+="/"+r)}return void 0===e?".":i.normalize(e)},relative:function(e,n){if(_(e),_(n),e===n)return"";if((e=i.resolve(e))===(n=i.resolve(n)))return"";for(var r=1;r<e.length&&47===e.charCodeAt(r);++r);for(var t=e.length,o=t-r,a=1;a<n.length&&47===n.charCodeAt(a);++a);for(var c=n.length-a,u=o<c?o:c,l=-1,s=0;s<=u;++s){if(s===u){if(c>u){if(47===n.charCodeAt(a+s))return n.slice(a+s+1);if(0===s)return n.slice(a+s)}else o>u&&(47===e.charCodeAt(r+s)?l=s:0===s&&(l=0));break}var f=e.charCodeAt(r+s);if(f!==n.charCodeAt(a+s))break;47===f&&(l=s)}var d="";for(s=r+l+1;s<=t;++s)s!==t&&47!==e.charCodeAt(s)||(0===d.length?d+="..":d+="/..");return d.length>0?d+n.slice(a+l):(a+=l,47===n.charCodeAt(a)&&++a,n.slice(a))},_makeLong:function(e){return e},dirname:function(e){if(_(e),0===e.length)return".";for(var n=e.charCodeAt(0),r=47===n,t=-1,o=!0,i=e.length-1;i>=1;--i)if(47===(n=e.charCodeAt(i))){if(!o){t=i;break}}else o=!1;return-1===t?r?"/":".":r&&1===t?"//":e.slice(0,t)},basename:function(e,n){if(void 0!==n&&"string"!==typeof n)throw new TypeError('"ext" argument must be a string');_(e);var r,t=0,o=-1,i=!0;if(void 0!==n&&n.length>0&&n.length<=e.length){if(n.length===e.length&&n===e)return"";var a=n.length-1,c=-1;for(r=e.length-1;r>=0;--r){var u=e.charCodeAt(r);if(47===u){if(!i){t=r+1;break}}else-1===c&&(i=!1,c=r+1),a>=0&&(u===n.charCodeAt(a)?-1===--a&&(o=r):(a=-1,o=c))}return t===o?o=c:-1===o&&(o=e.length),e.slice(t,o)}for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!i){t=r+1;break}}else-1===o&&(i=!1,o=r+1);return-1===o?"":e.slice(t,o)},extname:function(e){_(e);for(var n=-1,r=0,t=-1,o=!0,i=0,a=e.length-1;a>=0;--a){var c=e.charCodeAt(a);if(47!==c)-1===t&&(o=!1,t=a+1),46===c?-1===n?n=a:1!==i&&(i=1):-1!==n&&(i=-1);else if(!o){r=a+1;break}}return-1===n||-1===t||0===i||1===i&&n===t-1&&n===r+1?"":e.slice(n,t)},format:function(e){if(null===e||"object"!==typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,n){var r=n.dir||n.root,t=n.base||(n.name||"")+(n.ext||"");return r?r===n.root?r+t:r+e+t:t}("/",e)},parse:function(e){_(e);var n={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return n;var r,t=e.charCodeAt(0),o=47===t;o?(n.root="/",r=1):r=0;for(var i=-1,a=0,c=-1,u=!0,l=e.length-1,s=0;l>=r;--l)if(47!==(t=e.charCodeAt(l)))-1===c&&(u=!1,c=l+1),46===t?-1===i?i=l:1!==s&&(s=1):-1!==i&&(s=-1);else if(!u){a=l+1;break}return-1===i||-1===c||0===s||1===s&&i===c-1&&i===a+1?-1!==c&&(n.base=n.name=0===a&&o?e.slice(1,c):e.slice(a,c)):(0===a&&o?(n.name=e.slice(1,i),n.base=e.slice(1,c)):(n.name=e.slice(a,i),n.base=e.slice(a,c)),n.ext=e.slice(i,c)),a>0?n.dir=e.slice(0,a-1):o&&(n.dir="/"),n},sep:"/",delimiter:":",win32:null,posix:null};i.posix=i,e.exports=i}}]);
//# sourceMappingURL=348.5e15c45f.chunk.js.map