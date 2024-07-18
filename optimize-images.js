import sharp from 'sharp';
import path from 'path';


async function optimize(imageFilename, dir, options = {}) {
    const { widths = [], formats = ['webp'], quality = 80, modulate, } = options;
    let image = sharp(imageFilename);
    const { width } = await image.metadata();

    if (modulate) {
        image = image.modulate(modulate);
    }

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

const optimizer = new Optimizer({ dir: 'opt', quality: 95 });

const assets = {
    'img/st-vlad.jpg': {
        widths: [null, 768, 512],
    },

    'img/st_vlad_st_olga.jpg': {
        widths: [null, 512, 256],
    },

    'img/mn.jpg': {
        widths: [null, 400]
    },

    'img/fs.png': {
        widths: [null, 400]
    },

    'lib/candle-box/img/st_vladimir.png': {
        widths: [400],
    },

    'lib/candle-box/img/st_nicolas.png': {
        widths: [400],
    },

    'lib/candle-box/img/kiev-sobor.png': {
        widths: [400],
    },

    'lib/candle-box/img/icon_theotokos.png': {
        widths: [400],
    },

    'lib/candle-box/img/comm_table.png': {
        widths: [400],
    },

    'lib/candle-box/img/center_icon.png': {
        widths: [400],
    },

    'img/front.jpg': {
        widths: [null],
        modulate: {
            brightness: 0.5,
            saturation: 0.5,
        },
    },
    'img/inside.jpg': {
        widths: [null],
        modulate: {
            brightness: 0.5,
            saturation: 0.5,
        },
    },
};

for (const [src, options] of Object.entries(assets)) {
    await optimizer.transform(src, options);
}
