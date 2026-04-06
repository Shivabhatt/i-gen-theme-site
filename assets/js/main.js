const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

if (menuToggle && menu) {
	menuToggle.addEventListener('click', () => {
		const isOpen = menu.classList.toggle('open');
		menuToggle.setAttribute('aria-expanded', String(isOpen));
		document.body.classList.toggle('menu-open', isOpen);
	});

	menu.querySelectorAll('a').forEach((link) => {
		link.addEventListener('click', () => {
			menu.classList.remove('open');
			menuToggle.setAttribute('aria-expanded', 'false');
			document.body.classList.remove('menu-open');
		});
	});

	window.addEventListener('resize', () => {
		if (window.innerWidth > 860) {
			menu.classList.remove('open');
			menuToggle.setAttribute('aria-expanded', 'false');
			document.body.classList.remove('menu-open');
		}
	});
}

const translations = {
	en: {
		'brand.name': 'iGen',
		'language.label': 'Language',
		'nav.home': 'Home',
		'nav.services': 'Solutions',
		'nav.about': 'About Us',
		'nav.industries': 'Industries',
		'nav.projects': 'Technology',
		'nav.pricing': 'Success Stories',
		'nav.blog': 'Blog',
		'nav.contact': 'Contact',
		'nav.cta': 'Request Demo',
		'hero.eyebrow': 'Visual AI Solutions',
		'hero.title': 'Enabling Machines to See and Understand the World',
		'hero.copy': 'i-Generation Company Limited is a leading visual AI solutions provider with over 20 years of experience. We deliver proprietary AI technology, large-scale deployments, and measurable outcomes across critical industries.',
		'hero.ctaProjects': 'Explore Solutions',
		'hero.ctaHow': 'Learn More',
		'hero.stat1.title': '20+ Years',
		'hero.stat1.copy': 'of Experience',
		'hero.stat2.title': '100+ Cities',
		'hero.stat2.copy': 'Served',
		'hero.stat3.title': '300,000+',
		'hero.stat3.copy': 'Cameras Connected',
		'hero.stat4.title': '60+',
		'hero.stat4.copy': 'Algorithms Available',
		'services.eyebrow': 'Featured Solutions',
		'services.titleLead': 'Comprehensive',
		'services.titleAccent': 'AI-Powered Solutions',
		'services.copy': 'Explore i-Generation solutions for Urban Public Safety, Financial Intelligence, Smart Education, Industrial Automation, and Retail & Metaverse.',
		'services.solar.title': 'Urban Public Safety',
		'services.wind.title': 'Smart Education',
		'services.water.title': 'Financial Intelligence',
		'services.bio.title': 'Industrial Automation',
		'services.retail.title': 'Retail & Metaverse',
		'about.side': 'About',
		'about.tab': '. About iGen',
		'about.title': 'About i-Generation',
		'about.copy': 'Established in 2001, i-Generation Company Limited is a visual AI solutions leader with over 20 years of experience across IT, telecommunications, renewable energy, and intelligent systems.',
		'about.copy2': 'We combine proprietary technologies like Glint-MVT and MVT-VLM with deep implementation expertise to support cities, enterprises, and partners in China, Japan, South Korea, Singapore, Malaysia, Thailand, the Philippines, Laos, Vietnam, Sri Lanka, and India.',
		'about.cta': 'Learn More',
		'steps.eyebrow': 'Industry Solutions',
		'steps.titleLead': 'Tailored AI',
		'steps.titleAccent': 'for Every Sector',
		'steps.assessment.title': 'Smart Community',
		'steps.assessment.copy': 'AI-powered safety, perimeter control, and community analytics.',
		'steps.documentation.title': 'Smart Campus',
		'steps.documentation.copy': 'Student safety monitoring and sports analytics in real time.',
		'steps.installation.title': 'Smart Construction Site',
		'steps.installation.copy': 'Safety compliance, environmental monitoring, and equipment tracking.',
		'steps.support.title': 'Smart Gas Station',
		'steps.support.copy': 'Compliance-focused monitoring with operational risk reduction.',
		'steps.payment.title': 'Smart Branch/Outlet',
		'steps.payment.copy': 'Customer flow analytics and duty performance insights.',
		'steps.park.title': 'Smart Park',
		'steps.park.copy': 'Security alerts, capacity optimization, and compliance verification.',
		'projects.eyebrow': 'Our Technology',
		'projects.title': 'Advanced Visual AI Foundation Models',
		'projects.cta': 'Request Technical Demo',
		'projects.item1': 'Glint-MVT (Multi-Vision Transformer)',
		'projects.item2': 'MVT-VLM (Vision-Language Model)',
		'projects.item3': 'Object Detection & Recognition',
		'projects.item4': 'Real-Time Watchlisting',
		'projects.item5': 'Text-to-Image Search',
		'projects.item6': 'Unified Visual Parsing Platform',
		'pricing.eyebrow': 'Success Stories',
		'pricing.title': 'Real-World Impact Across Industries',
		'pricing.starter.title': 'Intelligent City Safety Management',
		'pricing.starter.copy': '300,000+ cameras integrated with real-time detection and watchlist systems.',
		'pricing.growth.title': 'Financial Intelligence Transformation',
		'pricing.growth.copy': 'AI supervision replaced traditional manual monitoring with automated workflows.',
		'pricing.enterprise.title': 'Campus Safety & Sports Analytics',
		'pricing.enterprise.copy': 'Campus-wide behavior analytics and performance tracking improved safety and training outcomes.',
		'pricing.choose': 'Read Case Study',
		'testimonial.eyebrow': 'Awards & Recognition',
		'testimonial.quote': '“Recognized across 2019-2024 for innovation in visual AI, intelligent city deployments, and enterprise-grade AI foundation technologies.”',
		'testimonial.author': '8-12 major award badges and annual milestones',
		'blog.eyebrow': 'Blog & Insights',
		'blog.title': 'Latest News, Articles, and Industry Insights',
		'blog.post1.title': 'New Technology for Utility Storage',
		'blog.post1.copy': 'How long-duration storage is changing regional grid resilience.',
		'blog.post2.title': 'Solar Retrofits for Legacy Sites',
		'blog.post2.copy': 'Design constraints and practical retrofit strategies for old assets.',
		'blog.readMore': 'Read More',
		'contact.eyebrow': 'Contact',
		'contact.title': 'Get in Touch with Our Team',
		'contact.copy': 'Tell us your inquiry and industry needs. Our team will respond with the right solution path and next steps.',
		'contact.form.firstName': 'First Name *',
		'contact.form.firstNamePlaceholder': 'John',
		'contact.form.lastName': 'Last Name *',
		'contact.form.lastNamePlaceholder': 'Doe',
		'contact.form.company': 'Company Name',
		'contact.form.companyPlaceholder': 'Company Inc.',
		'contact.form.phone': 'Phone Number',
		'contact.form.phonePlaceholder': '+86 10 0000 0000',
		'contact.form.email': 'Email Address *',
		'contact.form.emailPlaceholder': 'name@company.com',
		'contact.form.country': 'Country *',
		'contact.form.countryPlaceholder': 'Select Country',
		'contact.form.country.cn': 'China',
		'contact.form.country.jp': 'Japan',
		'contact.form.country.kr': 'South Korea',
		'contact.form.country.sg': 'Singapore',
		'contact.form.country.my': 'Malaysia',
		'contact.form.country.th': 'Thailand',
		'contact.form.country.ph': 'Philippines',
		'contact.form.country.other': 'Other',
		'contact.form.subject': 'Subject *',
		'contact.form.subjectPlaceholder': 'Select Subject',
		'contact.form.subject.product': 'Product Inquiry',
		'contact.form.subject.support': 'Technical Support',
		'contact.form.subject.partnership': 'Partnership Opportunity',
		'contact.form.subject.media': 'Media Inquiry',
		'contact.form.subject.investor': 'Investor Relations',
		'contact.form.subject.other': 'Other',
		'contact.form.industry': 'Industry / Sector',
		'contact.form.industryPlaceholder': 'Select Industry',
		'contact.form.industry.ups': 'Urban Public Safety',
		'contact.form.industry.fi': 'Financial Intelligence',
		'contact.form.industry.edu': 'Smart Education',
		'contact.form.industry.ind': 'Industrial Automation',
		'contact.form.industry.retail': 'Retail & Metaverse',
		'contact.form.industry.other': 'Other',
		'contact.form.message': 'Message *',
		'contact.form.messagePlaceholder': 'Please describe your inquiry...',
		'contact.form.submit': 'Send Message',
		'contact.form.reset': 'Clear Form',
		'footer.copy': 'Advanced visual AI solutions for safer, smarter, and more efficient operations.',
		'footer.company': 'Company',
		'footer.contact': 'Contact',
		'footer.address': 'Beijing, China',
		'footer.copyright': '© 2026 i-Generation Company Limited. All rights reserved.'
	},
	zh: {
		'brand.name': 'iGen',
		'language.label': '语言',
		'nav.home': '首页',
		'nav.services': '解决方案',
		'nav.about': '关于我们',
		'nav.industries': '行业',
		'nav.projects': '技术',
		'nav.pricing': '成功案例',
		'nav.blog': '博客',
		'nav.contact': '联系我们',
		'nav.cta': '预约演示',
		'hero.eyebrow': '视觉 AI 解决方案',
		'hero.title': '让机器看见并理解世界',
		'hero.copy': 'i-Generation 是领先的视觉 AI 解决方案提供商，拥有 20+ 年经验，覆盖关键行业的大规模落地与可衡量成果。',
		'hero.ctaProjects': '探索解决方案',
		'hero.ctaHow': '了解更多',
		'hero.stat1.title': '20+ 年',
		'hero.stat1.copy': '行业经验',
		'hero.stat2.title': '100+ 城市',
		'hero.stat2.copy': '服务覆盖',
		'hero.stat3.title': '300,000+',
		'hero.stat3.copy': '已连接摄像头',
		'hero.stat4.title': '60+',
		'hero.stat4.copy': '可用算法',
		'services.eyebrow': '核心方案',
		'services.titleLead': '全面的',
		'services.titleAccent': 'AI 解决方案',
		'services.copy': '覆盖城市公共安全、金融智能、智慧教育、工业自动化与零售元宇宙场景。',
		'services.solar.title': '城市公共安全',
		'services.wind.title': '智慧教育',
		'services.water.title': '金融智能',
		'services.bio.title': '工业自动化',
		'services.retail.title': '零售与元宇宙',
		'about.side': '关于',
		'about.tab': '. 关于 iGen',
		'about.title': '关于 i-Generation',
		'about.copy': 'i-Generation 成立于 2001 年，是视觉 AI 解决方案领域的领先企业，在 IT、通信、可再生能源与智能系统领域拥有 20+ 年经验。',
		'about.copy2': '我们将 Glint-MVT 与 MVT-VLM 等自研技术与深度落地能力结合，服务于中国、日本、韩国、新加坡、马来西亚、泰国、菲律宾、老挝、越南、斯里兰卡和印度等市场。',
		'about.cta': '了解更多',
		'steps.eyebrow': '行业解决方案',
		'steps.titleLead': '面向各行业的',
		'steps.titleAccent': '定制化 AI',
		'steps.assessment.title': '智慧社区',
		'steps.assessment.copy': 'AI 驱动的社区安全、边界管理与运营分析。',
		'steps.documentation.title': '智慧校园',
		'steps.documentation.copy': '实时安全监控与体育行为分析。',
		'steps.installation.title': '智慧工地',
		'steps.installation.copy': '施工安全合规、环境监测与设备追踪。',
		'steps.support.title': '智慧加油站',
		'steps.support.copy': '面向合规和风险控制的实时运营监控。',
		'steps.payment.title': '智慧网点/门店',
		'steps.payment.copy': '客流洞察与岗位绩效分析。',
		'steps.park.title': '智慧园区',
		'steps.park.copy': '安全预警、容量优化与合规校验。',
		'projects.eyebrow': '我们的技术',
		'projects.title': '先进视觉 AI 基础模型',
		'projects.cta': '预约技术演示',
		'projects.item1': 'Glint-MVT 多视觉 Transformer',
		'projects.item2': 'MVT-VLM 视觉语言模型',
		'projects.item3': '目标检测与识别',
		'projects.item4': '实时布控告警',
		'projects.item5': '以图搜图与文本搜图',
		'projects.item6': '统一视觉解析平台',
		'pricing.eyebrow': '成功案例',
		'pricing.title': '跨行业真实业务成效',
		'pricing.starter.title': '智能城市安全管理',
		'pricing.starter.copy': '已接入 300,000+ 摄像头，支持实时识别与布控告警。',
		'pricing.growth.title': '金融智能转型',
		'pricing.growth.copy': 'AI 监督替代传统人工监控，形成自动化闭环流程。',
		'pricing.enterprise.title': '校园安全与体育分析',
		'pricing.enterprise.copy': '全域行为分析提升校园安全与训练效果。',
		'pricing.choose': '查看案例',
		'testimonial.eyebrow': '荣誉与认可',
		'testimonial.quote': '“2019-2024 年间，i-Generation 在视觉 AI 创新、城市级部署与基础模型能力方面持续获得行业认可。”',
		'testimonial.author': '覆盖 8-12 项年度奖项与关键里程碑',
		'blog.eyebrow': '博客与洞察',
		'blog.title': '最新动态、技术文章与行业观点',
		'blog.post1.title': '公用事业储能新技术',
		'blog.post1.copy': '长时储能如何重塑区域电网韧性。',
		'blog.post2.title': '老旧站点太阳能改造',
		'blog.post2.copy': '传统资产改造中的设计约束与实践策略。',
		'blog.readMore': '阅读更多',
		'contact.eyebrow': '联系我们',
		'contact.title': '与我们的团队取得联系',
		'contact.copy': '请描述您的需求和行业场景，我们会提供对应的解决方案建议与下一步计划。',
		'contact.form.firstName': '名字 *',
		'contact.form.firstNamePlaceholder': '名',
		'contact.form.lastName': '姓氏 *',
		'contact.form.lastNamePlaceholder': '姓',
		'contact.form.company': '公司名称',
		'contact.form.companyPlaceholder': '示例科技有限公司',
		'contact.form.phone': '电话号码',
		'contact.form.phonePlaceholder': '+86 10 0000 0000',
		'contact.form.email': '邮箱地址 *',
		'contact.form.emailPlaceholder': 'name@company.com',
		'contact.form.country': '国家 / 地区 *',
		'contact.form.countryPlaceholder': '请选择国家/地区',
		'contact.form.country.cn': '中国',
		'contact.form.country.jp': '日本',
		'contact.form.country.kr': '韩国',
		'contact.form.country.sg': '新加坡',
		'contact.form.country.my': '马来西亚',
		'contact.form.country.th': '泰国',
		'contact.form.country.ph': '菲律宾',
		'contact.form.country.other': '其他',
		'contact.form.subject': '咨询主题 *',
		'contact.form.subjectPlaceholder': '请选择主题',
		'contact.form.subject.product': '产品咨询',
		'contact.form.subject.support': '技术支持',
		'contact.form.subject.partnership': '合作机会',
		'contact.form.subject.media': '媒体咨询',
		'contact.form.subject.investor': '投资者关系',
		'contact.form.subject.other': '其他',
		'contact.form.industry': '行业 / 场景',
		'contact.form.industryPlaceholder': '请选择行业',
		'contact.form.industry.ups': '城市公共安全',
		'contact.form.industry.fi': '金融智能',
		'contact.form.industry.edu': '智慧教育',
		'contact.form.industry.ind': '工业自动化',
		'contact.form.industry.retail': '零售与元宇宙',
		'contact.form.industry.other': '其他',
		'contact.form.message': '留言内容 *',
		'contact.form.messagePlaceholder': '请描述您的咨询内容...',
		'contact.form.submit': '发送信息',
		'contact.form.reset': '清空表单',
		'footer.copy': '以先进视觉 AI 方案打造更安全、更智能、更高效的运营体系。',
		'footer.company': '公司',
		'footer.contact': '联系',
		'footer.address': '中国北京',
		'footer.copyright': '© 2026 i-Generation Company Limited。保留所有权利。'
	}
};

