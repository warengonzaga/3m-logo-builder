const basePath = process.cwd();
const sharp = require('sharp');
const fs = require('fs-extra');

// define file paths
const inputFile = `${basePath}/input/logo.png`;
const outputFile = `${basePath}/output/logo-worth-3m.png`;
const overlayFile = `${basePath}/src/assets/overlay_512.png`;

// let's colorize it
const pagcolorize = async () => {

    // create output folder if not exists
    // check if output folder exists
    if (!fs.existsSync(`${basePath}/output`)) {
        fs.mkdirSync(`${basePath}/output`);
    }

    await sharp(inputFile)
        .composite([
            {input: overlayFile},
            {input: inputFile, blend: 'dest-atop'}
        ])
        .toFile(outputFile)
        .then(() => {
            console.log('Your logo is now worth 3M!!!');
        })
        .catch((err) => {
            console.error('Error:', err);
        });
}

pagcolorize();
