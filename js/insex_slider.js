let slideIndex = 0;
const slides = document.querySelectorAll('.slider-item');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

document.getElementById('prevBtn').addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
});
showSlide(slideIndex);

document.addEventListener('DOMContentLoaded', () => {
    const slides1 = document.querySelectorAll('.mini_slider .slide');
    const buttons = document.querySelectorAll('.navigation button');
    let currentIndex = 0;
    const slideInterval = 3000;

    const updateSlider = (index) => {
        slides1.forEach(slide => slide.classList.remove('active'));
        slides1[index].classList.add('active');
        buttons.forEach(button => button.classList.remove('active'));
        buttons[index].classList.add('active');
    };

    updateSlider(currentIndex);

    const autoSlide = () => {
        currentIndex = (currentIndex + 1) % slides1.length;
        updateSlider(currentIndex);
    };
    let interval = setInterval(autoSlide, slideInterval);
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            clearInterval(interval);
            currentIndex = parseInt(button.dataset.slide);
            updateSlider(currentIndex);
            interval = setInterval(autoSlide, slideInterval);
        });
    });

});
document.addEventListener("DOMContentLoaded", () => {
    const allSliders = document.querySelectorAll('.custom-slider');
    const slideWidth = 400;

    allSliders.forEach(slider => {
        const slidess = slider.querySelectorAll('img');
        let index = 1;
        let interval;

        const startSlider = () => {
            slider.style.transform = `translateX(${-slideWidth * index}px)`;
            interval = setInterval(() => {
                index++;
                slider.style.transition = 'transform 0.5s ease-in-out';
                slider.style.transform = `translateX(${-slideWidth * index}px)`;
            }, 2000);
        };

        const stopSlider = () => {
            clearInterval(interval);
        };

        slider.addEventListener('transitionend', () => {
            if (index >= slidess.length - 1) {
                slider.style.transition = 'none';
                index = 1;
                slider.style.transform = `translateX(${-slideWidth * index}px)`;
            }
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    stopSlider();
                    startSlider();
                } else {
                    stopSlider();
                }
            });
        }, { threshold: 0.1 });

        observer.observe(slider.closest('.slider-section'));
    });
});

const buttons = document.querySelectorAll('.last_section0, .last_section');
const sections = document.querySelectorAll('.vv');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        sections.forEach(section => section.classList.add('d-none'));

        if (sections[index]) {
            sections[index].classList.remove('d-none');
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".last_section, .last_section0");
    const sections = document.querySelectorAll(".slider-section");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            sections.forEach(section => section.classList.remove("active"));
            const targetId = tab.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add("active");
            }
        });
    });
});
