// Simple JS to populate dynamic bits and handle UI
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Mobile nav
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', ()=> nav.classList.toggle('open'));
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if(!href || href === '#') return;
    const target = document.querySelector(href);
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth'});
      nav?.classList.remove('open');
    }
  });
});

// Demo projects/publications (you can edit here)
const projects = [
  {
    title: "Customer Churn Prediction",
    desc: "Built ML pipeline to predict churn and recommend retention actions.",
    img: "assets/placeholder.jpg",
    tags: ["Python","scikit‑learn","EDA"]
  },
  {
    title: "Sales Analytics Dashboard",
    desc: "Interactive dashboard for KPIs and cohort analysis.",
    img: "assets/placeholder.jpg",
    tags: ["Power BI","DAX","SQL"]
  },
  {
    title: "NLP Topic Modeling",
    desc: "Discovered themes from support tickets to reduce resolution time.",
    img: "assets/placeholder.jpg",
    tags: ["NLP","LDA","Visualization"]
  }
];

const projectGrid = document.getElementById('projectGrid');
if (projectGrid){
  projects.forEach(p=>{
    const el = document.createElement('article');
    el.className = 'project-card';
    el.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <div class="body">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
      </div>`;
    projectGrid.appendChild(el);
  });
}

const pubs = [
  { title: "A Study on Feature Selection for Imbalanced Data", meta: "Conference Paper • 2024" },
  { title: "Evaluating Topic Models for Customer Feedback", meta: "Preprint • 2023" },
];
const pubList = document.getElementById('pubList');
if (pubList){
  pubs.forEach(p=>{
    const li = document.createElement('li');
    li.className = 'pub-item';
    li.innerHTML = `<h4>${p.title}</h4><p>${p.meta}</p>`;
    pubList.appendChild(li);
  });
}

// Fake contact form submit
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');
if (form && note){
  form.addEventListener('submit', e=>{
    e.preventDefault();
    note.hidden = false;
    form.reset();
  });
}


// === Highlight active nav item on scroll
const sections = ['home','about','publications','skills','projects','contact']
  .map(id => document.getElementById(id))
  .filter(Boolean);

const navLinks = Array.from(document.querySelectorAll('#nav a'));

function setActive(hash){
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === hash));
}

if (sections.length && navLinks.length){
  // Initial state
  setActive('#home');

  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const id = '#' + entry.target.id;
        setActive(id);
      }
    });
  },{
    rootMargin: '-45% 0px -50% 0px', // middle of viewport
    threshold: 0.01
  });

  sections.forEach(s => obs.observe(s));

  // Also update on click
  navLinks.forEach(a=>{
    a.addEventListener('click', ()=> setActive(a.getAttribute('href')));
  });
}


// === Hero title letter animation ===
(function(){
  const el = document.getElementById('heroTitle');
  if(!el) return;
  const fullText = el.textContent.trim();
  const name = el.dataset.name || "Sadia Islam";
  const nameStart = fullText.indexOf(name);
  el.innerHTML = ""; // rebuild with span chars

  function spanify(text, isAccent){
    return text.split("").map(ch => {
      const s = document.createElement('span');
      s.className = 'char' + (isAccent ? ' accent' : '');
      if(isAccent) s.style.color = 'var(--green)';
      s.textContent = ch;
      el.appendChild(s);
      return s;
    });
  }
  const before = fullText.slice(0, Math.max(0,nameStart));
  const namePart = nameStart >= 0 ? fullText.slice(nameStart, nameStart + name.length) : "";
  const after = nameStart >= 0 ? fullText.slice(nameStart + name.length) : fullText;

  const chars = [
    ...spanify(before, false),
    ...spanify(namePart, true),
    ...spanify(after, false)
  ];

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e => {
      if(e.isIntersecting){
        chars.forEach((c,i)=> setTimeout(()=> c.classList.add('in'), i*18));
        // gentle reveal for chips & ctas
        document.querySelectorAll('.hero-specialties, .hero-v2-ctas').forEach((n,idx)=>{
          n.style.opacity = 0; n.style.transform = 'translateY(10px)';
          setTimeout(()=>{ n.style.transition='all .35s ease'; n.style.opacity=1; n.style.transform='none'; }, 350 + idx*120);
        });
        io.disconnect();
      }
    });
  }, {threshold: 0.4});
  io.observe(el);
})();


// === Hero title letter animation (accent name) ===
(function(){
  const el = document.getElementById('heroTitle');
  if(!el) return;
  const fullText = el.textContent.trim();
  const name = el.dataset.name || "Sadia Islam";
  const nameStart = fullText.indexOf(name);
  el.innerHTML = "";

  function makeSpan(ch, isAccent){
    const s = document.createElement('span');
    s.className = 'char' + (isAccent ? ' accent' : '');
    s.textContent = ch;
    el.appendChild(s);
    return s;
  }

  const before = fullText.slice(0, Math.max(0,nameStart));
  const namePart = nameStart >= 0 ? fullText.slice(nameStart, nameStart + name.length) : "";
  const after = nameStart >= 0 ? fullText.slice(nameStart + name.length) : fullText;

  const chars = [];
  [...before].forEach(c => chars.push(makeSpan(c,false)));
  [...namePart].forEach(c => chars.push(makeSpan(c,true)));
  [...after].forEach(c => chars.push(makeSpan(c,false)));

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e => {
      if(e.isIntersecting){
        chars.forEach((c,i)=> {
          c.style.opacity = 0; c.style.transform = 'translateY(24px)';
          setTimeout(()=>{ c.style.transition='transform .5s cubic-bezier(.2,.8,.2,1), opacity .5s ease'; c.style.opacity=1; c.style.transform='none'; }, 16*i);
        });
        io.disconnect();
      }
    });
  }, {threshold: 0.4});
  io.observe(el);
})();
