/**
 * ==========================================================================
 * AURA FINISHES & CO. — MASTER ADMIN DASHBOARD ENGINE (js/admin.js)
 * Full CRUD, Live Data Store, Analytics Charts & Protected Admin Guard
 * ==========================================================================
 */

'use strict';

/* ==========================================================================
   1. DEFAULT DATASETS INITIALIZATION
   ========================================================================== */
const DEFAULT_ADMIN_CREDENTIALS = {
  email: 'admin@aurafinishes.com',
  name: 'Admin',
  role: 'admin',
  status: 'active'
};

const DEFAULT_SERVICES_STORE = [
  {
    id: 'interior-painting',
    slug: 'interior-painting',
    title: 'Luxury Interior Painting',
    icon: 'bi-brush-fill',
    price: '$8 – $18 / sq.ft.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Ultra-smooth Level-5 wall preparation, premium low-VOC mineral paints, and micro-rolled architectural ceilings.',
    fullDetails: 'Complete interior restoration and transformation using European mineral paints, ultra-fine dustless sanding, and flawless spray finishes.'
  },
  {
    id: 'exterior-painting',
    slug: 'exterior-painting',
    title: 'Estate Exterior Facades',
    icon: 'bi-house-fill',
    price: '$12 – $25 / sq.ft.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Weatherproof elastomeric coatings, masonry breathable sealers, and coastal salt-spray protection.',
    fullDetails: 'Engineered protective wall coatings formulated to withstand harsh UV radiation, coastal humidity, and seasonal freeze-thaw cycles.'
  },
  {
    id: 'residential-painting',
    slug: 'residential-painting',
    title: 'High-End Residential Finishing',
    icon: 'bi-gem',
    price: '$10 – $22 / sq.ft.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Artisanal attention to crown moldings, custom library lacquering, and satin baseboard millwork.',
    fullDetails: 'Bespoke finishing for penthouses, brownstones, and suburban estates with immaculate masking, HEPA-filtered air purifiers, and zero dust.'
  },
  {
    id: 'commercial-painting',
    slug: 'commercial-painting',
    title: 'Commercial & Hospitality Spaces',
    icon: 'bi-building-fill',
    price: '$6 – $15 / sq.ft.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Acoustic coatings, heavy-duty scuff-resistant urethane, and off-hours night shift execution.',
    fullDetails: 'Turnkey architectural finishes for luxury boutiques, corporate headquarters, Michelin-starred dining, and flagship galleries.'
  },
  {
    id: 'wall-finishing',
    slug: 'wall-finishing',
    title: 'Italian Venetian Plaster',
    icon: 'bi-palette-fill',
    price: '$20 – $45 / sq.ft.',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Burnished Marmorino, Grassello lucido, and seamless micro-cement for luxury bathrooms.',
    fullDetails: 'Authentic slaked lime and crushed Carrara marble imported directly from northern Italy, hand-troweled in multi-layered luminous textures.'
  },
  {
    id: 'texture-finishing',
    slug: 'texture-finishing',
    title: 'Limewash & Roman Clay Textures',
    icon: 'bi-droplet-half',
    price: '$14 – $28 / sq.ft.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Soft suede-like textural mottling, breathable zero-VOC Roman clay, and acoustic mineral washes.',
    fullDetails: 'Textural depth and tactile warmth created using organic earth pigments, breathable natural clays, and subtle brush cross-hatch movement.'
  }
];

const DEFAULT_PROJECT_CATEGORIES = [
  { id: 'residential', name: 'Residential', description: 'Luxury estates, penthouses, and brownstones' },
  { id: 'commercial', name: 'Commercial', description: 'Corporate headquarters, hotels, and retail flagships' },
  { id: 'interior', name: 'Interior', description: 'Living salons, master suites, and bespoke millwork' },
  { id: 'exterior', name: 'Exterior', description: 'Estates, masonry facades, and coastal protections' },
  { id: 'texture-plaster', name: 'Texture & Plaster', description: 'Venetian Marmorino, limewash, and micro-cement' }
];

const DEFAULT_PROJECTS_STORE = [
  {
    id: 'modern-residence',
    slug: 'modern-residence',
    title: 'Modern Architectural Residence',
    category: 'residential',
    categoryPill: 'Residential • Architectural Concrete',
    filterCategory: 'residential interior texture-plaster',
    location: 'Tribeca, New York',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    area: '5,200 sq.ft.',
    duration: '4 Weeks Execution',
    description: 'Level-5 skim coating and custom matte warm taupe mineral finishes throughout a three-story contemporary residence.'
  },
  {
    id: 'tribeca-penthouse-suite',
    slug: 'tribeca-penthouse-suite',
    title: 'Tribeca Penthouse Suite',
    category: 'residential',
    categoryPill: 'Residential • Venetian Plaster',
    filterCategory: 'residential interior texture-plaster',
    location: 'Manhattan, New York',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    area: '4,500 sq.ft.',
    duration: '4 Weeks Execution',
    description: 'Burnished Marmorino Venetian plaster in ivory tones featuring recessed shadow-line architectural reveals.'
  },
  {
    id: 'hudson-yards-tech-hq',
    slug: 'hudson-yards-tech-hq',
    title: 'Hudson Yards Tech HQ',
    category: 'commercial',
    categoryPill: 'Commercial • Acoustic Finish',
    filterCategory: 'commercial interior',
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    area: '12,000 sq.ft.',
    duration: '6 Weeks Execution',
    description: 'Seamless acoustic mineral plaster system across three conference atriums and executive boardrooms.'
  },
  {
    id: 'greenwich-modern-estate',
    slug: 'greenwich-modern-estate',
    title: 'Greenwich Modern Estate',
    category: 'exterior',
    categoryPill: 'Exterior • Weatherproof Coating',
    filterCategory: 'residential exterior',
    location: 'Greenwich, CT',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    area: '8,200 sq.ft.',
    duration: '5 Weeks Execution',
    description: 'Elastomeric breathable exterior facade waterproofing and micro-fine satin exterior window casing trim coatings.'
  },
  {
    id: 'soho-art-loft-residence',
    slug: 'soho-art-loft-residence',
    title: 'SoHo Art Loft Residence',
    category: 'interior',
    categoryPill: 'Interior • Limewash Texture',
    filterCategory: 'residential interior texture-plaster',
    location: 'SoHo, New York',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80',
    area: '3,800 sq.ft.',
    duration: '3 Weeks Execution',
    description: 'Hand-brushed textured Roman clay in warm biscuit and terracotta hues complementing historic cast-iron columns.'
  },
  {
    id: 'laura-restaurant-lounge',
    slug: 'laura-restaurant-lounge',
    title: 'Laura Fine Dining Lounge',
    category: 'commercial',
    categoryPill: 'Commercial • Venetian Plaster',
    filterCategory: 'commercial interior texture-plaster',
    location: 'Madison Ave, NY',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    area: '6,400 sq.ft.',
    duration: '3 Weeks Execution',
    description: 'Atmospheric charcoal lime wash and polished gold mica plaster ceiling vaults.'
  },
  {
    id: 'hamptons-coastal-villa',
    slug: 'hamptons-coastal-villa',
    title: 'Hamptons Coastal Villa',
    category: 'exterior',
    categoryPill: 'Exterior • Salt Defense',
    filterCategory: 'residential exterior',
    location: 'East Hampton, NY',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    area: '7,100 sq.ft.',
    duration: '4 Weeks Execution',
    description: 'Marine-grade breathable facade shield preventing coastal salt-air degradation and moisture intrusion.'
  },
  {
    id: 'upper-east-side-classic',
    slug: 'upper-east-side-classic',
    title: 'Upper East Side Residence',
    category: 'interior',
    categoryPill: 'Interior • High Gloss Lacquer',
    filterCategory: 'residential interior',
    location: 'Park Avenue, NY',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    area: '4,100 sq.ft.',
    duration: '4 Weeks Execution',
    description: 'Flawless 12-coat mirror gloss hand-rubbed piano lacquer in deep Oxford Blue on library wood paneling.'
  }
];

const DEFAULT_TESTIMONIALS_STORE = [
  {
    id: 'test-1',
    name: 'Arthur & Beatrice Sterling',
    role: 'Tribeca Penthouse Residence',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    text: 'Aura Finishes transformed our 5,000 sq.ft. penthouse with Venetian plaster. The team worked with museum-grade precision, zero dust, and impeccable professionalism.'
  },
  {
    id: 'test-2',
    name: 'Marcus Vance, AIA',
    role: 'Principal, Studio Vance Architecture',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    text: 'As an architect, finding contractors who understand Level-5 skim coating and raking light is rare. Aura Finishes is our top specification partner in New York.'
  },
  {
    id: 'test-3',
    name: 'Helena Rostova',
    role: 'Greenwich Estate Owner',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    text: 'The exterior breathable lime coating protected our historic stone manor from winter moisture while highlighting the masonry texture beautifully.'
  }
];

const DEFAULT_TEAM_STORE = [
  {
    id: 'team-1',
    name: 'Julian Vance',
    role: 'Founder & Master Finisher',
    exp: '18 Yrs Exp',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bio: 'Trained in Florence, Julian specializes in grand estate lime plasters and architectural gilding.'
  },
  {
    id: 'team-2',
    name: 'Elena Rostova',
    role: 'Head of Color Architecture',
    exp: '14 Yrs Exp',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    bio: 'Former museum conservator, Elena formulates custom mineral pigments and room color palettes.'
  },
  {
    id: 'team-3',
    name: 'Mateo Rossi',
    role: 'Venetian Plaster Specialist',
    exp: '16 Yrs Exp',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    bio: 'Third-generation Italian plasterer mastering Marmorino, Grassello, and seamless micro-cement.'
  },
  {
    id: 'team-4',
    name: 'Claire Montgomery',
    role: 'Senior Project Director',
    exp: '12 Yrs Exp',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    bio: 'Directs on-site quality assurance, client timelines, and zero-dust preparation protocols.'
  }
];

const DEFAULT_SOCIAL_STORE = {
  facebook: 'https://www.facebook.com/',
  instagram: 'https://www.instagram.com/',
  twitter: 'https://x.com/',
  linkedin: 'https://www.linkedin.com/',
  youtube: 'https://www.youtube.com/',
  pinterest: 'https://www.pinterest.com/'
};

const DEFAULT_SETTINGS_STORE = {
  brandName: 'Aura Finishes & Co.',
  phone: '+1 (800) 555-AURA',
  email: 'contact@aurafinishes.com',
  hours: 'Mon – Sat: 8:00 AM – 7:00 PM',
  address: '742 Evergreen Terrace, Manhattan, New York, NY'
};

/* ==========================================================================
   2. DATA STORE HELPER FUNCTIONS
   ========================================================================== */

function getStore(key, defaultVal) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : defaultVal;
  } catch (e) {
    return defaultVal;
  }
}

function setStore(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {}
}

