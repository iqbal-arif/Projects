//Intersection Observer Api Practical Example
// https://medium.com/@ryanfinni/the-intersection-observer-api-practical-examples-7844dfa429e9

// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

// https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/isIntersecting

// Grabbing Sections of the site
const allSiteSection = document.querySelectorAll('section');
// Grabbing Menu bar Background Color Div
const navBarBkgClr = document.querySelector('.menu-background-color');

// Defining Color Array for Menu Background
const menuColor = ['coral', 'chartreuse', 'chocolate', 'cadetblue'];

// Defining the Threshold value of the section for Menu Background to change the color

// Threshold Value
const thresholdValue = {
  threshold: 0.7,
};

// Defining Observer
let observer = new IntersectionObserver(scrollEntries, thresholdValue);

// Logging Entries at Scrolling

function scrollEntries(entries) {
  entries.forEach((entry) => {
    // console.log(entry);
    // Grabbing the Class name from each section entry
    const className = entry.target.className;
    // Storing Menu data attribute dynamically
    const currentMenuAtSection = document.querySelector(
      `[data-page='${className}']`
    );
    // Grabbing & Storing Each Section data Index
    const sectionIndex = entry.target.getAttribute(`data-index`);
    //Storing each Section coordinates
    const sectionCoordiantes = currentMenuAtSection.getBoundingClientRect();
    // Storing Direction based on coordinates of each section
    const direction = {
      height: coordinates.height,
      width: coordinates.width,
      top: coordinates.top,
      left: coordinates.left,
    };
  });
}

allSiteSection.forEach((section) => {
  observer.observe(section);
});
