import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta, EXT } from './constants.mjs';

/** Richest English page content — source of truth for structure. */
export const enPages = {
	home: {
		title: 'theislehacks | The Isle Hacks 2026',
		description:
			'theislehacks — The Isle hacks with undetected ESP, aimbot & wallhack for Windows PC. $35/mo or $150 lifetime.',
		h1: 'theislehacks — The Isle Hacks with ESP, Aimbot & Wallhack',
		intro:
			'theislehacks is the Windows PC package for The Isle hacks: player ESP, aimbot controls, and wallhack overlays built for hunt pressure and survival fights.',
		imageAlt: 'theislehacks aimbot holographic sight with ESP skeleton and red head lock',
		galleryTitle: 'theislehacks visuals',
		ctaPrimary: 'Buy theislehacks',
		ctaSecondary: 'See all features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Built for hunt pressure',
				'The Isle punishes incomplete information. theislehacks puts ESP, wallhack, and aimbot in one license so you can read dens, hunt routes, and survival fights before you commit.',
				`Client and anti-cheat updates come from ${EXT.epic} and ${EXT.eac}. When a patch needs a rebuild, we post status on the <a href="/updates/">Updates page</a> — no permanent “undetected forever” promises.`,
				'Monthly ($35) and lifetime ($150) licenses ship digitally after payment confirmation, with maintenance rebuilds when EAC or game updates require them.',
				'Compare the <a href="/rust-hacks/">theislehacks guide</a>, <a href="/rust-esp/">ESP</a>, <a href="/rust-aimbot/">Aimbot</a>, and <a href="/undetected-rust-cheats/">undetected status</a> pages before checkout.',
			),
			section(
				'One license, clear controls',
				'Instead of stacking separate tools, you get player ESP, loot markers, radar cues, and aimbot profiles in a single package aimed at PVE and PVP play.',
				'Details live on the <a href="/rust-esp/">ESP</a>, <a href="/rust-aimbot/">Aimbot</a>, <a href="/rust-wallhack/">wallhack</a>, and <a href="/features/">features</a> pages — or jump to <a href="/pricing/">Pricing</a> for plans.',
				`On patch mornings, check ${EXT.status}, then confirm our maintenance notes so you are not loading an outdated build.`,
				'Ready? Open <a href="/pricing/">Pricing</a>, follow <a href="/setup/">Setup</a> after delivery, and keep <a href="/faq/">FAQ</a> / <a href="/support/">Support</a> handy.',
			),
		],
	},
	'rust-esp': {
		title: 'Isle ESP 2026 | Player Boxes & Wallhack',
		description:
			'theislehacks ESP for The Isle — player boxes, loot markers, and distance readouts so you read dens and hunt routes before you push.',
		h1: 'Isle ESP — Player Boxes & Wallhack',
		intro:
			'Visibility tools for The Isle. Read nearby players, loot, and distance before you commit to a fight — with toggleable ESP wallhack overlays.',
		imageAlt: 'Isle ESP with green skeleton, bounding box, loot labels, and distances',
		galleryTitle: 'Isle ESP overlay visuals',
		ctaPrimary: 'Buy theislehacks',
		ctaSecondary: 'Isle wallhack guide',
		ctaSecondaryHref: '/rust-wallhack/',
		sections: [
			section(
				'What Isle ESP solves in survival',
				'The Isle maps punish incomplete information. theislehacks ESP wallhack helps you spot enemy squads early, notice vehicles before they push your position, and mark chests worth the detour.',
				'On survival, monuments, and competitive lobbies, that visibility gap is often the difference between a clean third-party and a wiped squad. ESP ships bundled with radar overlays and Aimbot in one license.',
				`The Isle’s live seasons and map updates are published by ${EXT.epic}. When POIs or loot rules shift, ESP categories stay useful because they track players and containers — not a single static landmark.`,
			),
			section(
				'Player, vehicle, and loot ESP wallhack categories',
				'Toggle enemy player outlines, vehicle threat cues, supply-drop awareness markers, and loot or chest pins so only BR-critical ESP wallhack overlays stay active during rotations.',
				'Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports dens and hunt routes lobbies alike.',
				'Compare category detail on the <a href="/rust-wallhack/">wallhack page</a> and pair visibility with the <a href="/rust-radar-hack/">radar hack</a> for flanks outside your FOV.',
				[
					'Enemy player ESP outlines with distance',
					'Loot and chest markers for faster rotations',
					'Vehicle and supply-drop threat cues',
					'Toggleable categories to reduce overlay noise',
				],
			),
			section(
				'Undetected ESP with EAC maintenance',
				'theislehacks ESP wallhack is maintained for The Isle with rebuilds after Easy Anti-Cheat patches. Check the <a href="/updates/">Updates page</a> before you queue — no cheat guarantees permanent undetected status.',
				`Read ${EXT.eac} for how anti-cheat updates ship, then cross-check our <a href="/eac-bypass-rust/">EAC bypass maintenance guide</a> after major patches.`,
				'Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href="/setup/">Setup guide</a> and tune overlays before your first ranked block.',
			),
			section(
				'ESP next steps — Aimbot, pricing, and support',
				'ESP alone wins information wars; Aimbot covers the firefight. Review <a href="/rust-aimbot/">Aimbot controls</a> if you want one license for visibility and assist.',
				'Compare monthly ($35) and lifetime ($150) on <a href="/pricing/">Pricing</a>, then keep <a href="/support/">Support</a> ready if activation needs a human reply.',
				'Still researching? The <a href="/best-rust-cheats/">best The Isle hacks guide</a> and <a href="/rust-cheats-2026/">2026 buyer guide</a> summarize the full stack.',
			),
		],
	},
	'rust-aimbot': {
		title: 'Isle Aimbot 2026 | Soft Aim for PC & Controllers',
		description:
			'theislehacks aimbot with soft aim for The Isle. Tune FOV, bone priority, and hotkeys — bundled with ESP in one license.',
		h1: 'Isle Aimbot — Soft Aim for PC & Controllers',
		intro:
			'Configurable Aimbot tools for The Isle. Smoothness, FOV, bone priority, and per-weapon profiles — bundled with ESP and radar in one license.',
		imageAlt: 'Rust aimbot menu with red skeleton ESP, silent aim, and feature toggles',
		galleryTitle: 'Isle Aimbot combat previews',
		ctaPrimary: 'Buy theislehacks',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/rust-esp/',
		sections: [
			section(
				'Aimbot tuned for The Isle combat pace',
				'The Isle mixes long-range AR fights with close-quarters SMG pushes. theislehacks Aimbot includes smoothness, FOV, and sensitivity controls tuned for that pace — with hotkey toggles mid-match.',
				'Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during squad fights and reboot rounds.',
				`Weapon balance and season rules change via ${EXT.rust}. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live TTK windows.`,
			),
			section(
				'Per-weapon Aimbot profiles',
				'Save separate Aimbot profiles for assault rifles, SMGs, and snipers. Switch between long-range AR beams and close-quarters room clears without reopening menus every spawn.',
				'Prefer softer tracking? Read the <a href="/rust-soft-aim/">soft aim guide</a>. Want the search term most players use? See <a href="/rust-aimbot-hack/">aimbot hack</a>.',
				'Aimbot ships alongside <a href="/rust-esp/">ESP wallhack</a> and <a href="/rust-radar-hack/">2D radar</a> in the same theislehacks license.',
				[
					'Smoothness, FOV, and sensitivity sliders',
					'Bone priority and threat-based targeting',
					'Hotkeys to toggle Aimbot mid-match',
					'Per-weapon profile slots for AR / SMG / sniper',
				],
			),
			section(
				'EAC maintenance for undetected Aimbot',
				'theislehacks rebuilds Aimbot behavior when Easy Anti-Cheat or major The Isle patches land. Maintenance notes appear on the <a href="/updates/">Updates page</a> so you know when a new build is live.',
				`Cross-check service health on ${EXT.status} and anti-cheat context on ${EXT.eac}, then follow our <a href="/eac-bypass-rust/">EAC maintenance guide</a> before queueing on patch day.`,
				'Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.',
			),
			section(
				'Buy Aimbot with ESP — pricing and setup',
				'Every plan includes Aimbot plus ESP and radar. Compare options on <a href="/pricing/">Pricing</a>, then activate with the <a href="/setup/">Setup guide</a>.',
				'Questions about delivery or profiles? Use <a href="/faq/">FAQ</a> or email <a href="/support/">Support</a> with your order ID.',
				'Want the full control list first? Open <a href="/features/">Features</a> before checkout.',
			),
		],
	},
	features: {
		title: 'theislehacks Features | ESP, Soft Aim, Cloud DMA',
		description:
			'Full theislehacks feature list for The Isle: ESP, soft aim, radar, and in-match toggles. Review every control before you buy.',
		h1: 'theislehacks Features — Full Control List',
		intro:
			'Every ESP wallhack, radar, and Aimbot control included in the theislehacks package for The Isle on Windows PC.',
		imageAlt: 'Isle ESP boxes, weapon labels, and distances on UKN practice bots',
		galleryTitle: 'theislehacks feature gallery',
		ctaPrimary: 'Buy theislehacks',
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'ESP wallhack and visibility features',
				'Enemy player ESP wallhack, vehicle and supply-drop threat cues, loot and chest markers, distance readouts, snaplines, and toggleable ESP categories for BR-critical overlays only.',
				'Team and enemy colour coding supports dens and hunt routes. Deep-dive the <a href="/rust-esp/">ESP page</a> and <a href="/rust-wallhack/">wallhack guide</a> for category-level detail.',
				`Map and loot systems evolve with ${EXT.epic} season updates — toggleable ESP categories keep overlays useful when POIs rotate.`,
			),
			section(
				'Radar hack and Aimbot controls',
				'2D radar overlay with directional threat cues, configurable range for rotations and final circles, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-weapon profiles.',
				'All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live The Isle sessions. See <a href="/rust-radar-hack/">radar</a> and <a href="/rust-aimbot/">Aimbot</a> for settings walkthroughs.',
				'Prefer a menu-first workflow? The <a href="/rust-mod-menu/">mod menu page</a> explains mid-match toggles without alt-tabbing.',
			),
			section(
				'Licensing, delivery, and EAC maintenance',
				'Monthly ($35) and lifetime ($150) licenses with instant digital delivery. EAC maintenance rebuilds publish on the <a href="/updates/">Updates page</a> after anti-cheat or game patches.',
				`Monitor ${EXT.status} on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href="/support/">Support</a> and support@theislehacks.com.`,
				'Next step: compare plans on <a href="/pricing/">Pricing</a> or read <a href="/undetected-rust-cheats/">how undetected maintenance works</a>.',
			),
		],
	},
	pricing: {
		title: 'theislehacks Pricing | $35/mo or $150 Life',
		description:
			'theislehacks pricing for The Isle: $35/month or $150 lifetime. ESP, soft aim, and radar with instant digital delivery.',
		h1: 'theislehacks Pricing — Monthly & Lifetime',
		intro:
			'Choose monthly or lifetime access to theislehacks — ESP, radar, and Aimbot for The Isle on Windows PC. Instant digital delivery after payment.',
		imageAlt: 'Isle ESP overlay with skeleton ESP and loot inventory labels',
		galleryTitle: 'theislehacks package visuals',
		ctaPrimary: 'Buy theislehacks',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'Monthly and lifetime theislehacks plans',
				'Monthly license: $35 USD for 30 days of full ESP wallhack, radar hack, and Aimbot access with EAC maintenance included during your term.',
				'Lifetime license: $150 USD for long-term access to the same undetected theislehacks package — ideal if you play Rust regularly across seasons.',
				'Both plans unlock the same feature stack described on <a href="/features/">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.',
			),
			section(
				'What every plan includes',
				'Player ESP wallhack, loot markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after Easy Anti-Cheat or major The Isle patches.',
				`Season calendars and client updates come from ${EXT.rust}. Active licenses receive rebuild access when we publish maintenance on <a href="/updates/">Updates</a>.`,
				'Digital delivery starts after payment confirmation. Keep your order reference for <a href="/support/">Support</a> requests and follow <a href="/setup/">Setup</a> for first launch.',
			),
			section(
				'Refund, billing, and buying checklist',
				'Review the <a href="/refund-policy/">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.',
				'Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.',
				'Still comparing tools? Read <a href="/best-rust-cheats/">best The Isle hacks</a>, <a href="/undetected-rust-cheats/">undetected status</a>, and <a href="/faq/">FAQ</a> before you checkout.',
			),
		],
	},
	setup: {
		title: 'theislehacks Setup | PC & Controller Guide',
		description:
			'Set up theislehacks on Windows PC — activate your license, load ESP and aimbot profiles, and get ready for The Isle.',
		h1: 'theislehacks Setup — PC & Controller Guide',
		intro:
			'Install and configure theislehacks for The Isle on Windows 10 or 11. Activate your license, load ESP and Aimbot profiles, then start your first session.',
		imageAlt: 'Rust aimbot cheats menu with red skeleton ESP and hotkey toggles',
		galleryTitle: 'theislehacks setup visuals',
		ctaPrimary: 'Buy theislehacks',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'Before you install theislehacks',
				'Confirm your order email and license details. Check the <a href="/updates/">Updates page</a> for the latest EAC maintenance build before launching Rust.',
				`Also glance at ${EXT.status} if Steam / game services look unstable on patch day — a platform outage is not a license fault.`,
				'theislehacks requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.',
			),
			section(
				'Activate ESP wallhack and Aimbot profiles',
				'Follow the delivery instructions in your license email. Load default ESP wallhack categories for players, loot, and vehicles — then tune radar range and Aimbot smoothness to your playstyle.',
				'Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-match. Details for each module live on <a href="/rust-esp/">ESP</a>, <a href="/rust-aimbot/">Aimbot</a>, and <a href="/rust-mod-menu/">mod menu</a>.',
				'Prefer a soft tracking feel? Start with the <a href="/rust-soft-aim/">soft aim</a> recommendations before raising aggressiveness.',
			),
			section(
				'After Rust or Easy Anti-Cheat patches',
				'When Afterthought ships a major The Isle update or Easy Anti-Cheat patch, revisit Updates before queueing. Download maintenance rebuilds when posted.',
				`Official anti-cheat background: ${EXT.eac}. Our practical workflow is documented on the <a href="/eac-bypass-rust/">EAC bypass page</a> and <a href="/undetected-rust-cheats/">undetected guide</a>.`,
				'Contact <a href="/support/">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.',
			),
		],
	},
	updates: {
		title: 'theislehacks Updates | EAC Maintenance Log',
		description:
			'theislehacks update log for The Isle. Check rebuild status after game or anti-cheat patches before you queue.',
		h1: 'theislehacks Updates — Maintenance Log',
		intro:
			'Track rebuild notes for the theislehacks ESP, radar, and Aimbot package. Check here before queueing after major updates.',
		imageAlt: 'Isle ESP green hitbox wallhack on a hazmat-suited player',
		galleryTitle: 'Rust patch and maintenance visuals',
		ctaPrimary: 'Buy theislehacks',
		ctaSecondary: 'Undetected status guide',
		ctaSecondaryHref: '/undetected-rust-cheats/',
		sections: [
			section(
				'Why the Updates page matters',
				'Rust and Easy Anti-Cheat receive frequent patches. theislehacks publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.',
				`Use ${EXT.status} for Steam platform health and this page for theislehacks build status — both matter on big update days.`,
				'Checking this log before you queue reduces surprises after game days or seasonal launches on survival and monuments.',
			),
			section(
				'What maintenance entries cover',
				'Entries note Easy Anti-Cheat compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after weapon balance changes, and digital delivery of new builds to active licenses.',
				'Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href="/pricing/">Pricing</a> if you need to renew.',
				'For context on why rebuilds happen, read the <a href="/eac-bypass-rust/">EAC bypass guide</a> and <a href="/undetected-rust-cheats/">undetected The Isle hacks</a> explainer.',
			),
			section(
				'Staying undetected after patches',
				'No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.',
				`Follow season notes from ${EXT.rust}, then confirm our rebuild is live before ranked.`,
				'For urgent status questions after an EAC update, contact <a href="/support/">Support</a> with your license tier and last played build version.',
			),
		],
	},
	faq: {
		title: 'theislehacks FAQ | ESP, Soft Aim & EAC Answers',
		description:
			'theislehacks FAQ — answers on ESP, aimbot, delivery, pricing, and support for The Isle on Windows PC.',
		h1: 'theislehacks FAQ — Common Questions',
		intro:
			'Answers about theislehacks — ESP, radar, Aimbot, checkout, and Windows PC compatibility for The Isle.',
		imageAlt: 'Isle ESP boxes and distance labels on UKN practice bots',
		galleryTitle: 'theislehacks FAQ visuals',
		ctaPrimary: 'Buy theislehacks',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'What is theislehacks?',
				'theislehacks is an undetected cheat package for The Isle on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with EAC maintenance updates.',
				'Packages cover survival and monuments. Explore <a href="/features/">Features</a> for the full control list and <a href="/rust-esp/">ESP</a> / <a href="/rust-aimbot/">Aimbot</a> for module detail.',
				`The Isle itself is published by ${EXT.epic}. Cheats are third-party tools and may violate The Isle’s rules — use is at your own risk.`,
			),
			section(
				'Are theislehacks undetected in 2026?',
				'theislehacks is maintained with rebuilds after Easy Anti-Cheat and game patches. Check the <a href="/updates/">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.',
				'Read <a href="/undetected-rust-cheats/">undetected The Isle hacks</a> and the <a href="/eac-bypass-rust/">EAC guide</a> for the maintenance workflow.',
				'Responsible settings and reading maintenance notes before queueing are essential.',
			),
			section(
				'Delivery, pricing, and support',
				'Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href="/pricing/">Pricing</a>.',
				'Contact support@theislehacks.com or the <a href="/support/">Support page</a> with order details for setup or billing help. First launch steps are on <a href="/setup/">Setup</a>.',
				'Refund eligibility is covered in the <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	support: {
		title: 'theislehacks Support | Help & Contact',
		description:
			'Contact theislehacks support for licenses, setup help, and billing questions. Include your order ID for faster replies.',
		h1: 'theislehacks Support — Contact Us',
		intro:
			'Get help with theislehacks licenses, checkout, ESP setup, and Aimbot profiles for The Isle on Windows PC.',
		imageAlt: 'theislehacks aimbot sight with ESP skeleton and red head lock',
		galleryTitle: 'theislehacks support resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'When to contact support',
				'Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after EAC maintenance rebuilds.',
				'Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.',
				'Many answers already live in <a href="/faq/">FAQ</a>, <a href="/setup/">Setup</a>, and <a href="/updates/">Updates</a> — check those first for faster resolution.',
			),
			section(
				'Response times and scope',
				'Support requests are reviewed daily. theislehacks support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Afterthought bans.',
				`Account and game policy questions belong with ${EXT.epic}. We can help with license delivery and product configuration only.`,
				'Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.',
			),
			section(
				'Self-service resources',
				'Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. EAC bypass notes live on the dedicated <a href="/eac-bypass-rust/">Easy Anti-Cheat page</a>.',
				'Email: support@theislehacks.com',
				'Ready to purchase or renew? Open <a href="/pricing/">Pricing</a>. Need feature detail first? See <a href="/features/">Features</a>.',
			),
		],
	},
	undetected: {
		title: 'Undetected theislehacks 2026 | EAC Safe',
		description:
			'How theislehacks stays maintained for The Isle after Easy Anti-Cheat patches. Check status before you queue.',
		h1: 'Undetected theislehacks — EAC Maintenance',
		intro:
			'How theislehacks stays maintained for The Isle after Easy Anti-Cheat patches — ESP, radar, and Aimbot rebuilds for Windows PC.',
		imageAlt: 'Isle wallhack green hitbox ESP on a hazmat suit player',
		galleryTitle: 'Undetected theislehacks visuals',
		ctaPrimary: 'Buy theislehacks',
		ctaSecondary: 'EAC bypass guide',
		ctaSecondaryHref: '/eac-bypass-rust/',
		sections: [
			section(
				'What undetected means for theislehacks',
				'Undetected theislehacks means the package is actively maintained against Easy Anti-Cheat and major The Isle patches — not that detection is impossible forever.',
				'Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after Afterthought security updates.',
				`Anti-cheat technology is documented by ${EXT.eac}; Rust client updates ship through ${EXT.epic}. Undetected status is an ongoing process tied to those releases.`,
			),
			section(
				'EAC maintenance workflow',
				'When Easy Anti-Cheat or The Isle updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href="/updates/">Updates page</a>, and delivers rebuilt builds to active licenses.',
				`On patch mornings, also check ${EXT.status} for platform outages that can look like product failures.`,
				'Deep technical workflow: <a href="/eac-bypass-rust/">EAC bypass Rust guide</a>. Feature stack: <a href="/features/">Features</a>.',
			),
			section(
				'Responsible use and next steps',
				'Combine maintenance with conservative in-game settings. Read the <a href="/faq/">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.',
				'Lifetime and monthly plans include rebuild access during active terms — see <a href="/pricing/">Pricing</a>.',
				'New buyers should also read <a href="/rust-cheats-2026/">The Isle hacks 2026</a> and complete <a href="/setup/">Setup</a> after delivery.',
			),
		],
	},
	wallhack: {
		title: 'Rust Wallhack 2026 | ESP Boxes & Visibility',
		description:
			'theislehacks wallhack ESP for The Isle — player boxes and loot markers through terrain. See overlays and buy.',
		h1: 'Rust Wallhack — ESP Boxes & Visibility',
		intro:
			'Wallhack ESP for The Isle — see players, loot, and threats through toggleable overlays built for hunt and survival play.',
		imageAlt: 'Isle wallhack ESP green hitbox around a hazmat-suited player',
		galleryTitle: 'Isle wallhack ESP gallery',
		ctaPrimary: 'Buy theislehacks',
		ctaSecondary: 'Isle ESP page',
		ctaSecondaryHref: '/rust-esp/',
		sections: [
			section(
				'Wallhack ESP vs raw aim tools',
				'A Isle wallhack focuses on information — player outlines, loot pins, vehicle threat cues — rather than automatic aiming. theislehacks bundles wallhack ESP with radar and optional Aimbot in one license.',
				'Toggle categories so only the wallhack overlays you need stay active during rotations and endgame circles.',
				'For the broader ESP keyword page see <a href="/rust-esp/">Isle ESP</a>; for combat assist see <a href="/rust-aimbot/">Aimbot</a>.',
			),
			section(
				'Map coverage for wallhack ESP',
				'Wallhack overlays support survival, monuments, and competitive lobbies with distance readouts and snaplines for engagement control.',
				`Season maps and POI changes are announced via ${EXT.rust}. Wallhack remains useful because it tracks entities, not fixed landmarks alone.`,
				'Pair wallhack awareness with <a href="/rust-radar-hack/">radar hack</a> cues for flanks during building and rooftop fights.',
			),
			section(
				'Undetected wallhack maintenance',
				'ESP wallhack modules rebuild after Easy Anti-Cheat patches. Follow the <a href="/updates/">Updates page</a> and complete checkout for instant license delivery on Windows PC.',
				'Learn the full maintenance story on <a href="/undetected-rust-cheats/">undetected The Isle hacks</a> and <a href="/eac-bypass-rust/">EAC bypass</a>.',
				'Ready to buy? Compare <a href="/pricing/">Pricing</a> or continue to the <a href="/rust-esp-hack/">ESP hack</a> landing for alternate search wording.',
			),
		],
	},
	radar: {
		title: 'Rust Radar Hack 2026 | 2D Threat Overlay',
		description:
			'theislehacks radar for flank awareness on The Isle. Bundled with ESP and soft aim in one package.',
		h1: 'Rust Radar Hack — 2D Threat Awareness',
		intro:
			'2D radar-style overlay for The Isle — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.',
		imageAlt: 'Isle ESP distance markers and weapon labels on UKN practice bots',
		galleryTitle: 'Isle radar hack visuals',
		ctaPrimary: 'Buy theislehacks',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/rust-esp/',
		sections: [
			section(
				'Why radar hack matters in The Isle',
				'Battle royale fights happen in three dimensions — rooftops, windows, and flanks. A 2D radar overlay shows nearby player threats outside direct line of sight so you can reposition before a third party.',
				'theislehacks radar complements <a href="/rust-esp/">ESP wallhack</a> markers during squad pushes and final-circle scrims.',
				`Mode rules and seasonal changes come from ${EXT.epic}. Radar range remains configurable when map scale or mobility meta shifts.`,
			),
			section(
				'Configurable radar range',
				'Adjust radar range for early rotations versus tight endgame circles. Directional cues highlight flanks during building clears and vehicle pushes across survival and monuments.',
				'Toggle radar alongside ESP and Aimbot with in-client hotkeys during live matches — see the <a href="/rust-mod-menu/">mod menu</a> page.',
				'Combat follow-up lives on <a href="/rust-aimbot/">Aimbot</a> when you convert radar info into a fight.',
			),
			section(
				'Maintenance and licensing',
				'Radar hack modules receive EAC maintenance rebuilds with the full theislehacks package. Monthly and lifetime licenses include digital delivery — see <a href="/pricing/">Pricing</a>.',
				'Check <a href="/updates/">Updates</a> after major The Isle patches before relying on previous radar configs.',
				'New to the stack? Start at <a href="/features/">Features</a> or <a href="/undetected-rust-cheats/">undetected status</a>.',
			),
		],
	},
	'eac-bypass': {
		title: 'EAC Bypass Rust | Hack Maintenance Guide',
		description:
			'How theislehacks handles Easy Anti-Cheat patches for The Isle — rebuild notes and what to check before queueing.',
		h1: 'EAC Bypass — theislehacks Maintenance',
		intro:
			'Understand Easy Anti-Cheat maintenance for theislehacks — how ESP wallhack, radar hack, and Aimbot rebuild after Rust security updates.',
		imageAlt: 'Isle ESP green hitbox wallhack used for EAC maintenance status pages',
		galleryTitle: 'EAC maintenance visuals',
		ctaPrimary: 'Buy theislehacks',
		ctaSecondary: 'Check updates',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'Easy Anti-Cheat overview',
				`Easy Anti-Cheat is Afterthought’s anti-cheat for The Isle on PC (see ${EXT.eac}). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.`,
				`theislehacks monitors EAC patch notes and The Isle seasonal updates from ${EXT.epic} to schedule module reviews.`,
				'“EAC bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.',
			),
			section(
				'What happens after an EAC patch',
				'The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href="/updates/">Updates</a>, and ships rebuilt packages to active licenses.',
				`Confirm Epic service health on ${EXT.status} if the launcher or matchmaking fails during the same window.`,
				'Avoid queueing on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href="/undetected-rust-cheats/">undetected The Isle hacks</a>.',
			),
			section(
				'No permanent bypass guarantee',
				'EAC bypass in practice means timely maintenance. Read the undetected guide, <a href="/faq/">FAQ</a>, and Updates log before every session.',
				'Contact <a href="/support/">Support</a> if activation fails immediately after a posted rebuild.',
				'Buying for the first time? Compare <a href="/pricing/">Pricing</a> and finish <a href="/setup/">Setup</a> only after Updates shows a live build.',
			),
		],
	},
	'cheats-2026': {
		title: 'theislehacks 2026 | Hacks with ESP & Cloud DMA',
		description:
			'theislehacks for The Isle in 2026 — ESP, soft aim, and radar in one maintained package. Compare plans and buy.',
		h1: 'theislehacks 2026 — ESP, Soft Aim & Cloud DMA',
		intro:
			'The 2026 theislehacks package for The Isle — ESP, radar, and Aimbot with instant delivery and Windows PC support.',
		imageAlt: 'theislehacks aimbot holographic sight with ESP skeleton and red head lock',
		galleryTitle: 'theislehacks 2026 gallery',
		ctaPrimary: 'Buy theislehacks',
		ctaSecondary: 'Compare features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why theislehacks leads in 2026',
				'2026 seasons bring new maps, weapons, and Easy Anti-Cheat updates. theislehacks bundles ESP wallhack, radar hack, and Aimbot with active maintenance — not a stale prior-year build.',
				`Track official season messaging on ${EXT.rust}, then use our <a href="/updates/">Updates log</a> for product rebuild timing.`,
				'Monthly ($35) and lifetime ($150) plans cover survival and monuments loops — see <a href="/pricing/">Pricing</a>.',
			),
			section(
				'Full feature stack for 2026 buyers',
				'Player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.',
				'Deep links: <a href="/rust-hacks/">theislehacks pillar</a>, <a href="/rust-esp/">ESP</a>, <a href="/rust-aimbot/">Aimbot</a>, <a href="/rust-wallhack/">wallhack</a>, <a href="/rust-radar-hack/">radar</a>, <a href="/undetected-rust-cheats/">undetected</a>.',
				'Instant digital delivery after checkout confirmation worldwide.',
			),
			section(
				'Before you buy in 2026',
				'Read the <a href="/rust-hacks/">theislehacks</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.',
				'Also compare the <a href="/best-rust-cheats/">best The Isle hacks</a> checklist, <a href="/blog/rust-cheats-2026-whats-new/">2026 blog guide</a>, and <a href="/faq/">FAQ</a>.',
				'Support is available at support@theislehacks.com via the <a href="/support/">Support page</a>.',
			),
		],
	},
	hacks: {
		title: 'theislehacks 2026 | Undetected ESP Aimbot Guide',
		description:
			'theislehacks for The Isle on Windows PC: ESP, wallhack, and aimbot in one license. Compare options and buy.',
		h1: 'theislehacks — Undetected ESP, Aimbot & Wallhack',
		intro:
			'theislehacks for The Isle combines ESP visibility, radar threat cues, and Aimbot controls in one Windows PC license. This is the pillar guide for theislehacks.',
		imageAlt: 'theislehacks aimbot sight with ESP skeleton and red head lock',
		galleryTitle: 'theislehacks gallery — ESP, Aimbot, wallhack',
		ctaPrimary: 'Buy theislehacks',
		ctaSecondary: 'See undetected guide',
		ctaSecondaryHref: '/undetected-rust-cheats/',
		sections: [
			section(
				'What theislehacks include in 2026',
				'Players searching for theislehacks usually want visibility and combat tools without stacking separate downloads. theislehacks bundles player ESP wallhack, loot markers, 2D radar overlays, and configurable Aimbot in one maintained package — the same toolkit often called the isle hacks.',
				'Coverage spans survival and monuments with in-client toggles for live matches. Monthly ($35) and lifetime ($150) licenses unlock the full stack.',
				`Official game updates come from ${EXT.epic}; our hacks package tracks those releases via the <a href="/updates/">Updates page</a>. Cross-check platform health on ${EXT.status} before patch-day queues.`,
			),
			section(
				'theislehacks vs the isle hacks — same stack, clear pages',
				'Searchers use theislehacks and the isle hacks interchangeably. This pillar focuses on hacks language; the <a href="/rust-cheats-2026/">the isle hacks 2026</a> and <a href="/best-rust-cheats/">best The Isle hacks</a> pages cover buyer comparisons in cheats wording.',
				'Deep-dive modules: <a href="/rust-esp/">Isle ESP</a>, <a href="/rust-aimbot/">Isle Aimbot</a>, <a href="/rust-wallhack/">wallhack</a>, <a href="/rust-radar-hack/">radar hack</a>, and <a href="/rust-soft-aim/">soft aim</a>.',
				'Blog guides expand each keyword: <a href="/blog/rust-hacks-complete-guide-2026/">hacks complete guide</a>, <a href="/blog/rust-cheats-buyers-guide/">cheats buyers guide</a>, and <a href="/blog/undetected-rust-hacks-eac/">undetected EAC notes</a>.',
			),
			section(
				'theislehacks vs single-feature tools',
				'Standalone hacks often cover only wallhack or only aim assist. theislehacks maps the full BR loop: read enemy squads, track vehicles and chests, spot flanks on radar, and tune Aimbot per weapon class.',
				'Compare the <a href="/rust-esp/">ESP</a>, <a href="/rust-aimbot/">Aimbot</a>, and <a href="/features/">Features</a> pages — or review <a href="/pricing/">Pricing</a> for monthly and lifetime licenses.',
				'Related landings: <a href="/rust-cheat-download/">cheat download</a>, <a href="/rust-mod-menu/">mod menu</a>, <a href="/rust-aimbot-hack/">aimbot hack</a>, <a href="/rust-esp-hack/">ESP hack</a>.',
			),
			section(
				'Undetected theislehacks with EAC maintenance',
				'Undetected theislehacks require rebuilds after Easy Anti-Cheat and major The Isle patches. Check Updates before queueing — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.',
				`See ${EXT.eac} for anti-cheat background and our <a href="/eac-bypass-rust/">EAC bypass guide</a> for the practical workflow. Pair with <a href="/undetected-rust-cheats/">undetected The Isle hacks</a> for status language buyers expect.`,
				'Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href="/setup/">Setup</a> and keep <a href="/support/">Support</a> ready with your order ID.',
			),
		],
	},
	'cheat-download': {
		title: 'Rust Hack Download 2026 | Instant Access',
		description:
			'Download theislehacks with instant license delivery — ESP, soft aim, and radar for The Isle. Buy, activate, and play.',
		h1: 'Rust Hack Download — Instant License Delivery',
		intro:
			'How The Isle hack download works for The Isle — digital license delivery after payment confirmation, with ESP wallhack, radar hack, and Aimbot access on Windows PC.',
		imageAlt: 'Isle ESP overlay with skeleton ESP and loot inventory labels',
		galleryTitle: 'The Isle hack download visuals',
		ctaPrimary: 'Buy theislehacks',
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'How The Isle hack download delivery works',
				'After checkout confirms payment, theislehacks license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.',
				'Keep your order confirmation and license email ready for the <a href="/setup/">Setup guide</a> and Support requests.',
				`If Steam / game services are down, check ${EXT.status} before assuming a download failure.`,
			),
			section(
				'What your download unlocks',
				'Every The Isle hack download includes player ESP wallhack, loot and chest markers, 2D radar overlays, Aimbot profiles, and in-client toggles for PVE and PVP.',
				'Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href="/pricing/">Pricing page</a>.',
				'Feature detail: <a href="/features/">Features</a>. Module pages: <a href="/rust-esp/">ESP</a>, <a href="/rust-aimbot/">Aimbot</a>.',
			),
			section(
				'After purchase — setup and updates',
				'Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When Rust or Easy Anti-Cheat patches ship, check the <a href="/updates/">Updates page</a> for maintenance rebuilds.',
				'Contact <a href="/support/">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.',
				'Also read <a href="/undetected-rust-cheats/">undetected status</a> so you know what “download ready” means after a patch.',
			),
		],
	},
	'mod-menu': {
		title: 'Rust Mod Menu 2026 | ESP & Soft Aim Toggles',
		description:
			'theislehacks mod menu for in-match toggles — ESP, soft aim, and radar on The Isle. One maintained package.',
		h1: 'Rust Mod Menu — In-Client Control Panel',
		intro:
			'Rust mod menu controls for The Isle — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-match without leaving your Rust session on Windows PC.',
		imageAlt: 'Rust mod menu / aimbot overlay with red skeleton ESP and hotkeys',
		galleryTitle: 'Rust mod menu gallery',
		ctaPrimary: 'Buy theislehacks',
		ctaSecondary: 'Full feature list',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What a Rust mod menu controls',
				'A Rust mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live matches. theislehacks keeps those toggles accessible with hotkeys.',
				'Toggle player outlines, loot markers, vehicle cues, and per-weapon Aimbot settings without alt-tabbing out of Rust.',
				'Control deep-dives: <a href="/rust-esp/">ESP</a>, <a href="/rust-aimbot/">Aimbot</a>, <a href="/rust-radar-hack/">radar</a>.',
			),
			section(
				'Mod menu categories for PVE and PVP',
				'Separate ESP wallhack categories for players, loot, chests, and vehicles let you reduce overlay noise during rotations and endgame circles.',
				'Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when ${EXT.rust} seasons change fight distances and mobility.',
				'Soft tracking players should start with <a href="/rust-soft-aim/">soft aim</a> profiles before aggressive FOV.',
			),
			section(
				'Maintained mod menu after EAC patches',
				'Rust mod menu behavior is rebuilt when Easy Anti-Cheat or major The Isle updates land. Follow the <a href="/updates/">Updates page</a> and <a href="/eac-bypass-rust/">EAC bypass guide</a> before queueing on patch days.',
				'Checkout with instant digital delivery for monthly and lifetime licenses — see <a href="/pricing/">Pricing</a>.',
				'Need install steps? Open <a href="/setup/">Setup</a> after your license email arrives.',
			),
		],
	},
	'soft-aim': {
		title: 'Rust Soft Aim 2026 | Smooth Aimbot Settings',
		description:
			'theislehacks soft aim settings for natural tracking on The Isle. Smoothness, FOV, and bone priority included.',
		h1: 'Rust Soft Aim — Smooth Aimbot Controls',
		intro:
			'Rust soft aim settings for The Isle — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: 'Rust soft aim ESP boxes and FOV circle on UKN practice bots',
		galleryTitle: 'Rust soft aim gallery',
		ctaPrimary: 'Buy theislehacks',
		ctaSecondary: 'Aimbot controls',
		ctaSecondaryHref: '/rust-aimbot/',
		sections: [
			section(
				'What Rust soft aim means',
				'Rust soft aim refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. theislehacks exposes smoothness, FOV, and sensitivity sliders so you control how assist feels in BR firefights.',
				'Bone priority and target selection cover closest player, lowest health, or highest-threat targets during squad fights.',
				'Full Aimbot documentation: <a href="/rust-aimbot/">Isle Aimbot</a>. Alternate wording: <a href="/rust-aimbot-hack/">aimbot hack</a>.',
			),
			section(
				'Soft aim profiles per weapon class',
				'Save separate soft aim profiles for assault rifles, SMGs, and snipers. Switch between long-range AR beams and close-quarters room clears with hotkeys mid-match.',
				`Weapon TTKs shift with ${EXT.rust} balance patches — retune smoothness after major combat updates.`,
				'Soft aim ships alongside <a href="/rust-esp/">ESP wallhack</a> and <a href="/rust-radar-hack/">2D radar</a> overlays.',
			),
			section(
				'Undetected soft aim with EAC maintenance',
				'Aimbot modules rebuild after Easy Anti-Cheat patches. Check the <a href="/updates/">Updates page</a> before queueing — responsible settings and maintenance awareness matter for undetected play.',
				'Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href="/pricing/">Pricing</a>.',
				'Activation help: <a href="/setup/">Setup</a> · status questions: <a href="/support/">Support</a>.',
			),
		],
	},
	'best-cheats': {
		title: 'Best theislehacks 2026 | Buyer Guide',
		description:
			'Best theislehacks options for The Isle — ESP, soft aim, and radar checklist before you buy.',
		h1: 'Best theislehacks — 2026 Buyer Guide',
		intro:
			'Compare the best The Isle hacks for The Isle in 2026 — undetected ESP wallhack, radar hack, and Aimbot in one maintained package with Easy Anti-Cheat rebuilds and instant delivery.',
		imageAlt: 'Isle ESP overlay with skeleton ESP and loot inventory labels',
		galleryTitle: 'Best The Isle hacks gallery',
		ctaPrimary: 'Buy theislehacks',
		ctaSecondary: 'Compare pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'What makes the best The Isle hacks in 2026',
				'The best The Isle hacks combine active EAC maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.',
				'theislehacks covers survival and monuments with in-client toggles and post-patch rebuilds.',
				`Verify the live game is healthy via ${EXT.status}, then confirm our <a href="/updates/">Updates</a> note before you judge any package “best.”`,
			),
			section(
				'Best The Isle hacks feature checklist',
				'Look for player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after The Isle patches.',
				'Review <a href="/features/">Features</a>, <a href="/undetected-rust-cheats/">undetected status</a>, and <a href="/rust-cheats-2026/">The Isle hacks 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.',
				'Module pages worth opening: <a href="/rust-esp/">ESP</a>, <a href="/rust-aimbot/">Aimbot</a>, <a href="/rust-hacks/">hacks</a>.',
			),
			section(
				'Buying the best The Isle hacks safely',
				'Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue — and contact Support with order details if activation needs help.',
				'No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.',
				`Remember: using cheats can violate ${EXT.epic} terms. Proceed only if you accept that risk.`,
			),
		],
	},
	'aimbot-hack': {
		title: 'Isle Aimbot Hack 2026 | Soft Aim Assist',
		description:
			'theislehacks aimbot with soft aim for The Isle. FOV, bone priority, and hotkeys bundled with ESP.',
		h1: 'Isle Aimbot Hack — Soft Aim Assist',
		intro:
			'Rust aimbot hack tools for The Isle — smoothness, FOV, bone priority, per-weapon profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: 'Rust aimbot hack menu with red skeleton ESP and silent aim toggles',
		galleryTitle: 'Rust aimbot hack gallery',
		ctaPrimary: 'Buy theislehacks',
		ctaSecondary: 'Aimbot settings',
		ctaSecondaryHref: '/rust-aimbot/',
		sections: [
			section(
				'Rust aimbot hack vs visibility tools',
				'A Rust aimbot hack focuses on assisted targeting during firefights — while ESP wallhack and radar handle map awareness. theislehacks bundles aimbot hack modules with visibility overlays in one license.',
				'Smoothness, FOV, and sensitivity controls tune assist for The Isle combat pace across PVE and PVP.',
				'Prefer softer tracking language? See <a href="/rust-soft-aim/">soft aim</a>. Full settings: <a href="/rust-aimbot/">Aimbot page</a>.',
			),
			section(
				'Aimbot hack controls and hotkeys',
				'Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-match without opening menus during rotations or final circles.',
				'Per-weapon profile slots separate long-range AR tuning from close-quarters SMG settings.',
				`Balance patches from ${EXT.rust} can change ideal FOV — retune after major weapon updates.`,
			),
			section(
				'Undetected aimbot hack maintenance',
				'Aimbot hack signatures rebuild after Easy Anti-Cheat updates. Follow the <a href="/updates/">Updates page</a> and <a href="/eac-bypass-rust/">EAC bypass guide</a> before queueing after patch days.',
				'Checkout with instant digital delivery for Windows 10 and 11 — <a href="/pricing/">Pricing</a>.',
				'Pair with <a href="/rust-esp/">ESP</a> for the full information + assist loop.',
			),
		],
	},
	'esp-hack': {
		title: 'Isle ESP Hack 2026 | Player Boxes & Loot',
		description:
			'theislehacks ESP for The Isle — player boxes, loot markers, and distance readouts. See overlays and buy.',
		h1: 'Isle ESP Hack — Player Boxes Guide',
		intro:
			'Isle ESP hack overlays for The Isle — player outlines, vehicle threat cues, loot and chest markers with distance readouts across survival and monuments.',
		imageAlt: 'Isle ESP hack with green skeleton, box, and loot visibility labels',
		galleryTitle: 'Isle ESP hack gallery',
		ctaPrimary: 'Buy theislehacks',
		ctaSecondary: 'ESP controls',
		ctaSecondaryHref: '/rust-esp/',
		sections: [
			section(
				'What a Isle ESP hack shows',
				'A Isle ESP hack renders enemy player outlines, vehicle positions, and loot pins through walls and terrain — closing the information gap before you commit to a fight.',
				'Distance readouts and snapline options help control engagement range during squad pushes and third-party scenarios.',
				'Canonical visibility guide: <a href="/rust-esp/">Isle ESP</a>. Wallhack wording: <a href="/rust-wallhack/">wallhack</a>.',
			),
			section(
				'ESP hack categories for survival',
				'Toggle player ESP hack, loot markers, chest pins, and vehicle cues independently so only BR-critical overlays stay active during rotations.',
				'Team and enemy colour coding supports dens and hunt routes.',
				`POI and loot changes publish through ${EXT.epic} — keep categories toggled to what the current map rewards.`,
			),
			section(
				'Undetected ESP hack with EAC maintenance',
				'ESP hack modules rebuild after Easy Anti-Cheat and The Isle patches. Check the <a href="/updates/">Updates page</a> before queueing — pair ESP hack awareness with <a href="/rust-radar-hack/">radar hack</a> for flank reads.',
				'Licenses deliver digitally after checkout on Windows PC — see <a href="/pricing/">Pricing</a>.',
				'Install steps: <a href="/setup/">Setup</a>. Status questions: <a href="/undetected-rust-cheats/">undetected guide</a>.',
			),
		],
	},
	'unlock-all': {
		title: 'Rust Unlock All 2026 | What It Really Means',
		description:
			'Unlock-all searches vs real theislehacks for The Isle — ESP, soft aim, and radar. Know what you are buying.',
		h1: 'Rust Unlock All — What Players Search For',
		intro:
			'Rust unlock all is a common search term for The Isle — this page clarifies what unlock-all tools claim versus the ESP wallhack, radar hack, and Aimbot tools theislehacks actually provides on Windows PC.',
		imageAlt: 'Isle ESP boxes and distances on UKN bots for unlock-all context',
		galleryTitle: 'Rust unlock all guide visuals',
		ctaPrimary: 'Buy theislehacks',
		ctaSecondary: 'See features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What Rust unlock all usually means',
				'Rust unlock all searches often refer to instant access to weapons, camos, skins, or battle pass tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.',
				'theislehacks focuses on in-match awareness — player ESP, loot markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.',
				`Cosmetics and Battle Pass items are sold through ${EXT.rust}. Be wary of unlock-all downloads that promise free skins — they are often scams.`,
			),
			section(
				'Visibility tools vs unlock-all claims',
				'ESP wallhack helps you spot enemy squads, vehicles, and loot chests during live matches. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.',
				'For loadout planning during a match, loot and chest markers speed BR rotations — see the <a href="/rust-esp/">ESP</a> and <a href="/features/">Features</a> pages for the full tool list.',
				'Related: <a href="/rust-hacks/">theislehacks</a> and <a href="/best-rust-cheats/">best The Isle hacks</a>.',
			),
			section(
				'Buying theislehacks for the right reasons',
				'If you need undetected ESP wallhack, radar hack, and Aimbot for The Isle on Windows PC, compare <a href="/pricing/">Pricing</a> and read the <a href="/setup/">Setup guide</a> before checkout.',
				'Check the <a href="/updates/">Updates page</a> after Easy Anti-Cheat patches — maintenance rebuilds publish for active licenses.',
				'Questions? <a href="/faq/">FAQ</a> and <a href="/support/">Support</a> cover delivery and configuration — not cosmetic unlocks.',
			),
		],
	},
	privacy: {
		title: 'Privacy Policy | theislehacks',
		description:
			'Privacy policy for theislehacks. How we handle support emails, order data, and checkout on theislehacks.com.',
		h1: 'Privacy Policy',
		intro: 'How theislehacks handles information when you browse theislehacks.com or contact support about a license.',
		imageAlt: 'Isle ESP overlay visual for privacy policy page',
		galleryTitle: 'theislehacks legal resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read terms of use',
		ctaSecondaryHref: '/terms/',
		sections: [
			section(
				'Information we may collect',
				'We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.',
				'We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.',
				['Contact details you send by email', 'Order references for support requests', 'Basic technical data for site security'],
			),
			section(
				'How information is used',
				'Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.',
				'Analytics may use aggregated traffic data without identifying individual theislehacks customers.',
			),
			section(
				'Your choices and contact',
				'You may request correction or deletion of support email data by contacting support@theislehacks.com with your request details.',
				'Policy updates publish on this page. Continued use of theislehacks.com after updates means you accept the revised policy. Also see <a href="/terms/">Terms of Use</a> and <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	refund: {
		title: 'Refund Policy | theislehacks',
		description:
			'Refund policy for theislehacks. Digital delivery terms and eligibility for theislehacks packages.',
		h1: 'Refund Policy',
		intro:
			'Refund terms for theislehacks licenses — ESP wallhack, radar hack, and Aimbot packages purchased through checkout for The Isle.',
		imageAlt: 'Isle ESP overlay visual for refund policy page',
		galleryTitle: 'theislehacks billing resources',
		ctaPrimary: 'Contact support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Digital delivery and eligibility',
				'theislehacks licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.',
				'Submit refund requests within 24 hours of purchase with your order ID and reason.',
			),
			section(
				'When refunds may be approved',
				'Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.',
				'Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href="/terms/">Terms of Use</a>.',
			),
			section(
				'How to request a refund',
				'Email support@theislehacks.com with subject "Refund Request", your order ID, purchase date, and issue summary — or use the <a href="/support/">Support page</a>.',
				'Approved refunds process back to the original payment method when possible. Pricing details live on <a href="/pricing/">Pricing</a>.',
			),
		],
	},
	terms: {
		title: 'Terms of Use 2026 | theislehacks Rules',
		description:
			'Terms of use for theislehacks licenses. Usage rules, anti-cheat risk, and liability for Windows PC.',
		h1: 'Terms of Use',
		intro: 'Terms governing use of theislehacks.com and theislehacks licenses for The Isle on Windows PC.',
		imageAlt: 'Isle ESP overlay visual for terms of use page',
		galleryTitle: 'theislehacks legal pages',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Acceptance and license scope',
				'By purchasing or using theislehacks you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for The Isle on Windows PC only.',
				'Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.',
			),
			section(
				'Risk and anti-cheat disclaimer',
				`Using cheats in The Isle may violate ${EXT.epic} terms and result in account penalties. theislehacks provides maintenance but does not guarantee undetected status or account safety.`,
				'You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href="/undetected-rust-cheats/">undetected status</a>.',
			),
			section(
				'Changes and governing law',
				'We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.',
				'Contact support@theislehacks.com for questions. Related policies: <a href="/privacy-policy/">Privacy</a> and <a href="/refund-policy/">Refunds</a>.',
			),
		],
	},
};

/** Attach heroImage paths and clamp meta lengths. */
export function finalizePage(pageId, page) {
	return {
		...page,
		title: clampTitle(stripZadeyoFromMeta(page.title)),
		description: clampDesc(stripZadeyoFromMeta(page.description)),
		heroImage: HERO_IMAGES[pageId],
	};
}

export function finalizePages(pages) {
	const out = {};
	for (const [id, page] of Object.entries(pages)) {
		out[id] = finalizePage(id, page);
	}
	return out;
}

export const englishPagesFinal = finalizePages(enPages);
