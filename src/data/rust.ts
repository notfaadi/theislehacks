import { siteConfig } from './site';

/**
 * Product/gallery stills — Rust cheats ESP/aimbot screenshots (user-provided / dbd24f4 set). Brand copy stays The Isle Hacks.
 */

/** Hero / product muted autoplay loop — 0:03–0:17 of the gameplay reel. */
export const rustHeroVideo = {
	src: '/videos/the-isle-cheats-preview.mp4',
	poster: '/images/rust-hacks-hero.webp',
	title: 'The Isle Hacks hero background',
	ariaLabel: 'The Isle Hacks gameplay background — short loop',
} as const;

/**
 * Home product card preview loop (same 0:03–0:17 clip as the hero).
 * Keep this short for muted autoplay; gallery uses the full reel below.
 */
export const rustVideo = {
	src: '/videos/the-isle-cheats-preview.mp4',
	/** Distinct still — not the hero poster, so preview doesn't reuse the hero frame nearby. */
	poster: '/images/rust-esp-hitbox.webp',
	title: 'The Isle Hacks product preview',
	ariaLabel: 'The Isle Hacks gameplay preview — ESP and aimbot on PC',
	caption: 'The Isle Hacks gameplay video with ESP and aimbot',
} as const;

/** Gallery featured slot — full The Isle cheats gameplay video. */
export const rustGalleryVideo = {
	src: '/videos/the-isle-cheats.mp4',
	poster: '/images/rust-esp-hitbox.webp',
	title: 'The Isle Hacks gameplay video',
	ariaLabel: 'The Isle Hacks full gameplay video — ESP and aimbot on PC',
	caption: 'The Isle Hacks gameplay video with ESP and aimbot',
} as const;

export const rustImages = {
	hero: '/images/rust-hacks-hero.webp',
	cover: '/images/rust-esp-overlay.webp',
	logo: siteConfig.logo,
	loadoutBuilder: '/images/rust-aimbot-menu.webp',
	aimbotCombat: '/images/rust-aimbot-menu.webp',
	squadFight: '/images/rust-esp-bots.webp',
	espWallhack: '/images/rust-esp-hitbox.webp',
	cheatsPackage: '/images/rust-esp-overlay.webp',
	headerArt: '/images/rust-esp-hitbox.webp',
	battleRoyaleCombat: '/images/rust-esp-hitbox.webp',
	rebootFight: '/images/rust-esp-bots.webp',
	playerEsp: '/images/rust-esp-overlay.webp',
	zeroBuildCombat: '/images/rust-hacks-hero.webp',
	zeroBuildMode: '/images/rust-esp-bots.webp',
	battleRoyaleIsland: '/images/rust-aimbot-menu.webp',
	/** Product thumbs — five unique stills; main media is video (see ProductCard). */
	product: [
		{
			src: '/images/rust-esp-overlay.webp',
			alt: 'Rust ESP overlay with skeleton ESP, loot labels, and aimbot FOV circle',
		},
		{
			src: '/images/rust-esp-bots.webp',
			alt: 'Rust skeleton ESP on a player with loot and cupboard distance labels',
		},
		{
			src: '/images/rust-esp-hitbox.webp',
			alt: 'Rust ESP skeleton highlight on a player behind a fence with loot tags',
		},
		{
			src: '/images/rust-aimbot-menu.webp',
			alt: 'Rust aimbot ADS with green target box and kill-feed overlay',
		},
		{
			src: '/images/rust-hacks-hero.webp',
			alt: 'Rust hacks optic view with skeleton ESP and aimbot FOV circle',
		},
	],
	/**
	 * Gallery stills (grid only) — featured slot above is video; a large still
	 * under the grid fills leftover media-column height (see Gallery.astro).
	 * Six uniques (even grid rows); order differs from product thumbs.
	 */
	gallery: [
		{
			src: '/images/rust-aimbot-menu.webp',
			alt: 'Rust aimbot ADS with green target box and kill-feed overlay',
		},
		{
			src: '/images/rust-esp-overlay.webp',
			alt: 'Rust ESP overlay with skeleton ESP, loot labels, and aimbot FOV circle',
		},
		{
			src: '/images/rust-esp-bots.webp',
			alt: 'Rust skeleton ESP on a player with loot and cupboard distance labels',
		},
		{
			src: '/images/rust-esp-hitbox.webp',
			alt: 'Rust ESP skeleton highlight on a player behind a fence with loot tags',
		},
		{
			src: '/images/rust-hacks-hero.webp',
			alt: 'Rust hacks optic view with skeleton ESP and aimbot FOV circle',
		},
		{
			src: '/images/rust-recoil-trainer.webp',
			alt: 'Rust wallhack ESP showing players through stone with inventory labels',
		},
	],
	sitemap: [
		{
			src: '/images/rust-hacks-hero.webp',
			title: 'The Isle Hacks | ESP & Aimbot',
			caption: 'Rust hacks optic view with skeleton ESP and aimbot FOV circle',
		},
		{
			src: '/images/rust-esp-overlay.webp',
			title: 'Isle ESP overlay',
			caption: 'Rust ESP overlay with skeleton ESP, loot labels, and aimbot FOV circle',
		},
		{
			src: '/images/rust-esp-bots.webp',
			title: 'Isle player ESP',
			caption: 'Rust skeleton ESP on a player with loot and cupboard distance labels',
		},
		{
			src: '/images/rust-esp-hitbox.webp',
			title: 'Isle ESP highlight',
			caption: 'Rust ESP skeleton highlight on a player behind a fence with loot tags',
		},
		{
			src: '/images/rust-aimbot-menu.webp',
			title: 'Isle aimbot ADS',
			caption: 'Rust aimbot ADS with green target box and kill-feed overlay',
		},
		{
			src: '/images/rust-recoil-trainer.webp',
			title: 'Isle wallhack ESP',
			caption: 'Rust wallhack ESP showing players through stone with inventory labels',
		},
	],
} as const;
