/* ═══════════════════════════════════════════════════════════════
   Solar Car Challenge — Top Nav Injector
   Add ONE line to each page's <head>:
     <script src="scc_nav.js"></script>
   That's it. This builds the full top nav + dropdowns + sponsor
   strip automatically, then hides the old sidebar.
═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── NAV STRUCTURE ─────────────────────────────────────────── */
  var NAV = [
    {
      label: 'General Info',
      color: '#C0001A',
      links: [
        { href: 'about_shtml.html',        text: 'About SCC' },
        { href: 'testimonials_shtml.html',  text: 'Testimonials' },
        { href: 'staff_shtml.html',         text: 'Race Staff' },
        { href: 'history_shtml.html',       text: 'Solar Racing History' },
        { href: 'resource_shtml.html',      text: 'Resources' },
        { href: 'workshop_shtml.html',      text: 'Workshops' },
        { href: 'sponsors_shtml.html',      text: 'Sponsors' },
        { href: 'giving_shtml.html',        text: 'Giving to the SCC' },
        { href: 'internship_shtml.html',    text: 'Internships' },
        { href: 'interns2025_shtml.html',   text: '2025 Interns' },
        { href: 'media_shtml.html',         text: 'Media Page' },
        { href: 'https://www.linkedin.com/groups/14497187/', text: 'LinkedIn Alumni Group', blank: true }
      ]
    },
    {
      label: 'Event Info',
      color: '#006030',
      links: [
        { href: 'route2026_shtml.html',     text: '2026 Route' },
        { href: 'updates_shtml.html',       text: 'Event Updates' },
        { href: 'results2025_shtml.html',   text: 'Event Results' },
        { href: 'calendar2026_shtml.html',  text: 'Event Calendar' },
        { href: 'teams2025_shtml.html',     text: 'Team Profiles' },
        { href: 'photos_shtml.html',        text: 'Photos & Videos' },
        { href: 'weather_shtml.html',       text: 'Weather Information' },
        { href: 'maps_shtml.html',          text: 'Maps & Directions' }
      ]
    },
    {
      label: 'Team Support',
      color: '#8B6000',
      links: [
        { href: 'webcasts_shtml.html',          text: 'Webcasts' },
        { href: 'scrutineering_shtml.html',     text: 'Navigating Scrutineering' },
        { href: 'buysell_shtml.html',           text: 'Buy/Sell Parts' },
        { href: 'white_papers_shtml.html',      text: 'White Papers' }
      ]
    },
    {
      label: 'Technical Docs',
      color: '#003888',
      links: [
        { href: 'rules_shtml.html',   text: 'Rules & Rules Updates' },
        { href: 'intent_shtml.html',  text: 'Intent to Race Form' },
        { href: 'forms_shtml.html',   text: 'Team Documents' }
      ]
    }
  ];

  /* ── SPONSORS (first 3 are always shown) ────────────────────── */
  var SPONSORS = [
    { name: 'Caraway Family Foundation', img: '/challenge/sponsors/Caraway_Family_Foundation.png' },
    { name: 'Oncor',           img: '/challenge/sponsors/oncor.png',           href: 'https://www.oncor.com/' },
    { name: 'Lockheed Martin', img: '/challenge/sponsors/lockheedmartin.png',  href: 'http://www.lockheedmartin.com/' },
    { name: 'Texas Motor Speedway', img: '/challenge/sponsors/tms.gif',        href: 'http://www.texasmotorspeedway.com' },
    { name: 'Vistra',          img: '/challenge/sponsors/vistra.png',          href: 'https://vistracorp.com/' },
    { name: 'RTX',             img: '/challenge/sponsors/rtx_white.svg',       href: 'https://www.rtx.com/' },
    { name: 'Northrop Grumman',img: '/challenge/sponsors/northrop_grumman_white.png', href: 'https://www.northropgrumman.com/' },
    { name: 'Siemens Solid Edge', img: '/challenge/sponsors/siemens.jpg',      href: 'https://www.plm.automation.siemens.com/' },
    { name: 'Lincoln Electric', img: '/challenge/sponsors/lincoln_electric.svg', href: 'https://www.lincolnelectric.com/' },
    { name: 'Google',          img: '/challenge/sponsors/google.svg',           href: 'http://www.google.com/' },
    { name: 'DTN',             img: '/challenge/sponsors/dtn.png',              href: 'https://www.dtn.com/' }
  ];

  /* ── CSS ────────────────────────────────────────────────────── */
  var css = `
    :root {
      --scc-nav-h: 58px;
      --scc-sp-h:  44px;
      --scc-total: calc(var(--scc-nav-h) + var(--scc-sp-h));
    }

    /* ── Reset body padding so our nav sits at top ── */
    body {
      padding-top: var(--scc-total) !important;
      background-image: none !important;
    }

    /* Hide the old sidebar entirely */
    body > font > table > tbody > tr > td:first-child,
    body > table > tbody > tr > td:first-child {
      display: none !important;
    }
    body > font > table > tbody > tr > td:nth-child(2),
    body > table > tbody > tr > td:nth-child(2) {
      display: none !important;
    }
    /* Content td now takes full width */
    body > font > table > tbody > tr > td:nth-child(3),
    body > table > tbody > tr > td:nth-child(3) {
      display: block !important;
      margin-left: 0 !important;
      margin-top: 0 !important;
      width: 100% !important;
      max-width: 100% !important;
    }

    /* ── TOP NAV BAR ── */
    #scc-nav {
      position: fixed;
      top: 0; left: 0; right: 0;
      height: var(--scc-nav-h);
      background: #ffffff;
      border-bottom: 1px solid #e0e3ea;
      box-shadow: 0 2px 16px rgba(0,0,0,0.08);
      display: flex;
      align-items: center;
      z-index: 9000;
      padding: 0 24px;
      gap: 0;
    }

    /* Logo area */
    #scc-nav .scc-logo {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-right: 28px;
      text-decoration: none;
      flex-shrink: 0;
    }
    #scc-nav .scc-logo img {
      height: 36px;
      width: auto;
      display: block;
    }
    #scc-nav .scc-logo-text {
      font-family: 'Rajdhani', 'Exo 2', sans-serif;
      font-weight: 700;
      font-size: 15px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #16181f;
      line-height: 1.1;
    }
    #scc-nav .scc-logo-text span {
      display: block;
      font-size: 9px;
      font-weight: 600;
      letter-spacing: 0.22em;
      color: #8891a0;
    }

    /* Nav items */
    #scc-nav .scc-items {
      display: flex;
      align-items: stretch;
      height: 100%;
      gap: 0;
      flex: 1;
    }

    .scc-item {
      position: relative;
      display: flex;
      align-items: center;
    }

    .scc-item > a {
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 0 16px;
      height: 100%;
      font-family: 'Exo 2', system-ui, sans-serif;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: #2a2d38;
      text-decoration: none;
      border-bottom: 3px solid transparent;
      transition: color 0.15s, border-color 0.15s, background 0.15s;
      white-space: nowrap;
      cursor: pointer;
    }

    .scc-item > a .scc-chevron {
      width: 0; height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 5px solid currentColor;
      opacity: 0.5;
      transition: transform 0.2s;
      flex-shrink: 0;
      margin-top: 1px;
    }

    .scc-item:hover > a {
      color: var(--scc-item-color, #C0001A);
      border-bottom-color: var(--scc-item-color, #C0001A);
      background: rgba(0,0,0,0.025);
    }
    .scc-item:hover > a .scc-chevron { transform: rotate(180deg); opacity: 0.8; }

    /* Dropdown panel */
    .scc-dropdown {
      display: none;
      position: absolute;
      top: calc(var(--scc-nav-h) - 3px);
      left: 0;
      min-width: 220px;
      background: #ffffff;
      border: 1px solid #e0e3ea;
      border-top: 3px solid var(--scc-item-color, #C0001A);
      border-radius: 0 0 10px 10px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.12);
      overflow: hidden;
      z-index: 9001;
    }

    .scc-item:hover .scc-dropdown { display: block; }

    .scc-dropdown a {
      display: block;
      padding: 9px 18px;
      font-family: 'Exo 2', system-ui, sans-serif;
      font-size: 13px;
      font-weight: 400;
      color: #3a3d4a !important;
      text-decoration: none !important;
      border-left: 3px solid transparent;
      transition: background 0.13s, color 0.13s, border-color 0.13s, padding-left 0.13s;
      letter-spacing: 0.01em;
    }
    .scc-dropdown a:hover {
      background: color-mix(in srgb, var(--scc-item-color, #C0001A) 8%, transparent);
      color: var(--scc-item-color, #C0001A) !important;
      border-left-color: var(--scc-item-color, #C0001A);
      padding-left: 22px;
    }
    .scc-dropdown a + a {
      border-top: 1px solid #f0f2f5;
    }

    /* Home link at far left */
    #scc-home-link {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 14px;
      font-family: 'Exo 2', system-ui, sans-serif;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: #2a2d38;
      text-decoration: none;
      border-bottom: 3px solid transparent;
      transition: color 0.15s, border-color 0.15s;
      white-space: nowrap;
    }
    #scc-home-link:hover { color: #C0001A; border-bottom-color: #C0001A; text-decoration: none; }

    /* ── SPONSOR STRIP ── */
    #scc-sponsors {
      position: fixed;
      top: var(--scc-nav-h);
      left: 0; right: 0;
      height: var(--scc-sp-h);
      background: #f7f8fb;
      border-bottom: 1px solid #e0e3ea;
      display: flex;
      align-items: center;
      gap: 0;
      z-index: 8999;
      overflow: hidden;
    }

    #scc-sponsors .scc-sp-label {
      flex-shrink: 0;
      padding: 0 16px 0 24px;
      font-family: 'Exo 2', system-ui, sans-serif;
      font-size: 9px;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #8891a0;
      white-space: nowrap;
      border-right: 1px solid #e0e3ea;
      height: 100%;
      display: flex;
      align-items: center;
    }

    #scc-sp-track-wrap {
      flex: 1;
      overflow: hidden;
      height: 100%;
      position: relative;
    }

    #scc-sp-track {
      display: flex;
      align-items: center;
      gap: 28px;
      height: 100%;
      padding: 0 24px;
      white-space: nowrap;
      /* Scrolling marquee */
      animation: sccScroll 35s linear infinite;
    }
    #scc-sp-track:hover { animation-play-state: paused; }

    @keyframes sccScroll {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    .scc-sp-item {
      display: flex;
      align-items: center;
      gap: 8px;
      text-decoration: none;
      flex-shrink: 0;
      opacity: 0.7;
      transition: opacity 0.2s;
    }
    .scc-sp-item:hover { opacity: 1; }

    .scc-sp-item img {
      height: 22px;
      width: auto;
      display: block;
      object-fit: contain;
      filter: grayscale(30%);
    }
    .scc-sp-item:hover img { filter: none; }

    .scc-sp-item span {
      font-family: 'Exo 2', system-ui, sans-serif;
      font-size: 11px;
      font-weight: 600;
      color: #5a6278;
      white-space: nowrap;
    }

    /* ── Content area ── */
    body > font > table,
    body > table {
      display: block !important;
      width: 100% !important;
      max-width: none !important;
      background: transparent !important;
      border: none !important;
      box-shadow: none !important;
    }
    body > font > table > tbody,
    body > table > tbody,
    body > font > table > tbody > tr,
    body > table > tbody > tr {
      display: block !important;
      background: transparent !important;
    }

    /* Content card */
    body > font > table > tbody > tr > td:nth-child(3),
    body > table > tbody > tr > td:nth-child(3) {
      display: block !important;
      background: #f0f2f5 !important;
      padding: 0 !important;
    }

    body > font > table > tbody > tr > td:nth-child(3) > table,
    body > table > tbody > tr > td:nth-child(3) > table {
      display: block !important;
      background: #ffffff !important;
      margin: 24px auto !important;
      max-width: 960px !important;
      width: calc(100% - 48px) !important;
      border-radius: 14px !important;
      box-shadow: 0 4px 24px rgba(0,0,0,0.08) !important;
      border: 1px solid #e0e3ea !important;
      overflow: hidden !important;
    }

    /* Fix the width="800" issue */
    td[width="800"] {
      width: auto !important; max-width: 100% !important;
      min-width: 0 !important; overflow: hidden !important;
    }
    td[width="800"] table { width: 100% !important; max-width: 100% !important; table-layout: fixed !important; }
    td[width="800"] td { word-wrap: break-word !important; overflow-wrap: break-word !important; white-space: normal !important; }

    /* Body cells */
    td.body, td.top, td[class="body"], td[class="top"] {
      background: transparent !important;
      border: none !important; box-shadow: none !important;
      padding: 32px 40px !important;
      font-family: 'Exo 2', system-ui, sans-serif !important;
      font-size: 15px !important; color: #16181f !important;
      line-height: 1.75 !important;
      word-wrap: break-word !important; overflow-wrap: break-word !important;
      white-space: normal !important; max-width: 100% !important; overflow: hidden !important;
    }

    td.body p, td.top p, td.body li, td.top li, td.body td, td.top td {
      word-wrap: break-word !important; overflow-wrap: break-word !important;
      white-space: normal !important; max-width: 100% !important;
    }

    td.body table, td.top table, td.body object, td.top object,
    td.body iframe, td.top iframe, td.body form, td.top form {
      max-width: 100% !important; overflow-x: auto !important;
      display: block !important; box-sizing: border-box !important;
    }

    td.body div:not(.t-slider-wrap):not(.t-track):not(.t-slide):not(.t-quote-icon):not(.t-author):not(.t-avatar):not(.t-author-info):not(.t-controls):not(.t-dots):not(.t-dot):not(.t-intro),
    td.top  div:not(.t-slider-wrap):not(.t-track):not(.t-slide):not(.t-quote-icon):not(.t-author):not(.t-avatar):not(.t-author-info):not(.t-controls):not(.t-dots):not(.t-dot):not(.t-intro) {
      max-width: 100% !important; box-sizing: border-box !important;
    }

    input[type="range"] { max-width: 100% !important; width: 100% !important; box-sizing: border-box !important; display: block !important; accent-color: #E09000; }

    td.body_white { font-family: 'Exo 2', sans-serif !important; font-size: 14px !important; font-weight: 700 !important; color: #fff !important; padding: 10px 16px !important; }

    div.title {
      font-family: 'Rajdhani', 'Exo 2', sans-serif !important;
      font-size: 32px !important; font-weight: 700 !important;
      color: #16181f !important; letter-spacing: 0.04em !important;
      line-height: 1.1 !important; margin-bottom: 20px !important;
      text-transform: uppercase !important;
      padding-bottom: 10px !important;
      border-bottom: 3px solid #E09000 !important;
      display: inline-block !important;
    }

    /* Section bars */
    table[bgcolor="#84000A"], td[bgcolor="#84000A"], td.news {
      background: linear-gradient(100deg, #C0001A 0%, #8a0010 100%) !important;
      border-radius: 6px !important; padding: 8px 16px !important;
      box-shadow: 0 2px 10px rgba(192,0,26,0.18) !important;
    }
    td.news { font-family: 'Exo 2', sans-serif !important; font-size: 13px !important; font-weight: 700 !important; color: #fff !important; letter-spacing: 0.08em !important; text-transform: uppercase !important; }

    td[bgcolor="#004416"], td[bgcolor="#003300"], td[bgcolor="#006600"], td[bgcolor="green"], td[bgcolor="#005500"], td[bgcolor="#004400"] {
      background: linear-gradient(100deg, #006030 0%, #003d1a 100%) !important;
      border-radius: 6px !important; padding: 8px 16px !important;
      box-shadow: 0 2px 10px rgba(0,96,48,0.18) !important;
      font-family: 'Exo 2', sans-serif !important; font-size: 13px !important; font-weight: 700 !important; color: #fff !important; letter-spacing: 0.08em !important; text-transform: uppercase !important;
    }
    td[bgcolor="#00224D"], td[bgcolor="#00224d"], td[bgcolor="#003366"], td[bgcolor="#000066"], td[bgcolor="navy"], td[bgcolor="#001166"], td[bgcolor="#000033"] {
      background: linear-gradient(100deg, #003888 0%, #001f55 100%) !important;
      border-radius: 6px !important; padding: 8px 16px !important;
      box-shadow: 0 2px 10px rgba(0,56,136,0.18) !important;
      font-family: 'Exo 2', sans-serif !important; font-size: 13px !important; font-weight: 700 !important; color: #fff !important; letter-spacing: 0.08em !important; text-transform: uppercase !important;
    }
    td[bgcolor="#FFCC00"], td[bgcolor="#ffcc00"], td[bgcolor="#FFD700"], td[bgcolor="#ffd700"], td[bgcolor="gold"], td[bgcolor="#CCAA00"], td[bgcolor="#ccaa00"] {
      background: linear-gradient(100deg, #c47f00 0%, #f0a500 100%) !important;
      border-radius: 6px !important; padding: 8px 16px !important;
      box-shadow: 0 2px 10px rgba(224,144,0,0.3) !important;
      font-family: 'Exo 2', sans-serif !important; font-size: 12px !important; font-weight: 800 !important; color: #1a0e00 !important; letter-spacing: 0.08em !important; text-transform: uppercase !important;
      text-shadow: 0 1px 0 rgba(255,255,255,0.25) !important;
    }

    td.news a, table[bgcolor="#84000A"] a, td[bgcolor="#84000A"] a,
    td[bgcolor="#004416"] a, td[bgcolor="#00224D"] a, td[bgcolor="#00224d"] a { color: rgba(255,255,255,0.92) !important; text-decoration: none !important; }
    td[bgcolor="#FFCC00"] a, td[bgcolor="#ffcc00"] a { color: #1a0e00 !important; text-decoration: none !important; }

    td.body table, td.top table { border-collapse: collapse !important; width: 100% !important; }
    td.body table td, td.top table td { border: 1px solid #e0e3ea !important; padding: 8px 12px !important; color: #16181f !important; }
    td.body table tr:nth-child(even) td, td.top table tr:nth-child(even) td { background: #f7f8fb !important; }

    a { color: #C0001A; text-decoration: none; transition: color 0.15s; }
    a:hover { color: #e0001f; text-decoration: underline; }

    td.center { text-align: center !important; padding: 8px !important; }
    td.name { font-style: italic; font-size: 13px; text-align: right; color: #8891a0; padding: 4px 8px !important; }
    td.photo { text-align: center; vertical-align: top; padding: 10px !important; }

    td[bgcolor="Black"][height="1"], td[bgcolor="black"][height="1"], td[bgcolor="#999999"], td[height="1"] {
      background: #e0e3ea !important; height: 1px !important; border: none !important; padding: 0 !important;
    }

    td.footer {
      display: block !important;
      font-family: 'Exo 2', system-ui, sans-serif !important;
      font-size: 12.5px !important; color: #8891a0 !important;
      padding: 24px 40px !important;
      border-top: 1px solid #e0e3ea !important;
      background: #f7f8fb !important;
      border-radius: 0 0 14px 14px !important;
      line-height: 1.9 !important; position: relative !important;
    }
    td.footer::before {
      content: ''; position: absolute; top: 0; left: 40px; right: 40px;
      height: 2px; background: linear-gradient(90deg, #E09000, transparent); opacity: 0.5;
    }
    td.footer a { color: #C0001A !important; }
    td.footer a:hover { color: #e0001f !important; }

    iframe { border-radius: 6px !important; border: none !important; box-shadow: 0 2px 12px rgba(0,0,0,0.1) !important; display: block; max-width: 100% !important; margin: 10px auto; }

    td.reg_blue   { background: rgba(0,56,136,0.12) !important; border-radius: 4px; }
    td.reg_green  { background: rgba(0,96,48,0.12) !important; border-radius: 4px; }
    td.reg_yellow { background: rgba(224,144,0,0.15) !important; border-radius: 4px; }
    td.reg_red    { background: rgba(192,0,26,0.12) !important; border-radius: 4px; }
    td.reg_white  { background: #fff !important; border: 1px solid #e0e3ea !important; border-radius: 4px; }
    td.reg_gray   { background: #d8dce4 !important; border-radius: 4px; }

    ::-webkit-scrollbar { width: 5px; height: 5px; }
    ::-webkit-scrollbar-track { background: #f0f2f5; }
    ::-webkit-scrollbar-thumb { background: #d0d4dc; border-radius: 3px; }
    ::-webkit-scrollbar-thumb:hover { background: #b0b8c8; }

    @media (max-width: 800px) {
      #scc-nav { gap: 0; padding: 0 12px; }
      .scc-item > a { padding: 0 10px; font-size: 11px; }
      #scc-nav .scc-logo-text span { display: none; }
      body > font > table > tbody > tr > td:nth-child(3) > table,
      body > table > tbody > tr > td:nth-child(3) > table { margin: 12px !important; width: calc(100% - 24px) !important; max-width: calc(100% - 24px) !important; }
      td.body, td.top { padding: 20px 18px !important; }
      td.footer { padding: 18px !important; }
      td.footer::before { left: 18px; right: 18px; }
    }

    @media (max-width: 560px) {
      .scc-item > a span:not(.scc-chevron) { display: none; }
      .scc-item > a { padding: 0 8px; }
      #scc-sponsors { display: none; }
      :root { --scc-total: var(--scc-nav-h); }
      body { padding-top: var(--scc-nav-h) !important; }
    }
  `;

  /* ── BUILD DOM ──────────────────────────────────────────────── */
  function init() {
    /* Inject fonts */
    if (!document.getElementById('scc-fonts')) {
      var fl = document.createElement('link');
      fl.id = 'scc-fonts';
      fl.rel = 'stylesheet';
      fl.href = 'https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700;800&family=Rajdhani:wght@600;700&display=swap';
      document.head.appendChild(fl);
    }

    /* Inject styles */
    var st = document.createElement('style');
    st.textContent = css;
    document.head.appendChild(st);

    /* ── TOP NAV ── */
    var nav = document.createElement('nav');
    nav.id = 'scc-nav';

    /* Logo */
    var logoLink = document.createElement('a');
    logoLink.href = 'index.html';
    logoLink.className = 'scc-logo';

    /* Try to grab the existing logo img src from the old sidebar */
    var oldImg = document.querySelector('td[bgcolor="White"] img, td[bgcolor="white"] img');
    if (oldImg && oldImg.src) {
      var li = document.createElement('img');
      li.src = oldImg.src;
      li.alt = 'Solar Car Challenge';
      logoLink.appendChild(li);
    }

    var lt = document.createElement('div');
    lt.className = 'scc-logo-text';
    lt.innerHTML = 'Solar Car Challenge<span>Est. 1993 · Plano, TX</span>';
    logoLink.appendChild(lt);
    nav.appendChild(logoLink);

    /* Home link */
    var hl = document.createElement('a');
    hl.id = 'scc-home-link';
    hl.href = 'index.html';
    hl.textContent = 'Home';
    nav.appendChild(hl);

    /* Nav items */
    var items = document.createElement('div');
    items.className = 'scc-items';

    NAV.forEach(function (section) {
      var item = document.createElement('div');
      item.className = 'scc-item';
      item.style.setProperty('--scc-item-color', section.color);

      var trigger = document.createElement('a');
      trigger.href = '#';
      trigger.onclick = function(e){ e.preventDefault(); };

      var labelSpan = document.createElement('span');
      labelSpan.textContent = section.label;
      trigger.appendChild(labelSpan);

      var chev = document.createElement('span');
      chev.className = 'scc-chevron';
      trigger.appendChild(chev);

      var drop = document.createElement('div');
      drop.className = 'scc-dropdown';

      section.links.forEach(function (link) {
        var a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.text;
        if (link.blank) a.target = '_blank';
        drop.appendChild(a);
      });

      item.appendChild(trigger);
      item.appendChild(drop);
      items.appendChild(item);
    });

    nav.appendChild(items);
    document.body.insertBefore(nav, document.body.firstChild);

    /* ── SPONSOR STRIP ── */
    var sp = document.createElement('div');
    sp.id = 'scc-sponsors';

    var spLabel = document.createElement('div');
    spLabel.className = 'scc-sp-label';
    spLabel.textContent = 'Sponsored By';
    sp.appendChild(spLabel);

    var trackWrap = document.createElement('div');
    trackWrap.id = 'scc-sp-track-wrap';

    var track = document.createElement('div');
    track.id = 'scc-sp-track';

    /* Double the list for seamless loop */
    var allSp = SPONSORS.concat(SPONSORS);
    allSp.forEach(function (s) {
      var el = document.createElement(s.href ? 'a' : 'div');
      el.className = 'scc-sp-item';
      if (s.href) { el.href = s.href; el.target = '_blank'; }

      if (s.img) {
        var img = document.createElement('img');
        img.src = s.img;
        img.alt = s.name;
        el.appendChild(img);
      }

      var name = document.createElement('span');
      name.textContent = s.name;
      el.appendChild(name);

      track.appendChild(el);
    });

    trackWrap.appendChild(track);
    sp.appendChild(trackWrap);
    document.body.insertBefore(sp, nav.nextSibling);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
