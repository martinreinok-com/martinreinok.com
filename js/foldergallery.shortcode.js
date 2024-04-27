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
        .map(dirent => ({
            name: dirent.name,
            path: path.join(highresFolderPath, dirent.name),
            thumbnailPath: path.join(thumbnailFolderPath, dirent.name),
            stats: fs.statSync(path.join(highresFolderPath, dirent.name))
        }))
        .sort((a, b) => b.stats.mtime.getTime() - a.stats.mtime.getTime()); // Sort by modification time

    let galleryHTML = '<div class="foldergallery">';
    
    images.forEach(image => {
        if (!fs.existsSync(image.thumbnailPath)) {
            console.log("Creating thumbnail:", image.thumbnailPath);
            sharp(image.path)
                .resize({ width: 500 })
                .toFile(image.thumbnailPath, (err, info) => {
                    if (err) {
                        console.error('Error generating thumbnail:', err);
                    }
                });
        }
        linkOpen = `<a href="${folderPath}/${image.name}">`;
        linkClose = `</a>`;
        galleryHTML += `
        <figure>${linkOpen}<img src="${folderPath}/thumbnail/${image.name}" class="foldergallery-img" loading="lazy"/>${linkClose}<figcaption></figcaption></figure>`;
    });
    
    galleryHTML += '</div>';
    return galleryHTML;
};
