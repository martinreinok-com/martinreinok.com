const fs = require('fs');
const sharp = require('sharp');

module.exports = function (folderPath) {
    const folder_data = fs.readdirSync(`.${folderPath}`, { withFileTypes: true });
    const images = folder_data
        .filter(dirent => dirent.isFile())
        .map(dirent => dirent.name);
    let galleryHTML = '<div class="foldergallery">';
    
    images.forEach(image => {
    linkOpen = `<a href="${folderPath}highres/${image}" target="_blank">`;
    linkClose = `</a>`;
    galleryHTML += `
    <figure>${linkOpen}<img src="${folderPath}/${image}" class="foldergallery-img" loading="lazy"/>${linkClose}<figcaption></figcaption></figure>`;
    });
    
    galleryHTML += '</div>';
    return galleryHTML;
};