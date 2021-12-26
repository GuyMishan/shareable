(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{121:function(e,t,n){"use strict";var r=n(0),o=n(4),a=n(5),s={login:function(e,t){var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})};return fetch("/api/user/login",n).then(c).then(function(e){return localStorage.setItem("user",JSON.stringify({token:e.user.token})),e.user})},logout:i,sendVerificationEmail:function(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})};return fetch("/api/user/sendVerificationEmail/",t).then(c)},sendforgotPasswordEmail:function(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})};return fetch("/api/user/sendforgotPasswordEmail/",t).then(c)},register:function(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return fetch("/api/user/signup/",t).then(c)},getUserData:function(e){var t={method:"POST",headers:{Authorization:JSON.parse(localStorage.getItem("user")).token,"Content-Type":"application/json"},body:JSON.stringify(Object(r.a)({},e))};return fetch("/api/user/getUserData",t).then(c).then(function(e){return e})},resetPassword:function(e){var t={method:"POST",headers:{Authorization:"Bearer "+e.jwt,"Content-Type":"application/json"},body:JSON.stringify(Object(r.a)({},e))};return fetch("/api/user/passwordreset",t).then(u).then(function(e){return e})},updateUser:function(e){delete e.isDisabled;var t={method:"POST",headers:{Authorization:JSON.parse(localStorage.getItem("user")).token,"Content-Type":"application/json"},body:JSON.stringify(e)};return fetch("/api/user/updateUser",t).then(c).then(function(e){return localStorage.setItem("user",JSON.stringify({token:e.token})),e})},followUser:function(e){var t={method:"POST",headers:{Authorization:JSON.parse(localStorage.getItem("user")).token,"Content-Type":"application/json"},body:JSON.stringify({userId:e})};return fetch("/api/user/followUser",t).then(c).then(function(e){return e})},getUserProfileData:function(e){var t={method:"POST",headers:{Authorization:JSON.parse(localStorage.getItem("user")).token,"Content-Type":"application/json"},body:JSON.stringify({username:e.trim(),profilePage:!0})};return fetch("/api/user/getProfilePageData",t).then(c).then(function(e){return e})},getPosts:function(e){var t={method:"POST",headers:{Authorization:JSON.parse(localStorage.getItem("user")).token,"Content-Type":"application/json"},body:JSON.stringify(Object(r.a)({},e))};return fetch("/api/user/getPosts",t).then(c).then(function(e){return e})},getUserProfileFollowers:function(e){var t={method:"POST",headers:{Authorization:JSON.parse(localStorage.getItem("user")).token,"Content-Type":"application/json"},body:JSON.stringify({userId:e})};return fetch("/api/user/getUserProfileFollowers",t).then(c).then(function(e){return e})},getUserProfileFollowings:function(e){var t={method:"POST",headers:{Authorization:JSON.parse(localStorage.getItem("user")).token,"Content-Type":"application/json"},body:JSON.stringify({userId:e})};return fetch("/api/user/getUserProfileFollowings",t).then(c).then(function(e){return e})},getNewUsers:function(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(r.a)({},e))};return fetch("/api/user/getNewUsers",t).then(c).then(function(e){return e})}};function i(){localStorage.removeItem("user")}function c(e){return e.text().then(function(t){var n=t&&JSON.parse(t);if(!e.ok){401===e.status&&(i(),window.location.reload(!0));var r=n&&n.message||e.statusText;return Promise.reject(r)}return n})}function u(e){return e.text().then(function(t){var n=t&&JSON.parse(t);if(!e.ok){e.status;var r=n&&n.message||e.statusText;return Promise.reject(r)}return n})}var l=n(31),f=n(16);n.d(t,"a",function(){return p});var p={login:function(e,t){return function(n){var r;n((r={email:e},{type:o.a.LOGIN_REQUEST,user:r})),s.login(e,t).then(function(e){n(function(e){return{type:o.a.LOGIN_SUCCESS,user:e}}(e.token)),n({type:o.a.GETUSER_SUCCESS,user:e}),f.a.push("/")},function(e){n(function(e){return{type:o.a.LOGIN_FAILURE,error:e}}(e.toString())),n(l.a.error(e.toString()))})}},logout:function(){return s.logout(),function(e){e({type:o.a.LOGOUT})}},register:function(e){return function(t){t(function(e){return{type:o.a.REGISTER_REQUEST,user:e}}(e)),s.register(e).then(function(e){var n;t({type:o.a.REGISTER_SUCCESS,user:n}),f.a.push("/login"),t(l.a.success(e.message))},function(e){t(function(e){return{type:o.a.REGISTER_FAILURE,error:e}}(e.toString())),t(l.a.error(e.toString()))})}},sendVerificationEmail:function(e){return function(t){s.sendVerificationEmail(e).then(function(e){t(l.a.success(e.message))},function(e){t(l.a.error(e))})}},getUserData:function(e){return function(t){t({type:o.a.GETUSER_REQUEST}),s.getUserData(e).then(function(e){var n;e.user.posts&&e.user.posts.forEach(function(e){return t({type:a.a.INIT_COMMENT,postId:e._id})}),t((n=e.user,{type:o.a.GETUSER_SUCCESS,user:n}))},function(e){t(function(e){return{type:o.a.GETUSER_FAILURE,error:e}}(e.toString())),t(l.a.error(e.toString()))})}},getUserProfileFollowers:function(e){return function(t){s.getUserProfileFollowers(e).then(function(e){var n;t((n=e.users[0].followers,{type:o.a.GET_USER_PROFILE_FOLLOWERS,users:n}))},function(e){console.log(e)})}},getUserProfileFollowings:function(e){return function(t){s.getUserProfileFollowings(e).then(function(e){var n;t((n=e.users[0].following,{type:o.a.GET_USER_PROFILE_FOLLOWINGS,users:n}))},function(e){console.log(e)})}},getFollowers:function(e){return function(t){s.getUserProfileFollowers(e).then(function(e){var n;t((n=e.users[0].followers,{type:o.a.GET_USER_FOLLOWERS,users:n}))},function(e){console.log(e)})}},getPosts:function(e){return function(t){s.getPosts(e).then(function(e){var n;e.posts.forEach(function(e){return t({type:a.a.INIT_COMMENT,postId:e._id})}),t((n=e.posts,{type:o.a.GET_POSTS,posts:n}))},function(e){t(l.a.error(e))})}},getUserPosts:function(e){return function(t){s.getPosts(e).then(function(e){var n;e.posts.forEach(function(e){return t({type:a.a.INIT_COMMENT,postId:e._id})}),t((n=e.posts,{type:o.a.GET_USER_PROFILE_POSTS,posts:n}))},function(e){t(l.a.error(e))})}},getFollowings:function(e){return function(t){s.getUserProfileFollowings(e).then(function(e){var n;t((n=e.users[0].following,{type:o.a.GET_USER_FOLLOWINGS,users:n}))},function(e){console.log(e)})}},updateUserData:function(e){return function(t){t({type:o.a.USER_UPDATE_REQUEST}),s.updateUser(e).then(function(e){var n;t((n=e.user,{type:o.a.USER_UPDATE_SUCCESS,user:n}))},function(e){t(function(e){return{type:o.a.USER_UPDATE_FAILURE,error:e}}(e.toString()))})}},followUser:function(e){return function(t){s.followUser(e).then(function(e){"followed"===e.action?t({type:o.a.FOLLOW_USER,user:e}):t({type:o.a.UNFOLLOW_USER,user:e})},function(e){console.log(e)})}},sendforgotPasswordEmail:function(e){return function(t){s.sendforgotPasswordEmail(e).then(function(e){t(l.a.success(e.message))},function(e){t(l.a.error(e))})}},getUserProfileData:function(e){return function(t){t({type:o.a.GET_USERPROFILE_DATA_REQUEST}),s.getUserProfileData(e).then(function(e){if(e.user.loggedInUser)return f.a.push("/profile");var n;document.title="@"+e.user.username+" | social-network",t((n=e,{type:o.a.GET_USERPROFILE_DATA,user:n})),e.user.posts&&e.user.posts.forEach(function(e){return t({type:a.a.INIT_COMMENT,postId:e._id})})},function(e){console.log(e),t({type:o.a.GET_USERPROFILE_DATA_FAILURE}),t(l.a.error(e.toString()))})}},getNewUsers:function(e){return function(t){e.initialFetch||t({type:o.a.GET_NEW_USERS_REQUEST}),s.getNewUsers(e).then(function(n){var a;t((a=Object(r.a)({},n,e),{type:o.a.GET_NEW_USERS_SUCCESS,data:a}))},function(e){console.log(e)})}},resetPassword:function(e){return function(n){n({type:o.a.PASSWORD_RESET_REQUEST}),s.resetPassword(e).then(function(e){n(l.a.success(e.message)),n(t())},function(e){n(l.a.error(e)),n(t())})};function t(){return{type:o.a.PASSWORD_RESET_RESPONSE}}}}},126:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(1),o=n.n(r),a=n(271);function s(e){var t=e.alert,n=t.type,r=t.message;return"success"===n?o.a.createElement(a.a,{success:!0,header:"Success",content:r}):"error"===n?o.a.createElement(a.a,{error:!0,header:"Error",content:r}):null}},271:function(e,t,n){"use strict";var r=n(61),o=n.n(r),a=n(67),s=n.n(a),i=n(70),c=n.n(i),u=n(71),l=n.n(u),f=n(68),p=n.n(f),d=n(72),h=n.n(d),g=n(74),S=n.n(g),E=n(66),m=n.n(E),O=n(91),y=n.n(O),w=(n(84),n(62)),T=n.n(w),b=(n(2),n(1)),U=n.n(b),v=n(259),N=n(460),P=n(461),j=n(60),_=n(476),R=n(305);function I(e){var t=e.children,n=e.className,r=e.content,a=T()("content",n),s=Object(N.a)(I,e),i=Object(P.a)(I,e);return U.a.createElement(i,o()({},s,{className:a}),j.a.isNil(t)?r:t)}I.handledProps=["as","children","className","content"],I.propTypes={};var C=I;function F(e){var t=e.children,n=e.className,r=e.content,a=T()("header",n),s=Object(N.a)(F,e),i=Object(P.a)(F,e);return U.a.createElement(i,o()({},s,{className:a}),j.a.isNil(t)?r:t)}F.handledProps=["as","children","className","content"],F.propTypes={},F.create=Object(_.f)(F,function(e){return{content:e}});var D=F,G=n(83),L=n.n(G);function A(e){var t=e.children,n=e.className,r=e.content,a=T()("content",n),s=Object(N.a)(A,e),i=Object(P.a)(A,e);return U.a.createElement(i,o()({},s,{className:a}),j.a.isNil(t)?r:t)}A.handledProps=["as","children","className","content"],A.propTypes={},A.defaultProps={as:"li"},A.create=Object(_.f)(A,function(e){return{content:e}});var J=A;function k(e){var t=e.children,n=e.className,r=e.items,a=T()("list",n),s=Object(N.a)(k,e),i=Object(P.a)(k,e);return U.a.createElement(i,o()({},s,{className:a}),j.a.isNil(t)?L()(r,J.create):t)}k.handledProps=["as","children","className","items"],k.propTypes={},k.defaultProps={as:"ul"},k.create=Object(_.f)(k,function(e){return{items:e}});var z=k;n.d(t,"a",function(){return W});var W=function(e){function t(){var e,n;s()(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return n=l()(this,(e=p()(t)).call.apply(e,[this].concat(o))),m()(S()(S()(n)),"handleDismiss",function(e){var t=n.props.onDismiss;t&&t(e,n.props)}),n}return h()(t,e),c()(t,[{key:"render",value:function(){var e=this.props,n=e.attached,r=e.children,a=e.className,s=e.color,i=e.compact,c=e.content,u=e.error,l=e.floating,f=e.header,p=e.hidden,d=e.icon,h=e.info,g=e.list,S=e.negative,E=e.onDismiss,m=e.positive,O=e.size,w=e.success,b=e.visible,I=e.warning,F=T()("ui",s,O,Object(v.a)(i,"compact"),Object(v.a)(u,"error"),Object(v.a)(l,"floating"),Object(v.a)(p,"hidden"),Object(v.a)(d,"icon"),Object(v.a)(h,"info"),Object(v.a)(S,"negative"),Object(v.a)(m,"positive"),Object(v.a)(w,"success"),Object(v.a)(b,"visible"),Object(v.a)(I,"warning"),Object(v.b)(n,"attached"),"message",a),G=E&&U.a.createElement(R.a,{name:"close",onClick:this.handleDismiss}),L=Object(N.a)(t,this.props),A=Object(P.a)(t,this.props);return j.a.isNil(r)?U.a.createElement(A,o()({},L,{className:F}),G,R.a.create(d,{autoGenerateKey:!1}),(!y()(f)||!y()(c)||!y()(g))&&U.a.createElement(C,null,D.create(f,{autoGenerateKey:!1}),z.create(g,{autoGenerateKey:!1}),Object(_.d)(c,{autoGenerateKey:!1}))):U.a.createElement(A,o()({},L,{className:F}),G,r)}}]),t}(b.Component);m()(W,"Content",C),m()(W,"Header",D),m()(W,"List",z),m()(W,"Item",J),m()(W,"handledProps",["as","attached","children","className","color","compact","content","error","floating","header","hidden","icon","info","list","negative","onDismiss","positive","size","success","visible","warning"]),W.propTypes={}},806:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return E});var r=n(6),o=n(24),a=n(25),s=n(27),i=n(26),c=n(28),u=n(1),l=n.n(u),f=n(817),p=n(821),d=n(18),h=n(121),g=n(126),S=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),u=0;u<a;u++)c[u]=arguments[u];return(n=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={password:"",retypepassword:"",jwt:"",submitDisabled:!0},n.componentDidMount=function(){document.title="Password reset | social-network",n.setState({jwt:n.props.match.params.jwt})},n.handleChange=function(e){var t=e.target,o=t.name,a=t.value;n.setState(Object(r.a)({},o,a),function(){var e=n.state;e.password===e.retypepassword?n.setState({submitDisabled:!1}):n.setState({submitDisabled:!0})})},n.handleSubmit=function(e){var t=n.props.dispatch,r=n.state,o=r.password,a=r.retypepassword,s=r.jwt;e.preventDefault(),t(h.a.resetPassword({password:o,retypepassword:a,jwt:s}))},n}return Object(c.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this.props,t=e.alert,n=e.passwordReset,r=this.state,o=r.password,a=r.retypepassword,s=r.submitDisabled,i="success"===t.type,c="error"===t.type;return l.a.createElement("div",{className:"container"},l.a.createElement(f.a,{success:i,error:c,className:"fluid segment",size:"big",loading:!!n.requesting,onSubmit:this.handleSubmit},l.a.createElement(f.a.Field,null,l.a.createElement("label",null,"New password"),l.a.createElement("input",{onChange:this.handleChange,name:"password",type:"password",placeholder:"New password",value:o})),l.a.createElement(f.a.Field,null,l.a.createElement("label",null,"Re-type password"),l.a.createElement("input",{onChange:this.handleChange,name:"retypepassword",type:"password",placeholder:"Re-type password",value:a})),l.a.createElement(p.a,{disabled:s,fluid:!0,type:"submit"},"Submit"),l.a.createElement(g.a,{alert:t})))}}]),t}(u.Component),E=Object(d.b)(function(e){return{passwordReset:e.passwordReset,alert:e.alert}})(S)}}]);
//# sourceMappingURL=20.bef2ad05.chunk.js.map