const languageSwitcher = document.querySelector('#language-switcher');
const languageTrigger = document.querySelector('#language-trigger');
const currentLanguage = document.querySelector('#current-language');
const languageOptions = document.querySelectorAll('.language-option');

const languageButtonLabel = {
	en: 'EN',
	zh: '中文'
};

const originalTextByNode = new WeakMap();
const originalPlaceholderByElement = new WeakMap();
const i18nByEnglishText = new Map();
let staticFallbackMapReady = false;
let staticFallbackMapPromise = null;

const normalizeI18nText = (value) => (value || '').replace(/\s+/g, ' ').trim();
const getI18nTranslation = (englishText) => {
	if (!englishText) return '';
	return i18nByEnglishText.get(englishText) || i18nByEnglishText.get(normalizeI18nText(englishText)) || '';
};

Object.entries(translations.en).forEach(([key, englishText]) => {
	const chineseText = translations.zh[key];
	if (englishText && chineseText) {
		i18nByEnglishText.set(englishText, chineseText);
		i18nByEnglishText.set(normalizeI18nText(englishText), chineseText);
	}
});

const loadStaticFallbackMap = async () => {
	if (staticFallbackMapReady) return;

	if (!staticFallbackMapPromise) {
		staticFallbackMapPromise = fetch('assets/js/zh-fallback-map.json', { cache: 'no-store' })
			.then((response) => (response.ok ? response.json() : {}))
			.catch(() => ({}));
	}

	const staticMap = await staticFallbackMapPromise;
	Object.entries(staticMap).forEach(([englishText, chineseText]) => {
		if (!englishText || !chineseText) return;
		if (englishText.includes('@')) return;
		i18nByEnglishText.set(englishText, chineseText);
		i18nByEnglishText.set(normalizeI18nText(englishText), chineseText);
	});
	staticFallbackMapReady = true;
};

