document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".slider-menu-buttom");
    const sliders = [
        document.getElementById("slider1"),
        document.getElementById("slider2"),
        document.getElementById("slider3")
    ];

    function showSlider(index) { 
        sliders.forEach((slider, i) => {
            slider.style.display = i === index ? "block" : "none";
        });

        buttons.forEach((button, i) => {
            button.classList.toggle("selected", i === index);
        });
    }

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => showSlider(index));
    });

    showSlider(2); 
});
