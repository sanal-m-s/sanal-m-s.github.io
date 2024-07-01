function myMenuFunction() {
    var menuBth = document.getElementById("myNavMenu");

    if (menuBth.className === "nav-menu") {
        menuBth.className += "responsive";
    } else {
        menuBth.className = "nav-menu";
    }
}



// Dark mode

const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
})

// type effect

var typingEffect = new Typed(".typedText", {
    strings: ["UI UX Designer", "Coder", "Developer"],

    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,

})

// scroll animation

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
})

sr.reveal(".featured-name", { delay: 100 })
sr.reveal(".text-info", { delay: 200 })
sr.reveal(".text-btn", { delay: 200 })
sr.reveal(".social_icons", { delay: 200 })
sr.reveal(".featured-image", { delay: 320 })

sr.reveal(".project-box", { interval: 200 })

sr.reveal(".top-header", {})

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})

srLeft.reveal(".about-info", { delay: 100 })
srLeft.reveal(".contact-info", { delay: 100 })

const srRight = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})

srRight.reveal(".skill", { delay: 100 })
srRight.reveal(".skill-box", { delay: 100 })

// active link

const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
    const scrolly = window.scrollY;
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");
        if (scrolly > sectionTop && scrolly <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav-menu a[href=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav-menu a[href=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
}

window.addEventListener("scrollActive")