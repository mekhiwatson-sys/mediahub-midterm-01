// LTR / RTL direction toggle
const directionButton = document.querySelector("#direction-toggle");

directionButton.addEventListener("click", () => {
    const html = document.documentElement;
    const isLTR = html.getAttribute("dir") === "ltr";

    if (isLTR) {
        html.setAttribute("dir", "rtl");
        directionButton.textContent = "LTR";
        directionButton.setAttribute(
            "aria-label",
            "Switch to left-to-right layout"
        );
    } else {
        html.setAttribute("dir", "ltr");
        directionButton.textContent = "RTL";
        directionButton.setAttribute(
            "aria-label",
            "Switch to right-to-left layout"
        );
    }
});


// Filter form
const filterForm = document.querySelector(".filter-form");

filterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const keyword = document
        .querySelector("#keyword")
        .value
        .trim()
        .toLowerCase();

    const category = document.querySelector("#category").value;

    const cards = document.querySelectorAll(".article-card");

    cards.forEach((card) => {
        const cardText = card.textContent.toLowerCase();
        const cardCategory = card
            .querySelector(".card-category")
            .textContent
            .toLowerCase();

        const matchesKeyword =
            keyword === "" || cardText.includes(keyword);

        const matchesCategory =
            category === "all" ||
            cardCategory.includes(category);

        card.hidden = !(matchesKeyword && matchesCategory);
    });
});