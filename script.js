/* =====================================================
   Dhanmala Giri | Portfolio — script.js
   Vanilla JS (ES6+) — No frameworks
   ===================================================== */

'use strict';

/* ===== DATA ===== */

const SERVICES = [
  {
    id: 1,
    icon: 'fas fa-search',
    title: 'SEO Strategy',
    short: 'Improve organic visibility and drive qualified traffic with keyword research and on-page optimization.',
    details: `<h3 class="font-display text-2xl font-bold gold-text mb-4">SEO Strategy</h3>
      <p class="text-gray-400 leading-relaxed mb-4">Comprehensive search engine optimization — from initial audit to implementation. I focus on understanding your audience's search intent and aligning your content to meet it at every stage of the funnel.</p>
      <ul class="space-y-2 text-gray-400 text-sm">
        <li class="flex items-start gap-2"><i class="fas fa-check text-gold-400 mt-0.5 flex-shrink-0"></i>Keyword research & competitive analysis</li>
        <li class="flex items-start gap-2"><i class="fas fa-check text-gold-400 mt-0.5 flex-shrink-0"></i>On-page & technical SEO audits</li>
        <li class="flex items-start gap-2"><i class="fas fa-check text-gold-400 mt-0.5 flex-shrink-0"></i>Content gap analysis</li>
        <li class="flex items-start gap-2"><i class="fas fa-check text-gold-400 mt-0.5 flex-shrink-0"></i>Link building strategy</li>
        <li class="flex items-start gap-2"><i class="fas fa-check text-gold-400 mt-0.5 flex-shrink-0"></i>Monthly performance reporting</li>
      </ul>`,
    color: '#e6b422',
  },
  {
    id: 2,
    icon: 'fas fa-share-alt',
    title: 'Social Media Marketing',
    short: 'Build community and brand awareness through consistent, creative social media strategies.',
    details: `<h3 class="font-display text-2xl font-bold gold-text mb-4">Social Media Marketing</h3>
      <p class="text-gray-400 leading-relaxed mb-4">Strategy-first social media management that grows followers, engagement, and brand loyalty. I craft content calendars, manage communities, and run data-informed campaigns across platforms.</p>
      <ul class="space-y-2 text-gray-400 text-sm">
        <li class="flex items-start gap-2"><i class="fas fa-check text-gold-400 mt-0.5 flex-shrink-0"></i>Content calendar creation</li>
        <li class="flex items-start gap-2"><i class="fas fa-check text-gold-400 mt-0.5 flex-shrink-0"></i>Audience growth strategies</li>
        <li class="flex items-start gap-2"><i class="fas fa-check text-gold-400 mt-0.5 flex-shrink-0"></i>Instagram, Facebook, LinkedIn, TikTok</li>
        <li class="flex items-start gap-2"><i class="fas fa-check text-gold-400 mt-0.5 flex-shrink-0"></i>Engagement analytics & reporting</li>
        <li class="flex items-start gap-2"><i class="fas fa-check text-gold-400 mt-0.5 flex-shrink-0"></i>Hashtag research</li>
      </ul>`,
    color: '#818cf8',
  },
  {
    id: 3,
    icon: 'fas fa-pen-nib',
    title: 'Content Strategy',
    short: 'Craft compelling, SEO-optimized content that educates, engages, and converts your audience.',
    details: `<h3 class="font-display text-2xl font-bold gold-text mb-4">Content Strategy</h3>
      <p class="text-gray-400 leading-relaxed mb-4">Great content is the engine of digital growth. I develop content frameworks that align your brand voice with audience needs and business goals — across blogs, email, and social channels.</p>
      <ul class="space-y-2 text-gray-400 text-sm">
        <li class="flex items-start gap-2"><i class="fas fa-check text-gold-400 mt-0.5 flex-shrink-0"></i>Brand voice development</li>
        <li class="flex items-start gap-2"><i class="fas fa-check text-gold-400 mt-0.5 flex-shrink-0"></i>Blog & article writing (SEO-optimized)</li>
        <li class="flex items-start gap-2"><i class="fas fa-check text-gold-400 mt-0.5 flex-shrink-0"></i>Content funnel mapping</li>
        <li class="flex items-start gap-2"><i class="fas fa-check text-gold-400 mt-0.5 flex-shrink-0"></i>Editorial calendar management</li>
      </ul>`,
    color: '#34d399',
  },
  {
    id: 4,
    icon: 'fas fa-envelope-open-text',
    title: 'Email Marketing',
    short: 'Design and execute email campaigns that nurture leads and drive repeat conversions.',
    details: `<h3 class="font-display text-2xl font-bold gold-text mb-4">Email Marketing</h3>
      <p class="text-gray-400 leading-relaxed mb-4">Email remains one of the highest-ROI digital marketing channels. I design campaigns that deliver the right message at the right time — from welcome sequences to re-engagement flows.</p>
      <ul class="space-y-2 text-gray-400 text-sm">
        <li class="flex items-start gap-2"><i class="fas fa-check text-gold-400 mt-0.5 flex-shrink-0"></i>Campaign strategy & copywriting</li>
        <li class="flex items-start gap-2"><i class="fas fa-check text-gold-400 mt-0.5 flex-shrink-0"></i>List segmentation</li>
        <li class="flex items-start gap-2"><i class="fas fa-check text-gold-400 mt-0.5 flex-shrink-0"></i>A/B testing subject lines</li>
        <li class="flex items-start gap-2"><i class="fas fa-check text-gold-400 mt-0.5 flex-shrink-0"></i>Automation workflows (Mailchimp)</li>
      </ul>`,
    color: '#f472b6',
  },
  {
    id: 5,
    icon: 'fas fa-chart-bar',
    title: 'Analytics & Reporting',
    short: 'Turn raw data into clear insights — track performance, identify trends, and optimize campaigns.',
    details: `<h3 class="font-display text-2xl font-bold gold-text mb-4">Analytics & Reporting</h3>
      <p class="text-gray-400 leading-relaxed mb-4">Data without interpretation is just noise. I set up tracking systems and produce clear, actionable reports that show exactly what's working and where to double down.</p>
      <ul class="space-y-2 text-gray-400 text-sm">
        <li class="flex items-start gap-2"><i class="fas fa-check text-gold-400 mt-0.5 flex-shrink-0"></i>Google Analytics setup & reporting</li>
        <li class="flex items-start gap-2"><i class="fas fa-check text-gold-400 mt-0.5 flex-shrink-0"></i>Social media insights analysis</li>
        <li class="flex items-start gap-2"><i class="fas fa-check text-gold-400 mt-0.5 flex-shrink-0"></i>KPI dashboard creation</li>
        <li class="flex items-start gap-2"><i class="fas fa-check text-gold-400 mt-0.5 flex-shrink-0"></i>Monthly performance summaries</li>
      </ul>`,
    color: '#60a5fa',
  },
  {
    id: 6,
    icon: 'fas fa-globe',
    title: 'Web Presence',
    short: 'Build and optimise your digital footprint — from landing pages to basic web development.',
    details: `<h3 class="font-display text-2xl font-bold gold-text mb-4">Web Presence</h3>
      <p class="text-gray-400 leading-relaxed mb-4">Leveraging my technical background in HTML, CSS, and JavaScript, I help brands create an online home that looks professional, loads fast, and converts visitors.</p>
      <ul class="space-y-2 text-gray-400 text-sm">
        <li class="flex items-start gap-2"><i class="fas fa-check text-gold-400 mt-0.5 flex-shrink-0"></i>Landing page design & copy</li>
        <li class="flex items-start gap-2"><i class="fas fa-check text-gold-400 mt-0.5 flex-shrink-0"></i>WordPress setup & management</li>
        <li class="flex items-start gap-2"><i class="fas fa-check text-gold-400 mt-0.5 flex-shrink-0"></i>Page speed optimisation</li>
        <li class="flex items-start gap-2"><i class="fas fa-check text-gold-400 mt-0.5 flex-shrink-0"></i>Basic HTML/CSS customisation</li>
      </ul>`,
    color: '#a78bfa',
  },
];

