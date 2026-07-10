/* ══════════════════════════════════════════
   UI — Formulaire de contact → WhatsApp
══════════════════════════════════════════ */
(function () {
  'use strict';

  var WA_NUMBER = '22660967182';

  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var nom     = form.nom.value.trim();
      var tel     = form.tel.value.trim();
      var service = form.service.value;
      var message = form.message.value.trim();
      if (!nom || !message) {
        (!nom ? form.nom : form.message).focus();
        return;
      }

      var isEn = document.documentElement.classList.contains('en');
      var lines = isEn
        ? ['Hello GlobStar X,', '', 'Name: ' + nom]
        : ['Bonjour GlobStar X,', '', 'Nom : ' + nom];
      if (tel)     lines.push((isEn ? 'Phone: ' : 'Téléphone : ') + tel);
      if (service) lines.push((isEn ? 'Service: ' : 'Service : ') + service);
      lines.push('', message);

      window.open(
        'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(lines.join('\n')),
        '_blank',
        'noopener'
      );
    });
  }
})();
