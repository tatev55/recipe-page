const baseUrl = 'https://dummyjson.com';
const path = '/recipes/';

document.addEventListener('DOMContentLoaded', () => {

    const url= new URLSearchParams(window.location.search);
    const recipeId = url.get('id') ; 

    if (recipeId) {

        fetch(`${baseUrl}${path}${recipeId}`)
            .then(response => response.json())
            .then(recipe =>  {
                
                const recipeBox =  document.createElement('div');
                recipeBox.classList.add('recipe-box-details');

                const recipeImage = document.createElement('img');
                recipeImage.src = recipe.image;
                recipeImage.classList.add('recipe-image') ;

                const recipeTitle = document.createElement('h3');
                recipeTitle.textContent = recipe.name  ;
                recipeTitle.classList.add('recipe-title');

                const recipeIngredients = document.createElement('p');
                recipeIngredients.textContent  = recipe.ingredients.join(', '); 
                recipeIngredients.classList.add('recipe-ingredients');

                const recipeInstructions = document.createElement('p');
                recipeInstructions.textContent =  recipe.instructions.join(' ');
                recipeInstructions.classList.add('recipe-instructions');

                const recipeMealType = document.createElement('p');
                recipeMealType.textContent = recipe.mealType;
                recipeMealType.classList.add('recipe-type');

                const descriptionBox = document.createElement('div');
                descriptionBox.classList.add('description-box');

                const cuisine = document.createElement('b');
                cuisine.textContent = `Cuisine: ${recipe.cuisine}`;

                const  difficultyRecipe = document.createElement('b');
                difficultyRecipe.textContent = `Difficulty: ${recipe.difficulty}`;

                
                const prepTimeMinutes = document.createElement('b');
                prepTimeMinutes.textContent = `Prep Time: ${recipe.prepTimeMinutes} minutes`;

                const rating = document.createElement('b');
                rating.textContent = `Rating: ${recipe.rating}`;
                

                const reviewCount = document.createElement('b');
                reviewCount.textContent = `Review Count: ${recipe.reviewCount}`;

                const caloriesPerServing = document.createElement('b');
                caloriesPerServing.textContent = `Calories per serving: ${recipe.caloriesPerServing}`;

               
                recipeBox.appendChild(recipeImage);
                recipeBox.appendChild(recipeTitle);
                recipeBox.appendChild(recipeIngredients) ;
                recipeBox.appendChild(recipeInstructions);
                recipeBox.appendChild(recipeMealType);


                descriptionBox.appendChild(cuisine);
                descriptionBox.appendChild(difficultyRecipe);
                descriptionBox.appendChild(prepTimeMinutes);
                descriptionBox.appendChild(rating);
                descriptionBox.appendChild(reviewCount);
                descriptionBox.appendChild(caloriesPerServing)
                
                document.getElementById('wrapper').prepend(recipeBox);
                document.getElementById('in-wrapper').appendChild(descriptionBox);
            })
            .catch(error => {
                console.log('Error:', error);
            });
            
    } 
});







