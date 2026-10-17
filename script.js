/* =========================================================
   عدّلي بياناتك هنا فقط — كل إنجاز عبارة عن عنصر واحد في المصفوفة.
   images: مصفوفة بأسماء كل الصور بتاعة الإنجاز ده (تقدري تحطي أي عدد)
   title: عنوان الإنجاز
   desc: وصف مختصر للإنجاز
   ========================================================= */
const achievements = [
  {
    images: ["assetsimagesachievement-1-1.jpeg", ],
    title: "لقاء طلابي مع محافظ كفر الشيخ",
    desc: "شاركت في تقديم لقاء طلابي جمع اتحاد طلاب مدارس محافظة كفر الشيخ بالسيد اللواء إبراهيم عبد القادر مكي، محافظ كفر الشيخ، في تجربة مميزة أتاحت لي إبراز مهارات التقديم والحوار، والمشاركة في لقاء يعكس صوت الطلاب وطموحاتهم، ويعزز جسور التواصل بين الطلاب وقيادات المحافظة."
  },
  {
    images: ["abc.jpeg"],
    title: "عضو مجلس إتحاد طلاب مدارس محافظه كفر الشيخ 2025/2026",
  
  },
  {
    images: ["def.jpeg"],
    title: "حاصلة علي الحزام الاسود في الكاراتيه ومدربة معتمدة من الاتحاد المصري للكاراتيه",
   
  },
  {
    images: ["abc (1).jpeg", "abc (2).jpeg", ],
    title: "حاصلة علي شهادة معتمدة من مؤسسة scholar X ",
    desc: "وتم اختياري ضمن افضل ثلاثة مرشحين للمنحة التعليمية تقديرا للمشاركة والتميز ضمن فعاليات المؤسسة"
  },
  {
    images: ["r (1).jpg", "r (2).jpg", "r (3).jpg"],
    title: "🎓 شهادات معتمدة من مؤسسة إدراك",
    desc: "حصلت على ما يقارب 5 شهادات إتمام معتمدة من منصة إدراك، إحدى أبرز منصات التعليم الإلكتروني العربية المفتوحة، من خلال المشاركة في دورات تدريبية متنوعة ساهمت في تطوير مهاراتي وتوسيع معارفي، والتعلم وفق محتوى تدريبي مقدم من جهات وخبراء متخصصين."
  },
  {
    images: ["b.jpeg",],
    title: "🥈 المركز الثاني في مسابقة الطالب المثالي – 2026",
    desc: "حققت المركز الثاني في مسابقة الطالب المثالي على مستوى إدارة مطوبس التعليمية لعام 2026، في إنجاز يعكس التميز في الجوانب الشخصية والثقافية والأنشطة الطلابية، والقدرة على تحمل المسؤولية والمشاركة الفعّالة في الحياة المدرسية والمجتمعية."
  },
  {
    images: ["g (1).jpeg", "g (2).jpeg",],
    title: "عضو بحزب مستقبل وطن",
    desc: "أشارك كـ عضو بحزب مستقبل وطن، في إطار الاهتمام بالمشاركة المجتمعية والأنشطة الشبابية، والمساهمة في الفعاليات والمبادرات التي تستهدف خدمة المجتمع وتنمية الوعي وروح المسؤولية لدى الشباب"
  },
  {
    images: ["o.jpeg",],
    title: "أمين مساعد اتحاد طلاب مدارس إدارة مطوبس التعليمية",
    desc: "توليت منصب أمين مساعد اتحاد طلاب مدارس إدارة مطوبس التعليمية، وأسهمت في تمثيل الطلاب والمشاركة في تنظيم الأنشطة والفعاليات، والعمل على تعزيز روح التعاون والمشاركة والقيادة بين طلاب الإدارة."
  },
  {
    images: ["p.jpeg",],
    title: "أمين اتحاد طلاب مدرسة فتح الله بركات الإعدادية بنات – 2025/2026",
    desc: "توليت منصب أمين اتحاد طلاب مدرسة فتح الله بركات الإعدادية بنات للعام الدراسي 2025/2026، ممثلًا لزملائي وصوتًا لهم، والمساهمة في تنظيم الأنشطة والفعاليات الطلابية وتعزيز روح المشاركة والقيادة داخل المدرسة."
  },
  {
    images: ["z (1).jpeg", "z (2).jpeg"],
    title: "نائب رئيس غرفة عمليات الثانوية العامة – إدارة مطوبس التعليمية",
    desc: "شاركت في غرفة عمليات امتحانات الثانوية العامة بإدارة مطوبس التعليمية بصفتي نائب رئيس غرفة العمليات، في تجربة مميزة عكست روح المسؤولية والقدرة على العمل ضمن فريق، والمساهمة في متابعة سير أعمال الامتحانات وتنظيمها بكفاءة."
  },
  {
    images: ["h.jpeg"],
    title: "تكريم شخصي من مدير إدارة مطوبس التعليمية",
    desc: "حصلت على تكريم شخصي من الدكتور عبد المعبود داوود، مدير إدارة مطوبس التعليمية، تقديرًا للجهود المبذولة والتميز في المشاركة الفعّالة بالأنشطة والفعاليات الطلابية، ودعمًا للاستمرار في تقديم نماذج مشرفة ومتميزة."
  },
  {
    images: ["m (1).jpeg", "m (2).jpeg"],
    title: "📚 المشاركة في الدورة السابعة من تحدي القراءة العربي",
    desc: "شاركت في الدورة السابعة من مبادرة تحدي القراءة العربي، إحدى مبادرات مؤسسة مبادرات محمد بن راشد آل مكتوم العالمية، في تجربة ثقافية مميزة أسهمت في توسيع مداركي، وتعزيز شغفي بالقراءة والمعرفة، وتنمية قدرتي على التعبير والتحليل وبناء الأفكار."
  },
  {
    images: ["n.jpeg",],
    title: "تكريم شخصي من الدكتورة فريدة عبده",
    desc: "حصلت على تكريم شخصي من الدكتورة فريدة عبده، رئيس مجلس أمناء الإدارة التعليمية، تقديرًا للجهود والمشاركة الفعّالة والتميز في الأنشطة والفعاليات الطلابية."
  },
  {
    images: ["q.jpeg",],
    title: "مركز أول في مسابقة أعياد الطفولة",
    desc: "حققت المركز الأول على مستوى محافظة كفر الشيخ في مسابقة أعياد الطفولة، في مجالي الإلقاء والتمثيل، في إنجاز يعكس القدرة على الأداء والتعبير والحضور المميز أمام الجمهور."
  },
  {
    images: ["v (1).jpeg", "v (2).jpeg", "v (3).jpeg", "v (4).jpeg"],
    title: "🥇 ذهبية الجمهورية في الكاراتيه – 2025",
    desc: "حققت المركز الأول على مستوى الجمهورية والميدالية الذهبية في بطولة الجمهورية للكاراتيه لعام 2025، في إنجاز رياضي مميز يعكس سنوات من التدريب والمثابرة، وتتويجًا للجهد المستمر والطموح نحو تحقيق مراكز متقدمة في البطولات."
  },
  {
    images: ["y (1).jpeg", "y (2).jpeg",],
    title: "المركز الثالث والميدالية البرونزية – بطولة الجمهورية للكاراتيه 2024",
    desc: "حصلت على المركز الثالث والميدالية البرونزية في بطولة الجمهورية للكاراتيه لعام 2024، بعد منافسة قوية على مستوى الجمهورية، في إنجاز يعكس الاستمرار في التدريب والسعي نحو التميز الرياضي."
  },
  {
    images: ["l.jpeg",],
    title: "مدربه وممثله عن اللجنه الدينيه والثقافيه في تدريب إعداد قاده مدارس الجمهوريه - YIF بمحافظة كفر الشيخ",
    desc: "شاركتُ كمدرّبة وممثلة عن اللجنة الدينية والثقافية في تدريب إعداد قادة مدارس الجمهورية ضمن برنامج YLF بمحافظة كفر الشيخ， إدارة فوه التعليمية، حيث ساهمت في تدريب الطلاب وتنمية مهاراتهم القيادية والثقافية. ويُعد YLF من أبرز البرامج الداعمة للاتحادات الطلابية وتمكين الشباب， ويهدف إلى إعداد قيادات طلابية واعية وقادرة على تحمل المسؤولية وصناعة المبادرات， بدعم من عدد من الجهات والمؤسسات الوطنية والاتحاد الأوروبي."
  },  {
    images: ["1 (1).jpeg","1 (2).jpeg",],
    title: "أمين اتحاد طلاب مدرسة فتح الله بركات الإعدادية بنات – 2026/2027",
    desc: "توليت منصب أمين اتحاد طلاب مدرسة فتح الله بركات الإعدادية بنات للعام الدراسي 2026/2027، ممثلًا لزملائي وصوتًا لهم، والمساهمة في تنظيم الأنشطة والفعاليات الطلابية وتعزيز روح المشاركة والقيادة داخل المدرسة."
  },
   {
    images: ["6 (2).jpeg","6 (1).jpeg",],
    title: "أمين اتحاد طلاب ادارة مطوبس التعليمية– 2026/2027",
    desc: "توليت منصب أمين اتحاد طلاب ادارة مطوبس التعليمية للعام الدراسي 2026/2027، ممثلًا لزملائي وصوتًا لهم، والمساهمة في تنظيم الأنشطة والفعاليات الطلابية وتعزيز روح المشاركة والقيادة داخل الإدارة التعليمية."
  },
   
];

