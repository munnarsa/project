const carousel = document.querySelector('.carousel-wrapper');
        const items = document.querySelectorAll('.carousel-item');
        const containerHeight = document.querySelector('.carousel-container').offsetHeight;
        let currentIndex = 0;

        // Set the initial active item
        items[currentIndex].classList.add('active');

        // Add event listener for mouse scrolling
        document.addEventListener('wheel', function (event) {
            // Determine the scrolling direction
            const scrollDirection = event.deltaY > 0 ? 1 : -1;

            // Move the carousel wrapper up or down
            carousel.style.transform = `translateY(-${containerHeight * currentIndex}px)`;

            // Update the active item and previous/next items
            items[currentIndex].classList.remove('active');
            items[currentIndex].classList.add(scrollDirection === 1 ? 'previous' : 'next');
            currentIndex += scrollDirection;
            currentIndex = (currentIndex + items.length) % items.length; // Make the items circular
            items[currentIndex].classList.add('active');
            items[currentIndex].classList.remove('previous', 'next');
        });


        //   cursor....................

        let mouseCursor=document.querySelector(".cursor");
let navlinks=document.querySelectorAll ('.nav-links a');

window.addEventListener('mousemove', cursor);
function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

navlinks.forEach(link => {
     link.addEventListener("mouseleave" , () => {
            mouseCursor.classList.remove("link-grow");
       });
        link.addEventListener("mouseover" , () => {
            mouseCursor.classList.add("link-grow");
        });
     });