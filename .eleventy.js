module.exports = function (eleventyConfig) {
   
    // Copy static folder to /_site
    eleventyConfig.addPassthroughCopy("./static/");
  
    return {
      dir: {
        input: "src",
        includes: "_includes",
        output: "_site",
      },
      templateFormats: ["md", "njk", "html"],
      htmlTemplateEngine: "njk",
    };
  };