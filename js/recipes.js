  const form = document.querySelector(".add-recipe-form");
  const recipesGrid = document.querySelector(".recipes-grid");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const recipeRitle = document.getElementById("recipe-title").value;
    const recipeIngredients = document.getElementById("recipe-ingredients").value;
    const recipeDescription = document.getElementById("recipe-description").value;
    const card = document.createElement("div");
    let ingredientsList = "";
    for (let ingredient of recipeIngredients.split(",")) {
      ingredientsList += `<li>${ingredient.trim()}</li>`;
    }
    card.className = "card";
    card.innerHTML = `
      <h4 class="recipe-title">${recipeRitle}</h4>
      <ul class="recipe-ingredients">${ingredientsList}</ul>
      <p class="recipe-description">${recipeDescription}</p>
    `;
    const savedRecipesHeading = document.querySelector(".saved-recipes-heading");
    savedRecipesHeading.style.display = "block";
    recipesGrid.appendChild(card);
    form.reset();
  });
  // Mobile Menu
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuButton = document.querySelector(".mobile-menu-button");
  const mobileMenu = document.querySelector(".mobile-menu");
  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
});
