/**
 * Site-wide SEO keyword cluster — keep this tight and single-intent.
 * Brand queries: theislehacks / The Isle hacks.
 */
export const primaryKeyword = 'theislehacks';

/** ~7 phrases max — no synonym stuffing. */
export const metaKeywords = [
	'theislehacks',
	'the isle hacks',
	'isle hacks',
	'isle esp',
	'isle aimbot',
	'isle wallhack',
	'the isle esp',
] as const;

export const metaKeywordsContent = metaKeywords.join(', ');

export const defaultTitle = 'theislehacks | The Isle Hacks 2026';
export const defaultDescription =
	'theislehacks — The Isle hacks with undetected ESP, aimbot & wallhack for Windows PC. $35/mo or $150 lifetime.';
