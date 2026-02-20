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


  /* ── BUILD DOM ──────────────────────────────────────────────── */
  function init() {
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