const PROJECTS = [
  {
    id: 1,
    title: 'Local Business SEO Boost',
    category: 'seo',
    summary: 'Achieved 3× organic traffic growth for a local restaurant by revamping their Google My Business profile and on-page SEO.',
    description: `<p class="text-gray-400 leading-relaxed mb-4">Conducted a full SEO audit for a local restaurant struggling to rank in Google's local pack. The project included keyword research targeting "near me" queries, GMB profile optimization, and building local citations.</p>
      <p class="text-gray-400 leading-relaxed mb-4"><strong class="text-gold-300">Results:</strong> 3× increase in organic traffic over 3 months, 40% rise in phone calls from search, and consistent top-3 placement in local map results.</p>`,
    tags: ['SEO', 'Local Search', 'GMB'],
    color: '#e6b422',
    icon: 'fas fa-search',
    outcomes: ['300% organic traffic increase', '40% more phone inquiries', 'Top-3 Local Pack ranking'],
  },
  {
    id: 2,
    title: 'Instagram Growth Campaign',
    category: 'social',
    summary: 'Grew a fashion brand\'s Instagram following by 2,500+ in 60 days through targeted content strategy and hashtag research.',
    description: `<p class="text-gray-400 leading-relaxed mb-4">Designed a content calendar and hashtag strategy for a small fashion brand. Created a consistent posting schedule with Reels, carousel posts, and Stories. Analysed competitor accounts and identified niche hashtag clusters.</p>
      <p class="text-gray-400 leading-relaxed mb-4"><strong class="text-gold-300">Results:</strong> 2,500+ new followers in 60 days, 4× higher engagement rate, and 3 successful brand collaborations initiated.</p>`,
    tags: ['Social Media', 'Instagram', 'Content'],
    color: '#818cf8',
    icon: 'fab fa-instagram',
    outcomes: ['2,500+ new followers in 60 days', '4× engagement rate', '3 brand collaborations'],
  },
  {
    id: 3,
    title: 'Blog Content Strategy',
    category: 'content',
    summary: 'Developed and executed a 3-month content plan for a tech startup, resulting in a 5× increase in blog-driven leads.',
    description: `<p class="text-gray-400 leading-relaxed mb-4">Performed a full content audit and gap analysis for a SaaS startup. Identified high-intent keywords with low competition, created a topic cluster strategy, and produced 12 long-form SEO articles.</p>
      <p class="text-gray-400 leading-relaxed mb-4"><strong class="text-gold-300">Results:</strong> 5× increase in organic blog traffic, articles ranked on first page for 8 target keywords, and measurable increase in demo signups from blog readers.</p>`,
    tags: ['Content', 'SEO', 'Strategy'],
    color: '#34d399',
    icon: 'fas fa-pen-nib',
    outcomes: ['5× blog-driven leads', '8 first-page keyword rankings', '12 long-form articles published'],
  },
  {
    id: 4,
    title: 'Email Nurture Sequence',
    category: 'content',
    summary: 'Designed a 7-email welcome sequence for an e-commerce brand that achieved a 45% open rate and 12% conversion.',
    description: `<p class="text-gray-400 leading-relaxed mb-4">Built a 7-step email automation sequence in Mailchimp for a new e-commerce brand's subscriber list. Wrote personalised, segmented copy for each stage of the buyer journey from awareness to purchase.</p>
      <p class="text-gray-400 leading-relaxed mb-4"><strong class="text-gold-300">Results:</strong> 45% average open rate (industry avg: 21%), 12% conversion rate on the final purchase email, and strong positive subscriber feedback.</p>`,
    tags: ['Email', 'Automation', 'Conversion'],
    color: '#f472b6',
    icon: 'fas fa-envelope',
    outcomes: ['45% email open rate', '12% conversion rate', '7-step automation sequence'],
  },
  {
    id: 5,
    title: 'Personal Portfolio Website',
    category: 'web',
    summary: 'Designed and developed this portfolio from scratch using HTML5, Tailwind CSS, and Vanilla JS with full responsiveness.',
    description: `<p class="text-gray-400 leading-relaxed mb-4">Conceptualised and built a professional portfolio website to showcase digital marketing projects and skills. Implemented dark/light mode, smooth scroll animations, modal interactions, a working contact form, and full mobile responsiveness.</p>
      <p class="text-gray-400 leading-relaxed mb-4"><strong class="text-gold-300">Tech Used:</strong> HTML5, Tailwind CSS (CDN), Vanilla JavaScript (ES6+), Web3Forms API, Intersection Observer API.</p>`,
    tags: ['Web', 'HTML/CSS', 'JS'],
    color: '#a78bfa',
    icon: 'fas fa-laptop-code',
    outcomes: ['Full mobile responsiveness', 'Dark/light mode', 'Working contact form'],
  },
  {
    id: 6,
    title: 'Social Media Analytics Report',
    category: 'seo',
    summary: 'Produced a detailed 30-day analytics report identifying growth opportunities for a lifestyle brand\'s social presence.',
    description: `<p class="text-gray-400 leading-relaxed mb-4">Compiled and analysed social media data across Instagram, Facebook, and Twitter for a lifestyle brand. Created a visual dashboard report identifying best-performing content types, optimal posting times, and audience demographics.</p>
      <p class="text-gray-400 leading-relaxed mb-4"><strong class="text-gold-300">Outcome:</strong> Clear actionable recommendations adopted by the brand led to a 30% improvement in average post reach over the following month.</p>`,
    tags: ['Analytics', 'Reporting', 'Social'],
    color: '#60a5fa',
    icon: 'fas fa-chart-bar',
    outcomes: ['30-day comprehensive report', '30% improvement in reach', 'Cross-platform analysis'],
  },
];

