# Food Monger
This is a food recipe single page website using the [Spoonacular API](https://spoonacular.com/food-api/)

## User Story:

- Land on a home page where you are prompted to sign in or sign up.
- Navigate through the Navbar to viewing recipes, creating, favorites, shopping list
- Select recipes for "this" week that generates a shopping list based on ingredients
- In the shopping list view, a user will be able to remove ingredients they may have already have in their fridge or pantry.
- Create a new account that has a users favorite receipes and created recipes
- Optional: add a recipes rating

## Routes:
/                         <Home />
/recipes/new              <RecipeForm />
/recipes/:id/edit         <RecipeEditForm />
/recipes/:id              <RecipeDetail />
/recipes                  <RecipeList />
/recipes/favorites        <RecipeFavorites />

![Screen Shot 2022-03-28 at 10 39 39 AM](https://user-images.githubusercontent.com/37206824/160457346-68b1ceaf-d1a8-48d5-8327-c45a0c7c16e3.png)
