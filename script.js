/* script.js
 - Mobile menu toggle
 - Contact form -> open WhatsApp with prefilled message
 - Set current year
*/

document.addEventListener('DOMContentLoaded', function(){
  // Mobile menu
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  menuToggle && menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !expanded);
    if (mobileMenu) {
      mobileMenu.hidden = !mobileMenu.hidden;
    }
  });

  // Contact form -> open WhatsApp with prefilled message
  const contactForm = document.getElementById('contactForm');
  contactForm && contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    const name = encodeURIComponent(document.getElementById('name').value.trim());
    const phone = encodeURIComponent(document.getElementById('phone').value.trim());
    const message = encodeURIComponent(document.getElementById('message').value.trim());

    // Customize phone number here (your business number)
    const businessNumber = '5513996305218'; // BR format without + sign

    // Compose the text (you can edit the template)
    const text = `Olá! Meu nome é ${name}%0ATelefone: ${phone}%0A%0A${message}`;
    const url = `https://wa.me/${businessNumber}?text=${text}`;

    window.open(url, '_blank');
  });

  // Set year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior: 'smooth', block: 'start'});
        // close mobile menu if open
        if (!mobileMenu.hidden) {
          mobileMenu.hidden = true;
          menuToggle && menuToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });
});