/* شكل شارة النجمة فوق كل كارت */
const starIcon = `<svg viewBox="0 0 24 24"><path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77l-6.18 3.23L7 14.14 2 9.27l7.1-1.01L12 2z"/></svg>`;
const arrowIcon = `<svg viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6"/></svg>`;

function renderAchievements(){
  const grid = document.getElementById("achvGrid");

  grid.innerHTML = achievements.map((item, cardIndex) => {
    const slides = item.images.map((src, i) => `
      <div class="achv-slide" data-index="${i}">
        <img src="${src}" alt="${item.title} - صورة ${i + 1}"
             onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="achv-placeholder" style="display:none;">
          ضيفي صورة هنا<br><span style="font-weight:400; font-size:.75rem; direction:ltr; display:block; margin-top:4px;">${src}</span>
        </div>
      </div>
    `).join("");

    const dots = item.images.map((_, i) => `
      <button class="carousel-dot ${i === 0 ? "active" : ""}" data-goto="${i}" aria-label="صورة رقم ${i + 1}"></button>
    `).join("");

    const showArrows = item.images.length > 1;

    return `
    <article class="achv-card" data-card="${cardIndex}">
      <span class="achv-badge">${starIcon}</span>
      <div class="achv-image">
        <div class="achv-track" style="transform: translateX(0%);">
          ${slides}
        </div>
        ${showArrows ? `
          <button class="carousel-btn carousel-prev" aria-label="الصورة السابقة">${arrowIcon}</button>
          <button class="carousel-btn carousel-next" aria-label="الصورة التالية">${arrowIcon}</button>
          <div class="carousel-dots">${dots}</div>
        ` : ""}
      </div>
      <div class="achv-body">
        <h3 class="achv-title">${item.title}</h3>
        ${item.desc ? `<p class="achv-desc">${item.desc}</p>` : ""}
      </div>
    </article>
  `;
  }).join("");

  revealOnScroll();
  setupCarousels();
}

