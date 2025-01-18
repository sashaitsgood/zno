// Burger
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
    
})

// Modal
!function(e) {
    "function" != typeof e.matches && (e.matches = e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || function(e) {
        for (var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), n = 0; o[n] && o[n] !== t; ++n);
        return Boolean(o[n])
    }), 
    "function" != typeof e.closest && (e.closest = function(e) {
        for (var t = this; t && 1 === t.nodeType;) {
            if (t.matches(e)) return t;
            t = t.parentNode
        }
        return null
    })
}(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function() {

    var modalForms = document.querySelectorAll('.js-open-modal'),
        overlay    = document.querySelector('.js-overlay-modal'),
        about      = document.querySelector('.title-about-curses');

    modalForms.forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.preventDefault();

            var modalId = this.getAttribute('data-modal'),
                modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

            modalElem.classList.add('active');
            overlay.classList.add('active');
            about.classList.add('about');
        });
    });

    overlay.addEventListener('click', function() {
        var activeModal = document.querySelector('.modal.active');
        if (activeModal) {
            activeModal.classList.remove('active');
        }
        this.classList.remove('active');
        about.classList.remove('about');
    });

    document.body.addEventListener('keyup', function(e) {
        if (e.key === "Escape") {
            var activeModal = document.querySelector('.modal.active');
            if (activeModal) {
                activeModal.classList.remove('active');
            }
            overlay.classList.remove('active');
            about.classList.remove('about');
        }
    });
});

document.getElementById('form').reset()


// Scroll
function toggleScrollToTopButton() {
    const button = document.getElementById('scrollToTopBtn');
    if (window.scrollY > 200) { 
        button.classList.add('visible');
    } else {
        button.classList.remove('visible');
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', toggleScrollToTopButton);
document.getElementById('scrollToTopBtn').addEventListener('click', scrollToTop);
