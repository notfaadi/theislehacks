/**
 * Site-wide SEO keyword cluster — keep this tight and single-intent.
 * Brand queries: theislehacks / The Isle hacks.
 */
export const primaryKeyword = 'the isle hacks';

/** ~7 phrases max — no synonym stuffing. */
export const metaKeywords = [
	'the isle hacks',
	'theislehacks',
	'isle hacks',
	'isle esp',
	'isle aimbot',
	'isle wallhack',
	'the isle esp',
] as const;

export const metaKeywordsContent = metaKeywords.join(', ');

export const defaultTitle = 'The Isle Hacks 2026 | Undetected ESP & Aimbot';
export const defaultDescription =
	'The Isle Hacks — undetected ESP, aimbot & wallhack for The Isle on Windows PC. $35/mo or $150 lifetime.';