const SKILLS_DM = [
  { name: 'SEO', level: 80 },
  { name: 'Social Media Marketing', level: 85 },
  { name: 'Content Strategy', level: 78 },
  { name: 'Basic Analytics', level: 72 },
  { name: 'Email Marketing', level: 70 },
];

const SKILLS_TECH = [
  { name: 'HTML5', level: 88 },
  { name: 'CSS3', level: 82 },
  { name: 'Tailwind CSS', level: 80 },
  { name: 'JavaScript (Basic)', level: 65 },
];

const TIMELINE = [
  {
    year: '2024 – Present',
    title: 'Freelance Digital Marketing',
    org: 'Self-Employed',
    type: 'work',
    desc: 'Managing SEO, content creation, and social media for 3 small business clients. Delivering monthly reports and ongoing strategy adjustments.',
  },
  {
    year: '2023',
    title: 'Digital Marketing Intern',
    org: 'Local Media Agency, Nepal',
    type: 'work',
    desc: 'Assisted in managing social media accounts, creating content calendars, conducting keyword research, and analysing campaign performance.',
  },
  {
    year: '2021 – 2024',
    title: 'Bachelor of Computer Applications (BCA)',
    org: 'Tribhuvan University, Nepal',
    type: 'education',
    desc: 'Graduated with a solid foundation in programming, databases, and web technologies. Combined technical skills with a growing passion for digital marketing.',
  },
  {
    year: '2021',
    title: 'School Certificate (SEE)',
    org: 'Nepal',
    type: 'education',
    desc: 'Completed secondary education with distinction in mathematics and science.',
  },
];