function initAdminDataStore() {
  if (!localStorage.getItem('aura_services')) setStore('aura_services', DEFAULT_SERVICES_STORE);
  if (!localStorage.getItem('aura_projects')) setStore('aura_projects', DEFAULT_PROJECTS_STORE);
  if (!localStorage.getItem('aura_project_categories')) setStore('aura_project_categories', DEFAULT_PROJECT_CATEGORIES);
  if (!localStorage.getItem('aura_testimonials')) setStore('aura_testimonials', DEFAULT_TESTIMONIALS_STORE);
  if (!localStorage.getItem('aura_team_members')) setStore('aura_team_members', DEFAULT_TEAM_STORE);
  if (!localStorage.getItem('aura_social_links')) setStore('aura_social_links', DEFAULT_SOCIAL_STORE);
  if (!localStorage.getItem('aura_website_settings')) setStore('aura_website_settings', DEFAULT_SETTINGS_STORE);

  // Initialize Users store if empty
  const users = getStore('aura_users', []);
  if (users.length === 0) {
    const defaultUsers = [
      { id: 'usr-1', name: 'Admin', email: 'admin@aurafinishes.com', role: 'admin', date: '2025-10-01', status: 'active' },
      { id: 'usr-2', name: 'Arthur Sterling', email: 'sterling@example.com', role: 'client', date: '2026-01-12', status: 'active' },
      { id: 'usr-3', name: 'Eleanor Vance', email: 'eleanor@example.com', role: 'client', date: '2026-02-04', status: 'active' }
    ];
    setStore('aura_users', defaultUsers);
  }

  // Initialize Sample Quotes store if empty
  const quotes = getStore('aura_quote_requests', []);
  if (quotes.length === 0) {
    const defaultQuotes = [
      {
        id: 'q-101',
        name: 'Alexander Wright',
        email: 'a.wright@manhattanluxury.com',
        phone: '+1 (555) 234-5678',
        service: 'Italian Venetian Plaster',
        scope: '3,800 sq.ft. Duplex Penthouse',
        date: 'Feb 15, 2026',
        timeline: 'Within 2 Weeks',
        message: 'Looking for burnished Marmorino in high-ceiling salon and master foyer.',
        status: 'pending'
      },
      {
        id: 'q-102',
        name: 'Victoria Sterling',
        email: 'victoria@sterlingdesign.com',
        phone: '+1 (555) 876-5432',
        service: 'Luxury Interior Painting',
        scope: '6,200 sq.ft. Estate',
        date: 'Feb 11, 2026',
        timeline: '1 Month',
        message: 'Level-5 skim coat and custom muted mineral palette for entire residence.',
        status: 'contacted'
      }
    ];
    setStore('aura_quote_requests', defaultQuotes);
  }

  // Initialize Sample Contact Messages if empty
  const messages = getStore('aura_contact_messages', []);
  if (messages.length === 0) {
    const defaultMessages = [
      {
        id: 'msg-1',
        name: 'Sophia Laurent',
        email: 'sophia@laurentinteriors.com',
        phone: '+1 (555) 901-2345',
        subject: 'Architectural Specification Sample Request',
        message: 'Hello team, we are designing a boutique hotel in Tribeca and would like to request physical sample plaster boards for our client presentation.',
        date: 'Feb 14, 2026',
        status: 'unread'
      },
      {
        id: 'msg-2',
        name: 'David Thorne',
        email: 'd.thorne@greenwichhomes.com',
        phone: '+1 (555) 345-6789',
        subject: 'Exterior Facade Inspection',
        message: 'Inquiring about moisture sealing and breathable mineral wash for a stone residence in Connecticut.',
        date: 'Feb 08, 2026',
        status: 'read'
      }
    ];
    setStore('aura_contact_messages', defaultMessages);
  }
}

/* ==========================================================================
   3. ADMIN AUTHENTICATION & ACCESS CONTROL GUARD
   ========================================================================== */

function getAdminSession() {
  try {
    const raw = localStorage.getItem('aura_admin_session');
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

function setAdminSession(admin) {
  try {
    if (!admin) {
      localStorage.removeItem('aura_admin_session');
    } else {
      localStorage.setItem('aura_admin_session', JSON.stringify(admin));
    }
  } catch (e) {}
}

function checkAdminAuthGuard() {
  const isLoginPage = window.location.pathname.includes('admin-login.html');
  const isAdminDashboard = window.location.pathname.includes('admin-dashboard.html') || window.location.pathname.includes('admin.html');
  const admin = getAdminSession();

  let authUser = null;
  try {
    const raw = localStorage.getItem('aura_auth_user');
    if (raw) authUser = JSON.parse(raw);
  } catch (e) {}

  const isVerifiedAdmin = (admin && admin.role === 'admin') || (authUser && authUser.role === 'admin');

  // If on Admin Dashboard
  if (isAdminDashboard) {
    // 1. If admin session is verified -> grant access
    if (isVerifiedAdmin) {
      return true;
    }

    // 2. If logged in as normal user (role === 'user') -> Deny access & redirect to /signin
    if (authUser && authUser.role === 'user') {
      alert('Access Denied: Administrator privileges required.');
      window.location.replace('signin.html');
      return false;
    }

    // 3. Not logged in at all -> redirect to admin-login.html
    window.location.replace('admin-login.html');
    return false;
  }

  // If on Admin Login page and already logged in as admin -> Redirect to admin dashboard
  if (isLoginPage && isVerifiedAdmin) {
    window.location.replace('admin-dashboard.html');
    return;
  }
}

// Ensure back-button cache (BFCache) re-evaluates auth guard
window.addEventListener('pageshow', (event) => {
  if (window.location.pathname.includes('admin-dashboard.html') || window.location.pathname.includes('admin.html')) {
    checkAdminAuthGuard();
  }
});

function initAdminLoginHandler() {
  const form = document.getElementById('adminLoginForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('adminEmailInput');
    const passwordInput = document.getElementById('adminPasswordInput');
    const alertBox = document.getElementById('adminLoginAlert');

    const email = emailInput ? emailInput.value.trim().toLowerCase() : '';
    const password = passwordInput ? passwordInput.value.trim() : '';

    // Verify Admin Credentials (admin@aurafinishes.com / admin123 or check registered admin)
    const users = getStore('aura_users', []);
    const foundAdmin = users.find(u => (u.email.toLowerCase() === email || email === 'admin') && u.role === 'admin');

    const isValid = (email === 'admin@aurafinishes.com' && password === 'admin123') ||
                    (email === 'admin' && password === 'admin123') ||
                    (foundAdmin && (foundAdmin.password ? foundAdmin.password === password : password === 'admin123'));

    if (isValid) {
      if (alertBox) alertBox.classList.add('d-none');
      if (emailInput) emailInput.classList.remove('is-invalid');
      if (passwordInput) passwordInput.classList.remove('is-invalid');

      const adminUser = {
        name: foundAdmin ? foundAdmin.name : 'Admin',
        email: email === 'admin' ? 'admin@aurafinishes.com' : (foundAdmin ? foundAdmin.email : email),
        role: 'admin',
        loginTime: new Date().toISOString()
      };

      setAdminSession(adminUser);
      localStorage.setItem('aura_auth_user', JSON.stringify(adminUser));

      if (typeof showToast === 'function') {
        showToast('Admin authentication successful! Redirecting...', 'success');
      }

      setTimeout(() => {
        window.location.replace('admin-dashboard.html');
      }, 400);
    } else {
      if (emailInput) emailInput.classList.add('is-invalid');
      if (passwordInput) passwordInput.classList.add('is-invalid');
      if (alertBox) {
        alertBox.classList.remove('d-none');
        const text = alertBox.querySelector('#adminLoginAlertText');
        if (text) text.textContent = 'Invalid administrator email or password. Please try again.';
      }
    }
  });
}

function logoutAdmin() {
  setAdminSession(null);
  try {
    localStorage.removeItem('aura_auth_user');
    localStorage.removeItem('aura_admin_session');
    sessionStorage.clear();
  } catch (e) {}

  if (typeof showToast === 'function') {
    showToast('Administrator logged out successfully.', 'info');
  }
  setTimeout(() => {
    window.location.replace('admin-login.html');
  }, 250);
}

/* ==========================================================================
   4. ADMIN DASHBOARD CONTROLLER (Tabs, Panes, Modals, CRUD)
   ========================================================================== */

function initAdminDashboard() {
  const isAdminDashboard = window.location.pathname.includes('admin-dashboard.html') || window.location.pathname.includes('admin.html');
  if (!isAdminDashboard) return;

  initAdminDataStore();
  setupSidebarNavigation();
  setupTopbarControls();
  renderDashboardHome();
  renderUsersTable();
  renderServicesTable();
  renderProjectsTable();
  renderCategoriesGrid();
  renderArticlesTable();
  renderTestimonialsTable();
  renderMessagesTable();
  renderQuotesTable();
  renderTeamTable();
  loadSocialSettings();
  loadGeneralSettings();
  setupCRUDModalsAndListeners();
  setupGlobalAdminSearch();
}

/**
 * Tab switching & active navigation state
 */
function setupSidebarNavigation() {
  const allTargetTriggers = document.querySelectorAll('[data-target-pane]');
  const sidebarNavLinks = document.querySelectorAll('.admin-nav-link[data-target-pane]');
  const panes = document.querySelectorAll('.admin-pane');

  const activatePane = (targetId) => {
    // Hide all panes
    panes.forEach(pane => pane.classList.add('d-none'));

    // Show target pane
    const targetPane = document.getElementById(`pane-${targetId}`);
    if (targetPane) {
      targetPane.classList.remove('d-none');
    }

    // Update active nav link in sidebar
    sidebarNavLinks.forEach(link => {
      if (link.getAttribute('data-target-pane') === targetId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Update URL hash without scroll
    if (typeof window !== 'undefined' && window.history && window.history.replaceState) {
      window.history.replaceState(null, null, `#${targetId}`);
    }

    // Scroll main window smoothly to top
    if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Refresh pane content if needed
    if (targetId === 'dashboard') renderDashboardHome();
    if (targetId === 'users') renderUsersTable();
    if (targetId === 'services') renderServicesTable();
    if (targetId === 'projects') renderProjectsTable();
    if (targetId === 'categories') renderCategoriesGrid();
    if (targetId === 'blog') renderArticlesTable();
    if (targetId === 'testimonials') renderTestimonialsTable();
    if (targetId === 'messages') renderMessagesTable();
    if (targetId === 'quotes') renderQuotesTable();
    if (targetId === 'team') renderTeamTable();
  };

  // Expose globally so inline onclick or any caller can switch tabs easily
  window.navigateToPane = activatePane;

  allTargetTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const target = trigger.getAttribute('data-target-pane');
      if (target) activatePane(target);

      // Close mobile sidebar on click if trigger was in sidebar
      const sidebar = document.getElementById('adminSidebar');
      if (sidebar && window.innerWidth < 992 && trigger.closest('.admin-sidebar')) {
        sidebar.classList.remove('show');
      }
    });
  });

  // Handle URL hash on load (e.g. admin.html#quotes)
  const initialHash = window.location.hash.replace('#', '');
  if (initialHash && document.getElementById(`pane-${initialHash}`)) {
    activatePane(initialHash);
  }

  // Mobile sidebar toggle with backdrop overlay
  const toggleBtn = document.getElementById('adminSidebarToggle');
  const sidebar = document.getElementById('adminSidebar');
  if (toggleBtn && sidebar) {
    let backdrop = document.querySelector('.admin-sidebar-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.className = 'admin-sidebar-backdrop';
      document.body.appendChild(backdrop);
    }

    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = sidebar.classList.toggle('show');
      backdrop.classList.toggle('show', isOpen);
    });

    backdrop.addEventListener('click', () => {
      sidebar.classList.remove('show');
      backdrop.classList.remove('show');
    });

    // Close on mobile nav link tap
    sidebar.querySelectorAll('.admin-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 992) {
          sidebar.classList.remove('show');
          backdrop.classList.remove('show');
        }
      });
    });
  }
}

/**
 * Topbar Controls: Profile name, Logout triggers, Dark mode, Notifications
 */
