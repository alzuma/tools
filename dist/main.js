!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=8)}([function(t,e,n){"use strict";var r,i=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(){}return Object.defineProperty(t.prototype,"isEmpty",{get:function(){return!this.isPresent},enumerable:!0,configurable:!0}),t.of=function(t){if(null!=t)return new u(t);throw new TypeError("The passed value was null or undefined.")},t.ofNonNull=function(e){return t.of(e)},t.ofNullable=function(t){return null!=t?new u(t):new a},t.empty=function(){return new a},t.from=function(e){switch(e.kind){case"present":return t.of(e.value);case"empty":return t.empty();default:throw new TypeError("The passed value was not an Option type.")}},t}();e.default=o;var u=function(t){function e(e){var n=t.call(this)||this;return n.payload=e,n}return i(e,t),Object.defineProperty(e.prototype,"isPresent",{get:function(){return!0},enumerable:!0,configurable:!0}),e.prototype.get=function(){return this.payload},e.prototype.ifPresent=function(t){t(this.payload)},e.prototype.ifPresentOrElse=function(t,e){t(this.payload)},e.prototype.filter=function(t){return t(this.payload)?this:o.empty()},e.prototype.map=function(t){return o.ofNullable(t(this.payload))},e.prototype.flatMap=function(t){return t(this.payload)},e.prototype.or=function(t){return this},e.prototype.orElse=function(t){return this.payload},e.prototype.orElseGet=function(t){return this.payload},e.prototype.orElseThrow=function(t){return this.payload},e.prototype.orNull=function(){return this.payload},e.prototype.orUndefined=function(){return this.payload},e.prototype.toOption=function(){return{kind:"present",value:this.payload}},e.prototype.matches=function(t){return t.present(this.payload)},e}(o),a=function(t){function e(){return t.call(this)||this}return i(e,t),Object.defineProperty(e.prototype,"isPresent",{get:function(){return!1},enumerable:!0,configurable:!0}),e.prototype.get=function(){throw new TypeError("The optional is not present.")},e.prototype.ifPresent=function(t){},e.prototype.ifPresentOrElse=function(t,e){e()},e.prototype.filter=function(t){return this},e.prototype.map=function(t){return o.empty()},e.prototype.flatMap=function(t){return o.empty()},e.prototype.or=function(t){return t()},e.prototype.orElse=function(t){return t},e.prototype.orElseGet=function(t){return this.orElse(t())},e.prototype.orElseThrow=function(t){throw t()},e.prototype.orNull=function(){return null},e.prototype.orUndefined=function(){},e.prototype.toOption=function(){return{kind:"empty"}},e.prototype.matches=function(t){return t.empty()},e}(o)},function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",function(){return i});var i=function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r(this,"first",void 0),r(this,"second",void 0),this.first=e,this.second=n};r(i,"of",function(t,e){return new i(t,e)})},function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n(0),i=n.n(r),o=n(1);function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a=function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,"left",void 0),u(this,"right",void 0),u(this,"getLeft",function(){return i.a.ofNullable(r.left)}),u(this,"getRight",function(){return i.a.ofNullable(r.right)}),u(this,"isLeft",function(){return null!==r.left}),u(this,"isRight",function(){return null!==r.right}),u(this,"mapLeft",function(t){return r.isLeft()?i.a.of(t(r.left)):i.a.empty()}),u(this,"mapRight",function(t){return r.isRight()?i.a.of(t(r.right)):i.a.empty()}),this.left=e,this.right=n};u(a,"liftWithValue",function(t){return function(e){try{return a.Right(t(e))}catch(t){return a.Left(o.a.of(t,e))}}}),u(a,"Left",function(t){return new a(t,null)}),u(a,"Right",function(t){return new a(null,t)})},function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",function(){return i});var i=function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r(this,"value",null),r(this,"supplier",void 0),r(this,"get",function(){return null===n.value&&(n.value=n.supplier()),n.value}),r(this,"isEvaluated",function(){return null!==n.value}),this.supplier=e};r(i,"of",function(t){return new i(t)})},function(t,e){},function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",function(){return o});var o=function(){function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,"EMPTY_NODE",{value:null,next:null}),i(this,"head",null),i(this,"tail",null),i(this,"getHead",function(){return e.head}),i(this,"getTail",function(){return e.tail}),i(this,"insert",function(t){var n=e.forgeNode(t);return n.next=e.head,e.head&&(e.head.previous=n),e.head=n,e.tail||(e.tail=n),e}),i(this,"append",function(t){var n=e.forgeNode(t);return e.isEmpty()?(e.head=n,e.tail=n,e):(e.appendToTheEndOfTheList(n),e)}),i(this,"delete",function(t){var n=!1;if(e.isEmpty())return n;n=e.deleteFromHead(t);for(var r=e.head||e.EMPTY_NODE;r.next;)r.next.value===t?(n=!0,r.next=r.next.next):r=r.next;return e.tail.value===t&&(e.tail=r),n}),i(this,"find",function(t){if(e.isEmpty())return null;for(var n=e.head;n;){if(t(n.value))return n;n=n.next}return null}),i(this,"fromArray",function(t){return t.forEach(function(t){return e.append(t)}),e}),i(this,"toArray",function(){var t=[];return e.iterate(function(e){return t.push(e)}),t}),i(this,"size",function(){var t=0;return e.iterate(function(e){return t++}),t}),i(this,"isEmpty",function(){return!e.head}),i(this,"iterate",function(t){for(var n=e.head;n;)t(n.value),n=n.next}),i(this,"deleteFromHead",function(t){for(var n=!1;e.head&&e.head.value===t;)n=!0,e.head=e.head.next;return n}),i(this,"forgeNode",function(t){return{value:t,next:null}}),i(this,"appendToTheEndOfTheList",function(t){t.previous=e.tail,e.tail.next=t,e.tail=t})}var e,n,o;return e=t,(n=[{key:"items",value:regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=this.head;case 1:if(!e){t.next=7;break}return t.next=4,e;case 4:e=e.next,t.next=1;break;case 7:case"end":return t.stop()}},t,this)})}])&&r(e.prototype,n),o&&r(e,o),t}()},function(t,e){},function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",function(){return i});var i=function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r(this,"bucket",{}),r(this,"get",function(t){return e.bucket[e.generateKey(t)].value}),r(this,"set",function(t,n){e.bucket[e.generateKey(t)]={key:t,value:n}}),r(this,"remove",function(t){var n=e.generateKey(t);if(e.bucket.hasOwnProperty(n)){var r=e.bucket[n];return delete e.bucket[n],r.value}return!1}),r(this,"values",function(){var t=[];return e.iterate(function(e){return t.push(e.value)}),t}),r(this,"keys",function(){var t=[];return e.iterate(function(e){return t.push(e.key)}),t}),r(this,"containsKey",function(t){return e.bucket.hasOwnProperty(e.generateKey(t))}),r(this,"clear",function(){return e.bucket={}}),r(this,"size",function(){return Object.keys(e.bucket).length}),r(this,"iterate",function(t){for(var n in e.bucket){if(e.bucket.hasOwnProperty(n))t(e.bucket[n])}}),r(this,"generateKey",function(t){return"x"+t.toString()})}},function(t,e,n){"use strict";n.r(e);var r=n(2);n.d(e,"Either",function(){return r.a});var i=n(3);n.d(e,"Lazy",function(){return i.a});var o=n(1);n.d(e,"Pair",function(){return o.a});var u=n(4);for(var a in u)["Either","Lazy","Pair","default"].indexOf(a)<0&&function(t){n.d(e,t,function(){return u[t]})}(a);var f=n(5);n.d(e,"LinkedList",function(){return f.a});var c=n(6);for(var a in c)["Either","Lazy","Pair","LinkedList","default"].indexOf(a)<0&&function(t){n.d(e,t,function(){return c[t]})}(a);var l=n(7);n.d(e,"Dictionary",function(){return l.a})}]);
//# sourceMappingURL=main.js.map