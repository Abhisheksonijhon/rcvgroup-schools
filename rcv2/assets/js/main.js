const P="+918871514166";
const nav=[["index.html","मुख्य पृष्ठ","Home"],
["हमारे बारे में","About",[["about.html","विद्यालय परिचय","About Us"],["director.html","संचालक संदेश","Director"]]],
["शिक्षा","Academics",[["academics.html","शैक्षणिक","Academics"],["results.html","परीक्षा परिणाम","Results"],["gyankosh.html","ज्ञानकोश","Gyankosh"]]],
["परिसर","Campus",[["infrastructure.html","सुविधाएँ","Infrastructure"],["boarding.html","छात्रावास","Hostel"],["gallery.html","फ़ोटो गैलरी","Gallery"]]],
["activities.html","गतिविधियाँ","Activities"],["updates.html","सूचनाएँ","Notices"],["contact.html","संपर्क","Contact"]];
const cur=location.pathname.split("/").pop()||"index.html";
const a=(h,t,e)=>`<a href="${h}"${h===cur?' aria-current="page"':""}>${t}${e?`<small>${e}</small>`:""}</a>`;
const items=nav.map(n=>Array.isArray(n[2])?`<li><button class="t" aria-expanded="false">${n[0]} ▾</button><ul class="sub">${n[2].map(s=>`<li>${a(...s)}</li>`).join("")}</ul></li>`:`<li>${a(...n)}</li>`).join("");
document.head.insertAdjacentHTML("beforeend",'<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Mukta:wght@400;600&family=Tiro+Devanagari+Hindi&display=swap">');
document.body.insertAdjacentHTML("afterbegin",`<a class="skip" href="#main">मुख्य सामग्री पर जाएँ</a>
<div class="strip"><div class="wrap"><span class="sh">ॐ असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । मृत्योर्मा अमृतं गमय ।</span><span><a href="tel:${P}">☎ 88715 14166</a><a href="mailto:help@rcvschool.org">✉ help@rcvschool.org</a></span></div></div>
<header class="top"><div class="bar wrap"><a class="brand" href="index.html"><img src="assets/img/rcvlgo-1.png" alt="RCV लोगो"><span><b>श्री रमेशचंद्र आवासीय विद्यालय</b><small>हरपालपुर, छतरपुर (म.प्र.) · स्थापना 2011</small></span></a>
<button class="menu" aria-expanded="false" aria-controls="nv">☰ मेनू</button>
<nav id="nv" aria-label="मुख्य मेनू"><ul>${items}<li><a class="cta-s" href="admissions.html">प्रवेश 2024-25</a></li></ul></nav></div></header>`);
if(cur==="index.html")document.querySelector("header.top").insertAdjacentHTML("afterend",'<div class="ticker"><b>सूचना</b><div>प्रवेश प्रारम्भ – सत्र 2024-25 &nbsp;•&nbsp; MP बोर्ड 10वीं व 8वीं परिणाम 2023: 100% छात्र प्रथम श्रेणी से उत्तीर्ण &nbsp;•&nbsp; ड्रॉइंग मेगा प्रतियोगिता – 21 जुलाई 2024 &nbsp;•&nbsp; नि:शुल्क योग, आत्मरक्षा व कोचिंग</div></div>');
document.body.insertAdjacentHTML("beforeend",`<div class="band"><div class="wrap"><div><h2>प्रवेश प्रारम्भ – सत्र 2024-25</h2><p>आओ देखो, फिर निर्णय लो। विद्यालय भ्रमण या जानकारी के लिए संपर्क करें।</p></div><div><a class="btn" href="admissions.html">प्रवेश जानकारी</a><a class="btn o" href="tel:${P}">☎ 88715 14166</a></div></div></div>
<footer><div class="wrap"><div class="grid"><div><div class="fb"><img src="assets/img/rcvlgo-1.png" alt=""><h3>श्री रमेशचंद्र सोनी<br>आवासीय विद्यालय</h3></div>झाँसी–मिर्ज़ापुर हाईवे, रेलवे क्रॉसिंग के पास,<br>हरपालपुर – 471111, म.प्र.<br><a href="tel:${P}">88715 14166</a> · <a href="tel:+919039552145">90395 52145</a><br><a href="mailto:help@rcvschool.org">help@rcvschool.org</a></div>
<div><h3>कार्यालय समय</h3>सोमवार – शनिवार<br>प्रातः 8:30 – सायं 4:30<br>Mon – Sat, 8:30 am – 4:30 pm</div>
<div><h3>त्वरित लिंक</h3><ul><li><a href="about.html">About Us</a></li><li><a href="admissions.html">Admissions</a></li><li><a href="boarding.html">Hostel</a></li><li><a href="results.html">Results</a></li></ul></div>
<div><h3>सहायता</h3><ul><li><a href="contact.html">Contact Us</a></li><li><a href="gallery.html">Gallery</a></li><li><a href="https://maps.app.goo.gl/AuHjsQ93wWPY2Yj77">Google Maps</a></li></ul></div></div>
<p class="copy">© 2024 श्री रमेशचंद्र आवासीय विद्यालय, हरपालपुर · सर्वाधिकार सुरक्षित · वेबसाइट: <a href="https://abhisheksonijhon.github.io/Portfolio-Abhishek/">UMA &amp; SONS</a></p></div></footer>
<div class="mb"><a href="tel:${P}">☎ कॉल करें</a><a href="admissions.html">प्रवेश</a><a href="https://wa.me/${P.slice(1)}">WhatsApp</a></div>
<div id="lb" role="dialog" aria-label="फ़ोटो"><img alt=""></div>`);
const m=document.querySelector(".menu"),nv=document.getElementById("nv");
m.onclick=()=>m.setAttribute("aria-expanded",nv.classList.toggle("open"));
nv.querySelectorAll("button.t").forEach(b=>b.onclick=()=>b.setAttribute("aria-expanded",b.parentElement.classList.toggle("open")));
document.onkeydown=e=>{if(e.key==="Escape"){lb.classList.remove("on");nv.classList.remove("open");document.querySelectorAll("#nv li.open").forEach(l=>l.classList.remove("open"))}};
const lb=document.getElementById("lb");lb.onclick=()=>lb.classList.remove("on");
document.querySelectorAll(".gal img,.lab img").forEach(i=>i.onclick=()=>{lb.firstChild.src=i.src;lb.firstChild.alt=i.alt;lb.classList.add("on")});
