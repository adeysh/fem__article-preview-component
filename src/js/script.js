const shareBtn = document.getElementById("shareBtn");
const socialContainer = document.getElementById("socialContainer");

const toggleClass = () => {
    shareBtn.classList.toggle("product-card__share-button--active");
    socialContainer.classList.toggle("product-card__social--active");
}

shareBtn.addEventListener("click", () => {
    toggleClass();
});

document.addEventListener("keydown", (event) => {
    if (socialContainer.classList.contains("product-card__social--active") && event.code === "Escape") {
        socialContainer.classList.remove("product-card__social--active");
    }
})