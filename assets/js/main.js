const P="+918871514166";
const nav=[["index.html","मुख्य पृष्ठ","Home"],
["हमारे बारे में","About",[["about.html","विद्यालय परिचय","About Us"],["director.html","संचालक संदेश","Director"]]],
["शिक्षा","Academics",[["academics.html","शैक्षणिक","Academics"],["results.html","परीक्षा परिणाम","Results"],["gyankosh.html","ज्ञानकोश","Gyankosh"]]],
["परिसर","Campus",[["infrastructure.html","सुविधाएँ","Infrastructure"],["library.html","Tanishqe Library","Study Space"],["boarding.html","छात्रावास","Hostel"],["gallery.html","फ़ोटो गैलरी","Gallery"]]],
["activities.html","गतिविधियाँ","Activities"],["updates.html","सूचनाएँ","Notices"],["contact.html","संपर्क","Contact"]];
const cur=location.pathname.split("/").pop()||"index.html";
const a=(h,t,e)=>`<a href="${h}"${h===cur?' aria-current="page"':""}>${t}${e?`<small>${e}</small>`:""}</a>`;
const items=nav.map(n=>Array.isArray(n[2])?`<li><button class="t" aria-expanded="false">${n[0]} ▾</button><ul class="sub">${n[2].map(s=>`<li>${a(...s)}</li>`).join("")}</ul></li>`:`<li>${a(...n)}</li>`).join("");
document.head.insertAdjacentHTML("beforeend",'<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Mukta:wght@400;600&family=Tiro+Devanagari+Hindi&display=swap">');
document.body.insertAdjacentHTML("afterbegin",`<a class="skip" href="#main">मुख्य सामग्री पर जाएँ</a>
<div class="strip"><div class="wrap"><span class="sh">ॐ असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । मृत्योर्मा अमृतं गमय ।</span><span><a href="tel:${P}">☎ 88715 14166</a><a href="mailto:help@rcvschool.org">✉ help@rcvschool.org</a></span></div></div>
<header class="top"><div class="bar wrap"><a class="brand" href="index.html"><img src="assets/img/rcvlgo-1.png" alt="RCV लोगो"><span><b>श्री रमेशचंद्र आवासीय विद्यालय</b><small>हरपालपुर, छतरपुर (म.प्र.) · स्थापना 2011</small></span></a>
<button class="menu" aria-expanded="false" aria-controls="nv">☰ मेनू</button>
<nav id="nv" aria-label="मुख्य मेनू"><ul>${items}<li><a class="cta-s" href="admissions.html">प्रवेश जानकारी</a></li></ul></nav></div></header>`);
if(cur==="index.html")document.querySelector("header.top").insertAdjacentHTML("afterend",'<div class="ticker"><b>सूचना</b><div>विद्यालय में प्रवेश, शैक्षणिक कार्यक्रमों और उपलब्ध सुविधाओं की जानकारी के लिए विद्यालय कार्यालय से संपर्क करें।</div></div>');
document.body.insertAdjacentHTML("beforeend",`<div class="band"><div class="wrap"><div><h2>विद्यालय में प्रवेश की जानकारी</h2><p>आओ देखो, फिर निर्णय लो। विद्यालय भ्रमण या जानकारी के लिए संपर्क करें।</p></div><div><a class="btn" href="admissions.html">प्रवेश जानकारी</a><a class="btn o" href="tel:${P}">☎ 88715 14166</a></div></div></div>
<footer><div class="wrap"><div class="grid"><div><div class="fb"><img src="assets/img/rcvlgo-1.png" alt=""><h3>श्री रमेशचंद्र सोनी<br>आवासीय विद्यालय</h3></div>झाँसी–मिर्ज़ापुर हाईवे, रेलवे क्रॉसिंग के पास,<br>हरपालपुर – 471111, म.प्र.<br><a href="tel:${P}">88715 14166</a> · <a href="tel:+919039552145">90395 52145</a><br><a href="mailto:help@rcvschool.org">help@rcvschool.org</a></div>
<div><h3>कार्यालय समय</h3>सोमवार – शनिवार<br>प्रातः 8:30 – सायं 4:30<br>Mon – Sat, 8:30 am – 4:30 pm</div>
<div><h3>त्वरित लिंक</h3><ul><li><a href="about.html">About Us</a></li><li><a href="admissions.html">Admissions</a></li><li><a href="boarding.html">Hostel</a></li><li><a href="library.html">Tanishqe Library</a></li><li><a href="results.html">Results</a></li></ul></div>
<div><h3>सहायता</h3><ul><li><a href="contact.html">Contact Us</a></li><li><a href="gallery.html">Gallery</a></li><li><a href="privacy-policy.html">Privacy Policy</a></li><li><a href="terms-and-conditions.html">Terms &amp; Conditions</a></li><li><a href="https://maps.app.goo.gl/AuHjsQ93wWPY2Yj77">Google Maps</a></li></ul></div></div>
<p class="copy">© <span id="copyright-year">2026</span> Shri Rameshchandra Soni Residential School, Harpalpur. All rights reserved. Website developed by <a href="https://aarunyawebsolutions.com/" target="_blank" rel="noopener noreferrer" title="Aarunya Web Solutions — Website Design and Development">Aarunya Web Solutions</a>.</p></div></footer>
<div class="mb"><a href="tel:${P}">☎ कॉल करें</a><a href="admissions.html">प्रवेश</a><a href="https://wa.me/${P.slice(1)}">WhatsApp</a></div>
<div id="lb" role="dialog" aria-label="फ़ोटो"><img alt=""></div>`);
const m=document.querySelector(".menu"),nv=document.getElementById("nv");
m.onclick=()=>m.setAttribute("aria-expanded",nv.classList.toggle("open"));
nv.querySelectorAll("button.t").forEach(b=>b.onclick=()=>b.setAttribute("aria-expanded",b.parentElement.classList.toggle("open")));
document.onkeydown=e=>{if(e.key==="Escape"){lb.classList.remove("on");nv.classList.remove("open");document.querySelectorAll("#nv li.open").forEach(l=>l.classList.remove("open"))}};
const lb=document.getElementById("lb");lb.onclick=()=>lb.classList.remove("on");
document.querySelectorAll(".gal img,.lab img").forEach(i=>i.onclick=()=>{lb.firstChild.src=i.src;lb.firstChild.alt=i.alt;lb.classList.add("on")});

