/* ============================================
   MOONLIGHT DREAMS — SCRIPT
   ============================================ */

// ==========================================
// CONFIG — Edit only this object to customize
// ==========================================
const CONFIG = {
  babyName: "Shivathreya",
  nickName: "Ambal",
  parentsName: "Mr. Sujith & Mrs. Reshma",
  fatherName: "Mr. Sujith",
  motherName: "Mrs. Reshma",
  birthdayDate: "2026-07-19T11:00:00",
  eventDate: "19 July 2026",
  eventTime: "11:00 AM",
  venue: "SMKP SAMAJAM HALL\nCHEMPU, Vaikkam",
  heroPhoto: "hero-baby.jpeg",
  galleryImages: [
    { src: "gallery-1.jpeg", alt: "Baby photo 1" },
    { src: "gallery-2.jpeg", alt: "Baby photo 2" },
    { src: "gallery-3.jpeg", alt: "Baby photo 3" },
    { src: "gallery-4.jpeg", alt: "Baby photo 4" },
    { src: "gallery-5.jpeg", alt: "Baby photo 5" },
    { src: "gallery-6.jpeg", alt: "Baby photo 6" },
  ],
  googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d76.4!3d9.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNDInMDAuMCJOIDc2wrAyNCcwMC4wIkU!5e0!3m2!1sen!2sin",
  mapsSearchUrl: "https://www.google.com/maps/search/SMKP+SAMAJAM+HALL+CHEMPU+Vaikkam",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=SMKP+SAMAJAM+HALL+CHEMPU+Vaikkam",
  musicUrl: "bg-music.mp3",
  timeline: [
    { time: "11:00 AM", title: "Welcome & Reception" },
    { time: "11:30 AM", title: "Cake Cutting Ceremony" },
    { time: "12:00 PM", title: "Family Photos" },
    { time: "12:30 PM", title: "Lunch" },
  ],
};

// ==========================================
// DOM READY
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initPreloader();
  initSkyBackground();
  initConfetti();
  initNavbar();
  initCountdown();
  initGallery();
  initTimeline();
  initMap();
  initMusicPlayer();
  initScrollReveal();
  initBalloons();
  initFloatingHearts();
  populateContent();
});

// ==========================================
// PRELOADER
// ==========================================
function initPreloader() {
  window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("preloader").classList.add("hidden");
    }, 1500);
  });
  // Fallback
  setTimeout(() => {
    document.getElementById("preloader").classList.add("hidden");
  }, 4000);
}

// ==========================================
// SKY BACKGROUND
// ==========================================
function initSkyBackground() {
  createStars(250);
  createSparkles(40);
  createParticles(20);
  createConstellationLines(12);
  startShootingStars();
}

function createStars(count) {
  const container = document.getElementById("stars-container");
  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    const size = Math.random() * 2.5 + 0.5;
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.setProperty("--dur", (Math.random() * 3 + 2) + "s");
    star.style.setProperty("--delay", (Math.random() * 5) + "s");
    star.style.setProperty("--min-op", Math.random() * 0.3 + 0.1);
    container.appendChild(star);
  }
}

function createSparkles(count) {
  const container = document.getElementById("sparkles-container");
  for (let i = 0; i < count; i++) {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.style.left = Math.random() * 100 + "%";
    sparkle.style.top = Math.random() * 100 + "%";
    sparkle.style.setProperty("--dur", (Math.random() * 4 + 3) + "s");
    sparkle.style.setProperty("--delay", (Math.random() * 6) + "s");
    const size = Math.random() * 3 + 2;
    sparkle.style.width = size + "px";
    sparkle.style.height = size + "px";
    container.appendChild(sparkle);
  }
}

function createParticles(count) {
  const container = document.getElementById("particles-container");
  for (let i = 0; i < count; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.left = Math.random() * 100 + "%";
    particle.style.setProperty("--dur", (Math.random() * 15 + 15) + "s");
    particle.style.setProperty("--delay", (Math.random() * 20) + "s");
    particle.style.setProperty("--drift", (Math.random() * 100 - 50) + "px");
    container.appendChild(particle);
  }
}