const CERTS = [
  {
    id: 1,
    icon: 'fab fa-google',
    title: 'Google Digital Marketing Fundamentals',
    issuer: 'Google Garage',
    year: '2023',
    color: '#4285F4',
    badge: 'https://img.shields.io/badge/Google-4285F4?style=flat&logo=google&logoColor=white',
    details: `<div class="text-center mb-6">
      <div class="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mx-auto mb-4">
        <i class="fab fa-google text-2xl text-blue-400"></i>
      </div>
      <h3 class="font-display text-xl font-bold text-white mb-1">Google Digital Marketing Fundamentals</h3>
      <p class="text-gray-500 text-sm">Google Garage · 2023</p>
    </div>
    <p class="text-gray-400 text-sm leading-relaxed mb-4">Comprehensive course covering all pillars of digital marketing including SEO, SEM, social media, content marketing, analytics, mobile marketing, and e-commerce.</p>
    <div class="flex flex-wrap gap-2">
      <span class="tag-pill">SEO</span><span class="tag-pill">SEM</span><span class="tag-pill">Analytics</span><span class="tag-pill">E-commerce</span>
    </div>`,
  },
  {
    id: 2,
    icon: 'fab fa-hubspot',
    title: 'Inbound Marketing Certification',
    issuer: 'HubSpot Academy',
    year: '2023',
    color: '#FF7A59',
    details: `<div class="text-center mb-6">
      <div class="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center mx-auto mb-4">
        <i class="fab fa-hubspot text-2xl text-orange-400"></i>
      </div>
      <h3 class="font-display text-xl font-bold text-white mb-1">Inbound Marketing Certification</h3>
      <p class="text-gray-500 text-sm">HubSpot Academy · 2023</p>
    </div>
    <p class="text-gray-400 text-sm leading-relaxed mb-4">Mastered the inbound methodology — attracting, engaging, and delighting customers through content, email, social media, and conversion optimisation strategies.</p>
    <div class="flex flex-wrap gap-2">
      <span class="tag-pill">Inbound</span><span class="tag-pill">Content</span><span class="tag-pill">Lead Generation</span>
    </div>`,
  },
  {
    id: 3,
    icon: 'fas fa-code',
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    year: '2022',
    color: '#0a0a23',
    details: `<div class="text-center mb-6">
      <div class="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mx-auto mb-4">
        <i class="fas fa-code text-2xl text-purple-400"></i>
      </div>
      <h3 class="font-display text-xl font-bold text-white mb-1">Responsive Web Design</h3>
      <p class="text-gray-500 text-sm">freeCodeCamp · 2022</p>
    </div>
    <p class="text-gray-400 text-sm leading-relaxed mb-4">300+ hours of HTML and CSS training covering semantic HTML, CSS flexbox, grid, and responsive design principles. Built 5 certification projects.</p>
    <div class="flex flex-wrap gap-2">
      <span class="tag-pill">HTML5</span><span class="tag-pill">CSS3</span><span class="tag-pill">Responsive</span>
    </div>`,
  },
];

/* ===== HELPERS ===== */

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

function createEl(tag, classes = '', attrs = {}) {
  const el = document.createElement(tag);
  if (classes) el.className = classes;
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  return el;
}

