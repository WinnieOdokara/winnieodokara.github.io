document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        const htmlValidationLink = document.getElementById("validation-link-html");
        const cssValidationLink = document.getElementById("validation-link-css");
        const currentYear = document.getElementById("current-year");

        if (htmlValidationLink) {
            htmlValidationLink.setAttribute(
                "href",
                "https://validator.w3.org/check?uri=" + location.href
            );
        }

        if (cssValidationLink) {
            cssValidationLink.setAttribute(
                "href",
                "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href
            );
        }

        if (currentYear) {
            currentYear.textContent = new Date().getFullYear();
        }
    }, 300);
});

/* Header and Footer components for sample HTML files 

    <!-- HEADER is included on all pages for consistent navigation. -->
    <div data-include="components/header.html"></div>

    < !--FOOTER is included on all pages for consistent information and links. -- >
    <div data-include="components/footer.html"></div>

    <!--Loads reusable header and footer components. -- >
    <script src="scripts/include_components.js"></script>

    <!--Loads JavaScript for validation links and automatic copyright year. -- >
    <script src="scripts/defaultscripts.js"></script>
*/