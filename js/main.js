/**
 * ==========================================================================
 * AURA FINISHES & CO. — MASTER JAVASCRIPT ENGINE (main.js)
 * High-End Painting & Wall Finishing Contractor Interactive Script
 * ==========================================================================
 */

'use strict';

// Immediate theme bootstrap to prevent style flash
(function() {
  try {
    const saved = localStorage.getItem('aura_theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (saved) {
      document.documentElement.setAttribute('data-theme', saved);
    }
  } catch (e) {}
})();

const SERVICE_IMAGE_URLS = Object.freeze({
  'interior-painting': 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=75',
  'exterior-painting': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=75',
  'residential-painting': 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=75',
  'wall-finishing': 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=900&q=75',
  'texture-finishing': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=75',
  'waterproofing': 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=900&h=800&q=75',
  'decorative-painting': 'images/services/decorative-painting.jpg',
  'commercial-painting': 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=75',
  'industrial-painting': 'images/services/industrial-painting.jpg'
});

const PROJECT_IMAGE_URLS = Object.freeze({
  'modern-residence': 'images/projects/modern-residence.jpg',
  'tribeca-penthouse-suite': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=75',
  'tribeca-penthouse': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=75',
  'tribeca-monolith-penthouse': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=75',
  'hudson-yards-tech-hq': 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=75',
  'greenwich-modern-estate': 'images/projects/greenwich-estate.jpg',
  'modern-estate': 'images/projects/greenwich-estate.jpg',
  'soho-designer-loft': 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=900&q=75',
  'soho-art-loft': 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=900&q=75',
  'soho-art-loft-residence': 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=900&q=75',
  'laura-restaurant-lounge': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=75',
  'laura-restaurant': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=75',
  'hamptons-coastal-villa': 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=75',
  'luxury-villa': 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=75',
  'upper-east-side-classic': 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=75',
  'interior-finish': 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=75',
  'standard-atrium-lounge': 'images/projects/commercial-atrium.jpg',
  'the-standard-atrium': 'images/projects/commercial-atrium.jpg',
  'commercial-atrium': 'images/projects/commercial-atrium.jpg',
  'westchester-stone-manor': 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=900&h=800&q=75',
  'madison-avenue-flagship': 'images/projects/madison-flagship.jpg',
  'bel-air-modernist-villa': 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=75',
  'tribeca-master-suite': 'images/hero/hero-bedroom.jpg'
});

const PORTFOLIO_PROJECTS_LIST = Object.freeze([
  {
    id: 'modern-residence',
    title: 'Modern Architectural Residence',
    category: 'Residential • Architectural Concrete',
    categoryPill: 'Residential &bull; Architectural Concrete',
    filterCategory: 'residential interior texture-plaster',
    location: 'Tribeca, New York',
    image: 'images/projects/modern-residence.jpg',
    area: '5,200 sq.ft.',
    duration: '4 Weeks Execution'
  },
  {
    id: 'tribeca-penthouse-suite',
    title: 'Tribeca Penthouse Suite',
    category: 'Residential • Venetian Plaster',
    categoryPill: 'Residential &bull; Venetian Plaster',
    filterCategory: 'residential interior texture-plaster',
    location: 'Manhattan, New York',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=75',
    area: '4,500 sq.ft.',
    duration: '4 Weeks Execution'
  },
  {
    id: 'hudson-yards-tech-hq',
    title: 'Hudson Yards Tech HQ',
    category: 'Commercial • Acoustic Finish',
    categoryPill: 'Commercial &bull; Acoustic Finish',
    filterCategory: 'commercial interior',
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=75',
    area: '12,000 sq.ft.',
    duration: '6 Weeks Execution'
  },
  {
    id: 'greenwich-modern-estate',
    title: 'Greenwich Modern Estate',
    category: 'Exterior • Weatherproof Coating',
    categoryPill: 'Exterior &bull; Weatherproof Coating',
    filterCategory: 'residential exterior',
    location: 'Greenwich, CT',
    image: 'images/projects/greenwich-estate.jpg',
    area: '8,200 sq.ft.',
    duration: '5 Weeks Execution'
  },
  {
    id: 'soho-art-loft-residence',
    title: 'SoHo Art Loft Residence',
    category: 'Interior • Limewash Texture',
    categoryPill: 'Interior &bull; Limewash Texture',
    filterCategory: 'residential interior texture-plaster',
    location: 'SoHo, New York',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=600&q=75',
    area: '3,800 sq.ft.',
    duration: '3 Weeks Execution'
  },
  {
    id: 'laura-restaurant-lounge',
    title: 'L’Aura Restaurant & Lounge',
    category: 'Commercial • Marmorino Finish',
    categoryPill: 'Commercial &bull; Marmorino Finish',
    filterCategory: 'commercial interior texture-plaster',
    location: 'Brooklyn, NY',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=75',
    area: '5,400 sq.ft.',
    duration: '4 Weeks Execution'
  },
  {
    id: 'hamptons-coastal-villa',
    title: 'Hamptons Coastal Villa',
    category: 'Exterior • Salt-Shield Finish',
    categoryPill: 'Exterior &bull; Salt-Shield Finish',
    filterCategory: 'residential exterior',
    location: 'East Hampton, NY',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=75',
    area: '9,600 sq.ft.',
    duration: '5 Weeks Execution'
  },
  {
    id: 'upper-east-side-classic',
    title: 'Upper East Side Classic',
    category: 'Interior • Mineral Velvet',
    categoryPill: 'Interior &bull; Mineral Velvet',
    filterCategory: 'residential interior',
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=75',
    area: '4,100 sq.ft.',
    duration: '4 Weeks Execution'
  },
  {
    id: 'standard-atrium-lounge',
    title: 'The Standard Atrium Lounge',
    category: 'Commercial • Micro-Cement',
    categoryPill: 'Commercial &bull; Micro-Cement',
    filterCategory: 'commercial interior texture-plaster',
    location: 'Miami, FL',
    image: 'images/projects/commercial-atrium.jpg',
    area: '7,500 sq.ft.',
    duration: '5 Weeks Execution'
  },
  {
    id: 'westchester-stone-manor',
    title: 'Westchester Stone Manor',
    category: 'Exterior • Hydro-Barrier Facade',
    categoryPill: 'Exterior &bull; Hydro-Barrier Facade',
    filterCategory: 'residential exterior',
    location: 'Bedford, NY',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&h=600&q=75',
    area: '11,000 sq.ft.',
    duration: '6 Weeks Execution'
  },
  {
    id: 'madison-avenue-flagship',
    title: 'Madison Avenue Flagship',
    category: 'Commercial • Gold-Leaf & Silk Skim',
    categoryPill: 'Commercial &bull; Gold-Leaf & Silk Skim',
    filterCategory: 'commercial interior texture-plaster',
    location: 'Madison Ave, New York',
    image: 'images/projects/madison-flagship.jpg',
    area: '6,800 sq.ft.',
    duration: '4 Weeks Execution'
  },
  {
    id: 'bel-air-modernist-villa',
    title: 'Bel Air Modernist Villa',
    category: 'Exterior • Mineral Micro-Coat',
    categoryPill: 'Exterior &bull; Mineral Micro-Coat',
    filterCategory: 'residential exterior',
    location: 'Bel Air, California',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=75',
    area: '10,500 sq.ft.',
    duration: '5 Weeks Execution'
  }
]);

