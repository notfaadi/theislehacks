import sharp from 'sharp';
import { writeFile } from 'fs/promises';
import path from 'path';

const outDir = path.resolve('public/images');
const tmp = path.resolve('.tmp-isle-fix');

/** Best ESP/gameplay stills from the user video (skip title cards / collages). */
const map = [
	{ src: 'frame-18.jpg', name: 'isle-esp-overlay' },
	{ src: 'frame-20.jpg', name: 'isle-esp-hitbox' },
	{ src: 'frame-22.jpg', name: 'isle-hacks-hero' },
	{ src: 'frame-23.jpg', name: 'isle-aimbot-menu' },
	{ src: 'frame-24.jpg', name: 'isle-esp-bots' },
	{ src: 'frame-26.jpg', name: 'isle-recoil-trainer' },
];

const extras = [
	{ src: 'frame-19.jpg', name: 'isle-wallhack-ui' },
	{ src: 'frame-21.jpg', name: 'isle-soft-aim-ui' },
	{ src: 'frame-25.jpg', name: 'isle-radar-ui' },
	{ src: 'frame-18.jpg', name: 'isle-cheats-menu' },
	{ src: 'frame-22.jpg', name: 'isle-hacks-cover' },
	{ src: 'frame-24.jpg', name: 'isle-cheats-dashboard' },
	{ src: 'frame-20.jpg', name: 'isle-aimbot-ui' },
	{ src: 'frame-26.jpg', name: 'isle-hacks-panel' },
	{ src: 'frame-23.jpg', name: 'isle-hacks-status' },
];

const contentWidths = [480, 960];
const heroWidths = [480, 640, 960, 1400];

async function writeMasterAndVariants(jpgPath, baseName, isHero = false) {
	const masterPath = path.join(outDir, `${baseName}.webp`);
	const buf = await sharp(jpgPath)
		.resize({ width: 1600, withoutEnlargement: true })
		.webp({ quality: 82, effort: 6 })
		.toBuffer();
	await writeFile(masterPath, buf);
	console.log('master', baseName, buf.length);

	const widths = isHero ? heroWidths : contentWidths;
	for (const width of widths) {
		const variant = await sharp(jpgPath)
			.resize({ width, withoutEnlargement: true })
			.webp({ quality: width <= 480 ? 70 : 78, effort: 6 })
			.toBuffer();
		await writeFile(path.join(outDir, `${baseName}-${width}w.webp`), variant);
		console.log(' variant', `${baseName}-${width}w`, variant.length);
	}
}

for (const item of map) {
	await writeMasterAndVariants(
		path.join(tmp, item.src),
		item.name,
		item.name === 'isle-hacks-hero',
	);
}

for (const item of extras) {
	await writeMasterAndVariants(path.join(tmp, item.src), item.name, false);
}

console.log('DONE');
