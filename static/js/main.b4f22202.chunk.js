(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{10:function(e,a,t){e.exports=t(19)},15:function(e,a,t){},18:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),o=t.n(l),i=(t(15),t(1)),s=t(2),c=t(4),m=t(3),d=t(6),u=(t(18),function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.occupation,t=this.props.data.description,n=this.props.data.address.city,l=this.props.data.social.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url},r.a.createElement("i",{className:e.className})))}));return r.a.createElement("header",{id:"home"},r.a.createElement("nav",{id:"nav-wrap"},r.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),r.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),r.a.createElement("ul",{id:"nav",className:"nav"},r.a.createElement("li",{className:"current"},r.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Projects")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),r.a.createElement("div",{className:"row banner"},r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",{className:"responsive-headline"},e),r.a.createElement("h3",null,"I'm a ",n," based ",r.a.createElement("span",null,a)," looking to relocate to NWA. ",t,"."),r.a.createElement("hr",null),r.a.createElement("ul",{className:"social"},l))),r.a.createElement("p",{className:"scrolldown"},r.a.createElement("a",{className:"smoothscroll",href:"#about"},r.a.createElement("i",{className:"icon-down-circle"}))))}}]),t}(n.Component)),p=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url},r.a.createElement("i",{className:e.className})))}));return r.a.createElement("footer",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("ul",{className:"social-links"},e),r.a.createElement("ul",{className:"copyright"},r.a.createElement("li",null,"\xa9 Ruth Amaya"))),r.a.createElement("div",{id:"go-top"},r.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},r.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),h=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a="images/"+this.props.data.image,t=this.props.data.bio,n=this.props.data.address.street,l=this.props.data.address.city,o=this.props.data.address.state,i=this.props.data.address.zip,s=this.props.data.phone,c=this.props.data.email,m=this.props.data.resumedownload;return r.a.createElement("section",{id:"about"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"three columns"},r.a.createElement("img",{className:"profile-pic",src:a,alt:"Ruth Amaya Profile Pic"})),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("h2",null,"About Me"),r.a.createElement("p",null,t),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"columns contact-details"},r.a.createElement("h2",null,"Contact Details"),r.a.createElement("p",{className:"address"},r.a.createElement("span",null,e),r.a.createElement("br",null),r.a.createElement("span",null,n,r.a.createElement("br",null),l," ",o,", ",i),r.a.createElement("br",null),r.a.createElement("span",null,s),r.a.createElement("br",null),r.a.createElement("a",{href:"mailto:ruthamaya91@gmail.com"},c))),r.a.createElement("div",{className:"columns download"},r.a.createElement("p",null,r.a.createElement("a",{href:m,className:"button"},r.a.createElement("i",{className:"fa fa-download"}),"Download Resume")))))))}}]),t}(n.Component),f=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage,a=this.props.data.education.map((function(e){return r.a.createElement("div",{key:e.school},r.a.createElement("h3",null,e.school),r.a.createElement("p",{className:"info"},e.degree," ",r.a.createElement("span",null,"\u2022"),r.a.createElement("em",{className:"date"},e.graduated)))})),t=this.props.data.work.map((function(e){return r.a.createElement("div",{key:e.company},r.a.createElement("h3",null,e.company),r.a.createElement("p",{className:"info"},e.title,r.a.createElement("span",null,"\u2022")," ",r.a.createElement("em",{className:"date"},e.years)),r.a.createElement("p",null,e.description))})),n=this.props.data.skills.map((function(e){var a="bar-expand "+e.name.toLowerCase();return r.a.createElement("li",{key:e.name},r.a.createElement("span",{style:{width:e.level},className:a}),r.a.createElement("em",null,e.name))}));return r.a.createElement("section",{id:"resume"},r.a.createElement("div",{className:"row education"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Education"))),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("div",{className:"row item"},r.a.createElement("div",{className:"twelve columns"},a)))),r.a.createElement("div",{className:"row work"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Work"))),r.a.createElement("div",{className:"nine columns main-col"},t)),r.a.createElement("div",{className:"row skill"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Tech"))),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("p",null,e),r.a.createElement("div",{className:"bars"},r.a.createElement("ul",{className:"skills"},n)))))}}]),t}(n.Component),v=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.address.street,t=this.props.data.address.city,n=this.props.data.address.state,l=this.props.data.address.zip,o=this.props.data.phone,i=this.props.data.email,s=this.props.data.contactmessage;return r.a.createElement("section",{id:"contact"},r.a.createElement("div",{className:"row section-head"},r.a.createElement("p",{className:"lead"},s)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{id:"contact-widget"}),r.a.createElement("h4",null,"Address and Phone"),r.a.createElement("p",{className:"address"},e,r.a.createElement("br",null),a," ",r.a.createElement("br",null),t,", ",n," ",l,r.a.createElement("br",null),r.a.createElement("span",null,o),r.a.createElement("br",null),r.a.createElement("a",{href:"mailto: ruthamaya91@gmail.com"},i))))}}]),t}(n.Component),g=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var a="images/portfolio/"+e.image;return r.a.createElement("div",{key:e.title,className:"columns portfolio-item"},r.a.createElement("div",{className:"item-wrap"},r.a.createElement("a",{href:e.url,title:e.title},r.a.createElement("img",{alt:e.title,src:a}),r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"portfolio-item-meta"},r.a.createElement("h5",null,e.title),r.a.createElement("p",null,e.category))),r.a.createElement("div",{className:"link-icon"},r.a.createElement("i",{className:"fa fa-link"})))))}));return r.a.createElement("section",{id:"portfolio"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns collapsed"},r.a.createElement("h1",null,"Check Out Some of My Projects."),r.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e))))}}]),t}(n.Component),E=t(9),y=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={foo:"bar",resumeData:{}},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),n}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({resumeData:E})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u,{data:this.state.resumeData.main}),r.a.createElement(h,{data:this.state.resumeData.main}),r.a.createElement(f,{data:this.state.resumeData.resume}),r.a.createElement(g,{data:this.state.resumeData.portfolio}),r.a.createElement(v,{data:this.state.resumeData.main}),r.a.createElement(p,{data:this.state.resumeData.main}))}}]),t}(n.Component),b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/amayaDev",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/amayaDev","/service-worker.js");b?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):w(a,e)}))}}()},9:function(e){e.exports=JSON.parse('{"main":{"name":"Ruth Amaya","occupation":"Software Developer","description":"Currently, I am employed as a full-time intern at JB Hunt working in the E&T department to expand my skill set and advance my career","image":"profilepic.jpg","bio":"After several years in the workforce, I decided it was time for a career change. The evolving world of technology called to me. I enrolled in a front-end development bootcamp and began my journey. Being a problem-solver, I enjoy puzzles, challenges, and riddles. Web development has allowed me to work doing what I love.","contactmessage":"Got a puzzle for me? I would love to hear from you. How can I help?","email":"ruthamaya91@gmail.com","phone":"479-226-2528","address":{"street":"811 North 34th St","city":"Fort Smith","state":"AR","zip":"72903"},"resumedownload":"https://drive.google.com/open?id=1X6NvVvhca3E2Wx2YFmYBGIWCp1tBqbos","social":[{"name":"linkedin","url":"https://linkedin.com/in/ruthamaya","className":"fa fa-linkedin"},{"name":"github","url":"https://github.com/amaya91","className":"fa fa-github"}]},"resume":{"skillmessage":"Technology is ever-changing. As developers, we have to be willing to adapt. I\'m always up for a new challenge of learning a new language or framework. Ultimately, any new tech you learn will make you a better developer and allow you gain better understanding. ","education":[{"school":"University of Arkansas","degree":"Front-End Web Development","graduated":"March 2020","description":"Describe your experience at school, what you learned, what useful skills you have acquired etc."},{"school":"University of Arkansas, Fort Smith","degree":"Business Administration","graduated":"December 2009","description":"Describe your experience at school, what you learned, what useful skills you have acquired etc."}],"work":[{"company":"JB Hunt","title":"Information Services Intern ","years":"March 2020 - Present","description":"Worked on the DCS Load Planning team in an Agile environment learning popular back-end technologies for over 2 months. I completed tasks and provided updates on the status of these tasks. Currently working with the mobile development team to add features including banner notifications and dark mode to the Drive app."},{"company":"Harvest Time Academy","title":"Lead Teacher","years":"February 2017 - March 2020","description":"Responsible for monitoring academic and emotional development of children. Actively trained assistant teachers to develop an efficient teaching team. "},{"company":"Simmons Foods","title":"Shipping Supervisor","years":"January 2013 - June 2016","description":"Developed and implemented a quality control system for real-time checks of trailers using GoogleForms on a mobile device. Included data validation for temperature and seal checks using conditional formatting. "},{"company":"Simmons Foods","title":"Production Supervisor","years":"September 2009 - October 2012","description":"Created both training and rotation schedules to help reduce overtime and keep it under 3% as part of a LEAN manufacturing project. Organized scheduling and training of employees. "}],"skills":[{"name":"React Native","level":"50%"},{"name":"JavaScript","level":"60%"},{"name":"ReactJs","level":"50%"},{"name":"Spring Boot","level":"40%"},{"name":"Angular","level":"65%"},{"name":"Java","level":"40%"},{"name":"Python","level":"30%"}]},"portfolio":{"projects":[{"title":"Gif-Lib","category":"Gif library built using the Spring Boot framework(offline)","image":"gif-lib.jpg","url":"https://github.com/amaya91/giflib-Springboot"},{"title":"MomWebDevity","category":"Online forum written in Python using Django","image":"momwebdevity.jpg","url":"http://ruthamaya.pythonanywhere.com/"},{"title":"The R Word","category":"Demo project for class created using React","image":"theRword.jpg","url":"https://amaya91.github.io/forum-react"},{"title":"Resume Website","category":"Resume site written in React","image":"portfolio.jpg","url":"#"},{"title":"Patient Intake System","category":"A Spring Boot project using Java and JUnit5 for testing(offline)","image":"patient-intake.jpg","url":"https://github.com/amaya91/Patient-Intake"},{"title":"Book IO","category":"Mobile book database manager written using React Native(offline)","image":"bookIO.jpg","url":"https://github.com/amaya91/book-manager"},{"title":"Music Artist Site","category":"Music Artist site created using Angular(offline)","image":"easite.png","url":"https://github.com/amaya91/angular-easite"},{"title":"Employee Database","category":"Spring Boot api that returns employee data from an H2 in-memory database(offline)","image":"emp-tracker.jpg","url":"https://github.com/amaya91/Employee-Tracker"}]}}')}},[[10,1,2]]]);
//# sourceMappingURL=main.b4f22202.chunk.js.map