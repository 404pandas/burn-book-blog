// ============================================================
//  Burn Book — GSAP + ScrollTrigger Animations
// ============================================================

gsap.registerPlugin(ScrollTrigger);

// --- Nav: slide down on load ---
gsap.from('#nav', {
  y: -90,
  opacity: 0,
  duration: 0.55,
  ease: 'power3.out',
});

// --- Footer: slide up on load ---
gsap.from('#footerContainer', {
  y: 80,
  opacity: 0,
  duration: 0.5,
  ease: 'power2.out',
  delay: 0.15,
});

// --- Page header: fade + drop ---
gsap.from('.page-header', {
  opacity: 0,
  y: -24,
  duration: 0.5,
  ease: 'power2.out',
  delay: 0.25,
});

// --- Dashboard header ---
const dashHeader = document.querySelector('.dashboard-header');
if (dashHeader) {
  gsap.from(dashHeader, {
    opacity: 0,
    y: -20,
    duration: 0.45,
    ease: 'power2.out',
    delay: 0.2,
  });
}

// --- Back link on single post ---
const backLink = document.querySelector('.back-link');
if (backLink) {
  gsap.from(backLink, {
    opacity: 0,
    x: -28,
    duration: 0.4,
    ease: 'power2.out',
    delay: 0.2,
  });
}

// --- Auth & edit forms: bounce in ---
const form = document.querySelector('.burn-form');
if (form) {
  gsap.from(form, {
    opacity: 0,
    y: 50,
    duration: 0.55,
    ease: 'back.out(1.6)',
    delay: 0.3,
  });
}

// --- Comment form card ---
const commentFormCard = document.querySelector('.comment-form-card');
if (commentFormCard) {
  gsap.from(commentFormCard, {
    scrollTrigger: {
      trigger: commentFormCard,
      start: 'top 88%',
      toggleActions: 'play none none none',
    },
    opacity: 0,
    y: 30,
    duration: 0.45,
    ease: 'power2.out',
  });
}

// --- Post cards (home page grid + dashboard): ScrollTrigger per card ---
//     Each card drops in from above and settles to its rotated resting position.
const cards = gsap.utils.toArray('.burn-card');
cards.forEach((card, i) => {
  const dir = i % 2 === 0 ? -6 : 6;
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top 88%',
      toggleActions: 'play none none none',
    },
    opacity: 0,
    y: 65,
    rotation: dir,
    duration: 0.55,
    ease: 'back.out(1.4)',
  });
});

// --- Comments (individual post page): ScrollTrigger per comment ---
const comments = gsap.utils.toArray('.comment-block');
comments.forEach((comment) => {
  gsap.from(comment, {
    scrollTrigger: {
      trigger: comment,
      start: 'top 90%',
      toggleActions: 'play none none none',
    },
    opacity: 0,
    x: 40,
    duration: 0.4,
    ease: 'power2.out',
  });
});
