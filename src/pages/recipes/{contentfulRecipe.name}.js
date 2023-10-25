import * as CLayer from 'commercelayer-react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React, { useEffect, useRef } from 'react';
import Layout from '../../components/layout';
import useShoppingBag, { usePriceLoading } from '../../hooks/index';
import loader from '../../images/three-dots-loader.svg';
import '../../styles/recipe-detail.css';
const Page = props => {
  const delayTimer = useRef(null);
  const loading = usePriceLoading('clayer-prices-ready');
  const [status, setStatus] = useShoppingBag();

  const { data } = props;
  const { contentfulRecipe, allContentfulAsset } = data;
  const recipe = contentfulRecipe;

  const imgUrl = allContentfulAsset.edges.find(
    img => img.node.filename === `${recipe.name} Banner.png`
  )?.node.url;

  const instructions = recipe.instructions.instructions.split('\r\n');

  const amountProps = {
    amount: {
      className: 'large has-text-success',
    },
    compare: {
      className: 'large has-text-grey-light',
    },
  };

  useEffect(() => {
    return window.clearInterval(delayTimer.current);
  });
  const handleOnClick = e => {
    if (e.target.hasAttribute('disabled')) {
      return e.preventDefault();
    }
    delayTimer.current = window.setInterval(() => {
      setStatus();
    }, 1000);
  };
  return (
    <Layout shoppingBagStatus={status} setShoppingBagStatus={setStatus}>
      <div class="recipe">
        <h1>{recipe.name}</h1>
        <div class="source-and-servings">
          {`${recipe.sourceShort} | Servings: ${recipe.servings}`}
        </div>
        <div class="star-rating-avg">
          {/* <StarRating Value="recipe.Reviews.AverageRating()" /> */}
        </div>
        <GatsbyImage class="recipe-banner" src={imgUrl} />

        <div className="add-button">
          <div className="large">
            <CLayer.Price skuCode={recipe.recipeId} AmountProps={amountProps} />
            {loading ? <img src={loader} width="50" /> : null}
          </div>
          <CLayer.AddToBag
            onClick={handleOnClick}
            skuCode={recipe.recipeId}
            skuName={recipe.name}
            id="add-to-bag"
            className={`add-to-bag button is-success is-fullwidth`}
            skuImageUrl={imgUrl}
          />
        </div>
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
    </Layout>
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
