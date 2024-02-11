const fs = require('fs');
const sharp = require('sharp');
const path = require('path');
let lightbox = require('./lightboxref.shortcode');

module.exports = function (folderPath) {
    const folder_data = fs.readdirSync(`.${folderPath}`, { withFileTypes: true });
    const thumbnailFolderPath = `.${folderPath}/thumbnail`;
    const highresFolderPath = `.${folderPath}`;

    if (!fs.existsSync(thumbnailFolderPath)) {
        fs.mkdirSync(thumbnailFolderPath);
    }

    const images = folder_data
        .filter(dirent => dirent.isFile())
        .map(dirent => dirent.name);
    let galleryHTML = '<div class="foldergallery">';
    
    images.forEach(image => {
        const thumbnailImagePath = path.join(thumbnailFolderPath, image);
        const imagePath = path.join(highresFolderPath, image);

        if (!fs.existsSync(thumbnailImagePath)) {
            console.log("Creating thumbnail:", thumbnailImagePath);
            sharp(imagePath)
                .resize({ width: 500 })
                .toFile(thumbnailImagePath, (err, info) => {
                    if (err) {
                        console.error('Error generating thumbnail:', err);
                    }
                });
        }
        linkOpen = `<a href="${folderPath}/${image}">`;
        linkClose = `</a>`;
        galleryHTML += `
        <figure>${linkOpen}<img src="${folderPath}/thumbnail/${image}" class="foldergallery-img" loading="lazy"/>${linkClose}<figcaption></figcaption></figure>`;
    });
    
    galleryHTML += '</div>';
    return galleryHTML;
};