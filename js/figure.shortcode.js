const path = require("path");

function isNumber(value) {
  return typeof value === 'number';
}

function isVideo(filename) {
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.mkv'];
  return videoExtensions.some(ext => filename.toLowerCase().endsWith(ext));
}

function videoMimeType(filename) {
  switch (path.extname(filename).toLowerCase()) {
    case '.webm':
      return 'video/webm';
    case '.ogg':
      return 'video/ogg';
    case '.mov':
      return 'video/quicktime';
    case '.mp4':
    default:
      return 'video/mp4';
  }
}

/**
 * Paired shortcode to display a figure with caption.
 * This is very similar to the regular Markdown image,
 * But I'll keep this around in case the other way ever breaks in the future
 * Plus, this has the 'width' flexibility, and maybe more future features.
 */
module.exports = function (image, caption, widthName, useLightbox, markdownLibrary) {

  let width = '';
  switch (widthName) {
    case 'half':
      width = 'width: calc(50% - 0.5em);';
      break;
    case 'third':
      width = 'width: calc(33% - 0.5em);';
      break;
    case 'unconstrained':
      width = 'max-width: unset';
      break;
    default:
      if (isNumber(widthName)) {
        const num = parseFloat(widthName);
        width = `width: calc(${num}% - 0.5em);`;
      } else {
        width = 'width: 100%;';
      }
      break;
  }

  let captionMarkup = "";
  if (caption !== undefined && caption !== "") {
    captionMarkup = markdownLibrary.renderInline(caption);
  }

  let mediaMarkup;
  if (isVideo(image)) {
    mediaMarkup = `<video style="${width}cursor: pointer;" autoplay muted loop playsinline onclick="this.paused ? this.play() : this.pause();">
      <source src="${image}" type="${videoMimeType(image)}">
      Your browser does not support the video tag.
    </video>`;
  } else {
    let linkOpen = "", linkClose = "";
    if(useLightbox){
      linkOpen = `<a href="${image}">`;
      linkClose = `</a>`;
    }
    mediaMarkup = `${linkOpen}<img src="${image}" alt="${caption}" loading="lazy" style="${width}" />${linkClose}`;
  }

  let rendered = `<figure>${mediaMarkup}<figcaption>${captionMarkup}</figcaption></figure>`;
  if(widthName==='unconstrained'){
    rendered = `<figure style="${width}">${mediaMarkup}<figcaption>${captionMarkup}</figcaption></figure>`;
  }

  let containerMarkup = `<div style="text-align: center; margin-top: 15px;">${rendered}</div>`;
  return containerMarkup;
}