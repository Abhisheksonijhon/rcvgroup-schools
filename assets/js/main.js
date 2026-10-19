const pages=[["index.html","मुख्य पृष्ठ"],["about.html","हमारे बारे में"],["admissions.html","प्रवेश"],["infrastructure.html","सुविधाएँ"],["results.html","परिणाम"],["updates.html","सूचनाएँ"],["gallery.html","गैलरी"],["gyankosh.html","ज्ञानकोश"],["contact.html","संपर्क"]];
const cur=location.pathname.split("/").pop()||"index.html";
document.head.insertAdjacentHTML("beforeend",'<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Mukta:wght@400;600&family=Tiro+Devanagari+Hindi&display=swap">');
document.body.insertAdjacentHTML("afterbegin",`<div class="alert">प्रवेश प्रारम्भ – सत्र 2024-25 · <a href="admissions.html">विवरण देखें</a></div>
<header class="top"><div class="wrap bar"><a class="brand" href="index.html"><img src="assets/img/rcvlgo-1.png" alt="RCV लोगो"><span><b>श्री रमेशचंद्र आवासीय विद्यालय</b><small>हरपालपुर, छतरपुर (म.प्र.) · MP Board</small></span></a>
<button class="menu" aria-expanded="false" aria-controls="nv">मेनू</button>
<nav id="nv" aria-label="मुख्य मेनू">${pages.map(([h,t])=>`<a href="${h}"${h===cur?' aria-current="page"':""}>${t}</a>`).join("")}</nav></div></header>`);
document.body.insertAdjacentHTML("beforeend",`<footer><div class="wrap"><div class="grid">
<div><h3>पता</h3>झाँसी–मिर्ज़ापुर हाईवे, रेलवे क्रॉसिंग के पास,<br>हरपालपुर – 471111, मध्य प्रदेश<p><a href="tel:+918871514166">88715 14166</a><br><a href="mailto:help@rcvschool.org">help@rcvschool.org</a></p></div>
<div><h3>कार्यालय समय</h3>सोमवार से शनिवार<br>सुबह 8:30 – शाम 4:30</div>
<div><iframe title="विद्यालय का नक्शा" loading="lazy" src="https://maps.google.com/maps?q=25.2932295,79.3315584&z=15&output=embed"></iframe></div></div>
<p class="copy">© 2024 श्री रमेशचंद्र आवासीय विद्यालय, हरपालपुर · वेबसाइट: <a href="https://abhisheksonijhon.github.io/Portfolio-Abhishek/">UMA &amp; SONS</a></p></div></footer>
<div id="lb" role="dialog" aria-label="फ़ोटो"><img alt=""></div>`);
const b=document.querySelector(".menu"),n=document.getElementById("nv");
b.onclick=()=>b.setAttribute("aria-expanded",n.classList.toggle("open"));
const lb=document.getElementById("lb");
document.querySelectorAll(".gal img,.lab img").forEach(i=>i.onclick=()=>{lb.firstChild.src=i.src;lb.classList.add("on")});
lb.onclick=()=>lb.classList.remove("on");