/* ===== SCROLL PROGRESS ===== */
function initScrollProgress() {
  const bar = $('#scroll-progress');
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = pct + '%';
  }, { passive: true });
}

/* ===== STICKY NAVBAR ===== */
function initNavbar() {
  const nav = $('#navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.classList.add('glass', 'shadow-glass');
    } else {
      nav.classList.remove('glass', 'shadow-glass');
    }
  }, { passive: true });
}

/* ===== MOBILE HAMBURGER ===== */
function initHamburger() {
  const btn = $('#hamburger-btn');
  const menu = $('#mobile-menu');
  btn.addEventListener('click', () => {
    const isOpen = btn.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);
    menu.classList.toggle('hidden', !isOpen);
  });
  // Close on link click
  $$('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      menu.classList.add('hidden');
    });
  });
}

/* ===== DARK / LIGHT MODE ===== */
function initTheme() {
  const btn = $('#theme-toggle');
  const thumb = $('#theme-thumb');
  const body = document.getElementById('body');

  function applyTheme(isDark) {
    if (isDark) {
      body.classList.add('dark');
      body.classList.remove('light-mode');
      body.style.backgroundColor = '';
      body.style.color = '';
      thumb.style.transform = 'translateX(0)';
      thumb.innerHTML = '<i class="fas fa-moon text-[9px]"></i>';
    } else {
      body.classList.remove('dark');
      body.classList.add('light-mode');
      body.style.backgroundColor = '#fdfaf3';
      body.style.color = '#0d0f1a';
      thumb.style.transform = 'translateX(24px)';
      thumb.innerHTML = '<i class="fas fa-sun text-[9px]"></i>';
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = saved ? saved === 'dark' : prefersDark;
  applyTheme(isDark);

  btn.addEventListener('click', () => {
    const currentlyDark = body.classList.contains('dark');
    applyTheme(!currentlyDark);
  });
}

/* ===== CUSTOM CURSOR ===== */
function initCursor() {
  const dot = $('#cursor-dot');
  const ring = $('#cursor-ring');
  if (!dot || !ring) return;
  let mx = 0, my = 0;
  let rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';
  });

  function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.querySelectorAll('a, button, .card-hover').forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring.style.width = '50px';
      ring.style.height = '50px';
      ring.style.borderColor = 'rgba(230,180,34,0.7)';
    });
    el.addEventListener('mouseleave', () => {
      ring.style.width = '32px';
      ring.style.height = '32px';
      ring.style.borderColor = 'rgba(230,180,34,0.5)';
    });
  });
}

/* ===== BACK TO TOP ===== */
function initBackToTop() {
  const btn = $('#back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.style.opacity = '1';
      btn.style.pointerEvents = 'all';
    } else {
      btn.style.opacity = '0';
      btn.style.pointerEvents = 'none';
    }
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ===== INTERSECTION OBSERVER (REVEAL) ===== */
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  $$('.reveal').forEach(el => observer.observe(el));
}

/* ===== SKILL BARS ===== */
function buildSkills() {
  function renderSkill(skill) {
    return `
      <div class="space-y-2 reveal">
        <div class="flex justify-between items-center">
          <span class="text-sm font-medium text-gray-300">${skill.name}</span>
          <span class="font-mono text-xs text-gold-400">${skill.level}%</span>
        </div>
        <div class="h-2 bg-ink-600 rounded-full overflow-hidden">
          <div class="skill-bar-fill" data-level="${skill.level}" style="width:0%"></div>
        </div>
      </div>`;
  }

  $('#dm-skills').innerHTML = SKILLS_DM.map(renderSkill).join('');
  $('#tech-skills').innerHTML = SKILLS_TECH.map(renderSkill).join('');

  // Animate bars on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        $$('.skill-bar-fill').forEach(bar => {
          bar.style.width = bar.dataset.level + '%';
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });

  const skillsSection = $('#skills');
  if (skillsSection) observer.observe(skillsSection);
}

/* ===== SERVICES ===== */
function buildServices() {
  const grid = $('#services-grid');
  if (!grid) return;

  grid.innerHTML = SERVICES.map((s, i) => `
    <div class="reveal reveal-delay-${(i % 3) + 1} card-hover glass border border-white/8 rounded-2xl p-6 cursor-pointer group"
      data-service-id="${s.id}" role="button" tabindex="0" aria-label="View ${s.title} details">
      <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
        style="background:${s.color}18; border: 1px solid ${s.color}30">
        <i class="${s.icon}" style="color:${s.color}"></i>
      </div>
      <h3 class="font-display text-lg font-semibold mb-2 group-hover:text-gold-300 transition-colors">${s.title}</h3>
      <p class="text-gray-500 text-sm leading-relaxed">${s.short}</p>
      <div class="flex items-center gap-1 mt-5 text-xs font-mono text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity">
        <span>Learn more</span><i class="fas fa-arrow-right ml-1 text-[10px]"></i>
      </div>
    </div>
  `).join('');

  // Attach modal openers
  $$('[data-service-id]').forEach(card => {
    card.addEventListener('click', () => openServiceModal(parseInt(card.dataset.serviceId)));
    card.addEventListener('keydown', e => { if (e.key === 'Enter') openServiceModal(parseInt(card.dataset.serviceId)); });
  });
}

