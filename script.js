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

  tagline: "ज्ञान से विकास, संस्कार से उत्कर्ष"
};


/* =========================================
   AUTOMATIC WEBSITE SETTINGS
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

  // School name
  document.querySelectorAll("[data-school-name]")
    .forEach(el => el.textContent = SCHOOL.name);

  // Location
  document.querySelectorAll("[data-school-location]")
    .forEach(el => el.textContent = SCHOOL.location);

  // Founder
  document.querySelectorAll("[data-founder]")
    .forEach(el => el.textContent = SCHOOL.founder);

  // Phone
  document.querySelectorAll("[data-phone]")
    .forEach(el => {
      el.textContent = SCHOOL.phone;
      el.href = "tel:" + SCHOOL.phone.replace(/\s/g, "");
    });

  // WhatsApp
  document.querySelectorAll("[data-whatsapp]")
    .forEach(el => {
      el.href = "https://wa.me/" + SCHOOL.whatsapp;
    });

  // Blog
  document.querySelectorAll("[data-blog]")
    .forEach(el => {
      el.href = SCHOOL.blog;
    });

  // Tagline
  document.querySelectorAll("[data-tagline]")
    .forEach(el => el.textContent = SCHOOL.tagline);

  // Current year
  document.querySelectorAll("[data-year]")
    .forEach(el => el.textContent = new Date().getFullYear());

});
