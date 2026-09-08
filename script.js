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

// ================= ADMISSION ENQUIRY FORM =================

document.addEventListener("DOMContentLoaded", function () {

  const forms = document.querySelectorAll("#admissionEnquiryForm");

  forms.forEach(function (form) {

    form.addEventListener("submit", function (e) {

      e.preventDefault();

      const submitButton = form.querySelector(".enquiry-submit");

      submitButton.disabled = true;
      submitButton.innerText = "⏳ Submitting...";

      const formData = {
        parentName: document.getElementById("parentName").value,
        studentName: document.getElementById("studentName").value,
        mobile: document.getElementById("mobile").value,
        admissionClass: document.getElementById("class").value,
        location: document.getElementById("location").value,
        message: document.getElementById("message").value
      };

      fetch("https://script.google.com/macros/s/AKfycbyvG3s07748UGrkoSWc5hYdDGXd1cX4Q4Y7uxmbM67PjldemibaNG3yR2H3VJ8lkivM/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(formData)
      })
      .then(function () {

        alert("✅ आपकी Admission Enquiry सफलतापूर्वक भेज दी गई है। विद्यालय की टीम जल्द आपसे संपर्क करेगी।");

        form.reset();

        submitButton.disabled = false;
        submitButton.innerText = "📩 Submit Admission Enquiry";

      })
      .catch(function (error) {

        alert("❌ Enquiry भेजने में समस्या हुई। कृपया दोबारा प्रयास करें।");

        submitButton.disabled = false;
        submitButton.innerText = "📩 Submit Admission Enquiry";

        console.error(error);
      });

    });

  });

});
