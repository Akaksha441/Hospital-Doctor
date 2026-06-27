// ===============================
// Scroll To Top Button
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ===============================
// Navbar Shadow
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(227, 18, 18, 0.2)";
    } else {
        header.style.boxShadow = "0 2px 15px rgba(23, 71, 149, 0.1)";
    }

});

// ===============================
// Scroll Animation
// ===============================

const cards = document.querySelectorAll(".card, .doctor, .stat, .gallery-grid img");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});

cards.forEach((item) => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "0.8s";

    observer.observe(item);

});

// ===============================
// Appointment Form Validation
// ===============================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = form.querySelector("input[type='text']").value.trim();

    const email = form.querySelector("input[type='email']").value.trim();

    const phone = form.querySelector("input[type='tel']").value.trim();

    if (name === "" || email === "" || phone === "") {

        alert("Please fill all required fields.");

        return;

    }

    alert("✅ Appointment Booked Successfully!");

    form.reset();

});

// ===============================
// Animated Counter
// ===============================

const counters = document.querySelectorAll(".stat h2");

counters.forEach(counter => {

    const text = counter.innerText;

    const number = parseInt(text);

    if (!isNaN(number)) {

        let count = 0;

        const speed = number / 80;

        const update = () => {

            count += speed;

            if (count < number) {

                counter.innerText = Math.floor(count) + "+";

                requestAnimationFrame(update);

            } else {

                counter.innerText = text;

            }

        };

        update();

    }

});

// ===============================
// Hero Button Animation
// ===============================

const heroBtn = document.querySelector(".hero-btn");

heroBtn.addEventListener("mouseover", () => {

    heroBtn.style.transform = "scale(1.08)";

});

heroBtn.addEventListener("mouseout", () => {

    heroBtn.style.transform = "scale(1)";

});

// ===============================
// Welcome Message
// ===============================

window.onload = function () {

    console.log("🏥 Welcome to CarePlus Hospital");

};
