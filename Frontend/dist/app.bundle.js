webpackJsonp([0],{225:function(t,e,n){t.exports=n(226)},226:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(39),o=n(66),a=n(227);o.render(r.createElement(a.Dashboard,null),document.getElementById("dashboardContainer"))},227:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(39),a=n(228),i=function(t){function e(e){var n=t.call(this,e)||this;return n.state={place:""},n}return r(e,t),e.prototype.render=function(){return o.createElement("div",{id:"dashboard"},this.state.place&&o.createElement("label",null," How about ",this.state.place,"?"))},e.prototype.componentDidMount=function(){var t=this;a.get("/api/Place").then(function(e){t.setState({place:e.place})})},e}(o.Component);e.Dashboard=i},228:function(t,e,n){"use strict";function r(t){return a(this,void 0,void 0,function(){return i(this,function(e){return[2,u(t,"GET")]})})}function o(t,e){return a(this,void 0,void 0,function(){return i(this,function(n){return[2,u(t,"POST",e)]})})}var a=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,a){function i(t){try{u(r.next(t))}catch(t){a(t)}}function c(t){try{u(r.throw(t))}catch(t){a(t)}}function u(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(i,c)}u((r=r.apply(t,e||[])).next())})},i=this&&this.__generator||function(t,e){function n(t){return function(e){return r([t,e])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;u;)try{if(o=1,a&&(i=a[2&n[0]?"return":n[0]?"throw":"next"])&&!(i=i.call(a,n[1])).done)return i;switch(a=0,i&&(n=[0,i.value]),n[0]){case 0:case 1:i=n;break;case 4:return u.label++,{value:n[1],done:!1};case 5:u.label++,a=n[1],n=[0];continue;case 7:n=u.ops.pop(),u.trys.pop();continue;default:if(i=u.trys,!(i=i.length>0&&i[i.length-1])&&(6===n[0]||2===n[0])){u=0;continue}if(3===n[0]&&(!i||n[1]>i[0]&&n[1]<i[3])){u.label=n[1];break}if(6===n[0]&&u.label<i[1]){u.label=i[1],i=n;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(n);break}i[2]&&u.ops.pop(),u.trys.pop();continue}n=e.call(t,u)}catch(t){n=[6,t],a=0}finally{o=i=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,a,i,c,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return c={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c},c=this;Object.defineProperty(e,"__esModule",{value:!0}),e.get=r,e.post=o;var u=function(t,e,n){return a(c,void 0,void 0,function(){var r,o,a,c;return i(this,function(i){switch(i.label){case 0:return r=new Headers({"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache","content-type":"application/json; charset=utf-8",dataType:"json"}),o={headers:r,method:e},n&&(o.body=n),[4,fetch(t,o)];case 1:return a=i.sent(),a.ok?[4,a.json()]:[3,3];case 2:return[2,i.sent()];case 3:return[4,a.text()];case 4:throw c=i.sent(),new Error(c)}})})}}},[225]);