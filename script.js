/* =====================================================
   Dhanmala Giri — script.js  (Vanilla JS ES6+)
   ===================================================== */

'use strict';

/* ===== DATA ===== */

const SERVICES = [
  {
    id: 1, icon: 'fas fa-search', title: 'SEO Strategy', accent: '#e6b422',
    short: 'Improve organic visibility and drive qualified traffic with keyword research and on-page optimisation.',
    details: `
      <div class="flex items-center gap-3 mb-5">
        <div style="width:48px;height:48px;border-radius:12px;background:rgba(230,180,34,0.12);border:1px solid rgba(230,180,34,0.3);display:flex;align-items:center;justify-content:center;color:var(--gold)">
          <i class="fas fa-search"></i>
        </div>
        <div><h3 class="font-display text-xl font-bold" style="color:var(--text-heading)">SEO Strategy</h3>
        <p class="text-xs font-mono mt-0.5" style="color:var(--gold)">Search Engine Optimisation</p></div>
      </div>
      <p class="text-sm leading-relaxed mb-4" style="color:var(--text-secondary)">Comprehensive SEO — from initial audit to implementation. I focus on understanding your audience's search intent and aligning your content to meet it at every stage of the funnel.</p>
      <ul class="space-y-2 text-sm" style="color:var(--text-secondary)">
        <li class="flex items-start gap-2"><i class="fas fa-check text-xs mt-1 flex-shrink-0" style="color:var(--gold)"></i>Keyword research &amp; competitive analysis</li>
        <li class="flex items-start gap-2"><i class="fas fa-check text-xs mt-1 flex-shrink-0" style="color:var(--gold)"></i>On-page &amp; technical SEO audits</li>
        <li class="flex items-start gap-2"><i class="fas fa-check text-xs mt-1 flex-shrink-0" style="color:var(--gold)"></i>Content gap analysis</li>
        <li class="flex items-start gap-2"><i class="fas fa-check text-xs mt-1 flex-shrink-0" style="color:var(--gold)"></i>Link building strategy</li>
        <li class="flex items-start gap-2"><i class="fas fa-check text-xs mt-1 flex-shrink-0" style="color:var(--gold)"></i>Monthly performance reporting</li>
      </ul>`,
  },
  {
    id: 2, icon: 'fas fa-share-alt', title: 'Social Media Marketing', accent: '#818cf8',
    short: 'Build community and brand awareness through consistent, creative social media strategies.',
    details: `
      <div class="flex items-center gap-3 mb-5">
        <div style="width:48px;height:48px;border-radius:12px;background:rgba(129,140,248,0.12);border:1px solid rgba(129,140,248,0.3);display:flex;align-items:center;justify-content:center;color:#818cf8">
          <i class="fas fa-share-alt"></i>
        </div>
        <div><h3 class="font-display text-xl font-bold" style="color:var(--text-heading)">Social Media Marketing</h3>
        <p class="text-xs font-mono mt-0.5" style="color:var(--gold)">Instagram · LinkedIn · TikTok</p></div>
      </div>
      <p class="text-sm leading-relaxed mb-4" style="color:var(--text-secondary)">Strategy-first social media management that grows followers, engagement, and brand loyalty across platforms.</p>
      <ul class="space-y-2 text-sm" style="color:var(--text-secondary)">
        <li class="flex items-start gap-2"><i class="fas fa-check text-xs mt-1 flex-shrink-0" style="color:var(--gold)"></i>Content calendar creation</li>
        <li class="flex items-start gap-2"><i class="fas fa-check text-xs mt-1 flex-shrink-0" style="color:var(--gold)"></i>Audience growth strategies</li>
        <li class="flex items-start gap-2"><i class="fas fa-check text-xs mt-1 flex-shrink-0" style="color:var(--gold)"></i>Engagement analytics &amp; reporting</li>
        <li class="flex items-start gap-2"><i class="fas fa-check text-xs mt-1 flex-shrink-0" style="color:var(--gold)"></i>Hashtag research</li>
      </ul>`,
  },
  {
    id: 3, icon: 'fas fa-pen-nib', title: 'Content Strategy', accent: '#34d399',
    short: 'Craft compelling, SEO-optimised content that educates, engages, and converts your audience.',
    details: `
      <div class="flex items-center gap-3 mb-5">
        <div style="width:48px;height:48px;border-radius:12px;background:rgba(52,211,153,0.12);border:1px solid rgba(52,211,153,0.3);display:flex;align-items:center;justify-content:center;color:#34d399">
          <i class="fas fa-pen-nib"></i>
        </div>
        <div><h3 class="font-display text-xl font-bold" style="color:var(--text-heading)">Content Strategy</h3>
        <p class="text-xs font-mono mt-0.5" style="color:var(--gold)">Blogs · Emails · Social</p></div>
      </div>
      <p class="text-sm leading-relaxed mb-4" style="color:var(--text-secondary)">Content frameworks that align your brand voice with audience needs and business goals.</p>
      <ul class="space-y-2 text-sm" style="color:var(--text-secondary)">
        <li class="flex items-start gap-2"><i class="fas fa-check text-xs mt-1 flex-shrink-0" style="color:var(--gold)"></i>Brand voice development</li>
        <li class="flex items-start gap-2"><i class="fas fa-check text-xs mt-1 flex-shrink-0" style="color:var(--gold)"></i>Blog &amp; article writing (SEO-optimised)</li>
        <li class="flex items-start gap-2"><i class="fas fa-check text-xs mt-1 flex-shrink-0" style="color:var(--gold)"></i>Content funnel mapping</li>
        <li class="flex items-start gap-2"><i class="fas fa-check text-xs mt-1 flex-shrink-0" style="color:var(--gold)"></i>Editorial calendar management</li>
      </ul>`,
  },
  {
    id: 4, icon: 'fas fa-envelope-open-text', title: 'Email Marketing', accent: '#f472b6',
    short: 'Design and execute email campaigns that nurture leads and drive repeat conversions.',
    details: `
      <div class="flex items-center gap-3 mb-5">
        <div style="width:48px;height:48px;border-radius:12px;background:rgba(244,114,182,0.12);border:1px solid rgba(244,114,182,0.3);display:flex;align-items:center;justify-content:center;color:#f472b6">
          <i class="fas fa-envelope-open-text"></i>
        </div>
        <div><h3 class="font-display text-xl font-bold" style="color:var(--text-heading)">Email Marketing</h3>
        <p class="text-xs font-mono mt-0.5" style="color:var(--gold)">Campaigns · Automations</p></div>
      </div>
      <p class="text-sm leading-relaxed mb-4" style="color:var(--text-secondary)">Email remains one of the highest-ROI digital marketing channels. I design campaigns that deliver the right message at the right time.</p>
      <ul class="space-y-2 text-sm" style="color:var(--text-secondary)">
        <li class="flex items-start gap-2"><i class="fas fa-check text-xs mt-1 flex-shrink-0" style="color:var(--gold)"></i>Campaign strategy &amp; copywriting</li>
        <li class="flex items-start gap-2"><i class="fas fa-check text-xs mt-1 flex-shrink-0" style="color:var(--gold)"></i>List segmentation</li>
        <li class="flex items-start gap-2"><i class="fas fa-check text-xs mt-1 flex-shrink-0" style="color:var(--gold)"></i>A/B testing subject lines</li>
        <li class="flex items-start gap-2"><i class="fas fa-check text-xs mt-1 flex-shrink-0" style="color:var(--gold)"></i>Automation workflows (Mailchimp)</li>
      </ul>`,
  },
  {
    id: 5, icon: 'fas fa-chart-bar', title: 'Analytics & Reporting', accent: '#60a5fa',
    short: 'Turn raw data into clear insights — track performance, identify trends, and optimise campaigns.',
    details: `
      <div class="flex items-center gap-3 mb-5">
        <div style="width:48px;height:48px;border-radius:12px;background:rgba(96,165,250,0.12);border:1px solid rgba(96,165,250,0.3);display:flex;align-items:center;justify-content:center;color:#60a5fa">
          <i class="fas fa-chart-bar"></i>
        </div>
        <div><h3 class="font-display text-xl font-bold" style="color:var(--text-heading)">Analytics &amp; Reporting</h3>
        <p class="text-xs font-mono mt-0.5" style="color:var(--gold)">Data · Insights · Growth</p></div>
      </div>
      <p class="text-sm leading-relaxed mb-4" style="color:var(--text-secondary)">Data without interpretation is noise. I produce clear, actionable reports that show exactly what's working.</p>
      <ul class="space-y-2 text-sm" style="color:var(--text-secondary)">
        <li class="flex items-start gap-2"><i class="fas fa-check text-xs mt-1 flex-shrink-0" style="color:var(--gold)"></i>Google Analytics setup &amp; reporting</li>
        <li class="flex items-start gap-2"><i class="fas fa-check text-xs mt-1 flex-shrink-0" style="color:var(--gold)"></i>Social media insights analysis</li>
        <li class="flex items-start gap-2"><i class="fas fa-check text-xs mt-1 flex-shrink-0" style="color:var(--gold)"></i>KPI dashboard creation</li>
        <li class="flex items-start gap-2"><i class="fas fa-check text-xs mt-1 flex-shrink-0" style="color:var(--gold)"></i>Monthly performance summaries</li>
      </ul>`,
  },
  {
    id: 6, icon: 'fas fa-globe', title: 'Web Presence', accent: '#a78bfa',
    short: 'Build and optimise your digital footprint — landing pages to basic web development.',
    details: `
      <div class="flex items-center gap-3 mb-5">
        <div style="width:48px;height:48px;border-radius:12px;background:rgba(167,139,250,0.12);border:1px solid rgba(167,139,250,0.3);display:flex;align-items:center;justify-content:center;color:#a78bfa">
          <i class="fas fa-globe"></i>
        </div>
        <div><h3 class="font-display text-xl font-bold" style="color:var(--text-heading)">Web Presence</h3>
        <p class="text-xs font-mono mt-0.5" style="color:var(--gold)">HTML · CSS · WordPress</p></div>
      </div>
      <p class="text-sm leading-relaxed mb-4" style="color:var(--text-secondary)">Leveraging my technical BCA background, I help brands create an online home that looks professional and converts visitors.</p>
      <ul class="space-y-2 text-sm" style="color:var(--text-secondary)">
        <li class="flex items-start gap-2"><i class="fas fa-check text-xs mt-1 flex-shrink-0" style="color:var(--gold)"></i>Landing page design &amp; copy</li>
        <li class="flex items-start gap-2"><i class="fas fa-check text-xs mt-1 flex-shrink-0" style="color:var(--gold)"></i>WordPress setup &amp; management</li>
        <li class="flex items-start gap-2"><i class="fas fa-check text-xs mt-1 flex-shrink-0" style="color:var(--gold)"></i>Page speed optimisation</li>
        <li class="flex items-start gap-2"><i class="fas fa-check text-xs mt-1 flex-shrink-0" style="color:var(--gold)"></i>Basic HTML/CSS customisation</li>
      </ul>`,
  },
];

