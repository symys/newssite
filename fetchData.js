// this file helps to fetch the current data from API

const axios = require('axios');
const fs = require('fs'); // it's a node.js feature, provides to write new datas to over old file

const HOME_API_URL = 'https://www.trtworld.com/api/homepage';
const ARTICLE_API_BASE_URL = 'https://www.trtworld.com/api/content?path=';
const DB_FILE_PATH = './public/db.json';

async function fetchHomepageAndArticles() {
  try {
    // take homepage api data
    const homepageResponse = await axios.get(HOME_API_URL);
    const homepageData = homepageResponse.data;

    // create a array from all article objects in homepage api
    const allArticles = [
      ...(homepageData.headline || []),
      ...(homepageData.latest || []),
      ...(homepageData.news || []),
    ];

    // create a fucntion which fetch whole content via paths of articles
    const fetchArticleDetails = async (article) => {
      const articlePath = article.path;
      try {
        const articleResponse = await axios.get(ARTICLE_API_BASE_URL + articlePath);
        return {
          ...article,
          content: articleResponse.data.content // Makale içeriğini ekle
        };
      } catch (error) {
        console.error(`Error fetching article at path: ${articlePath}`, error);
        return { ...article, content: null }; // Hata varsa content null
      }
    };

    // call the function for all articles
    const articleDetails = await Promise.all(allArticles.map(fetchArticleDetails));

    // prepare db.json for homepage api and articledetails api
    const newData = {
      homepageapi: homepageData, 
      articlesapi: articleDetails,
    };

    // overwrite db.json
    fs.writeFileSync(DB_FILE_PATH, JSON.stringify(newData, null, 2));
    console.log('Homepage and article data updated successfully');
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// We can fetch new datas from the API at any time interval
setInterval(fetchHomepageAndArticles, 12 * 60 * 60 * 1000); // It works each 12 hours, I set 12 hours because of netlify api request limit

// it fetch data when script is called
fetchHomepageAndArticles();


//node fetchData.js run command