const PROJECTS_DATA = Object.freeze({
  'modern-residence': {
    id: 'modern-residence',
    title: 'Modern Architectural Residence',
    category: 'RESIDENTIAL • ARCHITECTURAL CONCRETE',
    categoryPill: 'RESIDENTIAL &bull; ARCHITECTURAL CONCRETE',
    location: 'Tribeca, New York',
    area: '5,200 sq.ft.',
    duration: '4 Weeks Execution',
    meta: 'Tribeca, New York &bull; 5,200 sq.ft. &bull; 4 Weeks Execution',
    image: 'images/projects/modern-residence.jpg',
    mainImage: 'images/projects/modern-residence.jpg',
    description: 'Monolithic architectural concrete and smooth mineral wall finishes designed for a multi-level contemporary luxury residence.',
    visionTitle: 'Contemporary Minimalist Architecture & Monolithic Textures',
    lead: 'Crafted smooth mineral micro-coatings and architectural board-formed concrete finishes across an open-concept multi-level modern residence.',
    body: 'Precision surface leveling paired with matte mineral plaster coatings to maximize natural light diffusion across expansive floor-to-ceiling glass pavilions.',
    beforeImage: 'images/before-after/modern-residence-before.jpg',
    afterImage: 'images/before-after/modern-residence-after.jpg',
    beforeLabel: 'Before (Structural Framing)',
    afterLabel: 'After (Architectural Concrete)',
    challenge: 'Achieving seamless planar transitions between floor slabs, concrete columns, and flush-mounted interior doors without visible joints.',
    solution: 'Applied ultra-flexible polymer-modified mineral skim with continuous laser leveling across all perimeter intersections.',
    quote: '“The modern architectural finish elevated our home with breathtaking minimalism and effortless sophistication.”',
    quoteAuthor: '— Private Residential Client, Tribeca',
    specs: {
      client: 'Private Residence',
      location: 'Tribeca, New York',
      area: '5,200 sq. ft.',
      material: 'Architectural Concrete & Mineral Plaster',
      color: 'Warm Ash & Titanium (#E0DDD5)',
      timeline: '4 Weeks Completed',
      warranty: '10-Year Master Certificate'
    }
  },
  'tribeca-penthouse-suite': {
    id: 'tribeca-penthouse-suite',
    title: 'Tribeca Penthouse Suite',
    category: 'RESIDENTIAL • VENETIAN PLASTER',
    categoryPill: 'RESIDENTIAL &bull; VENETIAN PLASTER',
    location: 'Manhattan, New York',
    area: '4,500 sq.ft.',
    duration: '4 Weeks Execution',
    meta: 'Manhattan, New York &bull; 4,500 sq.ft. &bull; 4 Weeks Execution',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=75',
    mainImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=75',
    description: 'Full 4,500 sq.ft. application of hand-burnished Italian Marmorino lime plaster, creating continuous seamless transitions between ceiling coves and floor slabs.',
    visionTitle: 'Project Vision & Architectural Context',
    lead: 'The objective was to transform an expansive top-floor duplex penthouse into a serene, tactile sanctuary. The client desired walls that felt monolithic and carved from natural stone rather than standard painted drywall.',
    body: 'Our team specified hand-burnished Italian Marmorino lime plaster, incorporating fine Carrara marble aggregate to achieve subtle depth and luminous light play across 12-foot ceilings.',
    beforeImage: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&h=800&q=75',
    afterImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&h=800&q=75',
    beforeLabel: 'Before (Bare Drywall)',
    afterLabel: 'After (Polished Marmorino)',
    challenge: 'Extreme floor-to-ceiling southern window exposure meant any minute joint imperfection or lap mark would be severely magnified under raking afternoon sunlight.',
    solution: 'Our 4-man master team executed continuous seamless wet-edge troweling across 40-foot wall spans without interrupting the cure cycle, achieving a flawless monolithic plane.',
    quote: '“The Marmorino walls created by Aura Finishes have transformed our home into a liveable work of art. Their clean process, punctuality, and craftsmanship are second to none.”',
    quoteAuthor: '— Private Residential Client, Manhattan',
    specs: {
      client: 'Private Collector',
      location: 'Manhattan, New York',
      area: '4,500 sq. ft.',
      material: 'Italian Marmorino',
      color: 'Venetian Calce (#E5DDD0)',
      timeline: '4 Weeks Completed',
      warranty: '10-Year Master Certificate'
    }
  },
  'tribeca-penthouse': {
    id: 'tribeca-penthouse',
    title: 'Tribeca Penthouse Suite',
    category: 'RESIDENTIAL • VENETIAN PLASTER',
    categoryPill: 'RESIDENTIAL &bull; VENETIAN PLASTER',
    location: 'Manhattan, New York',
    area: '4,500 sq.ft.',
    duration: '4 Weeks Execution',
    meta: 'Manhattan, New York &bull; 4,500 sq.ft. &bull; 4 Weeks Execution',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=75',
    mainImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=75',
    description: 'Full 4,500 sq.ft. application of hand-burnished Italian Marmorino lime plaster, creating continuous seamless transitions between ceiling coves and floor slabs.',
    visionTitle: 'Project Vision & Architectural Context',
    lead: 'The objective was to transform an expansive top-floor duplex penthouse into a serene, tactile sanctuary. The client desired walls that felt monolithic and carved from natural stone rather than standard painted drywall.',
    body: 'Our team specified hand-burnished Italian Marmorino lime plaster, incorporating fine Carrara marble aggregate to achieve subtle depth and luminous light play across 12-foot ceilings.',
    beforeImage: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&h=800&q=75',
    afterImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&h=800&q=75',
    beforeLabel: 'Before (Drywall)',
    afterLabel: 'After (Marmorino)',
    challenge: 'Extreme floor-to-ceiling southern window exposure meant any minute joint imperfection or lap mark would be severely magnified under raking afternoon sunlight.',
    solution: 'Our 4-man master team executed continuous seamless wet-edge troweling across 40-foot wall spans without interrupting the cure cycle, achieving a flawless monolithic plane.',
    quote: '“The Marmorino walls created by Aura Finishes have transformed our home into a liveable work of art. Their clean process, punctuality, and craftsmanship are second to none.”',
    quoteAuthor: '— Private Residential Client, Manhattan',
    specs: {
      client: 'Private Collector',
      location: 'Manhattan, New York',
      area: '4,500 sq. ft.',
      material: 'Italian Marmorino',
      color: 'Venetian Calce (#E5DDD0)',
      timeline: '4 Weeks Completed',
      warranty: '10-Year Master Certificate'
    }
  },
  'hudson-yards-tech-hq': {
    id: 'hudson-yards-tech-hq',
    title: 'Hudson Yards Tech HQ',
    category: 'COMMERCIAL • ACOUSTIC FINISH',
    categoryPill: 'COMMERCIAL &bull; ACOUSTIC FINISH',
    location: 'New York, NY',
    area: '12,000 sq.ft.',
    duration: '6 Weeks Execution',
    meta: 'New York, NY &bull; 12,000 sq.ft. &bull; 6 Weeks Execution',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=75',
    mainImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=75',
    description: 'Acoustic micro-perforated mineral coatings paired with deep charcoal lime wash for executive boardrooms and creative gallery pavilions.',
    visionTitle: 'Corporate Acoustic Intelligence & Modern Atmosphere',
    lead: 'Engineering high-performance acoustic micro-mineral wall systems across three expansive headquarters floors to elevate sound clarity and visual refinement.',
    body: 'We integrated non-reflective acoustic micro-texture finishes across presentation amphitheaters, open creative pods, and executive boardrooms with seamless architectural transitions.',
    beforeImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&h=800&q=75',
    afterImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&h=800&q=75',
    beforeLabel: 'Before (Bare Concrete & Glass)',
    afterLabel: 'After (Acoustic Mineral Finish)',
    challenge: 'Significant sound reverberation caused by 14-foot perimeter glass curtain walls and industrial exposed ceiling slabs.',
    solution: 'Deployed engineered multi-layer acoustic plaster providing NRC 0.85 sound absorption paired with deep graphite accent walls.',
    quote: '“Aura Finishes delivered phenomenal acoustic performance and immaculate design aesthetic on a compressed corporate deadline.”',
    quoteAuthor: '— Facilities Director, Global Tech Enterprise',
    specs: {
      client: 'Global Tech Enterprise',
      location: 'New York, NY',
      area: '12,000 sq. ft.',
      material: 'Acoustic Mineral & Lime Wash',
      color: 'Graphite Slate & Pure Mineral',
      timeline: '6 Weeks Completed',
      warranty: '10-Year Commercial Warranty'
    }
  },
  'greenwich-modern-estate': {
    id: 'greenwich-modern-estate',
    title: 'Greenwich Modern Estate',
    category: 'EXTERIOR • WEATHERPROOF COATING',
    categoryPill: 'EXTERIOR &bull; WEATHERPROOF COATING',
    location: 'Greenwich, CT',
    area: '8,200 sq.ft.',
    duration: '5 Weeks Execution',
    meta: 'Greenwich, CT &bull; 8,200 sq.ft. &bull; 5 Weeks Execution',
    image: 'images/projects/greenwich-estate.jpg',
    mainImage: 'images/projects/greenwich-estate.jpg',
    description: 'Full exterior architectural restoration featuring breathable elastomeric weather-shield membrane formulated for high-exposure luxury architecture.',
    visionTitle: 'Architectural Weather-Shield & Facade Renewal',
    lead: 'Complete exterior restoration featuring breathable elastomeric weather-shield membrane formulated for high-exposure luxury architecture.',
    body: 'Applied multi-tier micro-porous elastomeric membrane systems to withstand extreme New England seasonal temperature swings and freeze-thaw cycles without surface micro-cracking.',
    beforeImage: 'images/before-after/greenwich-estate-before.jpg',
    afterImage: 'images/before-after/greenwich-estate-after.jpg',
    beforeLabel: 'Before (Weathered Stucco)',
    afterLabel: 'After (Elastomeric Shield)',
    challenge: 'Hairline settlement micro-fissures in masonry substrate allowing seasonal moisture infiltration during heavy coastal storms.',
    solution: 'Elastomeric bridge priming with flexible acrylic-siloxane topcoats providing 300% elasticity across all structural joints.',
    quote: '“Our estate looks brand new and has endured harsh coastal winters without a single crack or discoloration.”',
    quoteAuthor: '— Estate Manager, Greenwich Modern Estate',
    specs: {
      client: 'Private Family Office',
      location: 'Greenwich, CT',
      area: '8,200 sq. ft.',
      material: 'Elastomeric Siloxane Membrane',
      color: 'Nordic Alabaster (#F4F1EA)',
      timeline: '5 Weeks Completed',
      warranty: '12-Year Weather-Shield Guarantee'
    }
  },
  'soho-art-loft-residence': {
    id: 'soho-art-loft-residence',
    title: 'SoHo Art Loft Residence',
    category: 'INTERIOR • LIMEWASH TEXTURE',
    categoryPill: 'INTERIOR &bull; LIMEWASH TEXTURE',
    location: 'SoHo, New York',
    area: '3,800 sq.ft.',
    duration: '3 Weeks Execution',
    meta: 'SoHo, New York &bull; 3,800 sq.ft. &bull; 3 Weeks Execution',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=900&q=75',
    mainImage: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=900&q=75',
    description: 'Bespoke textured slaked-lime wash and Roman clay wall finishes curated for an artist loft and private gallery space in historic cast-iron SoHo.',
    visionTitle: 'Organic Slaked Lime Cloud & Gallery Atmosphere',
    lead: 'Bespoke textured slaked-lime wash and Roman clay wall finishes curated for an artist loft and private gallery space in historic cast-iron SoHo.',
    body: 'Layered organic mineral limewash applied with cloud-trowel techniques to create soft, undulating gradients that diffuse natural daylighting across 14-foot gallery ceilings.',
    beforeImage: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=1000&h=800&q=75',
    afterImage: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&h=800&q=75',
    beforeLabel: 'Before (Standard Paint)',
    afterLabel: 'After (Organic Limewash)',
    challenge: 'Applying modern breathable finishes over 120-year-old historic masonry and plaster walls without trapping trapped humidity.',
    solution: 'Applied mineral potassium silicate primer followed by genuine slaked-lime wash allowing full moisture vapor permeability.',
    quote: '“The walls possess an organic vitality and warmth that elevated our entire contemporary art collection to museum grade.”',
    quoteAuthor: '— Contemporary Collector, SoHo',
    specs: {
      client: 'Contemporary Art Collector',
      location: 'SoHo, New York',
      area: '3,800 sq. ft.',
      material: 'Slaked Lime Wash & Roman Clay',
      color: 'Warm Bone & Muted Greige',
      timeline: '3 Weeks Completed',
      warranty: '10-Year Master Certificate'
    }
  },
  'soho-designer-loft': {
    id: 'soho-designer-loft',
    title: 'SoHo Art Loft Residence',
    category: 'INTERIOR • LIMEWASH TEXTURE',
    categoryPill: 'INTERIOR &bull; LIMEWASH TEXTURE',
    location: 'SoHo, New York',
    area: '3,800 sq.ft.',
    duration: '3 Weeks Execution',
    meta: 'SoHo, New York &bull; 3,800 sq.ft. &bull; 3 Weeks Execution',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=900&q=75',
    mainImage: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=900&q=75',
    description: 'Bespoke textured slaked-lime wash and Roman clay wall finishes curated for an artist loft and private gallery space in historic cast-iron SoHo.',
    visionTitle: 'Organic Slaked Lime Cloud & Gallery Atmosphere',
    lead: 'Bespoke textured slaked-lime wash and Roman clay wall finishes curated for an artist loft and private gallery space in historic cast-iron SoHo.',
    body: 'Layered organic mineral limewash applied with cloud-trowel techniques to create soft, undulating gradients that diffuse natural daylighting across 14-foot gallery ceilings.',
    beforeImage: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=1000&h=800&q=75',
    afterImage: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&h=800&q=75',
    beforeLabel: 'Before (Standard Paint)',
    afterLabel: 'After (Organic Limewash)',
    challenge: 'Applying modern breathable finishes over 120-year-old historic masonry and plaster walls without trapping trapped humidity.',
    solution: 'Applied mineral potassium silicate primer followed by genuine slaked-lime wash allowing full moisture vapor permeability.',
    quote: '“The walls possess an organic vitality and warmth that elevated our entire contemporary art collection to museum grade.”',
    quoteAuthor: '— Contemporary Collector, SoHo',
    specs: {
      client: 'Contemporary Art Collector',
      location: 'SoHo, New York',
      area: '3,800 sq. ft.',
      material: 'Slaked Lime Wash & Roman Clay',
      color: 'Warm Bone & Muted Greige',
      timeline: '3 Weeks Completed',
      warranty: '10-Year Master Certificate'
    }
  },
  'laura-restaurant-lounge': {
    id: 'laura-restaurant-lounge',
    title: 'L’Aura Restaurant & Lounge',
    category: 'COMMERCIAL • MARMORINO FINISH',
    categoryPill: 'COMMERCIAL &bull; MARMORINO FINISH',
    location: 'Brooklyn, NY',
    area: '5,400 sq.ft.',
    duration: '4 Weeks Execution',
    meta: 'Brooklyn, New York &bull; 5,400 sq.ft. &bull; 4 Weeks Execution',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=75',
    mainImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=75',
    description: 'Atmospheric luxury dining venue featuring burnished Venetian plaster, fluted textured columns, and washable protective beeswax sealants.',
    visionTitle: 'Sensory Warmth & Burnished Italian Plaster',
    lead: 'Atmospheric luxury dining venue featuring burnished Venetian plaster, fluted textured columns, and washable protective beeswax sealants.',
    body: 'Crafted warm terracotta and olive-hued Marmorino finishes that withstand high-traffic hospitality use while radiating candlelit intimacy.',
    beforeImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&h=800&q=75',
    afterImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&h=800&q=75',
    beforeLabel: 'Before (Drywall Shell)',
    afterLabel: 'After (Burnished Marmorino)',
    challenge: 'Commercial dining environments require heavy scrub resistance without compromising the authentic tactile texture of lime plaster.',
    solution: 'Finished with double hand-buffed organic Marseilles beeswax giving complete grease, wine, and water repellency.',
    quote: '“Our dining room atmosphere is unforgettable. Guests constantly touch and compliment the plaster work.”',
    quoteAuthor: '— Executive Chef & Partner, L’Aura Group',
    specs: {
      client: 'Michelin Hospitality Group',
      location: 'Brooklyn, NY',
      area: '5,400 sq. ft.',
      material: 'Venetian Marmorino & Wax',
      color: 'Tuscan Ochre & Smoked Olive',
      timeline: '4 Weeks Completed',
      warranty: '7-Year Commercial Guarantee'
    }
  },
  'hamptons-coastal-villa': {
    id: 'hamptons-coastal-villa',
    title: 'Hamptons Coastal Villa',
    category: 'EXTERIOR • SALT-SHIELD FINISH',
    categoryPill: 'EXTERIOR &bull; SALT-SHIELD FINISH',
    location: 'East Hampton, NY',
    area: '9,600 sq.ft.',
    duration: '5 Weeks Execution',
    meta: 'East Hampton, NY &bull; 9,600 sq.ft. &bull; 5 Weeks Execution',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=75',
    mainImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=75',
    description: 'Oceanfront luxury residence treated with marine-grade exterior fluoropolymer coatings engineered for intense salt-fog resistance.',
    visionTitle: 'Marine-Grade Exterior Defense & Estate Elegance',
    lead: 'Oceanfront luxury residence treated with marine-grade exterior fluoropolymer coatings engineered for intense salt-fog resistance.',
    body: 'Multi-coat protective architectural coating system formulated specifically for oceanfront estates subject to high UV, maritime humidity, and coastal wind loads.',
    beforeImage: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1000&h=800&q=75',
    afterImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&h=800&q=75',
    beforeLabel: 'Before (Salt-Worn Stucco)',
    afterLabel: 'After (Fluoropolymer Salt-Shield)',
    challenge: 'Salty sea mist and intense direct coastal sun caused premature chalking and peeling on previous exterior paints.',
    solution: 'Utilized ceramic-nanotech fluoropolymer topcoat with advanced UV inhibitors and hydrophobic salt barrier.',
    quote: '“Three coastal hurricane seasons later and the villa exterior looks as pristine as the day Aura Finishes completed the project.”',
    quoteAuthor: '— Principal Architect, Coastal Living Studio',
    specs: {
      client: 'Private Coastal Estate',
      location: 'East Hampton, NY',
      area: '9,600 sq. ft.',
      material: 'Marine Nano-Fluoropolymer',
      color: 'Coastal Oyster & Pure White',
      timeline: '5 Weeks Completed',
      warranty: '15-Year Marine Grade Warranty'
    }
  },
  'upper-east-side-classic': {
    id: 'upper-east-side-classic',
    title: 'Upper East Side Classic',
    category: 'INTERIOR • MINERAL VELVET',
    categoryPill: 'INTERIOR &bull; MINERAL VELVET',
    location: 'New York, NY',
    area: '4,100 sq.ft.',
    duration: '4 Weeks Execution',
    meta: 'Upper East Side, New York, NY &bull; 4,100 sq.ft. &bull; 4 Weeks Execution',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=75',
    mainImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=75',
    description: 'Full pre-war architectural apartment restoration including Level-5 skim coating, custom crown molding restoration, and dead-flat mineral finishes.',
    visionTitle: 'Pre-War Heritage Preservation & Level-5 Perfection',
    lead: 'Full pre-war architectural apartment restoration including Level-5 skim coating, custom crown molding restoration, and dead-flat mineral finishes.',
    body: 'Restored historic hand-carved millwork and applied museum-quality ultra-matte mineral velvet finishes across 10 distinct architectural rooms.',
    beforeImage: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&h=800&q=75',
    afterImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&h=800&q=75',
    beforeLabel: 'Before (Aging Pre-War Plaster)',
    afterLabel: 'After (Level-5 Mineral Velvet)',
    challenge: 'Cracked 90-year-old plaster ceilings with ornate historic molding requiring delicate preservation without loss of profile.',
    solution: 'Stabilized plaster with fiberglass mesh embedding followed by three ultra-thin skim coats and hand-brushed fine trim enamel.',
    quote: '“Aura’s artisans honored the heritage of our pre-war home while giving us flawless modern wall perfection.”',
    quoteAuthor: '— Private Homeowner, Park Avenue',
    specs: {
      client: 'Pre-War Heritage Residence',
      location: 'New York, NY',
      area: '4,100 sq. ft.',
      material: 'Mineral Velvet Flat & Lacquer',
      color: 'Park Avenue Dove & Crisp Trim',
      timeline: '4 Weeks Completed',
      warranty: '10-Year Craftsmanship Guarantee'
    }
  },
  'standard-atrium-lounge': {
    id: 'standard-atrium-lounge',
    title: 'The Standard Atrium Lounge',
    category: 'COMMERCIAL • MICRO-CEMENT',
    categoryPill: 'COMMERCIAL &bull; MICRO-CEMENT',
    location: 'Miami, FL',
    area: '7,500 sq.ft.',
    duration: '5 Weeks Execution',
    meta: 'Miami, FL &bull; 7,500 sq.ft. &bull; 5 Weeks Execution',
    image: 'images/projects/commercial-atrium.jpg',
    mainImage: 'images/projects/commercial-atrium.jpg',
    description: 'Seamless micro-cement wall and floor integration for a high-traffic hotel atrium and cocktail lounge.',
    visionTitle: 'Monolithic Micro-Cement & Industrial Elegance',
    lead: 'Seamless micro-cement wall and floor integration for a high-traffic hotel atrium and cocktail lounge.',
    body: 'Continuous monolithic micro-cement surfaces linking structural architectural columns to floor slabs with custom polymer-modified cementitious coatings.',
    beforeImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&h=800&q=75',
    afterImage: 'images/projects/commercial-atrium.jpg',
    beforeLabel: 'Before (Raw Concrete)',
    afterLabel: 'After (Polished Micro-Cement)',
    challenge: 'Continuous heavy foot traffic and tropical humidity requiring absolute seamless waterproof integration.',
    solution: 'Four-stage quartz-reinforced micro-cement with dual polyurethane seal coats for scratch and stain proofing.',
    quote: '“The monolithic concrete look transformed our atrium into an iconic architectural destination in Miami.”',
    quoteAuthor: '— General Manager, The Standard Hospitality',
    specs: {
      client: 'Luxury Boutique Hotel Group',
      location: 'Miami, FL',
      area: '7,500 sq. ft.',
      material: 'Polymer-Modified Micro-Cement',
      color: 'Industrial Sandstone & Basalt',
      timeline: '5 Weeks Completed',
      warranty: '8-Year Commercial Traffic Warranty'
    }
  },
  'westchester-stone-manor': {
    id: 'westchester-stone-manor',
    title: 'Westchester Stone Manor',
    category: 'EXTERIOR • HYDRO-BARRIER FACADE',
    categoryPill: 'EXTERIOR &bull; HYDRO-BARRIER FACADE',
    location: 'Bedford, NY',
    area: '11,000 sq.ft.',
    duration: '6 Weeks Execution',
    meta: 'Bedford, NY &bull; 11,000 sq.ft. &bull; 6 Weeks Execution',
    image: 'images/before-after/waterproofing-after.jpg',
    mainImage: 'images/before-after/waterproofing-after.jpg',
    description: 'Complete exterior restoration and hydrophobic stone-preservation sealing for a historic 1920s masonry estate.',
    visionTitle: 'Historic Masonry Preservation & Hydrophobic Shielding',
    lead: 'Complete exterior restoration and hydrophobic stone-preservation sealing for a historic 1920s masonry estate.',
    body: 'Treated exterior stone masonry and timber architectural elements with invisible silane-siloxane impregnating sealers to prevent water penetration while maintaining 100% natural breathability.',
    beforeImage: 'images/before-after/waterproofing-before.jpg',
    afterImage: 'images/before-after/waterproofing-after.jpg',
    beforeLabel: 'Before (Moss & Efflorescence)',
    afterLabel: 'After (Sealed Hydrophobic Facade)',
    challenge: 'Deep efflorescence and moss growth on north-facing historic limestone and fieldstone walls.',
    solution: 'Low-pressure hot-steam bio-wash followed by deep-penetrating fluoropolymer hydrophobic barrier.',
    quote: '“Aura Finishes preserved the historic beauty of our family manor with state-of-the-art masonry technology.”',
    quoteAuthor: '— Heritage Trust Trustee, Bedford, NY',
    specs: {
      client: 'Historic Estate Trust',
      location: 'Bedford, NY',
      area: '11,000 sq. ft.',
      material: 'Hydrophobic Silane-Siloxane',
      color: 'Natural Fieldstone & Cedar',
      timeline: '6 Weeks Completed',
      warranty: '15-Year Breathable Seal Guarantee'
    }
  },
  'madison-avenue-flagship': {
    id: 'madison-avenue-flagship',
    title: 'Madison Avenue Flagship',
    category: 'COMMERCIAL • GOLD-LEAF & SILK SKIM',
    categoryPill: 'COMMERCIAL &bull; GOLD-LEAF & SILK SKIM',
    location: 'Madison Ave, New York',
    area: '6,800 sq.ft.',
    duration: '4 Weeks Execution',
    meta: 'Madison Ave, New York, NY &bull; 6,800 sq.ft. &bull; 4 Weeks Execution',
    image: 'images/projects/madison-flagship.jpg',
    mainImage: 'images/projects/madison-flagship.jpg',
    description: 'Haute couture flagship boutique featuring hand-applied 23k gold leaf gilded moldings, acoustic silk skim plaster, and high-gloss lacquer display niches.',
    visionTitle: 'Haute Couture Gilded Finishes & Architectural Silk',
    lead: 'Haute couture flagship boutique featuring hand-applied 23k gold leaf gilded moldings, acoustic silk skim plaster, and high-gloss lacquer display niches.',
    body: 'Delivered ultra-luxury finishes for an iconic luxury fashion house, coordinating nocturnal shifts to meet the strict grand opening deadline.',
    beforeImage: 'images/before-after/madison-flagship-before.jpg',
    afterImage: 'images/before-after/madison-flagship-after.jpg',
    beforeLabel: 'Before (White Box Framing)',
    afterLabel: 'After (23k Gold & Silk Skim)',
    challenge: 'Complex 70-degree ceiling vaulting and night-only construction window in high-security retail district.',
    solution: 'Precision scaffolding, rapid-cure Italian plaster formulations, and master gilders applying hand-laid gold leaf.',
    quote: '“The craftsmanship in our Madison Ave flagship is breathtaking. Aura Finishes met our highest global standards.”',
    quoteAuthor: '— Global Retail Architect, Haute Couture',
    specs: {
      client: 'Haute Couture Fashion House',
      location: 'Madison Ave, NY',
      area: '6,800 sq. ft.',
      material: '23k Gold Leaf & Silk Skim',
      color: 'Champagne Pearl & Gilded Gold',
      timeline: '4 Weeks Completed',
      warranty: '10-Year Luxury Retail Guarantee'
    }
  },
  'bel-air-modernist-villa': {
    id: 'bel-air-modernist-villa',
    title: 'Bel Air Modernist Villa',
    category: 'EXTERIOR • MINERAL MICRO-COAT',
    categoryPill: 'EXTERIOR &bull; MINERAL MICRO-COAT',
    location: 'Bel Air, California',
    area: '10,500 sq.ft.',
    duration: '5 Weeks Execution',
    meta: 'Bel Air, California &bull; 10,500 sq.ft. &bull; 5 Weeks Execution',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&h=800&q=75',
    mainImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&h=800&q=75',
    description: 'Ultra-modern architectural villa featuring solar-reflective mineral micro-coatings and crisp geometric shadow lines.',
    visionTitle: 'Solar-Reflective Mineral Facades & Sculptural Lines',
    lead: 'Ultra-modern architectural villa featuring solar-reflective mineral micro-coatings and crisp geometric shadow lines.',
    body: 'Applied cool-roof and solar-reflective facade technology engineered to reduce thermal heat gain by up to 35% in sunny Southern California.',
    beforeImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&h=800&q=75',
    afterImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&h=800&q=75',
    beforeLabel: 'Before (Weathered Stucco)',
    afterLabel: 'After (Solar-Reflective Micro-Coat)',
    challenge: 'Intense direct UV radiation and steep cantilevered concrete forms requiring thermal expansion tolerance.',
    solution: 'Inorganic mineral silicate micro-coatings with ceramic thermal beads and high solar reflectance index (SRI 104).',
    quote: '“Not only is the finish visually stunning, but the villa stays noticeably cooler throughout the hottest summer days.”',
    quoteAuthor: '— Residential Architect, Los Angeles',
    specs: {
      client: 'Architectural Designer Client',
      location: 'Bel Air, CA',
      area: '10,500 sq. ft.',
      material: 'Solar-Reflective Mineral Micro-Coat',
      color: 'Super White Solar (#FFFFFF)',
      timeline: '5 Weeks Completed',
      warranty: '15-Year UV & Thermal Guarantee'
    }
  },
  'tribeca-master-suite': {
    id: 'tribeca-master-suite',
    title: 'Tribeca Master Suite',
    category: 'RESIDENTIAL • LIME-WASH FEATURE',
    categoryPill: 'RESIDENTIAL &bull; LIME-WASH FEATURE',
    location: 'Manhattan, New York',
    area: '1,850 sq.ft.',
    duration: '2 Weeks Execution',
    meta: 'Manhattan, New York &bull; 1,850 sq.ft. &bull; 2 Weeks Execution',
    image: 'images/hero/hero-bedroom.jpg',
    mainImage: 'images/hero/hero-bedroom.jpg',
    description: 'Intimate master bedroom sanctuary with custom textured slaked-lime accent walls and integrated architectural cove backlighting.',
    visionTitle: 'Textured Bedroom Sanctuary & Warm Accentuation',
    lead: 'Intimate master bedroom sanctuary with custom textured slaked-lime accent walls and integrated architectural cove backlighting.',
    body: 'Hand-troweled multi-tonal lime wash in earthy mineral hues, creating a warm, acoustically softened retreat within a bustling urban residence.',
    beforeImage: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&h=800&q=75',
    afterImage: 'images/hero/hero-bedroom.jpg',
    beforeLabel: 'Before (Plain White Drywall)',
    afterLabel: 'After (Textured Slaked Lime)',
    challenge: 'Creating seamless textured transition around integrated LED hidden cove lighting channels without shadowing imperfections.',
    solution: 'Custom feathered trowel edge finish specifically calibrated for 2700K warm LED grazing light.',
    quote: '“Our bedroom feels like an exclusive luxury spa. The texture and lighting interaction are pure perfection.”',
    quoteAuthor: '— Private Homeowner, Manhattan',
    specs: {
      client: 'Private Residence',
      location: 'Manhattan, NY',
      area: '1,850 sq. ft.',
      material: 'Mineral Slaked Lime Wash',
      color: 'Soft Cashmere & Warm Stone',
      timeline: '2 Weeks Completed',
      warranty: '10-Year Craftsmanship Guarantee'
    }
  }
});

