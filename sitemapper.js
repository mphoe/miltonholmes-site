const path = require('path');

const SitemapGenerator = require('sitemap-generator');
 
// create generator
const generator = SitemapGenerator('http://themiltonholmes.me', {
  filepath: path.join(process.cwd(), 'sitemap.xml'),
  stripQuerystring: false
});
 
// register event listeners
generator.on('done', () => {
  // sitemaps created
});
 
// start the crawler
generator.start();