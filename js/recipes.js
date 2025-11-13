// ===== RECIPE DATA =====
const recipes = {
  malaysia: {
    title: "Nasi Lemak",
    image: "assets/images/top-recipes/malaysia_nasi_lemak.jpg",
    ingredients: [
      "2 cups rice",
      "1 cup coconut milk",
      "1 pandan leaf",
      "Salt to taste",
      "Anchovies, peanuts, egg, sambal for serving"
    ],
    steps: [
      "Wash and cook rice with coconut milk and pandan leaf.",
      "Prepare sambal by frying chili paste with anchovies.",
      "Serve rice with sambal, egg, peanuts, and cucumber."
    ]
  },
  indonesia: {
    title: "Rendang",
    image: "assets/images/top-recipes/indonesia_rendang.jpg",
    ingredients: ["Beef", "Coconut milk", "Lemongrass", "Galangal", "Chili paste"],
    steps: [
      "Blend spices and sauté until fragrant.",
      "Add beef and coconut milk, simmer until tender.",
      "Cook until sauce thickens and meat absorbs flavor."
    ]
  },
  singapore: {
    title: "Chicken Rice",
    image: "assets/images/top-recipes/singapore_chicken_rice.jpg",
    ingredients: ["Chicken", "Ginger", "Garlic", "Rice", "Chicken broth"],
    steps: [
      "Boil chicken with ginger and garlic.",
      "Use broth to cook rice.",
      "Serve with chili sauce and soy dressing."
    ]
  },
  thailand: {
    title: "Tom Yum",
    image: "assets/images/top-recipes/thailand_tom_yum.jpg",
    ingredients: ["Shrimp", "Lemongrass", "Lime", "Chili paste", "Mushrooms"],
    steps: [
      "Boil lemongrass, galangal, and kaffir lime leaves in water.",
      "Add shrimp, mushrooms, and seasoning.",
      "Finish with lime juice and chili paste."
    ]
  },
  vietnam: {
    title: "Pho",
    image: "assets/images/top-recipes/vietnam_pho.jpg",
    ingredients: ["Beef bones", "Rice noodles", "Star anise", "Cinnamon", "Onions"],
    steps: [
      "Simmer beef bones with spices for broth.",
      "Cook noodles and slice beef thinly.",
      "Serve hot with herbs and lime."
    ]
  },
  philippines: {
    title: "Adobo",
    image: "assets/images/top-recipes/philippines_adobo.jpg",
    ingredients: ["Chicken or pork", "Soy sauce", "Vinegar", "Garlic", "Bay leaves"],
    steps: [
      "Marinate meat in soy sauce and vinegar.",
      "Simmer with garlic and bay leaves.",
      "Cook until sauce thickens."
    ]
  },
  laos: {
    title: "Larb",
    image: "assets/images/top-recipes/laos_larb.jpg",
    ingredients: ["Minced meat", "Lime juice", "Fish sauce", "Mint leaves", "Chili flakes"],
    steps: [
      "Cook minced meat and cool slightly.",
      "Mix with lime juice, fish sauce, herbs, and chili.",
      "Serve with sticky rice."
    ]
  },
  cambodia: {
    title: "Amok",
    image: "assets/images/top-recipes/cambodia_amok.jpg",
    ingredients: ["Fish", "Coconut milk", "Lemongrass paste", "Egg", "Banana leaves"],
    steps: [
      "Mix fish with curry paste and coconut milk.",
      "Wrap in banana leaves and steam.",
      "Serve hot."
    ]
  },
  myanmar: {
    title: "Mohinga",
    image: "assets/images/top-recipes/myanmar_mohinga.jpg",
    ingredients: ["Rice noodles", "Fish broth", "Lemongrass", "Chickpea flour", "Garlic"],
    steps: [
      "Prepare broth with fish and lemongrass.",
      "Add chickpea flour for thickness.",
      "Serve with noodles and egg."
    ]
  },
  brunei: {
    title: "Ambuyat",
    image: "assets/images/top-recipes/brunei_ambuyat.jpg",
    ingredients: ["Sago starch", "Boiling water", "Dipping sauce"],
    steps: [
      "Mix sago starch with hot water until sticky.",
      "Serve with sour or spicy dipping sauce."
    ]
  },
  timor: {
    title: "Batar Daan",
    image: "assets/images/top-recipes/timor_leste_batar_daan.jpg",
    ingredients: ["Corn", "Beans", "Pumpkin", "Coconut milk"],
    steps: [
      "Cook corn, beans, and pumpkin in coconut milk.",
      "Simmer until soft and creamy."
    ]
  }
};

// ===== MODAL FUNCTIONALITY =====
const modal = document.getElementById("recipeModal");
const closeBtn = document.querySelector(".close-btn");
const titleEl = document.getElementById("recipeTitle");
const imgEl = document.getElementById("recipeImage");
const ingredientsEl = document.getElementById("recipeIngredients");
const stepsEl = document.getElementById("recipeSteps");

// Open modal
document.querySelectorAll(".view-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const recipe = recipes[btn.dataset.recipe];
    titleEl.textContent = recipe.title;
    imgEl.src = recipe.image;
    ingredientsEl.innerHTML = recipe.ingredients.map(i => `<li>${i}</li>`).join("");
    stepsEl.innerHTML = recipe.steps.map(s => `<li>${s}</li>`).join("");
    modal.style.display = "block";
  });
});

// Close modal
closeBtn.onclick = () => (modal.style.display = "none");
window.onclick = e => { if (e.target == modal) modal.style.display = "none"; };