/* ===== PROJECTS ===== */
function buildProjects(filter = 'all') {
  const grid = $('#projects-grid');
  if (!grid) return;

  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="col-span-3 text-center text-gray-500 py-10 font-mono text-sm">No projects in this category yet.</div>`;
    return;
  }

  grid.innerHTML = filtered.map((p, i) => `
    <div class="reveal reveal-delay-${(i % 3) + 1} card-hover glass border border-white/8 rounded-2xl overflow-hidden cursor-pointer group"
      data-project-id="${p.id}" role="button" tabindex="0" aria-label="View ${p.title} details">
      <!-- Card accent bar -->
      <div class="h-1" style="background: linear-gradient(90deg, ${p.color}, transparent)"></div>
      <div class="p-6">
        <div class="flex items-center justify-between mb-4">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background:${p.color}18; border:1px solid ${p.color}30">
            <i class="${p.icon} text-sm" style="color:${p.color}"></i>
          </div>
          <i class="fas fa-arrow-up-right-from-square text-xs text-gray-600 group-hover:text-gold-400 transition-colors"></i>
        </div>
        <h3 class="font-display text-lg font-semibold mb-2 group-hover:text-gold-300 transition-colors">${p.title}</h3>
        <p class="text-gray-500 text-sm leading-relaxed mb-4">${p.summary}</p>
        <div class="flex flex-wrap gap-2">
          ${p.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

  // Re-observe new reveal elements
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.1 });
  $$('#projects-grid .reveal').forEach(el => observer.observe(el));

  // Modal openers
  $$('[data-project-id]').forEach(card => {
    card.addEventListener('click', () => openProjectModal(parseInt(card.dataset.projectId)));
    card.addEventListener('keydown', e => { if (e.key === 'Enter') openProjectModal(parseInt(card.dataset.projectId)); });
  });
}

/* Project filter tabs */
function initProjectFilters() {
  $$('.project-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.project-filter').forEach(b => {
        b.classList.remove('active-filter', 'border-gold-400/40', 'text-gold-400');
        b.classList.add('border-white/10', 'text-gray-400');
      });
      btn.classList.add('active-filter', 'border-gold-400/40', 'text-gold-400');
      btn.classList.remove('border-white/10', 'text-gray-400');
      buildProjects(btn.dataset.filter);
    });
  });
}

/* ===== TIMELINE ===== */
function buildTimeline() {
  const container = $('#timeline');
  if (!container) return;

  container.innerHTML = `<div class="timeline-line"></div>` + TIMELINE.map((item, i) => `
    <div class="reveal reveal-delay-${i + 1} relative pl-10 pb-10 last:pb-0">
      <!-- Dot -->
      <div class="absolute left-0 top-1 w-9 h-9 rounded-full flex items-center justify-center
        ${item.type === 'work' ? 'bg-gold-400/15 border border-gold-400/40' : 'bg-indigo-400/15 border border-indigo-400/40'}">
        <i class="${item.type === 'work' ? 'fas fa-briefcase text-gold-400' : 'fas fa-graduation-cap text-indigo-400'} text-xs"></i>
      </div>
      <!-- Content -->
      <div class="glass border border-white/8 rounded-2xl p-5 ml-2">
        <div class="flex flex-wrap items-start justify-between gap-2 mb-2">
          <h3 class="font-display text-lg font-semibold">${item.title}</h3>
          <span class="font-mono text-xs text-gold-400 bg-gold-400/10 px-2.5 py-1 rounded-full flex-shrink-0">${item.year}</span>
        </div>
        <p class="text-sm font-medium ${item.type === 'work' ? 'text-gold-300' : 'text-indigo-300'} mb-2">${item.org}</p>
        <p class="text-gray-500 text-sm leading-relaxed">${item.desc}</p>
      </div>
    </div>
  `).join('');
}

