const iconPaths = {
  android: '<path d="m7 5-2-3m12 3 2-3M3 13a9 9 0 0 1 18 0H3Zm0 0v6h18v-6M7 19v3m10-3v3"/><circle cx="8" cy="9" r=".7" fill="currentColor" stroke="none"/><circle cx="16" cy="9" r=".7" fill="currentColor" stroke="none"/>',
  flutter: '<path d="M14 2h7L8 15l-3-3L14 2Zm0 10h7l-7 7-4-4 4-3Zm0 7 3 3h-7l-3-3 3-4"/>',
  sparkles: '<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Zm7 0v4m-2-2h4"/>',
  phone: '<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 5h4m-3 14h2"/>',
  workflow: '<rect x="2" y="3" width="7" height="6" rx="1"/><rect x="15" y="15" width="7" height="6" rx="1"/><path d="M9 6h7a3 3 0 0 1 3 3v6m-3-3 3 3 3-3M5 9v9h6m-3-3 3 3-3 3"/>',
  cloud: '<path d="M7 18a5 5 0 1 1 .3-10A7 7 0 0 1 21 10a4 4 0 0 1-1 8H7Z"/>',
  docker: '<path d="M2 12h17c1 0 2-.5 3-1-1 6-5 9-11 9-5 0-8-2-9-8Z"/><path d="M5 12V8h4v4m0-4V4h4v8m0-4h4v4M3 8h2"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2Z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  code: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 8h20M8 12l-3 3 3 3m8-6 3 3-3 3m-3-7-2 8"/>',
  monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4M5 14h14"/>',
  server: '<rect x="3" y="2" width="18" height="5" rx="1"/><rect x="3" y="10" width="18" height="5" rx="1"/><path d="M7 4.5h.01M7 12.5h.01M12 7v3m0 5v6M5 21h14m-2-16.5h1m-1 8h1"/>',
  layers: '<path d="m12 3 10 5-10 5L2 8l10-5Zm-10 9 10 5 10-5M2 16l10 5 10-5"/>',
  database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0"/>',
  message: '<path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H4l-3 2 2-6A8.5 8.5 0 1 1 21 11.5Z"/><path d="M7 9h9m-9 4h6"/>'
};
document.querySelectorAll('[data-icon]').forEach(element => {
  element.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[element.dataset.icon] || ''}</svg>`;
});

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  navigation.classList.remove('open');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  navigation.classList.toggle('open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.nav-shell')) closeMenu();
});
const desktopQuery = window.matchMedia('(min-width: 761px)');
desktopQuery.addEventListener('change', event => { if (event.matches) closeMenu(); });

const navLinks = [...navigation.querySelectorAll('a')];
const sections = [...document.querySelectorAll('main section[id]')];
let scrollScheduled = false;
function updateActiveSection() {
  let current = 'home';
  sections.forEach(section => { if (section.getBoundingClientRect().top <= 160) current = section.id; });
  navLinks.forEach(link => {
    const active = link.hash === `#${current}`;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  scrollScheduled = false;
}
window.addEventListener('scroll', () => {
  if (!scrollScheduled) { scrollScheduled = true; requestAnimationFrame(updateActiveSection); }
}, { passive: true });
updateActiveSection();

document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(item => {
      item.classList.toggle('selected', item === button);
      item.setAttribute('aria-pressed', String(item === button));
    });
    document.querySelectorAll('.project-card').forEach(card => {
      card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
    });
  });
});

