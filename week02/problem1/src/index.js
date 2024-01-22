const englishCode = "en-US";
const spanishCode = "es-ES";
const iranianCode = "fa-IR";
// Function for change Language
function getAboutUsLink(language) {
  if (language === englishCode) return "/about-us";
  else if (language === spanishCode) return "/acerca-de";
  else if (language === iranianCode) return "/درباره-ما";
}

module.exports = getAboutUsLink;
