const axios = require('axios');
const products = require('./ex.json');
const recipes = require('./recipe.json');
const fs = require('fs');
const dataList = Object.values(recipes);
dataList.forEach(x => {
  x.recipeId = `FOODREC${x.recipeId}`;
});
const BASE_URL = 'https://api.contentful.com';
const SPACE_ID = 'xh1e4ab263r2';
const CMA_TOKEN = 'CFPAT-Kg0CC4cUvwk3BhPW2Gn4rBwMulPN-oFq4mp9efDUR4E';

const getContentTypes = async () => {
  const url = `${BASE_URL}/spaces/${SPACE_ID}/environments/master/content_types`;

  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${CMA_TOKEN}`,
    },
  });
  console.log(response.data.items.find(x => x.name === 'Recipe').sys);
};
const insertProducts = async () => {
  const postRecieps = [];
  for (let recipeId in recipes) {
    if (recipes.hasOwnProperty(recipeId)) {
      const originalRecipe = recipes[recipeId];
      const id = 'recipe' + Math.random().toString(16).slice(2);
      const modifiedRecipe = getContentTypeModel('recipe', id);
      let reciepReviews = [];
      for (let key in originalRecipe) {
        if (key === 'reviews') {
          const reviewLink = [];
          originalRecipe[key].forEach((review, index) => {
            const rvId = 'review' + Math.random().toString(16).slice(2);
            const reviewContent = getContentTypeModel('feedback', rvId);
            for (let key in review) {
              reviewContent.fields[key] = {
                'en-US': review[key],
              };
            }
            reviewLink.push({
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: reviewContent.sys.id,
              },
            });
            reciepReviews.push(reviewContent);
          });
          modifiedRecipe.fields[key] = {
            'en-US': reviewLink,
          };
        } else {
          modifiedRecipe.fields[key] = {
            'en-US': originalRecipe[key],
          };
        }
      }
      postRecieps.push(modifiedRecipe);
      if (reciepReviews.length > 0) {
        reciepReviews.forEach(rcPR => {
          postRecieps.push(rcPR);
        });
      }
    }
  }
  fs.writeFile('entries.json', JSON.stringify(postRecieps), () => {});
  console.log(JSON.stringify(postRecieps));
  //   await Promise.all(
  //     postRecieps.map(recipe => {
  //       return axios.post(
  //         `${BASE_URL}/spaces/${SPACE_ID}/environments/master/entries`,
  //         recipe,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${CMA_TOKEN}`,
  //             'Content-Type': 'application/vnd.contentful.management.v1+json',
  //             'X-Contentful-Content-Type': 'recipe',
  //           },
  //         }
  //       );
  //     })
  //   );
};

const getContentTypeModel = (type, id) => {
  const modifiedRecipe = {
    fields: {},
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'xh1e4ab263r2',
        },
      },
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      id,
      type: 'Entry',
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: type,
        },
      },
    },
    metadata: {
      tags: [],
    },
  };
  return modifiedRecipe;
};

getContentTypes().then(() => {
  insertProducts();
});
