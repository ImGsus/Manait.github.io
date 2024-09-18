document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            if (link.getAttribute('href') && link.getAttribute('href').includes('.html')) {
                e.preventDefault();
                
                // Apply fade-out to the body
                document.body.classList.add('hidden');
                
                // Apply fade-out to containers
                const containers = document.querySelectorAll('.landing-container, .about-container');
                containers.forEach(container => {
                    container.classList.add('hidden');
                });
                
                // Wait for the fade-out effect to complete before navigating
                setTimeout(function () {
                    window.location.href = link.href;
                }, 2000); // Match the duration of the fade-out transition
            }
        });
    });
});

