class Recipe {
    constructor(name, ingredients, category, creationDate, type, imageUrl, bgColor) {
        this.name = name;
        this.ingredients = ingredients;
        this.category = category;
        this.creationDate = creationDate;
        this.type = type;
        this.imageUrl = imageUrl;
        this.bgColor = bgColor;
    }

    updateRecipe(details) {
        if (details.name) this.name = details.name;
        if (details.ingredients) this.ingredients = details.ingredients;
        if (details.category) this.category = details.category;
        if (details.type) this.type = details.type;
        if (details.imageUrl) this.imageUrl = details.imageUrl;
        if (details.bgColor) this.bgColor = details.bgColor;
    }
}

class RecipeBook {
    constructor() {
        this.recipes = [];
        this.initializeRecipes();
    }

    initializeRecipes() {
        const initialRecipes = [
            // Vegetarian South Indian Recipes
            new Recipe("Masala Dosa", "dosa batter, potatoes, onions, spices", "breakfast", "2024-08-01", "veg", "https://i.pinimg.com/736x/e8/dc/7f/e8dc7f0b59b8602ba30621dee3c6291c.jpg", "#ffebee"),
            new Recipe("Idli", "idli batter, water", "breakfast", "2024-08-02", "veg", "https://alchetron.com/cdn/idli-830238fe-0707-42f6-9d4c-15f8808a37a-resize-750.jpeg", "#e0f7fa"),
            new Recipe("Mushroom Rice", "mushrooms, rice, spices", "lunch", "2024-08-03", "veg", "https://i.ytimg.com/vi/VbGhAyOU2pI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCj2UTqcTzRDbfkl1JzhD1Hd0-q3Q", "#c8e6c9"),
            new Recipe("Paneer Rice", "rice, paneer, spices", "lunch", "2024-08-04", "veg", "https://www.vegrecipesofindia.com/wp-content/uploads/2018/10/paneer-pulao-recipe-1.jpg", "#fff9c4"),
            new Recipe("Vegetable Biryani", "rice, mixed vegetables, spices", "dinner", "2024-08-05", "veg", "https://cookingfromheart.com/wp-content/uploads/2017/09/Veg-Biryani-in-Pressure-Cooker-6.jpg", "#f1f8e9"),
            new Recipe("Dahi Vada", "vada, curd, rice, spices", "dinner", "2024-08-06", "veg", "https://www.nehascookbook.com/wp-content/uploads/2022/09/Instant-dahi-vada-WS.jpg", "#ffccbc"),

            // Non-Vegetarian South Indian Recipes
            new Recipe("Chicken Kothu Parotta", "chicken, parotta, spices", "breakfast", "2024-08-01", "non-veg", "https://www.shutterstock.com/image-photo/chicken-kothu-parotta-curried-shredded-260nw-2017150889.jpg", "#ffebee"),
            new Recipe("Mutton Keema Dosa", "mutton keema, dosa batter", "breakfast", "2024-08-02", "non-veg", "https://www.spicypunch.com/wp-content/uploads/2021/11/mutton-keema-curry.jpg", "#fce4ec"),
            new Recipe("Chicken Chettinad", "chicken, spices, coconut, onions", "lunch", "2024-08-03", "non-veg", "https://www.whiskaffair.com/wp-content/uploads/2020/09/Chicken-Chettinad-Curry-2-3.jpg", "#ffccbc"),
            new Recipe("Fish Curry", "fish, tamarind, spices, coconut", "lunch", "2024-08-04", "non-veg", "https://instafitness.in/wp-content/uploads/2021/03/Fish-Curry-Recipe-600x300.png", "#ffebee"),
            new Recipe("Chicken Biryani", "rice, chicken, spices", "dinner", "2024-08-05", "non-veg", "https://static.toiimg.com/thumb/53096628.cms?width=1200&height=900", "#fce4ec"),
            new Recipe("Egg Curry", "eggs, masalas, spices", "dinner", "2024-08-06", "non-veg", "https://images.services.kitchenstories.io/EPAs3NYa-v4uK2NumQYwhJ4Cd58=/3840x0/filters:quality(85)/images.kitchenstories.io/wagtailOriginalImages/R2899-photo-final-3x4.jpg", "#f3e5f5"),

            // Cool Drinks
            new Recipe("Mango Smoothie", "mango, yogurt, honey", "drink", "2024-08-07", "cool-drink", "https://www.cubesnjuliennes.com/wp-content/uploads/2021/04/Mango-Smoothie-Recipe.jpg", "#fff3e0"),
            new Recipe("Lemonade", "lemons, water, sugar", "drink", "2024-08-08", "cool-drink", "https://www.simplyrecipes.com/thmb/ZOXgJKuuMMYQGUJ8Co1eooL37tw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Perfect-Lemonade-LEAD-06-B-a488322e63604cd6a1442de661722553.jpg", "#e1f5fe"),
            new Recipe("Watermelon Juice", "watermelon, lemon juice, sugar", "drink", "2024-08-09", "cool-drink", "https://www.flavourstreat.com/wp-content/uploads/2022/08/homemade-watermelon-juice.jpg", "#f3e5f5"),
            new Recipe("Pineapple Mojito", "pineapple, mint, lime, soda water, sugar", "drink", "2024-08-10", "cool-drink", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZmE-bFJrBsk0HH_Gg9EhP3mVcto01IlkPGA&s", "#e0f7fa"),
            new Recipe("Iced Coffee", "coffee, ice cubes, milk, sugar", "drink", "2024-08-11", "cool-drink", "https://frostingandfettuccine.com/wp-content/uploads/2022/12/Instant-Iced-Coffee-5-1.jpg", "#fff3e0"),

            // Ice Creams
            new Recipe("Vanilla Ice Cream", "milk, cream, sugar, vanilla", "dessert", "2024-08-12", "ice-cream", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT55hNRrpfX3_TjvJ6fg0iTzyNqd3VyW3ifw&s", "#f5f5f5"),
            new Recipe("Chocolate Ice Cream", "milk, cream, sugar, cocoa", "dessert", "2024-08-13", "ice-cream", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvM_x5Ri4Z2UmfIj9XWMHoehwLKaBcGhazyA&s", "#d7ccc8"),
            new Recipe("Strawberry Ice Cream", "strawberries, milk, cream, sugar", "dessert", "2024-08-14", "ice-cream", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8YD4KZZpQDoD343-FvCpfLh-GFJ4Z6FVzNQ&s", "#f8bbd0"),
            new Recipe("Mango Sorbet", "mangoes, sugar, lemon juice", "dessert", "2024-08-15", "ice-cream", "https://i.ytimg.com/vi/OqsusMwcQic/maxresdefault.jpg", "#ffe0b2"),
            new Recipe("Coffee Ice Cream", "coffee, cream, sugar, milk", "dessert", "2024-08-16", "ice-cream", "https://www.thehungrybites.com/wp-content/uploads/2023/05/easy-coffee-ice-cream-featured.jpg", "#d7ccc8")
        ];

        initialRecipes.forEach(recipe => this.addRecipe(recipe));
    }

    addRecipe(recipe) {
        this.recipes.push(recipe);
        this.renderRecipes();
    }

    editRecipe(recipeName, field, newValue) {
        let recipe = this.recipes.find(r => r.name === recipeName);
        if (recipe) {
            const details = {};
            details[field] = newValue;
            recipe.updateRecipe(details);
            this.renderRecipes();
        } else {
            alert(`Recipe "${recipeName}" not found.`);
        }
    }

    deleteRecipe(recipeName) {
        this.recipes = this.recipes.filter(r => r.name !== recipeName);
        this.renderRecipes();
    }

    renderRecipes() {
        const vegColumn = document.getElementById('vegColumn');
        const nonVegColumn = document.getElementById('nonVegColumn');
        const coolDrinkColumn = document.getElementById('coolDrinkColumn');
        const iceCreamColumn = document.getElementById('iceCreamColumn');

        vegColumn.innerHTML = '<h2>Vegetarian Recipes</h2>';
        nonVegColumn.innerHTML = '<h2>Non-Vegetarian Recipes</h2>';
        coolDrinkColumn.innerHTML = '<h2>Cool Drinks</h2>';
        iceCreamColumn.innerHTML = '<h2>Ice Creams</h2>';

        this.recipes.forEach(recipe => {
            const recipeDiv = document.createElement('div');
            recipeDiv.className = 'recipe-item';
            recipeDiv.style.backgroundColor = recipe.bgColor;
            recipeDiv.innerHTML = `
                <img src="${recipe.imageUrl}" alt="${recipe.name}">
                <h3>${recipe.name}</h3>
                <div class="details">
                    <p>Ingredients: ${recipe.ingredients}</p>
                    <p>Category: ${recipe.category}</p>
                    <p>Creation Date: ${recipe.creationDate}</p>
                    <button onclick="editRecipe('${recipe.name}', 'name', prompt('Enter new name:'))">Edit Name</button>
                    <button onclick="editRecipe('${recipe.name}', 'ingredients', prompt('Enter new ingredients:'))">Edit Ingredients</button>
                    <button onclick="editRecipe('${recipe.name}', 'category', prompt('Enter new category:'))">Edit Category</button>
                    <button onclick="editRecipe('${recipe.name}', 'creationDate', prompt('Enter new creation date:'))">Edit Creation Date</button>
                    <button onclick="editRecipe('${recipe.name}', 'type', prompt('Enter new type:'))">Edit Type</button>
                </div>
            `;

            switch (recipe.type) {
                case 'veg':
                    vegColumn.appendChild(recipeDiv);
                    break;
                case 'non-veg':
                    nonVegColumn.appendChild(recipeDiv);
                    break;
                case 'cool-drink':
                    coolDrinkColumn.appendChild(recipeDiv);
                    break;
                case 'ice-cream':
                    iceCreamColumn.appendChild(recipeDiv);
                    break;
            }
        });
    }
}

const recipeBook = new RecipeBook();

document.getElementById('addRecipeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const ingredients = document.getElementById('ingredients').value;
    const category = document.getElementById('category').value;
    const creationDate = document.getElementById('creationDate').value;
    const type = document.getElementById('type').value;
    const imageUrl = prompt('Enter image URL:');
    const bgColor = prompt('Enter background color (hex or color name):');

    const newRecipe = new Recipe(name, ingredients, category, creationDate, type, imageUrl, bgColor);
    recipeBook.addRecipe(newRecipe);

    // Clear the form
    this.reset();
});