/* ==========================================================================
   JOURNAL & ARTICLES DATA DICTIONARY
   ========================================================================== */
const ARTICLES_DATA = Object.freeze({
  'color-trends-2026': {
    slug: 'color-trends-2026',
    category: 'Color Trends',
    title: '7 Architectural Paint Colors Defining Modern Luxury in 2026',
    date: 'Feb 12, 2026',
    readTime: '6 Min Read',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=75',
    alt: 'Modern Luxury Living Room in Earth Tones',
    author: {
      name: 'Elena Rostova',
      title: 'Head of Color Architecture at Aura Finishes & Co.',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=75',
      bio: 'With a background in historical pigment conservation, Elena leads custom color formulation and architectural palette curation for international private estates.'
    },
    lead: 'For nearly two decades, stark monochromatic whites and cold industrial grays dominated contemporary interior architecture. In 2026, we are witnessing a profound renaissance: a decisive shift toward rich earth pigments, organic mineral warmth, and deep tactile saturation.',
    contentHtml: `
      <p class="lead text-heading fw-medium mb-4">
        For nearly two decades, stark monochromatic whites and cold industrial grays dominated contemporary interior architecture. In 2026, we are witnessing a profound renaissance: a decisive shift toward rich earth pigments, organic mineral warmth, and deep tactile saturation.
      </p>

      <h2 class="fw-bold fs-2 text-heading mt-5 mb-3">1. Venetian Terracotta (#C35A38)</h2>
      <p>
        Far from the orange-heavy clay tones of the 1990s, the modern terracotta is rooted in Venetian fresco tradition. When blended with fine slaked lime, it diffuses harsh midday daylight into a calming, radiant glow, ideal for dining rooms and open-plan entertaining salons.
      </p>

      <blockquote class="p-4 bg-surface-soft border-start border-4 border-primary rounded-end my-4 text-heading fst-italic">
        "Color in architecture is not decorative ornamentation; it is the atmospheric medium through which natural light becomes tangible."
      </blockquote>

      <h2 class="fw-bold fs-2 text-heading mt-5 mb-3">2. Botanical Forest Sage (#2D4A43)</h2>
      <p>
        Sage greens paired with natural unlacquered brass hardware create an organic grounding effect. The high chlorophyll undertone absorbs excess glare in expansive south-facing residences, offering visual rest and connecting indoor spaces to exterior gardens.
      </p>

      <h2 class="fw-bold fs-2 text-heading mt-5 mb-3">3. Nordic Mineral Linen (#E5DDD0)</h2>
      <p>
        Replacing harsh titanium whites, Nordic Linen offers a nuanced blend of crushed chalk and warm grey pigment. Under incandescent 2700K evening fixtures, it envelops the space in soothing candlelit warmth.
      </p>

      <h2 class="fw-bold fs-2 text-heading mt-5 mb-3">4. Raw Ochre &amp; Sienese Umber</h2>
      <p>
        Natural earth pigments sourced from Italian quarries provide rich undertones that shift subtly between dawn, midday, and twilight. These mineral pigments maintain their lightfast brilliance across decades without fading.
      </p>
    `,
    tags: ['#ColorTrends', '#InteriorDesign', '#Terracotta', '#MineralPigments'],
    prev: null,
    next: { slug: 'venetian-plaster-vs-limewash', title: 'Venetian Plaster vs. Limewash: Choosing the Right Texture' }
  },

  'venetian-plaster-vs-limewash': {
    slug: 'venetian-plaster-vs-limewash',
    category: 'Finishing Techniques',
    title: 'Venetian Plaster vs. Limewash: Choosing the Right Texture',
    date: 'Jan 28, 2026',
    readTime: '5 Min Read',
    heroImage: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=900&q=75',
    alt: 'Hand-troweled Venetian Plaster Texture Detail',
    author: {
      name: 'Mateo Rossi',
      title: 'Venetian Plaster Specialist at Aura Finishes & Co.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=75',
      bio: 'A third-generation artisan trained in Venice, Mateo specializes in Marmorino, Grassello lucido, and custom lime finishes for historic and modern residences.'
    },
    lead: 'Both Venetian plaster and limewash celebrate the tactile beauty of slaked lime and natural earth minerals, yet their surface character, application technique, and architectural longevity serve distinct design visions.',
    contentHtml: `
      <p class="lead text-heading fw-medium mb-4">
        Both Venetian plaster and limewash celebrate the tactile beauty of slaked lime and natural earth minerals, yet their surface character, application technique, and architectural longevity serve distinct design visions.
      </p>

      <h2 class="fw-bold fs-2 text-heading mt-5 mb-3">1. The Depth and Sheen of Venetian Plaster</h2>
      <p>
        Venetian plaster is crafted with aged slaked lime combined with ultra-fine Italian marble powder. Applied in multiple razor-thin layers with stainless steel Japanese trowels and burnished to perfection, it creates a glass-smooth surface with marble-like depth and multidimensional luminescence.
      </p>

      <blockquote class="p-4 bg-surface-soft border-start border-4 border-primary rounded-end my-4 text-heading fst-italic">
        "A masterfully troweled Marmorino wall does not merely reflect ambient lighting—it captures and softens it within crystalline marble layers."
      </blockquote>

      <h2 class="fw-bold fs-2 text-heading mt-5 mb-3">2. The Soft Patina of Architectural Limewash</h2>
      <p>
        Limewash is a breathable, non-film-forming mineral wash applied using broad cross-hatch brushstrokes. As the slaked lime reacts with airborne carbon dioxide through carbonation, it produces a suede-like chalky patina with gentle clouding and velvety organic tonal shifts.
      </p>

      <h2 class="fw-bold fs-2 text-heading mt-5 mb-3">3. Sheen, Durability, and Room Suitability</h2>
      <p>
        Choose polished Venetian plaster for high-traffic focal zones, grand powder rooms, and expansive double-height galleries where light interplay is paramount. Select limewash for bedrooms, restful study salons, and spaces seeking timeless, tactile tranquility.
      </p>
    `,
    tags: ['#VenetianPlaster', '#Limewash', '#Marmorino', '#TextureFinishing'],
    prev: { slug: 'color-trends-2026', title: '7 Architectural Paint Colors Defining Modern Luxury in 2026' },
    next: { slug: 'exterior-facade-moisture', title: 'How to Protect Your Exterior Facade from Coastal Moisture' }
  },

  'exterior-facade-moisture': {
    slug: 'exterior-facade-moisture',
    category: 'Maintenance & Care',
    title: 'How to Protect Your Exterior Facade from Coastal Moisture',
    date: 'Jan 15, 2026',
    readTime: '7 Min Read',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=75',
    alt: 'Coastal Estate Exterior Painting and Moisture Barrier',
    author: {
      name: 'Julian Vance',
      title: 'Founder & Master Finisher at Aura Finishes & Co.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=75',
      bio: 'Julian has over 18 years of technical experience directing luxury estate coatings, historical facade preservation, and extreme climate barrier systems.'
    },
    lead: 'Coastal atmospheric conditions subject luxury exterior facades to continuous cycles of airborne salt, wind-driven rain, and intense solar UV degradation. Protecting architectural envelopes demands specialized elastomeric coatings and dustless substrate stabilization.',
    contentHtml: `
      <p class="lead text-heading fw-medium mb-4">
        Coastal atmospheric conditions subject luxury exterior facades to continuous cycles of airborne salt, wind-driven rain, and intense solar UV degradation. Protecting architectural envelopes demands specialized elastomeric coatings and dustless substrate stabilization.
      </p>

      <h2 class="fw-bold fs-2 text-heading mt-5 mb-3">1. Understanding Micro-Cracking and Capillary Moisture</h2>
      <p>
        Hairline fissures in exterior masonry or stucco allow hydrostatic moisture to migrate beneath paint films. During freeze-thaw cycles, trapped water expands, resulting in efflorescence, delamination, and costly structural spalling.
      </p>

      <blockquote class="p-4 bg-surface-soft border-start border-4 border-primary rounded-end my-4 text-heading fst-italic">
        "Exterior coating longevity is 90% preparation and 10% chemistry. Without dustless substrate repair, even the finest elastomeric coating will fail."
      </blockquote>

      <h2 class="fw-bold fs-2 text-heading mt-5 mb-3">2. High-Elongation Elastomeric Membranes</h2>
      <p>
        We apply cross-linking 300% elastomeric coatings that expand and contract with seasonal thermal shifts. These breathable membranes prevent liquid water intrusion from the outside while permitting internal water vapor to escape freely.
      </p>

      <h2 class="fw-bold fs-2 text-heading mt-5 mb-3">3. Salt-Resistant Siloxane Primers</h2>
      <p>
        Deep-penetrating siloxane primers react chemically with mineral substrates, creating an invisible hydrophobic crystalline barrier that repels salt crystallization and prevents coastal salt-spray erosion.
      </p>
    `,
    tags: ['#ExteriorCoating', '#Waterproofing', '#Elastomeric', '#FacadeCare'],
    prev: { slug: 'venetian-plaster-vs-limewash', title: 'Venetian Plaster vs. Limewash: Choosing the Right Texture' },
    next: { slug: 'level-5-skim-coating', title: 'Why Level-5 Skim Coating is Essential for Dark Saturated Hues' }
  },

  'level-5-skim-coating': {
    slug: 'level-5-skim-coating',
    category: 'Surface Preparation',
    title: 'Why Level-5 Skim Coating is Essential for Dark Saturated Hues',
    date: 'Dec 20, 2025',
    readTime: '4 Min Read',
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=75',
    alt: 'Master Level 5 Drywall Preparation and Skim Coating',
    author: {
      name: 'Henrik Lindqvist',
      title: 'Precision Spray & Prep Lead at Aura Finishes & Co.',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=75',
      bio: 'Henrik oversees substrate flatness testing, German dustless HEPA extraction sanding, and precision airless lacquer applications for modern architecture.'
    },
    lead: 'Deep, saturated pigment formulations—such as obsidian navy, charcoal noir, and deep emerald—absorb and refract light with extreme sensitivity. Without a seamless Level-5 skim coat, standard drywall seams and fastener heads remain visibly distorted under raking light.',
    contentHtml: `
      <p class="lead text-heading fw-medium mb-4">
        Deep, saturated pigment formulations—such as obsidian navy, charcoal noir, and deep emerald—absorb and refract light with extreme sensitivity. Without a seamless Level-5 skim coat, standard drywall seams and fastener heads remain visibly distorted under raking light.
      </p>

      <h2 class="fw-bold fs-2 text-heading mt-5 mb-3">1. The Optical Physics of Raking Light</h2>
      <p>
        Natural daylight entering through large floor-to-ceiling architectural windows skims across drywall surfaces at shallow angles. Any subtle variation in substrate porosity or joint compound thickness creates visible flash lines on dark matte walls.
      </p>

      <blockquote class="p-4 bg-surface-soft border-start border-4 border-primary rounded-end my-4 text-heading fst-italic">
        "In luxury architecture, true perfection is invisible. A Level-5 surface eliminates every trace of drywall manufacturing, leaving only pure color planes."
      </blockquote>

      <h2 class="fw-bold fs-2 text-heading mt-5 mb-3">2. The Level-5 Application Protocol</h2>
      <p>
        Our artisans apply a continuous skim coat of high-density joint compound across 100% of the wall surface, followed by raking-light inspection with 3,000-lumen guide lamps and Festool orbital HEPA extraction sanders.
      </p>

      <h2 class="fw-bold fs-2 text-heading mt-5 mb-3">3. High-Solids Sealer and Barrier Primer</h2>
      <p>
        After sanding to glass-like uniformity, a penetrating high-solids primer equalizes surface porosity, guaranteeing that dark saturated paints dry with zero sheen variation or flashing.
      </p>
    `,
    tags: ['#Level5Skim', '#SurfacePrep', '#DustlessSanding', '#FlawlessWalls'],
    prev: { slug: 'exterior-facade-moisture', title: 'How to Protect Your Exterior Facade from Coastal Moisture' },
    next: { slug: 'zero-voc-mineral-finishes', title: 'The Health Impact of Zero-VOC Mineral Wall Finishes' }
  },

  'zero-voc-mineral-finishes': {
    slug: 'zero-voc-mineral-finishes',
    category: 'Wellness & Materials',
    title: 'The Health Impact of Zero-VOC Mineral Wall Finishes',
    date: 'Dec 05, 2025',
    readTime: '5 Min Read',
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=75',
    alt: 'Zero VOC Eco Mineral Paint Application for Living Spaces',
    author: {
      name: 'Claire Montgomery',
      title: 'Heritage Restoration Lead at Aura Finishes & Co.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=75',
      bio: 'Claire specializes in non-toxic historic lime chemistry, mineral silicate coatings, and sustainable architectural restoration for residential estates.'
    },
    lead: 'Standard synthetic petrochemical paints release volatile organic compounds (VOCs) that degrade indoor air quality for months after drying. Natural mineral finishes provide superior aesthetic depth while maintaining pure, allergen-free residential environments.',
    contentHtml: `
      <p class="lead text-heading fw-medium mb-4">
        Standard synthetic petrochemical paints release volatile organic compounds (VOCs) that degrade indoor air quality for months after drying. Natural mineral finishes provide superior aesthetic depth while maintaining pure, allergen-free residential environments.
      </p>

      <h2 class="fw-bold fs-2 text-heading mt-5 mb-3">1. Eliminating Off-Gassing in Living Spaces</h2>
      <p>
        Traditional latex paints contain glycols, coalescing solvents, and synthetic biocides that evaporate into interior air. Zero-VOC mineral paints use water, potassium silicate, and crushed mineral fillers that cure without releasing toxic fumes or lingering odors.
      </p>

      <blockquote class="p-4 bg-surface-soft border-start border-4 border-primary rounded-end my-4 text-heading fst-italic">
        "A healthy home begins with what covers your walls. Mineral coatings allow indoor air to remain as pure and natural as the materials themselves."
      </blockquote>

      <h2 class="fw-bold fs-2 text-heading mt-5 mb-3">2. Natural Antimicrobial and Mold Resistance</h2>
      <p>
        Potassium silicate and slaked lime maintain a naturally high alkaline pH (above 11), creating an inhospitable environment for mold, mildew, and fungal spores without the need for artificial chemical fungicides.
      </p>

      <h2 class="fw-bold fs-2 text-heading mt-5 mb-3">3. Breathability and Moisture Regulation</h2>
      <p>
        Mineral coatings form a micro-porous matrix that bonds chemically with masonry and drywall. They absorb excess humidity during humid days and release it as ambient air dries, acting as a natural indoor humidity regulator.
      </p>
    `,
    tags: ['#ZeroVOC', '#EcoFriendly', '#IndoorAirQuality', '#MineralPaints'],
    prev: { slug: 'level-5-skim-coating', title: 'Why Level-5 Skim Coating is Essential for Dark Saturated Hues' },
    next: { slug: 'acoustic-mineral-wall-coatings', title: 'Acoustic Mineral Wall Coatings in Modern Open Offices' }
  },

  'acoustic-mineral-wall-coatings': {
    slug: 'acoustic-mineral-wall-coatings',
    category: 'Commercial Architecture',
    title: 'Acoustic Mineral Wall Coatings in Modern Open Offices',
    date: 'Nov 18, 2025',
    readTime: '6 Min Read',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=75',
    alt: 'Modern Open Office with Acoustic Wall Coatings',
    author: {
      name: 'Liam O\'Connor',
      title: 'Commercial Coating Lead at Aura Finishes & Co.',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=75',
      bio: 'Liam has directed commercial finishing projects for Fortune 500 corporate headquarters, luxury hospitality venues, and architectural creative studios.'
    },
    lead: 'Open-plan contemporary offices and commercial spaces frequently suffer from excessive reverberation caused by expansive glass, polished concrete, and exposed metal ceilings. Acoustic mineral coatings provide a seamless, elegant sound-dampening solution.',
    contentHtml: `
      <p class="lead text-heading fw-medium mb-4">
        Open-plan contemporary offices and commercial spaces frequently suffer from excessive reverberation caused by expansive glass, polished concrete, and exposed metal ceilings. Acoustic mineral coatings provide a seamless, elegant sound-dampening solution.
      </p>

      <h2 class="fw-bold fs-2 text-heading mt-5 mb-3">1. The Noise Problem in Minimalist Architecture</h2>
      <p>
        Modern minimalist designs favor hard reflective surfaces that amplify echo, speech distraction, and ambient fatigue. Traditional fabric acoustic panels often disrupt architectural vision, whereas spray-applied mineral finishes blend into pure monolithic planes.
      </p>

      <blockquote class="p-4 bg-surface-soft border-start border-4 border-primary rounded-end my-4 text-heading fst-italic">
        "Acoustic performance does not have to compromise architectural elegance. Sound-absorbing mineral coatings deliver supreme quiet with museum-grade aesthetics."
      </blockquote>

      <h2 class="fw-bold fs-2 text-heading mt-5 mb-3">2. Micro-Porous Sound Absorption Mechanics</h2>
      <p>
        Engineered acoustic plasters contain microscopic volcanic perlite and recycled glass beads. When sound waves strike the surface, energy is dissipated within the porous structure, achieving Noise Reduction Coefficients (NRC) up to 0.85.
      </p>

      <h2 class="fw-bold fs-2 text-heading mt-5 mb-3">3. Seamless Monolithic Execution</h2>
      <p>
        Applied without seams across expansive ceilings and perimeter walls, acoustic mineral coatings offer Class A fire ratings, high light reflectance, and customizable architectural color matching.
      </p>
    `,
    tags: ['#CommercialDesign', '#Acoustics', '#SoundAbsorption', '#ModernOffice'],
    prev: { slug: 'zero-voc-mineral-finishes', title: 'The Health Impact of Zero-VOC Mineral Wall Finishes' },
    next: null
  }
});