function setupTopbarControls() {
  const admin = getAdminSession() || { name: 'Admin', email: 'admin@aurafinishes.com' };

  const headerName = document.getElementById('headerAdminName');
  const sidebarName = document.getElementById('sidebarAdminName');
  const dropName = document.getElementById('dropdownAdminName');
  const dropEmail = document.getElementById('dropdownAdminEmail');

  if (headerName) headerName.textContent = admin.name;
  if (sidebarName) sidebarName.textContent = admin.name;
  if (dropName) dropName.textContent = admin.name;
  if (dropEmail) dropEmail.textContent = admin.email;

  const initials = ((admin.name || 'Admin').split(' ').map(n => n[0]).join('') || (admin.name || 'AD').slice(0, 2)).toUpperCase();
  document.querySelectorAll('.admin-avatar').forEach(el => {
    el.textContent = initials;
  });

  // Logout Listeners
  const logoutButtons = [
    document.getElementById('adminLogoutLink'),
    document.getElementById('sidebarLogoutBtn'),
    document.getElementById('topbarLogoutBtn')
  ];

  logoutButtons.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        logoutAdmin();
      });
    }
  });

  // Theme Switcher for Admin Topbar: Sync with master theme engine
  const modeBtn = document.querySelector('.admin-header .mode-toggle') || document.querySelector('.mode-toggle');
  if (modeBtn) {
    const savedTheme = localStorage.getItem('aura_theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (typeof window.auraApplyTheme === 'function') {
      window.auraApplyTheme(savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', savedTheme);
      if (document.body) document.body.setAttribute('data-theme', savedTheme);
      const icon = modeBtn.querySelector('i');
      if (icon) {
        icon.className = savedTheme === 'dark' ? 'bi bi-sun-fill text-warning' : 'bi bi-moon-stars-fill';
      }
    }
  }

  // RTL / Language Direction Switcher for Admin Topbar: Sync with master direction engine
  const rtlBtn = document.getElementById('adminRtlToggle') || document.querySelector('.admin-header .rtl-toggle');
  if (rtlBtn) {
    const savedDir = localStorage.getItem('aura_dir') || 'ltr';
    if (typeof window.auraApplyDirection === 'function') {
      window.auraApplyDirection(savedDir);
    } else {
      applyAdminDirection(savedDir);
      if (rtlBtn.dataset.rtlBound !== 'true') {
        rtlBtn.dataset.rtlBound = 'true';
        rtlBtn.addEventListener('click', (e) => {
          e.preventDefault();
          const currentDir = document.documentElement.getAttribute('dir') === 'rtl' ? 'rtl' : 'ltr';
          const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
          applyAdminDirection(newDir);
          if (typeof showToast === 'function') {
            showToast(`Switched text direction to ${newDir.toUpperCase()}`, 'info');
          }
        });
      }
    }
  }

  function applyAdminDirection(dir) {
    if (dir === 'rtl') {
      document.documentElement.setAttribute('dir', 'rtl');
      localStorage.setItem('aura_dir', 'rtl');
      if (rtlBtn) {
        rtlBtn.classList.add('active');
        rtlBtn.setAttribute('title', 'Switch to LTR (Left-to-Right)');
      }
    } else {
      document.documentElement.removeAttribute('dir');
      localStorage.setItem('aura_dir', 'ltr');
      if (rtlBtn) {
        rtlBtn.classList.remove('active');
        rtlBtn.setAttribute('title', 'Switch to RTL (Right-to-Left)');
      }
    }
  }

  // Quick button on dashboard to add project
  const btnQuickAdd = document.getElementById('btnQuickAddProject');
  if (btnQuickAdd) {
    btnQuickAdd.addEventListener('click', () => {
      openProjectModal();
    });
  }

  // Refresh dashboard button
  const btnRefresh = document.getElementById('btnRefreshDashboard');
  if (btnRefresh) {
    btnRefresh.addEventListener('click', () => {
      renderDashboardHome();
      if (typeof showToast === 'function') showToast('Dashboard metrics refreshed.', 'info');
    });
  }
}

/**
 * Render Dashboard Overview (Stat KPIs, Charts, Recent Tables)
 */
function renderDashboardHome() {
  const users = getStore('aura_users', []);
  const services = getStore('aura_services', DEFAULT_SERVICES_STORE);
  const projects = getStore('aura_projects', DEFAULT_PROJECTS_STORE);
  const articles = (typeof getArticlesList === 'function' ? getArticlesList() : []).length || 6;
  const messages = getStore('aura_contact_messages', []);
  const quotes = getStore('aura_quote_requests', []);

  // Update Stat Card Counters
  const elUsers = document.getElementById('statTotalUsers');
  const elProjects = document.getElementById('statTotalProjects');
  const elServices = document.getElementById('statTotalServices');
  const elArticles = document.getElementById('statTotalArticles');
  const elMessages = document.getElementById('statTotalMessages');
  const elQuotes = document.getElementById('statTotalQuotes');

  if (elUsers) elUsers.textContent = users.length;
  if (elProjects) elProjects.textContent = projects.length;
  if (elServices) elServices.textContent = services.length;
  if (elArticles) elArticles.textContent = articles;
  if (elMessages) elMessages.textContent = messages.length;
  if (elQuotes) elQuotes.textContent = quotes.length;

  // Update Sidebar Badges
  const bServices = document.getElementById('badgeCountServices');
  const bProjects = document.getElementById('badgeCountProjects');
  const bArticles = document.getElementById('badgeCountArticles');
  const bUsers = document.getElementById('badgeCountUsers');
  const bQuotes = document.getElementById('badgeCountQuotes');
  const bMessages = document.getElementById('badgeCountMessages');

  if (bServices) bServices.textContent = services.length;
  if (bProjects) bProjects.textContent = projects.length;
  if (bArticles) bArticles.textContent = articles;
  if (bUsers) bUsers.textContent = users.length;

  const unreadMessages = messages.filter(m => m.status === 'unread').length;
  const pendingQuotes = quotes.filter(q => q.status === 'pending').length;

  if (bMessages) {
    bMessages.textContent = unreadMessages;
    bMessages.style.display = unreadMessages > 0 ? 'inline-block' : 'none';
  }

  if (bQuotes) {
    bQuotes.textContent = pendingQuotes;
    bQuotes.style.display = pendingQuotes > 0 ? 'inline-block' : 'none';
  }

  // Header notification dot
  const notifDot = document.getElementById('headerNotificationDot');
  if (notifDot) {
    notifDot.style.display = (unreadMessages > 0 || pendingQuotes > 0) ? 'block' : 'none';
  }

  // Render Charts
  renderProjectCategoryChart(projects);
  renderMonthlyTrendsChart(quotes, messages);

  // Render Recent Activity Tables
  renderRecentQuotesTable(quotes);
  renderRecentMessagesTable(messages);
}

/**
 * Interactive SVG Chart: Project Categories Distribution
 */