const PROJECTS = [
  { id:1, title:'Local Business SEO Boost', category:'seo', icon:'fas fa-search', accent:'#e6b422',
    tags:['SEO','Local Search','GMB'],
    summary:'Achieved 3× organic traffic growth for a local restaurant by revamping their GMB profile and on-page SEO.',
    description:`<p class="text-sm leading-relaxed mb-4" style="color:var(--text-secondary)">Conducted a full SEO audit for a local restaurant struggling to rank in Google's local pack. Keyword research targeted "near me" queries, with GMB profile optimization and local citation building.</p>
    <p class="text-sm leading-relaxed mb-4" style="color:var(--text-secondary)"><strong style="color:var(--gold)">Results:</strong> 3× increase in organic traffic over 3 months, 40% rise in phone calls from search, consistent top-3 placement in local map results.</p>`,
    outcomes:['300% organic traffic increase','40% more phone inquiries','Top-3 Local Pack ranking'] },
  { id:2, title:'Instagram Growth Campaign', category:'social', icon:'fab fa-instagram', accent:'#818cf8',
    tags:['Social Media','Instagram','Content'],
    summary:'Grew a fashion brand\'s Instagram following by 2,500+ in 60 days through targeted content strategy.',
    description:`<p class="text-sm leading-relaxed mb-4" style="color:var(--text-secondary)">Designed a content calendar and hashtag strategy for a small fashion brand. Created a consistent posting schedule with Reels, carousel posts, and Stories.</p>
    <p class="text-sm leading-relaxed mb-4" style="color:var(--text-secondary)"><strong style="color:var(--gold)">Results:</strong> 2,500+ new followers in 60 days, 4× higher engagement rate, and 3 brand collaborations initiated.</p>`,
    outcomes:['2,500+ new followers in 60 days','4× engagement rate','3 brand collaborations'] },
  { id:3, title:'Blog Content Strategy', category:'content', icon:'fas fa-pen-nib', accent:'#34d399',
    tags:['Content','SEO','Strategy'],
    summary:'Developed a 3-month content plan for a tech startup, resulting in a 5× increase in blog-driven leads.',
    description:`<p class="text-sm leading-relaxed mb-4" style="color:var(--text-secondary)">Full content audit and gap analysis for a SaaS startup. Identified high-intent keywords and produced 12 long-form SEO articles using a topic cluster strategy.</p>
    <p class="text-sm leading-relaxed mb-4" style="color:var(--text-secondary)"><strong style="color:var(--gold)">Results:</strong> 5× increase in organic blog traffic, 8 first-page keyword rankings, measurable increase in demo signups.</p>`,
    outcomes:['5× blog-driven leads','8 first-page keyword rankings','12 long-form articles'] },
  { id:4, title:'Email Nurture Sequence', category:'content', icon:'fas fa-envelope', accent:'#f472b6',
    tags:['Email','Automation','Conversion'],
    summary:'Designed a 7-email welcome sequence achieving a 45% open rate and 12% conversion rate.',
    description:`<p class="text-sm leading-relaxed mb-4" style="color:var(--text-secondary)">Built a 7-step email automation in Mailchimp for a new e-commerce brand. Personalised, segmented copy for each stage of the buyer journey.</p>
    <p class="text-sm leading-relaxed mb-4" style="color:var(--text-secondary)"><strong style="color:var(--gold)">Results:</strong> 45% average open rate (industry avg: 21%), 12% conversion rate on the final purchase email.</p>`,
    outcomes:['45% email open rate','12% conversion rate','7-step automation sequence'] },
  { id:5, title:'Personal Portfolio Website', category:'web', icon:'fas fa-laptop-code', accent:'#a78bfa',
    tags:['Web','HTML/CSS','JS'],
    summary:'Designed and built this portfolio from scratch using HTML5, Tailwind CSS, and Vanilla JS.',
    description:`<p class="text-sm leading-relaxed mb-4" style="color:var(--text-secondary)">Conceptualised and built a professional portfolio with dark/light mode, scroll animations, modal interactions, a working contact form, and full mobile responsiveness.</p>
    <p class="text-sm leading-relaxed mb-4" style="color:var(--text-secondary)"><strong style="color:var(--gold)">Tech Used:</strong> HTML5, Tailwind CSS (CDN), Vanilla JavaScript (ES6+), Web3Forms API, Intersection Observer API.</p>`,
    outcomes:['Full mobile responsiveness','Dark/light mode','Working contact form'] },
  { id:6, title:'Social Media Analytics Report', category:'seo', icon:'fas fa-chart-bar', accent:'#60a5fa',
    tags:['Analytics','Reporting','Social'],
    summary:'Produced a 30-day analytics report identifying growth opportunities for a lifestyle brand.',
    description:`<p class="text-sm leading-relaxed mb-4" style="color:var(--text-secondary)">Compiled and analysed social media data across Instagram, Facebook, and Twitter. Created a visual dashboard report with actionable recommendations.</p>
    <p class="text-sm leading-relaxed mb-4" style="color:var(--text-secondary)"><strong style="color:var(--gold)">Outcome:</strong> Recommendations led to a 30% improvement in average post reach the following month.</p>`,
    outcomes:['30-day comprehensive report','30% improvement in reach','Cross-platform analysis'] },
];