/* ===== CERTIFICATIONS ===== */
function buildCerts() {
  const grid = $('#certs-grid');
  if (!grid) return;

  grid.innerHTML = CERTS.map((c, i) => `
    <div class="reveal reveal-delay-${i + 1} card-hover glass border border-white/8 rounded-2xl p-6 cursor-pointer group"
      data-cert-id="${c.id}" role="button" tabindex="0" aria-label="View ${c.title} certificate">
      <div class="flex items-center gap-4 mb-4">
        <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style="background:${c.color}18; border:1px solid ${c.color}30">
          <i class="${c.icon} text-lg" style="color:${c.color}"></i>
        </div>
        <div>
          <p class="text-xs text-gray-500 font-mono">${c.issuer}</p>
          <p class="text-xs text-gold-400 font-mono">${c.year}</p>
        </div>
      </div>
      <h3 class="font-display text-base font-semibold mb-3 group-hover:text-gold-300 transition-colors leading-snug">${c.title}</h3>
      <div class="flex items-center gap-1 text-xs font-mono text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity">
        <span>View details</span><i class="fas fa-external-link-alt ml-1 text-[10px]"></i>
      </div>
    </div>
  `).join('');

  $$('[data-cert-id]').forEach(card => {
    card.addEventListener('click', () => openCertModal(parseInt(card.dataset.certId)));
    card.addEventListener('keydown', e => { if (e.key === 'Enter') openCertModal(parseInt(card.dataset.certId)); });
  });
}

/* ===== MODAL SYSTEM ===== */

function openModal(id) {
  const modal = $(id);
  if (!modal) return;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  // Focus trap
  const focusable = modal.querySelectorAll('button, [href], input, [tabindex]');
  if (focusable.length) focusable[0].focus();
}

function closeModal(id) {
  const modal = $(id);
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function initModals() {
  // Close on overlay click or close button
  $$('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeModal('#' + overlay.id);
    });
    overlay.querySelector('.modal-close')?.addEventListener('click', () => closeModal('#' + overlay.id));
  });

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      $$('.modal-overlay.open').forEach(m => closeModal('#' + m.id));
    }
  });
}

function openProjectModal(id) {
  const project = PROJECTS.find(p => p.id === id);
  if (!project) return;

  $('#project-modal-content').innerHTML = `
    <div class="mb-6">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style="background:${project.color}18; border:1px solid ${project.color}30">
          <i class="${project.icon} text-lg" style="color:${project.color}"></i>
        </div>
        <div>
          <h2 id="modal-project-title" class="font-display text-2xl font-bold text-white">${project.title}</h2>
          <div class="flex flex-wrap gap-2 mt-1">
            ${project.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
          </div>
        </div>
      </div>
      <div class="h-1 rounded-full mb-6" style="background:linear-gradient(90deg,${project.color},transparent)"></div>
      <div class="prose-custom text-sm">
        ${project.description}
      </div>
    </div>
    <!-- Outcomes -->
    <div class="glass border border-white/8 rounded-xl p-5 mb-6">
      <p class="font-mono text-xs text-gold-400 uppercase tracking-wider mb-4">Key Outcomes</p>
      <ul class="space-y-2">
        ${project.outcomes.map(o => `
          <li class="flex items-center gap-2 text-gray-300 text-sm">
            <i class="fas fa-trophy text-gold-400 text-xs flex-shrink-0"></i>${o}
          </li>`).join('')}
      </ul>
    </div>
    <div class="flex gap-3 flex-wrap">
      <a href="#contact" onclick="closeModal('#project-modal')"
        class="btn-ripple flex-1 min-w-0 flex items-center justify-center gap-2 bg-gold-400 hover:bg-gold-300 text-ink-900 font-semibold py-3 rounded-xl text-sm transition-all hover:shadow-gold">
        <i class="fas fa-comments"></i> Discuss This Project
      </a>
    </div>
  `;
  openModal('#project-modal');
}

function openServiceModal(id) {
  const service = SERVICES.find(s => s.id === id);
  if (!service) return;
  $('#service-modal-content').innerHTML = service.details + `
    <div class="mt-6">
      <a href="#contact" onclick="closeModal('#service-modal')"
        class="btn-ripple w-full flex items-center justify-center gap-2 bg-gold-400 hover:bg-gold-300 text-ink-900 font-semibold py-3 rounded-xl text-sm transition-all hover:shadow-gold">
        <i class="fas fa-paper-plane"></i> Get a Quote
      </a>
    </div>`;
  openModal('#service-modal');
}

function openCertModal(id) {
  const cert = CERTS.find(c => c.id === id);
  if (!cert) return;
  $('#cert-modal-content').innerHTML = cert.details + `
    <div class="mt-6 flex gap-3">
      <a href="#" target="_blank" rel="noopener"
        class="flex-1 flex items-center justify-center gap-2 bg-gold-400 hover:bg-gold-300 text-ink-900 font-semibold py-3 rounded-xl text-sm transition-all hover:shadow-gold">
        <i class="fas fa-certificate"></i> View Certificate
      </a>
    </div>`;
  openModal('#cert-modal');
}