function renderProjectCategoryChart(projects) {
  const container = document.getElementById('chartProjectsCategory');
  if (!container) return;

  const counts = {
    residential: 0,
    commercial: 0,
    interior: 0,
    exterior: 0,
    'texture-plaster': 0
  };

  projects.forEach(p => {
    const cat = p.category || 'residential';
    if (counts[cat] !== undefined) counts[cat]++;
    else counts.residential++;
  });

  const categories = [
    { key: 'residential', label: 'Residential', color: '#C35A38', count: counts.residential || 1 },
    { key: 'commercial', label: 'Commercial', color: '#3B82F6', count: counts.commercial || 1 },
    { key: 'interior', label: 'Interior', color: '#D4A359', count: counts.interior || 1 },
    { key: 'exterior', label: 'Exterior', color: '#10B981', count: counts.exterior || 1 },
    { key: 'texture-plaster', label: 'Texture / Plaster', color: '#8B5CF6', count: counts['texture-plaster'] || 1 }
  ];

  const total = categories.reduce((sum, c) => sum + c.count, 0);

  // Build sleek SVG donut chart with legend
  let currentAngle = 0;
  const radius = 60;
  const center = 80;
  const strokeWidth = 24;

  const paths = categories.map(cat => {
    const pct = cat.count / total;
    const strokeDash = pct * (2 * Math.PI * radius);
    const strokeOffset = -currentAngle * (2 * Math.PI * radius);
    currentAngle += pct;

    return `
      <circle cx="${center}" cy="${center}" r="${radius}" fill="none" stroke="${cat.color}" 
              stroke-width="${strokeWidth}" stroke-dasharray="${strokeDash} ${(2 * Math.PI * radius) - strokeDash}" 
              stroke-dashoffset="${strokeOffset}" stroke-linecap="round" />
    `;
  }).join('');

  const legend = categories.map(c => `
    <div class="d-flex align-items-center justify-content-between mb-2">
      <div class="d-flex align-items-center gap-2">
        <span style="width: 10px; height: 10px; border-radius: 50%; background-color: ${c.color};"></span>
        <span class="small fw-semibold text-heading">${c.label}</span>
      </div>
      <span class="small fw-bold text-muted">${c.count} (${Math.round((c.count / total) * 100)}%)</span>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="d-flex flex-wrap align-items-center justify-content-around w-100 gap-3 py-2">
      <div style="width: 160px; height: 160px; transform: rotate(-90deg);">
        <svg viewBox="0 0 160 160" width="160" height="160">
          ${paths}
        </svg>
      </div>
      <div style="min-width: 200px; flex-grow: 1;">
        ${legend}
      </div>
    </div>
  `;
}

/**
 * Interactive SVG Line/Bar Chart: Monthly Activity Trends
 */
function renderMonthlyTrendsChart() {
  const container = document.getElementById('chartMonthlyTrends');
  if (!container) return;

  const months = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar (Est)'];
  const quotesData = [14, 18, 22, 28, 35, 42];
  const inquiriesData = [24, 30, 36, 45, 52, 60];

  const maxVal = 70;
  const chartHeight = 160;
  const width = 460;
  const stepX = width / (months.length - 1);

  const quotePoints = quotesData.map((val, idx) => `${idx * stepX},${chartHeight - (val / maxVal * chartHeight)}`).join(' ');
  const inquiryPoints = inquiriesData.map((val, idx) => `${idx * stepX},${chartHeight - (val / maxVal * chartHeight)}`).join(' ');

  container.innerHTML = `
    <div class="w-100 py-2">
      <div class="d-flex justify-content-end gap-3 mb-2 small fw-bold">
        <span class="text-primary"><i class="bi bi-circle-fill me-1" style="font-size: 0.6rem;"></i>Quote Requests</span>
        <span class="text-secondary"><i class="bi bi-circle-fill me-1" style="font-size: 0.6rem;"></i>General Inquiries</span>
      </div>
      <svg viewBox="0 0 ${width} 200" class="w-100" style="overflow: visible;">
        <!-- Grid Lines -->
        <line x1="0" y1="40" x2="${width}" y2="40" stroke="var(--admin-border-subtle)" stroke-dasharray="4" />
        <line x1="0" y1="100" x2="${width}" y2="100" stroke="var(--admin-border-subtle)" stroke-dasharray="4" />
        <line x1="0" y1="160" x2="${width}" y2="160" stroke="var(--admin-border-subtle)" />

        <!-- Inquiry Line -->
        <polyline fill="none" stroke="var(--admin-secondary)" stroke-width="3" points="${inquiryPoints}" stroke-linecap="round" stroke-linejoin="round" />
        <!-- Quote Line -->
        <polyline fill="none" stroke="var(--admin-primary)" stroke-width="3.5" points="${quotePoints}" stroke-linecap="round" stroke-linejoin="round" />

        <!-- Data Dots -->
        ${quotesData.map((val, idx) => `<circle cx="${idx * stepX}" cy="${chartHeight - (val / maxVal * chartHeight)}" r="4.5" fill="var(--admin-primary)" stroke="#FFFFFF" stroke-width="2" />`).join('')}
        ${inquiriesData.map((val, idx) => `<circle cx="${idx * stepX}" cy="${chartHeight - (val / maxVal * chartHeight)}" r="4" fill="var(--admin-secondary)" stroke="#FFFFFF" stroke-width="2" />`).join('')}

        <!-- X Axis Labels -->
        ${months.map((m, idx) => `<text x="${idx * stepX}" y="185" text-anchor="middle" font-size="11" fill="var(--admin-text-muted)" font-family="var(--admin-font-body)">${m}</text>`).join('')}
      </svg>
    </div>
  `;
}

/**
 * Render Recent Activity Tables on Dashboard Home
 */
function renderRecentQuotesTable(quotes) {
  const tbody = document.getElementById('tableRecentQuotes');
  if (!tbody) return;

  const recent = quotes.slice(0, 4);
  if (recent.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" class="text-center text-muted py-4">No recent quote requests.</td></tr>';
    return;
  }

  tbody.innerHTML = recent.map(q => {
    let badgeClass = 'badge-pending';
    if (q.status === 'contacted') badgeClass = 'badge-contacted';
    if (q.status === 'completed') badgeClass = 'badge-completed';

    return `
      <tr>
        <td>
          <div class="fw-bold text-heading">${escapeHtml(q.name)}</div>
          <div class="small text-muted">${escapeHtml(q.email)}</div>
        </td>
        <td>
          <div class="fw-semibold text-primary small">${escapeHtml(q.service)}</div>
          <div class="small text-muted">${escapeHtml(q.scope || '')}</div>
        </td>
        <td class="small text-muted">${escapeHtml(q.date)}</td>
        <td><span class="badge-admin ${badgeClass}">${capitalize(q.status)}</span></td>
        <td>
          <button class="btn-admin-action" onclick="viewQuoteDetails('${q.id}')" title="View Scope">
            <i class="bi bi-eye"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

function renderRecentMessagesTable(messages) {
  const tbody = document.getElementById('tableRecentMessages');
  if (!tbody) return;

  const recent = messages.slice(0, 4);
  if (recent.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" class="text-center text-muted py-4">No recent contact messages.</td></tr>';
    return;
  }

  tbody.innerHTML = recent.map(m => {
    const isUnread = m.status === 'unread';
    return `
      <tr>
        <td>
          <div class="fw-bold text-heading">${escapeHtml(m.name)}</div>
          <div class="small text-muted">${escapeHtml(m.email)}</div>
        </td>
        <td>
          <div class="text-truncate small fw-semibold text-heading" style="max-width: 180px;">${escapeHtml(m.subject)}</div>
        </td>
        <td class="small text-muted">${escapeHtml(m.date)}</td>
        <td>
          <span class="badge-admin ${isUnread ? 'badge-unread' : 'badge-completed'}">
            ${isUnread ? 'New' : 'Read'}
          </span>
        </td>
        <td>
          <button class="btn-admin-action" onclick="viewMessageDetails('${m.id}')" title="Read Message">
            <i class="bi bi-eye"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

/* ==========================================================================
   5. USERS MANAGEMENT CRUD
   ========================================================================== */

function renderUsersTable(filterText = '', statusFilter = 'all') {
  const tbody = document.getElementById('tableUsersList');
  const countSummary = document.getElementById('userCountSummary');
  if (!tbody) return;

  let users = getStore('aura_users', []);

  if (filterText) {
    const q = filterText.toLowerCase();
    users = users.filter(u => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q));
  }

  if (statusFilter !== 'all') {
    users = users.filter(u => u.status === statusFilter);
  }

  if (countSummary) countSummary.textContent = `Showing ${users.length} user${users.length === 1 ? '' : 's'}`;

  if (users.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" class="text-center text-muted py-4">No matching users found.</td></tr>';
    return;
  }

  tbody.innerHTML = users.map(u => {
    const initials = (u.name.split(' ').map(n => n[0]).join('') || u.name.slice(0, 2)).toUpperCase();
    const isActive = u.status === 'active';

    return `
      <tr>
        <td>
          <div class="table-user-cell">
            <div class="admin-avatar" style="width: 32px; height: 32px; font-size: 0.75rem;">${initials}</div>
            <div>
              <div class="fw-bold text-heading">${escapeHtml(u.name)}</div>
            </div>
          </div>
        </td>
        <td class="small text-muted font-monospace">${escapeHtml(u.email)}</td>
        <td>
          <span class="badge ${u.role === 'admin' ? 'bg-primary' : 'bg-surface-soft text-muted border border-subtle'}">${u.role === 'admin' ? 'Administrator' : 'Client'}</span>
        </td>
        <td class="small text-muted">${escapeHtml(u.date || '2026-02-01')}</td>
        <td>
          <span class="badge-admin ${isActive ? 'badge-active' : 'badge-pending'}">${isActive ? 'Active' : 'Inactive'}</span>
        </td>
        <td class="text-end">
          <div class="admin-action-btn-group">
            <button class="btn-admin-action" onclick="editUser('${u.id}')" title="Edit User"><i class="bi bi-pencil"></i></button>
            <button class="btn-admin-action btn-delete" onclick="deleteUser('${u.id}')" title="Delete User"><i class="bi bi-trash3"></i></button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

window.editUser = function(id) {
  const users = getStore('aura_users', []);
  const user = users.find(u => u.id === id);
  if (!user) return;

  document.getElementById('modalUserId').value = user.id;
  document.getElementById('modalUserName').value = user.name;
  document.getElementById('modalUserEmail').value = user.email;
  document.getElementById('modalUserRole').value = user.role;
  document.getElementById('modalUserStatus').value = user.status;
  document.getElementById('modalUserTitle').textContent = 'Edit User Account';

  const modal = new bootstrap.Modal(document.getElementById('modalUser'));
  modal.show();
};

window.deleteUser = function(id) {
  if (!confirm('Are you sure you want to delete this user?')) return;
  let users = getStore('aura_users', []);
  users = users.filter(u => u.id !== id);
  setStore('aura_users', users);
  renderUsersTable();
  renderDashboardHome();
  if (typeof showToast === 'function') showToast('User deleted successfully.', 'info');
};

/* ==========================================================================
   6. SERVICES MANAGEMENT CRUD
   ========================================================================== */

function renderServicesTable(filterText = '') {
  const tbody = document.getElementById('tableServicesList');
  const countSummary = document.getElementById('serviceCountSummary');
  if (!tbody) return;

  let services = getStore('aura_services', DEFAULT_SERVICES_STORE);

  if (filterText) {
    const q = filterText.toLowerCase();
    services = services.filter(s => s.title.toLowerCase().includes(q) || s.slug.toLowerCase().includes(q));
  }

  if (countSummary) countSummary.textContent = `Showing ${services.length} services`;

  if (services.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" class="text-center text-muted py-4">No services defined.</td></tr>';
    return;
  }

  tbody.innerHTML = services.map(s => `
    <tr>
      <td>
        <img src="${escapeHtml(s.image)}" alt="${escapeHtml(s.title)}" class="table-media-preview rounded-3 border border-subtle">
      </td>
      <td>
        <div class="fw-bold text-heading">${escapeHtml(s.title)}</div>
        <a href="service-details.html?service=${escapeHtml(s.slug)}" target="_blank" class="small text-primary text-decoration-none">
          <i class="bi bi-box-arrow-up-right me-1"></i> Preview on Website
        </a>
      </td>
      <td><span class="badge bg-surface-soft text-muted border border-subtle font-monospace">${escapeHtml(s.slug)}</span></td>
      <td class="small text-muted" style="max-width: 260px;">${escapeHtml(s.shortDesc)}</td>
      <td class="small fw-bold text-heading">${escapeHtml(s.price || '$10 - $25 / sq.ft.')}</td>
      <td class="text-end">
        <div class="admin-action-btn-group">
          <button class="btn-admin-action" onclick="editService('${s.id}')" title="Edit Service"><i class="bi bi-pencil"></i></button>
          <button class="btn-admin-action btn-delete" onclick="deleteService('${s.id}')" title="Delete Service"><i class="bi bi-trash3"></i></button>
        </div>
      </td>
    </tr>
  `).join('');
}

window.editService = function(id) {
  const services = getStore('aura_services', DEFAULT_SERVICES_STORE);
  const service = services.find(s => s.id === id);
  if (!service) return;

  document.getElementById('modalServiceId').value = service.id;
  document.getElementById('modalServiceTitleInput').value = service.title;
  document.getElementById('modalServiceSlug').value = service.slug;
  document.getElementById('modalServicePrice').value = service.price || '';
  document.getElementById('modalServiceIcon').value = service.icon || 'bi-brush-fill';
  document.getElementById('modalServiceImage').value = service.image;
  document.getElementById('modalServiceShortDesc').value = service.shortDesc;
  document.getElementById('modalServiceFullDetails').value = service.fullDetails || '';
  document.getElementById('modalServiceTitle').textContent = 'Edit Service';

  const modal = new bootstrap.Modal(document.getElementById('modalService'));
  modal.show();
};

window.deleteService = function(id) {
  if (!confirm('Are you sure you want to delete this service?')) return;
  let services = getStore('aura_services', DEFAULT_SERVICES_STORE);
  services = services.filter(s => s.id !== id);
  setStore('aura_services', services);
  renderServicesTable();
  renderDashboardHome();
  if (typeof showToast === 'function') showToast('Service removed successfully.', 'info');
};

/* ==========================================================================
   7. PROJECTS MANAGEMENT CRUD
   ========================================================================== */

function renderProjectsTable(filterText = '', categoryFilter = 'all') {
  const tbody = document.getElementById('tableProjectsList');
  const countSummary = document.getElementById('projectCountSummary');
  if (!tbody) return;

  let projects = getStore('aura_projects', DEFAULT_PROJECTS_STORE);

  if (filterText) {
    const q = filterText.toLowerCase();
    projects = projects.filter(p => p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q));
  }

  if (categoryFilter !== 'all') {
    projects = projects.filter(p => p.category === categoryFilter || (p.filterCategory && p.filterCategory.includes(categoryFilter)));
  }

  if (countSummary) countSummary.textContent = `Showing ${projects.length} project${projects.length === 1 ? '' : 's'}`;

  if (projects.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7" class="text-center text-muted py-4">No portfolio projects found.</td></tr>';
    return;
  }

  tbody.innerHTML = projects.map(p => `
    <tr>
      <td>
        <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)}" class="table-media-preview rounded-3 border border-subtle">
      </td>
      <td>
        <div class="fw-bold text-heading">${escapeHtml(p.title)}</div>
        <a href="project-details.html?id=${escapeHtml(p.slug || p.id)}" target="_blank" class="small text-primary text-decoration-none">
          <i class="bi bi-box-arrow-up-right me-1"></i> Preview
        </a>
      </td>
      <td><span class="badge bg-surface-soft text-muted border border-subtle">${escapeHtml(p.categoryPill || capitalize(p.category))}</span></td>
      <td class="small text-muted">${escapeHtml(p.location)}</td>
      <td class="small text-muted">${escapeHtml(p.area)}</td>
      <td class="small text-muted">${escapeHtml(p.duration)}</td>
      <td class="text-end">
        <div class="admin-action-btn-group">
          <button class="btn-admin-action" onclick="editProject('${p.id}')" title="Edit Project"><i class="bi bi-pencil"></i></button>
          <button class="btn-admin-action btn-delete" onclick="deleteProject('${p.id}')" title="Delete Project"><i class="bi bi-trash3"></i></button>
        </div>
      </td>
    </tr>
  `).join('');
}

function populateProjectCategorySelects() {
  const categories = getStore('aura_project_categories', DEFAULT_PROJECT_CATEGORIES);
  const filterSelect = document.getElementById('filterProjectCategory');
  const modalSelect = document.getElementById('modalProjectCategory');

  if (modalSelect) {
    const prevVal = modalSelect.value;
    modalSelect.innerHTML = categories.map(c => `<option value="${escapeHtml(c.id)}">${escapeHtml(c.name)}</option>`).join('');
    if (prevVal) modalSelect.value = prevVal;
  }

  if (filterSelect) {
    const currentVal = filterSelect.value || 'all';
    filterSelect.innerHTML = `<option value="all">All Categories</option>` + categories.map(c => `<option value="${escapeHtml(c.id)}">${escapeHtml(c.name)}</option>`).join('');
    filterSelect.value = currentVal;
  }
}

window.editProject = function(id) {
  const projects = getStore('aura_projects', DEFAULT_PROJECTS_STORE);
  const project = projects.find(p => p.id === id);
  if (!project) return;

  populateProjectCategorySelects();
  document.getElementById('modalProjectId').value = project.id;
  document.getElementById('modalProjectTitleInput').value = project.title;
  document.getElementById('modalProjectSlug').value = project.slug || project.id;
  document.getElementById('modalProjectCategory').value = project.category || 'residential';
  document.getElementById('modalProjectCategoryPill').value = project.categoryPill || '';
  document.getElementById('modalProjectLocation').value = project.location || '';
  document.getElementById('modalProjectArea').value = project.area || '';
  document.getElementById('modalProjectDuration').value = project.duration || '';
  document.getElementById('modalProjectImage').value = project.image;
  document.getElementById('modalProjectDescription').value = project.description || '';
  document.getElementById('modalProjectTitle').textContent = 'Edit Project Details';

  const modal = new bootstrap.Modal(document.getElementById('modalProject'));
  modal.show();
};

window.deleteProject = function(id) {
  if (!confirm('Are you sure you want to delete this project?')) return;
  let projects = getStore('aura_projects', DEFAULT_PROJECTS_STORE);
  projects = projects.filter(p => p.id !== id);
  setStore('aura_projects', projects);
  renderProjectsTable();
  renderDashboardHome();
  if (typeof showToast === 'function') showToast('Project removed successfully.', 'info');
};

function openProjectModal() {
  populateProjectCategorySelects();
  document.getElementById('formModalProject').reset();
  document.getElementById('modalProjectId').value = '';
  document.getElementById('modalProjectTitle').textContent = 'Add New Project';
  const modal = new bootstrap.Modal(document.getElementById('modalProject'));
  modal.show();
}

/* ==========================================================================
   8. PROJECT CATEGORIES
   ========================================================================== */

function renderCategoriesGrid() {
  populateProjectCategorySelects();
  const grid = document.getElementById('categoriesGrid');
  if (!grid) return;

  const categories = getStore('aura_project_categories', DEFAULT_PROJECT_CATEGORIES);
  const projects = getStore('aura_projects', DEFAULT_PROJECTS_STORE);

  grid.innerHTML = categories.map(cat => {
    const count = projects.filter(p => p.category === cat.id || (p.filterCategory && p.filterCategory.includes(cat.id))).length;
    return `
      <div class="col-md-6 col-lg-4">
        <div class="admin-card h-100 mb-0">
          <div class="admin-card-body d-flex flex-column">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="badge bg-primary-subtle text-primary fw-bold text-uppercase">${escapeHtml(cat.id)}</span>
              <span class="badge bg-surface-soft text-muted border border-subtle">${count} Project${count === 1 ? '' : 's'}</span>
            </div>
            <h4 class="fw-bold fs-5 mb-2">${escapeHtml(cat.name)}</h4>
            <p class="text-muted small mb-4 flex-grow-1">${escapeHtml(cat.description || 'Architectural project classification & portfolio filtering category.')}</p>
            <div class="d-flex justify-content-end gap-2 pt-2 border-top border-subtle">
              <button class="btn btn-outline-secondary btn-sm" onclick="openEditCategory('${cat.id}')">
                <i class="bi bi-pencil me-1"></i> Edit
              </button>
              <button class="btn btn-outline-danger btn-sm" onclick="deleteCategory('${cat.id}')">
                <i class="bi bi-trash me-1"></i> Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

window.openEditCategory = function(id) {
  const categories = getStore('aura_project_categories', DEFAULT_PROJECT_CATEGORIES);
  const cat = categories.find(c => c.id === id);
  if (!cat) return;

  document.getElementById('modalCategoryId').value = cat.id;
  document.getElementById('modalCategoryTitle').textContent = 'Edit Category: ' + cat.name;
  document.getElementById('modalCategoryName').value = cat.name;
  document.getElementById('modalCategorySlug').value = cat.id;
  document.getElementById('modalCategorySlug').setAttribute('readonly', 'true');
  document.getElementById('modalCategoryDescription').value = cat.description || '';
  new bootstrap.Modal(document.getElementById('modalCategory')).show();
};

window.deleteCategory = function(id) {
  let categories = getStore('aura_project_categories', DEFAULT_PROJECT_CATEGORIES);
  const cat = categories.find(c => c.id === id);
  if (!cat) return;

  if (!confirm(`Are you sure you want to delete category "${cat.name}"?`)) return;

  categories = categories.filter(c => c.id !== id);
  setStore('aura_project_categories', categories);
  renderCategoriesGrid();
  renderDashboardHome();
  if (typeof showToast === 'function') showToast(`Category "${cat.name}" deleted.`, 'success');
};

/* ==========================================================================
   9. BLOG / ARTICLES MANAGEMENT CRUD
   ========================================================================== */

function getArticlesList() {
  const stored = getStore('aura_articles', null);
  if (stored) return stored;
  
  // Convert built-in ARTICLES_DATA to array if available
  if (typeof ARTICLES_DATA !== 'undefined' && ARTICLES_DATA) {
    const list = Object.keys(ARTICLES_DATA).map(slug => ({
      id: slug,
      slug: slug,
      title: ARTICLES_DATA[slug].title,
      category: ARTICLES_DATA[slug].category,
      date: ARTICLES_DATA[slug].date,
      readTime: ARTICLES_DATA[slug].readTime,
      heroImage: ARTICLES_DATA[slug].heroImage,
      author: ARTICLES_DATA[slug].author ? ARTICLES_DATA[slug].author.name : 'Elena Rostova',
      content: ARTICLES_DATA[slug].content ? ARTICLES_DATA[slug].content.map(c => c.p).join('\n\n') : ''
    }));
    setStore('aura_articles', list);
    return list;
  }

  // Built-in fallback articles
  const defaultList = [
    { id: 'color-trends-2026', slug: 'color-trends-2026', title: 'Curating the 2026 Palette: Earth Tones, Limewash, and Monochromatic Warmth', category: 'Design Trends', date: 'Feb 12, 2026', readTime: '6 Min Read', heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80', author: 'Elena Rostova', content: '' },
    { id: 'venetian-plaster-vs-limewash', slug: 'venetian-plaster-vs-limewash', title: 'Venetian Plaster vs. Limewash: Choosing the Right Mineral Finish for Architectural Walls', category: 'Materials Guide', date: 'Jan 28, 2026', readTime: '8 Min Read', heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80', author: 'Marcus Vance', content: '' },
    { id: 'exterior-facade-moisture', slug: 'exterior-facade-moisture', title: 'Preserving Heritage Masonry: Elastomeric Breathable Systems for Coastal Estates', category: 'Technical Insights', date: 'Jan 15, 2026', readTime: '5 Min Read', heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80', author: 'David Sterling', content: '' }
  ];
  setStore('aura_articles', defaultList);
  return defaultList;
}

function renderArticlesTable(filterText = '') {
  const tbody = document.getElementById('tableArticlesList');
  const countSummary = document.getElementById('articleCountSummary');
  if (!tbody) return;

  let articles = getArticlesList();

  if (filterText) {
    const q = filterText.toLowerCase();
    articles = articles.filter(a => a.title.toLowerCase().includes(q) || a.author.toLowerCase().includes(q));
  }

  if (countSummary) countSummary.textContent = `Showing ${articles.length} article${articles.length === 1 ? '' : 's'}`;

  if (articles.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7" class="text-center text-muted py-4">No articles found.</td></tr>';
    return;
  }

  tbody.innerHTML = articles.map(a => `
    <tr>
      <td>
        <img src="${escapeHtml(a.heroImage)}" alt="${escapeHtml(a.title)}" class="table-media-preview rounded-3 border border-subtle">
      </td>
      <td>
        <div class="fw-bold text-heading">${escapeHtml(a.title)}</div>
        <a href="blog-details.html?article=${escapeHtml(a.slug)}" target="_blank" class="small text-primary text-decoration-none">
          <i class="bi bi-box-arrow-up-right me-1"></i> Read Article
        </a>
      </td>
      <td><span class="badge bg-surface-soft text-muted border border-subtle">${escapeHtml(a.category)}</span></td>
      <td class="small text-muted">${escapeHtml(a.author)}</td>
      <td class="small text-muted">${escapeHtml(a.date)}</td>
      <td class="small text-muted">${escapeHtml(a.readTime)}</td>
      <td class="text-end">
        <div class="admin-action-btn-group">
          <button class="btn-admin-action" onclick="editArticle('${a.id}')" title="Edit Article"><i class="bi bi-pencil"></i></button>
          <button class="btn-admin-action btn-delete" onclick="deleteArticle('${a.id}')" title="Delete Article"><i class="bi bi-trash3"></i></button>
        </div>
      </td>
    </tr>
  `).join('');
}

window.editArticle = function(id) {
  const articles = getArticlesList();
  const article = articles.find(a => a.id === id || a.slug === id);
  if (!article) return;

  document.getElementById('modalArticleId').value = article.id;
  document.getElementById('modalArticleTitleInput').value = article.title;
  document.getElementById('modalArticleCategory').value = article.category;
  document.getElementById('modalArticleSlug').value = article.slug;
  document.getElementById('modalArticleAuthor').value = article.author;
  document.getElementById('modalArticleReadTime').value = article.readTime || '5 Min Read';
  document.getElementById('modalArticleImage').value = article.heroImage;
  document.getElementById('modalArticleContent').value = article.content || '';
  document.getElementById('modalArticleTitle').textContent = 'Edit Article';

  const modal = new bootstrap.Modal(document.getElementById('modalArticle'));
  modal.show();
};

window.deleteArticle = function(id) {
  if (!confirm('Are you sure you want to delete this article?')) return;
  let articles = getArticlesList();
  articles = articles.filter(a => a.id !== id && a.slug !== id);
  setStore('aura_articles', articles);
  renderArticlesTable();
  renderDashboardHome();
  if (typeof showToast === 'function') showToast('Article removed.', 'info');
};

/* ==========================================================================
   10. TESTIMONIALS MANAGEMENT CRUD
   ========================================================================== */

function renderTestimonialsTable(filterText = '') {
  const tbody = document.getElementById('tableTestimonialsList');
  const countSummary = document.getElementById('testimonialCountSummary');
  if (!tbody) return;

  let testimonials = getStore('aura_testimonials', DEFAULT_TESTIMONIALS_STORE);

  if (filterText) {
    const q = filterText.toLowerCase();
    testimonials = testimonials.filter(t => t.name.toLowerCase().includes(q) || t.text.toLowerCase().includes(q));
  }

  if (countSummary) countSummary.textContent = `Showing ${testimonials.length} review${testimonials.length === 1 ? '' : 's'}`;

  tbody.innerHTML = testimonials.map(t => `
    <tr>
      <td>
        <div class="d-flex align-items-center gap-2">
          <img src="${escapeHtml(t.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80')}" alt="${escapeHtml(t.name)}" class="admin-avatar" style="width: 32px; height: 32px;">
          <div class="fw-bold text-heading">${escapeHtml(t.name)}</div>
        </div>
      </td>
      <td class="small text-muted">${escapeHtml(t.role)}</td>
      <td><span class="text-warning font-monospace">★ ${t.rating || 5}.0</span></td>
      <td class="small text-muted" style="max-width: 300px;">"${escapeHtml(t.text)}"</td>
      <td class="text-end">
        <div class="admin-action-btn-group">
          <button class="btn-admin-action" onclick="editTestimonial('${t.id}')" title="Edit"><i class="bi bi-pencil"></i></button>
          <button class="btn-admin-action btn-delete" onclick="deleteTestimonial('${t.id}')" title="Delete"><i class="bi bi-trash3"></i></button>
        </div>
      </td>
    </tr>
  `).join('');
}

window.editTestimonial = function(id) {
  const testimonials = getStore('aura_testimonials', DEFAULT_TESTIMONIALS_STORE);
  const t = testimonials.find(item => item.id === id);
  if (!t) return;

  document.getElementById('modalTestimonialId').value = t.id;
  document.getElementById('modalTestimonialName').value = t.name;
  document.getElementById('modalTestimonialRole').value = t.role || '';
  document.getElementById('modalTestimonialRating').value = String(t.rating || 5);
  document.getElementById('modalTestimonialAvatar').value = t.avatar || '';
  document.getElementById('modalTestimonialText').value = t.text;
  document.getElementById('modalTestimonialTitle').textContent = 'Edit Testimonial';

  const modal = new bootstrap.Modal(document.getElementById('modalTestimonial'));
  modal.show();
};

window.deleteTestimonial = function(id) {
  if (!confirm('Are you sure you want to delete this testimonial?')) return;
  let testimonials = getStore('aura_testimonials', DEFAULT_TESTIMONIALS_STORE);
  testimonials = testimonials.filter(t => t.id !== id);
  setStore('aura_testimonials', testimonials);
  renderTestimonialsTable();
  if (typeof showToast === 'function') showToast('Testimonial removed.', 'info');
};

/* ==========================================================================
   11. TEAM MEMBERS MANAGEMENT CRUD
   ========================================================================== */

function renderTeamTable(filterText = '') {
  const tbody = document.getElementById('tableTeamList');
  const countSummary = document.getElementById('teamCountSummary');
  if (!tbody) return;

  let team = getStore('aura_team_members', DEFAULT_TEAM_STORE);

  if (filterText) {
    const q = filterText.toLowerCase();
    team = team.filter(m => m.name.toLowerCase().includes(q) || m.role.toLowerCase().includes(q));
  }

  if (countSummary) countSummary.textContent = `Showing ${team.length} artisan${team.length === 1 ? '' : 's'}`;

  tbody.innerHTML = team.map(m => `
    <tr>
      <td>
        <img src="${escapeHtml(m.photo)}" alt="${escapeHtml(m.name)}" class="admin-avatar" style="width: 38px; height: 38px; object-fit: cover;">
      </td>
      <td class="fw-bold text-heading">${escapeHtml(m.name)}</td>
      <td class="small text-primary fw-semibold">${escapeHtml(m.role)}</td>
      <td><span class="badge bg-surface-soft text-muted border border-subtle">${escapeHtml(m.exp || '10+ Yrs')}</span></td>
      <td class="small text-muted" style="max-width: 240px;">${escapeHtml(m.bio)}</td>
      <td>
        <div class="d-flex gap-2 text-primary">
          <i class="bi bi-linkedin"></i>
          <i class="bi bi-instagram"></i>
        </div>
      </td>
      <td class="text-end">
        <div class="admin-action-btn-group">
          <button class="btn-admin-action" onclick="editTeamMember('${m.id}')" title="Edit"><i class="bi bi-pencil"></i></button>
          <button class="btn-admin-action btn-delete" onclick="deleteTeamMember('${m.id}')" title="Delete"><i class="bi bi-trash3"></i></button>
        </div>
      </td>
    </tr>
  `).join('');
}

window.editTeamMember = function(id) {
  const team = getStore('aura_team_members', DEFAULT_TEAM_STORE);
  const member = team.find(m => m.id === id);
  if (!member) return;

  document.getElementById('modalTeamMemberId').value = member.id;
  document.getElementById('modalTeamName').value = member.name;
  document.getElementById('modalTeamRole').value = member.role;
  document.getElementById('modalTeamExp').value = member.exp || '';
  document.getElementById('modalTeamPhoto').value = member.photo;
  document.getElementById('modalTeamBio').value = member.bio || '';
  document.getElementById('modalTeamMemberTitle').textContent = 'Edit Artisan';

  const modal = new bootstrap.Modal(document.getElementById('modalTeamMember'));
  modal.show();
};

window.deleteTeamMember = function(id) {
  if (!confirm('Are you sure you want to remove this artisan?')) return;
  let team = getStore('aura_team_members', DEFAULT_TEAM_STORE);
  team = team.filter(m => m.id !== id);
  setStore('aura_team_members', team);
  renderTeamTable();
  if (typeof showToast === 'function') showToast('Team member removed.', 'info');
};

/* ==========================================================================
   12. CONTACT MESSAGES & QUOTE REQUESTS
   ========================================================================== */

function renderMessagesTable(filterText = '') {
  const tbody = document.getElementById('tableMessagesList');
  const countSummary = document.getElementById('messageCountSummary');
  if (!tbody) return;

  let messages = getStore('aura_contact_messages', []);

  if (filterText) {
    const q = filterText.toLowerCase();
    messages = messages.filter(m => m.name.toLowerCase().includes(q) || m.email.toLowerCase().includes(q) || m.subject.toLowerCase().includes(q));
  }

  if (countSummary) countSummary.textContent = `Showing ${messages.length} message${messages.length === 1 ? '' : 's'}`;

  if (messages.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7" class="text-center text-muted py-4">No contact inquiries.</td></tr>';
    return;
  }

  tbody.innerHTML = messages.map(m => {
    const isUnread = m.status === 'unread';
    return `
      <tr>
        <td class="fw-bold text-heading">${escapeHtml(m.name)}</td>
        <td class="small text-muted font-monospace">${escapeHtml(m.email)}</td>
        <td class="small text-muted">${escapeHtml(m.phone || 'N/A')}</td>
        <td><div class="small fw-semibold text-heading text-truncate" style="max-width: 200px;">${escapeHtml(m.subject)}</div></td>
        <td class="small text-muted">${escapeHtml(m.date)}</td>
        <td>
          <span class="badge-admin ${isUnread ? 'badge-unread' : 'badge-completed'}">${isUnread ? 'Unread' : 'Read'}</span>
        </td>
        <td class="text-end">
          <div class="admin-action-btn-group">
            <button class="btn-admin-action" onclick="viewMessageDetails('${m.id}')" title="View"><i class="bi bi-eye"></i></button>
            <button class="btn-admin-action btn-delete" onclick="deleteMessage('${m.id}')" title="Delete"><i class="bi bi-trash3"></i></button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

window.viewMessageDetails = function(id) {
  const messages = getStore('aura_contact_messages', []);
  const msg = messages.find(m => m.id === id);
  if (!msg) return;

  // Mark as read
  msg.status = 'read';
  setStore('aura_contact_messages', messages);
  renderMessagesTable();
  renderDashboardHome();

  document.getElementById('viewMessageSender').textContent = msg.name;
  document.getElementById('viewMessageEmail').textContent = msg.email;
  document.getElementById('viewMessagePhone').textContent = msg.phone || 'Not provided';
  document.getElementById('viewMessageSubject').textContent = msg.subject;
  document.getElementById('viewMessageDate').textContent = msg.date;
  document.getElementById('viewMessageBody').textContent = msg.message;
  document.getElementById('viewMessageReplyBtn').href = `mailto:${msg.email}?subject=Re: ${encodeURIComponent(msg.subject)}`;

  const modal = new bootstrap.Modal(document.getElementById('modalViewMessage'));
  modal.show();
};

window.deleteMessage = function(id) {
  if (!confirm('Are you sure you want to delete this message?')) return;
  let messages = getStore('aura_contact_messages', []);
  messages = messages.filter(m => m.id !== id);
  setStore('aura_contact_messages', messages);
  renderMessagesTable();
  renderDashboardHome();
  if (typeof showToast === 'function') showToast('Message deleted.', 'info');
};

function renderQuotesTable(filterText = '', statusFilter = 'all') {
  const tbody = document.getElementById('tableQuotesList');
  const countSummary = document.getElementById('quoteCountSummary');
  if (!tbody) return;

  let quotes = getStore('aura_quote_requests', []);

  if (filterText) {
    const q = filterText.toLowerCase();
    quotes = quotes.filter(item => item.name.toLowerCase().includes(q) || item.service.toLowerCase().includes(q) || item.email.toLowerCase().includes(q));
  }

  if (statusFilter !== 'all') {
    quotes = quotes.filter(item => item.status === statusFilter);
  }

  if (countSummary) countSummary.textContent = `Showing ${quotes.length} request${quotes.length === 1 ? '' : 's'}`;

  if (quotes.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7" class="text-center text-muted py-4">No quote requests found.</td></tr>';
    return;
  }

  tbody.innerHTML = quotes.map(q => {
    let badgeClass = 'badge-pending';
    if (q.status === 'contacted') badgeClass = 'badge-contacted';
    if (q.status === 'completed') badgeClass = 'badge-completed';

    return `
      <tr>
        <td>
          <div class="fw-bold text-heading">${escapeHtml(q.name)}</div>
        </td>
        <td>
          <div class="small text-muted font-monospace">${escapeHtml(q.email)}</div>
          <div class="small text-muted">${escapeHtml(q.phone || '')}</div>
        </td>
        <td class="small fw-semibold text-primary">${escapeHtml(q.service)}</td>
        <td class="small text-muted">${escapeHtml(q.scope || 'Full Residence')}</td>
        <td class="small text-muted">${escapeHtml(q.date)}</td>
        <td>
          <span class="badge-admin ${badgeClass}">${capitalize(q.status)}</span>
        </td>
        <td class="text-end">
          <div class="admin-action-btn-group">
            <button class="btn-admin-action" onclick="viewQuoteDetails('${q.id}')" title="View Scope"><i class="bi bi-eye"></i></button>
            <button class="btn-admin-action btn-delete" onclick="deleteQuote('${q.id}')" title="Delete"><i class="bi bi-trash3"></i></button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

let activeViewingQuoteId = null;

window.viewQuoteDetails = function(id) {
  const quotes = getStore('aura_quote_requests', []);
  const quote = quotes.find(q => q.id === id);
  if (!quote) return;

  activeViewingQuoteId = id;

  document.getElementById('viewQuoteCustomer').textContent = quote.name;
  document.getElementById('viewQuoteEmail').textContent = quote.email;
  document.getElementById('viewQuotePhone').textContent = quote.phone || 'Not provided';
  document.getElementById('viewQuoteService').textContent = quote.service;
  document.getElementById('viewQuoteArea').textContent = quote.scope || 'Standard';
  document.getElementById('viewQuoteTimeline').textContent = quote.timeline || 'Immediate';
  document.getElementById('viewQuoteMessage').textContent = quote.message || 'No additional notes.';
  document.getElementById('viewQuoteStatusSelect').value = quote.status || 'pending';

  const modal = new bootstrap.Modal(document.getElementById('modalViewQuote'));
  modal.show();
};

window.deleteQuote = function(id) {
  if (!confirm('Are you sure you want to delete this quote request?')) return;
  let quotes = getStore('aura_quote_requests', []);
  quotes = quotes.filter(q => q.id !== id);
  setStore('aura_quote_requests', quotes);
  renderQuotesTable();
  renderDashboardHome();
  if (typeof showToast === 'function') showToast('Quote request removed.', 'info');
};

/* ==========================================================================
   13. SOCIAL SETTINGS & GENERAL SETTINGS
   ========================================================================== */

function loadSocialSettings() {
  const socials = getStore('aura_social_links', DEFAULT_SOCIAL_STORE);

  const fb = document.getElementById('socialFacebook');
  const ig = document.getElementById('socialInstagram');
  const tw = document.getElementById('socialTwitter');
  const li = document.getElementById('socialLinkedin');
  const yt = document.getElementById('socialYoutube');
  const pin = document.getElementById('socialPinterest');

  if (fb) fb.value = socials.facebook || 'https://www.facebook.com/';
  if (ig) ig.value = socials.instagram || 'https://www.instagram.com/';
  if (tw) tw.value = socials.twitter || 'https://x.com/';
  if (li) li.value = socials.linkedin || 'https://www.linkedin.com/';
  if (yt) yt.value = socials.youtube || 'https://www.youtube.com/';
  if (pin) pin.value = socials.pinterest || 'https://www.pinterest.com/';
}

function loadGeneralSettings() {
  const settings = getStore('aura_website_settings', DEFAULT_SETTINGS_STORE);

  const bName = document.getElementById('settingBrandName');
  const phone = document.getElementById('settingPhone');
  const email = document.getElementById('settingEmail');
  const hours = document.getElementById('settingHours');
  const addr = document.getElementById('settingAddress');

  if (bName) bName.value = settings.brandName || DEFAULT_SETTINGS_STORE.brandName;
  if (phone) phone.value = settings.phone || DEFAULT_SETTINGS_STORE.phone;
  if (email) email.value = settings.email || DEFAULT_SETTINGS_STORE.email;
  if (hours) hours.value = settings.hours || DEFAULT_SETTINGS_STORE.hours;
  if (addr) addr.value = settings.address || DEFAULT_SETTINGS_STORE.address;
}

/* ==========================================================================
   14. MODAL SUBMISSIONS & CRUD EVENTS
   ========================================================================== */

function setupCRUDModalsAndListeners() {
  // 1. User Modal Form Submit
  const formUser = document.getElementById('formModalUser');
  if (formUser) {
    formUser.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = document.getElementById('modalUserId').value;
      const name = document.getElementById('modalUserName').value.trim();
      const email = document.getElementById('modalUserEmail').value.trim();
      const role = document.getElementById('modalUserRole').value;
      const status = document.getElementById('modalUserStatus').value;

      let users = getStore('aura_users', []);
      if (id) {
        // Edit existing
        const idx = users.findIndex(u => u.id === id);
        if (idx !== -1) {
          users[idx].name = name;
          users[idx].email = email;
          users[idx].role = role;
          users[idx].status = status;
        }
      } else {
        // Add new
        users.push({
          id: 'usr-' + Date.now(),
          name,
          email,
          role,
          status,
          date: new Date().toISOString().split('T')[0]
        });
      }

      setStore('aura_users', users);
      bootstrap.Modal.getInstance(document.getElementById('modalUser'))?.hide();
      renderUsersTable();
      renderDashboardHome();
      if (typeof showToast === 'function') showToast('User saved successfully.', 'success');
    });
  }

  // 2. Service Modal Form Submit
  const formService = document.getElementById('formModalService');
  if (formService) {
    formService.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = document.getElementById('modalServiceId').value;
      const title = document.getElementById('modalServiceTitleInput').value.trim();
      const slug = document.getElementById('modalServiceSlug').value.trim().toLowerCase().replace(/\s+/g, '-');
      const price = document.getElementById('modalServicePrice').value.trim();
      const icon = document.getElementById('modalServiceIcon').value.trim() || 'bi-brush-fill';
      const image = document.getElementById('modalServiceImage').value.trim();
      const shortDesc = document.getElementById('modalServiceShortDesc').value.trim();
      const fullDetails = document.getElementById('modalServiceFullDetails').value.trim();

      let services = getStore('aura_services', DEFAULT_SERVICES_STORE);
      if (id) {
        const idx = services.findIndex(s => s.id === id);
        if (idx !== -1) {
          services[idx] = { ...services[idx], title, slug, price, icon, image, shortDesc, fullDetails };
        }
      } else {
        services.push({
          id: slug || 'srv-' + Date.now(),
          title,
          slug,
          price,
          icon,
          image,
          shortDesc,
          fullDetails
        });
      }

      setStore('aura_services', services);
      bootstrap.Modal.getInstance(document.getElementById('modalService'))?.hide();
      renderServicesTable();
      renderDashboardHome();
      if (typeof showToast === 'function') showToast('Service saved & synchronized with public website.', 'success');
    });
  }

  // 3. Project Modal Form Submit
  const formProject = document.getElementById('formModalProject');
  if (formProject) {
    formProject.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = document.getElementById('modalProjectId').value;
      const title = document.getElementById('modalProjectTitleInput').value.trim();
      const slug = document.getElementById('modalProjectSlug').value.trim().toLowerCase().replace(/\s+/g, '-');
      const category = document.getElementById('modalProjectCategory').value;
      const categoryPill = document.getElementById('modalProjectCategoryPill').value.trim() || `${capitalize(category)} • Finish`;
      const location = document.getElementById('modalProjectLocation').value.trim();
      const area = document.getElementById('modalProjectArea').value.trim();
      const duration = document.getElementById('modalProjectDuration').value.trim();
      const image = document.getElementById('modalProjectImage').value.trim();
      const description = document.getElementById('modalProjectDescription').value.trim();

      let projects = getStore('aura_projects', DEFAULT_PROJECTS_STORE);
      if (id) {
        const idx = projects.findIndex(p => p.id === id);
        if (idx !== -1) {
          projects[idx] = { ...projects[idx], title, slug, category, categoryPill, location, area, duration, image, description };
        }
      } else {
        projects.unshift({
          id: slug || 'proj-' + Date.now(),
          slug,
          title,
          category,
          categoryPill,
          location,
          area,
          duration,
          image,
          description
        });
      }

      setStore('aura_projects', projects);
      bootstrap.Modal.getInstance(document.getElementById('modalProject'))?.hide();
      renderProjectsTable();
      renderDashboardHome();
      if (typeof showToast === 'function') showToast('Project saved & live on portfolio pages.', 'success');
    });
  }

  // 3b. Category Modal Form Submit
  const formCategory = document.getElementById('formModalCategory');
  if (formCategory) {
    formCategory.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = document.getElementById('modalCategoryId').value;
      const name = document.getElementById('modalCategoryName').value.trim();
      let slug = document.getElementById('modalCategorySlug').value.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      const description = document.getElementById('modalCategoryDescription').value.trim();

      if (!name || !slug) return;

      let categories = getStore('aura_project_categories', DEFAULT_PROJECT_CATEGORIES);
      if (id) {
        // Edit existing
        const idx = categories.findIndex(c => c.id === id);
        if (idx !== -1) {
          categories[idx] = { id: categories[idx].id, name, description };
        }
      } else {
        // Check duplicate slug
        if (categories.some(c => c.id === slug)) {
          if (typeof showToast === 'function') showToast('A category with this slug/ID already exists. Please choose a different slug.', 'danger');
          return;
        }
        categories.push({ id: slug, name, description });
      }

      setStore('aura_project_categories', categories);
      bootstrap.Modal.getInstance(document.getElementById('modalCategory'))?.hide();
      renderCategoriesGrid();
      renderDashboardHome();
      if (typeof showToast === 'function') showToast(id ? 'Category updated successfully.' : 'New project category created.', 'success');
    });
  }

  // 4. Article Modal Form Submit
  const formArticle = document.getElementById('formModalArticle');
  if (formArticle) {
    formArticle.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = document.getElementById('modalArticleId').value;
      const title = document.getElementById('modalArticleTitleInput').value.trim();
      const category = document.getElementById('modalArticleCategory').value.trim();
      const slug = document.getElementById('modalArticleSlug').value.trim().toLowerCase().replace(/\s+/g, '-');
      const author = document.getElementById('modalArticleAuthor').value.trim();
      const readTime = document.getElementById('modalArticleReadTime').value.trim() || '5 Min Read';
      const heroImage = document.getElementById('modalArticleImage').value.trim();
      const content = document.getElementById('modalArticleContent').value.trim();

      let articles = getArticlesList();
      if (id) {
        const idx = articles.findIndex(a => a.id === id || a.slug === id);
        if (idx !== -1) {
          articles[idx] = { ...articles[idx], title, category, slug, author, readTime, heroImage, content };
        }
      } else {
        articles.unshift({
          id: slug || 'art-' + Date.now(),
          slug,
          title,
          category,
          author,
          readTime,
          heroImage,
          content,
          date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
        });
      }

      setStore('aura_articles', articles);
      bootstrap.Modal.getInstance(document.getElementById('modalArticle'))?.hide();
      renderArticlesTable();
      renderDashboardHome();
      if (typeof showToast === 'function') showToast('Article published to Architectural Journal.', 'success');
    });
  }

  // 5. Testimonial Form Submit
  const formTestimonial = document.getElementById('formModalTestimonial');
  if (formTestimonial) {
    formTestimonial.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = document.getElementById('modalTestimonialId').value;
      const name = document.getElementById('modalTestimonialName').value.trim();
      const role = document.getElementById('modalTestimonialRole').value.trim();
      const rating = parseInt(document.getElementById('modalTestimonialRating').value) || 5;
      const avatar = document.getElementById('modalTestimonialAvatar').value.trim() || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80';
      const text = document.getElementById('modalTestimonialText').value.trim();

      let testimonials = getStore('aura_testimonials', DEFAULT_TESTIMONIALS_STORE);
      if (id) {
        const idx = testimonials.findIndex(t => t.id === id);
        if (idx !== -1) testimonials[idx] = { id, name, role, rating, avatar, text };
      } else {
        testimonials.push({ id: 'test-' + Date.now(), name, role, rating, avatar, text });
      }

      setStore('aura_testimonials', testimonials);
      bootstrap.Modal.getInstance(document.getElementById('modalTestimonial'))?.hide();
      renderTestimonialsTable();
      if (typeof showToast === 'function') showToast('Testimonial saved.', 'success');
    });
  }

  // 6. Team Member Form Submit
  const formTeam = document.getElementById('formModalTeamMember');
  if (formTeam) {
    formTeam.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = document.getElementById('modalTeamMemberId').value;
      const name = document.getElementById('modalTeamName').value.trim();
      const role = document.getElementById('modalTeamRole').value.trim();
      const exp = document.getElementById('modalTeamExp').value.trim();
      const photo = document.getElementById('modalTeamPhoto').value.trim();
      const bio = document.getElementById('modalTeamBio').value.trim();

      let team = getStore('aura_team_members', DEFAULT_TEAM_STORE);
      if (id) {
        const idx = team.findIndex(m => m.id === id);
        if (idx !== -1) team[idx] = { id, name, role, exp, photo, bio };
      } else {
        team.push({ id: 'team-' + Date.now(), name, role, exp, photo, bio });
      }

      setStore('aura_team_members', team);
      bootstrap.Modal.getInstance(document.getElementById('modalTeamMember'))?.hide();
      renderTeamTable();
      if (typeof showToast === 'function') showToast('Artisan saved.', 'success');
    });
  }

  // 7. Save Quote Status Button
  const btnSaveQuoteStatus = document.getElementById('btnSaveQuoteStatus');
  if (btnSaveQuoteStatus) {
    btnSaveQuoteStatus.addEventListener('click', () => {
      if (!activeViewingQuoteId) return;
      const newStatus = document.getElementById('viewQuoteStatusSelect').value;
      let quotes = getStore('aura_quote_requests', []);
      const idx = quotes.findIndex(q => q.id === activeViewingQuoteId);
      if (idx !== -1) {
        quotes[idx].status = newStatus;
        setStore('aura_quote_requests', quotes);
        renderQuotesTable();
        renderDashboardHome();
        bootstrap.Modal.getInstance(document.getElementById('modalViewQuote'))?.hide();
        if (typeof showToast === 'function') showToast(`Quote status updated to "${capitalize(newStatus)}".`, 'success');
      }
    });
  }

  // 8. Social Settings Form
  const formSocials = document.getElementById('formSocialSettings');
  if (formSocials) {
    formSocials.addEventListener('submit', (e) => {
      e.preventDefault();
      const updated = {
        facebook: document.getElementById('socialFacebook').value.trim(),
        instagram: document.getElementById('socialInstagram').value.trim(),
        twitter: document.getElementById('socialTwitter').value.trim(),
        linkedin: document.getElementById('socialLinkedin').value.trim(),
        youtube: document.getElementById('socialYoutube').value.trim(),
        pinterest: document.getElementById('socialPinterest').value.trim()
      };
      setStore('aura_social_links', updated);
      if (typeof showToast === 'function') showToast('Social media links saved & synchronized across public website!', 'success');
    });
  }

  // Reset Socials
  const btnResetSocials = document.getElementById('btnResetSocials');
  if (btnResetSocials) {
    btnResetSocials.addEventListener('click', () => {
      setStore('aura_social_links', DEFAULT_SOCIAL_STORE);
      loadSocialSettings();
      if (typeof showToast === 'function') showToast('Social links reset to defaults.', 'info');
    });
  }

  // 9. General Settings Form
  const formGeneral = document.getElementById('formGeneralSettings');
  if (formGeneral) {
    formGeneral.addEventListener('submit', (e) => {
      e.preventDefault();
      const updated = {
        brandName: document.getElementById('settingBrandName').value.trim(),
        phone: document.getElementById('settingPhone').value.trim(),
        email: document.getElementById('settingEmail').value.trim(),
        hours: document.getElementById('settingHours').value.trim(),
        address: document.getElementById('settingAddress').value.trim()
      };
      setStore('aura_website_settings', updated);
      if (typeof showToast === 'function') showToast('Company settings saved.', 'success');
    });
  }

  // 10. Master Reset Data Button
  const btnResetData = document.getElementById('btnMasterResetData');
  if (btnResetData) {
    btnResetData.addEventListener('click', () => {
      if (!confirm('Are you sure you want to reset all database collections to factory defaults? All custom edits will be reverted.')) return;
      localStorage.removeItem('aura_services');
      localStorage.removeItem('aura_projects');
      localStorage.removeItem('aura_project_categories');
      localStorage.removeItem('aura_articles');
      localStorage.removeItem('aura_testimonials');
      localStorage.removeItem('aura_team_members');
      localStorage.removeItem('aura_social_links');
      localStorage.removeItem('aura_website_settings');
      localStorage.removeItem('aura_quote_requests');
      localStorage.removeItem('aura_contact_messages');
      initAdminDataStore();
      renderDashboardHome();
      renderUsersTable();
      renderServicesTable();
      renderProjectsTable();
      renderCategoriesGrid();
      renderArticlesTable();
      renderTestimonialsTable();
      renderMessagesTable();
      renderQuotesTable();
      renderTeamTable();
      loadSocialSettings();
      loadGeneralSettings();
      if (typeof showToast === 'function') showToast('All website databases reset to pristine defaults.', 'success');
    });
  }

  // Modal Open Trigger Buttons
  const btnAddUser = document.getElementById('btnAddUser');
  if (btnAddUser) {
    btnAddUser.addEventListener('click', () => {
      document.getElementById('formModalUser').reset();
      document.getElementById('modalUserId').value = '';
      document.getElementById('modalUserTitle').textContent = 'Add New User';
      new bootstrap.Modal(document.getElementById('modalUser')).show();
    });
  }

  const btnAddService = document.getElementById('btnAddService');
  if (btnAddService) {
    btnAddService.addEventListener('click', () => {
      document.getElementById('formModalService').reset();
      document.getElementById('modalServiceId').value = '';
      document.getElementById('modalServiceTitle').textContent = 'Add New Service';
      new bootstrap.Modal(document.getElementById('modalService')).show();
    });
  }

  const btnAddProject = document.getElementById('btnAddProject');
  if (btnAddProject) {
    btnAddProject.addEventListener('click', openProjectModal);
  }

  const btnAddCategory = document.getElementById('btnAddCategory');
  if (btnAddCategory) {
    btnAddCategory.addEventListener('click', () => {
      document.getElementById('formModalCategory').reset();
      document.getElementById('modalCategoryId').value = '';
      document.getElementById('modalCategoryTitle').textContent = 'Add Project Category';
      document.getElementById('modalCategorySlug').removeAttribute('readonly');
      new bootstrap.Modal(document.getElementById('modalCategory')).show();
    });
  }

  const catNameInput = document.getElementById('modalCategoryName');
  const catSlugInput = document.getElementById('modalCategorySlug');
  if (catNameInput && catSlugInput) {
    catNameInput.addEventListener('input', () => {
      if (!document.getElementById('modalCategoryId').value) {
        catSlugInput.value = catNameInput.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      }
    });
  }

  const btnAddArticle = document.getElementById('btnAddArticle');
  if (btnAddArticle) {
    btnAddArticle.addEventListener('click', () => {
      document.getElementById('formModalArticle').reset();
      document.getElementById('modalArticleId').value = '';
      document.getElementById('modalArticleTitle').textContent = 'Write New Article';
      new bootstrap.Modal(document.getElementById('modalArticle')).show();
    });
  }

  const btnAddTestimonial = document.getElementById('btnAddTestimonial');
  if (btnAddTestimonial) {
    btnAddTestimonial.addEventListener('click', () => {
      document.getElementById('formModalTestimonial').reset();
      document.getElementById('modalTestimonialId').value = '';
      document.getElementById('modalTestimonialTitle').textContent = 'Add Testimonial';
      new bootstrap.Modal(document.getElementById('modalTestimonial')).show();
    });
  }

  const btnAddTeamMember = document.getElementById('btnAddTeamMember');
  if (btnAddTeamMember) {
    btnAddTeamMember.addEventListener('click', () => {
      document.getElementById('formModalTeamMember').reset();
      document.getElementById('modalTeamMemberId').value = '';
      document.getElementById('modalTeamMemberTitle').textContent = 'Add Artisan';
      new bootstrap.Modal(document.getElementById('modalTeamMember')).show();
    });
  }

  // Filter input listeners
  const searchUsers = document.getElementById('searchUsersInput');
  const filterUsers = document.getElementById('filterUserStatus');
  if (searchUsers) searchUsers.addEventListener('input', () => renderUsersTable(searchUsers.value, filterUsers?.value || 'all'));
  if (filterUsers) filterUsers.addEventListener('change', () => renderUsersTable(searchUsers?.value || '', filterUsers.value));

  const searchServices = document.getElementById('searchServicesInput');
  if (searchServices) searchServices.addEventListener('input', () => renderServicesTable(searchServices.value));

  const searchProjects = document.getElementById('searchProjectsInput');
  const filterProjects = document.getElementById('filterProjectCategory');
  if (searchProjects) searchProjects.addEventListener('input', () => renderProjectsTable(searchProjects.value, filterProjects?.value || 'all'));
  if (filterProjects) filterProjects.addEventListener('change', () => renderProjectsTable(searchProjects?.value || '', filterProjects.value));

  const searchArticles = document.getElementById('searchArticlesInput');
  if (searchArticles) searchArticles.addEventListener('input', () => renderArticlesTable(searchArticles.value));

  const searchTestimonials = document.getElementById('searchTestimonialsInput');
  if (searchTestimonials) searchTestimonials.addEventListener('input', () => renderTestimonialsTable(searchTestimonials.value));

  const searchMessages = document.getElementById('searchMessagesInput');
  if (searchMessages) searchMessages.addEventListener('input', () => renderMessagesTable(searchMessages.value));

  const searchQuotes = document.getElementById('searchQuotesInput');
  const filterQuotes = document.getElementById('filterQuoteStatus');
  if (searchQuotes) searchQuotes.addEventListener('input', () => renderQuotesTable(searchQuotes.value, filterQuotes?.value || 'all'));
  if (filterQuotes) filterQuotes.addEventListener('change', () => renderQuotesTable(searchQuotes?.value || '', filterQuotes.value));

  const searchTeam = document.getElementById('searchTeamInput');
  if (searchTeam) searchTeam.addEventListener('input', () => renderTeamTable(searchTeam.value));
}

