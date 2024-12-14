const baseUrl = 'https://dummyjson.com';
const path = '/recipes';

document.addEventListener('DOMContentLoaded', () => {
    const promise = fetch(`${baseUrl}${path}`)
        .then(response => response.json())
        .then(data => {
           
            const recipes = data.recipes; 
            recipes.forEach(recipe => { 
                const recipeBox = document.createElement('div');
                recipeBox.classList.add('recipe-box');
                recipeBox.dataset.id = recipe.id;

            
                const recipeImage = document.createElement('img');
                recipeImage.src = recipe.image;
                recipeImage.classList.add('recipe-image');
    
                const recipeTitle = document.createElement('h3');
                recipeTitle.textContent = recipe.name;
                recipeTitle.classList.add('recipe-title');
    
                const recipeIngredients = document.createElement('p');
                recipeIngredients.textContent = recipe.ingredients.join(', '); 
                recipeIngredients.classList.add('recipe-ingredients');
    
                const recipeInstructions = document.createElement('p');
                recipeInstructions.textContent = recipe.instructions.join(' ');
                recipeInstructions.classList.add('recipe-instructions');
    
                const recipeMealType = document.createElement('p');
                recipeMealType.textContent = recipe.mealType;
                recipeMealType.classList.add('recipe-type');

                recipeBox.appendChild(recipeImage);
                recipeBox.appendChild(recipeTitle);
                recipeBox.appendChild(recipeIngredients);
                recipeBox.appendChild(recipeInstructions);
                recipeBox.appendChild(recipeMealType);
                document.getElementById('inner').appendChild(recipeBox);

        });

        document.getElementById('inner').addEventListener('click', (event) => {
            if(event.target === document.getElementById('inner')){
                return;
            }
            const recipeBox = event.target.closest('.recipe-box') ;
            if (recipeBox) {
                const recipeId = recipeBox.dataset.id;
                window.location.href = `recipe-details.html?id=${recipeId}`;
            }

        });
    });

});


















