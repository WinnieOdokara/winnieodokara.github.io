/* Web validation means checking a webpage's source code against the official technical standards set by the World Wide Web Consortium (W3C). Validation ensures predictability, performance, and accessibility accross different browsers and devices. */

/* Append current page URL to W3C HTML validator query string */
document.getElementById("validation-link-html").setAttribute(
    "href",
    "https://validator.w3.org/check?uri=" + location.href
);

document.getElementById("validation-link-css").setAttribute(
    "href",
    "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href
);

/* Dynamically update footer copyright year to avoid manual updates */
document.getElementById("current-year").textContent = new Date().getFullYear();