const SKILLS_DM   = [ {name:'SEO',level:80}, {name:'Social Media Marketing',level:85}, {name:'Content Strategy',level:78}, {name:'Basic Analytics',level:72}, {name:'Email Marketing',level:70} ];
const SKILLS_TECH = [ {name:'HTML5',level:88}, {name:'CSS3',level:82}, {name:'Tailwind CSS',level:80}, {name:'JavaScript (Basic)',level:65} ];

const TIMELINE = [
  { year:'2024 – Present', title:'Freelance Digital Marketing', org:'Self-Employed', type:'work',
    desc:'Managing SEO, content creation, and social media for 3 small business clients. Delivering monthly reports and strategy adjustments.' },
  { year:'2023', title:'Digital Marketing Intern', org:'Local Media Agency, Nepal', type:'work',
    desc:'Managed social media accounts, created content calendars, conducted keyword research, and analysed campaign performance.' },
  { year:'2021 – 2024', title:'Bachelor of Computer Applications (BCA)', org:'Tribhuvan University, Nepal', type:'education',
    desc:'Graduated with a solid foundation in programming, databases, and web technologies combined with a growing passion for digital marketing.' },
  { year:'2021', title:'School Certificate (SEE)', org:'Nepal', type:'education',
    desc:'Completed secondary education with distinction in mathematics and science.' },
];

