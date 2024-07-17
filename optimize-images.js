import sharp from 'sharp';
import path from 'path';


async function optimize(imageFilename, dir, options = {}) {
    const { widths = [], formats = ['webp'], quality = 80 } = options;
    const image = sharp(imageFilename);
    const { width } = await image.metadata();

    if (widths.length === 0) {
        widths.push(width);
    }
    const outWidths = [... new Set(widths.map(w => w === null ? width : +w))];
    outWidths.sort( (a, b) => +a < +b ? -1 : 1);

    const name = path.parse(imageFilename).name;

    const out = []
    console.log(`Optimizing ${imageFilename}`);
    for (const format of formats) {
        for (const width of outWidths) {
            const outName = `${dir}/${name}-w${width}.${format}`;
            await image.resize({ width })[format]({ quality }).toFile(outName);
            console.log(`--> ${outName}`);
            out.push({
                src: outName,
                width,
                format,
            });
        }
    }
    return out;
}

export class Optimizer {
    constructor ({ dir = '.', quality = 80 } = {}) {
        this.dir = dir;
        this.quality = quality;
    }

    async transform (src, options = {}) {
        return optimize(src, this.dir, { quality: this.quality, ...options });
    }
}

const optimizer = new Optimizer({ dir: 'img/opt', quality: 95 });

const assets = {
    'img/st-vlad.jpg': {
        widths: [null, 768, 512],
    },

    'img/st_vlad_st_olga.jpg': {
        widths: [null, 512, 256],
    },
};

for (const [src, options] of Object.entries(assets)) {
    await optimizer.transform(src, options);
}
