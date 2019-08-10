module.exports = {
  exportTrailingSlash: true,
  exportPathMap: async function(defaultPathMap) {
    return {
      '/': { page: '/' }
    };
  }
};

const withImages = require('next-images')
module.exports = withImages(module.exports)
