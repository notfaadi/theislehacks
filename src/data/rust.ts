import { siteConfig } from './site';

/**
 * The Isle cheats stills from theisle cheats reel. isle-* paths bust CDN cache.
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
			alt: 'The Isle Hacks player ESP with snaplines and entity labels',
		},
		{
			src: '/images/isle-esp-bots.webp',
			alt: 'The Isle Hacks speed boost overlay during a Tyrannosaurus hunt',
		},
		{
			src: '/images/isle-esp-hitbox.webp',
			alt: 'The Isle Hacks ESP size tags and radar on PC',
		},
		{
			src: '/images/isle-aimbot-menu.webp',
			alt: 'The Isle Hacks wireframe assist and instant rotation view',
		},
		{
			src: '/images/isle-hacks-hero.webp',
			alt: 'The Isle Hacks target box and food nest ESP cues',
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
			alt: 'The Isle Hacks wireframe assist and instant rotation view',
		},
		{
			src: '/images/isle-esp-overlay.webp',
			alt: 'The Isle Hacks player ESP with snaplines and entity labels',
		},
		{
			src: '/images/isle-esp-bots.webp',
			alt: 'The Isle Hacks speed boost overlay during a Tyrannosaurus hunt',
		},
		{
			src: '/images/isle-esp-hitbox.webp',
			alt: 'The Isle Hacks ESP size tags and radar on PC',
		},
		{
			src: '/images/isle-hacks-hero.webp',
			alt: 'The Isle Hacks target box and food nest ESP cues',
		},
		{
			src: '/images/isle-recoil-trainer.webp',
			alt: 'The Isle Hacks instant growth overlay in jungle gameplay',
		},
	],
	sitemap: [
		{
			src: '/images/isle-hacks-hero.webp',
			title: 'The Isle Hacks | ESP & Aimbot',
			caption: 'The Isle Hacks target box and food nest ESP cues',
		},
		{
			src: '/images/isle-esp-overlay.webp',
			title: 'Isle ESP overlay',
			caption: 'The Isle Hacks player ESP with snaplines and entity labels',
		},
		{
			src: '/images/isle-esp-bots.webp',
			title: 'Isle survival landscape',
			caption: 'The Isle Hacks speed boost overlay during a Tyrannosaurus hunt',
		},
		{
			src: '/images/isle-esp-hitbox.webp',
			title: 'Isle predator view',
			caption: 'The Isle Hacks ESP size tags and radar on PC',
		},
		{
			src: '/images/isle-aimbot-menu.webp',
			title: 'Isle pack roam',
			caption: 'The Isle Hacks wireframe assist and instant rotation view',
		},
		{
			src: '/images/isle-recoil-trainer.webp',
			title: 'Isle wilderness',
			caption: 'The Isle Hacks instant growth overlay in jungle gameplay',
		},
	],
} as const;
