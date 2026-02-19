/* ===========================
   Serenity Yoga - Minimal JS
   Vanilla, zero dependencies
   =========================== */

document.addEventListener('DOMContentLoaded', function () {

  /* --- Mobile Menu Toggle --- */
  const toggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('nav-mobile');
  const menuIcon = document.getElementById('icon-menu');
  const closeIcon = document.getElementById('icon-close');

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('is-open');
      menuIcon.style.display = isOpen ? 'none' : 'block';
      closeIcon.style.display = isOpen ? 'block' : 'none';
      toggle.setAttribute('aria-expanded', isOpen);
      toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('is-open');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      });
    });
  }


  /* --- Review Carousel --- */
  const reviews = [
    {
      name: 'Sarah M.',
      text: 'The aerial restorative class has completely changed my relationship with rest. I came in with chronic back pain and after just a few sessions, I felt a relief I hadn\u2019t experienced in years. The hammock support makes all the difference.',
      rating: 5
    },
    {
      name: 'James T.',
      text: 'I was skeptical about meditation, but the way it is woven into the restorative practice makes it feel natural and effortless. I leave every class feeling like I have had a full night of sleep. Absolutely transformative.',
      rating: 5
    },
    {
      name: 'Elena K.',
      text: 'As someone who struggles to slow down, these classes have been a revelation. The environment is so calm, the guidance is gentle yet clear, and I always feel held and safe. It is the highlight of my week.',
      rating: 5
    },
    {
      name: 'Michael R.',
      text: 'I started coming after my physiotherapist recommended aerial restorative yoga for my posture issues. Not only has my posture improved, but I have also found a sense of inner peace I did not expect. Truly grateful.',
      rating: 5
    },
    {
      name: 'Priya D.',
      text: 'The Saturday morning class is everything. Restorative postures, breathwork, and a beautiful meditation to close. It sets the tone for my entire weekend. I recommend it to everyone I know.',
      rating: 5
    }
  ];

  var currentReview = 0;
  var quoteEl = document.getElementById('review-quote');
  var nameEl = document.getElementById('review-name');
  var dots = document.querySelectorAll('.reviews__dot');
  var prevBtn = document.getElementById('review-prev');
  var nextBtn = document.getElementById('review-next');

  function showReview(index) {
    currentReview = index;
    if (quoteEl) quoteEl.textContent = '\u201C' + reviews[index].text + '\u201D';
    if (nameEl) nameEl.textContent = reviews[index].name;
    dots.forEach(function (dot, i) {
      dot.classList.toggle('is-active', i === index);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', function () {
      showReview(currentReview === 0 ? reviews.length - 1 : currentReview - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      showReview(currentReview === reviews.length - 1 ? 0 : currentReview + 1);
    });
  }

  dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () {
      showReview(i);
    });
  });


  /* --- Contact Form --- */
  var form = document.getElementById('contact-form');
  var formEl = document.getElementById('contact-form-el');
  var successEl = document.getElementById('contact-success');
  var resetBtn = document.getElementById('contact-reset');

  if (formEl) {
    formEl.addEventListener('submit', function (e) {
      e.preventDefault();
      formEl.style.display = 'none';
      if (successEl) successEl.style.display = 'flex';
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      if (formEl) {
        formEl.reset();
        formEl.style.display = 'flex';
      }
      if (successEl) successEl.style.display = 'none';
    });
  }

});