function createConstellationLines(count) {
  const container = document.getElementById("constellation-lines");
  for (let i = 0; i < count; i++) {
    const line = document.createElement("div");
    line.classList.add("constellation-line");
    line.style.left = Math.random() * 80 + 10 + "%";
    line.style.top = Math.random() * 80 + 10 + "%";
    line.style.width = (Math.random() * 120 + 40) + "px";
    line.style.transform = `rotate(${Math.random() * 360}deg)`;
    line.style.setProperty("--delay", (Math.random() * 5) + "s");
    container.appendChild(line);
  }
}

function startShootingStars() {
  function createShootingStar() {
    const container = document.getElementById("shooting-stars");
    const star = document.createElement("div");
    star.classList.add("shooting-star");
    star.style.left = Math.random() * 60 + "%";
    star.style.top = Math.random() * 40 + "%";
    container.appendChild(star);
    setTimeout(() => star.remove(), 2000);
  }
  setInterval(createShootingStar, 4000);
  setTimeout(createShootingStar, 2000);
}

// ==========================================
// CONFETTI
// ==========================================
function initConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  const ctx = canvas.getContext("2d");
  let particles = [];
  let animating = true;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const colors = ["#D4AF37", "#F8E7B5", "#EAEAEA", "#FFD700", "#FF69B4", "#87CEEB"];

  for (let i = 0; i < 150; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      w: Math.random() * 8 + 4,
      h: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      vy: Math.random() * 3 + 2,
      vx: Math.random() * 2 - 1,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10,
      opacity: 1,
    });
  }

  let startTime = Date.now();

  function animate() {
    const elapsed = Date.now() - startTime;
    if (elapsed > 5000) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const fade = elapsed > 3500 ? 1 - (elapsed - 3500) / 1500 : 1;

    particles.forEach((p) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = fade;
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();

      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.rotSpeed;
      p.vy += 0.02;
    });

    requestAnimationFrame(animate);
  }
  animate();
}

// ==========================================
// NAVBAR
// ==========================================
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("nav-hamburger");
  const mobileNav = document.getElementById("mobile-nav");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 60);
  });

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileNav.classList.toggle("active");
    document.body.style.overflow = mobileNav.classList.contains("active") ? "hidden" : "";
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      mobileNav.classList.remove("active");
      document.body.style.overflow = "";
    });
  });
}

// ==========================================
// COUNTDOWN
// ==========================================
function initCountdown() {
  const target = new Date(CONFIG.birthdayDate).getTime();

  function update() {
    const now = Date.now();
    let diff = target - now;
    if (diff < 0) diff = 0;

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    animateValue("cd-days", days);
    animateValue("cd-hours", hours);
    animateValue("cd-minutes", minutes);
    animateValue("cd-seconds", seconds);
  }

  function animateValue(id, val) {
    const el = document.getElementById(id);
    const str = String(val).padStart(2, "0");
    if (el.textContent !== str) {
      el.style.transform = "translateY(-4px)";
      el.style.opacity = "0.5";
      setTimeout(() => {
        el.textContent = str;
        el.style.transform = "translateY(0)";
        el.style.opacity = "1";
      }, 150);
    }
  }

  update();
  setInterval(update, 1000);
}

// ==========================================
// GALLERY
// ==========================================
function initGallery() {
  const grid = document.getElementById("gallery-grid");
  const placeholderIcons = ["📸", "🌸", "⭐", "👶", "🎀", "🌙"];

  CONFIG.galleryImages.forEach((img, i) => {
    const item = document.createElement("div");
    item.classList.add("gallery-item");

    if (img.src) {
      item.innerHTML = `<img src="${img.src}" alt="${img.alt}" loading="lazy">`;
    } else {
      item.innerHTML = `
        <div class="gallery-placeholder">
          <span>${placeholderIcons[i % placeholderIcons.length]}</span>
          <span>Photo ${i + 1}</span>
        </div>`;
    }

    item.addEventListener("click", () => openLightbox(img.src || "", img.alt));
    grid.appendChild(item);
  });

  // Lightbox
  const lightbox = document.getElementById("lightbox");
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target.classList.contains("lightbox-close")) {
      lightbox.classList.remove("active");
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") lightbox.classList.remove("active");
  });
}

function openLightbox(src, alt) {
  if (!src) return;
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  img.src = src;
  img.alt = alt;
  lightbox.classList.add("active");
}

