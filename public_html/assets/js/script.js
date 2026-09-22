const image = document.querySelector('.random-image1');
const image2 = document.querySelector('.random-image2');
const image3 = document.querySelector('.random-image3');
const image4 = document.querySelector('.random-image4');
const image5 = document.querySelector('.random-image5');
const image6 = document.querySelector('.random-image6');
const image7 = document.querySelector('.random-image7');
const image8 = document.querySelector('.random-image8');
const container = document.querySelector('.single-image-container');


// object 1
function moveImage() {
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const imageWidth = image.offsetWidth;
    const imageHeight = image.offsetHeight;

    // Random position inside the container (keeping it within bounds)
    const randomX = Math.random() * (containerWidth - imageWidth);
    const randomY = Math.random() * (containerHeight - imageHeight);

    // Random rotation angle (0 to 360 degrees)
    const randomRotation = Math.random() * 360;

    // Applying a cubic-bezier curve for smoother, curvier movement
    image.style.transition = 'transform 8s cubic-bezier(0.25, 1, 0.5, 1)';

    // Move the image to a new position with a random rotation
    image.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotation}deg)`;
}

// Move the image every 2 seconds (slower movement)
if (container && image) setInterval(moveImage, 1900);


// object 2
function moveImage2() {
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const imageWidth = image2.offsetWidth;
    const imageHeight = image2.offsetHeight;

    // Random position inside the container (keeping it within bounds)
    const randomX = Math.random() * (containerWidth - imageWidth);
    const randomY = Math.random() * (containerHeight - imageHeight);

    // Random rotation angle (0 to 360 degrees)
    const randomRotation = Math.random() * 360;

    // Applying a cubic-bezier curve for smoother, curvier movement
    image2.style.transition = 'transform 10s cubic-bezier(0.25, 1, 0.5, 1)';

    // Move the image to a new position with a random rotation
    image2.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotation}deg)`;
}

// Move the image every 2 seconds (slower movement)
if (container && image2) setInterval(moveImage2, 1000);

// object 3
function moveImage3() {
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const imageWidth = image3.offsetWidth;
    const imageHeight = image3.offsetHeight;

    // Random position inside the container (keeping it within bounds)
    const randomX = Math.random() * (containerWidth - imageWidth);
    const randomY = Math.random() * (containerHeight - imageHeight);

    // Random rotation angle (0 to 360 degrees)
    const randomRotation = Math.random() * 360;

    // Applying a cubic-bezier curve for smoother, curvier movement
    image3.style.transition = 'transform 11s cubic-bezier(0.3, 0.9, 0.5, 1)';

    // Move the image to a new position with a random rotation
    image3.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotation}deg)`;
}

// Move the image every 2 seconds (slower movement)
if (container && image3) setInterval(moveImage3, 1300);

// object 4
function moveImage4() {
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const imageWidth = image4.offsetWidth;
    const imageHeight = image4.offsetHeight;

    // Random position inside the container (keeping it within bounds)
    const randomX = Math.random() * (containerWidth - imageWidth);
    const randomY = Math.random() * (containerHeight - imageHeight);

    // Random rotation angle (0 to 360 degrees)
    const randomRotation = Math.random() * 360;

    // Applying a cubic-bezier curve for smoother, curvier movement
    image4.style.transition = 'transform 11s cubic-bezier(0.25, 0.7, 0.5, 1)';

    // Move the image to a new position with a random rotation
    image4.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotation}deg)`;
}

// Move the image every 2 seconds (slower movement)
if (container && image4) setInterval(moveImage4, 1100);

// object 5
function moveImage5() {
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const imageWidth = image5.offsetWidth;
    const imageHeight = image5.offsetHeight;

    // Random position inside the container (keeping it within bounds)
    const randomX = Math.random() * (containerWidth - imageWidth);
    const randomY = Math.random() * (containerHeight - imageHeight);

    // Random rotation angle (0 to 360 degrees)
    const randomRotation = Math.random() * 360;

    // Applying a cubic-bezier curve for smoother, curvier movement
    image5.style.transition = 'transform 11s cubic-bezier(0.25, 0.7, 0.5, 1)';

    // Move the image to a new position with a random rotation
    image5.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotation}deg)`;
}

// Move the image every 2 seconds (slower movement)
if (container && image5) setInterval(moveImage5, 900);

// object 6
function moveImage6() {
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const imageWidth = image6.offsetWidth;
    const imageHeight = image6.offsetHeight;

    // Random position inside the container (keeping it within bounds)
    const randomX = Math.random() * (containerWidth - imageWidth);
    const randomY = Math.random() * (containerHeight - imageHeight);

    // Random rotation angle (0 to 360 degrees)
    const randomRotation = Math.random() * 360;

    // Applying a cubic-bezier curve for smoother, curvier movement
    image6.style.transition = 'transform 11s cubic-bezier(0.25, 0.7, 0.5, 1)';

    // Move the image to a new position with a random rotation
    image6.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotation}deg)`;
}

// Move the image every 2 seconds (slower movement)
if (container && image6) setInterval(moveImage6, 800);

// object 7
function moveImage7() {
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const imageWidth = image7.offsetWidth;
    const imageHeight = image7.offsetHeight;

    // Random position inside the container (keeping it within bounds)
    const randomX = Math.random() * (containerWidth - imageWidth);
    const randomY = Math.random() * (containerHeight - imageHeight);

    // Random rotation angle (0 to 360 degrees)
    const randomRotation = Math.random() * 360;

    // Applying a cubic-bezier curve for smoother, curvier movement
    image7.style.transition = 'transform 12s cubic-bezier(0.4, 0.0, 0.2, 1)';

    // Move the image to a new position with a random rotation
    image7.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotation}deg)`;
}

// Move the image every 2 seconds (slower movement)
if (container && image7) setInterval(moveImage7, 800);

// object 8
function moveImage8() {
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const imageWidth = image8.offsetWidth;
    const imageHeight = image8.offsetHeight;

    // Random position inside the container (keeping it within bounds)
    const randomX = Math.random() * (containerWidth - imageWidth);
    const randomY = Math.random() * (containerHeight - imageHeight);

    // Random rotation angle (0 to 360 degrees)
    const randomRotation = Math.random() * 360;

    // Applying a cubic-bezier curve for smoother, curvier movement
    image8.style.transition = 'transform 12s cubic-bezier(0.4, 0.0, 0.2, 1)';

    // Move the image to a new position with a random rotation
    image8.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotation}deg)`;
}

// Move the image every 2 seconds (slower movement)
if (container && image8) setInterval(moveImage8, 800);


// conchiglia image

const conchiglia = document.querySelector('.conchiglia-image');
let rotation = 0;

function rotateConchiglia() {
    rotation -= 1; // degrees per frame
    conchiglia.style.transform = `rotate(${rotation}deg)`;
    requestAnimationFrame(rotateConchiglia);
}

if (conchiglia) rotateConchiglia();


// burger menu

document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.burger');
  var menu = document.querySelector('.nav-menu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      menu.classList.toggle('open');
    });
  }
});

// nav-menu grouped buckets (accordion: opening one closes the others)

document.addEventListener('DOMContentLoaded', function () {
  var navGroups = document.querySelectorAll('.nav-group');
  navGroups.forEach(function (group) {
    var toggle = group.querySelector('.nav-group-toggle');
    if (!toggle) return;
    toggle.addEventListener('click', function () {
      var isOpen = group.classList.contains('open');
      navGroups.forEach(function (g) { g.classList.remove('open'); });
      if (!isOpen) group.classList.add('open');
    });
  });
});