function initializePage() {
  // Run page-specific rendering first so the requested service/project/article never waits on
  // optional UI modules.
  initServiceDetailsPage();
  initProjectDetailsPage();
  initBlogDetailsPage();
  initThemeSwitcher();
  initRtlSwitcher();
  initStickyHeader();
  initActiveNavLink();
  initNavbarDropdowns();
  initBeforeAfterSliders();
  initRoomColorVisualizer();
  initPortfolioGrid();
  initPortfolioFilter();
  initFaqLiveSearch();
  initBlogSearch();
  initQuoteCalculator();
  initAnimatedCounters();
  initNavbarAuth();
  initSignInRouteNavigation();
  initFormValidationAndToasts();
  initPasswordToggles();
  initSocialAuthButtons();
  initComingSoonTimer();
  initBackToTop();
  initImageModals();
  initLegalModals();
  initServiceLinkPrefetch();
  initProjectLinkPrefetch();
  initArticleLinkPrefetch();
  initLivePublicSocialLinks();
}

// This script is intentionally loaded at the end of each page. Initializing
// here avoids waiting for unrelated deferred third-party scripts.
if (document.body) {
  initializePage();
} else {
  document.addEventListener('DOMContentLoaded', initializePage, { once: true });
}

function initServiceLinkPrefetch() {
  const preloaded = new Set();
  const preload = (event) => {
    const link = event.target.closest('a[href*="service-details.html?service="]');
    if (!link) return;
    const slug = new URL(link.href, window.location.href).searchParams.get('service');
    const imageUrl = SERVICE_IMAGE_URLS[slug];
    if (!imageUrl || preloaded.has(imageUrl)) return;
    preloaded.add(imageUrl);
    const image = new Image();
    image.src = imageUrl;
  };

  document.addEventListener('pointerenter', preload, { capture: true, passive: true });
  document.addEventListener('focusin', preload, { passive: true });
}

function initProjectLinkPrefetch() {
  const preloaded = new Set();
  const preload = (event) => {
    const link = event.target.closest('a[href*="project-details.html"]');
    if (!link) return;
    let slug = 'tribeca-penthouse';
    try {
      const url = new URL(link.href, window.location.href);
      slug = url.searchParams.get('id') || url.searchParams.get('project') || 'tribeca-penthouse';
    } catch (e) {}
    const imageUrl = PROJECT_IMAGE_URLS[slug] || (PROJECTS_DATA[slug] && PROJECTS_DATA[slug].mainImage);
    if (!imageUrl || preloaded.has(imageUrl)) return;
    preloaded.add(imageUrl);
    const image = new Image();
    image.src = imageUrl;
  };

  document.addEventListener('pointerenter', preload, { capture: true, passive: true });
  document.addEventListener('focusin', preload, { passive: true });
}

/* ==========================================================================
   1. THEME SWITCHER (Dark / Light Mode with localStorage)
   ========================================================================== */
function initThemeSwitcher() {
  const themeToggles = document.querySelectorAll('.mode-toggle');
  const savedTheme = localStorage.getItem('aura_theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  applyTheme(savedTheme);

  themeToggles.forEach(toggle => {
    if (toggle.dataset.themeBound === 'true') return;
    toggle.dataset.themeBound = 'true';

    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      if (typeof showToast === 'function') {
        showToast(`Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} Mode`, 'info');
      }
    });
  });

  function applyTheme(theme) {
    const isDark = theme === 'dark';
    const activeTheme = isDark ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', activeTheme);
    if (document.body) {
      document.body.setAttribute('data-theme', activeTheme);
    }
    localStorage.setItem('aura_theme', activeTheme);

    const toggles = document.querySelectorAll('.mode-toggle');
    toggles.forEach(t => {
      t.innerHTML = isDark 
        ? '<i class="bi bi-sun-fill text-warning"></i>' 
        : '<i class="bi bi-moon-stars-fill"></i>';
      t.setAttribute('title', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
      t.setAttribute('aria-label', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
    });

    // Re-render SVG charts on admin dashboard if present
    if (typeof renderMonthlyTrendsChart === 'function') {
      try {
        const quotes = typeof getStore === 'function' ? getStore('aura_quote_requests', []) : [];
        const messages = typeof getStore === 'function' ? getStore('aura_contact_messages', []) : [];
        const projects = typeof getStore === 'function' ? getStore('aura_projects', typeof DEFAULT_PROJECTS_STORE !== 'undefined' ? DEFAULT_PROJECTS_STORE : []) : [];
        if (typeof renderProjectCategoryChart === 'function') renderProjectCategoryChart(projects);
        renderMonthlyTrendsChart(quotes, messages);
      } catch (err) {}
    }
  }

  window.auraApplyTheme = applyTheme;
}

/* ==========================================================================
   2. RTL SWITCHER (LTR / RTL with localStorage)
   ========================================================================== */
function initRtlSwitcher() {
  const rtlToggles = document.querySelectorAll('.rtl-toggle');
  const savedDir = localStorage.getItem('aura_dir') || 'ltr';

  applyDirection(savedDir);

  rtlToggles.forEach(toggle => {
    if (toggle.dataset.rtlBound === 'true') return;
    toggle.dataset.rtlBound = 'true';

    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const currentDir = document.documentElement.getAttribute('dir') === 'rtl' ? 'rtl' : 'ltr';
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      applyDirection(newDir);
      if (typeof showToast === 'function') {
        showToast(`Switched text direction to ${newDir.toUpperCase()}`, 'info');
      }
    });
  });

  function applyDirection(dir) {
    const isRtl = dir === 'rtl';
    const toggles = document.querySelectorAll('.rtl-toggle');

    if (isRtl) {
      document.documentElement.setAttribute('dir', 'rtl');
      localStorage.setItem('aura_dir', 'rtl');
      toggles.forEach(t => {
        t.classList.add('active');
        t.setAttribute('title', 'Switch to LTR (Left-to-Right)');
        t.setAttribute('aria-label', 'Switch to LTR (Left-to-Right)');
        const icon = t.querySelector('i');
        if (icon) {
          icon.className = 'bi bi-text-left';
        }
      });
    } else {
      document.documentElement.removeAttribute('dir');
      localStorage.setItem('aura_dir', 'ltr');
      toggles.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('title', 'Switch to RTL (Right-to-Left)');
        t.setAttribute('aria-label', 'Switch to RTL (Right-to-Left)');
        const icon = t.querySelector('i');
        if (icon) {
          icon.className = 'bi bi-text-right';
        }
      });
    }
  }

  window.auraApplyDirection = applyDirection;
}

/* ==========================================================================
   3. STICKY HEADER
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector('.main-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   4. ACTIVE NAV LINK HIGHLIGHTER & SIGN IN ROUTE INTERCEPTOR
   ========================================================================== */
function initActiveNavLink() {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const dropdownItems = document.querySelectorAll('.dropdown-menu .dropdown-item');
  let currentPath = window.location.pathname.split('/').pop();
  if (!currentPath || currentPath === '') currentPath = 'index.html';
  const fullPath = window.location.pathname.toLowerCase();
  const isSignIn = fullPath.endsWith('/signin') || fullPath.endsWith('/signin/') || currentPath === 'signin.html' || currentPath === 'login.html';

  // Clear existing active states
  navLinks.forEach(link => link.classList.remove('active'));
  dropdownItems.forEach(item => item.classList.remove('active'));

  // Highlight Sign In button if on sign in route
  if (isSignIn) {
    document.querySelectorAll('.auth-signin-btn').forEach(btn => btn.classList.add('active'));
  }

  // Match top-level link
  let matched = false;
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref && (linkHref === currentPath || (isSignIn && (linkHref === '/signin' || linkHref === 'signin.html' || linkHref === 'login.html')))) {
      link.classList.add('active');
      matched = true;
    }
  });

  // Match dropdown item & highlight parent toggle
  dropdownItems.forEach(item => {
    const itemHref = item.getAttribute('href');
    if (itemHref && itemHref === currentPath) {
      item.classList.add('active');
      const parentToggle = item.closest('.nav-item.dropdown')?.querySelector('.nav-link.dropdown-toggle');
      if (parentToggle) {
        parentToggle.classList.add('active');
        matched = true;
      }
    }
  });

  // Fallback to Home if on index.html
  if (!matched && !isSignIn && (currentPath === 'index.html' || currentPath === '')) {
    const homeToggle = document.querySelector('.navbar-nav .nav-link.dropdown-toggle');
    if (homeToggle) homeToggle.classList.add('active');
  }
}

function initSignInRouteNavigation() {
  // Ensure clicking Sign In button navigates reliably to Sign In page (signin.html) across all protocols & environments
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href="/signin"], a[href*="/signin"], a[href="signin.html"], a[href="login.html"], .auth-btn, .auth-signin-btn');
    if (!link) return;

    // Check if current page is already sign in
    let currentPath = window.location.pathname.split('/').pop();
    if (!currentPath || currentPath === '') currentPath = 'index.html';
    const isAlreadyOnSignIn = currentPath === 'signin.html' || currentPath === 'login.html' || window.location.pathname.endsWith('/signin') || window.location.pathname.endsWith('/signin/');

    if (isAlreadyOnSignIn) {
      // Focus login field if already on sign in page
      const idInput = document.getElementById('clientLoginIdentifier') || document.querySelector('input[name="loginIdentifier"]');
      if (idInput) {
        e.preventDefault();
        idInput.focus();
      }
      return;
    }

    // Determine target relative path (handle nested subdirectories)
    const isNested = window.location.pathname.includes('/signin/');
    const targetUrl = isNested ? '../signin.html' : 'signin.html';
    
    e.preventDefault();
    window.location.href = targetUrl;
  });
}

/* ==========================================================================
   4.1 SERVICE DETAILS PAGE CONTENT SWITCHER
   ========================================================================== */
