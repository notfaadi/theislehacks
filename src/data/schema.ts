import { productInfo, siteConfig } from './site';
import type { PageId } from './i18n/routing';

const priceValidUntil = '2027-12-31';

export function buildAggregateOffer(canonicalURL: string) {
	return {
		'@type': 'AggregateOffer',
		lowPrice: Math.min(...productInfo.plans.map((p) => p.price)).toFixed(2),
		highPrice: Math.max(...productInfo.plans.map((p) => p.price)).toFixed(2),
		priceCurrency: productInfo.currency,
		offerCount: productInfo.plans.length,
		url: canonicalURL,
		offers: productInfo.plans.map((plan) => ({
			'@type': 'Offer',
			name: `${productInfo.name} ${plan.label}`,
			price: plan.price.toFixed(2),
			priceCurrency: productInfo.currency,
			priceValidUntil,
			availability: 'https://schema.org/InStock',
			url: siteConfig.checkoutUrl,
			seller: { '@id': `${siteConfig.url}/#organization` },
		})),
	};
}

export function buildSoftwareApplicationSchema(canonicalURL: string, heroImage: string) {
	return {
		'@type': 'SoftwareApplication',
		'@id': `${canonicalURL}#software`,
		name: productInfo.name,
		alternateName: [...siteConfig.alternateNames],
		applicationCategory: 'GameApplication',
		operatingSystem: 'Windows',
		description: productInfo.summary,
		url: canonicalURL,
		image: heroImage,
		brand: { '@type': 'Brand', name: productInfo.brand },
		offers: buildAggregateOffer(canonicalURL),
	};
}

export function buildContactPageSchema(canonicalURL: string) {
	return {
		'@type': 'ContactPage',
		'@id': `${canonicalURL}#contactpage`,
		url: canonicalURL,
		name: `Contact ${siteConfig.name}`,
		description: `Support and billing contact for ${productInfo.name} on ${productInfo.game}.`,
		isPartOf: { '@id': `${siteConfig.url}/#website` },
		about: { '@id': `${siteConfig.url}/#organization` },
		mainEntity: {
			'@type': 'Organization',
			'@id': `${siteConfig.url}/#organization`,
			name: siteConfig.name,
			email: siteConfig.supportEmail,
			url: siteConfig.url,
		},
	};
}

export function buildFaqSchemaNode(
	canonicalURL: string,
	faqs: ReadonlyArray<{ question: string; answer: string }>,
) {
	return {
		'@type': 'FAQPage',
		'@id': `${canonicalURL}#faq`,
		mainEntity: faqs.map((item) => ({
			'@type': 'Question',
			name: item.question,
			acceptedAnswer: { '@type': 'Answer', text: item.answer },
		})),
	};
}

/** Page-specific FAQ clusters for FAQ rich results on pillar landing pages. */
export const pageFaqClusters: Partial<
	Record<PageId, ReadonlyArray<{ question: string; answer: string }>>
> = {
	hacks: [
		{
			question: 'What are The Isle Hacks?',
			answer:
				'The Isle Hacks is a Windows PC package for The Isle with ESP, wallhack, and aimbot controls. Licenses include EAC maintenance updates and setup support.',
		},
		{
			question: 'Are The Isle Hacks permanently undetected?',
			answer:
				'No package can promise that. We rebuild after Easy Anti-Cheat and game patches and post status on Updates. Check there before you load in.',
		},
		{
			question: 'What is included in the The Isle Hacks package?',
			answer:
				'Player ESP, loot markers, radar cues, and configurable aimbot in one license. See Features, ESP, and Aimbot for control detail.',
		},
	],
	'rust-esp': [
		{
			question: 'What is an Isle wallhack?',
			answer:
				'An Isle wallhack is an ESP overlay that shows enemy players and loot through terrain. The Isle Hacks wallhack includes distance readouts, team colours, and toggleable categories for PVE and PVP on The Isle.',
		},
		{
			question: 'Does The Isle Hacks include a radar hack?',
			answer:
				'Yes. The Isle Hacks includes 2D radar-style overlays that highlight nearby threats outside your direct view — useful for reading flanks around dens and hunt routes.',
		},
		{
			question: 'Does this fit dens and hunt play?',
			answer:
				'Yes. ESP and radar help you read nearby players and loot; aimbot covers the firefight. Tuned for PVE and PVP on The Isle.',
		},
	],
	'rust-aimbot': [
		{
			question: 'What is Isle soft aim?',
			answer:
				'Isle soft aim is configurable aim assist with smoothness, FOV, and bone priority controls. It ships bundled with ESP and radar in the The Isle Hacks license for Windows PC.',
		},
		{
			question: 'Can I use Isle aimbot with a controller?',
			answer:
				'Yes. The Isle Hacks supports controller play on Windows PC. Tune FOV and smoothness per weapon profile after setup.',
		},
		{
			question: 'Are The Isle Hacks permanently undetected?',
			answer:
				'No package can promise that. We rebuild after Easy Anti-Cheat and game patches and post status on Updates. Check there before you load in.',
		},
	],
	pricing: [
		{
			question: 'How are The Isle Hacks licenses delivered?',
			answer:
				'Digitally after payment confirmation. Timing can vary by payment method — keep your order confirmation if you contact support.',
		},
		{
			question: 'What does the $35/month plan include?',
			answer:
				'The monthly license includes ESP, wallhack overlays, radar, and aimbot controls with EAC maintenance updates for The Isle on Windows PC.',
		},
		{
			question: 'Is the $150 lifetime license worth it?',
			answer:
				'Lifetime pays off if you play The Isle across multiple seasons. It includes the same feature stack as monthly with long-term maintenance after EAC patches.',
		},
	],
	features: [
		{
			question: 'What is included in The Isle Hacks?',
			answer:
				'Player ESP, loot markers, radar cues, and configurable aimbot in one license. See Features, ESP, and Aimbot for control detail.',
		},
		{
			question: 'Does The Isle Hacks work on Windows PC?',
			answer:
				'Yes — The Isle Hacks is built for The Isle on Windows 10 and 11 with in-client toggles for ESP, radar, and aimbot.',
		},
		{
			question: 'How does Easy Anti-Cheat (EAC) affect The Isle Hacks?',
			answer:
				'Easy Anti-Cheat (EAC) monitors The Isle on Windows PC. The Isle Hacks publishes maintenance notes after patches that may require a rebuild. Read the EAC bypass guide page for how updates are handled.',
		},
	],
};

const schemaRichPages = new Set<PageId>([
	'hacks',
	'rust-esp',
	'rust-aimbot',
	'pricing',
	'features',
	'faq',
	'support',
]);

export function buildPageExtraGraph(
	pageId: PageId,
	canonicalURL: string,
	heroImage: string,
	allFaqs: ReadonlyArray<{ question: string; answer: string }>,
): Record<string, unknown>[] {
	if (!schemaRichPages.has(pageId)) return [];

	const nodes: Record<string, unknown>[] = [];

	if (pageId === 'support') {
		nodes.push(buildContactPageSchema(canonicalURL));
		return nodes;
	}

	if (pageId !== 'faq') {
		nodes.push(buildSoftwareApplicationSchema(canonicalURL, heroImage));
	}

	const faqs =
		pageId === 'faq' ? allFaqs : (pageFaqClusters[pageId] ?? []);
	if (faqs.length > 0) {
		nodes.push(buildFaqSchemaNode(canonicalURL, faqs));
	}

	return nodes;
}
