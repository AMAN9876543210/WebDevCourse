// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Check if the user has already clicked the "About" button
    if (localStorage.getItem("showAboutText") === "true") {
        // Hide the About button and show the paragraph
        document.getElementById("aboutButton").style.display = "none";
        document.getElementById("aboutText").classList.remove("hidden");
        document.getElementById("backLink").classList.remove("hidden");
    } else {
        // Show the About button and hide the paragraph
        document.getElementById("aboutButton").style.display = "inline-block";
        document.getElementById("aboutText").classList.add("hidden");
        document.getElementById("backLink").classList.add("hidden");
    }
});

document.getElementById("aboutButton").addEventListener("click", function() {
    // Update localStorage to show the about text
    localStorage.setItem("showAboutText", "true");

    // Reload the page to reflect the changes
    window.location.reload();
});

document.getElementById("backLink").addEventListener("click", function(event)) {
    event.preventDefault(); // Prevent default link behavior
}
    // Clear local
