(function(t){function e(e){for(var n,i,o=e[0],c=e[1],u=e[2],l=0,m=[];l<o.length;l++)i=o[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(m.length)m.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],n=!0,o=1;o<s.length;o++){var c=s[o];0!==a[c]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=s[0]))}return t}var n={},a={app:0},r=[];function i(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=n,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var d=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var n=s("85ec"),a=s.n(n);a.a},"0372":function(t,e,s){},"0602":function(t,e,s){},"1a12":function(t,e,s){},"239a":function(t,e,s){},"463a":function(t,e,s){},4678:function(t,e,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=r(t);return s(e)}function r(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=r,t.exports=a,a.id="4678"},"47a2":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("45fc"),s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},r=[],i={name:"app"},o=i,c=(s("034f"),s("2877")),u=Object(c["a"])(o,a,r,!1,null,null,null),d=u.exports,l=(s("4160"),s("d3b7"),s("159b"),s("2f62")),m=s("bc3a"),f=s.n(m);n["a"].use(l["a"]);var h,p,v=new l["a"].Store({state:{status:"",token:localStorage.getItem("token")||"",refresh:"",teacher:"",class:"",userId:"",teacherHomeData:[],loading:!0},mutations:{auth_request:function(t){t.status="loading"},auth_success:function(t,e){t.status="success",t.token=e.token,t.refresh=e.refresh,t.teacher=e.user,t.class=e.classId,t.userId=e.userId},auth_error:function(t){t.status="error"},logout:function(t){t.status="",t.token="",t.classId=""},teacherHomeData:function(t,e){t.teacherHomeData=e.studentData},REFRESH:function(t,e){t.token=e},LOADING_ON:function(t){t.loading=!0},LOADING_OFF:function(t){t.loading=!1}},actions:{login:function(t,e){var s=t.commit;return new Promise((function(t,n){s("auth_request"),s("LOADING_ON"),f()({url:"http://127.0.0.1:5000/login",data:e,method:"POST"}).then((function(e){var n=e.data.access_token,a=e.data.refresh_token,r=e.data.user,i=e.data.class_id,o=e.data.id;localStorage.setItem("token",n),s("auth_success",{userId:o,token:n,user:r,classId:i,refresh:a}),t(e)})).then((function(){s("LOADING_OFF")})).catch((function(){n("Invalid username/password")}))}))},logout:function(t){var e=t.commit;return new Promise((function(t){e("logout"),localStorage.removeItem("token"),t()}))},teacherHomeData:function(t){var e=this,s=t.commit;return new Promise((function(t){f()({url:"http://127.0.0.1:5000/student_list/".concat(e.getters.classId),method:"GET"}).then((function(e){s("teacherHomeData",{studentData:e.data}),t()}))}))},refresh:function(t,e){var s=t.commit;s("REFRESH",e)}},getters:{isLoggedIn:function(t){return!!t.token},loadingStatus:function(t){return t.loading},authStatus:function(t){return t.status},isTeacher:function(t){return t.teacher},userId:function(t){return t.userId},token:function(t){return t.token},classId:function(t){return t.class},teacherHomeData:function(t){return t.teacherHomeData},totalQuizNumber:function(t){var e=0;return t.teacherHomeData.forEach((function(t){e+=t.quizes.length})),e}},modules:{}}),b=s("8c4f"),g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"main"}},[s("Navbar"),s("div",{staticClass:"container"},[s("div",{staticClass:"grid-container"},[t._m(0),s("div",{staticClass:"stats card"},[t.loaded?s("PieChart",{attrs:{chartdata:t.chartdata,options:t.options}}):t._e(),s("div",{staticClass:"stats-container"},[s("StatsBox",{attrs:{title:t.totalQuizTitle,valueNumber:t.getTotalNumber}}),s("StatsBox",{attrs:{title:t.easiestQuizTitle,valueString:t.easiestKanji}}),s("StatsBox",{attrs:{title:t.difficultQuizTitle,valueString:t.hardestKanji}})],1)],1),s("div",{staticClass:"student-list card"},[s("h3",[t._v("Student List")]),t._l(t.studentList,(function(e){return s("div",{key:e.id,staticClass:"student-item"},[s("img",{staticClass:"avatar",attrs:{src:"https://www.w3schools.com/howto/img_avatar.png",alt:"Avatar"}}),s("router-link",{staticClass:"student-quiz",attrs:{to:{name:"student",params:{student_id:e.id}}}},[t._v(" "+t._s(t.truncateName(e.full_name))+" ")])],1)}))],2)])]),s("Footer")],1)},_=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"announcements card"},[s("h3",[t._v("Welcome to Kanji Quiz!")]),s("p",[t._v("This is a demonstration site for an e-learning quiz app.")]),s("p",[t._v("Teachers can create quizes, find useful stats on their students' progress, suggest corrections, and directly answer questions that a student may have.")]),s("p",[t._v("To get started, create a quiz above or take a look at some of the sample students on the left!")])])}],j=(s("4de4"),s("13d5"),s("fb6a"),s("b64b"),s("2909")),z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"navbar"}},[t.isTeacher?s("router-link",{attrs:{to:{name:"teacher-home"}}},[s("h1",{staticClass:"logo-header"},[s("span",{staticClass:"logo-kanji"},[t._v("漢字")]),t._v(" Quiz")])]):s("router-link",{attrs:{to:{name:"student-home"}}},[s("h1",{staticClass:"logo-header"},[s("span",{staticClass:"logo-kanji"},[t._v("漢字")]),t._v(" Quiz")])]),s("div",{staticClass:"navbar-links"},[t.isTeacher?s("router-link",{staticClass:"btn",attrs:{to:{name:"quiz-create"}}},[t._v("Create Quiz ")]):t._e(),t.isTeacher?t._e():s("span",[s("img",{staticClass:"avatar",attrs:{src:"https://www.w3schools.com/howto/img_avatar.png",alt:"Avatar"}})]),t.isLoggedIn?s("span",{staticClass:"logout"},[s("a",{on:{click:t.logout}},[t._v("Logout")])]):t._e()],1)],1)},q=[],C={data:function(){return{isTeacher:this.$store.state.teacher}},computed:{isLoggedIn:function(){return this.$store.getters.isLoggedIn}},methods:{logout:function(){var t=this;this.$store.dispatch("logout").then((function(){t.$router.push("/login")}))}}},k=C,y=(s("5dfc"),Object(c["a"])(k,z,q,!1,null,null,null)),S=y.exports,w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{attrs:{id:"footer"}},[s("div",{staticClass:"footer-container"},[s("p",[t._v("© All Rights Reserved, Joseph Scutella 2020")]),s("p",{staticClass:"portfolio-link"},[t._v("Check out my other projects")])])])}],x={},N=x,T=(s("760c"),Object(c["a"])(N,w,I,!1,null,null,null)),D=T.exports,O=s("1fca"),$={extends:O["a"],props:{chartdata:{type:Object,default:null},options:{type:Object,default:null}},mounted:function(){this.renderChart(this.chartdata,this.options)}},Q=$,E=Object(c["a"])(Q,h,p,!1,null,null,null),A=E.exports,M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"total-quiz"}},[s("h3",[t._v(t._s(t.title))]),t.valueNumber?s("span",{staticClass:"value"},[t._v(t._s(t.number)),t._t("default")],2):s("span",{staticClass:"value"},[t._v(t._s(t.valueString))])])},L=[],P=(s("a9e3"),{props:{title:{type:String,required:!0},valueNumber:{type:Number,required:!1},valueString:{type:String,required:!1}},computed:{totalQ:function(){return this.value},number:function(){return Math.floor(this.valueNumber)}}}),B=P,H=(s("5b4b"),Object(c["a"])(B,M,L,!1,null,null,null)),K=H.exports,F=f.a.create({baseURL:"http://127.0.0.1:5000/",headers:{Accept:"application/json","Content-type":"application/json","Access-Control-Allow-Origin":"*",Authorization:v.getters.token?"Bearer "+v.getters.token:void 0}}),R=function t(e,s,n){var a={method:s||"GET",body:void 0!==n?JSON.stringify(n):null,headers:{"Content-Type":"application/json",Authorization:"Bearer "+v.getters.token}},r="http://127.0.0.1:5000"+e;return fetch(r,a).then((function(a){return a.ok?{error:!1,success:!0}:401!==a.status?{success:!1,error:!0}:void fetch("https://kanjiquiz.herokuapp.com/refresh",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+v.state.refresh}}).then((function(a){a.json().then((function(t){v.dispatch("refresh",t.token)})).then((function(){return t(e,s,n)}))}))})).catch((function(){return{success:!1,error:!0}}))},G={getApiService:function(t){return F.get(t)}},U={name:"TeacherHome",components:{Navbar:S,Footer:D,PieChart:A,StatsBox:K},data:function(){return{loaded:!1,chartdata:{labels:["Correct","Incorrect"],datasets:[{label:"Correct",backgroundColor:["#21de67","#ff525a"],data:[]}]},options:{responsive:!0,maintainAspectRatio:!1},totalQuizTitle:"Total number of Quizes:",easiestQuizTitle:"Easiest Kanji: ",difficultQuizTitle:"Most Difficult Kanji: ",easiestKanji:"",hardestKanji:""}},computed:{studentList:function(){return this.$store.getters.teacherHomeData},getTotalNumber:function(){return this.$store.getters.totalQuizNumber}},methods:{setChartData:function(){var t=this;G.getApiService("/stats/".concat(this.$store.getters.classId,"/qcorrect")).then((function(e){t.chartdata.datasets[0].data.push(e.data["correct"]),t.chartdata.datasets[0].data.push(e.data["incorrect"]),t.loaded=!0}))},truncateName:function(t){if(t.length>15){var e=t.slice(0,15)+"...";return e}return t},getEasyHardKanji:function(){var t=this,e=[],s={},n={};G.getApiService("/student_list/".concat(this.$store.getters.classId)).then((function(t){t.data.forEach((function(t){e.push.apply(e,Object(j["a"])(t.quizes))}))})).then((function(){e.forEach((function(t){t.question_correct?s[t.quiz]=(s[t.quiz]||0)+1:n[t.quiz]=(n[t.quiz]||0)+1}))})).then((function(){var a=Object.keys(s).reduce((function(t,e){return s[t]>s[e]?t:e})),r=e.filter((function(t){return t.quiz===a}))[0].kanji,i=Object.keys(n).reduce((function(t,e){return n[t]>n[e]?t:e})),o=e.filter((function(t){return t.quiz===i}))[0].kanji;t.hardestKanji=o,t.easiestKanji=r}))}},mounted:function(){this.$store.dispatch("teacherHomeData"),this.setChartData(),this.getEasyHardKanji()}},J=U,W=(s("eb45"),Object(c["a"])(J,g,_,!1,null,null,null)),Y=W.exports,V=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"student-main"}},[s("Navbar"),s("div",{staticClass:"container"},[s("div",{staticClass:"grid-container"},[s("div",{staticClass:"announcements card"},[s("h3",[t._v("Hi there, "+t._s(t.studentName))]),s("p",[t._v("This is the student page of the KanjiQuiz Application")]),s("p",[t._v("A student can choose a quiz from the right and input an answer and can also view some statistics below the page")]),s("p",[t._v("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus cumque dignissimos reiciendis eveniet ipsam, omnis incidunt quam earum eius sit! Nulla amet, facilis doloremque perferendis cupiditate eligendi quod ipsa labore? Magnam magni dicta maiores nisi reprehenderit ipsum ea, quaerat nesciunt eum atque quidem expedita et cupiditate molestias obcaecati, provident perferendis mollitia culpa tenetur delectus beatae, labore illum. Consequuntur nobis culpa recusandae voluptatem reprehenderit, eum ipsum! Porro aut, qui recusandae similique quibusdam est beatae consectetur autem illo eum. Laborum harum minus voluptatem? Laudantium, ex facilis. Quo culpa eveniet molestias minima sed! Quas incidunt odit, quisquam possimus sapiente eius iste omnis nostrum!")])]),s("div",{staticClass:"quiz-list card"},[s("h2",[t._v("My Quizes")]),t._l(t.quizList,(function(e){return s("div",{key:e.id,staticClass:"quiz-item"},[s("router-link",{attrs:{to:{name:"student-quiz",params:{student_id:t.studentId,quiz_id:e.id}}}},[t._v(" "+t._s(e.quiz)+" ")])],1)}))],2),s("div",{staticClass:"stats card"},[s("h1",[t._v("Your Stats")]),s("div",{staticClass:"stats-item-wrapper"},[s("StatsBox",{attrs:{title:"# of Quizes",valueNumber:t.QuizTotal}}),s("StatsBox",{attrs:{title:"% Correct",valueNumber:t.percentageCorrect}},[t._v("% ")]),s("StatsBox",{attrs:{title:"% Incorrect",valueNumber:t.percentageIncorrect}},[t._v("% ")])],1)])])]),s("Footer")],1)},X=[],Z={components:{Navbar:S,Footer:D,StatsBox:K},data:function(){return{quizList:[],perCorrect:0,perIncorrect:0,studentName:"",studentId:this.$store.getters.userId}},computed:{QuizTotal:function(){return this.quizList.length},percentageCorrect:function(){return this.perCorrect/this.QuizTotal*100},percentageIncorrect:function(){return this.perIncorrect/this.QuizTotal*100}},methods:{getQuizes:function(){var t=this;G.getApiService("/students/".concat(this.$store.getters.userId)).then((function(e){t.quizList=e.data.quizes,t.studentName=e.data.full_name})).then((function(){var e=0,s=0;t.quizList.forEach((function(t){t.question_correct?e++:s++})),t.perCorrect=e,t.perIncorrect=s}))}},created:function(){this.getQuizes()}},tt=Z,et=(s("8446"),Object(c["a"])(tt,V,X,!1,null,null,null)),st=et.exports,nt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Navbar"),s("div",{staticClass:"container",attrs:{id:"student"}},[s("div",{staticClass:"message-wrapper"},[s("MessageSnack",{attrs:{success:t.success,error:t.error},scopedSlots:t._u([{key:"success",fn:function(){return[t._v("Quiz Deleted!")]},proxy:!0},{key:"error",fn:function(){return[t._v("Error deleting quiz")]},proxy:!0}])})],1),s("div",{staticClass:"student-grid"},[s("h1",{staticClass:"student-name"},[s("img",{staticClass:"avatar",attrs:{src:"https://www.w3schools.com/howto/img_avatar.png",alt:"Avatar"}}),t._v(t._s(t.studentInfo[0].full_name))]),s("table",[t._m(0),t._l(t.studentInfo[0].quizes,(function(e){return s("tbody",{key:e.id},[s("tr",[s("th",{attrs:{scope:"row"}},[s("router-link",{attrs:{to:{name:"quiz",params:{quiz_id:e.id,name:t.studentInfo[0].full_name,user_id:t.studentInfo[0].id}}}},[t._v(t._s(e.quiz)+" ")])],1),s("td",[t._v(t._s(e.date_created))]),s("td",[t._v(t._s(e.date_submitted))]),s("td",[s("button",{on:{click:function(s){return t.deleteQuiz(e.id)}}},[t._v("Delete")])])])])})),s("tfoot",[s("tr",[s("th",{attrs:{scope:"row",colspan:"2"}},[t._v("Total # of quizes:")]),s("td",{attrs:{colspan:"2"}},[t._v(t._s(t.QuizTotal))])])])],2),s("div",{staticClass:"card"},[s("StatsBox",{attrs:{title:"% Correct",valueNumber:t.percentageCorrect}},[t._v("% ")]),s("StatsBox",{attrs:{title:"% Incorrect",valueNumber:t.percentageIncorrect}},[t._v("% ")])],1)])])],1)},at=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("Quiz Name")]),s("th",{attrs:{scope:"col"}},[t._v("Date Created")]),s("th",{attrs:{scope:"col"}},[t._v("Date Submitted")]),s("th",{attrs:{scope:"col"}})])])}],rt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"message-container"},[s("transition",{attrs:{name:"bounce"}},[t.success?s("div",{staticClass:"success-message"},[t._t("success")],2):t._e()]),s("transition",{attrs:{name:"shake"}},[t.error?s("div",{staticClass:"error-message"},[t._t("error")],2):t._e()])],1)},it=[],ot={props:{success:{type:Boolean,required:!1},error:{type:Boolean,required:!1}}},ct=ot,ut=(s("c699"),Object(c["a"])(ct,rt,it,!1,null,"43711884",null)),dt=ut.exports,lt={name:"student",components:{Navbar:S,StatsBox:K,MessageSnack:dt},data:function(){return{studentInfo:[],perCorrect:0,perIncorrect:0,success:!1,error:!1}},computed:{QuizTotal:function(){return this.studentInfo[0].quizes.length},percentageCorrect:function(){return this.perCorrect/this.QuizTotal*100},percentageIncorrect:function(){return this.perIncorrect/this.QuizTotal*100}},methods:{getStudentQuizes:function(){var t=this;G.getApiService("/students/".concat(this.$route.params.student_id)).then((function(e){t.studentInfo.push(e.data)})).then((function(){var e=0,s=0;t.studentInfo[0].quizes.forEach((function(t){t.question_correct?e++:s++})),t.perCorrect=e,t.perIncorrect=s}))},deleteQuiz:function(t){var e=this;R("/quiz/delete/".concat(t),"DELETE").then((function(t){e.error=t.error,e.success=t.success}))}},mounted:function(){this.getStudentQuizes()}},mt=lt,ft=(s("66b0"),Object(c["a"])(mt,nt,at,!1,null,null,null)),ht=ft.exports,pt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Navbar"),s("div",{staticClass:"container",attrs:{id:"quiz-question"}},[t._l(t.quizDetail,(function(e){return s("div",{key:e.id,staticClass:"detail-flex card"},[s("h1",[t._v(t._s(e.quiz))]),s("p",{staticClass:"kanji"},[t._v(t._s(e.kanji))]),s("p",{staticClass:"sentence"},[s("strong",[t._v("Sentence:")]),t._v(t._s(e.sentence))]),e.question_correct?s("div",{staticClass:"sentence-correct"},[t._v("✔")]):s("div",{staticClass:"sentence-incorrect"},[t._v("✖")]),s("form",{on:{submit:function(e){return e.preventDefault(),t.addCorrection(e)}}},[s("input",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"},{name:"model",rawName:"v-model",value:t.correction,expression:"correction"}],attrs:{type:"text",placeholder:"Write correct sentence"},domProps:{value:t.correction},on:{input:function(e){e.target.composing||(t.correction=e.target.value)}}})]),s("form",{staticClass:"student-sentence-form",on:{submit:function(e){e.preventDefault(),t.addStudentSentence(),t.StudentSaveChanges()}}},[t.isTeacher?t._e():s("input",{directives:[{name:"model",rawName:"v-model",value:t.studentSentence,expression:"studentSentence"}],attrs:{type:"text",placeholder:"Write your sentence!"},domProps:{value:t.studentSentence},on:{input:function(e){e.target.composing||(t.studentSentence=e.target.value)}}})]),e.corrected_sentence?s("p",{staticClass:"correct-sentence"},[s("strong",[t._v("Corrected sentence:")]),t._v(" "+t._s(e.corrected_sentence))]):t._e(),t.isTeacher?s("div",{staticClass:"button-container"},[s("button",{staticClass:"btn correction",on:{click:function(e){t.active=!t.active}}},[t._v("Make Correction")]),e.question_correct?s("button",{staticClass:"btn mark-incorrect",on:{click:function(t){e.question_correct=!1}}},[t._v("Mark Incorrect")]):s("button",{staticClass:"btn mark-correct",on:{click:function(t){e.question_correct=!0}}},[t._v("Mark Correct")])]):t._e(),t.isTeacher?s("form",{on:{submit:function(e){return e.preventDefault(),t.saveChanges(e)}}},[s("input",{staticClass:"btn",attrs:{type:"submit",value:"Submit"}})]):t._e()])})),s("div",{staticClass:"message-wrapper"},[s("MessageSnack",{attrs:{success:t.success,error:t.error},scopedSlots:t._u([{key:"success",fn:function(){return[t._v(t._s(t.successMessage))]},proxy:!0},{key:"error",fn:function(){return[t._v(t._s(t.errorMessage))]},proxy:!0}])})],1),s("div",{staticClass:"comment-wrapper"},[s("div",{staticClass:"comment-container card"},[s("div",{staticClass:"question_respond"},[s("h2",[t._v(" Questions ")]),t._l(t.commentList,(function(e){return s("div",{key:e.id,staticClass:"comment"},[t._v(" "+t._s(e.comment)+" ")])}))],2)]),s("div",{staticClass:"comment-form card"},[s("p",[s("strong",[t._v("Reply to "+t._s(t.name))])]),s("form",{on:{submit:function(e){return e.preventDefault(),t.addComment(e)}}},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],attrs:{cols:"30",rows:"10",required:""},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}}),s("input",{staticClass:"btn",attrs:{type:"submit",value:"Submit"}})])])])],2)],1)},vt=[],bt=(s("b0c0"),{name:"quiz",components:{Navbar:S,MessageSnack:dt},data:function(){return{quizDetail:[],active:!1,correction:"",success:!1,error:!1,successMessage:"",errorMessage:"",isTeacher:this.$store.getters.isTeacher,comments:[],comment:"",studentSentence:"",name:this.$route.params.name}},computed:{commentList:function(){return this.comments}},methods:{getQuizDetail:function(){var t=this;G.getApiService("/quiz/".concat(this.$route.params.quiz_id)).then((function(e){t.quizDetail.push(e.data)}))},getComments:function(){var t=this;G.getApiService("/comment/".concat(this.$route.params.quiz_id)).then((function(e){t.comments=e.data}))},addCorrection:function(){this.quizDetail[0].corrected_sentence=this.correction,this.active=!1},addStudentSentence:function(){this.quizDetail[0].sentence=this.studentSentence},addComment:function(){var t=this,e={comment:this.comment,user_id:this.$route.params.user_id?this.$route.params.user_id:this.$route.params.student_id,quiz_id:this.$route.params.quiz_id};R("/comment/create","POST",e).then((function(e){e.success?(t.comments.push(t.comment),t.comment="",t.getComments(),t.error=!1,t.success=!0,t.successMessage="You added a comment!"):(t.success=!1,t.error=!0,t.errorMessage="An error has occured")}))},saveChanges:function(){var t=this,e={sentence:this.quizDetail[0].sentence,corrected_sentence:this.correction,question_correct:this.quizDetail[0].question_correct};R("/quiz/".concat(this.$route.params.quiz_id),"PUT",e).then((function(e){e.success?(t.error=!1,t.success=!0,t.successMessage="Updated!"):(t.success=!1,t.error=!0,t.errorMessage="Error updating")}))},StudentSaveChanges:function(){var t=this,e={sentence:this.studentSentence,question_correct:this.quizDetail[0].question_correct};R("/quiz/".concat(this.$route.params.quiz_id),"PUT",e).then((function(e){e.success?(t.error=!1,t.success=!0,t.successMessage="You added your sentence!"):(t.success=!1,t.error=!0,t.errorMessage="Error Updating")}))}},created:function(){this.getQuizDetail(),this.getComments()}}),gt=bt,_t=(s("81b6"),Object(c["a"])(gt,pt,vt,!1,null,null,null)),jt=_t.exports,zt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"quiz-create"}},[s("Navbar"),s("h1",[t._v("Create Quiz")]),s("h1",[t._v(" "+t._s(t.test)+" ")]),s("div",{staticClass:"container"},[s("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.kanji,expression:"kanji"}],attrs:{type:"text",placeholder:"Kanji",required:""},domProps:{value:t.kanji},on:{input:function(e){e.target.composing||(t.kanji=e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.quizName,expression:"quizName"}],attrs:{type:"text",placeholder:"Quiz name",required:""},domProps:{value:t.quizName},on:{input:function(e){e.target.composing||(t.quizName=e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.quizID,expression:"quizID"}],attrs:{type:"text",placeholder:"Class ID",required:""},domProps:{value:t.quizID},on:{input:function(e){e.target.composing||(t.quizID=e.target.value)}}}),s("input",{staticClass:"btn",attrs:{type:"submit",value:"Submit"}})])]),s("MessageSnack",{attrs:{success:t.success,error:t.error},scopedSlots:t._u([{key:"success",fn:function(){return[t._v("Quiz Created!")]},proxy:!0},{key:"error",fn:function(){return[t._v("Error creating quiz")]},proxy:!0}])})],1)},qt=[],Ct={name:"quiz-create",components:{Navbar:S,MessageSnack:dt},data:function(){return{test:"",kanji:"",quizName:"",success:!1,error:!1,quizID:""}},methods:{submit:function(){var t=this,e={kanji:this.kanji,quiz_name:this.quizName,sentence:"",class_name:this.quizID};R("/quiz","POST",e).then((function(e){t.error=e.error,t.success=e.success}))}}},kt=Ct,yt=(s("8578"),Object(c["a"])(kt,zt,qt,!1,null,null,null)),St=yt.exports,wt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"login"}},[s("div",{staticClass:"container"},[s("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[t._m(0),s("h2",{staticClass:"l-heading"},[t._v("Sign in")]),s("div",{staticClass:"form-group"},[s("label",[t._v("Username")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",required:""},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",[t._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),s("input",{staticClass:"btn",class:{disabled:t.loading},attrs:{type:"submit",value:"Login"}}),s("span",{staticClass:"error"},[t._v(t._s(t.error))]),t.$store.getters.loadingStatus?s("span",{class:{spinner:t.loading}}):t._e()])])])},It=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",{staticClass:"logo-header"},[s("span",{staticClass:"logo-kanji"},[t._v("漢字")]),t._v(" Quiz")])}],xt={data:function(){return{username:"",password:"",error:"",loading:!1}},methods:{login:function(){var t=this,e=this.username,s=this.password;this.loading=!0,this.$store.dispatch("login",{username:e,password:s}).then((function(e){e.data.user?t.$router.push("/teacher-home"):t.$router.push("/student-home")})).catch((function(e){t.loading=!1,t.error=e}))}},created:function(){this.error=""}},Nt=xt,Tt=(s("d6db"),Object(c["a"])(Nt,wt,It,!1,null,null,null)),Dt=Tt.exports,Ot=s("0874"),$t=(s("d06d"),v);n["a"].use(b["a"]),n["a"].component("v-icon",Ot["a"]),n["a"].prototype.$http=f.a;var Qt=localStorage.getItem("token");Qt&&(n["a"].prototype.$http.defaults.headers.common["Authorization"]=Qt);var Et=new b["a"]({mode:"history",routes:[{path:"/teacher-home",name:"teacher-home",component:Y,meta:{requiresAuth:!0,isTeacher:!0}},{path:"/student-home",name:"student-home",component:st,meta:{requiresAuth:!0}},{path:"/student/:student_id",name:"student",props:!0,component:ht,meta:{requiresAuth:!0,isTeacher:!0}},{path:"/student/quiz/:quiz_id",name:"quiz",props:!0,component:jt,meta:{requiresAuth:!0,isTeacher:!0}},{path:"/quiz-create",name:"quiz-create",component:St,meta:{requiresAuth:!0,isTeacher:!0}},{path:"/login",name:"login",component:Dt},{path:"/student/quiz/:student_id/:quiz_id",name:"student-quiz",component:jt,beforeEnter:function(t,e,s){t.params.student_id!==$t.getters.userId?($t.dispatch("logout"),s({name:"login"})):s()}}]});Et.beforeEach((function(t,e,s){if(t.matched.some((function(t){return t.meta.requiresAuth}))){if(t.matched.some((function(t){return t.meta.isTeacher}))){if(v.getters.isLoggedIn&&v.getters.isTeacher)return void s();s("/login")}else s();v.getters.isLoggedIn||s("/login")}else s()})),n["a"].config.productionTip=!1,new n["a"]({router:Et,store:v,render:function(t){return t(d)}}).$mount("#app")},"5b4b":function(t,e,s){"use strict";var n=s("c4a7"),a=s.n(n);a.a},"5dfc":function(t,e,s){"use strict";var n=s("1a12"),a=s.n(n);a.a},"66b0":function(t,e,s){"use strict";var n=s("47a2"),a=s.n(n);a.a},"760c":function(t,e,s){"use strict";var n=s("c3f5"),a=s.n(n);a.a},"81b6":function(t,e,s){"use strict";var n=s("239a"),a=s.n(n);a.a},8446:function(t,e,s){"use strict";var n=s("0602"),a=s.n(n);a.a},8578:function(t,e,s){"use strict";var n=s("463a"),a=s.n(n);a.a},"85ec":function(t,e,s){},c3f5:function(t,e,s){},c4a7:function(t,e,s){},c699:function(t,e,s){"use strict";var n=s("0372"),a=s.n(n);a.a},cb67:function(t,e,s){},d6db:function(t,e,s){"use strict";var n=s("e67a"),a=s.n(n);a.a},e67a:function(t,e,s){},eb45:function(t,e,s){"use strict";var n=s("cb67"),a=s.n(n);a.a}});
//# sourceMappingURL=app.a83ab975.js.map