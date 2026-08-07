import { readFileSync, writeFileSync } from 'fs';

function patch(file, transform) {
	let s = readFileSync(file, 'utf8');
	const before = s;
	s = transform(s);
	if (s !== before) {
		writeFileSync(file, s);
		console.log('patched', file);
	} else {
		console.log('unchanged', file);
	}
}

patch('src/data/rust.ts', (s) => {
	s = s.replaceAll('/images/rust-', '/images/isle-');
	s = s.replace(
		/Distinct stills \(unique bytes\)[\s\S]*?stay stable\./,
		'The Isle cheats stills from theisle cheats reel. isle-* paths bust CDN cache.',
	);
	const alts = [
		[
			"alt: 'The Isle gameplay — dense jungle and dinosaur hunt view'",
			"alt: 'The Isle Hacks player ESP with snaplines and entity labels'",
		],
		[
			"alt: 'The Isle open-world survival landscape with dinosaurs'",
			"alt: 'The Isle Hacks speed boost overlay during a Tyrannosaurus hunt'",
		],
		[
			"alt: 'The Isle predator encounter in prehistoric terrain'",
			"alt: 'The Isle Hacks ESP size tags and radar on PC'",
		],
		[
			"alt: 'The Isle dinosaur pack roaming the island'",
			"alt: 'The Isle Hacks wireframe assist and instant rotation view'",
		],
		[
			"alt: 'The Isle cinematic island survival scene'",
			"alt: 'The Isle Hacks target box and food nest ESP cues'",
		],
		[
			"alt: 'The Isle shoreline and wilderness atmosphere'",
			"alt: 'The Isle Hacks instant growth overlay in jungle gameplay'",
		],
	];
	for (const [a, b] of alts) s = s.replaceAll(a, b);
	// sitemap captions that reuse old wording
	s = s.replaceAll(
		"caption: 'The Isle gameplay — dense jungle and dinosaur hunt view'",
		"caption: 'The Isle Hacks player ESP with snaplines and entity labels'",
	);
	s = s.replaceAll(
		"caption: 'The Isle open-world survival landscape with dinosaurs'",
		"caption: 'The Isle Hacks speed boost overlay during a Tyrannosaurus hunt'",
	);
	s = s.replaceAll(
		"caption: 'The Isle predator encounter in prehistoric terrain'",
		"caption: 'The Isle Hacks ESP size tags and radar on PC'",
	);
	s = s.replaceAll(
		"caption: 'The Isle dinosaur pack roaming the island'",
		"caption: 'The Isle Hacks wireframe assist and instant rotation view'",
	);
	s = s.replaceAll(
		"caption: 'The Isle cinematic island survival scene'",
		"caption: 'The Isle Hacks target box and food nest ESP cues'",
	);
	s = s.replaceAll(
		"caption: 'The Isle shoreline and wilderness atmosphere'",
		"caption: 'The Isle Hacks instant growth overlay in jungle gameplay'",
	);
	return s;
});

for (const f of [
	'scripts/i18n-data/constants.mjs',
	'src/data/site.ts',
	'src/components/Gallery.astro',
	'src/lib/responsive-images.ts',
]) {
	patch(f, (s) => s.replaceAll('/images/rust-', '/images/isle-'));
}
