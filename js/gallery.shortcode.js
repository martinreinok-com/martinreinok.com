/**
 * The `gallery` paired shortcode shows a set of images and displays it in a grid.
 * It sets inGallery = true, which is used by the markdown image renderer
 */
module.exports = function gallery(data, caption="", markdownLibrary) {
  // Count the number of images passed in (one per newline).
  // If it's an even number of items, we'll get the image to set width = 50%.
  // To help with the layout.
  let evenItems = (data.trim().split('\n').length % 2) == 0;

  const galleryContent = markdownLibrary.renderInline(data, { 'inGallery': true, 'evenItems': evenItems });
  const figureMarkup = `<figure>${galleryContent}<figcaption>${markdownLibrary.renderInline(caption)}</figcaption></figure>`;
  const containerMarkup = `<div style="margin-top: 15px;">${figureMarkup}</div>`;

  return containerMarkup;
}