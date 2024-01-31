// Header Scroll
// Add or remove 'header-scrolled' class based on scroll position
let nav = document.querySelector(".navbar");

function toggleHeaderScrolled() {
    if (window.scrollY > 20) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}

window.addEventListener('scroll', toggleHeaderScrolled);

// Update active class for navbar items on scroll
let sections = document.querySelectorAll('section[id]');
let navBar = document.querySelectorAll(".nav-link");

function highlightMenuItem() {
    let scrollPosition = window.scrollY;

    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        let sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            let targetId = section.getAttribute('id');
            navBar.forEach(navItem => {
                navItem.classList.remove('active');
                if (navItem.getAttribute('href') === '#' + targetId) {
                    navItem.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightMenuItem);

// Smooth scroll to section when a nav item is clicked
navBar.forEach(navItem => {
    navItem.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        let targetId = this.getAttribute('href');
        let targetSection = document.querySelector(targetId);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});

function validateForm() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var isValid = true; // Flag to track overall form validity

    // Reset previous validation messages
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("messageError").innerHTML = "";

    // Check if any field is empty
    if (name === "") {
        document.getElementById("nameError").innerHTML = "Please enter your name.";
        isValid = false;
    }
    if (phone === "") {
        document.getElementById("phoneError").innerHTML = "Please enter your phone number.";
        isValid = false;
    }
    if (email === "") {
        document.getElementById("emailError").innerHTML = "Please enter your email.";
        isValid = false;
    }
    if (message === "") {
        document.getElementById("messageError").innerHTML = "Please enter your message.";
        isValid = false;
    }

    // Check if phone number is valid (optional)
    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone) && phone !== "") {
        document.getElementById("phoneError").innerHTML = "Please enter a valid phone number.";
        isValid = false;
    }

    // Check if email is valid (optional)
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) && email !== "") {
        document.getElementById("emailError").innerHTML = "Please enter a valid email address.";
        isValid = false;
    }

    // If any validation fails, return false
    if (!isValid) {
        return false;
    }

    // If all validations pass, submit the form
    document.getElementById("myForm").submit();
}
