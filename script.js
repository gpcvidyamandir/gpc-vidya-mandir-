/* =========================================
   SCHOOL WEBSITE - EASY EDIT SETTINGS
   ========================================= */

const SCHOOL = {

  name: "घनश्याम प्रसाद चौकरया विद्या मंदिर",
  location: "सरखड़ी",

  founder: "श्री रामकृष्ण चौकरया जी",

  phone: "+91 70245 92100",

  whatsapp: "917024592100",

  blog: "http://gpcvidhyamandir.blogspot.com/",

  facebook:
    "https://www.facebook.com/profile.php?id=61590847181923",

  instagram:
    "https://www.instagram.com/g.p.c_vidhya_mandir_sarkhadi?stkn=NDV6NWd6Y3VtcXJu",

  /* ===== HOME PAGE ADVERTISEMENT ===== */

  noticeTitle: "ADMISSION OPEN 2026–27",

  noticeText:
    "अपने बच्चे के उज्ज्वल भविष्य की मजबूत नींव के लिए आज ही विद्यालय से संपर्क करें।",

  noticeButton:
    "Admission Details →",

  noticeLink:
    "admissions.html"

};


/* =========================================
   AUTOMATIC SETTINGS
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {


  /* SCHOOL NAME */

  document.querySelectorAll("[data-school-name]")
    .forEach(el => {

      el.textContent = SCHOOL.name;

    });


  /* LOCATION */

  document.querySelectorAll("[data-school-location]")
    .forEach(el => {

      el.textContent = SCHOOL.location;

    });


  /* FOUNDER */

  document.querySelectorAll("[data-founder]")
    .forEach(el => {

      el.textContent = SCHOOL.founder;

    });


  /* PHONE */

  document.querySelectorAll("[data-phone]")
    .forEach(el => {

      el.textContent = SCHOOL.phone;

      el.href =
        "tel:" +
        SCHOOL.phone.replace(/\s/g, "");

    });


  /* WHATSAPP */

  document.querySelectorAll("[data-whatsapp]")
    .forEach(el => {

      el.href =
        "https://wa.me/" +
        SCHOOL.whatsapp;

    });


  /* FACEBOOK */

  document.querySelectorAll("[data-facebook]")
    .forEach(el => {

      el.href = SCHOOL.facebook;

    });


  /* INSTAGRAM */

  document.querySelectorAll("[data-instagram]")
    .forEach(el => {

      el.href = SCHOOL.instagram;

    });


  /* BLOG */

  document.querySelectorAll("[data-blog]")
    .forEach(el => {

      el.href = SCHOOL.blog;

    });


  /* TAGLINE */

  document.querySelectorAll("[data-tagline]")
    .forEach(el => {

      el.textContent =
        "ज्ञान से विकास, संस्कार से उत्कर्ष";

    });


  /* YEAR */

  document.querySelectorAll("[data-year]")
    .forEach(el => {

      el.textContent =
        new Date().getFullYear();

    });


  /* =====================================
     ADVERTISEMENT BANNER
     ===================================== */

  const noticeTitle =
    document.querySelector("[data-notice-title]");

  const noticeText =
    document.querySelector("[data-notice-text]");

  const noticeButton =
    document.querySelector("[data-notice-button]");


  if (noticeTitle) {

    noticeTitle.textContent =
      SCHOOL.noticeTitle;

  }


  if (noticeText) {

    noticeText.textContent =
      SCHOOL.noticeText;

  }


  if (noticeButton) {

    noticeButton.textContent =
      SCHOOL.noticeButton;

    noticeButton.href =
      SCHOOL.noticeLink;

  }


  /* =====================================
     CLOSE BANNER
     ===================================== */

  const closeNotice =
    document.querySelector("[data-close-notice]");

  const noticeBanner =
    document.querySelector("[data-notice-banner]");


  if (closeNotice && noticeBanner) {

    closeNotice.addEventListener("click", function () {

      noticeBanner.style.display = "none";

    });

  }

});
