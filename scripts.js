//configure your pet modal
let configurePetModal = document.querySelector(".configurePetModal")

document.getElementById("configurePet").addEventListener("click", () => {
    configurePetModal.style.display = "block"
})

document.querySelector(".petModalClose").addEventListener("click", () => {
    configurePetModal.style.display = "none"
})

window.addEventListener("click", (e) => {
    if (e.target == configurePetModal) {
        configurePetModal.style.display = "none"
    }
});

//game instructions modal
let instructionsModal = document.querySelector(".instructionsModal")

document.getElementById("instructions").addEventListener("click", () => {
    instructionsModal.style.display = "block"
})

document.querySelector(".instructionsModalClose").addEventListener("click", () => {
    instructionsModal.style.display = "none"
})

window.addEventListener("click", (e) => {
    if (e.target == instructionsModal) {
        instructionsModal.style.display = "none"
    }
});