(this["webpackJsonpsocial-network-ts"]=this["webpackJsonpsocial-network-ts"]||[]).push([[0],{128:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}));var r=n(42),s=n(4),a="dialog/SEND_MESSAGE",o={dialogsData:[{id:1,name:"Rick"},{id:2,name:"Morty"},{id:3,name:"\u0411\u0430\u043a\u043b\u0430\u0436\u0430\u043d"},{id:4,name:"\u041f\u0435\u043b\u044c\u043c\u0435\u043d\u044c"}],messagesData:[{id:1,message:"Hi"},{id:2,message:"I`m cucumber"},{id:3,message:"Where is my portal gun?"},{id:4,message:"Morty is jerk!"}]},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a:var n={id:100*Math.random(),message:t.newMessageBody};return Object(s.a)(Object(s.a)({},e),{},{messagesData:[].concat(Object(r.a)(e.messagesData),[Object(s.a)({},n)])});default:return e}},c=function(e){return{type:a,newMessageBody:e}}},136:function(e,t,n){e.exports={Profile:"Profile_Profile__3TnSb",profileName:"Profile_profileName__1ezcZ"}},169:function(e,t,n){},29:function(e,t,n){e.exports={Nav:"Nav_Nav__nhsNb",active:"Nav_active__3qVer"}},296:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),a=n(66),o=n.n(a),i=(n(169),n(21)),c=n(22),u=n(24),l=n(23),d=n(51),j=n.n(d),p=n(29),f=n.n(p),b=n(12),h=n(0),O=function(){return Object(h.jsx)("nav",{className:"".concat(f.a.Nav," + ").concat(j.a.Nav),children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(b.b,{to:"/profile",activeClassName:f.a.active,children:"Profile"})}),Object(h.jsx)("li",{children:Object(h.jsx)(b.b,{to:"/dialogs",activeClassName:f.a.active,children:"Messages"})}),Object(h.jsx)("li",{children:Object(h.jsx)(b.b,{to:"/users",activeClassName:f.a.active,children:"Users"})}),Object(h.jsx)("li",{children:Object(h.jsx)(b.b,{to:"/news",activeClassName:f.a.active,children:"News"})}),Object(h.jsx)("li",{children:Object(h.jsx)(b.b,{to:"/music",activeClassName:f.a.active,children:"Music"})}),Object(h.jsx)("li",{children:Object(h.jsx)(b.b,{to:"/settings",activeClassName:f.a.active,children:"Settings"})})]})})},m=n(8),g=n(11),x=n(10),v=n.n(x),_=n(18),P=n(42),C=n(4),w=n(134),S=n.n(w).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"ac5021a6-6592-4dfc-bd91-07a05b477711"}}),y=function(){return S.get("auth/me").then((function(e){return e.data}))},k=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return S.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},N=function(){return S.delete("auth/login").then((function(e){return e.data}))},T=function(e,t){return S.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},I=function(e){return S.post("follow/".concat(e)).then((function(e){return e.data}))},U=function(e){return S.delete("follow/".concat(e)).then((function(e){return e.data}))},M={getProfile:function(e){return S.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return S.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return S.put("profile/status",{status:e}).then((function(e){return e.data}))}},E="users/isFOLLOW",F="users/SET_USERS",A="users/SET_CURRENT_PAGE",L="users/SET_TOTAL_USERS_COUNT",D="users/IS_FETCHING",z="users/TOGGLE_IS_FOLLOWING_PROGRESS",B={users:[],pageSize:20,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},R=function(e){return{type:F,users:e}},H=function(e){return{type:L,usersCount:e}},J=function(e){return{type:D,isFetching:e}},G=function(e,t){return{type:z,userId:e,isFetching:t}},W=n(30),X=n.n(W),Q=n.p+"static/media/Morty_Smith.f78db6f7.jpg",V=function(e){return Object(h.jsxs)("div",{className:X.a.User,children:[Object(h.jsx)(b.b,{to:"/profile/"+e.id,children:Object(h.jsxs)("div",{className:X.a.avaBlock,children:[Object(h.jsx)("div",{children:Object(h.jsx)("h4",{className:X.a.name,children:e.name})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:X.a.ava,src:null!=e.photo?e.photo:Q,alt:"defaultAvatar"})})]})}),Object(h.jsxs)("span",{children:["my status:",Object(h.jsx)("span",{className:X.a.status,children:e.status})]}),Object(h.jsx)("button",{disabled:e.followingInProgress.some((function(t){return t===e.id})),className:e.followed?X.a.btnUnFollow:X.a.btnFollow,onClick:function(){e.followUnfollowTC(e.followed,e.id)},children:e.followed?"unfollow":"follow"})]})},q=n(93),Y=n.n(q),K=n(71),Z=n(139),$=n(94),ee=n.n($),te=n(135),ne=n.n(te),re=function(e){for(var t=e.totalItemsCount,n=e.pageSize,s=e.portionSize,a=void 0===s?20:s,o=e.currentPage,i=e.onSetCurrentPage,c=Math.ceil(t/n),u=[],l=1;l<=c;l++)u.push(l);var d=Math.ceil(c/a),j=Object(r.useState)(1),p=Object(Z.a)(j,2),f=p[0],b=p[1],O=(f-1)*a+1,m=f*a;return Object(h.jsxs)("div",{className:ee.a.paginator,children:[f>1&&Object(h.jsx)("button",{onClick:function(){b(f-1)},children:"PREV"}),u.filter((function(e){return e>=O&&e<=m})).map((function(e){return Object(h.jsx)("span",{className:ne()(Object(K.a)({},ee.a.selectedPage,o===e)),onClick:function(){i(e)},children:e},e)})),d>f&&Object(h.jsx)("button",{onClick:function(){b(f+1)},children:"NEXT"})]})},se=function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{className:Y.a.header,children:"UsersList:"}),Object(h.jsx)(re,{pageSize:e.pageSize,currentPage:e.currentPage,onSetCurrentPage:e.onSetCurrentPage,totalItemsCount:e.totalUsersCount}),Object(h.jsx)("div",{className:Y.a.Users,children:e.users.map((function(t){return Object(h.jsx)(V,{id:t.id,followed:t.followed,name:t.name,status:t.status,followingInProgress:e.followingInProgress,photo:t.photos.small,followUnfollowTC:e.followUnfollowTC},t.id)}))})]})},ae=n.p+"static/media/Skateboarding.b53f1c75.gif",oe={marginTop:"20px",display:"flex",justifyContent:"center","flex-direction":"column",alignItems:"center"},ie=function(){return Object(h.jsxs)("div",{style:oe,children:[Object(h.jsx)("div",{children:"learn react"}),Object(h.jsx)("img",{style:{maxWidth:"40px"},src:ae,alt:"loader-Skateboarding"})]})},ce=function(e){return e.usersPage.users},ue=function(e){return e.usersPage.pageSize},le=function(e){return e.usersPage.totalUsersCount},de=function(e){return e.usersPage.currentPage},je=function(e){return e.usersPage.isFetching},pe=function(e){return e.usersPage.followingInProgress},fe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).onSetCurrentPage=function(t){e.props.setCurrentPage(t),e.props.getUsersTC(t,e.props.pageSize)},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersTC(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[this.props.isFetching?Object(h.jsx)(ie,{}):null,Object(h.jsx)(se,{users:this.props.users,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onSetCurrentPage:this.onSetCurrentPage,followingInProgress:this.props.followingInProgress,followUnfollowTC:this.props.followUnfollowTC})]})}}]),n}(r.Component),be=Object(g.b)((function(e){return{users:ce(e),pageSize:ue(e),totalUsersCount:le(e),currentPage:de(e),isFetching:je(e),followingInProgress:pe(e)}}),{setUsers:R,setTotalUsersCount:H,setCurrentPage:function(e){return{type:A,currentPage:e}},setIsFetching:J,getUsersTC:function(e,t){return function(){var n=Object(_.a)(v.a.mark((function n(r){var s;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(J(!0)),n.next=3,T(e,t);case 3:s=n.sent,r(R(s.items)),r(H(s.totalCount)),r(J(!1));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},followUnfollowTC:function(e,t){return function(){var n=Object(_.a)(v.a.mark((function n(r){return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r(G(t,!0)),!e){n.next=7;break}return n.next=4,U(t);case 4:n.t0=n.sent,n.next=10;break;case 7:return n.next=9,I(t);case 9:n.t0=n.sent;case 10:0===n.t0.resultCode&&(r({type:E,userId:t}),r(G(t,!1)));case 12:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})(fe),he=n(136),Oe=n.n(he),me=n(34),ge=n.n(me),xe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={editMode:!1,status:e.props.status},e.activateEditMode=function(){e.setState({editMode:!0})},e.deactivateEditMode=function(){e.setState({editMode:!1}),e.props.updateStatus&&e.props.updateStatus(e.state.status)},e.onStatusChange=function(t){e.setState({status:t.currentTarget.value})},e}return Object(c.a)(n,[{key:"componentDidUpdate",value:function(e,t){e.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:ge.a.ProfileStatus,children:[!this.state.editMode&&Object(h.jsx)("div",{children:Object(h.jsxs)("span",{onDoubleClick:this.activateEditMode,children:[" ",Object(h.jsxs)("b",{children:[" ",this.props.status||"No status"]})," "]})}),this.state.editMode&&Object(h.jsx)("div",{children:Object(h.jsx)("input",{autoFocus:!0,onChange:this.onStatusChange,onBlur:this.deactivateEditMode,value:this.state.status?this.state.status:""})})]})}}]),n}(s.a.Component),ve=function(e){return e.profile?Object(h.jsxs)("div",{className:ge.a.ProfileInfo,children:[Object(h.jsx)("div",{className:ge.a.profilePhoto,children:Object(h.jsx)("img",{src:e.profile.photos.large,alt:"".concat(e.profile.fullName)})}),Object(h.jsx)(xe,{status:e.status,updateStatus:e.updateStatus}),Object(h.jsx)("div",{className:ge.a.profileName,children:Object(h.jsxs)("span",{children:["My name: ",Object(h.jsx)("b",{children:e.profile.fullName})]})}),Object(h.jsxs)("div",{className:ge.a.myContacts,children:["My contacts:",Object(h.jsx)("div",{children:Object(h.jsxs)("span",{children:[Object(h.jsx)("b",{children:"vk: "}),e.profile.contacts.vk]})}),Object(h.jsx)("div",{children:Object(h.jsxs)("span",{children:[Object(h.jsx)("b",{children:"github: "}),e.profile.contacts.github]})})]})]}):Object(h.jsx)(ie,{})},_e="profile/ADD-POST",Pe="profile/SET_USER_PROFILE",Ce="profile/SET_STATUS",we="profile/DELETE-POST",Se={postsData:[{id:1,message:"Hi",likesCount:35840},{id:2,message:"Yo",likesCount:10560},{id:3,message:"My brother is Jake",likesCount:3650},{id:4,message:"It`s my first post",likesCount:1545}],newPostText:"It is a crazy FLUX!",profile:{aboutMe:null,contacts:{facebook:null,website:null,vk:null,twitter:null,instagram:null,youtube:null,github:null,mainLink:null},lookingForAJob:!1,lookingForAJobDescription:null,fullName:"",userId:0,photos:{small:"",large:","}},status:""},ye=function(e){return{type:Ce,status:e}},ke=n(95),Ne=n.n(ke),Te=n(73),Ie=n.n(Te),Ue=n.p+"static/media/fin.2f5ae759.jpg",Me=function(e){var t=e.message,n=e.likesCount;return Object(h.jsxs)("div",{className:Ie.a.Post,children:[Object(h.jsx)("img",{src:Ue,alt:"img post"}),Object(h.jsxs)("div",{className:Ie.a.messageBlock,children:[Object(h.jsx)("span",{children:t}),Object(h.jsxs)("span",{className:Ie.a.likesCount,children:["like: ",n]})]})]})},Ee=n(129),Fe=n(130),Ae=n(38),Le=n(47),De=Object(Ae.a)(50),ze=Object(Fe.a)({form:"postAddMessage"})((function(e){return Object(h.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(h.jsx)(Ee.a,{name:"newPostText",component:Le.b,placeholder:"It is a crazy FLUX!",validate:[Ae.b,De]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{children:"Add"})})]})})),Be=s.a.memo((function(e,t){var n=e.postsData;return Object(h.jsxs)("div",{className:Ne.a.MyPosts,children:[Object(h.jsxs)("div",{className:Ne.a.postBlock,children:[Object(h.jsx)("div",{children:"Add post"}),Object(h.jsx)(ze,{onSubmit:function(e){t.addPost(e.newPostText)}})]}),n.map((function(e){return Object(h.jsx)(Me,{id:e.id,message:e.message,likesCount:e.likesCount},e.id+e.message)}))]})})),Re=Object(g.b)((function(e){return{postsData:e.profilePage.postsData,newPostText:e.profilePage.newPostText}}),{addPost:function(e){return{type:_e,postText:e}}})(Be),He=function(e){return Object(h.jsxs)("div",{className:Oe.a.Profile,children:[Object(h.jsx)(ve,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(h.jsx)(Re,{})]})},Je=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=void 0===this.props.match.params.userId?this.props.authorizedUser||15114:Number(this.props.match.params.userId);this.props.setUserProfileTC(e),this.props.getStatusTC(e)}},{key:"render",value:function(){return Object(h.jsx)(He,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatusTC})}}]),n}(r.Component),Ge=Object(m.f)(Je),We=Object(g.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUser:e.auth.userId,auth:e.auth.isAuth}}),{setUserProfileTC:function(e){return function(){var t=Object(_.a)(v.a.mark((function t(n){var r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.getProfile(e);case 2:r=t.sent,n({type:Pe,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatusTC:function(e){return function(){var t=Object(_.a)(v.a.mark((function t(n){var r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.getStatus(e);case 2:r=t.sent,n(ye(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatusTC:function(e){return function(){var t=Object(_.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.updateStatus(e);case 2:0===t.sent.resultCode&&n(ye(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(Ge),Xe=n.p+"static/media/react.887f90e5.png",Qe=n(55),Ve=n.n(Qe),qe=function(e){return Object(h.jsx)("div",{className:Ve.a.Header,children:Object(h.jsxs)("header",{children:[Object(h.jsx)("img",{className:Ve.a.reactLogo,src:Xe,alt:"react"}),Object(h.jsx)("div",{className:Ve.a.loginBlock,children:e.isAuth?Object(h.jsxs)("div",{className:Ve.a.profileName,children:[Object(h.jsx)("div",{children:e.login})," ",Object(h.jsx)("button",{onClick:e.logoutTC,children:"Logout"})]}):Object(h.jsx)(b.b,{to:"/login",children:"Login"})})]})})},Ye=n(45),Ke="auth/SET_USER_DATA",Ze={isAuth:!1,userId:null,email:null,login:null},$e=function(e,t,n,r){return{type:Ke,data:{userId:e,email:t,login:n},isAuth:r}},et=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)(qe,Object(C.a)({},this.props))}}]),n}(s.a.Component),tt=Object(g.b)((function(e){return{userId:e.auth.userId,email:e.auth.email,login:e.auth.login,isAuth:e.auth.isAuth}}),{logoutTC:function(){return function(){var e=Object(_.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:0===e.sent.resultCode&&t($e(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(et),nt=n(75),rt=n.n(nt),st=n(35),at=n.n(st),ot=Object(Fe.a)({form:"login"})((function(e){return Object(h.jsxs)("form",{onSubmit:e.handleSubmit,className:rt.a.Login,children:[Object(h.jsx)("div",{className:rt.a.InputTextBlock,children:Object(h.jsx)(Ee.a,{type:"text",component:Le.a,validate:[Ae.b],name:"email",placeholder:"Email"})}),Object(h.jsx)("div",{className:rt.a.InputTextBlock,children:Object(h.jsx)(Ee.a,{type:"text",component:Le.a,validate:[Ae.b],name:"password",placeholder:"Password"})}),Object(h.jsx)(Ee.a,{id:"rememberMe",component:"input",name:"rememberMe",type:"checkbox"})," ",Object(h.jsx)("label",{htmlFor:"rememberMe",children:"remember me"}),e.error&&Object(h.jsx)("div",{className:at.a.summaryError,children:e.error}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{children:"Login"})})]})})),it=Object(g.b)((function(e){return{isAuth:e.auth.isAuth}}),{loginTC:function(e,t,n){return function(){var r=Object(_.a)(v.a.mark((function r(s){var a,o;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,k(e,t,n);case 2:0===(a=r.sent).resultCode?y().then((function(e){if(0===e.resultCode){var t=e.data,n=t.id,r=t.login,a=t.email;s($e(n,a,r,!0))}})):(o=a.messages.length>0?a.messages[0]:"Email or password is wrong",s(Object(Ye.a)("login",{_error:o})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e,t){var n=e.loginTC;return t.isAuth?Object(h.jsx)(m.a,{to:"/profile"}):Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Login"}),Object(h.jsx)(ot,{onSubmit:function(e){n(e.email,e.password,e.rememberMe)}})]})})),ct="INITIAL",ut={initialized:!1},lt=s.a.lazy((function(){return n.e(3).then(n.bind(null,301))})),dt=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeAppTC()}},{key:"render",value:function(){return this.props.initialized?Object(h.jsxs)("div",{className:j.a.Wrapper,children:[Object(h.jsx)(tt,{}),Object(h.jsx)(O,{}),Object(h.jsxs)("div",{className:j.a.Main,children:[Object(h.jsx)(m.b,{path:"/profile/:userId?",render:function(){return Object(h.jsx)(We,{})}}),Object(h.jsx)(m.b,{path:"/dialogs",render:(e=lt,function(t){return Object(h.jsx)(r.Suspense,{fallback:Object(h.jsx)(ie,{}),children:Object(h.jsx)(e,Object(C.a)({},t))})})}),Object(h.jsx)(m.b,{path:"/users",render:function(){return Object(h.jsx)(be,{})}}),Object(h.jsx)(m.b,{path:"/login",render:function(){return Object(h.jsx)(it,{})}})]})]}):Object(h.jsx)(ie,{});var e}}]),n}(s.a.Component),jt=Object(g.b)((function(e){return{initialized:e.app.initialized}}),{initializeAppTC:function(){return function(e){var t=e(function(){var e=Object(_.a)(v.a.mark((function e(t){var n,r,s,a,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:0===(n=e.sent).resultCode&&(r=n.data,s=r.id,a=r.login,o=r.email,t($e(s,o,a,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());Promise.all([t]).then((function(){e({type:ct})}))}}})(dt),pt=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,300)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),s(e),a(e),o(e)}))},ft=n(9),bt=n(138),ht=n(128),Ot=n(131),mt=Object(ft.c)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _e:var n={id:100*Math.random(),message:t.postText,likesCount:0};return Object(C.a)(Object(C.a)({},e),{},{postsData:[Object(C.a)({},n)].concat(Object(P.a)(e.postsData)),newPostText:""});case we:return Object(C.a)(Object(C.a)({},e),{},{postsData:e.postsData.filter((function(e){return e.id!==t.id}))});case Ce:return Object(C.a)(Object(C.a)({},e),{},{status:t.status});case Pe:return Object(C.a)(Object(C.a)({},e),{},{profile:t.profile});default:return e}},dialogsPage:ht.a,usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(C.a)(Object(C.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(C.a)(Object(C.a)({},e),{},{followed:!e.followed}):e}))});case F:return Object(C.a)(Object(C.a)({},e),{},{users:t.users});case A:return Object(C.a)(Object(C.a)({},e),{},{currentPage:t.currentPage});case L:return Object(C.a)(Object(C.a)({},e),{},{totalUsersCount:t.usersCount});case D:return Object(C.a)(Object(C.a)({},e),{},{isFetching:t.isFetching});case z:return Object(C.a)(Object(C.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(P.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ke:return Object(C.a)(Object(C.a)(Object(C.a)({},e),t.data),{},{isAuth:t.isAuth});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ct:return Object(C.a)(Object(C.a)({},e),{},{initialized:!0});default:return e}},form:Ot.a}),gt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ft.d,xt=Object(ft.e)(mt,gt(Object(ft.a)(bt.a)));window._store_=xt,o.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(b.a,{children:Object(h.jsx)(g.a,{store:xt,children:Object(h.jsx)(jt,{})})})}),document.getElementById("root")),pt()},30:function(e,t,n){e.exports={User:"User_User__2UMQx",name:"User_name__MfOdA",status:"User_status__bzn8S",city:"User_city__2VtQT",btnFollow:"User_btnFollow__n7wyn",btnUnFollow:"User_btnUnFollow__3E0uU",avaBlock:"User_avaBlock__2QJjK",ava:"User_ava__awGZj"}},34:function(e,t,n){e.exports={ProfileInfo:"ProfileInfo_ProfileInfo__umNmV",screenImg:"ProfileInfo_screenImg__3BvBx",profileName:"ProfileInfo_profileName__qPJMO",myContacts:"ProfileInfo_myContacts__13hRs",profilePhoto:"ProfileInfo_profilePhoto__nd-Ly",ProfileStatus:"ProfileInfo_ProfileStatus__2xeA3"}},35:function(e,t,n){e.exports={FormBlock:"FormControls_FormBlock__2DipY",Textarea:"FormControls_Textarea__P3hRC",error:"FormControls_error__1hEru",summaryError:"FormControls_summaryError__2fmqE"}},38:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s}));var r=function(e){return e?void 0:"Field is required"},s=function(e){return function(t){return t&&t.length>e?"Max length is ".concat(e," symbols"):void 0}}},47:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var r=n(4),s=n(69),a=(n(1),n(35)),o=n.n(a),i=n(0),c=function(e){e.input;var t=e.meta,n=Object(s.a)(e,["input","meta"]),r=t.touched&&t.error;return Object(i.jsxs)("div",{className:o.a.FormBlock+" "+(r?o.a.error:""),children:[Object(i.jsx)("div",{children:n.children}),Object(i.jsx)("div",{children:r&&Object(i.jsx)("span",{children:t.error})})]})},u=function(e){e.input,e.meta,e.children;var t=Object(s.a)(e,["input","meta","children"]);return Object(i.jsx)(c,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({className:o.a.Textarea},e.input),t))}))},l=function(e){e.input,e.meta,e.children;var t=Object(s.a)(e,["input","meta","children"]);return Object(i.jsx)(c,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("input",Object(r.a)(Object(r.a)({className:o.a.Textarea},e.input),t))}))}},51:function(e,t,n){e.exports={Wrapper:"App_Wrapper__3CfL0",Nav:"App_Nav__2kzpm",Main:"App_Main__2348U"}},55:function(e,t,n){e.exports={Header:"Header_Header__2tjJu",reactLogo:"Header_reactLogo__3t_ab",loginBlock:"Header_loginBlock__RTag9",profileName:"Header_profileName__16Qj7"}},73:function(e,t,n){e.exports={Post:"Post_Post__dUJtb",messageBlock:"Post_messageBlock__2w3IV",likesCount:"Post_likesCount__Jt_TK"}},75:function(e,t,n){e.exports={Login:"Login_Login__1zo2i",InputTextBlock:"Login_InputTextBlock__Dg1nY"}},93:function(e,t,n){e.exports={Users:"Users_Users__20x2X",header:"Users_header__wwU2Q"}},94:function(e,t,n){e.exports={paginator:"Paginator_paginator__1HZxR",selectedPage:"Paginator_selectedPage__1NLQ2"}},95:function(e,t,n){e.exports={MyPosts:"MyPosts_MyPosts__1ljyL",postBlock:"MyPosts_postBlock__y7EXc"}}},[[296,1,2]]]);
//# sourceMappingURL=main.bc058f84.chunk.js.map