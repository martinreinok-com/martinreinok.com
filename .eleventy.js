const fs = require('fs');
const path = require('path');

// The `gallery` paired shortcode shows a set of images and displays it in a row together.
let gallery = require('./js/gallery.shortcode');
let imageRenderer = require('./js/markdownlibrary.renderer.image');
let lightbox = require('./js/lightboxref.shortcode');
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");


module.exports = function(eleventyConfig) {
    let markdownLibrary = markdownIt({
      html: true,
      linkify: false,
      typographer: true
    }).use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.headerLink(),
      level: [1, 2, 3, 4],
      slugify: eleventyConfig.getFilter("slugify")
    });

    eleventyConfig.addPassthroughCopy("./css/");
    eleventyConfig.addPassthroughCopy("./media/");
    eleventyConfig.addPassthroughCopy("./js/");
    eleventyConfig.addPassthroughCopy({ "node_modules/simplelightbox/dist/simple-lightbox.min.css": "simplelightbox/simple-lightbox.min.css" });
    eleventyConfig.addPassthroughCopy({ "node_modules/simplelightbox/dist/simple-lightbox.min.js": "simplelightbox/simple-lightbox.min.js" });
    eleventyConfig.addPairedShortcode("gallery", (data, caption) => gallery(data, caption, markdownLibrary));
    markdownLibrary.renderer.rules.image = (tokens, idx, options, env, slf) => imageRenderer(tokens, idx, options, env, slf, markdownLibrary);

    eleventyConfig.addShortcode("addLightBoxRefIfNecessary", function () { return lightbox(this.page); });
    eleventyConfig.addShortcode("foldergallery", function (folderPath) { return require('./js/foldergallery.shortcode')(folderPath); });
  };