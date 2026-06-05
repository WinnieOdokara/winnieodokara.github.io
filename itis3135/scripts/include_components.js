document.addEventListener("DOMContentLoaded", function () {
    const includeElements = document.querySelectorAll("[data-include]");

    includeElements.forEach(function (element) {
        const filePath = element.getAttribute("data-include");

        fetch(filePath)
            .then(function (response) {
                if (!response.ok) {
                    throw new Error("Include file not found: " + filePath);
                }
                return response.text();
            })
            .then(function (html) {
                element.innerHTML = html;
            })
            .catch(function (error) {
                console.error(error);
            });
    });
});


/* Header and Footer components for sample HTML files 

    <!-- HEADER is included on all pages for consistent navigation. -->
    <div data-include="components/header.html"></div>

    <!-- Footer is included on all pages for consistent information and links. -->
    <div data-include="components/footer.html"></div>

    <!-- Loads reusable header and footer components. -->
    <script src="scripts/include_components.js"></script>

    <!-- Loads JavaScript for validation links and automatic copyright year. -->
    <script src="scripts/defaultscripts.js"></script>
*/