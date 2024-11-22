document.addEventListener('DOMContentLoaded', () => {
    const recipes = [
        {
            name: 'Chocolate Cake',
            category: 'dessert',
            image: 'https://via.placeholder.com/300x200',
            description: 'A rich and moist chocolate cake.'
        },
        {
            name: 'Veggie Stir Fry',
            category: 'vegetarian',
            image: 'https://via.placeholder.com/300x200',
            description: 'A healthy mix of stir-fried vegetables.'
        },
        {
            name: 'Grilled Chicken',
            category: 'meat',
            image: 'https://via.placeholder.com/300x200',
            description: 'Juicy grilled chicken breast with seasoning.'
        },
        {
            name: 'Fruit Salad',
            category: 'dessert',
            image: 'https://via.placeholder.com/300x200',
            description: 'A refreshing mix of seasonal fruits.'
        }
    ];

    const recipeList = document.getElementById('recipe-list');
    const categoryFilter = document.getElementById('category');

    function displayRecipes(filteredRecipes) {
        recipeList.innerHTML = '';
        filteredRecipes.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.classList.add('recipe-card');
            recipeCard.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}">
                <h3>${recipe.name}</h3>
                <p>${recipe.description}</p>
            `;
            recipeList.appendChild(recipeCard);
        });
    }

    categoryFilter.addEventListener('change', () => {
        const selectedCategory = categoryFilter.value;
        const filteredRecipes = selectedCategory === 'all' 
            ? recipes 
            : recipes.filter(recipe => recipe.category === selectedCategory);
        displayRecipes(filteredRecipes);
    });

    // Display all recipes initially
    displayRecipes(recipes);
});
