import { HeadFC, PageProps, graphql } from 'gatsby';
import * as React from 'react';
import RecipeItem from '../components/recipe-item';
import SearchBox from '../components/search-box';
import '../styles/index.css';
import '../styles/recipes.css';
import Layout from '../components/layout';
import useShoppingBag from '../hooks';

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
  const [status, setStatus] = useShoppingBag();
  return (
    <Layout shoppingBagStatus={status} setShoppingBagStatus={setStatus}>
      <main>
        <SearchBox></SearchBox>
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
      </main>
      <footer>Best For You Organics, Co.</footer>
    </Layout>
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