/* ===== COUNTERS ===== */
function initCounters() {
  const counters = $$('.counter');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target);
      let current = 0;
      const step = Math.ceil(target / 40);
      const interval = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current + (target > 99 ? '' : '+');
        if (current >= target) {
          el.textContent = target + '+';
          clearInterval(interval);
        }
      }, 40);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

/* ===== ACTIVE NAV LINK (SCROLL SPY) ===== */
function initScrollSpy() {
  const sections = $$('section[id]');
  const navLinks = $$('.nav-link');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('active', 'text-gold-400');
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.classList.add('active', 'text-gold-400');
          }
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
}

/* ===== BUTTON RIPPLE ===== */
function initRipple() {
  document.addEventListener('click', e => {
    const btn = e.target.closest('.btn-ripple');
    if (!btn) return;
    const circle = document.createElement('span');
    circle.className = 'ripple-circle';
    const rect = btn.getBoundingClientRect();
    circle.style.left = (e.clientX - rect.left) + 'px';
    circle.style.top = (e.clientY - rect.top) + 'px';
    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 700);
  });
}

/* ===== CONTACT FORM ===== */
function initContactForm() {
  const form = $('#contact-form');
  if (!form) return;

  function validateField(el) {
    const val = el.value.trim();
    const type = el.type;
    if (!val) return 'This field is required.';
    if (type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return 'Please enter a valid email.';
    return '';
  }

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const fields = ['form-name', 'form-email', 'form-message'];
    let hasError = false;

    fields.forEach(id => {
      const el = $('#' + id);
      const err = validateField(el);
      const existing = el.parentElement.querySelector('.field-error');
      if (existing) existing.remove();
      if (err) {
        hasError = true;
        el.classList.add('border-red-500/60');
        const errEl = document.createElement('p');
        errEl.className = 'field-error text-xs text-red-400 mt-1 ml-1';
        errEl.textContent = err;
        el.parentElement.appendChild(errEl);
      } else {
        el.classList.remove('border-red-500/60');
      }
    });

    if (hasError) return;

    // Show loading
    const submitBtn = $('#submit-btn');
    const submitText = $('#submit-text');
    const submitLoading = $('#submit-loading');
    const successEl = $('#form-success');
    const errorEl = $('#form-error');
    submitBtn.disabled = true;
    submitText.classList.add('hidden');
    submitLoading.classList.remove('hidden');
    successEl.classList.add('hidden');
    errorEl.classList.add('hidden');

    try {
      const formData = new FormData(form);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        successEl.classList.remove('hidden');
        form.reset();
      } else {
        errorEl.classList.remove('hidden');
      }
    } catch {
      errorEl.classList.remove('hidden');
    } finally {
      submitBtn.disabled = false;
      submitText.classList.remove('hidden');
      submitLoading.classList.add('hidden');
    }
  });

  // Live validation feedback
  ['form-name', 'form-email', 'form-message'].forEach(id => {
    const el = $('#' + id);
    if (!el) return;
    el.addEventListener('blur', () => {
      const err = validateField(el);
      const existing = el.parentElement.querySelector('.field-error');
      if (existing) existing.remove();
      if (err) {
        el.classList.add('border-red-500/60');
        const errEl = document.createElement('p');
        errEl.className = 'field-error text-xs text-red-400 mt-1 ml-1';
        errEl.textContent = err;
        el.parentElement.appendChild(errEl);
      } else {
        el.classList.remove('border-red-500/60');
      }
    });
  });
}

/* ===== SMOOTH SCROLL ===== */
function initSmoothScroll() {
  $$('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = link.getAttribute('href');
      if (target === '#') return;
      e.preventDefault();
      const el = document.querySelector(target);
      if (el) {
        const offset = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    });
  });
}

/* ===== PAGE LOAD (skeleton + fade in) ===== */
function initPageLoad() {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.body.style.opacity = '1';
    }, 100);
  });
}

/* ===== INIT ALL ===== */
document.addEventListener('DOMContentLoaded', () => {
  initPageLoad();
  initScrollProgress();
  initNavbar();
  initHamburger();
  initTheme();
  initCursor();
  initBackToTop();
  initModals();
  initRipple();
  initSmoothScroll();
  initContactForm();

  // Build dynamic content
  buildSkills();
  buildServices();
  buildProjects();
  buildTimeline();
  buildCerts();
  initProjectFilters();

  // Observers (run after building DOM)
  setTimeout(() => {
    initReveal();
    initCounters();
    initScrollSpy();
  }, 50);
});