/* تنقل الصور جوه كل كارت */
function setupCarousels(){
  document.querySelectorAll(".achv-card").forEach((card) => {
    const track = card.querySelector(".achv-track");
    const slides = card.querySelectorAll(".achv-slide");
    const dots = card.querySelectorAll(".carousel-dot");
    const prevBtn = card.querySelector(".carousel-prev");
    const nextBtn = card.querySelector(".carousel-next");
    let current = 0;

    function goTo(index){
      current = (index + slides.length) % slides.length;
      track.style.transform = `translateX(${current * 100}%)`;
      dots.forEach((dot, i) => dot.classList.toggle("active", i === current));
    }

    /* الموقع RTL، فبصريًا السهم اللي بيودّي "التالي" هو اللي على الشمال */
    if (prevBtn) prevBtn.addEventListener("click", () => goTo(current + 1));
    if (nextBtn) nextBtn.addEventListener("click", () => goTo(current - 1));
    dots.forEach((dot) => {
      dot.addEventListener("click", () => goTo(Number(dot.dataset.goto)));
    });
  });
}

/* ظهور تدريجي للكروت وقت السكرول */
function revealOnScroll(){
  const cards = document.querySelectorAll(".achv-card");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting){
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  cards.forEach((card) => observer.observe(card));
}

/* قائمة الموبايل */
function setupNavToggle(){
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  toggle.addEventListener("click", () => {
    links.classList.toggle("open");
  });
  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => links.classList.remove("open"));
  });
}

/* زرار الرجوع لفوق - بيظهر بس بعد ما تنزلي تحت شوية */
function setupBackToTop(){
  const btn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 500);
  });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderAchievements();
  setupNavToggle();
  setupBackToTop();
});
