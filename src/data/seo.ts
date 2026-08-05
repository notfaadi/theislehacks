/**
 * Site-wide SEO keyword cluster — keep this tight and single-intent.
 * Brand queries: IsleCheat / theislecheats / The Isle cheats.
 */
export const primaryKeyword = 'IsleCheat';

/** ~7 phrases max — no synonym stuffing. */
export const metaKeywords = [
	'IsleCheat',
	'theislecheats',
	'the isle cheats',
	'isle cheats',
	'isle esp',
	'isle aimbot',
	'isle wallhack',
] as const;

export const metaKeywordsContent = metaKeywords.join(', ');

export const defaultTitle = 'IsleCheat (theislecheats) | The Isle Cheats 2026';
export const defaultDescription =
	'IsleCheat — also known as theislecheats / The Isle cheats. Undetected ESP, aimbot & wallhack for The Isle on Windows PC. $35/mo or $150 lifetime.';