const getTranslatableTextNodes = () => {
	const nodes = [];
	const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
		acceptNode(node) {
			if (!node || !node.parentElement) return NodeFilter.FILTER_REJECT;
			const parent = node.parentElement;
			if (parent.closest('.language-switcher')) return NodeFilter.FILTER_REJECT;
			const tag = parent.tagName;
			if (['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEXTAREA', 'CODE', 'PRE'].includes(tag)) {
				return NodeFilter.FILTER_REJECT;
			}
			if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
			return NodeFilter.FILTER_ACCEPT;
		}
	});

	while (walker.nextNode()) {
		nodes.push(walker.currentNode);
	}

	return nodes;
};

const getTranslatablePlaceholderElements = () => {
	return Array.from(document.querySelectorAll('input[placeholder], textarea[placeholder]'));
};

const translateNodeValue = (node, targetLanguage) => {
	if (!originalTextByNode.has(node)) {
		originalTextByNode.set(node, node.nodeValue || '');
	}

	const originalValue = originalTextByNode.get(node) || '';
	if (targetLanguage === 'en') {
		node.nodeValue = originalValue;
		return;
	}

	const match = originalValue.match(/^(\s*)([\s\S]*?)(\s*)$/);
	const leading = match?.[1] || '';
	const core = match?.[2] || '';
	const trailing = match?.[3] || '';
	if (!core.trim()) return;

	const translatedCore = getI18nTranslation(core) || core;
	node.nodeValue = `${leading}${translatedCore}${trailing}`;
};

