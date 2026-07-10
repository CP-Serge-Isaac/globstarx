/* ══════════════════════════════════════════
   I18N — FR (défaut, dans le HTML) / EN
══════════════════════════════════════════ */
(function () {
  'use strict';

  var T = {
    'nav.about': 'About', 'nav.services': 'Services', 'nav.contact': 'Contact',
    'bc.home': 'Home',

    /* ── Accueil ── */
    'hero.pill': 'GlobStar X · Ouagadougou',
    'hero.h1': 'Your network, your printing,<br />your equipment.',
    'hero.sub': 'GlobStar X installs and maintains company IT in Ouagadougou, prints business communication materials and supplies office equipment. One point of contact, from quote to delivery.',
    'hero.cta1': 'Request a quote',
    'hero.cta2': 'See our services',

    'pr.1t': 'Quote within 48 h', 'pr.1d': 'Send us your need, we price it fast.',
    'pr.2t': 'On-site service', 'pr.2d': 'In Ouagadougou and the regions.',
    'pr.3t': 'Warranty &amp; after-sales', 'pr.3d': 'We stay around after delivery.',

    'about.eyebrow': 'Who we are',
    'about.h2': 'A team of engineers,<br /><span class="grad-text">based in Ouagadougou</span>',
    'about.lead': 'GlobStar X is a Burkinabè company founded by network and telecom engineers. Three complementary trades under one roof, so you only have one number to call.',
    'about.chip2': 'EST. 2026',
    'about.v1t': 'Engineers, not resellers', 'about.v1': 'Every installation is designed and checked by an engineer.',
    'about.v2t': 'One point of contact', 'about.v2': 'Network, printing, hardware: one quote, one follow-up, one person in charge.',
    'about.v3t': 'Responsive, in the field', 'about.v3': 'We come to your premises, in Ouagadougou and beyond.',

    'srv.eyebrow': 'Our services',
    'srv.h2': 'What we do <span class="grad-text">for you</span>',
    'srv.1t': 'An IT setup that just works, every day',
    'srv.1s': 'Cabling, networks, servers, troubleshooting: our engineers design your installation and keep it running. We also build your websites and management applications.',
    'srv.1a': 'Networks &amp; infrastructure', 'srv.1b': 'Web &amp; application development', 'srv.1c': 'Maintenance &amp; support',
    'srv.1l': 'See the IT division',
    'srv.2t': 'Your printed materials, from business card to billboard',
    'srv.2s': 'Business cards, brochures, banners, totems: our workshop designs the artwork and prints digitally or offset, in small or large runs.',
    'srv.2a': 'Graphic design &amp; branding', 'srv.2b': 'Digital &amp; offset printing', 'srv.2c': 'Signage &amp; large format',
    'srv.2l': 'See the Printing division',
    'srv.3t': 'Computers, copiers and supplies, delivered and installed',
    'srv.3s': 'We advise you on the right hardware at the right price, deliver it to your premises, install it and provide after-sales service.',
    'srv.3a': 'Computer hardware', 'srv.3b': 'Office equipment', 'srv.3c': 'Consumables &amp; accessories',
    'srv.3l': 'See the Equipment division',

    'ct.eyebrow': 'Contact',
    'ct.h2': 'Tell us what you need',
    'ct.note': 'Describe your need: your message reaches us directly on WhatsApp and we come back to you with a quote within 48 h.',
    'ct.lName': 'Name', 'ct.lTel': 'Phone', 'ct.lService': 'Service', 'ct.lMsg': 'Message',
    'ct.pName': 'Your name', 'ct.pMsg': 'Describe your need…',
    'ct.oNone': 'Select…', 'ct.oOther': 'Other',
    'ct.send': 'Send on WhatsApp',

    'f.brand': 'Trusted technology partner in Ouagadougou — IT, printing and equipment.',
    'f.services': 'Services', 'f.company': 'Company', 'f.contact': 'Contact',
    'f.privacy': 'Privacy policy', 'f.terms': 'Terms of use',

    /* ── Pages services : communs ── */
    'steps.eyebrow': 'Our method',
    'steps.h2': 'How we <span class="grad-text">work</span>',
    'steps.1t': 'Listen', 'steps.1d': 'On-site visit and analysis of your actual needs.',
    'steps.2t': 'Propose', 'steps.2d': 'A clear, detailed quote, with no surprises.',
    'steps.3t': 'Deliver', 'steps.3d': 'Deployment by our engineers, on the agreed schedule.',
    'steps.4t': 'Follow up', 'steps.4d': 'Support and maintenance built to last.',
    'cta.p': 'Tell us what you need: we reply quickly with a tailored proposal.',
    'cta.form': 'Contact form',

    /* ── Informatique ── */
    'p1.eyebrow': 'IT Division',
    'p1.h1': 'Reliable, secure information systems',
    'p1.intro': 'From network cabling to business applications, our engineering team designs, deploys and maintains your company’s digital tools.',
    'p1.o1t': 'Networks &amp; infrastructure', 'p1.o1d': 'Design and deployment of high-performing business networks, from cabling to multi-site interconnection.',
    'p1.o1a': 'Structured cabling &amp; patch cabinets', 'p1.o1b': 'LAN, Wi-Fi &amp; site interconnection', 'p1.o1c': 'Servers, backup &amp; security',
    'p1.o2t': 'Web &amp; application development', 'p1.o2d': 'Showcase websites, business applications and management tools designed around your real processes.',
    'p1.o2a': 'Professional websites', 'p1.o2b': 'Custom management applications', 'p1.o2c': 'Hosting &amp; domain names',
    'p1.o3t': 'Maintenance &amp; support', 'p1.o3d': 'Preventive maintenance contracts and responsive assistance to keep your equipment running.',
    'p1.o3a': 'Fleet maintenance contracts', 'p1.o3b': 'On-site &amp; remote troubleshooting', 'p1.o3c': 'Updates &amp; antivirus protection',
    'p1.o4t': 'Consulting &amp; audit', 'p1.o4d': 'An expert view of your information system so you invest in the right places.',
    'p1.o4a': 'Fleet &amp; security audit', 'p1.o4b': 'IT master plan', 'p1.o4c': 'Team coaching',
    'p1.cta': 'An IT project?',

    /* ── Imprimerie ── */
    'p2.eyebrow': 'Printing Division',
    'p2.h1': 'Your image, printed with rigour',
    'p2.intro': 'From layout to finished product, we design and print the materials that carry your company’s image, in small and large formats.',
    'p2.o1t': 'Graphic design &amp; branding', 'p2.o1d': 'A consistent brand image, from the logo to your communication materials.',
    'p2.o1a': 'Logos &amp; brand guidelines', 'p2.o1b': 'Professional layouts &amp; artwork', 'p2.o1c': 'Communication materials',
    'p2.o2t': 'Digital &amp; offset printing', 'p2.o2d': 'Quality print runs, from a single document to large series.',
    'p2.o2a': 'Business cards, flyers &amp; brochures', 'p2.o2b': 'Posters, reports &amp; catalogues', 'p2.o2c': 'Small &amp; large print runs',
    'p2.o3t': 'Signage &amp; large format', 'p2.o3d': 'Your brand visible in public spaces and on your premises.',
    'p2.o3a': 'Advertising panels &amp; totems', 'p2.o3b': 'Banners, roll-up displays &amp; window graphics', 'p2.o3c': 'Building &amp; vehicle wrapping',
    'p2.o4t': 'Event materials', 'p2.o4d': 'Everything you need for launches, trade fairs and ceremonies.',
    'p2.o4a': 'Stands &amp; roll-ups', 'p2.o4b': 'T-shirts, caps &amp; branded items', 'p2.o4c': 'Badges &amp; invitations',
    'p2.cta': 'Something to print?',

    /* ── Équipement ── */
    'p3.eyebrow': 'Equipment Division',
    'p3.h1': 'The right hardware, delivered and installed',
    'p3.intro': 'We select, supply and install professional hardware under warranty, with engineers’ advice and genuine after-sales service.',
    'p3.o1t': 'Computer hardware', 'p3.o1d': 'Reliable machines, sized for your actual needs.',
    'p3.o1a': 'Desktop &amp; laptop computers', 'p3.o1b': 'Servers &amp; network equipment', 'p3.o1c': 'UPS &amp; power protection',
    'p3.o2t': 'Office equipment', 'p3.o2d': 'All your office equipment, installed and configured.',
    'p3.o2a': 'Printers &amp; photocopiers', 'p3.o2b': 'Projectors &amp; displays', 'p3.o2c': 'Scanners &amp; telephony',
    'p3.o3t': 'Consumables &amp; accessories', 'p3.o3d': 'Everyday essentials, always in stock.',
    'p3.o3a': 'Toners, inks &amp; paper', 'p3.o3b': 'Cables, keyboards &amp; peripherals', 'p3.o3c': 'Office supplies',
    'p3.o4t': 'Delivery &amp; installation', 'p3.o4d': 'We deliver, install and commission on site.',
    'p3.o4a': 'Delivery in Ouagadougou &amp; the regions', 'p3.o4b': 'Installation &amp; setup included', 'p3.o4c': 'Warranty &amp; after-sales service',
    'p3.cta': 'Need equipment?'
  };

  function setLang(lang) {
    var isEn = lang === 'en';
    document.documentElement.lang = lang;
    document.documentElement.classList.toggle('en', isEn);
    try { localStorage.setItem('gsx-lang', lang); } catch (e) {}

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (el.dataset.frHtml === undefined) el.dataset.frHtml = el.innerHTML;
      if (isEn && T[key] !== undefined) el.innerHTML = T[key];
      else if (!isEn) el.innerHTML = el.dataset.frHtml;
    });

    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-ph');
      if (el.dataset.frPh === undefined) el.dataset.frPh = el.placeholder;
      el.placeholder = (isEn && T[key] !== undefined) ? T[key] : el.dataset.frPh;
    });

    /* Titre du document : version EN portée par <body data-en-title> */
    var enTitle = document.body.dataset.enTitle;
    if (enTitle) {
      if (!document.documentElement.dataset.frTitle) document.documentElement.dataset.frTitle = document.title;
      document.title = isEn ? enTitle : document.documentElement.dataset.frTitle;
    }

    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      btn.textContent = isEn ? 'FR' : 'EN';
    });
  }

  var saved = 'fr';
  try { saved = localStorage.getItem('gsx-lang') || 'fr'; } catch (e) {}
  if (saved === 'en') setLang('en');

  document.querySelectorAll('.lang-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLang(document.documentElement.classList.contains('en') ? 'fr' : 'en');
    });
  });
})();