function initServiceDetailsPage() {
  const titleEl = document.getElementById('serviceTitle');
  if (!titleEl) return;

  const services = {
    'interior-painting': {
      navLabel: 'Interior Painting & Finishing',
      title: 'Interior Painting & Wall Finishing',
      description: 'Detailed service specifications for luxury interior painting, level-5 skim coating, and artisanal mineral finishes.',
      hero: 'Architectural surface preparation, Level-5 skim coating, and zero-VOC mineral paint application for luxury residences.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=75',
      alt: 'Interior Painting Showcase',
      introTitle: 'Architectural Living Environments, Crafted Without Compromise',
      lead: 'Interior painting is more than just rolling color onto drywall. It is about creating pure, uninterrupted planes of light and tone that harmonize with flooring, millwork, and natural daylighting.',
      body: 'We utilize German Festool HEPA extraction sanders to eliminate 99.7% of airborne dust during substrate preparation, ensuring your home remains immaculate throughout the renovation process.',
      estimate: 'Get an accurate per-square-foot cost proposal for your home interior.',
      beforeImage: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1000&h=667&q=75',
      afterImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&h=667&q=75',
      beforeLabel: 'Before (Drywall & Primer)',
      afterLabel: 'After (Level-5 Satin)',
      specs: [
        ['Substrate Preparation', 'Level 4 to Level 5 continuous drywall skim coat, crack injection, and oil-based primer barrier.'],
        ['Formulation', '100% Zero-VOC acrylic-mineral hybrid, odorless, antimicrobial, mold-resistant.'],
        ['Sheen Availability', 'Dead Flat, Velvet Matte, Fine Eggshell, Pearl Satin, and High-Gloss Lacquer.'],
        ['Application Method', 'Precision micro-fiber hand rolling and Graco airless fine-finish spraying.'],
        ['Warranty Coverage', '7 to 10 Year Comprehensive Craftsmanship & Adhesion Guarantee.']
      ],
      stages: [
        ['Stage 01', 'Protection & Shielding', 'Floors armored with heavy neoprene protection, furniture sealed in static plastic, and doorways fitted with zippered containment barriers.'],
        ['Stage 02', 'Substrate Correction', 'High-lumen raking light inspection reveals all wall imperfections, followed by epoxy filling and dustless orbital sanding.'],
        ['Stage 03', 'Deep Tone Pigmenting', 'Two cross-directional coats applied with precise mill thickness gauges to achieve complete opacity and rich light absorption.'],
        ['Stage 04', 'White-Glove Handover', 'Detailed edge inspection, full protective film removal, HEPA vacuuming, and touch-up kit delivery.']
      ]
    },
    'exterior-painting': {
      navLabel: 'Exterior Painting',
      title: 'Exterior Painting',
      description: 'Weatherproof exterior painting systems for facades, trim, masonry, and architectural exteriors.',
      hero: 'UV-resistant exterior coatings and elastomeric protection systems engineered for long-term curb appeal.',
      image: 'images/before-after/exterior-painting-after.jpg',
      alt: 'Exterior Painting Showcase',
      introTitle: 'Durable Exterior Finishes Built for Weather Exposure',
      lead: 'Exterior painting protects the building envelope while sharpening the architectural character of the property.',
      body: 'Our process includes pressure washing, scraping, crack repair, primer selection, and controlled application of weather-rated coatings for clean coverage and strong adhesion.',
      estimate: 'Get an accurate exterior painting proposal for your property.',
      beforeImage: 'images/before-after/exterior-painting-before.jpg',
      afterImage: 'images/before-after/exterior-painting-after.jpg',
      beforeLabel: 'Before (Weathered & Peeling)',
      afterLabel: 'After (Architectural Weather-Shield)',
      specs: [
        ['Surface Preparation', 'Wash-down, loose paint removal, caulking, masonry patching, and spot priming.'],
        ['Coating System', 'UV-stable acrylic, elastomeric, or masonry coating selected by substrate and exposure.'],
        ['Best Surfaces', 'Stucco, brick, render, siding, doors, trims, railings, and exterior ceilings.'],
        ['Application Method', 'Brush, roller, and controlled airless spray with masking for crisp transitions.'],
        ['Warranty Coverage', '5 to 8 Year Exterior Craftsmanship & Adhesion Guarantee.']
      ],
      stages: [
        ['Stage 01', 'Wash & Inspect', 'Exterior surfaces are cleaned, checked for moisture issues, and mapped for repairs.'],
        ['Stage 02', 'Repair & Prime', 'Cracks, failing sealants, and exposed substrates are corrected before coating.'],
        ['Stage 03', 'Weatherproof Finish', 'Coatings are applied at proper film thickness for uniform protection.'],
        ['Stage 04', 'Detail Review', 'Edges, trims, fixtures, and cleanup are inspected before handover.']
      ]
    },
    'residential-painting': {
      navLabel: 'Residential Painting',
      title: 'Residential Painting',
      description: 'Carefully planned residential painting for houses, apartments, villas, and occupied homes.',
      hero: 'Low-disruption residential painting with meticulous protection, durable coatings, and a refined finish.',
      image: SERVICE_IMAGE_URLS['residential-painting'],
      alt: 'Residential Painting Showcase',
      introTitle: 'Thoughtful Painting for Beautiful Homes',
      lead: 'Our residential painting service is built around clean preparation, clear communication, and finishes that elevate everyday living.',
      body: 'We protect occupied spaces, repair surfaces, select low-odor coating systems, and complete each room with careful edge work and a detailed final review.',
      estimate: 'Get an accurate residential painting proposal for your home.',
      beforeImage: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&h=667&q=75',
      afterImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&h=667&q=75',
      beforeLabel: 'Before (Aged Interiors)',
      afterLabel: 'After (Zero-VOC Satin)',
      specs: [
        ['Home Protection', 'Furniture covering, floor protection, dust control, and carefully contained work zones.'],
        ['Coating System', 'Low-VOC interior and weather-rated exterior coatings selected for each surface.'],
        ['Best Spaces', 'Homes, apartments, villas, bedrooms, living areas, kitchens, and exterior elevations.'],
        ['Application Method', 'Precision brushwork, microfiber rolling, and controlled airless spray where appropriate.'],
        ['Warranty Coverage', '5 to 10 Year Residential Craftsmanship & Adhesion Guarantee.']
      ],
      stages: [
        ['Stage 01', 'Walkthrough & Protection', 'We confirm scope, protect surfaces, and prepare rooms for a clean start.'],
        ['Stage 02', 'Repair & Prime', 'Cracks, nail holes, and uneven areas are corrected before priming.'],
        ['Stage 03', 'Precision Coating', 'Selected finishes are applied evenly for durable, consistent color.'],
        ['Stage 04', 'Final Handover', 'We inspect details, remove protection, and complete the final touchups.']
      ]
    },
    'wall-finishing': {
      navLabel: 'Wall Finishing',
      title: 'Wall Finishing',
      description: 'Premium wall finishing services including plaster, skim coating, micro-cement, and polished mineral surfaces.',
      hero: 'Refined plaster, skim, and mineral wall systems for smooth, tactile architectural interiors.',
      image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=900&q=75',
      alt: 'Wall Finishing Showcase',
      introTitle: 'Seamless Wall Surfaces with Fine Architectural Texture',
      lead: 'Wall finishing creates the substrate quality and surface character that premium interiors depend on.',
      body: 'We correct uneven drywall, repair joints, refine corners, and apply specialty finishing systems that bring depth and craftsmanship to each room.',
      estimate: 'Get an accurate wall finishing proposal for your interior.',
      beforeImage: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=1000&h=667&q=75',
      afterImage: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&h=667&q=75',
      beforeLabel: 'Before (Flat Drywall)',
      afterLabel: 'After (Polished Marmorino)',
      specs: [
        ['Substrate Preparation', 'Skim coating, joint correction, sanding, priming, and surface leveling.'],
        ['Finish Options', 'Venetian plaster, Marmorino, micro-cement, silk skim, and polished mineral finishes.'],
        ['Surface Quality', 'Level 4 to Level 5 finishes for refined light reflection and smoothness.'],
        ['Application Method', 'Trowel-applied layers, hand burnishing, and controlled curing.'],
        ['Warranty Coverage', '5 to 7 Year Craftsmanship Guarantee.']
      ],
      stages: [
        ['Stage 01', 'Surface Audit', 'Walls are checked under angled light to locate unevenness and joint defects.'],
        ['Stage 02', 'Level & Prime', 'Skim coats and primers create a clean foundation for decorative or smooth finishes.'],
        ['Stage 03', 'Finish Build', 'Mineral or plaster layers are applied and refined by hand.'],
        ['Stage 04', 'Seal & Review', 'Final sealing, polishing, and edge checks complete the wall finish.']
      ]
    },
    'texture-finishing': {
      navLabel: 'Texture Finishing',
      title: 'Texture Finishing',
      description: 'Custom texture finishing including limewash, travertine effects, suede finishes, and metallic accents.',
      hero: 'Tactile decorative textures designed for feature walls, ceilings, niches, and statement rooms.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=75',
      alt: 'Texture Finishing Showcase',
      introTitle: 'Custom Texture Effects with Depth and Movement',
      lead: 'Texture finishing turns flat surfaces into expressive architectural features with subtle movement, shadow, and hand-applied detail.',
      body: 'We sample the finish before installation, tune color and texture density, and protect adjoining surfaces for a controlled decorative result.',
      estimate: 'Get an accurate texture finishing proposal for your feature surface.',
      beforeImage: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&h=667&q=75',
      afterImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&h=667&q=75',
      beforeLabel: 'Before (Plain Sheetrock)',
      afterLabel: 'After (Slaked Limewash)',
      specs: [
        ['Surface Preparation', 'Patch repair, primer bonding, masking, and texture sample approval.'],
        ['Finish Options', 'Travertine, limewash, velvet suede, metallic, stone effect, and layered mineral texture.'],
        ['Best Uses', 'Feature walls, bedrooms, lounges, retail displays, ceilings, and fireplace surrounds.'],
        ['Application Method', 'Hand trowel, brush, sponge, and layered specialty coating techniques.'],
        ['Warranty Coverage', '3 to 5 Year Decorative Finish Guarantee.']
      ],
      stages: [
        ['Stage 01', 'Sample Approval', 'Texture boards establish color, sheen, and movement before site application.'],
        ['Stage 02', 'Base Preparation', 'The surface is primed and protected to support the selected finish.'],
        ['Stage 03', 'Texture Application', 'Multiple layers are worked by hand to create depth and consistency.'],
        ['Stage 04', 'Cure & Seal', 'The finish is cured, sealed where needed, and reviewed under final lighting.']
      ]
    },
    'waterproofing': {
      navLabel: 'Waterproofing',
      title: 'Waterproofing',
      description: 'Waterproofing systems for basements, balconies, facades, wet areas, terraces, and masonry surfaces.',
      hero: 'Hydro-barrier membranes and protective coatings that stop moisture before it damages finished spaces.',
      image: 'images/before-after/waterproofing-after.jpg',
      alt: 'Waterproofing Showcase',
      introTitle: 'Moisture Protection for Vulnerable Building Surfaces',
      lead: 'Waterproofing protects structural surfaces and interior finishes from seepage, dampness, and coating failure.',
      body: 'We identify moisture paths, repair cracks, prepare substrates, and apply membrane or coating systems suited to the exposure level.',
      estimate: 'Get an accurate waterproofing proposal for your space.',
      beforeImage: 'images/before-after/waterproofing-before.jpg',
      afterImage: 'images/before-after/waterproofing-after.jpg',
      beforeLabel: 'Before (Moisture Staining)',
      afterLabel: 'After (Hydrophobic Shield)',
      specs: [
        ['Surface Preparation', 'Leak mapping, crack treatment, cleaning, grinding, and primer application.'],
        ['System Type', 'Liquid membrane, elastomeric coating, cementitious waterproofing, or hybrid barrier.'],
        ['Best Areas', 'Basements, terraces, balconies, facades, bathrooms, wet walls, and retaining surfaces.'],
        ['Application Method', 'Brush, roller, trowel, and reinforced membrane detailing at joints.'],
        ['Warranty Coverage', '5 to 10 Year Waterproofing System Guarantee.']
      ],
      stages: [
        ['Stage 01', 'Moisture Diagnosis', 'Source points, cracks, joints, and drainage risks are identified.'],
        ['Stage 02', 'Crack Treatment', 'Openings and weak areas are repaired before coating begins.'],
        ['Stage 03', 'Barrier Application', 'Membranes or coatings are applied in multiple controlled layers.'],
        ['Stage 04', 'Cure & Test', 'The system is cured, inspected, and tested where conditions allow.']
      ]
    },
    'decorative-painting': {
      navLabel: 'Decorative Painting',
      title: 'Decorative Painting',
      description: 'Decorative painting for feature walls, gilding, ombre gradients, geometric accents, and bespoke finishes.',
      hero: 'Custom decorative painting for expressive feature walls, refined accents, and signature interior moments.',
      image: 'images/services/decorative-painting.jpg',
      alt: 'Decorative Painting Showcase',
      introTitle: 'Bespoke Painted Details for Signature Spaces',
      lead: 'Decorative painting adds personality, rhythm, and crafted detail without changing the structure of a room.',
      body: 'We plan the design, prepare layout guides, sample color interactions, and execute detailed work with clean edges and balanced composition.',
      estimate: 'Get an accurate decorative painting proposal for your feature design.',
      beforeImage: 'images/before-after/madison-flagship-before.jpg',
      afterImage: 'images/before-after/madison-flagship-after.jpg',
      beforeLabel: 'Before (Unfinished Gallery)',
      afterLabel: 'After (23k Gold Leaf & Silk Skim)',
      specs: [
        ['Design Preparation', 'Concept layout, color sampling, surface preparation, masking, and mockup approval.'],
        ['Finish Options', 'Feature walls, gold leaf, ombre gradients, geometric forms, borders, and accents.'],
        ['Best Uses', 'Living rooms, bedrooms, hospitality walls, boutiques, reception spaces, and ceilings.'],
        ['Application Method', 'Hand painting, stencil work, gilding tools, fine brushes, and specialty rollers.'],
        ['Warranty Coverage', '3 to 5 Year Decorative Craftsmanship Guarantee.']
      ],
      stages: [
        ['Stage 01', 'Design Lockup', 'The pattern, colors, and finish direction are finalized before installation.'],
        ['Stage 02', 'Surface Setup', 'Walls are prepared, primed, and precisely masked for clean artwork.'],
        ['Stage 03', 'Decorative Build', 'Decorative layers are applied with controlled detail and alignment.'],
        ['Stage 04', 'Final Refinement', 'Edges, touchups, sealers, and visual balance are completed.']
      ]
    },
    'commercial-painting': {
      navLabel: 'Commercial Painting',
      title: 'Commercial Painting',
      description: 'Commercial painting for offices, retail stores, hospitality spaces, showrooms, and occupied facilities.',
      hero: 'Professional commercial painting planned around business hours, durability, and brand presentation.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=75',
      alt: 'Commercial Painting Showcase',
      introTitle: 'Fast, Clean Commercial Coating Programs',
      lead: 'Commercial painting requires dependable scheduling, surface durability, and a finish that supports the customer experience.',
      body: 'We coordinate phases, isolate work zones, use low-odor materials where needed, and keep finishes consistent across high-traffic spaces.',
      estimate: 'Get an accurate commercial painting proposal for your facility.',
      beforeImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&h=667&q=75',
      afterImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&h=667&q=75',
      beforeLabel: 'Before (Raw Concrete Core)',
      afterLabel: 'After (Acoustic Commercial Finish)',
      specs: [
        ['Site Preparation', 'Phased access planning, protection, substrate repair, masking, and low-disruption setup.'],
        ['Coating System', 'Scrubbable acrylics, enamel trims, specialty primers, and high-traffic wall protection.'],
        ['Best Spaces', 'Offices, retail boutiques, restaurants, hotels, clinics, lobbies, and showrooms.'],
        ['Application Method', 'Roller, brush, spray, night-shift phasing, and controlled touchup cycles.'],
        ['Warranty Coverage', '3 to 7 Year Commercial Craftsmanship Guarantee.']
      ],
      stages: [
        ['Stage 01', 'Site Coordination', 'Access, operating hours, protection zones, and finish schedules are aligned.'],
        ['Stage 02', 'Repair & Mask', 'Surfaces and adjacent fixtures are prepared for clean, efficient work.'],
        ['Stage 03', 'Production Coating', 'Teams apply coatings in planned zones to minimize interruption.'],
        ['Stage 04', 'Punch List', 'Final walkthrough, touchups, and cleanup close the project.']
      ]
    },
    'industrial-painting': {
      navLabel: 'Industrial Painting',
      title: 'Industrial Painting',
      description: 'Industrial painting for epoxy floors, anti-corrosive metal coatings, fire-retardant protection, and heavy-duty surfaces.',
      hero: 'High-performance coatings for floors, metalwork, equipment zones, and demanding industrial environments.',
      image: 'images/services/industrial-painting.jpg',
      alt: 'Industrial Painting Showcase',
      introTitle: 'Protective Coatings for Heavy-Duty Performance',
      lead: 'Industrial painting prioritizes adhesion, chemical resistance, abrasion resistance, and long-term asset protection.',
      body: 'We prepare surfaces mechanically where required, specify coating systems by exposure, and apply protective finishes with strict cure timing.',
      estimate: 'Get an accurate industrial painting proposal for your facility.',
      beforeImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&h=667&q=75',
      afterImage: 'images/services/industrial-painting.jpg',
      beforeLabel: 'Before (Uncoated Slab)',
      afterLabel: 'After (Heavy-Duty Epoxy)',
      specs: [
        ['Surface Preparation', 'Degreasing, grinding, abrasion, rust treatment, dust control, and primer bonding.'],
        ['Coating System', 'Epoxy, polyurethane, anti-corrosive metal coating, floor resin, or fire-retardant coating.'],
        ['Best Surfaces', 'Concrete floors, steel structures, machinery zones, warehouses, and service corridors.'],
        ['Application Method', 'Roller, spray, squeegee, broadcast systems, and multi-coat curing schedules.'],
        ['Warranty Coverage', 'Project-specific Industrial Coating Performance Guarantee.']
      ],
      stages: [
        ['Stage 01', 'Exposure Review', 'Traffic, chemicals, moisture, heat, and corrosion risks are assessed.'],
        ['Stage 02', 'Mechanical Prep', 'Surfaces are cleaned, abraded, repaired, and primed for coating adhesion.'],
        ['Stage 03', 'System Application', 'Protective coats are applied to the specified thickness and cure window.'],
        ['Stage 04', 'Inspection & Handover', 'Coverage, curing, safety markings, and service readiness are verified.']
      ]
    }
  };

  const requestedSlug = new URLSearchParams(window.location.search).get('service');
  const slug = Object.hasOwn(services, requestedSlug) ? requestedSlug : 'interior-painting';
  const service = services[slug];

  document.title = `${service.title} - Aura Finishes & Co.`;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.setAttribute('content', service.description);
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', `${service.title} - Aura Finishes & Co.`);
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) ogDescription.setAttribute('content', service.description);

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };

  setText('serviceTitle', service.title);
  setText('serviceHeroText', service.hero);
  setText('serviceIntroTitle', service.introTitle);
  setText('serviceIntroLead', service.lead);
  setText('serviceIntroBody', service.body);
  setText('serviceEstimateText', service.estimate);

  const imageEl = document.getElementById('serviceImage');
  if (imageEl) {
    imageEl.src = service.image;
    imageEl.alt = service.alt;
    imageEl.loading = 'eager';
    imageEl.fetchPriority = 'high';
    imageEl.decoding = 'async';
  }

  const specsEl = document.getElementById('serviceSpecs');
  if (specsEl) {
    specsEl.innerHTML = service.specs.map(([label, value], index) => `
      <tr>
        <th class="bg-surface-soft${index === 0 ? ' w-25' : ''}">${label}</th>
        <td>${value}</td>
      </tr>
    `).join('');
  }

  const stagesEl = document.getElementById('serviceStages');
  if (stagesEl) {
    stagesEl.innerHTML = service.stages.map(([number, title, body]) => `
      <div class="col-md-6">
        <div class="p-4 bg-surface rounded-3 border border-subtle h-100">
          <div class="text-primary fw-bold mb-2">${number} &bull; ${title}</div>
          <p class="text-muted small mb-0">${body}</p>
        </div>
      </div>
    `).join('');
  }

  const navEl = document.getElementById('serviceNavList');
  if (navEl) {
    navEl.innerHTML = Object.entries(services).map(([serviceSlug, item]) => {
      const activeClass = serviceSlug === slug ? 'fw-bold text-primary' : 'text-muted';
      return `<li><a href="service-details.html?service=${serviceSlug}" class="${activeClass}"><i class="bi bi-chevron-right me-1"></i> ${item.navLabel}</a></li>`;
    }).join('');
  }

  // Re-initialize slider bounds if dynamic images loaded
  if (typeof initBeforeAfterSliders === 'function') {
    initBeforeAfterSliders();
  }
}

