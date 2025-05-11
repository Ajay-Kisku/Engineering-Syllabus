

        // Save the state of checkboxes in localStorage
        function saveChecklistState() {
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            const checklistState = {};
    
            checkboxes.forEach(checkbox => {
                checklistState[checkbox.id] = checkbox.checked;
            });
    
            localStorage.setItem('ai-checklist-state', JSON.stringify(checklistState));
        }
    
        // Load the saved state of checkboxes from localStorage
        function loadChecklistState() {
            const savedState = JSON.parse(localStorage.getItem('ai-checklist-state'));
    
            if (savedState) {
                const checkboxes = document.querySelectorAll('input[type="checkbox"]');
                checkboxes.forEach(checkbox => {
                    if (savedState[checkbox.id] !== undefined) {
                        checkbox.checked = savedState[checkbox.id];
                    }
                });
            }
        }
    
        // Add event listeners to save the state when a checkbox is changed
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', saveChecklistState);
        });
    
        // Load the checklist state when the page is loaded
        window.onload = loadChecklistState;


//  Starts JavaScript for Smooth Scroll 

        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

        // Smooth scrolling for anchor links
        gsap.utils.toArray('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();

                gsap.to(window, {
                    scrollTo: {
                        y: anchor.getAttribute('href'),
                        offsetY: 10, // Adjust for fixed navigation
                    },
                    duration: 0.1,
                    ease: "power2.inOut",
                });
            });
        });



//  Ends JavaScript for Smooth Scroll 

        // GSAP ScrollTrigger for animations when modules are in the viewport
        gsap.utils.toArray('.module').forEach((module) => {
                    gsap.fromTo(module.querySelector('.module-name'), {
                        opacity: 0,
                        y: 50
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: module,
                            start: "top 90%", // Trigger when the top of the module is 80% from the top of the viewport
                            toggleActions: "play none none reverse", // Play animation when the module is in view, reverse when out
                        }
                    });

                    gsap.fromTo(module.querySelector('.module-content'), {
                        opacity: 0,
                        y: 50
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: module,
                            start: "top 90%",
                            toggleActions: "play none none reverse",
                        }
                    });
                });






        const toggleDiv = document.getElementById('fullscreenToggle');

        // Function to toggle fullscreen mode
        function toggleFullscreen() {
        if (!document.fullscreenElement) {
            // Enter fullscreen
            document.documentElement.requestFullscreen().then(() => {
            toggleDiv.textContent = '⤬'; // Change symbol to "exit" icon
            }).catch((err) => {
            console.error(`Error attempting to enter fullscreen: ${err}`);
            });
        } else {
            // Exit fullscreen
            document.exitFullscreen().then(() => {
            toggleDiv.textContent = '⤢'; // Change symbol to "expand" icon
            }).catch((err) => {
            console.error(`Error attempting to exit fullscreen: ${err}`);
            });
        }
        }

        // Add click event listener to the div
        toggleDiv.addEventListener('click', toggleFullscreen);


    
    content = document.querySelector(".content")
    extraInfo = document.querySelector("#extra-info")
    links = document.querySelector(".links")

    toggleNavBar.addEventListener('click', () => {

        if (main.style.flexDirection === 'row-reverse') {
            main.style.flexDirection = 'row';  // Change to row

            extraInfo.style.left = "unset";
            extraInfo.style.right = "-205px";

            content.style.paddingLeft = "35px"

            links.classList.remove('links-with-left-border');
            links.classList.add('links');

            settings.style.borderLeft = "1px solid transparent";
            settings.style.borderRight = "1px solid black";


            



        } else {


            links.classList.remove('links');
            links.classList.add('links-with-left-border');


            main.style.flexDirection = 'row-reverse';  // Change to row-reverse
            extraInfo.style.right = "0px";
            extraInfo.style.left = "-205px";

            content.style.paddingLeft = "10px"
            content.style.paddingRight = "35px"

            settings.style.borderRight = "1px solid transparent";
            settings.style.borderLeft = "1px solid black";

        }
    });
    
    //============================================================================
    



