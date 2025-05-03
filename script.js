

const galleryItems = document.querySelectorAll('.galleryItem');
let currentIndex = 0;

galleryItems[currentIndex].classList.add('active');
galleryItems[currentIndex].style.zIndex = currentIndex + 1;
galleryItems[currentIndex].style.transform = `translateY(0) scale(1) rotate(${getRandomRotation()}deg)`;


// for Gallery
document.getElementById('upButton').addEventListener('click', () => {
    if (currentIndex < galleryItems.length - 1) {
        currentIndex++;
        galleryItems[currentIndex].classList.add('active');
        galleryItems[currentIndex].style.zIndex = currentIndex + 1;
        galleryItems[currentIndex].style.transform = `translateY(0) scale(1) rotate(${getRandomRotation()}deg)`;
    }
});

document.getElementById('downButton').addEventListener('click', () => {
    if (currentIndex > 0) {
        galleryItems[currentIndex].classList.remove('active');
        currentIndex--;
    }
});

function getRandomRotation() {
    return Math.floor(Math.random() * 21) - 10;
}


//Scroll Observer
const observer = new IntersectionObserver((entries) => {        
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.animatedBlock');
hiddenElements.forEach((el, index) => {
    el.style.setProperty('--delay', `${index * 0.2}s`);
    observer.observe(el);
  });


  document.addEventListener("DOMContentLoaded", function () {
    const toggleRow = document.querySelector(".dropdown-toggle");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    toggleRow.addEventListener("click", () => {
      dropdownMenu.style.display = "block";
      toggleRow.style.display = "none";
    });

    dropdownMenu.addEventListener("click", () => {
        dropdownMenu.style.display = "none";
        toggleRow.style.display = "inline-table";
      });
  });

