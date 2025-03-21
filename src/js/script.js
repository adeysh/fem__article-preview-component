const shareBtn = document.getElementById("shareBtn");
const socialContainer = document.getElementById("socialContainer");

shareBtn.addEventListener("click", () => {
    shareBtn.classList.toggle("product-card__share-button--active");
    socialContainer.classList.toggle("product-card__social--active");
});