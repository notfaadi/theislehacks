/**
 * Site-wide SEO keyword cluster — keep this tight and single-intent.
 * Brand queries: IsleHacks / theislehacks / The Isle hacks.
 */
export const primaryKeyword = 'IsleHacks';

/** ~7 phrases max — no synonym stuffing. */
export const metaKeywords = [
	'IsleHacks',
	'theislehacks',
	'the isle hacks',
	'isle hacks',
	'isle esp',
	'isle aimbot',
	'isle wallhack',
] as const;

export const metaKeywordsContent = metaKeywords.join(', ');

export const defaultTitle = 'IsleHacks (theislehacks) | The Isle Hacks 2026';
export const defaultDescription =
	'IsleHacks — also known as theislehacks / The Isle hacks. Undetected ESP, aimbot & wallhack for The Isle on Windows PC. $35/mo or $150 lifetime.';