const translatePlaceholder = (element, targetLanguage) => {
	if (!originalPlaceholderByElement.has(element)) {
		originalPlaceholderByElement.set(element, element.getAttribute('placeholder') || '');
	}

	const originalPlaceholder = originalPlaceholderByElement.get(element) || '';
	if (targetLanguage === 'en') {
		element.setAttribute('placeholder', originalPlaceholder);
		return;
	}

	if (!originalPlaceholder.trim()) return;
	const translated = getI18nTranslation(originalPlaceholder) || originalPlaceholder;
	element.setAttribute('placeholder', translated);
};

const translateWholePage = async (activeLanguage) => {
	const targetLanguage = activeLanguage === 'zh' ? 'zh' : 'en';
	const textNodes = getTranslatableTextNodes();
	const placeholders = getTranslatablePlaceholderElements();

	for (const node of textNodes) {
		translateNodeValue(node, targetLanguage);
	}

	for (const element of placeholders) {
		translatePlaceholder(element, targetLanguage);
	}
};

const applyLanguage = async (languageCode) => {
	const activeLanguage = translations[languageCode] ? languageCode : 'en';
	const dictionary = translations[activeLanguage];

	document.documentElement.lang = activeLanguage === 'zh' ? 'zh-CN' : 'en';

	if (activeLanguage === 'zh') {
		await loadStaticFallbackMap();
	}

	document.querySelectorAll('[data-i18n]').forEach((element) => {
		const key = element.getAttribute('data-i18n');
		if (key && dictionary[key]) {
			element.textContent = dictionary[key];
			return;
		}

		if (!element.dataset.i18nDefault) {
			element.dataset.i18nDefault = element.textContent?.trim() || '';
		}

		if (activeLanguage === 'zh') {
			const fallback = getI18nTranslation(element.dataset.i18nDefault || '');
			if (fallback) {
				element.textContent = fallback;
			}
		} else if (element.dataset.i18nDefault) {
			element.textContent = element.dataset.i18nDefault;
		}
	});

	document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
		const key = element.getAttribute('data-i18n-placeholder');
		if (key && dictionary[key]) {
			element.setAttribute('placeholder', dictionary[key]);
		}
	});

	if (currentLanguage) {
		currentLanguage.textContent = languageButtonLabel[activeLanguage] || 'EN';
	}

	languageOptions.forEach((option) => {
		const isActive = option.dataset.lang === activeLanguage;
		option.classList.toggle('active', isActive);
		const parent = option.closest('li');
		if (parent) {
			parent.setAttribute('aria-selected', String(isActive));
		}
	});

	localStorage.setItem('site-language', activeLanguage);
	await translateWholePage(activeLanguage);
};

