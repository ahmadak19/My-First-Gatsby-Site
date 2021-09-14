const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const heroPath = path.resolve("./src/templates/heros/hero.js");

  const result = await graphql(`
    {
      allDatoCmsHero {
        edges {
          node {
            title
          }
        }
      }
    }
  `);
  
  const heroTitles = result.data.allDatoCmsHero.edges;
  heroTitles.forEach(element => {
      createPage({
          path: `/heros/${element.node.title}`,
          component: heroPath,
          context: {
              title: element.node.title
          }
      })
  });
};