function initProjectDetailsPage() {
  const hasTargetElements = document.querySelector('.project-title, #projectTitle, .project-main-image, #projectMainImage');
  if (!hasTargetElements) return;

  const params = new URLSearchParams(window.location.search);
  const rawId = (params.get('id') || params.get('project') || '').trim().toLowerCase();

  const ALIAS_MAP = {
    'modern-residence': 'modern-residence',
    'modern-architectural-residence': 'modern-residence',
    'tribeca-monolith-penthouse': 'tribeca-penthouse-suite',
    'tribeca-penthouse': 'tribeca-penthouse-suite',
    'tribeca-penthouse-suite': 'tribeca-penthouse-suite',
    'luxury-villa': 'hamptons-coastal-villa',
    'interior-finish': 'upper-east-side-classic',
    'soho-art-loft': 'soho-art-loft-residence',
    'soho-designer-loft': 'soho-art-loft-residence',
    'soho-art-loft-residence': 'soho-art-loft-residence',
    'laura-restaurant': 'laura-restaurant-lounge',
    'the-standard-atrium': 'standard-atrium-lounge',
    'commercial-atrium': 'standard-atrium-lounge',
    'modern-estate': 'greenwich-modern-estate'
  };

  const projectKey = ALIAS_MAP[rawId] || rawId || 'tribeca-penthouse-suite';
  const project = PROJECTS_DATA[projectKey] || PROJECTS_DATA['tribeca-penthouse-suite'] || Object.values(PROJECTS_DATA)[0];

  if (!project) return;

  // Document metadata
  document.title = `${project.title} Case Study — Aura Finishes & Co.`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', `${project.title}: ${project.description || project.lead}`);
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', `${project.title} Case Study — Aura Finishes & Co.`);
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', project.description || project.lead);

  // Helper updater for text and HTML across ID and class queries
  const setText = (selector, val) => {
    if (val === undefined || val === null) return;
    document.querySelectorAll(selector).forEach(el => {
      el.textContent = val;
    });
  };

  const setHtml = (selector, html) => {
    if (html === undefined || html === null) return;
    document.querySelectorAll(selector).forEach(el => {
      el.innerHTML = html;
    });
  };

  const setImage = (selector, src, alt) => {
    if (!src) return;
    document.querySelectorAll(selector).forEach(img => {
      img.src = src;
      if (alt) img.alt = alt;
      img.loading = 'eager';
      img.fetchPriority = 'high';
      img.onerror = function() {
        if (!this.dataset.fallbackApplied) {
          this.dataset.fallbackApplied = 'true';
          this.src = 'images/projects/modern-residence.jpg';
        }
      };
    });
  };

  // Category pill & title
  setHtml('#projectCategoryPill, .project-details-category, .project-category-pill, .project-category', project.categoryPill || project.category);
  setText('#projectTitle, .project-details-title, .project-title', project.title);

  // Location & meta details (single location, area, duration)
  setText('#projectLocation, .project-location', project.location);
  setText('#projectArea, .project-area', project.area || project.specs?.area || '');
  setText('#projectDuration, .project-duration', project.duration || project.timeline || project.specs?.timeline || '');

  const legacyMeta = document.getElementById('projectLocationAndMeta');
  if (legacyMeta) {
    legacyMeta.innerHTML = `${project.area || project.specs?.area || ''} &bull; ${project.duration || project.specs?.timeline || ''}`;
  }

  // Main Image (matches user specification .project-main-image / #projectMainImage)
  setImage('#projectMainImage, .project-main-image', project.image || project.mainImage, project.title);

  // Description / Vision Section (matches user specification .project-description / #projectVisionLead)
  setText('#projectVisionTitle', project.visionTitle || 'Project Vision & Architectural Context');
  setText('#projectVisionLead, .project-description', project.description || project.lead);
  setText('#projectVisionBody', project.body || '');

  // Before & After Transformation
  setImage('#projectBeforeImage, .project-before-image', project.beforeImage || project.image || project.mainImage, `Before - ${project.title}`);
  setImage('#projectAfterImage, .project-after-image', project.afterImage || project.image || project.mainImage, `After - ${project.title}`);
  setText('#projectBeforeLabel', project.beforeLabel || 'Before');
  setText('#projectAfterLabel', project.afterLabel || 'After');

  // Challenge & Solution
  setText('#projectChallenge', project.challenge || '');
  setText('#projectSolution', project.solution || '');

  // Quote
  setText('#projectQuote', project.quote || '');
  setText('#projectQuoteAuthor', project.quoteAuthor || '');

  // Sidebar Specs
  if (project.specs) {
    setText('#specClient', project.specs.client || 'Private Client');
    setText('#specLocation', project.specs.location || project.location);
    setText('#specArea', project.specs.area || 'N/A');
    setText('#specMaterial', project.specs.material || 'N/A');
    setText('#specColor', project.specs.color || 'N/A');
    setText('#specTimeline', project.specs.timeline || 'N/A');
    setText('#specWarranty', project.specs.warranty || '10-Year Master Certificate');
  }
}

/* ==========================================================================
   4.3 BLOG & JOURNAL DETAILS PAGE CONTENT SWITCHER
   ========================================================================== */
function initBlogDetailsPage() {
  const articleTitleEl = document.getElementById('articleTitle');
  if (!articleTitleEl) return;

  const params = new URLSearchParams(window.location.search);
  const rawSlug = (params.get('article') || params.get('id') || params.get('slug') || '').trim().toLowerCase();

  const ALIAS_MAP = {
    'color-trends': 'color-trends-2026',
    'color-trends-2026': 'color-trends-2026',
    'finishing-techniques': 'venetian-plaster-vs-limewash',
    'venetian-plaster': 'venetian-plaster-vs-limewash',
    'venetian-plaster-vs-limewash': 'venetian-plaster-vs-limewash',
    'maintenance-care': 'exterior-facade-moisture',
    'exterior-facade-moisture': 'exterior-facade-moisture',
    'surface-preparation': 'level-5-skim-coating',
    'level-5-skim-coating': 'level-5-skim-coating',
    'wellness-materials': 'zero-voc-mineral-finishes',
    'zero-voc-mineral-finishes': 'zero-voc-mineral-finishes',
    'commercial-architecture': 'acoustic-mineral-wall-coatings',
    'acoustic-mineral-wall-coatings': 'acoustic-mineral-wall-coatings'
  };

  const articleKey = ALIAS_MAP[rawSlug] || rawSlug || 'color-trends-2026';
  const article = ARTICLES_DATA[articleKey] || ARTICLES_DATA['color-trends-2026'];

  if (!article) return;

  // Document metadata
  document.title = `${article.title} — Aura Finishes & Co.`;
  const metaDesc = document.querySelector('meta[name="description"]') || document.getElementById('metaDescription');
  if (metaDesc) metaDesc.setAttribute('content', article.lead);
  const ogTitle = document.querySelector('meta[property="og:title"]') || document.getElementById('ogTitle');
  if (ogTitle) ogTitle.setAttribute('content', `${article.title} — Aura Finishes`);
  const ogDesc = document.querySelector('meta[property="og:description"]') || document.getElementById('ogDescription');
  if (ogDesc) ogDesc.setAttribute('content', article.lead);

  // Content population
  const setText = (id, val) => {
    const el = document.getElementById(id);
    if (el && val !== undefined && val !== null) el.textContent = val;
  };

  setText('articleCategory', article.category);
  setText('articleTitle', article.title);
  setText('articleDate', article.date);
  setText('articleReadTime', article.readTime);
  setText('articleAuthorName', article.author.name);
  setText('articleAuthorBioName', `About the Author: ${article.author.name}`);
  setText('articleAuthorBioTitle', article.author.title);
  setText('articleAuthorBioText', article.author.bio);

  const heroImg = document.getElementById('articleHeroImage');
  if (heroImg) {
    heroImg.src = article.heroImage;
    heroImg.alt = article.alt || article.title;
  }

  const authorAvatar = document.getElementById('articleAuthorAvatar');
  if (authorAvatar) {
    authorAvatar.src = article.author.avatar;
    authorAvatar.alt = article.author.name;
  }

  const authorBioAvatar = document.getElementById('articleAuthorBioAvatar');
  if (authorBioAvatar) {
    authorBioAvatar.src = article.author.avatar;
    authorBioAvatar.alt = article.author.name;
  }

  const contentEl = document.getElementById('articleContent');
  if (contentEl) {
    contentEl.innerHTML = article.contentHtml;
  }

  // Tags
  const tagsEl = document.getElementById('articleTags');
  if (tagsEl && article.tags) {
    tagsEl.innerHTML = article.tags.map(tag => 
      `<span class="badge bg-surface-soft text-muted border border-subtle">${tag}</span>`
    ).join(' ');
  }

  // Next / Previous Navigation
  const prevCol = document.getElementById('prevArticleCol');
  const prevLink = document.getElementById('prevArticleLink');
  const prevTitle = document.getElementById('prevArticleTitle');
  if (prevLink && prevTitle) {
    if (article.prev) {
      prevLink.href = `blog-details.html?article=${article.prev.slug}`;
      prevTitle.textContent = article.prev.title;
      if (prevCol && prevCol.style) prevCol.style.display = '';
    } else {
      prevLink.href = 'blog.html';
      prevTitle.textContent = 'Back to Journal';
    }
  }

  const nextCol = document.getElementById('nextArticleCol');
  const nextLink = document.getElementById('nextArticleLink');
  const nextTitle = document.getElementById('nextArticleTitle');
  if (nextLink && nextTitle) {
    if (article.next) {
      nextLink.href = `blog-details.html?article=${article.next.slug}`;
      nextTitle.textContent = article.next.title;
      if (nextCol && nextCol.style) nextCol.style.display = '';
    } else {
      nextLink.href = 'blog.html';
      nextTitle.textContent = 'Explore All Articles';
    }
  }
}

/* ==========================================================================
   4.4 ARTICLE LINK PREFETCH
   ========================================================================== */
function initArticleLinkPrefetch() {
  const preloaded = new Set();
  const preload = (event) => {
    const link = event.target.closest('a[href*="blog-details.html"]');
    if (!link) return;
    try {
      const url = new URL(link.href, window.location.href);
      const slug = url.searchParams.get('article') || url.searchParams.get('id') || 'color-trends-2026';
      const article = ARTICLES_DATA[slug];
      if (article && article.heroImage && !preloaded.has(article.heroImage)) {
        preloaded.add(article.heroImage);
        const image = new Image();
        image.src = article.heroImage;
      }
    } catch (e) {}
  };

  document.addEventListener('pointerenter', preload, { capture: true, passive: true });
  document.addEventListener('focusin', preload, { passive: true });
}

/* ==========================================================================
   5. NAVBAR DROPDOWN ZERO-SHIFT INTERACTION
   ========================================================================== */