const savedLanguage = localStorage.getItem('site-language') || 'en';
applyLanguage(savedLanguage);

if (languageTrigger && languageSwitcher) {
	languageTrigger.addEventListener('click', () => {
		const isOpen = languageSwitcher.classList.toggle('open');
		languageTrigger.setAttribute('aria-expanded', String(isOpen));
	});

	languageOptions.forEach((option) => {
		option.addEventListener('click', () => {
			const selectedLanguage = option.dataset.lang || 'en';
			applyLanguage(selectedLanguage);
			languageSwitcher.classList.remove('open');
			languageTrigger.setAttribute('aria-expanded', 'false');
		});
	});

	document.addEventListener('click', (event) => {
		if (!languageSwitcher.contains(event.target)) {
			languageSwitcher.classList.remove('open');
			languageTrigger.setAttribute('aria-expanded', 'false');
		}
	});
}

const revealItems = document.querySelectorAll('.reveal');
revealItems.forEach((item, index) => {
	item.style.setProperty('--reveal-delay', `${Math.min(index * 70, 420)}ms`);
});

const normalizeRoutePath = (inputPath) => {
	let normalized = inputPath.split('?')[0].split('#')[0] || '/';
	if (!normalized.startsWith('/')) {
		normalized = `/${normalized}`;
	}
	normalized = normalized.replace(/\/index\.html$/i, '/');
	normalized = normalized.replace(/\.html$/i, '/');
	normalized = normalized.replace(/\/+$/, '/');
	return normalized;
};

const markActiveNavLink = () => {
	const currentPath = normalizeRoutePath(window.location.pathname);
	const links = document.querySelectorAll('.menu a');

	links.forEach((link) => {
		const href = (link.getAttribute('href') || '').trim();
		if (!href || href.startsWith('#') || href.startsWith('http')) {
			return;
		}

		const targetPath = normalizeRoutePath(new URL(href, window.location.href).pathname);
		const isHome = targetPath === '/';
		const isActive = isHome
			? currentPath === '/' || currentPath.endsWith('/i-gen-theme/')
			: currentPath === targetPath;

		link.classList.toggle('is-active', isActive);
	});
};

markActiveNavLink();

const navbar = document.querySelector('.navbar');
const toggleNavbarState = () => {
	if (!navbar) return;
	navbar.classList.toggle('is-scrolled', window.scrollY > 8);
};

toggleNavbarState();
window.addEventListener('scroll', toggleNavbarState, { passive: true });

if ('IntersectionObserver' in window) {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('show');
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.15 }
	);

	revealItems.forEach((item) => observer.observe(item));
} else {
	revealItems.forEach((item) => item.classList.add('show'));
}

const runCounter = (element) => {
	const target = Number(element.dataset.target || 0);
	if (!Number.isFinite(target) || target <= 0) return;

	const duration = 1200;
	const start = performance.now();

	const tick = (now) => {
		const progress = Math.min((now - start) / duration, 1);
		element.textContent = String(Math.floor(progress * target));
		if (progress < 1) {
			requestAnimationFrame(tick);
		} else {
			element.textContent = String(target);
		}
	};

	requestAnimationFrame(tick);
};

const initCounters = () => {
	const counters = document.querySelectorAll('.counter-value[data-target]');
	if (!counters.length) return;

	if (!('IntersectionObserver' in window)) {
		counters.forEach((counter) => runCounter(counter));
		return;
	}

	const counterObserver = new IntersectionObserver(
		(entries, obs) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				runCounter(entry.target);
				obs.unobserve(entry.target);
			});
		},
		{ threshold: 0.45 }
	);

	counters.forEach((counter) => counterObserver.observe(counter));
};

initCounters();

const initBlogFilters = () => {
	const filterButtons = document.querySelectorAll('.blog-filter-btn');
	const searchInput = document.querySelector('#blog-search');
	const cards = document.querySelectorAll('[data-blog-card]');
	const noResults = document.querySelector('#blog-no-results');

	if (!filterButtons.length || !cards.length) return;

	let activeCategory = 'all';

	const applyFilters = () => {
		const keyword = (searchInput?.value || '').trim().toLowerCase();
		let visibleCount = 0;

		cards.forEach((card) => {
			const category = (card.dataset.category || '').toLowerCase();
			const title = (card.dataset.title || '').toLowerCase();
			const excerpt = (card.dataset.excerpt || '').toLowerCase();
			const matchesCategory = activeCategory === 'all' || category === activeCategory;
			const matchesKeyword = !keyword || title.includes(keyword) || excerpt.includes(keyword);
			const shouldShow = matchesCategory && matchesKeyword;

			card.hidden = !shouldShow;
			if (shouldShow) {
				visibleCount += 1;
			}
		});

		if (noResults) {
			noResults.hidden = visibleCount > 0;
		}
	};

	filterButtons.forEach((button) => {
		button.addEventListener('click', () => {
			activeCategory = button.dataset.category || 'all';
			filterButtons.forEach((item) => item.classList.toggle('is-active', item === button));
			applyFilters();
		});
	});

	if (searchInput) {
		searchInput.addEventListener('input', applyFilters);
	}

	applyFilters();
};

