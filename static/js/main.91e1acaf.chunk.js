(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{185:function(e,t,n){e.exports=n(437)},190:function(e,t,n){},191:function(e,t,n){},437:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(31),l=n.n(o),c=(n(190),n(89)),i=n(90),u=n(92),s=n(91),m=n(93),d=n(184),p=(n(191),n(94)),h=n(48),E=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"Welcome, ",this.props.name)}}]),t}(r.a.Component),f=(n(436),n(64)),w=n.n(f),v=n(95),g=n.n(v),b=n(96),y=n(41),j=n.n(y),O=j.a.mark(S);function S(e){return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.username,e.password,console.log("loginrequest");case 2:case"end":return t.stop()}},O)}function k(){return r.a.createElement("div",{style:{margin:"10px 10px",float:"left"}},r.a.createElement(R,null),r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p.b,{to:"/"},"Public Page")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/protected"},"Protected Page")))))}function C(){return r.a.createElement("h3",null,"Protected")}var T={isAuthenticated:!1,authenticate:function(e){T.isAuthenticated=!0,setTimeout(e,100)},signout:function(e){T.isAuthenticated=!1,setTimeout(e,100)}};function F(e){var t=e.component,n=Object(d.a)(e,["component"]);return r.a.createElement(h.b,Object.assign({},n,{render:function(e){return T.isAuthenticated?r.a.createElement(t,e):r.a.createElement(h.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}var R=Object(h.f)(function(e){var t=e.history;return T.isAuthenticated?r.a.createElement("p",null,"Welcome!"," ",r.a.createElement("button",{onClick:function(){T.signout(function(){return t.push("/")})}},"Sign out")):r.a.createElement("p",null,"You are not logged in.")}),q=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={show:!1,redirectToReferrer:!1,loginFail:!1},n.handleClose=function(){n.setState({show:!1,redirectToReferrer:!1,loginFail:!1})},n.handleShow=function(){n.setState({show:!0})},n.validates=function(e){var t={};return e.username||(t.username="Required"),e.password||(t.password="Required"),e.confirm?e.confirm!==e.password&&(t.confirm="Must match"):t.confirm="Required",t},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t={pathname:"/protected"},n=this.state.redirectToReferrer,a=function(e){return e?void 0:"Required"};return n?r.a.createElement(h.a,{to:t}):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"You must log in to view the page at ",t.pathname),r.a.createElement(g.a,{onClick:this.handleShow}," Login"),r.a.createElement(w.a,{show:this.state.show,onHide:this.handleClose},r.a.createElement(b.b,{onSubmit:function(t){S({username:t.username,password:t.password}),"guest"===t.username&&"guest"===t.password?(e.setState({loginFail:!1}),T.authenticate(function(){e.setState({show:!1,redirectToReferrer:!0})})):e.setState({loginFail:!0})},render:function(t){t.dirtyFields,t.errors;var n=t.handleSubmit,o=(t.submitting,t.touched,t.valid);t.values;return r.a.createElement("form",{onSubmit:n},r.a.createElement(w.a.Header,{closeButton:!0},r.a.createElement(w.a.Title,null,"Sign In")),r.a.createElement(w.a.Body,null,r.a.createElement(b.a,{name:"username",validate:a},function(e){var t=e.input,n=e.meta;return r.a.createElement("div",null,r.a.createElement("div",null,"Username"),r.a.createElement("input",Object.assign({},t,{type:"text",placeholder:"Enter username",style:{width:"100%"}})),r.a.createElement("span",{style:{color:"red"}},n.error&&n.touched&&r.a.createElement("span",null,"This is a required field.")))}),r.a.createElement(b.a,{name:"password",validate:a},function(e){var t=e.input,n=e.meta;return r.a.createElement("div",null,r.a.createElement("div",null,"Password"),r.a.createElement("input",Object.assign({},t,{type:"password",placeholder:"Enter password",style:{width:"100%"}})),r.a.createElement("span",{style:{color:"red"}},n.error&&n.touched&&r.a.createElement("span",null,"This is a required field.")))}),r.a.createElement("span",{style:{color:"red"}},e.state.loginFail&&r.a.createElement("span",null,"Incorrect username or password"))),r.a.createElement(w.a.Footer,null,r.a.createElement(g.a,{variant:"secondary",onClick:e.handleClose}," Close"),r.a.createElement(g.a,{variant:"primary",disabled:!o,type:"submit"},"Save Changes")))}})))}}]),t}(r.a.Component),x=function(){return r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(h.b,{exact:!0,path:"/",component:E}),r.a.createElement(h.b,{path:"/login",component:q}),r.a.createElement(F,{path:"/protected",component:C})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(234);l.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[185,1,2]]]);
//# sourceMappingURL=main.91e1acaf.chunk.js.map