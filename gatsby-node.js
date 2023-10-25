// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// // You can delete this file if you're not using it

// const path = require(`path`);

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;
//   if (countryBuild === 'none') return null;
//   // Catalogue
//   const result = await graphql(`
//     query {
//       allContentfulAsset {
//         edges {
//           node {
//             id
//             filename
//             url
//           }
//         }
//       }
//       allContentfulRecipe {
//         edges {
//           node {
//             name
//             ingredients
//             recipeId
//           }
//         }
//       }
//     }
//   `);
//   const edges = result.data.allContentfulRecipe.edges;
//   console.log(edges);
//   edges.forEach(({ node }) => {
//     const productSlug = node.name.trim().toLowerCase().replace(/\s/gm, '-');
//     const productPath = `/recipes/${productSlug}`;
//     createPage({
//       path: productPath,
//       component: path.resolve(`./src/templates/recipe-detail-page.tsx`),
//       context: {
//         // Data passed to context is available in page queries as GraphQL variables.
//         slug: productPath,
//         pageTitle: node.name.trim(),
//       },
//     });
//   });
// };