initBlogFilters();

const initCoreTechSection = () => {
	const section = document.querySelector('[data-core-tech]');
	if (!section) return;

	const cards = Array.from(section.querySelectorAll('[data-core-card]'));
	const fills = Array.from(section.querySelectorAll('.core-bar-fill[data-fill]'));

	fills.forEach((fill) => {
		const amount = Number(fill.dataset.fill || 0);
		if (!Number.isFinite(amount)) return;
		const normalized = Math.max(0, Math.min(100, amount));
		fill.style.setProperty('--fill', String(normalized));
	});

	const activateSection = () => {
		section.classList.add('is-active');
	};

	const showCardData = (card) => {
		card.classList.add('is-visible');
	};

	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
		activateSection();
		cards.forEach(showCardData);
		return;
	}

	section.classList.add('core-prereveal');

	const sectionObserver = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				activateSection();
				observer.unobserve(entry.target);
			});
		},
		{ threshold: 0.28 }
	);

	sectionObserver.observe(section);

	const cardObserver = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				showCardData(entry.target);
				observer.unobserve(entry.target);
			});
		},
		{ threshold: 0.4 }
	);

	cards.forEach((card) => cardObserver.observe(card));

	window.setTimeout(() => {
		if (!section.classList.contains('is-active')) {
			activateSection();
		}

		cards.forEach((card) => {
			if (!card.classList.contains('is-visible')) {
				showCardData(card);
			}
		});
	}, 1000);
};

initCoreTechSection();

const initCapabilitiesRadar = () => {
	const radar = document.querySelector('[data-cap-radar]');
	if (!radar) return;

	const section = radar.closest('.tcs-section');
	const stage = radar.querySelector('[data-cap-radar-stage]');
	const core = radar.querySelector('[data-cap-core]');
	const nodes = Array.from(radar.querySelectorAll('.cap-node[data-cap]'));
	const lines = Array.from(radar.querySelectorAll('.cap-line[data-cap-line]'));
	const panels = Array.from(radar.querySelectorAll('.cap-panel-card[data-cap-panel]'));
	const mobileQuery = window.matchMedia('(max-width: 860px)');
	if (!stage || !core || !nodes.length) return;

	let activeCapability = nodes.find((node) => node.classList.contains('is-active'))?.dataset.cap || nodes[0].dataset.cap;

	lines.forEach((line, index) => {
		line.style.setProperty('--line-delay', `${Math.min(index * 70, 560)}ms`);
	});

	const pulseCore = () => {
		core.classList.remove('is-pulse');
		void core.offsetWidth;
		core.classList.add('is-pulse');
	};

	const setActiveCapability = (capabilityKey) => {
		if (!capabilityKey) return;
		activeCapability = capabilityKey;

		nodes.forEach((node) => {
			node.classList.toggle('is-active', node.dataset.cap === capabilityKey);
		});

		lines.forEach((line) => {
			line.classList.toggle('is-active', line.dataset.capLine === capabilityKey);
		});

		panels.forEach((panel) => {
			panel.classList.toggle('is-active', panel.dataset.capPanel === capabilityKey);
		});

		pulseCore();
	};

	nodes.forEach((node) => {
		const capabilityKey = node.dataset.cap;
		if (!capabilityKey) return;

		const activate = () => setActiveCapability(capabilityKey);
		node.addEventListener('mouseenter', activate);
		node.addEventListener('focus', activate);
		node.addEventListener('click', activate);
	});

	setActiveCapability(activeCapability);

	const activateStage = () => {
		stage.classList.add('is-active');
		section?.classList.add('is-active');
	};

	const syncMobileState = () => {
		const isMobile = mobileQuery.matches;
		section?.classList.toggle('cap-mobile', isMobile);
		if (isMobile) {
			section?.classList.remove('cap-prereveal');
			activateStage();
		}
	};

	syncMobileState();

	if (typeof mobileQuery.addEventListener === 'function') {
		mobileQuery.addEventListener('change', syncMobileState);
	} else if (typeof mobileQuery.addListener === 'function') {
		mobileQuery.addListener(syncMobileState);
	}

	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window) || mobileQuery.matches) {
		activateStage();
		return;
	}

	section?.classList.add('cap-prereveal');

	const radarObserver = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				activateStage();
				observer.unobserve(entry.target);
			});
		},
		{ threshold: 0.3 }
	);

	radarObserver.observe(radar);

	window.setTimeout(() => {
		if (!stage.classList.contains('is-active')) {
			activateStage();
		}
	}, 1100);
};

initCapabilitiesRadar();

const initSolutionsTabs = () => {
	const tabs = Array.from(document.querySelectorAll('.solx-tab[data-solx-target]'));
	const panels = Array.from(document.querySelectorAll('.solx-panel[data-solx-panel]'));
	if (!tabs.length || !panels.length) return;

	const activate = (targetKey) => {
		tabs.forEach((tab) => {
			const isActive = tab.dataset.solxTarget === targetKey;
			tab.classList.toggle('is-active', isActive);
			tab.setAttribute('aria-selected', String(isActive));
		});

		panels.forEach((panel) => {
			panel.classList.toggle('is-active', panel.dataset.solxPanel === targetKey);
		});
	};

	tabs.forEach((tab) => {
		tab.addEventListener('click', () => {
			activate(tab.dataset.solxTarget || '');
		});
	});

	activate(tabs[0].dataset.solxTarget || '');
};