const CERTS = [
  { id:1, icon:'fab fa-google', title:'Google Digital Marketing Fundamentals', issuer:'Google Garage', year:'2023', accentColor:'#4285F4',
    iconBg:'rgba(66,133,244,0.12)', iconBorder:'rgba(66,133,244,0.3)',
    details:`<div class="text-center mb-5">
      <div style="width:64px;height:64px;border-radius:16px;background:rgba(66,133,244,0.12);border:1px solid rgba(66,133,244,0.3);display:flex;align-items:center;justify-content:center;margin:0 auto 12px">
        <i class="fab fa-google text-2xl" style="color:#4285F4"></i></div>
      <h3 class="font-display text-lg font-bold" style="color:var(--text-heading)">Google Digital Marketing Fundamentals</h3>
      <p class="text-xs font-mono mt-1" style="color:var(--text-muted)">Google Garage · 2023</p>
    </div>
    <p class="text-sm leading-relaxed mb-4" style="color:var(--text-secondary)">Comprehensive course covering all pillars of digital marketing: SEO, SEM, social media, content marketing, analytics, mobile, and e-commerce.</p>
    <div class="flex flex-wrap gap-2"><span class="tag-pill">SEO</span><span class="tag-pill">SEM</span><span class="tag-pill">Analytics</span><span class="tag-pill">E-commerce</span></div>` },
  { id:2, icon:'fab fa-hubspot', title:'Inbound Marketing Certification', issuer:'HubSpot Academy', year:'2023', accentColor:'#FF7A59',
    iconBg:'rgba(255,122,89,0.12)', iconBorder:'rgba(255,122,89,0.3)',
    details:`<div class="text-center mb-5">
      <div style="width:64px;height:64px;border-radius:16px;background:rgba(255,122,89,0.12);border:1px solid rgba(255,122,89,0.3);display:flex;align-items:center;justify-content:center;margin:0 auto 12px">
        <i class="fab fa-hubspot text-2xl" style="color:#FF7A59"></i></div>
      <h3 class="font-display text-lg font-bold" style="color:var(--text-heading)">Inbound Marketing Certification</h3>
      <p class="text-xs font-mono mt-1" style="color:var(--text-muted)">HubSpot Academy · 2023</p>
    </div>
    <p class="text-sm leading-relaxed mb-4" style="color:var(--text-secondary)">Mastered the inbound methodology — attracting, engaging, and delighting customers through content, email, social media, and conversion optimisation.</p>
    <div class="flex flex-wrap gap-2"><span class="tag-pill">Inbound</span><span class="tag-pill">Content</span><span class="tag-pill">Lead Gen</span></div>` },
  { id:3, icon:'fas fa-code', title:'Responsive Web Design', issuer:'freeCodeCamp', year:'2022', accentColor:'#9333ea',
    iconBg:'rgba(147,51,234,0.12)', iconBorder:'rgba(147,51,234,0.3)',
    details:`<div class="text-center mb-5">
      <div style="width:64px;height:64px;border-radius:16px;background:rgba(147,51,234,0.12);border:1px solid rgba(147,51,234,0.3);display:flex;align-items:center;justify-content:center;margin:0 auto 12px">
        <i class="fas fa-code text-2xl" style="color:#9333ea"></i></div>
      <h3 class="font-display text-lg font-bold" style="color:var(--text-heading)">Responsive Web Design</h3>
      <p class="text-xs font-mono mt-1" style="color:var(--text-muted)">freeCodeCamp · 2022</p>
    </div>
    <p class="text-sm leading-relaxed mb-4" style="color:var(--text-secondary)">300+ hours of HTML and CSS training covering semantic markup, flexbox, grid, and responsive design principles. Built 5 certification projects.</p>
    <div class="flex flex-wrap gap-2"><span class="tag-pill">HTML5</span><span class="tag-pill">CSS3</span><span class="tag-pill">Responsive</span></div>` },
];

