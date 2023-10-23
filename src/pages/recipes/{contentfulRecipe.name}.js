import React from 'react';
import { graphql } from 'gatsby';
import '../../styles/recipe-detail.css';

const Page = props => {
  const { data } = props;
  const { contentfulRecipe, allContentfulAsset } = data;
  const recipe = contentfulRecipe;

  const imgUrl = allContentfulAsset.edges.find(
    img => img.node.filename === `${recipe.name} Banner.png`
  )?.node.url;
  console.log(imgUrl);
  const instructions = recipe.instructions.instructions.split('\r\n');
  return (
    <div class="recipe">
      <h1>{recipe.name}</h1>
      <div class="source-and-servings">
        {`${recipe.sourceShort} | Servings: ${recipe.servings}`}
      </div>

      <div class="star-rating-avg">
        {/* <StarRating Value="recipe.Reviews.AverageRating()" /> */}
      </div>

      <img class="recipe-banner" src={imgUrl} />
      <div class="recipe-details">
        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredients.map((ing, i) => {
            let id = `ingredient${i}`;
            return (
              <li>
                <input id={id} type="checkbox" />
                <label for={id}>{ing}</label>
              </li>
            );
          })}
        </ul>
        <h2>Instructions</h2>
        {instructions.map(instruction => (
          <p>{instruction}</p>
        ))}
        <h2>Tags</h2>
        {recipe.tags?.map(tag => (
          <a class="tag">{tag}</a>
        ))}

        {/* <StarRatingReviews
          Reviews="recipe.Reviews"
          OnSubmitReview="OnSubmitReview"
        /> */}
      </div>
    </div>
  );
};
export const Head = ({ pageContext: { pageTitle } }) => (
  <title>{pageTitle}</title>
);
export default Page;

export const query = graphql`
  query pageQuery($name: String) {
    contentfulRecipe(name: { eq: $name }) {
      recipeId
      satfat
      servings
      source
      sugar
      waittime
      protein
      preptime
      name
      ingredients
      id
      fiber

      instructions {
        id
        instructions
      }
      fat
      cooktime
      calories
      carbs
      tags
      }
    allContentfulAsset {
      edges {
        node {
          id
          filename
          url
        }
      }
    }
  }
`;