initSolutionsTabs();

const initSolutionsCardCarousels = () => {
	const cards = document.querySelectorAll('[data-sol-carousel]');
	if (!cards.length) return;

	const supportsHover = window.matchMedia('(hover: hover)').matches;

	cards.forEach((card) => {
		const carousel = card.querySelector('.sol-card-carousel');
		const track = card.querySelector('.sol-card-track');
		const slides = card.querySelectorAll('.sol-card-slide');
		if (!carousel || !track || slides.length < 2) return;

		let activeIndex = 0;
		let intervalId = null;
		const step = 100 / slides.length;
		const dotsWrap = document.createElement('div');
		dotsWrap.className = 'sol-card-dots';
		dotsWrap.setAttribute('aria-label', 'Carousel navigation');

		track.style.width = `${slides.length * 100}%`;
		slides.forEach((slide) => {
			slide.style.flex = `0 0 ${step}%`;
			slide.style.maxWidth = `${step}%`;
		});

		const dots = Array.from(slides).map((_, index) => {
			const dot = document.createElement('button');
			dot.type = 'button';
			dot.className = 'sol-card-dot';
			dot.setAttribute('aria-label', `Show carousel panel ${index + 1}`);
			dot.setAttribute('aria-current', index === 0 ? 'true' : 'false');
			dot.addEventListener('click', () => {
				setSlide(index);
			});
			dotsWrap.appendChild(dot);
			return dot;
		});

		card.appendChild(dotsWrap);

		const updateDots = () => {
			dots.forEach((dot, index) => {
				dot.setAttribute('aria-current', index === activeIndex ? 'true' : 'false');
			});
		};

		const setSlide = (nextIndex) => {
			activeIndex = (nextIndex + slides.length) % slides.length;
			track.style.transform = `translateX(-${activeIndex * step}%)`;
			updateDots();
		};

		const stopRotation = () => {
			if (!intervalId) return;
			clearInterval(intervalId);
			intervalId = null;
		};

		const startRotation = () => {
			if (!supportsHover || intervalId) return;
			intervalId = setInterval(() => {
				setSlide(activeIndex + 1);
			}, 1800);
		};

		const resetCarousel = () => {
			stopRotation();
			setSlide(0);
		};

		setSlide(0);

		card.addEventListener('mouseenter', startRotation);
		card.addEventListener('mouseleave', resetCarousel);
		card.addEventListener('focusin', startRotation);
		card.addEventListener('focusout', (event) => {
			if (card.contains(event.relatedTarget)) return;
			resetCarousel();
		});
	});
};

initSolutionsCardCarousels();

const initArchitectureLayerHover = () => {
	const demo = document.querySelector('[data-arch-demo]');
	if (!demo) return;

	const stackVisual = demo.querySelector('.solx-arch-stack-visual');
	const plates = Array.from(demo.querySelectorAll('.solx-arch-plate[data-arch-layer]'));
	const details = Array.from(demo.querySelectorAll('.solx-arch-detail[data-arch-layer]'));
	if (!stackVisual || !plates.length || !details.length) return;

	let activeIndex = 0;

	const setActiveByLayer = (layer) => {
		plates.forEach((plate) => {
			plate.classList.toggle('is-active', plate.dataset.archLayer === layer);
		});

		details.forEach((detail) => {
			detail.classList.toggle('is-active', detail.dataset.archLayer === layer);
		});
	};

	const setActiveByIndex = (index) => {
		activeIndex = (index + plates.length) % plates.length;
		const layer = plates[activeIndex]?.dataset.archLayer;
		if (!layer) return;
		setActiveByLayer(layer);
	};

	plates.forEach((plate, index) => {
		const activate = () => setActiveByIndex(index);
		plate.addEventListener('mouseenter', activate);
		plate.addEventListener('click', activate);
		plate.addEventListener('focus', activate);
	});

	const bandLayers = ['applications', 'platform', 'compute', 'resource'];
	stackVisual.addEventListener('mousemove', (event) => {
		const rect = stackVisual.getBoundingClientRect();
		if (!rect.width || !rect.height) return;
		const yRatio = (event.clientY - rect.top) / rect.height;
		const band = Math.min(bandLayers.length - 1, Math.max(0, Math.floor(yRatio * bandLayers.length)));
		const layer = bandLayers[band];
		const idx = plates.findIndex((plate) => plate.dataset.archLayer === layer);
		if (idx >= 0) {
			setActiveByIndex(idx);
		}
	});

	details.forEach((detail) => {
		detail.addEventListener('mouseenter', () => {
			const idx = plates.findIndex((plate) => plate.dataset.archLayer === detail.dataset.archLayer);
			if (idx >= 0) setActiveByIndex(idx);
		});
	});

	setActiveByIndex(0);
};

initArchitectureLayerHover();