/* ===== HELPERS ===== */
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ===== PAGE LOAD ===== */
function initPageLoad() {
  window.addEventListener('load', () => {
    setTimeout(() => document.body.classList.add('loaded'), 80);
  });
}

/* ===== SCROLL PROGRESS ===== */
function initScrollProgress() {
  const bar = $('#scroll-progress');
  window.addEventListener('scroll', () => {
    const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    bar.style.width = Math.min(pct, 100) + '%';
  }, { passive: true });
}

/* ===== STICKY NAVBAR ===== */
function initNavbar() {
  const nav = $('#navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

/* ===== HAMBURGER ===== */
function initHamburger() {
  const btn  = $('#hamburger-btn');
  const menu = $('#mobile-menu');
  btn.addEventListener('click', () => {
    const open = btn.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    menu.classList.toggle('hidden', !open);
  });
  $$('.mobile-nav-link').forEach(link => link.addEventListener('click', () => {
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    menu.classList.add('hidden');
  }));
}

/* ===== DARK / LIGHT MODE =====
   The entire theme lives in CSS variables on [data-theme].
   We just toggle the attribute on <html> — every colour updates automatically. */
function initTheme() {
  const html  = document.documentElement;
  const btn   = $('#theme-toggle');
  const icon  = $('#theme-icon');

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      btn.classList.remove('light-mode');
      icon.className = 'fas fa-moon';
      btn.style.setProperty('transform', ''); // thumb left
    } else {
      btn.classList.add('light-mode');
      icon.className = 'fas fa-sun';
    }
  }

  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved || (prefersDark ? 'dark' : 'light'));

  btn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
}

/* ===== CUSTOM CURSOR ===== */
function initCursor() {
  const dot  = $('#cursor-dot');
  const ring = $('#cursor-ring');
  if (!dot || !ring) return;
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; dot.style.left = mx + 'px'; dot.style.top = my + 'px'; });
  (function anim() { rx += (mx-rx)*0.12; ry += (my-ry)*0.12; ring.style.left = rx+'px'; ring.style.top = ry+'px'; requestAnimationFrame(anim); })();
  $$('a,button,.card-hover').forEach(el => {
    el.addEventListener('mouseenter', () => { ring.style.width='50px'; ring.style.height='50px'; });
    el.addEventListener('mouseleave', () => { ring.style.width='32px'; ring.style.height='32px'; });
  });
}

/* ===== BACK TO TOP ===== */
function initBackToTop() {
  const btn = $('#back-to-top');
  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 400), { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ===== REVEAL ANIMATIONS ===== */
function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.12 });
  $$('.reveal').forEach(el => observer.observe(el));
}

/* ===== SKILL BARS ===== */
function buildSkills() {
  function html(s) {
    return `<div class="space-y-2 reveal">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <span style="font-size:14px;font-weight:500;color:var(--text-primary)">${s.name}</span>
        <span style="font-family:'Space Mono',monospace;font-size:11px;color:var(--gold)">${s.level}%</span>
      </div>
      <div class="skill-track"><div class="skill-bar-fill" data-level="${s.level}"></div></div>
    </div>`;
  }
  $('#dm-skills').innerHTML   = SKILLS_DM.map(html).join('');
  $('#tech-skills').innerHTML = SKILLS_TECH.map(html).join('');

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      $$('.skill-bar-fill').forEach(b => { b.style.width = b.dataset.level + '%'; });
      observer.disconnect();
    }
  }, { threshold: 0.3 });
  if ($('#skills')) observer.observe($('#skills'));
}

