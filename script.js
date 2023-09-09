// Click events for buttons
const portfolio = document.getElementById("portfolio");
const portfolioBtn = document.getElementById("portfolio-btn");
const skills = document.getElementById("skills");
const skillsBtn = document.getElementById("skills-btn");

portfolioBtn.addEventListener("click", (event) => {
  skills.style.display = "none";
  portfolio.style.display = "flex";
  skillsBtn.classList.remove("active-btn");
  portfolioBtn.classList.add("active-btn");
});

skillsBtn.addEventListener("click", (event) => {
  skills.style.display = "flex";
  portfolio.style.display = "none";
  portfolioBtn.classList.remove("active-btn");
  skillsBtn.classList.add("active-btn");
});

// // Function to lighten a color
// function lightenGrayScale(grayValue, percent) {
//   const amt = Math.round(2.55 * percent);
//   let newValue = grayValue + amt;
//   newValue = newValue < 255 ? (newValue < 0 ? 0 : newValue) : 255;
//   return `#${newValue.toString(16).repeat(3)}`;
// }

// // Array of grayscale values representing silver shades
// const grayValues = [128, 160, 192, 224, 245];

// // Get all the 'p' elements in 'article'
// const articlePs = document.querySelectorAll("article p");

// // Loop through and apply distinct gradient colors to each 'p' element
// articlePs.forEach((p, index) => {
//   const baseGrayValue = grayValues[index % grayValues.length];
//   const lighterGrayValue = lightenGrayScale(baseGrayValue, 20); // Lighten by 20%

//   p.style.background = `linear-gradient(45deg, #${baseGrayValue
//     .toString(16)
//     .repeat(3)}, ${lighterGrayValue})`;
//   p.style.color = "#000000"; // Black text to contrast with the silver background
// });