const initBusinessArchitectureStack = () => {
	const layout = document.querySelector('[data-ba-stack]');
	if (!layout) return;

	const stackVisual = layout.querySelector('[data-ba-stack-visual]');
	const layers = Array.from(layout.querySelectorAll('.ba-layer[data-ba-layer]'));
	const details = Array.from(layout.querySelectorAll('.ba-detail-card[data-ba-detail]'));
	const toggles = Array.from(layout.querySelectorAll('.ba-mobile-toggle[data-ba-toggle]'));
	if (!stackVisual || !layers.length) return;

	const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	const mobileQuery = window.matchMedia('(max-width: 860px)');
	let activeLayer = layers.find((layer) => layer.classList.contains('is-active'))?.dataset.baLayer || layers[0].dataset.baLayer;

	const setActive = (layerName) => {
		if (!layerName) return;
		activeLayer = layerName;

		layers.forEach((layer) => {
			layer.classList.toggle('is-active', layer.dataset.baLayer === layerName);
		});

		details.forEach((detail) => {
			detail.classList.toggle('is-active', detail.dataset.baDetail === layerName);
		});
	};

	const syncMobileAccordion = () => {
		if (!mobileQuery.matches) {
			layers.forEach((layer) => layer.classList.add('is-open'));
			toggles.forEach((toggle) => toggle.setAttribute('aria-expanded', 'true'));
			return;
		}

		layers.forEach((layer) => {
			const isOpen = layer.dataset.baLayer === activeLayer;
			layer.classList.toggle('is-open', isOpen);
		});

		toggles.forEach((toggle) => {
			const isOpen = toggle.dataset.baToggle === activeLayer;
			toggle.setAttribute('aria-expanded', String(isOpen));
		});
	};

	const activateLayer = (layerName) => {
		setActive(layerName);
		syncMobileAccordion();
	};

	layers.forEach((layer) => {
		const layerName = layer.dataset.baLayer;
		if (!layerName) return;

		const activate = () => activateLayer(layerName);
		layer.addEventListener('mouseenter', activate);
		layer.addEventListener('focusin', activate);
		layer.addEventListener('click', activate);
	});

	details.forEach((detail) => {
		detail.addEventListener('mouseenter', () => {
			const layerName = detail.dataset.baDetail;
			if (!layerName) return;
			stackVisual.classList.add('is-hovering');
			activateLayer(layerName);
		});
	});

	toggles.forEach((toggle) => {
		toggle.addEventListener('click', () => {
			const layerName = toggle.dataset.baToggle;
			if (!layerName) return;
			activateLayer(layerName);
		});
	});

	stackVisual.addEventListener('mouseenter', () => {
		stackVisual.classList.add('is-hovering');
	});

	stackVisual.addEventListener('mouseleave', () => {
		stackVisual.classList.remove('is-hovering');
	});

	const handleModeChange = () => {
		stackVisual.classList.remove('is-hovering');
		syncMobileAccordion();
	};

	if (typeof mobileQuery.addEventListener === 'function') {
		mobileQuery.addEventListener('change', handleModeChange);
	} else if (typeof mobileQuery.addListener === 'function') {
		mobileQuery.addListener(handleModeChange);
	}

	activateLayer(activeLayer);

	if (reduceMotion) {
		layout.classList.add('is-visible');
		return;
	}

	if (!('IntersectionObserver' in window)) {
		layout.classList.add('is-visible');
		return;
	}

	layout.classList.add('ba-prereveal');

	const stackObserver = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				layout.classList.add('is-visible');
				observer.unobserve(entry.target);
			});
		},
		{ threshold: 0.32 }
	);

	stackObserver.observe(layout);

	window.setTimeout(() => {
		if (!layout.classList.contains('is-visible')) {
			layout.classList.add('is-visible');
		}
	}, 900);
};

initBusinessArchitectureStack();

const initAboutMapScrollAnimation = () => {
	const stage = document.querySelector('.about-map-scroll-stage');
	const image = stage?.querySelector('.about-map-image');
	const scrollContainer = document.querySelector('[data-scroll-container]');
	const stickyContainer = document.querySelector('[data-sticky-container]');

	if (!stage || !image || !scrollContainer || !stickyContainer) return;
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		image.style.transform = 'scale(1)';
		return;
	}

	if (!window.gsap || !window.ScrollTrigger) return;

	window.gsap.registerPlugin(window.ScrollTrigger);
	window.gsap.set(image, { transformOrigin: 'center center' });

	const scrubAmount = window.matchMedia('(max-width: 767px)').matches ? 0.3 : 0.8;
	const triggerId = 'about-map-pin';
	const existing = window.ScrollTrigger.getById(triggerId);
	if (existing) {
		existing.kill();
	}

	const existingTween = window.gsap.getTweensOf(image);
	if (existingTween.length) {
		existingTween.forEach((tween) => tween.kill());
	}

	const createAnimation = () => {
		window.gsap.fromTo(image, {
			scale: 0.5
		}, {
			scale: 1,
			ease: 'none',
			overwrite: 'auto',
			scrollTrigger: {
				id: triggerId,
				trigger: scrollContainer,
				start: 'top top',
				end: () => {
					const distance = Math.max(scrollContainer.offsetHeight - stickyContainer.offsetHeight, Math.round(window.innerHeight * 0.9));
					return `+=${distance}`;
				},
				scrub: scrubAmount,
				pin: stickyContainer,
				pinSpacing: true,
				anticipatePin: 1,
				invalidateOnRefresh: true
			}
		});

		window.ScrollTrigger.refresh();
	};

	if (image.complete) {
		createAnimation();
		return;
	}

	image.addEventListener('load', createAnimation, { once: true });
	image.addEventListener('error', createAnimation, { once: true });
};

initAboutMapScrollAnimation();