/* ===== SERVICES ===== */
function buildServices() {
  const grid = $('#services-grid');
  if (!grid) return;
  grid.innerHTML = SERVICES.map((s, i) => `
    <div class="reveal reveal-delay-${(i%3)+1} card card-hover cursor-pointer group" style="padding:1.5rem"
      data-service-id="${s.id}" role="button" tabindex="0" aria-label="View ${s.title}">
      <div style="width:48px;height:48px;border-radius:12px;background:${s.accent}18;border:1px solid ${s.accent}30;display:flex;align-items:center;justify-content:center;margin-bottom:20px;transition:transform 0.3s ease">
        <i class="${s.icon}" style="color:${s.accent}"></i>
      </div>
      <h3 class="font-display" style="font-size:18px;font-weight:600;margin-bottom:8px;color:var(--text-heading);transition:color 0.2s">${s.title}</h3>
      <p style="font-size:13px;line-height:1.65;color:var(--text-secondary)">${s.short}</p>
      <div style="display:flex;align-items:center;gap:4px;margin-top:18px;font-size:11px;font-family:'Space Mono',monospace;color:var(--gold);opacity:0;transition:opacity 0.2s" class="learn-more-hint">
        Learn more <i class="fas fa-arrow-right" style="font-size:9px;margin-left:2px"></i>
      </div>
    </div>
  `).join('');

  // Show hint on hover via JS for Safari compat
  $$('[data-service-id]').forEach(card => {
    const hint = card.querySelector('.learn-more-hint');
    card.addEventListener('mouseenter', () => { if (hint) hint.style.opacity = '1'; });
    card.addEventListener('mouseleave', () => { if (hint) hint.style.opacity = '0'; });
    card.addEventListener('click', () => openServiceModal(+card.dataset.serviceId));
    card.addEventListener('keydown', e => { if (e.key === 'Enter') openServiceModal(+card.dataset.serviceId); });
  });
}

