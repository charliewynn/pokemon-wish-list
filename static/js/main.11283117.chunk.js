(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},111:function(e,t,a){e.exports=a(317)},307:function(e,t,a){},314:function(e,t,a){},317:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a.n(n),s={REGION:"us-east-1",URL:"https://tmgdwe5ovb.execute-api.us-east-1.amazonaws.com/prod/"},i={REGION:"us-east-1",USER_POOL_ID:"us-east-1_5JC05eQ2I",APP_CLIENT_ID:"4uooah1csamsdplgaaq3rjmtdt",IDENTITY_POOL_ID:"us-east-1:60ce11de-4ee8-4faa-b211-e38c45770964"},o=a(0),c=a.n(o),u=a(106),l=a.n(u),h=a(320),m=(a(307),a(7)),d=a.n(m),p=a(18),g=a(19),f=a(20),v=a(22),b=a(21),E=a(23),w=a(107),O=a.n(w),y=a(319),k=a(322),C=a(321),j=function(e){function t(){return Object(g.a)(this,t),Object(v.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentWillReceiveProps",value:function(e){e&&e.authed&&this.getPokemon()}},{key:"componentDidMount",value:function(){this.props.authed&&this.getPokemon()}},{key:"addOne",value:function(){var e=Object(p.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.API.post("wish-list-api","want/",{body:57});case 2:t=e.sent,console.log("Results",t);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getPokemon",value:function(){var e=Object(p.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("should get pokemon"),e.next=3,n.API.get("wish-list-api","query/");case 3:t=e.sent,console.log("Results",t);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"renderAuth",value:function(){return c.a.createElement("div",null,"auth",c.a.createElement("button",{onClick:this.addOne},"add something"))}},{key:"render",value:function(){return c.a.createElement("div",{className:"Home"},c.a.createElement("div",{className:"lander"},c.a.createElement("h1",null,"Pokemon Wish List"),this.props.authed?this.renderAuth():c.a.createElement("p",null,"Simple tracker for pokemon you want to catch")))}}]),t}(o.Component),L=a(32),x=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(v.a)(this,Object(b.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(L.a)({},e.target.id,e.target.value))},a.handleSubmit=function(){var e=Object(p.a)(d.a.mark(function e(t){var r,s;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.setState({isLoading:!0}),e.prev=2,e.next=5,n.Auth.signUp({username:a.state.email,password:a.state.password});case 5:r=e.sent,a.setState({newGuy:r}),e.next=26;break;case 9:if(e.prev=9,e.t0=e.catch(2),"UsernameExistsException"!==e.t0.code){e.next=25;break}return e.prev=12,e.next=15,n.Auth.resendSignUp(a.state.email);case 15:s=e.sent,alert("That username already exists - resending confirmation code (but the you need the original password to login)"),a.setState({newGuy:s}),e.next=23;break;case 20:e.prev=20,e.t1=e.catch(12),alert(e.t1.message);case 23:e.next=26;break;case 25:alert(e.t0.message);case 26:a.setState({isLoading:!1});case 27:case"end":return e.stop()}},e,this,[[2,9],[12,20]])}));return function(t){return e.apply(this,arguments)}}(),a.handleConfirmationSubmit=function(){var e=Object(p.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.setState({isLoading:!0}),e.prev=2,e.next=5,n.Auth.confirmSignUp(a.state.email,a.state.confirmCode);case 5:return e.next=7,n.Auth.signIn(a.state.email,a.state.password);case 7:a.props.authChange(!0),a.props.history.push("/"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),alert(e.t0.message),a.setState({isLoading:!1});case 15:case"end":return e.stop()}},e,this,[[2,11]])}));return function(t){return e.apply(this,arguments)}}(),a.state={email:"",password:"",confirm:"",confirmCode:"",isLoading:!1,newGuy:null},a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"validateForm",value:function(){return this.state.email.length>0&&this.state.password.length>0&&this.state.password===this.state.confirm}},{key:"validateConfirmationForm",value:function(){return this.state.confirmCode.length>0}},{key:"renderLoading",value:function(){return c.a.createElement("div",null,"Loading")}},{key:"renderSignUp",value:function(){return c.a.createElement("div",{className:"Login"},c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("div",null,c.a.createElement("label",null,"Email"),c.a.createElement("input",{autoFocus:!0,type:"email",value:this.state.email,onChange:this.handleChange,id:"email"})),c.a.createElement("div",null,c.a.createElement("label",null,"Password"),c.a.createElement("input",{value:this.state.password,onChange:this.handleChange,type:"password",id:"password"})),c.a.createElement("div",null,c.a.createElement("label",null,"Confirm Password"),c.a.createElement("input",{value:this.state.confirm,onChange:this.handleChange,type:"password",id:"confirm"})),c.a.createElement("button",{disabled:!this.validateForm(),type:"submit"},"Login")))}},{key:"renderConfirmCode",value:function(){return c.a.createElement("div",{className:"Login"},c.a.createElement("form",{onSubmit:this.handleConfirmationSubmit},c.a.createElement("label",null,"Confirmation Code"),c.a.createElement("input",{value:this.state.confirmCode,onChange:this.handleChange,type:"password",id:"confirmCode"}),c.a.createElement("button",{disabled:!this.validateConfirmationForm(),type:"submit"},"Login")))}},{key:"render",value:function(){return this.state.isLoading?this.renderLoading():null===this.state.newGuy?this.renderSignUp():this.renderConfirmCode()}}]),t}(o.Component),S=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(v.a)(this,Object(b.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(L.a)({},e.target.type,e.target.value))},a.handleSubmit=function(){var e=Object(p.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,a.setState({isLoading:!0}),e.next=5,n.Auth.signIn(a.state.email,a.state.password);case 5:a.props.authChange(!0),a.props.history.push("/"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),alert(e.t0.message),a.setState({isLoading:!1});case 13:case"end":return e.stop()}},e,this,[[1,9]])}));return function(t){return e.apply(this,arguments)}}(),a.state={email:"",password:"",isLoading:!1},a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"validateForm",value:function(){return this.state.email.length>0&&this.state.password.length>0}},{key:"renderLoading",value:function(){return c.a.createElement("div",null,"Loading")}},{key:"render",value:function(){return this.state.isLoading?this.renderLoading():c.a.createElement("div",{className:"Login"},c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("div",null,c.a.createElement("label",null,"Email"),c.a.createElement("input",{autoFocus:!0,type:"email",value:this.state.email,onChange:this.handleChange})),c.a.createElement("div",null,c.a.createElement("label",null,"Password"),c.a.createElement("input",{value:this.state.password,onChange:this.handleChange,type:"password"})),c.a.createElement("button",{disabled:!this.validateForm(),type:"submit"},"Login")))}}]),t}(o.Component),I=function(e){function t(){return Object(g.a)(this,t),Object(v.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"NotFound"},c.a.createElement("div",{className:"lander"},c.a.createElement("h1",null,"Page not found"),c.a.createElement("p",null,":I")))}}]),t}(o.Component),A=a(108),P=a(110),N=function(e){var t=e.component,a=e.props,n=Object(P.a)(e,["component","props"]),r=Object(A.a)({},n);return r.path="".concat("/pokemon-wish-list").concat(r.path),c.a.createElement(C.a,Object.assign({},r,{render:function(e){return c.a.createElement(t,Object.assign({},e,a))}}))},D=function(e){var t=e.auth;return c.a.createElement(k.a,null,c.a.createElement(N,{path:"/",exact:!0,component:j,props:t}),c.a.createElement(N,{path:"/signup",exact:!0,component:x,props:t}),c.a.createElement(N,{path:"/login",exact:!0,component:S,props:t}),c.a.createElement(C.a,{component:I}))},_=(a(314),function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(v.a)(this,Object(b.a)(t).call(this,e))).authChange=function(e){a.setState({authed:e})},a.logout=Object(p.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.Auth.signOut();case 2:a.authChange(!1);case 3:case"end":return e.stop()}},e,this)})),a.state={authed:!1,isAuthing:!0},a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.Auth.currentSession();case 3:this.authChange(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),"No current user"!==e.t0&&alert(e.t0);case 9:this.setState({isAuthing:!1});case 10:case"end":return e.stop()}},e,this,[[0,6]])}));return function(){return e.apply(this,arguments)}}()},{key:"renderLoadingAuth",value:function(){return c.a.createElement("div",null,"Loading")}},{key:"render",value:function(){if(this.state.isAuthing)return this.renderLoadingAuth();var e=this.state.authed,t=this.authChange;return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("img",{src:O.a,className:"App-logo",alt:"logo"}),c.a.createElement(y.a,{to:"/"},"Home"),e?c.a.createElement("div",{className:"right"},c.a.createElement("button",{onClick:this.logout},"Logout")):c.a.createElement("div",{className:"right"},c.a.createElement(y.a,{to:"/signup"},"Signup"),c.a.createElement(y.a,{to:"/login"},"Login"))),c.a.createElement(D,{auth:{authed:e,authChange:t}}))}}]),t}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.configure({Auth:{mandatorySignIn:!0,region:i.REGION,userPoolId:i.USER_POOL_ID,identityPoolId:i.IDENTITY_POOL_ID,userPoolWebClientId:i.APP_CLIENT_ID},API:{endpoints:[{name:"wish-list-api",endpoint:s.URL,region:s.REGION}]}}),l.a.render(c.a.createElement(h.a,{basename:"/pokemon-wish-list"},c.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},48:function(e,t){}},[[111,2,1]]]);
//# sourceMappingURL=main.11283117.chunk.js.map