const projects = {
  miumiu: {
    label: 'WEB & E-COMMERCE / LIVE WEBSITE',
    title: 'Miu Miu — Vinyl Club footwear',
    description: 'A fashion e-commerce collection page focused on discovering and comparing footwear through visual browsing and product filters.',
    sections: [
      { title: 'Problem addressed', text: 'A footwear collection needs to be easy to explore without overwhelming shoppers. The page combines product imagery with prices, sorting, and filters to help visitors narrow their selection.' },
      { title: 'Technology used', text: 'The web experience provides a product catalog with collection, color, material, and size filters, alongside sorting controls and product detail links.' },
      { title: 'What makes it different', text: 'A curated Vinyl Club collection pairs a fashion-led visual presentation with practical product discovery, keeping the collection identity visible throughout the browsing experience.' }
    ],
    storeUrl: 'https://www.miumiu.com/de/de/miu-miu-vinyl-club/shoes/c/11132EU',
    storeLabel: 'Visit website',
    image: 'assets/miumiu-website.jpg',
    imageAlt: 'Miu Miu Vinyl Club storefront showing navigation, footwear product grid, filters, and prices',
    imageCaption: 'Miu Miu · Vinyl Club storefront screenshot',
    webProject: true,
    skillGroups: [
      { title: 'Web experience', skills: ['Responsive storefronts', 'Product grid interfaces', 'Visual hierarchy', 'Accessibility'] },
      { title: 'Catalog & discovery', skills: ['Product filtering', 'Sorting controls', 'Product detail navigation', 'Collection browsing'] },
      { title: 'Commerce & content', skills: ['Catalog data modeling', 'Product imagery', 'Price presentation', 'Content integration'] },
      { title: 'Quality & delivery', skills: ['API integration', 'Browser testing', 'Image optimization', 'Performance optimization'] }
    ],
    skillsTitle: 'Relevant engineering skills'
  },
  luckyorange: {
    label: 'WEB & ANALYTICS / LIVE WEBSITE',
    title: 'Lucky Orange — Website analytics',
    description: 'A web analytics platform that connects traffic metrics with visitor behavior to help teams understand conversion friction.',
    sections: [
      { title: 'Problem addressed', text: 'Traffic counts show what changes, but can leave the reasons unclear. Lucky Orange connects page metrics and form drop-off with session recordings and heatmaps to help teams investigate where visitors struggle.' },
      { title: 'Technology used', text: 'Real-time analytics dashboards, visitor segmentation, dynamic heatmaps, session recordings, and field-level form analytics connect quantitative metrics with behavioral evidence.' },
      { title: 'What makes it different', text: 'Teams can move from a traffic segment, page metric, or abandoned form field directly into related recordings and heatmaps, linking an observed issue to visitor behavior.' }
    ],
    storeUrl: 'https://www.luckyorange.com/analytics',
    storeLabel: 'Visit website',
    image: 'assets/luckyorange-website.jpg',
    imageAlt: 'Lucky Orange analytics website showing its branded navigation and analytics overview',
    imageCaption: 'Lucky Orange · Analytics website screenshot',
    webProject: true,
    skillGroups: [
      { title: 'Analytics & data', skills: ['Event tracking', 'Visitor segmentation', 'Form analytics', 'Data visualization'] },
      { title: 'Behavior & conversion', skills: ['Session recordings', 'Heatmap interfaces', 'Conversion analysis', 'Behavioral analysis'] },
      { title: 'Web experience', skills: ['Dashboard interfaces', 'Responsive UI', 'Interactive filtering', 'Accessibility'] },
      { title: 'Integration & quality', skills: ['API integration', 'Data privacy', 'Browser testing', 'Performance optimization'] }
    ],
    skillsTitle: 'Relevant engineering skills'
  },
  rolla: {
    label: 'MOBILE & TRAVEL / LIVE APP',
    title: 'Rolla — Travel journal & sharing',
    description: 'A travel-focused social app that combines interactive maps, photos, and playlists into a journal you can share or keep private.',
    sections: [
      { title: 'Problem addressed', text: 'Trip photos and memories can lose their connection to the places they came from. Rolla organizes a journey around a map, linking memorable locations with photos and a trip soundtrack.' },
      { title: 'Technology used', text: 'An iOS mobile experience brings interactive maps, location-based photo pins, playlists, and social sharing together. Trips can be documented as they happen or added afterward.' },
      { title: 'What makes it different', text: 'Each trip becomes an interactive map with numbered photo pins and its own playlist. Followers can explore individual stops, while private sharing options give users control over their journal.' }
    ],
    storeUrl: 'https://apps.apple.com/us/app/rolla-travel-journal-share/id6757051407',
    image: 'assets/rolla-map.jpg',
    imageAlt: 'Rolla interactive trip map showing numbered photo pins and a playlist',
    imageCaption: 'Rolla · App Store screenshot',
    skillGroups: [
      { title: 'Mobile experience', skills: ['iOS applications', 'Mobile UI & UX', 'Travel journaling', 'Accessibility'] },
      { title: 'Maps & media', skills: ['Interactive maps', 'Location-based content', 'Photo workflows', 'Playlist integration'] },
      { title: 'Social & privacy', skills: ['Social sharing', 'Profile interfaces', 'Comments & reactions', 'Visibility controls'] },
      { title: 'Integration & delivery', skills: ['API integration', 'Mobile testing', 'Performance optimization', 'App release management'] }
    ],
    skillsTitle: 'Relevant engineering skills'
  },
  menbili: {
    label: 'MOBILE & SOCIAL / LIVE APP',
    title: 'Menbili — Social discovery app',
    description: 'A social app for gay men in Japan to find friends through shared interests, profiles, and conversations.',
    sections: [
      { title: 'Problem addressed', text: 'Meeting like-minded friends can be difficult when everyday opportunities are limited or privacy is a concern. Menbili combines profile discovery, interest-based communities, and messaging to help people connect.' },
      { title: 'Technology used', text: 'An Android mobile experience combines profile search, messaging, community discovery, and outing boards, with photo privacy controls and reporting features.' },
      { title: 'What makes it different', text: 'Its focus combines shared hobbies and planned outings with privacy features, including photo mosaics, and an unlimited profile-visit feature.' }
    ],
    storeUrl: 'https://play.google.com/store/apps/details?id=com.greeme.matchingapp',
    storeLabel: 'Visit Google Play',
    image: 'assets/menbili-community.jpg',
    imageAlt: 'Menbili interest-based community discovery screen from Google Play',
    imageCaption: 'Menbili · Google Play screenshot',
    skillGroups: [
      { title: 'Mobile experience', skills: ['Android applications', 'Mobile UI & UX', 'Profile interfaces', 'Accessibility'] },
      { title: 'Social & discovery', skills: ['Profile search', 'Community discovery', 'Messaging workflows', 'Interest-based discovery'] },
      { title: 'Privacy & trust', skills: ['Photo privacy controls', 'Reporting workflows', 'Content moderation', 'Data privacy'] },
      { title: 'Integration & delivery', skills: ['API integration', 'Mobile testing', 'Performance optimization', 'App release management'] }
    ],
    skillsTitle: 'Relevant engineering skills'
  },
  gigsters: {
    label: 'MOBILE & STAFFING / LIVE APP',
    title: 'Gigsters — Mobile staffing platform',
    description: 'A mobile staffing app that connects workers with healthcare facilities looking for help.',
    sections: [
      { title: 'Problem addressed', text: 'Finding staffing opportunities can involve a slow onboarding process. Gigsters offers quick registration and access to a network of healthcare facilities seeking workers.' },
      { title: 'Technology used', text: 'An Android mobile app brings registration, staffing access, and Next Day SmartPay into a mobile experience.' },
      { title: 'What makes it different', text: 'The emphasis is on fast registration, healthcare staffing opportunities, and Next Day SmartPay, bringing access to work and faster payment together.' }
    ],
    storeUrl: 'https://play.google.com/store/apps/details?id=com.booksmartllc',
    storeLabel: 'Visit Google Play',
    image: 'assets/gigsters-jobs.jpg',
    imageAlt: 'Gigsters work and hire screen from its Google Play listing',
    imageCaption: 'Gigsters · Google Play screenshot',
    skillGroups: [
      { title: 'Mobile experience', skills: ['Android applications', 'Mobile UI & UX', 'User onboarding', 'Accessibility'] },
      { title: 'Staffing & workflows', skills: ['Opportunity discovery', 'Worker profiles', 'Facility connections', 'Workflow design'] },
      { title: 'Data & payments', skills: ['API integration', 'Data modeling', 'Payment workflows', 'Data privacy'] },
      { title: 'Quality & delivery', skills: ['Mobile testing', 'Performance optimization', 'Error handling', 'App release management'] }
    ],
    skillsTitle: 'Relevant engineering skills'
  },
  renew360: {
    label: 'AI & HEALTH / LIVE APP',
    title: 'Renew360 — AI-powered health platform',
    description: 'A connected health platform that turns medical records and biometric data into an evolving digital health profile with personalized insights.',
    sections: [
      { title: 'Problem addressed', text: 'Medical history, lab results, and wearable data can be spread across separate systems, making it difficult to understand health changes over time. Renew360 brings these sources into a unified profile to help users explore patterns and prepare for conversations with healthcare professionals.' },
      { title: 'Technology used', text: 'AI-powered computational modeling and Digital Twin technology underpin the platform. Its Virtual Clinical Intelligence framework organizes and synthesizes health information, while wearable integrations and predictive analytics help surface trends in biometric data.' },
      { title: 'What makes it different', text: 'The defining approach is a continuously evolving Digital Twin that connects medical history with ongoing biometric information. Health records, monitoring, and personalized insights work together around that shared profile, supporting a view of health over time.' }
    ],
    storeUrl: 'https://apps.apple.com/us/app/renew360/id6736639375',
    image: 'assets/renew360-dashboard.jpg',
    imageAlt: 'Renew360 mobile app showing its health dashboard and activity feed',
    imageCaption: 'Renew360 · App Store screenshot',
    skillGroups: [
      { title: 'AI & intelligence', skills: ['AI integration', 'Digital Twin modeling', 'Predictive analytics', 'Personalization'] },
      { title: 'Health data & integration', skills: ['Health data modeling', 'Biometric data integration', 'Wearable integrations', 'API integration'] },
      { title: 'Mobile experience', skills: ['iOS applications', 'Mobile UI & UX', 'Data visualization', 'Accessibility'] },
      { title: 'Quality & delivery', skills: ['Data privacy', 'Integration testing', 'Performance optimization', 'App release management'] }
    ],
    skillsTitle: 'Relevant engineering skills'
  },
};
const dialog = document.querySelector('#detail-dialog');
function openDialog(label, title, description, extra = '', storeUrl = '', details = {}) {
  document.querySelector('#dialog-label').textContent = label;
  document.querySelector('#dialog-title').textContent = title;
  document.querySelector('#dialog-description').textContent = description;
  document.querySelector('#dialog-extra').textContent = extra;
  const caseStudy = document.querySelector('#dialog-case-study');
  caseStudy.hidden = !details.sections?.length;
  caseStudy.replaceChildren(...(details.sections || []).map(item => {
    const section = document.createElement('section');
    const heading = document.createElement('h3');
    const paragraph = document.createElement('p');
    heading.textContent = item.title;
    paragraph.textContent = item.text;
    section.append(heading, paragraph);
    return section;
  }));
  dialog.classList.toggle('project-detail', Boolean(details.image));
  dialog.classList.toggle('web-detail', Boolean(details.webProject));
  const media = document.querySelector('#dialog-media');
  const image = document.querySelector('#dialog-image');
  media.hidden = !details.image;
  document.querySelector('#dialog-image-caption').textContent = details.imageCaption || '';
  if (details.image) {
    image.src = details.image;
    image.alt = details.imageAlt || title;
  } else {
    image.removeAttribute('src');
    image.alt = '';
  }
  const skills = document.querySelector('#dialog-skills');
  skills.hidden = !details.skillGroups?.length && !details.skills?.length;
  document.querySelector('#dialog-skills-title').textContent = details.skillsTitle || 'Technical focus';
  const createSkillTag = skill => {
    const tag = document.createElement('span');
    tag.textContent = skill;
    return tag;
  };
  const skillTags = document.querySelector('#dialog-skill-tags');
  skillTags.classList.toggle('skill-groups', Boolean(details.skillGroups?.length));
  skillTags.replaceChildren(...(details.skillGroups?.length ? details.skillGroups.map(group => {
    const section = document.createElement('section');
    const heading = document.createElement('h4');
    const tags = document.createElement('div');
    heading.textContent = group.title;
    tags.className = 'tags';
    tags.append(...group.skills.map(createSkillTag));
    section.append(heading, tags);
    return section;
  }) : (details.skills || []).map(createSkillTag)));
  const storeLink = document.querySelector('#dialog-store');
  storeLink.hidden = !storeUrl;
  document.querySelector('#dialog-store-label').textContent = details.storeLabel || 'Visit App Store';
  if (storeUrl) storeLink.href = storeUrl;
  else storeLink.removeAttribute('href');
  document.querySelector('.dialog-done').hidden = Boolean(storeUrl);
  dialog.showModal();
  dialog.scrollTop = 0;
}
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const project = projects[button.dataset.project];
    openDialog(project.label || 'PROJECT CONCEPT', project.title, project.description, project.extra, project.storeUrl, project);
  });
});
document.querySelectorAll('.dialog-close, .dialog-done').forEach(button => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
});
document.querySelector('#year').textContent = new Date().getFullYear();
