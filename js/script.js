/* =====================================
   MOBILE MENU
===================================== */

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");


if (menuToggle) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("active");

    });

}



/* =====================================
   CLOSE MOBILE MENU AFTER CLICK
===================================== */

document
    .querySelectorAll("#navMenu a")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");

        });

    });



/* =====================================
   NUMBER COUNTER ANIMATION
===================================== */

const counters =
    document.querySelectorAll(".counter");


const counterObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    const counter =
                        entry.target;

                    const target =
                        Number(counter.dataset.target);

                    let current = 0;


                    function updateCounter() {

                        if (current < target) {

                            current++;

                            counter.textContent =
                                current;

                            setTimeout(
                                updateCounter,
                                120
                            );

                        }

                    }


                    updateCounter();


                    counterObserver.unobserve(
                        counter
                    );

                }

            });

        },

        {
            threshold: 0.5
        }

    );



counters.forEach(function (counter) {

    counterObserver.observe(counter);

});



/* =====================================
   SCROLL REVEAL ANIMATION
===================================== */

const revealElements =
    document.querySelectorAll(
        ".section, .project-card, .info-card"
    );


const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.1
        }

    );



revealElements.forEach(function (element) {

    element.classList.add("reveal");

    revealObserver.observe(element);

});
