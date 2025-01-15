function openSection(section) {
    console.log(section.querySelector(".demo-box").textContent);

    const sections = document.querySelectorAll('.section');
    sections.forEach(s => {
        if (s != section) {
            s.classList.add('minimizar');
        }
    });

    if (!section.classList.contains('is-expanded')) {
        section.classList.add('is-expanded');
    }
}