/**
 * Topbar Global Search Handler
 */
function setupGlobalAdminSearch() {
  const globalInput = document.getElementById('globalAdminSearch');
  if (!globalInput) return;

  globalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const q = globalInput.value.trim().toLowerCase();
      if (!q) return;

      // Check where matches exist
      const projects = getStore('aura_projects', []);
      const users = getStore('aura_users', []);
      const quotes = getStore('aura_quote_requests', []);

      if (projects.some(p => p.title.toLowerCase().includes(q))) {
        document.getElementById('nav-projects')?.click();
        const searchBox = document.getElementById('searchProjectsInput');
        if (searchBox) { searchBox.value = q; renderProjectsTable(q); }
      } else if (users.some(u => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q))) {
        document.getElementById('nav-users')?.click();
        const searchBox = document.getElementById('searchUsersInput');
        if (searchBox) { searchBox.value = q; renderUsersTable(q); }
      } else if (quotes.some(i => i.name.toLowerCase().includes(q) || i.service.toLowerCase().includes(q))) {
        document.getElementById('nav-quotes')?.click();
        const searchBox = document.getElementById('searchQuotesInput');
        if (searchBox) { searchBox.value = q; renderQuotesTable(q); }
      } else {
        if (typeof showToast === 'function') showToast(`No specific records found matching "${q}".`, 'info');
      }
    }
  });
}

/* Helper string capitalization & HTML Escaping */
function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* ==========================================================================
   15. INITIALIZATION ON DOM READY
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  checkAdminAuthGuard();
  initAdminLoginHandler();
  initAdminDashboard();
});