/* RCV POLISH PHASE 1 */
(() => {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // Keep the copyright year current.
  const year = document.getElementById("copyright-year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Improve image decoding and defer images that are well below the fold.
  document.querySelectorAll("main img").forEach((img) => {
    if (!img.hasAttribute("decoding")) {
      img.decoding = "async";
    }

    const rect = img.getBoundingClientRect();
    const isLikelyBelowFold =
      rect.top > Math.max(window.innerHeight * 1.2, 900);

    const isHeroImage = img.closest(".hero");

    if (
      isLikelyBelowFold &&
      !isHeroImage &&
      !img.hasAttribute("loading")
    ) {
      img.loading = "lazy";
    }
  });

  // Close the mobile navigation after selecting a destination.
  const nav = document.getElementById("nv");
  const menu = document.querySelector(".menu");

  if (nav && menu) {
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menu.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Reveal content gently as it enters the viewport.
  // Unsupported browsers and reduced-motion users keep content visible.
  if (
    reduceMotion ||
    !("IntersectionObserver" in window)
  ) {
    return;
  }

  const targets = document.querySelectorAll(
    "main > section, main .stats, main .card, main .msg, main .notice"
  );

  if (!targets.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: "0px 0px -40px 0px",
    threshold: 0.08
  });

  targets.forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
  });

  document.body.classList.add("motion-ready");

  // Fail-safe: never leave content hidden if observation stalls.
  window.setTimeout(() => {
    targets.forEach((element) => {
      element.classList.add("is-visible");
    });
    observer.disconnect();
  }, 8000);
})();