/* ===== PROJECTS ===== */
function buildProjects(filter = 'all') {
  const grid = $('#projects-grid');
  if (!grid) return;
  const list = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  if (!list.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:40px 0;color:var(--text-muted);font-family:'Space Mono',monospace;font-size:13px">No projects in this category yet.</div>`;
    return;
  }

  grid.innerHTML = list.map((p, i) => `
    <div class="reveal reveal-delay-${(i%3)+1} card card-hover cursor-pointer group" style="overflow:hidden"
      data-project-id="${p.id}" role="button" tabindex="0" aria-label="View ${p.title}">
      <div style="height:3px;background:linear-gradient(90deg,${p.accent},transparent)"></div>
      <div style="padding:1.5rem">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
          <div style="width:40px;height:40px;border-radius:10px;background:${p.accent}18;border:1px solid ${p.accent}28;display:flex;align-items:center;justify-content:center">
            <i class="${p.icon}" style="font-size:13px;color:${p.accent}"></i>
          </div>
          <i class="fas fa-arrow-up-right-from-square" style="font-size:11px;color:var(--text-muted);transition:color 0.2s"></i>
        </div>
        <h3 class="font-display" style="font-size:17px;font-weight:600;margin-bottom:8px;color:var(--text-heading);transition:color 0.2s">${p.title}</h3>
        <p style="font-size:13px;line-height:1.65;color:var(--text-secondary);margin-bottom:16px">${p.summary}</p>
        <div style="display:flex;flex-wrap:wrap;gap:6px">
          ${p.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

  // Re-observe
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }});
  }, { threshold: 0.1 });
  $$('#projects-grid .reveal').forEach(el => obs.observe(el));

  $$('[data-project-id]').forEach(card => {
    card.addEventListener('click', () => openProjectModal(+card.dataset.projectId));
    card.addEventListener('keydown', e => { if (e.key === 'Enter') openProjectModal(+card.dataset.projectId); });
  });
}

function initProjectFilters() {
  $$('.project-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.project-filter').forEach(b => b.classList.remove('active-filter'));
      btn.classList.add('active-filter');
      buildProjects(btn.dataset.filter);
    });
  });
}

/* ===== TIMELINE ===== */
function buildTimeline() {
  const el = $('#timeline');
  if (!el) return;
  el.innerHTML = `<div class="timeline-line"></div>` + TIMELINE.map((item, i) => `
    <div class="reveal reveal-delay-${i+1}" style="position:relative;padding-left:40px;padding-bottom:${i<TIMELINE.length-1?'40px':'0'}">
      <div style="position:absolute;left:0;top:4px;width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center" class="${item.type==='work'?'dot-work':'dot-edu'}">
        <i class="${item.type==='work'?'fas fa-briefcase icon-work':'fas fa-graduation-cap icon-edu'}" style="font-size:12px"></i>
      </div>
      <div class="card" style="padding:20px;margin-left:8px">
        <div style="display:flex;flex-wrap:wrap;justify-content:space-between;gap:8px;margin-bottom:6px">
          <h3 class="font-display" style="font-size:17px;font-weight:600;color:var(--text-heading)">${item.title}</h3>
          <span class="year-badge">${item.year}</span>
        </div>
        <p style="font-size:13px;font-weight:500;margin-bottom:8px;color:${item.type==='work'?'var(--gold)':'#818cf8'}">${item.org}</p>
        <p style="font-size:13px;line-height:1.65;color:var(--text-secondary)">${item.desc}</p>
      </div>
    </div>
  `).join('');
}

/* ===== CERTIFICATIONS ===== */
function buildCerts() {
  const grid = $('#certs-grid');
  if (!grid) return;
  grid.innerHTML = CERTS.map((c, i) => `
    <div class="reveal reveal-delay-${i+1} card card-hover cursor-pointer group" style="padding:1.5rem"
      data-cert-id="${c.id}" role="button" tabindex="0" aria-label="View ${c.title}">
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
        <div style="width:48px;height:48px;border-radius:12px;background:${c.iconBg};border:1px solid ${c.iconBorder};display:flex;align-items:center;justify-content:center;flex-shrink:0">
          <i class="${c.icon} text-lg" style="color:${c.accentColor}"></i>
        </div>
        <div>
          <p style="font-size:11px;color:var(--text-muted);font-family:'Space Mono',monospace">${c.issuer}</p>
          <p style="font-size:11px;color:var(--gold);font-family:'Space Mono',monospace">${c.year}</p>
        </div>
      </div>
      <h3 class="font-display" style="font-size:15px;font-weight:600;line-height:1.4;margin-bottom:12px;color:var(--text-heading)">${c.title}</h3>
      <div style="display:flex;align-items:center;gap:4px;font-size:11px;font-family:'Space Mono',monospace;color:var(--gold);opacity:0;transition:opacity 0.2s" class="cert-hint">
        View details <i class="fas fa-external-link-alt" style="font-size:9px;margin-left:2px"></i>
      </div>
    </div>
  `).join('');

  $$('[data-cert-id]').forEach(card => {
    const hint = card.querySelector('.cert-hint');
    card.addEventListener('mouseenter', () => { if(hint) hint.style.opacity='1'; });
    card.addEventListener('mouseleave', () => { if(hint) hint.style.opacity='0'; });
    card.addEventListener('click', () => openCertModal(+card.dataset.certId));
    card.addEventListener('keydown', e => { if(e.key==='Enter') openCertModal(+card.dataset.certId); });
  });
}

/* ===== MODALS ===== */
function openModal(id) {
  const m = $(id);
  if (!m) return;
  m.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(id) {
  const m = $(id);
  if (!m) return;
  m.classList.remove('open');
  document.body.style.overflow = '';
}
function initModals() {
  $$('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => { if(e.target===overlay) closeModal('#'+overlay.id); });
    overlay.querySelector('.modal-close')?.addEventListener('click', () => closeModal('#'+overlay.id));
  });
  document.addEventListener('keydown', e => { if(e.key==='Escape') $$('.modal-overlay.open').forEach(m => closeModal('#'+m.id)); });
}

function openProjectModal(id) {
  const p = PROJECTS.find(x => x.id===id);
  if (!p) return;
  $('#project-modal-content').innerHTML = `
    <div style="margin-bottom:20px">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
        <div style="width:48px;height:48px;border-radius:12px;flex-shrink:0;background:${p.accent}18;border:1px solid ${p.accent}28;display:flex;align-items:center;justify-content:center">
          <i class="${p.icon}" style="color:${p.accent};font-size:16px"></i>
        </div>
        <div>
          <h2 class="font-display" style="font-size:22px;font-weight:700;color:var(--text-heading)">${p.title}</h2>
          <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:6px">${p.tags.map(t=>`<span class="tag-pill">${t}</span>`).join('')}</div>
        </div>
      </div>
      <div style="height:3px;border-radius:2px;background:linear-gradient(90deg,${p.accent},transparent);margin-bottom:20px"></div>
      ${p.description}
    </div>
    <div class="modal-outcome-box">
      <p style="font-family:'Space Mono',monospace;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:var(--gold);margin-bottom:12px">Key Outcomes</p>
      <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px">
        ${p.outcomes.map(o=>`<li style="display:flex;align-items:center;gap:8px;font-size:13px;color:var(--text-primary)"><i class="fas fa-trophy" style="font-size:11px;color:var(--gold);flex-shrink:0"></i>${o}</li>`).join('')}
      </ul>
    </div>
    <div style="margin-top:20px">
      <a href="#contact" onclick="document.querySelector('#project-modal').classList.remove('open');document.body.style.overflow=''"
        class="btn-ripple cta-primary" style="width:100%;justify-content:center">
        <i class="fas fa-comments" style="font-size:13px"></i> Discuss This Project
      </a>
    </div>`;
  openModal('#project-modal');
}

function openServiceModal(id) {
  const s = SERVICES.find(x => x.id===id);
  if (!s) return;
  $('#service-modal-content').innerHTML = s.details + `
    <div style="margin-top:20px">
      <a href="#contact" onclick="document.querySelector('#service-modal').classList.remove('open');document.body.style.overflow=''"
        class="btn-ripple cta-primary" style="width:100%;justify-content:center">
        <i class="fas fa-paper-plane" style="font-size:13px"></i> Get a Quote
      </a>
    </div>`;
  openModal('#service-modal');
}

function openCertModal(id) {
  const c = CERTS.find(x => x.id===id);
  if (!c) return;
  $('#cert-modal-content').innerHTML = c.details + `
    <div style="margin-top:20px">
      <a href="#" target="_blank" rel="noopener" class="btn-ripple cta-primary" style="width:100%;justify-content:center">
        <i class="fas fa-certificate" style="font-size:13px"></i> View Certificate
      </a>
    </div>`;
  openModal('#cert-modal');
}

/* ===== COUNTERS ===== */
function initCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, target = +el.dataset.target;
      let cur = 0;
      const step = Math.ceil(target/40);
      const iv = setInterval(() => {
        cur = Math.min(cur+step, target);
        el.textContent = cur + '+';
        if (cur >= target) clearInterval(iv);
      }, 40);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  $$('.counter').forEach(c => obs.observe(c));
}

/* ===== SCROLL SPY ===== */
function initScrollSpy() {
  const sections = $$('section[id]');
  const links = $$('.nav-link');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => {
          l.classList.remove('active');
          if (l.getAttribute('href') === '#' + e.target.id) l.classList.add('active');
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => obs.observe(s));
}

/* ===== RIPPLE ===== */
function initRipple() {
  document.addEventListener('click', e => {
    const btn = e.target.closest('.btn-ripple');
    if (!btn) return;
    const span = document.createElement('span');
    span.className = 'ripple-circle';
    const r = btn.getBoundingClientRect();
    span.style.left = (e.clientX - r.left) + 'px';
    span.style.top  = (e.clientY - r.top)  + 'px';
    btn.appendChild(span);
    setTimeout(() => span.remove(), 700);
  });
}

/* ===== SMOOTH SCROLL ===== */
function initSmoothScroll() {
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    });
  });
}

/* ===== CONTACT FORM ===== */
function initContactForm() {
  const form = $('#contact-form');
  if (!form) return;

  function validate(el) {
    if (!el.value.trim()) return 'This field is required.';
    if (el.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value)) return 'Please enter a valid email.';
    return '';
  }
  function showErr(el, msg) {
    el.classList.add('input-error');
    el.parentElement.querySelector('.field-error-msg')?.remove();
    if (msg) { const p = document.createElement('span'); p.className='field-error-msg'; p.textContent=msg; el.parentElement.appendChild(p); }
  }
  function clearErr(el) { el.classList.remove('input-error'); el.parentElement.querySelector('.field-error-msg')?.remove(); }

  ['form-name','form-email','form-message'].forEach(id => {
    const el = $('#'+id);
    if (el) el.addEventListener('blur', () => { const e=validate(el); e ? showErr(el,e) : clearErr(el); });
  });

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const fields = ['form-name','form-email','form-message'];
    let hasErr = false;
    fields.forEach(id => { const el=$('#'+id); const err=validate(el); err ? (showErr(el,err), hasErr=true) : clearErr(el); });
    if (hasErr) return;

    const btn=$('#submit-btn'), txt=$('#submit-text'), spin=$('#submit-loading');
    const ok=$('#form-success'), bad=$('#form-error');
    btn.disabled=true; txt.classList.add('hidden'); spin.classList.remove('hidden');
    ok.classList.add('hidden'); bad.classList.add('hidden');

    try {
      const res = await fetch('https://api.web3forms.com/submit', { method:'POST', body: new FormData(form) });
      const data = await res.json();
      data.success ? (ok.classList.remove('hidden'), form.reset()) : bad.classList.remove('hidden');
    } catch { bad.classList.remove('hidden'); }
    finally { btn.disabled=false; txt.classList.remove('hidden'); spin.classList.add('hidden'); }
  });
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  initPageLoad();
  initScrollProgress();
  initNavbar();
  initHamburger();
  initTheme();          // ← CSS variable approach — the full fix
  initCursor();
  initBackToTop();
  initModals();
  initRipple();
  initSmoothScroll();
  initContactForm();

  buildSkills();
  buildServices();
  buildProjects();
  buildTimeline();
  buildCerts();
  initProjectFilters();

  setTimeout(() => {
    initReveal();
    initCounters();
    initScrollSpy();
  }, 60);
});