function initNavbarDropdowns() {
  const dropdownItems = document.querySelectorAll('.main-header .nav-item.dropdown');

  dropdownItems.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdown-menu');
    if (!toggle || !menu) return;

    // Desktop hover support
    dropdown.addEventListener('mouseenter', () => {
      if (window.innerWidth >= 992) {
        dropdown.classList.add('show');
        menu.classList.add('show');
        toggle.setAttribute('aria-expanded', 'true');
      }
    });

    dropdown.addEventListener('mouseleave', () => {
      if (window.innerWidth >= 992) {
        dropdown.classList.remove('show');
        menu.classList.remove('show');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

/* ==========================================================================
   5. BEFORE / AFTER COMPARISON SLIDER (Multi-instance, Drag & Touch)
   ========================================================================== */
function initBeforeAfterSliders() {
  const sliders = document.querySelectorAll('.comparison-slider-container');

  sliders.forEach(slider => {
    const handle = slider.querySelector('.comparison-handle');
    const afterImg = slider.querySelector('.comparison-image-wrapper.after-image');
    if (!handle || !afterImg) return;
    if (slider.dataset.sliderInitialized === 'true') return;
    slider.dataset.sliderInitialized = 'true';

    let isDragging = false;

    const updateSlider = (clientX) => {
      const rect = slider.getBoundingClientRect();
      let offsetX = clientX - rect.left;
      
      // If in RTL mode, calculate from right
      const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
      if (isRTL) {
        offsetX = rect.right - clientX;
      }

      let percentage = (offsetX / rect.width) * 100;
      percentage = Math.max(0, Math.min(100, percentage));

      afterImg.style.width = `${percentage}%`;
      if (isRTL) {
        handle.style.right = `${percentage}%`;
        handle.style.left = 'auto';
      } else {
        handle.style.left = `${percentage}%`;
        handle.style.right = 'auto';
      }
    };

    // Mouse Events
    slider.addEventListener('mousedown', (e) => {
      isDragging = true;
      updateSlider(e.clientX);
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      updateSlider(e.clientX);
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    // Touch Events for Mobile
    slider.addEventListener('touchstart', (e) => {
      isDragging = true;
      if (e.touches.length > 0) updateSlider(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging || e.touches.length === 0) return;
      updateSlider(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchend', () => {
      isDragging = false;
    });
  });
}

/* ==========================================================================
   6. INTERACTIVE ROOM COLOR VISUALIZER
   ========================================================================== */
function initRoomColorVisualizer() {
  const wallLayer = document.querySelector('.visualizer-wall-layer');
  const swatchBtns = document.querySelectorAll('.color-swatch-btn');
  const colorNameDisplay = document.querySelector('.selected-color-name');
  const colorHexDisplay = document.querySelector('.selected-color-hex');

  if (!wallLayer || swatchBtns.length === 0) return;

  swatchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      swatchBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const color = btn.getAttribute('data-color') || '#C35A38';
      const name = btn.getAttribute('data-name') || 'Venetian Terracotta';

      wallLayer.style.backgroundColor = color;

      if (colorNameDisplay) colorNameDisplay.textContent = name;
      if (colorHexDisplay) colorHexDisplay.textContent = color.toUpperCase();
    });
  });
}

/* ==========================================================================
   6.5 DYNAMIC PORTFOLIO GRID RENDERING & HYDRATION
   ========================================================================== */
function initPortfolioGrid() {
  const container = document.querySelector('.filter-container');
  if (!container) return;

  // Render cards dynamically from PORTFOLIO_PROJECTS_LIST
  // Each card maps directly from its project object data:
  // image -> project data -> project ID -> View Details
  container.innerHTML = PORTFOLIO_PROJECTS_LIST.map(project => `
    <div class="col-md-6 col-lg-4 filter-item" data-category="${project.filterCategory}">
      <div class="project-card">
        <img src="${project.image}" alt="${project.title}" loading="lazy" decoding="async">
        <div class="project-card-overlay">
          <span class="project-category-pill">${project.categoryPill}</span>
          <h4 class="project-title">${project.title}</h4>
          <p class="project-location"><i class="bi bi-geo-alt me-1"></i>${project.location}</p>
          <div class="d-flex gap-2 mt-2">
            <a href="project-details.html?id=${project.id}" class="btn btn-sm btn-white">View Details</a>
            <button class="btn btn-sm btn-icon btn-primary image-zoom-btn" data-title="${project.title}" data-image="${project.image}"><i class="bi bi-zoom-in"></i></button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   7. DYNAMIC PORTFOLIO & SERVICE FILTERING
   ========================================================================== */
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const filterItems = document.querySelectorAll('.filter-item');

  if (filterBtns.length === 0 || filterItems.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = (btn.getAttribute('data-filter') || '*').trim().toLowerCase().replace(/^\./, '');

      filterItems.forEach(item => {
        if (filterValue === '*' || filterValue === 'all') {
          item.style.display = '';
          item.style.animation = 'fadeIn 0.2s ease-out forwards';
          return;
        }

        const rawCat = (item.getAttribute('data-category') || '').toLowerCase();
        const tokens = rawCat.split(/[\s,]+/).filter(Boolean);

        // Normalize texture & plaster filter matches
        const isTextureFilter = filterValue === 'texture' || filterValue === 'texture-plaster' || filterValue === 'plaster';
        const hasTextureToken = tokens.includes('texture') || tokens.includes('texture-plaster') || tokens.includes('plaster') || rawCat.includes('texture') || rawCat.includes('plaster');

        const isMatch = (isTextureFilter && hasTextureToken) ||
                        tokens.includes(filterValue) ||
                        rawCat.includes(filterValue) ||
                        item.classList.contains(filterValue);

        if (isMatch) {
          item.style.display = '';
          item.style.animation = 'fadeIn 0.2s ease-out forwards';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   8. FAQ LIVE SEARCH FILTER
   ========================================================================== */
function initFaqLiveSearch() {
  const searchInput = document.getElementById('faqSearchInput');
  const faqItems = document.querySelectorAll('.accordion-item');
  const noResultMsg = document.getElementById('faqNoResults');

  if (!searchInput || faqItems.length === 0) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    let matches = 0;

    faqItems.forEach(item => {
      const headerText = item.querySelector('.accordion-header')?.textContent.toLowerCase() || '';
      const bodyText = item.querySelector('.accordion-body')?.textContent.toLowerCase() || '';

      if (headerText.includes(query) || bodyText.includes(query)) {
        item.style.display = 'block';
        matches++;
        // If searched with text, expand the accordion item
        if (query.length > 2) {
          const collapseEl = item.querySelector('.accordion-collapse');
          const buttonEl = item.querySelector('.accordion-button');
          if (collapseEl && buttonEl) {
            collapseEl.classList.add('show');
            buttonEl.classList.remove('collapsed');
          }
        }
      } else {
        item.style.display = 'none';
      }
    });

    if (noResultMsg) {
      noResultMsg.style.display = matches === 0 ? 'block' : 'none';
    }
  });
}

/* ==========================================================================
   8B. BLOG ARTICLES LIVE KEYWORD SEARCH & TAG FILTER
   ========================================================================== */
function initBlogSearch() {
  const searchInput = document.getElementById('blogSearchInput');
  const searchBtn = document.getElementById('blogSearchBtn');
  const searchClear = document.getElementById('blogSearchClear');
  const resetBtn = document.getElementById('blogResetSearchBtn');
  const countBadge = document.getElementById('blogSearchResultCount');
  const noResults = document.getElementById('blogNoResults');
  const pagination = document.getElementById('blogPagination');
  const blogItems = document.querySelectorAll('.blog-item');
  const categoryLinks = document.querySelectorAll('.blog-category-link');
  const tagLinks = document.querySelectorAll('.blog-tag-link');

  if (!searchInput && blogItems.length === 0) return;

  function performSearch(query) {
    const q = (query || '').toLowerCase().trim();
    let matchCount = 0;

    blogItems.forEach(item => {
      const title = item.querySelector('.blog-card-title')?.textContent.toLowerCase() || '';
      const desc = item.querySelector('.blog-card-desc')?.textContent.toLowerCase() || '';
      const category = item.querySelector('.text-primary')?.textContent.toLowerCase() || '';
      const dataCat = (item.getAttribute('data-category') || '').toLowerCase();
      const dataTags = (item.getAttribute('data-tags') || '').toLowerCase();

      const isMatch = !q || 
                      title.includes(q) || 
                      desc.includes(q) || 
                      category.includes(q) || 
                      dataCat.includes(q) || 
                      dataTags.includes(q);

      if (isMatch) {
        item.style.display = '';
        matchCount++;
      } else {
        item.style.display = 'none';
      }
    });

    if (noResults) {
      noResults.style.display = matchCount === 0 ? 'block' : 'none';
    }

    if (pagination) {
      pagination.style.display = q ? 'none' : '';
    }

    if (searchClear) {
      searchClear.style.display = q ? 'inline-block' : 'none';
    }

    if (countBadge) {
      if (q) {
        countBadge.style.display = 'inline-block';
        countBadge.textContent = `${matchCount} article${matchCount === 1 ? '' : 's'} found`;
      } else {
        countBadge.style.display = 'none';
      }
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      performSearch(e.target.value);
    });

    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        performSearch(searchInput.value);
        const container = document.getElementById('blogArticlesContainer');
        if (container && typeof container.scrollIntoView === 'function') {
          container.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else if (e.key === 'Escape') {
        searchInput.value = '';
        performSearch('');
      }
    });
  }

  if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', () => {
      performSearch(searchInput.value);
      const container = document.getElementById('blogArticlesContainer');
      if (container && typeof container.scrollIntoView === 'function') {
        container.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  const clearHandler = () => {
    if (searchInput) {
      searchInput.value = '';
      performSearch('');
      searchInput.focus();
    }
  };

  if (searchClear) {
    searchClear.addEventListener('click', clearHandler);
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', clearHandler);
  }

  categoryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = link.getAttribute('data-category') || link.textContent.trim();
      if (searchInput) {
        searchInput.value = cat;
        performSearch(cat);
      }
      const container = document.getElementById('blogArticlesContainer');
      if (container && typeof container.scrollIntoView === 'function') {
        container.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  tagLinks.forEach(tag => {
    tag.addEventListener('click', (e) => {
      e.preventDefault();
      const tagText = tag.getAttribute('data-tag') || tag.textContent.replace('#', '').trim();
      if (searchInput) {
        searchInput.value = tagText;
        performSearch(tagText);
      }
      const container = document.getElementById('blogArticlesContainer');
      if (container && typeof container.scrollIntoView === 'function') {
        container.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ==========================================================================
   9. INTERACTIVE QUOTE & COST ESTIMATOR CALCULATOR
   ========================================================================== */
function initQuoteCalculator() {
  const areaInput = document.getElementById('calcSqFt');
  const areaDisplay = document.getElementById('calcSqFtDisplay');
  const serviceSelect = document.getElementById('calcServiceType');
  const tierSelect = document.getElementById('calcFinishTier');
  const conditionSelect = document.getElementById('calcCondition');
  const totalDisplay = document.getElementById('calcTotalEstimate');

  if (!areaInput || !totalDisplay) return;

  // Handle URL package parameter
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const pkg = urlParams.get('package');
    if (pkg && tierSelect) {
      if (pkg.toLowerCase() === 'essential') tierSelect.value = '2.50';
      else if (pkg.toLowerCase() === 'premium') tierSelect.value = '4.20';
      else if (pkg.toLowerCase() === 'signature') tierSelect.value = '6.80';
    }
    const srv = urlParams.get('service');
    if (srv && serviceSelect) {
      if (srv.includes('exterior')) serviceSelect.value = '1.3';
      else if (srv.includes('plaster') || srv.includes('texture')) serviceSelect.value = '1.7';
      else if (srv.includes('waterproof')) serviceSelect.value = '1.4';
      else serviceSelect.value = '1.0';
    }
  } catch (err) {
    // Graceful fallback
  }

  const calculateEstimate = () => {
    const sqft = parseFloat(areaInput.value) || 500;
    if (areaDisplay) areaDisplay.textContent = `${sqft.toLocaleString()} sq.ft.`;

    const serviceMultiplier = parseFloat(serviceSelect?.value || '1.0');
    const tierRate = parseFloat(tierSelect?.value || '3.50'); // baseline price per sq ft
    const conditionMultiplier = parseFloat(conditionSelect?.value || '1.0');

    const lowEstimate = Math.round(sqft * tierRate * serviceMultiplier * conditionMultiplier * 0.9);
    const highEstimate = Math.round(sqft * tierRate * serviceMultiplier * conditionMultiplier * 1.15);

    totalDisplay.textContent = `$${lowEstimate.toLocaleString()} – $${highEstimate.toLocaleString()}`;
  };

  areaInput.addEventListener('input', calculateEstimate);
  if (serviceSelect) serviceSelect.addEventListener('change', calculateEstimate);
  if (tierSelect) tierSelect.addEventListener('change', calculateEstimate);
  if (conditionSelect) conditionSelect.addEventListener('change', calculateEstimate);

  // Initial calculation
  calculateEstimate();
}

/* ==========================================================================
   10. ANIMATED NUMBER COUNTERS (IntersectionObserver)
   ========================================================================== */
function initAnimatedCounters() {
  const counterElements = document.querySelectorAll('.stat-number[data-count]');
  if (counterElements.length === 0) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'), 10);
        const suffix = el.getAttribute('data-suffix') || '+';
        const duration = 700;
        let startTimestamp = null;

        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          const currentCount = Math.floor(progress * target);
          el.textContent = `${currentCount}${suffix}`;
          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
            el.textContent = `${target}${suffix}`;
          }
        };

        window.requestAnimationFrame(step);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.25 });

  counterElements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   10.5 NAVBAR USER AUTHENTICATION STATE MANAGER
   ========================================================================== */

function sanitizeDisplayName(val) {
  if (!val) return 'Client';
  let str = String(val).trim();
  if (str.includes('@')) {
    const localPart = str.split('@')[0];
    str = localPart
      .split(/[._-]/)
      .filter(Boolean)
      .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join(' ');
  }
  return str || 'Client';
}

const DEFAULT_REGISTERED_USERS = {
  'admin@aurafinishes.com': {
    id: 'usr-admin',
    name: 'Admin',
    email: 'admin@aurafinishes.com',
    password: 'admin123',
    role: 'admin',
    status: 'active',
    date: '2025-10-01'
  },
  'eleanor@example.com': {
    id: 'usr-3',
    name: 'Eleanor Vance',
    email: 'eleanor@example.com',
    password: 'client123',
    role: 'user',
    status: 'active',
    date: '2026-02-04'
  },
  'sterling@example.com': {
    id: 'usr-2',
    name: 'Arthur Sterling',
    email: 'sterling@example.com',
    password: 'client123',
    role: 'user',
    status: 'active',
    date: '2026-01-12'
  }
};

function getRegisteredUsersMap() {
  try {
    const raw = localStorage.getItem('aura_registered_users');
    if (!raw) {
      localStorage.setItem('aura_registered_users', JSON.stringify(DEFAULT_REGISTERED_USERS));
      return { ...DEFAULT_REGISTERED_USERS };
    }
    return JSON.parse(raw);
  } catch (e) {
    return { ...DEFAULT_REGISTERED_USERS };
  }
}

function saveRegisteredUser(user) {
  if (!user || !user.email) return false;
  try {
    const map = getRegisteredUsersMap();
    const emailKey = user.email.toLowerCase().trim();

    // Duplicate email check
    if (map[emailKey]) {
      return false;
    }

    const cleanUser = {
      id: user.id || 'usr-' + Date.now(),
      name: sanitizeDisplayName(user.name),
      email: emailKey,
      password: user.password || '',
      role: user.role || 'user',
      phone: user.phone || '',
      date: user.date || new Date().toISOString().split('T')[0],
      status: 'active'
    };

    map[emailKey] = cleanUser;
    localStorage.setItem('aura_registered_users', JSON.stringify(map));

    // Also sync to aura_users array for Admin Dashboard
    try {
      const usersListRaw = localStorage.getItem('aura_users');
      const usersList = usersListRaw ? JSON.parse(usersListRaw) : [];
      if (!usersList.some(u => u.email.toLowerCase() === emailKey)) {
        usersList.push(cleanUser);
        localStorage.setItem('aura_users', JSON.stringify(usersList));
      }
    } catch (e) {}

    return true;
  } catch (e) {
    return false;
  }
}

function getRegisteredUser(emailOrName) {
  if (!emailOrName) return null;
  const key = emailOrName.toLowerCase().trim();
  const map = getRegisteredUsersMap();

  // Match by exact email key
  if (map[key]) return map[key];

  // Match by email field or name field
  for (const k of Object.keys(map)) {
    const u = map[k];
    if (u.email && u.email.toLowerCase() === key) {
      return u;
    }
    if (u.name && u.name.toLowerCase() === key) {
      return u;
    }
  }
  return null;
}

function getAuthUser() {
  try {
    const raw = localStorage.getItem('aura_auth_user');
    if (!raw) return null;
    const user = JSON.parse(raw);
    if (!user || !user.name) return null;
    return {
      id: user.id || '',
      name: sanitizeDisplayName(user.name),
      email: user.email ? user.email.toLowerCase().trim() : '',
      role: user.role || 'user'
    };
  } catch (e) {
    return null;
  }
}

function setAuthUser(user) {
  try {
    if (!user || !user.name) {
      localStorage.removeItem('aura_auth_user');
    } else {
      const cleanUser = {
        id: user.id || '',
        name: sanitizeDisplayName(user.name),
        email: user.email ? user.email.toLowerCase().trim() : '',
        role: user.role || 'user'
      };
      localStorage.setItem('aura_auth_user', JSON.stringify(cleanUser));
    }
  } catch (e) {}
  updateNavbarAuth();
}

function resolveDisplayName(identifier) {
  if (!identifier) return 'Client';
  const trimmed = identifier.trim();
  const regUser = getRegisteredUser(trimmed);
  if (regUser && regUser.name) {
    return sanitizeDisplayName(regUser.name);
  }
  return sanitizeDisplayName(trimmed);
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function logoutUser() {
  try {
    localStorage.removeItem('aura_auth_user');
    localStorage.removeItem('aura_admin_session');
    sessionStorage.clear();
  } catch (e) {}

  document.querySelectorAll('.user-auth-dropdown-menu').forEach(el => el.remove());
  document.querySelectorAll('.user-auth-menu').forEach(el => el.remove());
  document.querySelectorAll('.admin-auth-controls, .admin-nav-item, #navAdminDashboardBtn, #navAdminLogoutBtn, .admin-public-dock').forEach(el => el.remove());

  // Immediately reflect logged-out state in the navbar without requiring a page refresh
  updateNavbarAuth();

  if (typeof showToast === 'function') {
    showToast('Logged out successfully.', 'info');
  }
}

window.logoutUser = logoutUser;

function updateNavbarAuth() {
  const user = getAuthUser();
  const isAuthenticated = user && user.name;

  // Clean up any old mobile nav items or legacy elements
  document.querySelectorAll('.admin-nav-item').forEach(el => el.remove());
  document.querySelectorAll('.admin-public-dock, #navAdminDashboardBtn, .admin-auth-controls').forEach(el => el.remove());

  const headerActionsList = document.querySelectorAll('.header-actions');
  const navbars = document.querySelectorAll('.navbar-nav');

  if (isAuthenticated) {
    const displayName = sanitizeDisplayName(user.name);
    const initials = (displayName.split(' ').map(n => n[0]).join('') || displayName.slice(0, 2)).toUpperCase();

    headerActionsList.forEach(actions => {
      // Remove any duplicate or legacy elements
      actions.querySelectorAll('#navAdminDashboardBtn, .admin-auth-controls, .auth-signup-btn, a[href*="register.html"]').forEach(el => el.remove());

      let userMenu = actions.querySelector('.user-auth-menu');
      if (!userMenu) {
        userMenu = document.createElement('div');
        userMenu.className = 'user-auth-menu dropdown';

        const existingSignIn = actions.querySelector('.auth-signin-btn, .auth-btn, a[href*="signin"], a[href*="login.html"]');
        if (existingSignIn) {
          actions.insertBefore(userMenu, existingSignIn);
          existingSignIn.remove();
        } else {
          actions.appendChild(userMenu);
        }
      } else {
        actions.querySelectorAll('.auth-signin-btn:not(.user-auth-menu .auth-signin-btn), .auth-btn:not(.user-auth-menu .auth-btn)').forEach(el => el.remove());
      }

      userMenu.innerHTML = `
        <button class="btn btn-primary btn-sm auth-btn auth-signin-btn dropdown-toggle" type="button" aria-expanded="false" id="userAuthDropdown" aria-label="User Account Menu">
          <i class="bi bi-person-fill"></i>
          <span class="auth-btn-text">${escapeHtml(displayName)}</span>
        </button>
        <ul class="dropdown-menu dropdown-menu-end border-0 shadow-lg user-auth-dropdown-menu" aria-labelledby="userAuthDropdown">
          <li class="dropdown-header-profile">
            <span class="user-avatar-badge">${escapeHtml(initials)}</span>
            <div class="overflow-hidden">
              <div class="fw-bold text-heading small text-truncate" style="max-width: 140px;">${escapeHtml(displayName)}</div>
              <span class="badge bg-secondary font-monospace" style="font-size: 0.625rem;">CLIENT PORTAL</span>
            </div>
          </li>
          <li>
            <button class="dropdown-item user-logout-btn auth-logout-action text-danger" type="button">
              <i class="bi bi-box-arrow-right"></i>
              <span>Logout</span>
            </button>
          </li>
        </ul>
      `;

      // Attach dropdown toggle and logout handlers
      const btn = userMenu.querySelector('.auth-signin-btn');
      const dropdownMenu = userMenu.querySelector('.user-auth-dropdown-menu');
      if (btn && dropdownMenu) {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          const isOpen = userMenu.classList.contains('show') || dropdownMenu.classList.contains('show');
          document.querySelectorAll('.user-auth-dropdown-menu.show').forEach(el => el.classList.remove('show'));
          document.querySelectorAll('.user-auth-menu.show').forEach(el => el.classList.remove('show'));
          document.querySelectorAll('.auth-signin-btn[aria-expanded="true"]').forEach(el => el.setAttribute('aria-expanded', 'false'));
          if (!isOpen) {
            userMenu.classList.add('show');
            dropdownMenu.classList.add('show');
            btn.setAttribute('aria-expanded', 'true');
          }
        });
      }

      const logoutBtn = userMenu.querySelector('.auth-logout-action');
      if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          logoutUser();
        });
      }
    });

    // Mobile Navbar Items
    navbars.forEach(nav => {
      const logoutLi = document.createElement('li');
      logoutLi.className = 'nav-item d-lg-none admin-nav-item border-top border-subtle mt-2 pt-2';
      logoutLi.innerHTML = `
        <a class="nav-link text-danger fw-semibold" href="#" onclick="logoutUser(); return false;">
          <i class="bi bi-box-arrow-right me-1"></i> Logout (${escapeHtml(displayName)})
        </a>
      `;
      nav.appendChild(logoutLi);
    });

    return;
  }

  // =========================================================================
  // STATE 2: USER LOGGED OUT -> Header button displays "Sign In"
  // =========================================================================
  headerActionsList.forEach(actions => {
    // 1. Remove user dropdown menu and legacy elements
    const userMenu = actions.querySelector('.user-auth-menu');
    if (userMenu) userMenu.remove();
    actions.querySelectorAll('#navAdminDashboardBtn, .admin-auth-controls, a[href*="register.html"], .auth-signup-btn').forEach(el => el.remove());

    // 2. Ensure Sign In button exists with "Sign In" text and primary styling
    let signInLink = actions.querySelector('.auth-signin-btn, .auth-btn, a[href*="signin"], a[href*="login.html"]');
    if (signInLink) {
      signInLink.style.display = '';
      signInLink.classList.remove('d-none', 'dropdown-toggle');
      signInLink.href = 'signin.html';
      signInLink.innerHTML = '<i class="bi bi-person"></i> <span class="auth-btn-text">Sign In</span>';
    } else {
      signInLink = document.createElement('a');
      signInLink.href = 'signin.html';
      signInLink.className = 'btn btn-primary btn-sm auth-btn auth-signin-btn';
      signInLink.innerHTML = '<i class="bi bi-person"></i> <span class="auth-btn-text">Sign In</span>';
      actions.appendChild(signInLink);
    }
  });
}

function initNavbarAuth() {
  updateNavbarAuth();

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.user-auth-menu')) {
      document.querySelectorAll('.user-auth-dropdown-menu.show').forEach(el => el.classList.remove('show'));
      document.querySelectorAll('.user-auth-menu.show').forEach(el => el.classList.remove('show'));
      document.querySelectorAll('.auth-signin-btn[aria-expanded="true"]').forEach(el => el.setAttribute('aria-expanded', 'false'));
    }
  });
}

/* ==========================================================================
   11. FORM VALIDATION & TOAST NOTIFICATION SYSTEM
   ========================================================================== */
function initFormValidationAndToasts() {
  const forms = document.querySelectorAll('form[data-validate="true"]');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');

      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add('is-invalid');
        } else {
          input.classList.remove('is-invalid');
        }

        // Email validation
        if (input.type === 'email' && input.value.trim()) {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(input.value)) {
            isValid = false;
            input.classList.add('is-invalid');
          }
        }
      });

      // Password Confirmation check if present
      const pass = form.querySelector('input[name="password"]');
      const confirmPass = form.querySelector('input[name="confirm_password"]');
      if (pass && confirmPass && pass.value !== confirmPass.value) {
        isValid = false;
        confirmPass.classList.add('is-invalid');
        showToast('Passwords do not match. Please verify.', 'error');
        return;
      }

      if (isValid) {
        const formType = form.getAttribute('data-form-type') || 'Message';

        // 1. Client Registration -> Save registered account & prompt login
        if (formType === 'Client Registration') {
          const nameInput = form.querySelector('input[name="fullName"], input[type="text"]');
          const emailInput = form.querySelector('input[name="email"], input[type="email"]');
          const passInput = form.querySelector('input[name="password"]');
          const phoneInput = form.querySelector('input[name="phone"], input[type="tel"]');

          const enteredName = nameInput && nameInput.value.trim() ? sanitizeDisplayName(nameInput.value.trim()) : 'Client';
          const enteredEmail = emailInput ? emailInput.value.trim().toLowerCase() : '';
          const enteredPass = passInput ? passInput.value.trim() : '';
          const enteredPhone = phoneInput ? phoneInput.value.trim() : '';

          // Check duplicate registration
          const existingUser = getRegisteredUser(enteredEmail);
          if (existingUser) {
            if (emailInput) emailInput.classList.add('is-invalid');
            showToast('An account with this email already exists. Please login.', 'error');
            return;
          }

          const newUser = {
            id: 'usr-' + Date.now(),
            name: enteredName,
            email: enteredEmail,
            password: enteredPass,
            role: 'user',
            phone: enteredPhone,
            date: new Date().toISOString().split('T')[0],
            status: 'active'
          };

          const saved = saveRegisteredUser(newUser);
          if (saved) {
            showToast(`Account created successfully for ${enteredName}! Please sign in.`, 'success');
            form.reset();
            form.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
            setTimeout(() => {
              window.location.href = 'signin.html';
            }, 900);
          } else {
            showToast('An account with this email already exists. Please login.', 'error');
          }
          return;
        }

        // 2. Client Portal Login -> Check Admin or Registered Client
        if (formType === 'Client Portal Login' || formType === 'Sign In') {
          const identifierInput = form.querySelector('input[name="loginIdentifier"], input[type="text"], input[type="email"]');
          const passInput = form.querySelector('input[name="password"]');
          const alertBox = document.getElementById('clientLoginAlert');
          const alertText = document.getElementById('clientLoginAlertText');

          const enteredVal = identifierInput ? identifierInput.value.trim() : '';
          const enteredPass = passInput ? passInput.value.trim() : '';

          // 2a. Demo / Admin login
          if ((enteredVal.toLowerCase() === 'admin@aurafinishes.com' || enteredVal.toLowerCase() === 'admin') && enteredPass === 'admin123') {
            const adminUser = {
              id: 'usr-admin',
              name: 'Admin',
              email: 'admin@aurafinishes.com',
              role: 'user'
            };
            setAuthUser(adminUser);
            if (alertBox) alertBox.classList.add('d-none');
            showToast('Sign in successful! Welcome back.', 'success');
            form.reset();
            form.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
            setTimeout(() => {
              window.location.href = 'index.html';
            }, 700);
            return;
          }

          // 2b. Registered User Lookup
          const user = getRegisteredUser(enteredVal);

          // If NOT registered:
          if (!user) {
            if (identifierInput) identifierInput.classList.add('is-invalid');
            if (alertBox) {
              alertBox.classList.remove('d-none');
              if (alertText) alertText.textContent = 'Account not found. Please register first or check your email.';
            }
            showToast('Account not found. Please register first.', 'error');
            return;
          }

          // If registered, but password does NOT match:
          if (user.password && user.password !== enteredPass) {
            if (passInput) passInput.classList.add('is-invalid');
            if (alertBox) {
              alertBox.classList.remove('d-none');
              if (alertText) alertText.textContent = 'Invalid email or password. Please try again.';
            }
            showToast('Invalid email or password.', 'error');
            return;
          }

          // Normal Client Login
          if (alertBox) alertBox.classList.add('d-none');
          const authSession = {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role || 'user'
          };

          setAuthUser(authSession);
          showToast(`Welcome back, ${user.name}! Sign in successful.`, 'success');
          form.reset();
          form.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
          setTimeout(() => {
            window.location.href = 'index.html';
          }, 700);
          return;
        }

        // 3. Password Reset Request -> Redirect to Sign In (/signin)
        if (formType === 'Password Reset Request') {
          showToast('Password reset link dispatched to your email! Redirecting...', 'success');
          form.reset();
          form.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
          setTimeout(() => {
            window.location.href = 'signin.html';
          }, 1100);
          return;
        }

        // 4. Capture Inquiries into Admin Store
        if (formType.toLowerCase().includes('contact') || formType === 'Contact Inquiry') {
          try {
            const rawMsg = localStorage.getItem('aura_contact_messages');
            const msgList = rawMsg ? JSON.parse(rawMsg) : [];
            const senderName = form.querySelector('input[type="text"]')?.value || 'Website Visitor';
            const senderEmail = form.querySelector('input[type="email"]')?.value || '';
            const senderPhone = form.querySelector('input[type="tel"]')?.value || '';
            const senderSubject = form.querySelector('select')?.value || form.querySelector('input[name="subject"]')?.value || 'General Project Message';
            const senderMessage = form.querySelector('textarea')?.value || '';
            msgList.unshift({
              id: 'msg-' + Date.now(),
              name: senderName,
              email: senderEmail,
              phone: senderPhone,
              subject: senderSubject,
              message: senderMessage,
              date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
              status: 'unread'
            });
            localStorage.setItem('aura_contact_messages', JSON.stringify(msgList));
          } catch (e) {}
        }

        // 5. Capture Quote Requests into Admin Store
        if (formType.toLowerCase().includes('quote') || formType === 'Quote Request' || formType === 'Cost Estimation') {
          try {
            const rawQuotes = localStorage.getItem('aura_quote_requests');
            const quoteList = rawQuotes ? JSON.parse(rawQuotes) : [];
            const customerName = form.querySelector('input[type="text"]')?.value || 'Client';
            const customerEmail = form.querySelector('input[type="email"]')?.value || '';
            const customerPhone = form.querySelector('input[type="tel"]')?.value || '';
            const reqService = form.querySelector('select')?.value || 'Painting & Wall Finishing';
            const reqScope = form.querySelector('input[placeholder*="sq"]')?.value || form.querySelector('input[name="scope"]')?.value || 'Full Residence Scope';
            const reqMsg = form.querySelector('textarea')?.value || 'Online estimation submitted.';
            quoteList.unshift({
              id: 'q-' + Date.now(),
              name: customerName,
              email: customerEmail,
              phone: customerPhone,
              service: reqService,
              scope: reqScope,
              message: reqMsg,
              date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
              status: 'pending'
            });
            localStorage.setItem('aura_quote_requests', JSON.stringify(quoteList));
          } catch (e) {}
        }

        // General Form Submission (Contact, Quote, Newsletter, Consultation)
        showToast(`Thank you! Your ${formType} has been successfully submitted. We will contact you within 24 hours.`, 'success');
        form.reset();
        form.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
      } else {
        showToast('Please check all highlighted fields and complete the form.', 'error');
      }
    });
  });
}

/**
 * Handle social login/registration buttons (Google / Apple ID)
 */
function initSocialAuthButtons() {
  const socialBtns = document.querySelectorAll('.social-auth-btn');
  socialBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const provider = btn.textContent.trim();
      const isGoogle = provider.toLowerCase().includes('google');
      const socialUser = {
        name: isGoogle ? 'Google Client' : 'Apple Client',
        email: isGoogle ? 'client@gmail.com' : 'client@icloud.com'
      };

      saveRegisteredUser(socialUser);
      setAuthUser(socialUser);

      showToast(`Signed in with ${provider}! Welcome, ${socialUser.name}.`, 'success');
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 800);
    });
  });
}

/**
 * Show a floating Toast Notification
 * @param {string} message 
 * @param {'success'|'error'|'info'} type 
 */
function showToast(message, type = 'info') {
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = `custom-toast toast-${type}`;
  
  let iconHtml = '<i class="bi bi-info-circle-fill text-primary fs-5"></i>';
  if (type === 'success') {
    iconHtml = '<i class="bi bi-check-circle-fill text-success fs-5"></i>';
  } else if (type === 'error') {
    iconHtml = '<i class="bi bi-exclamation-triangle-fill text-danger fs-5"></i>';
  }

  toast.innerHTML = `
    ${iconHtml}
    <div class="flex-grow-1">
      <div class="fw-bold mb-1">${type === 'success' ? 'Success' : type === 'error' ? 'Notice' : 'Information'}</div>
      <div class="small text-muted">${message}</div>
    </div>
    <button type="button" class="btn-close btn-sm ms-2" aria-label="Close"></button>
  `;

  const closeBtn = toast.querySelector('.btn-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    });
  }

  toastContainer.appendChild(toast);

  // Auto-remove after 4.5 seconds
  setTimeout(() => {
    if (toast.parentElement) {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(50px)';
      setTimeout(() => toast.remove(), 300);
    }
  }, 4500);
}

/* ==========================================================================
   12. PASSWORD VISIBILITY TOGGLES
   ========================================================================== */
function initPasswordToggles() {
  const toggleButtons = document.querySelectorAll('.password-toggle-btn');

  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetInput = btn.closest('.input-group')?.querySelector('input');
      const icon = btn.querySelector('i');
      if (!targetInput) return;

      if (targetInput.type === 'password') {
        targetInput.type = 'text';
        if (icon) {
          icon.classList.remove('bi-eye');
          icon.classList.add('bi-eye-slash');
        }
      } else {
        targetInput.type = 'password';
        if (icon) {
          icon.classList.remove('bi-eye-slash');
          icon.classList.add('bi-eye');
        }
      }
    });
  });
}

function initComingSoonTimer() {
  const timer = document.getElementById('comingSoonTimer');
  if (!timer) return;
}

/* ==========================================================================
   14. LIVE SOCIAL SYNC ON PUBLIC PAGES
   ========================================================================== */

function initLivePublicSocialLinks() {
  try {
    const raw = localStorage.getItem('aura_social_links');
    if (!raw) return;
    const socials = JSON.parse(raw);
    if (!socials) return;

    document.querySelectorAll('.footer-social-btn, .social-btn, .article-share-btn, .share-btn').forEach(btn => {
      const label = (btn.getAttribute('aria-label') || '').toLowerCase();
      if (label.includes('facebook') && socials.facebook) btn.href = socials.facebook;
      if (label.includes('instagram') && socials.instagram) btn.href = socials.instagram;
      if ((label.includes('twitter') || label.includes('x')) && socials.twitter) btn.href = socials.twitter;
      if (label.includes('linkedin') && socials.linkedin) btn.href = socials.linkedin;
      if (label.includes('youtube') && socials.youtube) btn.href = socials.youtube;
      if (label.includes('pinterest') && socials.pinterest) btn.href = socials.pinterest;
    });
  } catch (e) {}
}


/* ==========================================================================
   14. BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  let backBtn = document.querySelector('.back-to-top-btn');
  if (!backBtn) {
    backBtn = document.createElement('button');
    backBtn.className = 'back-to-top-btn';
    backBtn.setAttribute('aria-label', 'Back to top');
    backBtn.innerHTML = '<i class="bi bi-arrow-up"></i>';
    document.body.appendChild(backBtn);
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      backBtn.classList.add('visible');
    } else {
      backBtn.classList.remove('visible');
    }
  }, { passive: true });

  backBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   15. LIGHTBOX / IMAGE MODAL PREVIEWS
   ========================================================================== */
function initImageModals() {
  const zoomBtns = document.querySelectorAll('.image-zoom-btn');
  if (zoomBtns.length === 0) return;

  zoomBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const imgSrc = btn.getAttribute('data-img-src') || btn.closest('.project-card')?.querySelector('img')?.src;
      const title = btn.getAttribute('data-title') || 'Project Showcase';

      if (!imgSrc) return;

      let modalEl = document.getElementById('imageLightboxModal');
      if (!modalEl) {
        modalEl = document.createElement('div');
        modalEl.id = 'imageLightboxModal';
        modalEl.className = 'modal fade';
        modalEl.tabIndex = -1;
        modalEl.innerHTML = `
          <div class="modal-dialog modal-dialog-centered" style="max-width: 680px;">
            <div class="modal-content bg-dark border-0 shadow-lg" style="border-radius: 16px; overflow: hidden;">
              <div class="modal-header border-0 pb-0 pt-3 px-3">
                <h5 class="modal-title text-white fs-6 fw-semibold" id="lightboxTitle"></h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body text-center p-3">
                <img id="lightboxImg" src="" alt="Zoom" class="img-fluid rounded" style="max-height: 65vh; max-width: 100%; object-fit: contain;">
              </div>
            </div>
          </div>
        `;
        document.body.appendChild(modalEl);
      }

      document.getElementById('lightboxImg').src = imgSrc;
      document.getElementById('lightboxTitle').textContent = title;

      if (window.bootstrap && window.bootstrap.Modal) {
        const modal = new window.bootstrap.Modal(modalEl);
        modal.show();
      }
    });
  });
}

/* ==========================================================================
   16. LEGAL & POLICY MODALS (Privacy Policy & Terms of Service)
   ========================================================================== */
function initLegalModals() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href*="privacy-policy.html"], a[href*="terms-of-service.html"]');
    if (!link) return;

    // Check if middle click or ctrl/cmd click (open in new tab)
    if (e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey) return;

    const currentPath = window.location.pathname.toLowerCase();
    const href = (link.getAttribute('href') || '').toLowerCase();

    // If already on that specific page, allow normal page behavior
    if (currentPath.endsWith(href) || currentPath.endsWith('/' + href)) return;

    e.preventDefault();

    const isPrivacy = href.includes('privacy');
    const modalId = isPrivacy ? 'privacyPolicyModal' : 'termsOfServiceModal';
    let modalEl = document.getElementById(modalId);

    if (!modalEl) {
      modalEl = document.createElement('div');
      modalEl.id = modalId;
      modalEl.className = 'modal fade';
      modalEl.tabIndex = -1;
      modalEl.setAttribute('aria-hidden', 'true');

      if (isPrivacy) {
        modalEl.innerHTML = `
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
            <div class="modal-content bg-surface border border-subtle shadow-lg" style="border-radius: 18px;">
              <div class="modal-header border-bottom border-subtle px-4 py-3">
                <div class="d-flex align-items-center gap-2">
                  <div class="bg-primary-subtle text-primary p-2 rounded-3">
                    <i class="bi bi-shield-lock-fill fs-5"></i>
                  </div>
                  <div>
                    <h5 class="modal-title fw-bold mb-0">Privacy Policy</h5>
                    <span class="text-muted small">Aura Finishes &amp; Co. &bull; Last Updated: August 2026</span>
                  </div>
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body px-4 py-4" style="max-height: 65vh; overflow-y: auto; line-height: 1.7;">
                <h6 class="fw-bold text-heading mb-2">1. Information We Collect</h6>
                <p class="text-muted small mb-3">
                  We collect your contact details (name, email, phone, estate address), project dimensions, architectural plans, and color consultation requests exclusively to provide precision proposals and artisanal finishes.
                </p>

                <h6 class="fw-bold text-heading mb-2">2. How We Utilize Your Information</h6>
                <p class="text-muted small mb-3">
                  Your data is used solely for estimate generation, project scheduling, dustless surface preparation coordination, and issuing 10-year warranty certificates.
                </p>

                <h6 class="fw-bold text-heading mb-2">3. Zero Third-Party Resale &amp; Confidentiality</h6>
                <p class="text-muted small mb-3">
                  Aura Finishes maintains a strict non-disclosure standard. We never monetize, sell, or trade client property records or contact information to data brokers or third parties.
                </p>

                <h6 class="fw-bold text-heading mb-2">4. Data Security Standards</h6>
                <p class="text-muted small mb-3">
                  All digital records and portal accounts are encrypted with industry-standard TLS 1.3 encryption.
                </p>

                <h6 class="fw-bold text-heading mb-2">5. Your Privacy Rights</h6>
                <p class="text-muted small mb-0">
                  You have the right to request a complete copy of your records or petition for permanent deletion at <a href="mailto:privacy@aurafinishes.com" class="text-primary text-decoration-none">privacy@aurafinishes.com</a>.
                </p>
              </div>
              <div class="modal-footer border-top border-subtle px-4 py-3 d-flex justify-content-between">
                <a href="privacy-policy.html" class="btn btn-outline-dark btn-sm">
                  <i class="bi bi-box-arrow-up-right me-1"></i> Open Full Page
                </a>
                <button type="button" class="btn btn-primary btn-sm px-4" data-bs-dismiss="modal">
                  I Understand &amp; Close
                </button>
              </div>
            </div>
          </div>
        `;
      } else {
        modalEl.innerHTML = `
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
            <div class="modal-content bg-surface border border-subtle shadow-lg" style="border-radius: 18px;">
              <div class="modal-header border-bottom border-subtle px-4 py-3">
                <div class="d-flex align-items-center gap-2">
                  <div class="bg-primary-subtle text-primary p-2 rounded-3">
                    <i class="bi bi-file-text-fill fs-5"></i>
                  </div>
                  <div>
                    <h5 class="modal-title fw-bold mb-0">Terms of Service</h5>
                    <span class="text-muted small">Aura Finishes &amp; Co. &bull; Master Contracting SLA</span>
                  </div>
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body px-4 py-4" style="max-height: 65vh; overflow-y: auto; line-height: 1.7;">
                <h6 class="fw-bold text-heading mb-2">1. Scope of Master Services</h6>
                <p class="text-muted small mb-3">
                  Aura Finishes &amp; Co. contracts luxury architectural painting, Italian Venetian plaster, lime wash, and Level-5 surface finishes according to Master Painter Association standards.
                </p>

                <h6 class="fw-bold text-heading mb-2">2. Quote &amp; Estimate Validity</h6>
                <p class="text-muted small mb-3">
                  All official written estimates and digital proposals remain valid for <strong>30 calendar days</strong>. Online instant estimates are subject to on-site substrate verification.
                </p>

                <h6 class="fw-bold text-heading mb-2">3. Craftsmanship Warranty Protection</h6>
                <p class="text-muted small mb-3">
                  We provide a <strong>10-Year Exterior Warranty</strong> and a <strong>5-Year Interior Venetian Plaster Warranty</strong> on all fully prepped surfaces against peeling or blistering.
                </p>

                <h6 class="fw-bold text-heading mb-2">4. Payment &amp; Milestone Schedules</h6>
                <p class="text-muted small mb-3">
                  Standard terms: 25% booking deposit, 35% mid-project surface prep milestone, and 40% final balance upon punch-list walk-through satisfaction.
                </p>

                <h6 class="fw-bold text-heading mb-2">5. Rescheduling Policy</h6>
                <p class="text-muted small mb-0">
                  Projects may be rescheduled up to 5 business days before the project kickoff date with zero penalty fees.
                </p>
              </div>
              <div class="modal-footer border-top border-subtle px-4 py-3 d-flex justify-content-between">
                <a href="terms-of-service.html" class="btn btn-outline-dark btn-sm">
                  <i class="bi bi-box-arrow-up-right me-1"></i> Open Full Page
                </a>
                <button type="button" class="btn btn-primary btn-sm px-4" data-bs-dismiss="modal">
                  Accept &amp; Close
                </button>
              </div>
            </div>
          </div>
        `;
      }
      document.body.appendChild(modalEl);
    }

    if (window.bootstrap && window.bootstrap.Modal) {
      const modal = window.bootstrap.Modal.getOrCreateInstance(modalEl);
      modal.show();
    } else {
      window.location.href = href;
    }
  });
}

