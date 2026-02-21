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

  /* ── SPONSORS ───────────────────────────────────────────────── */
  var SPONSORS = [
    { name: 'Caraway Family Foundation', img: 'sponsor/Caraway.png',         href: '' },
    { name: 'Oncor',                img: 'sponsor/Oncor.svg',                href: 'https://www.oncor.com/' },
    { name: 'Lockheed Martin',      img: 'sponsor/Lockheed.png',             href: 'http://www.lockheedmartin.com/' },
    { name: 'Texas Motor Speedway', img: 'sponsor/TXmotorSpeedway.gif',      href: 'http://www.texasmotorspeedway.com' },
    { name: 'Vistra',               img: 'sponsor/Vistra.png',               href: 'https://vistracorp.com/' },
    { name: 'RTX',                  img: 'sponsor/RTX.svg',                   href: 'https://www.rtx.com/social-impact/corporate-responsibility', bg: '#1a3a6b' },
    { name: 'Northrop Grumman',     img: 'sponsor/Northrop.png',             href: 'https://www.northropgrumman.com/corporate-responsibility/corporate-citizenship/northrop-grummans-philanthropic-initiatives', bg: '#000000' },
    { name: 'Siemens Solid Edge',   img: 'sponsor/Siemens.png',              href: 'https://www.plm.automation.siemens.com/' },
    { name: 'Visit Fort Worth',     img: 'sponsor/FortWorth.jpg',            href: 'http://www.fortworth.com/' },
    { name: 'Lincoln Electric',     img: 'sponsor/LincolnE.svg',              href: 'https://www.lincolnelectric.com/' },
    { name: 'American Hakko',       img: 'sponsor/Hakko.svg',                href: 'https://hakkousa.com/' },
    { name: 'Hillwood',             img: 'sponsor/Hillwood.png',             href: 'https://www.hillwood.com/' },
    { name: 'Golden Motor',         img: 'sponsor/GoldenMotors.png',         href: 'https://goldenmotor.bike' },
    { name: 'A Abana Auto Insurance', img: 'sponsor/AAbanaAuto.png',         href: 'http://www.a-abana.com/' },
    { name: 'Google',               img: 'sponsor/Google.svg',               href: 'http://www.google.com/' },
    { name: 'NBC 5',                img: 'sponsor/NBCDFW.png',               href: 'http://www.nbcdfw.com' },
    { name: 'DTN',                  img: 'sponsor/DTN.png',                  href: 'https://www.dtn.com/' },
    { name: 'Texas Solar Energy Society', img: 'sponsor/TexasSolarEnergy.png', href: 'http://www.txses.org/' },
    { name: 'North Texas Renewable Energy', img: 'sponsor/NTREG.png',        href: 'http://www.ntreg.org/' },
    { name: 'DFW Marriott',         img: 'sponsor/Marriott.png',             href: 'http://www.marriott.com/hotels/travel/dfwmc-dallas-fort-worth-marriott-hotel-and-golf-club-at-champions-circle/' },
    { name: 'Bank of America Foundation', img: 'sponsor/BOfA.png',          href: 'http://www.bankofamerica.com/foundation/' },
    { name: 'GM Foundation',        img: 'sponsor/GM.png',                   href: 'http://www.gm.com/company/giving-back/about.html' },
    { name: 'Capital One Foundation', img: 'sponsor/CapOne.png',             href: 'http://www.capitalone.com/about/corporate-citizenship/' },
    { name: 'Verizon Foundation',   img: 'sponsor/Verizon.png',              href: 'http://www.verizon.com/about/responsibility/giving-and-grants' },
    { name: 'Ryder Trucks',         img: 'sponsor/Ryder.gif',                href: 'http://www.ryder.com/' },
    { name: 'Yumi Ice Cream',       img: 'sponsor/YUMI.jpg',                 href: 'http://www.yumiicecream.com/' },
    { name: 'Ham-Com',              img: 'sponsor/Ham35Com.png',              href: 'http://www.hamcom.org/' },
    { name: 'Krage & Janvey',       img: 'sponsor/KJ.gif',                   href: 'http://www.kjllp.com' }
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
      var el = document.createElement('a');
      el.className = 'scc-sp-item';
      el.href = s.href || '#';
      el.target = '_blank';
      el.rel = 'noopener noreferrer';

      var name = document.createElement('span');
      name.textContent = s.name;

      if (s.img) {
        var imgWrap = document.createElement('div');
        imgWrap.className = 'scc-sp-img-wrap';
        if (s.bg) {
          imgWrap.style.backgroundColor = s.bg;
          imgWrap.style.borderRadius = '4px';
          imgWrap.style.padding = '4px 8px';
          imgWrap.style.display = 'inline-flex';
          imgWrap.style.alignItems = 'center';
          imgWrap.style.justifyContent = 'center';
        }
        var img = document.createElement('img');
        img.src = s.img;
        img.alt = s.name;
        imgWrap.appendChild(img);
        el.appendChild(imgWrap);
      }

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
