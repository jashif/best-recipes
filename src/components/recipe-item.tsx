import React from 'react';
import '../styles/recipe-item.css';
import { Link } from 'gatsby';

const RecipeItem = ({ recipe }: any) => {
  console.log('recipe.name', recipe.name.toLowerCase().replace(/ +/g, '-'));
  return (
    <div className="recipe-card">
      <img alt={recipe.name} src={recipe.imageUrl} />
      <div className="recipe-card-body">
        <Link to={`/recipes/${recipe.name.toLowerCase().replace(/ +/g, '-')}`}>
          <h2 className="recipe-card-name">{recipe.name}</h2>
        </Link>
        <h3 className="recipe-card-source">{recipe.sourceShort}</h3>
      </div>
    </div>
  );
};
export default RecipeItem;
