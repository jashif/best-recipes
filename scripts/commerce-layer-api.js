const axios = require('axios');
const recipes = require('./recipe.json');
const dataList = Object.values(recipes);

function getToken() {
  let data = JSON.stringify({
    grant_type: 'client_credentials',
    client_id: 'UzHVt770fWsxBGCuuJnjN_O2ijZ70QzGCGA0_mZj3Ik',
    client_secret: '2ATTMcVoElj4-dCug6_aDnK3r5YPQH60aXAUFZZTMo8',
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://wishkart.commercelayer.io/oauth/token',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: data,
  };

  return axios
    .request(config)
    .then(response => {
      return response.data.access_token;
    })
    .catch(error => {
      console.log(error);
    });
}

function insertSku(item) {
  let data = JSON.stringify({
    data: {
      type: 'skus',
      attributes: {
        code: item.recipeId,
        name: item.name,
      },
      relationships: {
        shipping_category: {
          data: {
            type: 'shipping_categories',
            id: 'ZNngXFZoMw',
          },
        },
      },
    },
  });
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://wishkart.commercelayer.io/api/skus',
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${access_token}`,
      'Content-Type': 'application/vnd.api+json',
    },
    data: data,
  };

  return axios
    .request(config)
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log(error.response.data);
    });
}
let access_token;
getToken().then(token => {
  access_token = token;
  dataList.forEach(x => {
    x.recipeId = `FOODREC${x.recipeId}`;
  });

  processList(0);
});

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function insertPrice(item) {
  let data = JSON.stringify({
    data: {
      type: 'prices',
      attributes: {
        sku_code: item.recipeId,
        amount_cents: randomIntFromInterval(1000, 2000),
        compare_at_amount_cents: 0,
      },
      relationships: {
        price_list: {
          data: {
            type: 'price_lists',
            id: 'glADpCyWKk',
          },
        },
      },
    },
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://wishkart.commercelayer.io/api/prices',
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${access_token}`,
      'Content-Type': 'application/vnd.api+json',
    },
    data: data,
  };

  return axios
    .request(config)
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log(error.response.data);
    });
}

function insertStock(item) {
  let data = JSON.stringify({
    data: {
      type: 'stock_items',
      attributes: {
        quantity: 1000,
        sku_code: item.recipeId,
      },
      relationships: {
        stock_location: {
          data: {
            type: 'stock_locations',
            id: 'xMXBXueDgG',
          },
        },
      },
    },
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://wishkart.commercelayer.io/api/stock_items',
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${access_token}`,
      'Content-Type': 'application/vnd.api+json',
    },
    data: data,
  };

  return axios
    .request(config)
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log(error.response.data);
    });
}

function processList(index) {
  if (index < dataList.length) {
    //insertSku(dataList[index]);
    //insertPrice(dataList[index]);
    insertStock(dataList[index]);
    setTimeout(() => processList(index + 1), 2000);
  }
}
