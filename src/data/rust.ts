import { siteConfig } from './site';

/**
 * Product/gallery stills — Rust cheats ESP/aimbot screenshots (user-provided / dbd24f4 set). Brand copy stays The Isle Hacks.
 */

/** Hero / product muted autoplay loop — 0:03–0:17 of the gameplay reel. */
export const rustHeroVideo = {
	src: '/videos/the-isle-cheats-preview.mp4',
	poster: '/images/isle-hacks-hero.webp',
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
	poster: '/images/isle-esp-hitbox.webp',
	title: 'The Isle Hacks product preview',
	ariaLabel: 'The Isle Hacks gameplay preview — ESP and aimbot on PC',
	caption: 'The Isle Hacks gameplay video with ESP and aimbot',
} as const;

/** Gallery featured slot — full The Isle cheats gameplay video. */
export const rustGalleryVideo = {
	src: '/videos/the-isle-cheats.mp4',
	poster: '/images/isle-esp-hitbox.webp',
	title: 'The Isle Hacks gameplay video',
	ariaLabel: 'The Isle Hacks full gameplay video — ESP and aimbot on PC',
	caption: 'The Isle Hacks gameplay video with ESP and aimbot',
} as const;

export const rustImages = {
	hero: '/images/isle-hacks-hero.webp',
	cover: '/images/isle-esp-overlay.webp',
	logo: siteConfig.logo,
	loadoutBuilder: '/images/isle-aimbot-menu.webp',
	aimbotCombat: '/images/isle-aimbot-menu.webp',
	squadFight: '/images/isle-esp-bots.webp',
	espWallhack: '/images/isle-esp-hitbox.webp',
	cheatsPackage: '/images/isle-esp-overlay.webp',
	headerArt: '/images/isle-esp-hitbox.webp',
	battleRoyaleCombat: '/images/isle-esp-hitbox.webp',
	rebootFight: '/images/isle-esp-bots.webp',
	playerEsp: '/images/isle-esp-overlay.webp',
	zeroBuildCombat: '/images/isle-hacks-hero.webp',
	zeroBuildMode: '/images/isle-esp-bots.webp',
	battleRoyaleIsland: '/images/isle-aimbot-menu.webp',
	/** Product thumbs — five unique stills; main media is video (see ProductCard). */
	product: [
		{
			src: '/images/isle-esp-overlay.webp',
			alt: 'Rust ESP overlay showing players, loot, and distance tags',
		},
		{
			src: '/images/isle-esp-bots.webp',
			alt: 'Rust ESP bots training range with distance and weapon labels',
		},
		{
			src: '/images/isle-esp-hitbox.webp',
			alt: 'Rust ESP hitbox box highlight on a player',
		},
		{
			src: '/images/isle-aimbot-menu.webp',
			alt: 'Rust aimbot menu with silent aim and ESP boxes',
		},
		{
			src: '/images/isle-hacks-hero.webp',
			alt: 'Rust hacks hero view through optic with ESP skeleton',
		},
	],
	/**
	 * Gallery stills (grid only) — featured slot above is video; a large still
	 * under the grid fills leftover media-column height (see Gallery.astro).
	 * Six uniques (even grid rows); order differs from product thumbs.
	 */
	gallery: [
		{
			src: '/images/isle-aimbot-menu.webp',
			alt: 'Rust aimbot menu with silent aim and ESP boxes',
		},
		{
			src: '/images/isle-esp-overlay.webp',
			alt: 'Rust ESP overlay showing players, loot, and distance tags',
		},
		{
			src: '/images/isle-esp-bots.webp',
			alt: 'Rust ESP bots training range with distance and weapon labels',
		},
		{
			src: '/images/isle-esp-hitbox.webp',
			alt: 'Rust ESP hitbox box highlight on a player',
		},
		{
			src: '/images/isle-hacks-hero.webp',
			alt: 'Rust hacks hero view through optic with ESP skeleton',
		},
		{
			src: '/images/isle-recoil-trainer.webp',
			alt: 'Rust wallhack ESP still for gallery',
		},
	],
	sitemap: [
		{
			src: '/images/isle-hacks-hero.webp',
			title: 'The Isle Hacks | ESP & Aimbot',
			caption: 'Rust hacks hero view through optic with ESP skeleton',
		},
		{
			src: '/images/isle-esp-overlay.webp',
			title: 'Isle ESP overlay',
			caption: 'Rust ESP overlay showing players, loot, and distance tags',
		},
		{
			src: '/images/isle-esp-bots.webp',
			title: 'Isle survival landscape',
			caption: 'Rust ESP bots training range with distance and weapon labels',
		},
		{
			src: '/images/isle-esp-hitbox.webp',
			title: 'Isle predator view',
			caption: 'Rust ESP hitbox box highlight on a player',
		},
		{
			src: '/images/isle-aimbot-menu.webp',
			title: 'Isle pack roam',
			caption: 'Rust aimbot menu with silent aim and ESP boxes',
		},
		{
			src: '/images/isle-recoil-trainer.webp',
			title: 'Isle wilderness',
			caption: 'Rust wallhack ESP still for gallery',
		},
	],
} as const;
