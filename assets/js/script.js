//  Loading
$(document).ready(function () {
  // Initially hide content sections
  $(".home, .about, .portfolio, .contact, .Nav-section ,.footer").addClass(
    "hidden"
  );

  // Show loading spinner
  $(".spin-wrapper")
    .fadeIn("slow")
    .delay(3000)
    .fadeOut("slow", function () {
      // Once spinner is hidden, show content sections
      $(".home, .about, .portfolio, .contact, .Nav-section, .footer ")
        .removeClass("hidden")
        .fadeIn("slow");
    });
});

// Sticky
const stickyDiv = document.getElementById("sticky");

// Add scroll event listener
window.addEventListener("scroll", handleScroll);

// Function to add the Tailwind CSS class when scroll position is down
function handleScroll() {
  if (window.scrollY > 100) {
    // Adjust the scroll as needed
    stickyDiv.classList.add("sticky", "top-0", "shadow-md", "bg-base-100");
  } else {
    stickyDiv.classList.remove("sticky", "top-0", "shadow-md", "bg-base-100");
  }
}

// Add scroll event listener
window.addEventListener("scroll", handleScroll);

// Function to reset styles when scroll bar returns to top
function resetStyles() {
  if (window.scrollY === 0) {
    stickyDiv.classList.remove("sticky", "top-0", "shadow-md", "bg-base-100");
  }
}

// Add scroll event listener to reset styles
window.addEventListener("scroll", resetStyles);
