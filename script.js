(function () {
  // Loading Screen
  window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("loading-screen").classList.add("hidden");
    }, 800);
  });

  // Dark Mode
  const darkToggle = document.getElementById("darkToggle");
  const html = document.documentElement;
  darkToggle.addEventListener("click", () => {
    const current = html.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    darkToggle.textContent = next === "dark" ? "☀️" : "🌓";
    localStorage.setItem("theme", next);
  });
  const savedTheme = localStorage.getItem("theme") || "light";
  html.setAttribute("data-theme", savedTheme);
  darkToggle.textContent = savedTheme === "dark" ? "☀️" : "🌓";

  // Language Toggle
  const langToggle = document.getElementById("langToggle");
  let currentLang = "hi";
  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "hi" ? "en" : "hi";
    document.body.className = currentLang === "hi" ? "lang-hi" : "lang-en";
    langToggle.textContent =
      currentLang === "hi" ? "EN | हिन्दी" : "हिन्दी | EN";
    updateLangContent();
    localStorage.setItem("lang", currentLang);
  });
  const savedLang = localStorage.getItem("lang") || "hi";
  currentLang = savedLang;
  document.body.className = currentLang === "hi" ? "lang-hi" : "lang-en";
  langToggle.textContent = currentLang === "hi" ? "EN | हिन्दी" : "हिन्दी | EN";

  function updateLangContent() {
    document.querySelectorAll("[data-lang-hi][data-lang-en]").forEach((el) => {
      const txt =
        currentLang === "hi"
          ? el.getAttribute("data-lang-hi")
          : el.getAttribute("data-lang-en");
      if (txt && !el.querySelector("span") && el.childNodes.length <= 1) {
        el.textContent = txt;
      }
    });
  }
  updateLangContent();

  // Mobile Menu
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");
  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });

  // Scroll Progress
  const scrollProgress = document.getElementById("scroll-progress");
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = progress + "%";
  });

  // Navbar scroll effect
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });

  // Back to Top
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("visible", window.scrollY > 600);
  });
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Active nav link
  const sections = document.querySelectorAll("section[id]");
  const navAnchors = navLinks.querySelectorAll("a");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const top = section.offsetTop - 100;
      if (window.scrollY >= top) current = section.getAttribute("id");
    });
    navAnchors.forEach((a) => {
      a.classList.toggle("active", a.getAttribute("href") === "#" + current);
    });
  });

  // Counter Animation
  const statNumbers = document.querySelectorAll(".stat-number[data-target]");
  const observerOptions = { threshold: 0.5 };
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-target"));
        const duration = 2000;
        const startTime = performance.now();
        const startVal = 0;

        function updateCounter(timestamp) {
          const elapsed = timestamp - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(startVal + (target - startVal) * eased);
          el.textContent = current + (target === 100 ? "" : "");
          if (progress < 1) requestAnimationFrame(updateCounter);
          else el.textContent = target + (target === 100 ? "%" : "");
        }
        requestAnimationFrame(updateCounter);
        counterObserver.unobserve(el);
      }
    });
  }, observerOptions);
  statNumbers.forEach((el) => counterObserver.observe(el));

  // Products
  const products = [
    {
      id: 1,
      name: "SSP (Single Super Phosphate)",
      desc: "फॉस्फेट युक्त उर्वरक जो जड़ों के विकास को बढ़ावा देता है।",
      descEn: "Phosphate-rich fertilizer that promotes root development.",
      cat: "ssp",
      benefits: ["16% P2O5", "Calcium", "Sulfur"],
      icon: "🧪",
    },
    {
      id: 2,
      name: "Zincated SSP",
      desc: "जिंक युक्त SSP जो फसलों में जिंक की कमी को दूर करता है।",
      descEn: "Zinc-enriched SSP that addresses zinc deficiency in crops.",
      cat: "ssp",
      benefits: ["Zinc", "Phosphate", "Calcium"],
      icon: "🔬",
    },
    {
      id: 3,
      name: "Boronated SSP",
      desc: "बोरॉन युक्त SSP फूल और फल विकास के लिए उत्तम।",
      descEn: "Boron-enriched SSP excellent for flower and fruit development.",
      cat: "ssp",
      benefits: ["Boron", "Phosphate", "Calcium"],
      icon: "🌼",
    },
    {
      id: 4,
      name: "Zinc + Boron SSP",
      desc: "जिंक और बोरॉन का संयोजन - सम्पूर्ण पोषण।",
      descEn: "Combination of Zinc and Boron - complete nutrition.",
      cat: "ssp",
      benefits: ["Zinc", "Boron", "Calcium"],
      icon: "⭐",
    },
    {
      id: 5,
      name: "Magnesium Sulphate",
      desc: "मैग्नीशियम की पूर्ति के लिए उत्तम उत्पाद।",
      descEn: "Excellent product for magnesium supplementation.",
      cat: "micronutrients",
      benefits: ["Mg 9.6%", "Sulfur 13%", "Water Soluble"],
      icon: "💎",
    },
    {
      id: 6,
      name: "Gypsum",
      desc: "मिट्टी सुधारक और कैल्शियम का बेहतरीन स्रोत।",
      descEn: "Soil conditioner and excellent source of calcium.",
      cat: "micronutrients",
      benefits: ["Calcium", "Sulfur", "Soil Health"],
      icon: "🪨",
    },
    {
      id: 7,
      name: "Water Soluble NPK",
      desc: "पानी में घुलनशील NPK उर्वरक - ड्रिप सिंचाई के लिए आदर्श।",
      descEn: "Water-soluble NPK fertilizer - ideal for drip irrigation.",
      cat: "wsf",
      benefits: ["NPK 19-19-19", "100% Soluble", "Fast Action"],
      icon: "💧",
    },
    {
      id: 8,
      name: "Humic Acid",
      desc: "मिट्टी की उर्वरता बढ़ाने वाला जैविक उत्पाद।",
      descEn: "Organic product that enhances soil fertility.",
      cat: "organic",
      benefits: ["Humic Acid 12%", "Organic", "Soil Conditioner"],
      icon: "🌱",
    },
    {
      id: 9,
      name: "Micro Nutrient Kit",
      desc: "सभी आवश्यक सूक्ष्म पोषक तत्वों का मिश्रण।",
      descEn: "Blend of all essential micronutrients.",
      cat: "micronutrients",
      benefits: ["Zn", "Fe", "Mn", "Cu", "B"],
      icon: "🎯",
    },
    {
      id: 10,
      name: "Growth Promoter",
      desc: "फसल वृद्धि को गति देने वाला प्रभावी उत्पाद।",
      descEn: "Effective product that accelerates crop growth.",
      cat: "growth",
      benefits: ["Amino Acids", "Vitamins", "Enzymes"],
      icon: "🚀",
    },
  ];

  const productsGrid = document.getElementById("productsGrid");
  const filterBtns = document.querySelectorAll(".product-filter-btn");

  function renderProducts(filter = "all") {
    const filtered =
      filter === "all" ? products : products.filter((p) => p.cat === filter);
    productsGrid.innerHTML = filtered
      .map(
        (p) => `
                    <div class="product-card">
                        <div class="product-card-img">${p.icon}<span class="product-card-badge">${p.cat.toUpperCase()}</span></div>
                        <div class="product-card-body">
                            <h3>${p.name}</h3>
                            <p>${currentLang === "hi" ? p.desc : p.descEn}</p>
                            <div class="benefits">${p.benefits.map((b) => `<span class="benefit-tag">${b}</span>`).join("")}</div>
                            <button class="btn-details">View Details →</button>
                        </div>
                    </div>
                `,
      )
      .join("");
  }
  renderProducts();
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderProducts(btn.getAttribute("data-filter"));
    });
  });

  // Brands
  const brands = [
    "Ostwal",
    "Anndata",
    "URJA",
    "IFFCO",
    "Coromandel",
    "UPL",
    "Bayer",
    "Yara",
    "Nutrien",
  ];
  const brandTrack = document.getElementById("brandTrack");
  const brandHTML = brands
    .map((b) => `<div class="brand-logo-item">${b}</div>`)
    .join("");
  brandTrack.innerHTML = brandHTML + brandHTML; // Duplicate for seamless loop

  // Gallery (images) + Lightbox
  const galleryGrid = document.getElementById("galleryGrid");
  const lightbox = document.getElementById("lightbox");
  const lightboxContent = document.getElementById("lightboxContent");

  const galleryImages = [
    {
      file: "Dealer Shop.jpeg",
      captionHi: "Dealer Shop",
      captionEn: "Dealer Shop",
    },
    {
      file: "Farmer Visits.jpeg",
      captionHi: "Farmer Visits",
      captionEn: "Farmer Visits",
    },
    {
      file: "Farms.jpeg",
      captionHi: "Farms",
      captionEn: "Farms",
    },
    {
      file: "Fields.jpeg",
      captionHi: "Fields",
      captionEn: "Fields",
    },
    {
      file: "Founder_img.jpeg",
      captionHi: "Founder",
      captionEn: "Founder",
    },
    {
      file: "Products.jpeg",
      captionHi: "Products",
      captionEn: "Products",
    },
    {
      file: "World_Environment_Day.jpeg",
      captionHi: "World Environment Day",
      captionEn: "World Environment Day",
    },
  ];

  function toPublicUrl(fileName) {
    // index.html is at repo root, public assets are served from /public/
    return `./public/${encodeURIComponent(fileName)}`;
  }

  function renderGallery() {
    if (!galleryGrid) return;

    galleryGrid.innerHTML = galleryImages
      .map((img) => {
        const src = toPublicUrl(img.file);
        const caption = currentLang === "hi" ? img.captionHi : img.captionEn;
        // data-caption will be used by lightbox too (fallback)
        return `
          <div class="gallery-item" data-caption="${caption}" role="button" tabindex="0" aria-label="${caption}">
            <img class="gallery-thumb" src="${src}" alt="${caption}" loading="lazy" />
            <div class="gallery-caption" aria-hidden="true">${caption}</div>
          </div>
        `;
      })
      .join("");

    document.querySelectorAll(".gallery-item").forEach((item) => {
      item.addEventListener("click", () => {
        const caption = item.getAttribute("data-caption") || "";
        const imgEl = item.querySelector("img.gallery-thumb");
        const src = imgEl ? imgEl.getAttribute("src") : "";
        lightboxContent.innerHTML = `
          <img src="${src}" alt="${caption}" style="max-width:100%;border-radius:16px;box-shadow:var(--shadow-lg);display:block;margin:0 auto;" />
          <p style="margin-top:14px; font-weight:700;">${caption}</p>
          <p style="font-size:0.85rem;color:var(--text-muted);margin-top:6px;">📸 OM AGRI INPUTS Gallery</p>
        `;
        lightbox.classList.add("active");
      });

      item.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          item.click();
        }
      });
    });
  }

  // Initial render
  renderGallery();

  // Re-render gallery when language toggles (storage is used in same tab only sometimes)
  // So we also re-render right after language toggle click.
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      // renderGallery uses currentLang which is updated in langToggle handler above
      renderGallery();
    });
  }


  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.classList.remove("active");
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") lightbox.classList.remove("active");
  });


  // FAQ Accordion
  document.querySelectorAll(".faq-question").forEach((q) => {
    q.addEventListener("click", () => {
      const item = q.parentElement;
      document.querySelectorAll(".faq-item").forEach((fi) => {
        if (fi !== item) fi.classList.remove("open");
      });
      item.classList.toggle("open");
    });
  });

  // Contact Form -> submit to Formspree
  // Do not block default submit, so Formspree receives the data.
  document
    .getElementById("contactForm")
    .addEventListener("submit", function () {
      const msg =
        currentLang === "hi" ? "भेज रहे हैं..." : "Sending...";
      const btn = this.querySelector("button[type='submit']");
      if (btn && !btn.disabled) {
        btn.disabled = true;
        btn.innerHTML = `⏳ ${msg}`;
      }
    });

  // Hero Particles
  const particlesContainer = document.getElementById("heroParticles");
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div");
    particle.classList.add("hero-particle");
    const size = Math.random() * 30 + 10;
    particle.style.width = size + "px";
    particle.style.height = size + "px";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.background =
      Math.random() > 0.5 ? "var(--green-light)" : "var(--gold-accent)";
    particle.style.animationDelay = Math.random() * 8 + "s";
    particle.style.animationDuration = Math.random() * 8 + 8 + "s";
    particlesContainer.appendChild(particle);
  }

  // Intersection Observer for fade-up animations
  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
  );

  document
    .querySelectorAll(
      ".premium-card, .product-card, .testimonial-card, .stat-card, .gallery-item, .timeline-step",
    )
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      fadeObserver.observe(el);
    });

  // Initial trigger for visible elements
  setTimeout(() => {
    document
      .querySelectorAll(
        ".premium-card, .product-card, .testimonial-card, .stat-card, .gallery-item, .timeline-step",
      )
      .forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      });
  }, 1000);

  console.log("🌾 OM AGRI INPUTS - Premium Agricultural Website Ready");
  console.log("👨‍🌾 Owner: Paresh Lathiya | Chital, Amreli, Gujarat");
  console.log("📞 Contact: 9664972981 | 9426538537");
})();