// ==========================================
// TIMELINE
// ==========================================
function initTimeline() {
  const container = document.getElementById("timeline-container");

  CONFIG.timeline.forEach((item, i) => {
    const el = document.createElement("div");
    el.classList.add("timeline-item", "scroll-reveal");
    el.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-time">${item.time}</div>
        <div class="timeline-title">${item.title}</div>
      </div>`;
    container.appendChild(el);
  });
}

// ==========================================
// MAP
// ==========================================
function initMap() {
  document.getElementById("map-iframe").src = CONFIG.googleMapsUrl;
  document.getElementById("view-location-btn").href = CONFIG.mapsSearchUrl;
  document.getElementById("get-directions-btn").href = CONFIG.directionsUrl;
}

// ==========================================
// MUSIC PLAYER
// ==========================================
function initMusicPlayer() {
  const audio = document.getElementById("bg-music");
  const btn = document.getElementById("music-toggle");

  audio.src = CONFIG.musicUrl;
  audio.volume = 0.3;

  let playing = false;
  btn.addEventListener("click", () => {
    if (playing) {
      audio.pause();
      btn.classList.remove("playing");
    } else {
      audio.play().catch(() => {});
      btn.classList.add("playing");
    }
    playing = !playing;
  });
}

// ==========================================
// SCROLL REVEAL
// ==========================================
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  function observeAll() {
    document.querySelectorAll(".scroll-reveal").forEach((el) => observer.observe(el));
  }
  observeAll();

  // Re-observe after dynamic content
  const mutObs = new MutationObserver(observeAll);
  mutObs.observe(document.body, { childList: true, subtree: true });
}

// ==========================================
// BALLOONS
// ==========================================
function initBalloons() {
  const colors = ["#D4AF37", "#FF69B4", "#87CEEB", "#EAEAEA", "#F8E7B5", "#FFD700"];

  function spawnBalloon() {
    const container = document.getElementById("balloons-container");
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.left = Math.random() * 100 + "%";
    balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
    balloon.style.setProperty("--dur", (Math.random() * 8 + 8) + "s");
    const size = Math.random() * 10 + 25;
    balloon.style.width = size + "px";
    balloon.style.height = size * 1.3 + "px";
    container.appendChild(balloon);
    setTimeout(() => balloon.remove(), 18000);
  }

  // Spawn occasionally
  setInterval(spawnBalloon, 8000);
  setTimeout(spawnBalloon, 3000);
}

// ==========================================
// FLOATING HEARTS (on baby photo click)
// ==========================================
function initFloatingHearts() {
  const trigger = document.getElementById("baby-photo-trigger");
  const container = document.getElementById("hearts-container");

  trigger.addEventListener("click", (e) => {
    for (let i = 0; i < 8; i++) {
      setTimeout(() => {
        const heart = document.createElement("div");
        heart.classList.add("floating-heart");
        heart.textContent = ["💖", "💕", "✨", "⭐", "🌟", "💛"][Math.floor(Math.random() * 6)];
        heart.style.left = e.clientX + (Math.random() * 60 - 30) + "px";
        heart.style.top = e.clientY + "px";
        heart.style.fontSize = (Math.random() * 14 + 14) + "px";
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
      }, i * 100);
    }
  });
}

// ==========================================
// POPULATE CONTENT FROM CONFIG
// ==========================================
function populateContent() {
  document.getElementById("baby-name-display").innerHTML = CONFIG.nickName
    ? `${CONFIG.babyName}<br><span class="nickname">"${CONFIG.nickName}"</span>`
    : CONFIG.babyName;
  document.getElementById("parents-display").innerHTML = `${CONFIG.fatherName}<br>&<br>${CONFIG.motherName}`;
  document.getElementById("event-date").textContent = CONFIG.eventDate;
  document.getElementById("event-time").textContent = CONFIG.eventTime;

  const venueEl = document.getElementById("event-venue");
  venueEl.innerHTML = CONFIG.venue.replace("\n", "<br>");

  // Hero photo
  const heroPhoto = document.getElementById("hero-baby-photo");
  if (CONFIG.heroPhoto) {
    heroPhoto.src = CONFIG.heroPhoto;
  } else {
    heroPhoto.style.display = "none";
  }

  // Page title
  document.title = `${CONFIG.babyName}'s First Birthday`;

  // Footer copyright
  document.getElementById("footer-copyright").textContent =
    `© ${new Date().getFullYear()} ${CONFIG.babyName}'s Birthday. All rights reserved.`;
}
