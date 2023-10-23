import * as React from 'react';
import { HeadFC, PageProps, Link, graphql, useStaticQuery } from 'gatsby';
import '../styles/recipes.css';
import RecipeItem from '../components/recipe-item';
const IndexPage: React.FC<PageProps> = props => {
  const { allContentfulRecipe, allContentfulAsset }: any = props.data;
  const { edges } = allContentfulRecipe;
  const recipes = edges.map((x: any) => {
    const image = allContentfulAsset.edges.find(
      (img): any => img.node.filename === `${x.node.name}.png`
    );
    return {
      ...x.node,
      imageUrl: image && image.node.url,
    };
  });
  return (
    <main>
      <div>
        <ul className="recipe-list">
          {recipes.map(rcp => (
            <li
              key={rcp.recipeId}
              className="recipe-list-item"
              onClick={() => {}}
            >
              <RecipeItem recipe={rcp} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

export const query = graphql`
  query {
    allContentfulAsset {
      edges {
        node {
          id
          filename
          url
        }
      }
    }
    allContentfulRecipe {
      edges {
        node {
          name
          ingredients
          recipeId
        }
      }
    }
  }
`;
