const fs = require('fs');
const sharp = require('sharp');

module.exports = function (folderPath) {
    const images = fs.readdirSync(`.${folderPath}`);
    let galleryHTML = '<div class="foldergallery">';
    
    images.forEach(image => {
    linkOpen = `<a href="${folderPath}/${image}">`;
    linkClose = `</a>`;
    galleryHTML += `
    <figure>${linkOpen}<img src="${folderPath}/${image}" class="foldergallery-img" loading="lazy"/>${linkClose}<figcaption></figcaption></figure>`;
    });
    
    galleryHTML += '</div>';
    return galleryHTML;
};