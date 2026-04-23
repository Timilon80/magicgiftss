const STORAGE_KEYS = {
  adminSession: "claudi_admin_session_v1",
  cart: "claudi_cart_v1",
  categoryEvents: "magic_category_events_v1",
  footerSections: "magic_footer_sections_v1",
  products: "claudi_products_v1",
  settings: "claudi_settings_v1",
};

// This editor only changes the current browser storage, so keep it local-only.
const LOCAL_MANAGEMENT_ENABLED = window.location.protocol === "file:"
  || ["localhost", "127.0.0.1", "[::1]", "0.0.0.0"].includes(window.location.hostname);

const CATEGORY_OPTIONS = [
  "DESAYUNOS",
  "ARREGLOS FLORALES",
  "DETALLES",
  "DECORACIONES",
  "FRESAS",
];

const LEGACY_CATEGORY_MAP = {
  FLORES: "ARREGLOS FLORALES",
  GLOBOS: "DECORACIONES",
  DETALLES: "DETALLES",
  FRESAS: "FRESAS",
  REGALOS: "DETALLES",
};

const MAX_EVENT_IMAGES_PER_CATEGORY = 6;
const MAX_FOOTER_GALLERY_IMAGES = 8;

const CATEGORY_THEMES = {
  "DESAYUNOS": {
    accent: "#f59e0b",
    accentSoft: "#fff1d6",
    accentStrong: "#c66a08",
  },
  "ARREGLOS FLORALES": {
    accent: "#d96ab3",
    accentSoft: "#fde5f5",
    accentStrong: "#a13f7f",
  },
  "DETALLES": {
    accent: "#14b8a6",
    accentSoft: "#dffaf6",
    accentStrong: "#0f7f73",
  },
  "DECORACIONES": {
    accent: "#7c5cff",
    accentSoft: "#ebe5ff",
    accentStrong: "#5236c8",
  },
  "FRESAS": {
    accent: "#ef476f",
    accentSoft: "#ffe1e8",
    accentStrong: "#b42348",
  },
};

const DELIVERY_ZONES = [
  { id: "usaquen", name: "Usaquén" },
  { id: "chapinero", name: "Chapinero" },
  { id: "santa_fe", name: "Santa Fe" },
  { id: "san_cristobal", name: "San Cristóbal" },
  { id: "usme", name: "Usme" },
  { id: "tunjuelito", name: "Tunjuelito" },
  { id: "bosa", name: "Bosa" },
  { id: "kennedy", name: "Kennedy" },
  { id: "fontibon", name: "Fontibón" },
  { id: "engativa", name: "Engativá" },
  { id: "suba", name: "Suba" },
  { id: "barrios_unidos", name: "Barrios Unidos" },
  { id: "teusaquillo", name: "Teusaquillo" },
  { id: "los_martires", name: "Los Mártires" },
  { id: "antonio_narino", name: "Antonio Nariño" },
  { id: "puente_aranda", name: "Puente Aranda" },
  { id: "la_candelaria", name: "La Candelaria" },
  { id: "rafael_uribe_uribe", name: "Rafael Uribe Uribe" },
  { id: "ciudad_bolivar", name: "Ciudad Bolívar" },
  { id: "sumapaz", name: "Sumapaz" },
  { id: "sabana", name: "Sabana" },
];

const MIN_ORDER_ADVANCE_HOURS = 24;
const DEFAULT_BRAND_LOGO = "./LOGO.png";
const TEMP_PRODUCT_PRICE_MIN = 10000;
const TEMP_PRODUCT_PRICE_MAX = 100000;
const TEMP_PRODUCT_PRICE_STEP = 1000;

const defaultDeliveryFees = {
  usaquen: 14000,
  chapinero: 12000,
  santa_fe: 12000,
  san_cristobal: 15000,
  usme: 17000,
  tunjuelito: 14000,
  bosa: 16000,
  kennedy: 15000,
  fontibon: 15000,
  engativa: 14000,
  suba: 15000,
  barrios_unidos: 12000,
  teusaquillo: 12000,
  los_martires: 12000,
  antonio_narino: 13000,
  puente_aranda: 13000,
  la_candelaria: 13000,
  rafael_uribe_uribe: 15000,
  ciudad_bolivar: 18000,
  sumapaz: 30000,
  sabana: 26000,
};

const defaultSettings = {
  brandLogo: DEFAULT_BRAND_LOGO,
  soundMode: "soft",
  storeName: "MAGIC GIFTSS",
  storePitch: "Regalos y detalles listos para sorprender.",
  whatsappNumber: "573132670192",
  deliveryFees: { ...defaultDeliveryFees },
};

const DEFAULT_ABOUT_TEXT = [
  "VALORES CORPORATIVOS",
  "",
  "1. Responsabilidad",
  "Cumplimos con cada pedido de manera seria y comprometida, garantizando que nuestros clientes reciban exactamente lo que solicitaron, en el tiempo acordado y con la calidad esperada.",
  "",
  "2. Puntualidad",
  "La entrega oportuna es uno de nuestros pilares. Entendemos la importancia de cada evento y ocasión, por lo que aseguramos tiempos de entrega precisos y confiables.",
  "",
  "3. Calidad",
  "Trabajamos con materiales frescos y seleccionados, cuidando cada detalle en arreglos florales, decoraciones y dulcería para ofrecer productos visualmente atractivos y duraderos.",
  "",
  "4. Creatividad",
  "Diseñamos propuestas únicas y personalizadas que se adaptan a cada cliente, innovando constantemente en estilos, colores y tendencias decorativas.",
  "",
  "5. Compromiso con el cliente",
  "Escuchamos y entendemos las necesidades de nuestros clientes, brindando asesoría cercana para lograr resultados que superen sus expectativas.",
  "",
  "6. Experiencia",
  "Contamos con más de 10 años en el sector, lo que respalda nuestro conocimiento, técnica y capacidad para manejar diferentes tipos de eventos y pedidos.",
  "",
  "OBJETIVOS EMPRESARIALES",
  "",
  "Objetivo General",
  "Brindar soluciones creativas y de alta calidad en arreglos florales, decoración de eventos y dulcería de regalo, destacándonos por nuestro cumplimiento, puntualidad y atención personalizada.",
].join("\n");

const DEFAULT_CONTACTS_TEXT = [
  "WhatsApp: +57 313 267 0192",
  "Instagram: @detalles_para_cada_momento",
].join("\n");
const DEFAULT_FAQ_TEXT = "Agrega aquí las preguntas frecuentes de tus clientes y sus respuestas.";
const DEFAULT_POLICIES_TEXT = "Agrega aquí las políticas de pedidos, pagos, entregas y cambios.";

const FOOTER_SECTION_CONFIG = {
  about: {
    title: "Nosotros",
    image: "./NOSOTROS.jpg",
  },
  contacts: {
    title: "Contactos",
    image: "./CONTACTOS.jpg",
  },
  faq: {
    title: "Preguntas frecuentes",
    image: "./PREGUNTAS%20FRECUENTES.jpg",
  },
  policies: {
    title: "Nuestra política",
    image: "./NUESTRA%20POLITICA.jpg",
  },
  gallery: {
    title: "Galería",
    image: "./GALERIA.jpg",
  },
};

const POINTER_PARTICLE_SYMBOLS = ["✿", "❀", "❁", "❃", "◉", "◌", "🎈"];
const POINTER_PARTICLE_COLORS = ["#ff5fa2", "#b997ee", "#d96ab3", "#7c5cff", "#6edaa0", "#ffd166"];
const MENU_RAIN_SYMBOLS = ["✿", "❀", "❁", "✽", "✦", "✧", "❤"];
const INTRO_TOTAL_DURATION = 4000;
const INTRO_EXIT_DURATION = 700;
const INTRO_SLIDES = [
  buildCatalogImagePath("DECORACIONES", "detalles_para_cada_momento_1707316943_3297535982990773723_7154471535.jpg"),
  buildCatalogImagePath("DECORACIONES", "detalles_para_cada_momento_1710864028_3327291092155138888_7154471535.jpg"),
  buildCatalogImagePath("ARREGLOS FLORALES", "detalles_para_cada_momento_1707289497_3297305751738442059_7154471535.jpg"),
  buildCatalogImagePath("DECORACIONES", "detalles_para_cada_momento_1711504047_3332659960565872681_7154471535.jpg"),
  buildCatalogImagePath("ARREGLOS FLORALES", "detalles_para_cada_momento_1707316438_3297531748454793130_7154471535.jpg"),
  buildCatalogImagePath("DECORACIONES", "detalles_para_cada_momento_1720329473_3406692994100922844_7154471535.jpg"),
  buildCatalogImagePath("ARREGLOS FLORALES", "detalles_para_cada_momento_1708905290_3310860003198394947_7154471535.jpg"),
];

function getFooterSectionConfig(section) {
  return FOOTER_SECTION_CONFIG[section] || {
    title: "Información",
    image: "",
  };
}

function createDefaultFooterSections() {
  return {
    about: DEFAULT_ABOUT_TEXT,
    contacts: DEFAULT_CONTACTS_TEXT,
    faq: DEFAULT_FAQ_TEXT,
    policies: DEFAULT_POLICIES_TEXT,
    gallery: [],
  };
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const replacements = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return replacements[character];
  });
}

const PRODUCT_BASE_NAMES = {
  "DESAYUNOS": "Desayuno",
  "ARREGLOS FLORALES": "Arreglo floral",
  "DETALLES": "Detalle",
  "DECORACIONES": "Decoracion",
  "FRESAS": "Fresas",
};

const LEGACY_DEMO_PRODUCT_IDS = new Set([
  "seed-desayuno-sorpresa",
  "seed-arreglo-romance",
  "seed-detalle-dulce",
  "seed-decoracion-celebracion",
  "seed-fresas-premium",
]);

const CATALOG_IMAGE_FILES = {
  "DESAYUNOS": [
    "detalles_para_cada_momento_1706841145_3293544697555956853_7154471535.webp",
    "detalles_para_cada_momento_1709931836_3319471293836445076_7154471535.jpg",
    "detalles_para_cada_momento_1709931836_3319471293886843968_7154471535.jpg",
    "detalles_para_cada_momento_1711504047_3332659960817394482_7154471535.jpg",
    "detalles_para_cada_momento_1715692377_3367794213523688906_7154471535.jpg",
    "detalles_para_cada_momento_1715693797_3367806129356838768_7154471535.jpg",
    "detalles_para_cada_momento_1718721226_3393202040509958684_7154471535.jpg",
    "detalles_para_cada_momento_1740493517_3575841257856468193_7154471535.jpg",
  ],
  "ARREGLOS FLORALES": [
    "detalles_para_cada_momento_1708905290_3310860003198394947_7154471535.jpg",
    "detalles_para_cada_momento_1707289497_3297305751738442059_7154471535.jpg",
    "detalles_para_cada_momento_1707316438_3297531748454793130_7154471535.jpg",
    "detalles_para_cada_momento_1732546504_3509176883083782808_7154471535.jpg",
    "detalles_para_cada_momento_1718721377_3393203307634483095_7154471535.jpg",
    "detalles_para_cada_momento_1733588440_3517917275891556299_7154471535.jpg",
  ],
  "DETALLES": [
    "detalles_para_cada_momento_1706841145_3293544697556053001_7154471535.webp",
    "detalles_para_cada_momento_1710865024_3327299444960565892_7154471535.jpg",
    "detalles_para_cada_momento_1715692377_3367794213297298304_7154471535.jpg",
    "detalles_para_cada_momento_1733588030_3517913836696593132_7154471535.jpg",
  ],
  "DECORACIONES": [
    "detalles_para_cada_momento_1707316943_3297535982990773723_7154471535.jpg",
    "detalles_para_cada_momento_1710864028_3327291092155138888_7154471535.jpg",
    "detalles_para_cada_momento_1711504047_3332659960565872681_7154471535.jpg",
    "detalles_para_cada_momento_1721618997_3417510304537539880_7154471535.jpg",
    "detalles_para_cada_momento_1720329473_3406692994528757947_7154471535.jpg",
    "detalles_para_cada_momento_1720329473_3406692994100922844_7154471535.jpg",
    "detalles_para_cada_momento_1740494375_3575848454846070713_7154471535.jpg",
  ],
  "FRESAS": [
    "detalles_para_cada_momento_1698116051_3220353306726530938_7154471535.webp",
    "detalles_para_cada_momento_1698116051_3220353306726708153_7154471535.webp",
    "detalles_para_cada_momento_1698116051_3220353306718342479_7154471535.webp",
    "detalles_para_cada_momento_1698116051_3220353306726536854_7154471535.webp",
    "detalles_para_cada_momento_1698116309_3220355469259537254_7154471535.webp",
    "detalles_para_cada_momento_1698116051_3220353306726725002_7154471535.webp",
    "detalles_para_cada_momento_1698116309_3220355469259333405_7154471535.webp",
    "detalles_para_cada_momento_1698116051_3220353306944655978_7154471535.webp",
    "detalles_para_cada_momento_1698116309_3220355469259431641_7154471535.webp",
    "detalles_para_cada_momento_1698116309_3220355469251043254_7154471535.webp",
    "detalles_para_cada_momento_1698116309_3220355469259418142_7154471535.webp",
    "detalles_para_cada_momento_1709083606_3312355826205953563_7154471535.jpg",
    "detalles_para_cada_momento_1709083395_3312354053885977206_7154471535.jpg",
    "detalles_para_cada_momento_1713881413_3352602751610248057_7154471535.jpg",
    "detalles_para_cada_momento_1712867199_3344094901888006766_7154471535.jpg",
    "detalles_para_cada_momento_1712867199_3344094901896411745_7154471535.jpg",
    "detalles_para_cada_momento_1712839740_3343864559193105723_7154471535.jpg",
    "detalles_para_cada_momento_1712839740_3343864559277095949_7154471535.jpg",
    "detalles_para_cada_momento_1712839740_3343864559201524732_7154471535.jpg",
    "detalles_para_cada_momento_1711503895_3332658681923805857_7154471535.jpg",
    "detalles_para_cada_momento_1711503895_3332658681932207425_7154471535.jpg",
    "detalles_para_cada_momento_1715692768_3367797491179392255_7154471535.jpg",
    "detalles_para_cada_momento_1715693616_3367804609945097724_7154471535.jpg",
    "detalles_para_cada_momento_1715694255_3367809971834312644_7154471535.jpg",
    "detalles_para_cada_momento_1730915379_3495494009198393180_7154471535.jpg",
    "detalles_para_cada_momento_1740493517_3575841257864961401_7154471535.jpg",
  ],
};

function buildCatalogImagePath(category, fileName) {
  return `./${encodeURIComponent(category)}/${encodeURIComponent(fileName)}`;
}

function createSeedProducts() {
  return CATEGORY_OPTIONS.reduce((products, category) => {
    const files = CATALOG_IMAGE_FILES[category] || [];
    const baseName = PRODUCT_BASE_NAMES[category] || "Producto";
    const categoryId = category.toLowerCase().replace(/\s+/g, "-");

    return products.concat(files.map((fileName, index) => {
      const id = `seed-${categoryId}-${index + 1}`;

      return {
        id,
        name: `${baseName} ${index + 1}`,
        category,
        price: getTemporaryProductPrice(id),
        description: "",
        image: buildCatalogImagePath(category, fileName),
      };
    }));
  }, []);
}

const seedProducts = createSeedProducts();

function createEmptyCategoryEvents() {
  return CATEGORY_OPTIONS.reduce((events, category) => {
    events[category] = [];
    return events;
  }, {});
}

function normalizeCategory(value) {
  const normalizedValue = String(value || "").trim();
  if (CATEGORY_OPTIONS.includes(normalizedValue)) {
    return normalizedValue;
  }

  return LEGACY_CATEGORY_MAP[normalizedValue.toUpperCase()] || CATEGORY_OPTIONS[0];
}

function getCategoryTheme(category) {
  return CATEGORY_THEMES[normalizeCategory(category)] || {
    accent: "#b997ee",
    accentSoft: "#f0e6ff",
    accentStrong: "#7e57c2",
  };
}

function buildCategoryThemeStyle(category) {
  const theme = getCategoryTheme(category);
  return `--category-accent:${theme.accent};--category-accent-soft:${theme.accentSoft};--category-accent-strong:${theme.accentStrong};`;
}

function getTemporaryProductPrice(seedValue) {
  const seed = String(seedValue || "magicgiftss");
  let hash = 0;

  for (let index = 0; index < seed.length; index += 1) {
    hash = ((hash * 31) + seed.charCodeAt(index)) | 0;
  }

  const stepCount = Math.floor((TEMP_PRODUCT_PRICE_MAX - TEMP_PRODUCT_PRICE_MIN) / TEMP_PRODUCT_PRICE_STEP) + 1;
  return TEMP_PRODUCT_PRICE_MIN + (Math.abs(hash) % stepCount) * TEMP_PRODUCT_PRICE_STEP;
}

function getCompactTextClass(value, mediumLength = 16, longLength = 24) {
  const length = String(value || "").trim().length;
  if (length >= longLength) {
    return " text-compact-long";
  }

  if (length >= mediumLength) {
    return " text-compact-medium";
  }

  return "";
}

function readStorage(key, fallback) {
  try {
    const rawValue = localStorage.getItem(key);
    if (!rawValue) {
      return fallback;
    }

    const parsedValue = JSON.parse(rawValue);
    return parsedValue ?? fallback;
  } catch (error) {
    console.error(`No se pudo leer ${key}.`, error);
    return fallback;
  }
}

function persistStorage(key, value, message) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`No se pudo guardar ${key}.`, error);
    showToast(message);
    return false;
  }
}

function normalizeDeliveryFees(value) {
  const source = typeof value === "object" && value ? value : {};

  return DELIVERY_ZONES.reduce((fees, zone) => {
    const fee = Number(source[zone.id]);
    fees[zone.id] = Number.isFinite(fee) && fee >= 0 ? Math.round(fee) : defaultDeliveryFees[zone.id];
    return fees;
  }, {});
}

function readFooterTextSection(source, key, fallback) {
  return Object.prototype.hasOwnProperty.call(source, key)
    ? String(source[key] ?? "")
    : fallback;
}

function normalizeFooterSections(value) {
  const source = typeof value === "object" && value ? value : {};
  const defaults = createDefaultFooterSections();

  return {
    about: readFooterTextSection(source, "about", defaults.about),
    contacts: readFooterTextSection(source, "contacts", defaults.contacts),
    faq: readFooterTextSection(source, "faq", defaults.faq),
    policies: readFooterTextSection(source, "policies", defaults.policies),
    gallery: Array.isArray(source.gallery)
      ? source.gallery
        .filter((image) => typeof image === "string" && image)
        .slice(0, MAX_FOOTER_GALLERY_IMAGES)
      : [...defaults.gallery],
  };
}

function cloneSeedProducts() {
  return seedProducts.map((product) => ({ ...product }));
}

function normalizeProduct(product, index) {
  if (typeof product !== "object" || !product) {
    return null;
  }

  const category = normalizeCategory(product.category);
  const baseName = PRODUCT_BASE_NAMES[category] || "Producto";
  const rawPrice = Number(product.price);
  const image = String(product.image || "").trim();
  const fallbackId = typeof product.id === "string" && product.id ? product.id : `product-${category.toLowerCase().replace(/\s+/g, "-")}-${index + 1}`;
  const fallbackName = String(product.name || "").trim() || `${baseName} ${index + 1}`;
  const fallbackPrice = getTemporaryProductPrice(`${fallbackId}:${fallbackName}:${category}`);

  if (!image) {
    return null;
  }

  return {
    id: fallbackId,
    name: fallbackName,
    category,
    price: Number.isFinite(rawPrice) && rawPrice > 0 ? Math.round(rawPrice) : fallbackPrice,
    description: String(product.description || "").trim(),
    image,
  };
}

function isLegacyDemoCatalog(products) {
  return products.length === LEGACY_DEMO_PRODUCT_IDS.size
    && products.every((product) => (
      product
      && LEGACY_DEMO_PRODUCT_IDS.has(String(product.id || ""))
      && typeof product.image === "string"
      && product.image.startsWith("data:image/svg+xml")
    ));
}

function loadSettings() {
  const value = readStorage(STORAGE_KEYS.settings, defaultSettings);
  const baseValue = typeof value === "object" && value ? value : {};
  const nextBrandLogo = String(baseValue.brandLogo || "").trim();
  const nextStoreName = String(baseValue.storeName || "").trim();
  const nextStorePitch = String(baseValue.storePitch || "").trim();
  const nextWhatsappNumber = normalizeWhatsappNumber(baseValue.whatsappNumber);

  return {
    ...defaultSettings,
    ...baseValue,
    brandLogo: nextBrandLogo || defaultSettings.brandLogo,
    storeName: !nextStoreName || nextStoreName === "Claudi Flores" ? defaultSettings.storeName : nextStoreName,
    storePitch: !nextStorePitch || nextStorePitch === "Arreglos, globos y detalles listos para sorprender." ? defaultSettings.storePitch : nextStorePitch,
    whatsappNumber: nextWhatsappNumber || defaultSettings.whatsappNumber,
    deliveryFees: normalizeDeliveryFees(baseValue.deliveryFees),
  };
}

function loadFooterSections() {
  return normalizeFooterSections(readStorage(STORAGE_KEYS.footerSections, createDefaultFooterSections()));
}

function loadProducts() {
  const storedProducts = readStorage(STORAGE_KEYS.products, null);
  if (!Array.isArray(storedProducts) || !storedProducts.length || isLegacyDemoCatalog(storedProducts)) {
    return cloneSeedProducts();
  }

  const normalizedProducts = storedProducts
    .map((product, index) => normalizeProduct(product, index))
    .filter(Boolean);

  return normalizedProducts.length ? normalizedProducts : cloneSeedProducts();
}

function loadCategoryEvents() {
  const storedEvents = readStorage(STORAGE_KEYS.categoryEvents, null);
  const baseEvents = createEmptyCategoryEvents();

  if (typeof storedEvents !== "object" || !storedEvents) {
    return baseEvents;
  }

  return CATEGORY_OPTIONS.reduce((events, category) => {
    const items = Array.isArray(storedEvents[category]) ? storedEvents[category] : [];
    events[category] = items
      .filter((image) => typeof image === "string" && image)
      .slice(0, MAX_EVENT_IMAGES_PER_CATEGORY);
    return events;
  }, baseEvents);
}

function loadCart() {
  const storedCart = readStorage(STORAGE_KEYS.cart, []);
  if (!Array.isArray(storedCart)) {
    return [];
  }

  return storedCart.filter((item) => (
    item
    && typeof item.productId === "string"
    && Number.isInteger(item.quantity)
    && item.quantity > 0
  ));
}

const state = {
  activeCategory: CATEGORY_OPTIONS[0],
  adminAuthenticated: LOCAL_MANAGEMENT_ENABLED && sessionStorage.getItem(STORAGE_KEYS.adminSession) === "1",
  categoryEvents: loadCategoryEvents(),
  cart: loadCart(),
  deferredPrompt: null,
  editingProductId: null,
  footerModalSection: "about",
  footerSections: loadFooterSections(),
  pendingImage: "",
  pendingEventCategory: CATEGORY_OPTIONS[0],
  pendingEventImage: "",
  pendingFooterGalleryImage: "",
  pendingStoreLogo: "",
  products: loadProducts(),
  settings: loadSettings(),
};

const refs = {
  adminLoginForm: document.getElementById("adminLoginForm"),
  adminLoginOverlay: document.getElementById("adminLoginOverlay"),
  adminLogoutButton: document.getElementById("adminLogoutButton"),
  adminOverlay: document.getElementById("adminOverlay"),
  adminProductList: document.getElementById("adminProductList"),
  brandImages: Array.from(document.querySelectorAll("[data-brand-image]")),
  brandMark: document.getElementById("brandMark"),
  categoryEventsForm: document.getElementById("categoryEventsForm"),
  categoryEventCategory: document.getElementById("categoryEventCategory"),
  categoryEventImage: document.getElementById("categoryEventImage"),
  categoryEventList: document.getElementById("categoryEventList"),
  categoryEventPreview: document.getElementById("categoryEventPreview"),
  cancelEditButton: document.getElementById("cancelEditButton"),
  cartCount: document.getElementById("cartCount"),
  cartDeliveryFee: document.getElementById("cartDeliveryFee"),
  cartDeliveryLabel: document.getElementById("cartDeliveryLabel"),
  cartItems: document.getElementById("cartItems"),
  cartOpenButton: document.getElementById("cartOpenButton"),
  cartOverlay: document.getElementById("cartOverlay"),
  cartSubtotal: document.getElementById("cartSubtotal"),
  cartTotal: document.getElementById("cartTotal"),
  categoryFilters: document.getElementById("categoryFilters"),
  checkoutForm: document.getElementById("checkoutForm"),
  clearCartButton: document.getElementById("clearCartButton"),
  customerDeliveryDateTime: document.getElementById("customerDeliveryDateTime"),
  customerLocality: document.getElementById("customerLocality"),
  deliveryFeesGrid: document.getElementById("deliveryFeesGrid"),
  footerAboutInput: document.getElementById("footerAbout"),
  footerContactsInput: document.getElementById("footerContacts"),
  footerEditorPanel: document.getElementById("footerEditorPanel"),
  footerFaqInput: document.getElementById("footerFaq"),
  footerInfoOverlay: document.getElementById("footerInfoOverlay"),
  footerInfoSheet: document.getElementById("footerInfoSheet"),
  footerModalContent: document.getElementById("footerModalContent"),
  footerModalTitle: document.getElementById("footerModalTitle"),
  footerPoliciesInput: document.getElementById("footerPolicies"),
  footerSectionsForm: document.getElementById("footerSectionsForm"),
  footerGalleryAdminList: document.getElementById("footerGalleryAdminList"),
  footerGalleryImageInput: document.getElementById("footerGalleryImage"),
  footerGalleryPreview: document.getElementById("footerGalleryPreview"),
  facebookSocialButton: document.getElementById("facebookSocialButton"),
  floatingCartButton: document.getElementById("floatingCartButton"),
  floatingCartLabel: document.getElementById("floatingCartLabel"),
  floatingCartTotal: document.getElementById("floatingCartTotal"),
  heroDescription: document.getElementById("heroDescription"),
  heroTitle: document.getElementById("heroTitle"),
  imagePreview: document.getElementById("imagePreview"),
  introOverlay: document.getElementById("introOverlay"),
  introSlides: Array.from(document.querySelectorAll(".intro-slide")),
  skipIntroButton: document.getElementById("skipIntroButton"),
  installButton: document.getElementById("installButton"),
  menuStageNext: document.getElementById("menuStageNext"),
  menuStagePrev: document.getElementById("menuStagePrev"),
  menuStageViewport: document.getElementById("menuStageViewport"),
  productForm: document.getElementById("productForm"),
  productFormTitle: document.getElementById("productFormTitle"),
  productGrid: document.getElementById("productGrid"),
  productImageInput: document.getElementById("productImage"),
  pointerTrailLayer: document.getElementById("pointerTrailLayer"),
  resetStoreButton: document.getElementById("resetStoreButton"),
  secretTrigger: document.getElementById("secretTrigger"),
  sendOrderButton: document.getElementById("sendOrderButton"),
  orderDateHelper: document.getElementById("orderDateHelper"),
  siteFooter: document.querySelector(".site-footer"),
  soundModeInput: document.getElementById("soundMode"),
  settingsForm: document.getElementById("settingsForm"),
  storeLogoInput: document.getElementById("storeLogo"),
  storeLogoPreview: document.getElementById("storeLogoPreview"),
  storeNameInput: document.getElementById("storeName"),
  storeNameView: document.getElementById("storeNameView"),
  storePitchInput: document.getElementById("storePitch"),
  storePitchView: document.getElementById("storePitchView"),
  toast: document.getElementById("toast"),
  whatsappNumberInput: document.getElementById("whatsappNumber"),
};

let toastTimeout = null;
let introStartTimeout = null;
let introEndTimeout = null;
let menuStageTouchStartX = 0;
let menuStageTouchStartY = 0;
let menuStageTouchTracking = false;
let audioContext = null;
let lastPointerParticleTime = 0;
let activeRainTarget = null;
let rainSpawnTimer = null;

function getAudioContext() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) {
    return null;
  }

  if (!audioContext) {
    audioContext = new AudioContextClass();
  }

  if (audioContext.state === "suspended") {
    audioContext.resume().catch(() => {});
  }

  return audioContext;
}

function playTone({ frequency, duration, type = "sine", gain = 0.03, delay = 0 }) {
  if (state.settings.soundMode === "off") {
    return;
  }

  const context = getAudioContext();
  if (!context) {
    return;
  }

  const oscillator = context.createOscillator();
  const gainNode = context.createGain();
  const startTime = context.currentTime + delay;
  const endTime = startTime + duration;

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, startTime);
  gainNode.gain.setValueAtTime(0.0001, startTime);
  gainNode.gain.exponentialRampToValueAtTime(gain, startTime + 0.02);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, endTime);

  oscillator.connect(gainNode);
  gainNode.connect(context.destination);
  oscillator.start(startTime);
  oscillator.stop(endTime + 0.02);
}

function playCartSound() {
  if (state.settings.soundMode === "festive") {
    playTone({ frequency: 659.25, duration: 0.08, type: "triangle", gain: 0.024 });
    playTone({ frequency: 783.99, duration: 0.1, type: "sine", gain: 0.022, delay: 0.05 });
    playTone({ frequency: 987.77, duration: 0.12, type: "triangle", gain: 0.02, delay: 0.11 });
    return;
  }

  playTone({ frequency: 587.33, duration: 0.12, type: "triangle", gain: 0.022 });
  playTone({ frequency: 783.99, duration: 0.16, type: "sine", gain: 0.018, delay: 0.07 });
}

function playOrderSuccessSound() {
  if (state.settings.soundMode === "festive") {
    playTone({ frequency: 523.25, duration: 0.1, type: "triangle", gain: 0.026 });
    playTone({ frequency: 659.25, duration: 0.12, type: "triangle", gain: 0.026, delay: 0.06 });
    playTone({ frequency: 783.99, duration: 0.14, type: "sine", gain: 0.028, delay: 0.12 });
    playTone({ frequency: 1046.5, duration: 0.18, type: "triangle", gain: 0.026, delay: 0.18 });
    return;
  }

  playTone({ frequency: 523.25, duration: 0.14, type: "sine", gain: 0.024 });
  playTone({ frequency: 659.25, duration: 0.16, type: "triangle", gain: 0.024, delay: 0.08 });
  playTone({ frequency: 783.99, duration: 0.2, type: "sine", gain: 0.026, delay: 0.16 });
}

function hideIntroOverlay(immediate = false) {
  if (!refs.introOverlay || refs.introOverlay.hidden) {
    return;
  }

  window.clearTimeout(introStartTimeout);
  window.clearTimeout(introEndTimeout);

  if (immediate) {
    document.body.classList.remove("show-intro", "intro-leaving");
    refs.introOverlay.hidden = true;
    return;
  }

  document.body.classList.add("intro-leaving");
  introEndTimeout = window.setTimeout(() => {
    document.body.classList.remove("show-intro", "intro-leaving");
    refs.introOverlay.hidden = true;
  }, INTRO_EXIT_DURATION);
}

function renderIntroSlides() {
  refs.introSlides.forEach((slide, index) => {
    const image = INTRO_SLIDES[index];
    slide.style.backgroundImage = image ? `url("${image}")` : "none";
  });
}

function playIntroOverlay() {
  if (!refs.introOverlay || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    if (refs.introOverlay) {
      refs.introOverlay.hidden = true;
    }
    return;
  }

  renderIntroSlides();
  refs.introOverlay.hidden = false;
  document.body.classList.remove("intro-leaving");
  document.body.classList.add("show-intro");
  introStartTimeout = window.setTimeout(() => {
    hideIntroOverlay();
  }, INTRO_TOTAL_DURATION - INTRO_EXIT_DURATION);
}

function renderStoreLogoPreview() {
  const previewLogo = state.pendingStoreLogo || state.settings.brandLogo;

  if (!previewLogo) {
    refs.storeLogoPreview.innerHTML = `
      <div class="preview-placeholder">
        <strong>Vista previa del logo</strong>
        <span>Sube un archivo PNG transparente.</span>
      </div>
    `;
    return;
  }

  refs.storeLogoPreview.innerHTML = `<img src="${previewLogo}" alt="Logo de ${escapeHtml(state.settings.storeName)}" class="brand-logo-image" />`;
}

function formatFooterContentHtml(value) {
  return escapeHtml(String(value || "").replace(/\r/g, "")).replace(/\n/g, "<br />");
}

function buildFooterEditAction(section) {
  if (!state.adminAuthenticated) {
    return "";
  }

  return `<button type="button" class="footer-inline-edit" data-footer-edit="${section}">Editar</button>`;
}

function buildFooterSectionCard(section, bodyHtml) {
  const { image, title } = getFooterSectionConfig(section);
  const backgroundStyle = image
    ? ` style="--footer-section-image:url('${escapeHtml(image)}')"`
    : "";

  return `
    <div class="footer-section-card"${backgroundStyle}>
      <div class="footer-section-tools">
        ${buildFooterEditAction(section)}
      </div>
      <span class="footer-section-title-badge">${escapeHtml(title)}</span>
      ${bodyHtml}
    </div>
  `;
}

function renderFooterTextSection(text, section) {
  const safeContent = formatFooterContentHtml(text);

  return buildFooterSectionCard(
    section,
    `<div class="footer-text-content ${safeContent ? "" : "is-empty"}">${safeContent || "Sin contenido en esta sección."}</div>`,
  );
}

function renderFooterGallerySection() {
  const images = state.footerSections.gallery || [];

  return `
    ${buildFooterSectionCard("gallery", '<div class="footer-card-caption">Colección destacada del pie de página.</div>')}
    ${images.length ? `
      <div class="footer-gallery-grid">
        ${images.map((image, index) => `
          <div class="footer-gallery-card media-frame media-frame-product">
            <img src="${image}" alt="Imagen ${index + 1} de la galería" loading="lazy" />
          </div>
        `).join("")}
      </div>
    ` : `
      <div class="footer-gallery-empty">No hay imágenes en la galería.</div>
    `}
  `;
}

function getFooterSectionTitle(section) {
  return getFooterSectionConfig(section).title;
}

function renderFooterModalContent() {
  const section = state.footerModalSection;
  refs.footerModalTitle.textContent = getFooterSectionTitle(section);
  refs.footerInfoSheet.dataset.footerSection = section;
  refs.footerEditorPanel.hidden = !state.adminAuthenticated;

  if (section === "gallery") {
    refs.footerModalContent.innerHTML = renderFooterGallerySection();
    return;
  }

  const contentMap = {
    about: state.footerSections.about,
    contacts: state.footerSections.contacts,
    faq: state.footerSections.faq,
    policies: state.footerSections.policies,
  };

  refs.footerModalContent.innerHTML = renderFooterTextSection(contentMap[section] || "", section);
}

function openFooterModal(section) {
  state.footerModalSection = Object.prototype.hasOwnProperty.call(FOOTER_SECTION_CONFIG, section)
    ? section
    : "about";
  renderFooterModalContent();
  openOverlay(refs.footerInfoOverlay);
}

function renderFooterGalleryPreview() {
  if (!state.pendingFooterGalleryImage) {
    refs.footerGalleryPreview.innerHTML = `
      <div class="preview-placeholder">
        <strong>Vista previa de galería</strong>
        <span>Selecciona una imagen para agregarla al pie de página.</span>
      </div>
    `;
    return;
  }

  refs.footerGalleryPreview.innerHTML = `<img src="${state.pendingFooterGalleryImage}" alt="Vista previa de la galería" />`;
}

function renderFooterGalleryAdminList() {
  const images = state.footerSections.gallery || [];

  if (!images.length) {
    refs.footerGalleryAdminList.innerHTML = `
      <article class="empty-state panel-card">
        <strong>No hay fotos en la galería.</strong>
        <span>Sube imágenes desde este panel para mostrarlas en el pie de página.</span>
      </article>
    `;
    return;
  }

  refs.footerGalleryAdminList.innerHTML = images.map((image, index) => `
    <article class="event-admin-card">
      <div class="event-admin-thumb media-frame media-frame-product">
        <img src="${image}" alt="Imagen ${index + 1} de la galería" loading="lazy" />
      </div>
      <div class="event-admin-meta">
        <strong>Galería</strong>
        <span class="subtext">Imagen ${index + 1} de ${images.length}</span>
      </div>
      <button type="button" class="danger-button" data-footer-gallery-action="delete" data-index="${index}">Eliminar</button>
    </article>
  `).join("");
}

function renderFooterSections() {
  renderFooterModalContent();
}

function fillFooterSectionsForm() {
  refs.footerAboutInput.value = state.footerSections.about;
  refs.footerContactsInput.value = state.footerSections.contacts;
  refs.footerFaqInput.value = state.footerSections.faq;
  refs.footerPoliciesInput.value = state.footerSections.policies;
  state.pendingFooterGalleryImage = "";
  refs.footerGalleryImageInput.value = "";
  renderFooterGalleryPreview();
  renderFooterGalleryAdminList();
}

function focusFooterSectionEditor(section) {
  const fieldMap = {
    about: refs.footerAboutInput,
    contacts: refs.footerContactsInput,
    faq: refs.footerFaqInput,
    gallery: refs.footerGalleryImageInput,
    policies: refs.footerPoliciesInput,
  };
  const target = fieldMap[section];

  if (!target) {
    return;
  }

  window.setTimeout(() => {
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    target.focus();
  }, 60);
}

function showToast(message) {
  refs.toast.textContent = message;
  refs.toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => {
    refs.toast.classList.remove("show");
  }, 2800);
}

function createPointerParticle(x, y) {
  if (!refs.pointerTrailLayer) {
    return;
  }

  const particle = document.createElement("span");
  particle.className = "pointer-particle";
  particle.textContent = POINTER_PARTICLE_SYMBOLS[Math.floor(Math.random() * POINTER_PARTICLE_SYMBOLS.length)];
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;
  particle.style.color = POINTER_PARTICLE_COLORS[Math.floor(Math.random() * POINTER_PARTICLE_COLORS.length)];
  particle.style.setProperty("--particle-x", `${(Math.random() - 0.5) * 80}px`);
  particle.style.setProperty("--particle-y", `${-24 - (Math.random() * 66)}px`);
  particle.style.setProperty("--particle-rotate", `${(Math.random() - 0.5) * 180}deg`);
  particle.style.fontSize = `${16 + Math.random() * 16}px`;
  refs.pointerTrailLayer.appendChild(particle);
  window.setTimeout(() => {
    particle.remove();
  }, 1200);
}

function handlePointerTrail(event) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const now = performance.now();
  if (now - lastPointerParticleTime < 36) {
    return;
  }

  lastPointerParticleTime = now;
  createPointerParticle(event.clientX, event.clientY);
}

function createMenuRainParticle(target) {
  if (!target || !document.body.contains(target)) {
    return;
  }

  const rect = target.getBoundingClientRect();
  if (!rect.width || !rect.height) {
    return;
  }

  const particle = document.createElement("span");
  particle.className = "menu-rain-particle";
  particle.textContent = MENU_RAIN_SYMBOLS[Math.floor(Math.random() * MENU_RAIN_SYMBOLS.length)];
  particle.style.left = `${rect.left + (Math.random() * rect.width)}px`;
  particle.style.top = `${Math.max(0, rect.top - 16)}px`;
  particle.style.color = POINTER_PARTICLE_COLORS[Math.floor(Math.random() * POINTER_PARTICLE_COLORS.length)];
  particle.style.setProperty("--rain-drift", `${(Math.random() - 0.5) * 42}px`);
  particle.style.setProperty("--rain-drop", `${rect.height + 38 + (Math.random() * 34)}px`);
  particle.style.fontSize = `${14 + Math.random() * 14}px`;
  document.body.appendChild(particle);
  window.setTimeout(() => {
    particle.remove();
  }, 1100);
}

function stopMenuRain() {
  if (rainSpawnTimer) {
    window.clearInterval(rainSpawnTimer);
    rainSpawnTimer = null;
  }
  activeRainTarget = null;
}

function startMenuRain(target) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  if (activeRainTarget === target) {
    return;
  }

  stopMenuRain();
  activeRainTarget = target;
  for (let index = 0; index < 8; index += 1) {
    window.setTimeout(() => {
      if (activeRainTarget === target) {
        createMenuRainParticle(target);
      }
    }, index * 45);
  }

  rainSpawnTimer = window.setInterval(() => {
    if (!activeRainTarget) {
      stopMenuRain();
      return;
    }
    createMenuRainParticle(activeRainTarget);
  }, 120);
}

function isCatalogMenuTarget(target) {
  return Boolean(target?.closest(".category-chip, .menu-stage-item"));
}

function handleCatalogMenuHover(event) {
  const target = event.target.closest(".category-chip, .menu-stage-item");
  if (!target) {
    return;
  }

  startMenuRain(target);
}

function handleCatalogMenuLeave(event) {
  const relatedTarget = event.relatedTarget;
  if (isCatalogMenuTarget(relatedTarget)) {
    return;
  }

  stopMenuRain();
}

function renderCategoryViews() {
  renderCategoryFilters();
  renderMenuStage();
  renderProducts();
}

function createConfettiBurst(originX, originY) {
  const colors = state.settings.soundMode === "festive"
    ? ["#ff5fa2", "#ffb703", "#7c5cff", "#00c2ff", "#ff6b6b", "#7dd69a", "#ffd166", "#c77dff"]
    : ["#b997ee", "#d6c1ff", "#8c68d6", "#caa8ff", "#f2dcff", "#9d7be6"];
  const burst = document.createElement("div");
  burst.className = "confetti-burst";
  burst.style.left = `${originX}px`;
  burst.style.top = `${originY}px`;

  for (let index = 0; index < 18; index += 1) {
    const particle = document.createElement("span");
    const angle = (Math.PI * 2 * index) / 18;
    const distance = 46 + ((index % 6) * 10);
    particle.className = index % 4 === 0 ? "confetti confetti-streamer" : "confetti";
    particle.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
    particle.style.setProperty("--dy", `${Math.sin(angle) * distance}px`);
    particle.style.setProperty("--rotation", `${(index % 2 === 0 ? 1 : -1) * (140 + index * 12)}deg`);
    particle.style.background = colors[index % colors.length];
    burst.appendChild(particle);
  }

  document.body.appendChild(burst);
  window.setTimeout(() => {
    burst.remove();
  }, 900);
}

function formatCurrency(value) {
  return `$${Number(value || 0).toLocaleString("es-CO")}`;
}

function hasPublishedPrice(product) {
  return Number.isFinite(product?.price) && product.price > 0;
}

function formatDateTimeLocal(date) {
  const pad = (value) => String(value).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function parseDateTimeLocal(value) {
  const match = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/.exec(String(value || ""));
  if (!match) {
    return null;
  }

  const [, year, month, day, hour, minute] = match;
  const parsedDate = new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    Number(hour),
    Number(minute),
  );

  return Number.isNaN(parsedDate.getTime()) ? null : parsedDate;
}

function formatDateTimeLabel(value) {
  const date = value instanceof Date ? value : parseDateTimeLocal(value) || new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("es-CO", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

function getMinimumDeliveryDateTime(referenceDate = new Date()) {
  const minDate = new Date(referenceDate.getTime() + (MIN_ORDER_ADVANCE_HOURS * 60 * 60 * 1000));
  minDate.setSeconds(0, 0);
  return minDate;
}

function getDeliveryZone(zoneId) {
  return DELIVERY_ZONES.find((zone) => zone.id === zoneId) || null;
}

function getSelectedLocalityId() {
  return refs.customerLocality.value || "";
}

function getDeliveryFee(zoneId = getSelectedLocalityId()) {
  if (!zoneId) {
    return 0;
  }

  const fee = Number(state.settings.deliveryFees?.[zoneId]);
  return Number.isFinite(fee) && fee >= 0 ? Math.round(fee) : 0;
}

function validateDeliveryDateTime(value) {
  if (!value) {
    return {
      ok: false,
      message: "Selecciona la fecha y hora de entrega.",
    };
  }

  const selectedDate = parseDateTimeLocal(value);
  if (!selectedDate) {
    return {
      ok: false,
      message: "Selecciona una fecha y hora válida.",
    };
  }

  if (selectedDate.getTime() < getMinimumDeliveryDateTime().getTime()) {
    return {
      ok: false,
      message: `La entrega debe programarse con mínimo ${MIN_ORDER_ADVANCE_HOURS} horas de anticipación.`,
    };
  }

  return {
    ok: true,
    date: selectedDate,
  };
}

function syncDeliveryDateValidity() {
  if (!refs.customerDeliveryDateTime.value) {
    refs.customerDeliveryDateTime.setCustomValidity("");
    return;
  }

  const validation = validateDeliveryDateTime(refs.customerDeliveryDateTime.value);
  refs.customerDeliveryDateTime.setCustomValidity(validation.ok ? "" : validation.message);
}

function syncDeliveryDateField() {
  const minDate = getMinimumDeliveryDateTime();
  refs.customerDeliveryDateTime.min = formatDateTimeLocal(minDate);
  refs.orderDateHelper.textContent = `Solo se permiten pedidos con mínimo ${MIN_ORDER_ADVANCE_HOURS} horas de anticipación. Disponible desde ${formatDateTimeLabel(minDate)}.`;

  if (!refs.customerDeliveryDateTime.value) {
    refs.customerDeliveryDateTime.setCustomValidity("");
    return;
  }

  const validation = validateDeliveryDateTime(refs.customerDeliveryDateTime.value);
  if (!validation.ok) {
    refs.customerDeliveryDateTime.value = "";
    refs.customerDeliveryDateTime.setCustomValidity("");
    return;
  }

  refs.customerDeliveryDateTime.setCustomValidity("");
}

function syncCheckoutFieldMessages() {
  refs.checkoutForm.elements.customerName.setCustomValidity("");
  refs.checkoutForm.elements.customerPhone.setCustomValidity("");
  refs.checkoutForm.elements.customerAddress.setCustomValidity("");
  refs.customerLocality.setCustomValidity("");
  refs.customerDeliveryDateTime.setCustomValidity("");

  refs.checkoutForm.elements.customerName.required = true;
  refs.checkoutForm.elements.customerPhone.required = true;
  refs.checkoutForm.elements.customerAddress.required = true;
  refs.customerLocality.required = true;
  refs.customerDeliveryDateTime.required = true;
}

function normalizeWhatsappNumber(value) {
  const digits = String(value || "").replace(/\D/g, "");
  if (digits.length === 10) {
    return `57${digits}`;
  }

  return digits;
}

async function optimizeLogo(file) {
  const originalSource = await readFileAsDataUrl(file);
  const image = await loadImage(originalSource);
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const maxSide = 720;
  const scale = Math.min(1, maxSide / Math.max(image.naturalWidth, image.naturalHeight));
  const width = Math.max(1, Math.round(image.naturalWidth * scale));
  const height = Math.max(1, Math.round(image.naturalHeight * scale));

  canvas.width = width;
  canvas.height = height;

  if (!context) {
    return originalSource;
  }

  context.clearRect(0, 0, width, height);
  context.drawImage(image, 0, 0, width, height);

  const optimized = canvas.toDataURL("image/png");
  if (optimized.length > 3_500_000) {
    throw new Error("El logo es muy pesado. Usa un PNG más liviano.");
  }

  return optimized;
}

function createId(prefix) {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return `${prefix}-${window.crypto.randomUUID()}`;
  }

  return `${prefix}-${Date.now()}`;
}

function updateCart(nextCart) {
  const previousCart = state.cart;
  state.cart = nextCart;

  if (!persistStorage(STORAGE_KEYS.cart, state.cart, "No se pudo guardar el carrito.")) {
    state.cart = previousCart;
    return false;
  }

  return true;
}

function updateProducts(nextProducts) {
  const previousProducts = state.products;
  state.products = nextProducts;

  if (!persistStorage(STORAGE_KEYS.products, state.products, "No se pudo guardar el catálogo. Usa fotos más livianas.")) {
    state.products = previousProducts;
    return false;
  }

  return true;
}

function updateSettings(nextSettings) {
  const previousSettings = state.settings;
  state.settings = nextSettings;

  if (!persistStorage(STORAGE_KEYS.settings, state.settings, "No se pudo guardar la configuración.")) {
    state.settings = previousSettings;
    return false;
  }

  return true;
}

function updateFooterSections(nextSections) {
  const previousSections = state.footerSections;
  const normalizedSections = normalizeFooterSections(nextSections);
  state.footerSections = normalizedSections;

  if (!persistStorage(STORAGE_KEYS.footerSections, state.footerSections, "No se pudo guardar el pie de página.")) {
    state.footerSections = previousSections;
    return false;
  }

  return true;
}

function updateCategoryEvents(nextEvents) {
  const previousEvents = state.categoryEvents;
  state.categoryEvents = nextEvents;

  if (!persistStorage(STORAGE_KEYS.categoryEvents, state.categoryEvents, "No se pudieron guardar las fotos de categoría.")) {
    state.categoryEvents = previousEvents;
    return false;
  }

  return true;
}

function getCategories() {
  return [...CATEGORY_OPTIONS];
}

function wrapCategoryIndex(index) {
  const categories = getCategories();
  const total = categories.length;
  if (!total) {
    return 0;
  }

  return ((index % total) + total) % total;
}

function setActiveCategory(nextCategory) {
  const categories = getCategories();
  const normalizedCategory = normalizeCategory(nextCategory);
  state.activeCategory = categories.includes(normalizedCategory) ? normalizedCategory : categories[0];
}

function stepActiveCategory(direction) {
  const categories = getCategories();
  const currentIndex = categories.indexOf(state.activeCategory);
  setActiveCategory(categories[wrapCategoryIndex(currentIndex + direction)]);
}

function getFilteredProducts() {
  return state.products.filter((product) => product.category === state.activeCategory);
}

function getCartSummary(localityId = getSelectedLocalityId()) {
  const productMap = new Map(state.products.filter(hasPublishedPrice).map((product) => [product.id, product]));
  const items = state.cart
    .map((item) => {
      const product = productMap.get(item.productId);
      if (!product) {
        return null;
      }

      return {
        ...item,
        product,
        subtotal: product.price * item.quantity,
      };
    })
    .filter(Boolean);

  const productSubtotal = items.reduce((sum, item) => sum + item.subtotal, 0);
  const deliveryFee = items.length ? getDeliveryFee(localityId) : 0;

  return {
    deliveryFee,
    items,
    productSubtotal,
    totalAmount: productSubtotal + deliveryFee,
    totalItems: items.reduce((sum, item) => sum + item.quantity, 0),
  };
}

function syncCartWithProducts() {
  const validIds = new Set(state.products.filter(hasPublishedPrice).map((product) => product.id));
  const filteredCart = state.cart.filter((item) => validIds.has(item.productId));
  if (filteredCart.length !== state.cart.length) {
    updateCart(filteredCart);
  }
}

function renderBranding() {
  const logoSource = String(state.settings.brandLogo || defaultSettings.brandLogo || DEFAULT_BRAND_LOGO).trim() || DEFAULT_BRAND_LOGO;

  refs.storeNameView.textContent = state.settings.storeName;
  refs.storePitchView.textContent = state.settings.storePitch;
  refs.heroDescription.textContent = state.settings.storePitch;
  document.title = `${state.settings.storeName} | Tienda móvil`;
  document.body.dataset.soundMode = state.settings.soundMode || defaultSettings.soundMode;
  refs.secretTrigger.dataset.managementEnabled = LOCAL_MANAGEMENT_ENABLED ? "true" : "false";
  refs.secretTrigger.tabIndex = LOCAL_MANAGEMENT_ENABLED ? 0 : -1;
  refs.secretTrigger.setAttribute("aria-label", LOCAL_MANAGEMENT_ENABLED ? "Abrir gestión local" : `Marca ${state.settings.storeName}`);

  if (LOCAL_MANAGEMENT_ENABLED) {
    refs.secretTrigger.title = "Abrir gestión local";
  } else {
    refs.secretTrigger.removeAttribute("title");
  }

  refs.brandMark.classList.add("has-logo");
  refs.brandImages.forEach((image) => {
    image.src = logoSource;
  });
}

function validateCustomerPhone(value) {
  const normalizedPhone = normalizeWhatsappNumber(value);
  if (!normalizedPhone) {
    return {
      ok: false,
      message: "Error en el pedido: falta número de celular del cliente.",
    };
  }

  if (normalizedPhone.length < 10) {
    return {
      ok: false,
      message: "Error en el pedido: el número de celular del cliente no es válido.",
    };
  }

  return {
    ok: true,
    normalizedPhone,
  };
}

function validateCustomerData(customer) {
  if (!customer.name) {
    return "Error en el pedido: faltan los nombres del cliente.";
  }

  const phoneValidation = validateCustomerPhone(customer.phone);
  if (!phoneValidation.ok) {
    return phoneValidation.message;
  }

  if (!customer.address) {
    return "Error en el pedido: falta la dirección de entrega.";
  }

  if (!customer.locality) {
    return "Error en el pedido: falta la localidad de entrega.";
  }

  if (!customer.deliveryDateTime) {
    return "Error en el pedido: falta confirmar día y hora del pedido.";
  }

  return "";
}

function fillSettingsForm() {
  refs.storeNameInput.value = state.settings.storeName;
  refs.storePitchInput.value = state.settings.storePitch;
  refs.whatsappNumberInput.value = state.settings.whatsappNumber;
  refs.soundModeInput.value = state.settings.soundMode || defaultSettings.soundMode;
  state.pendingStoreLogo = "";
  refs.storeLogoInput.value = "";
  renderStoreLogoPreview();
  renderDeliveryFeeFields();
}

function renderDeliveryLocalityOptions() {
  const currentValue = refs.customerLocality.value;

  refs.customerLocality.innerHTML = [
    '<option value="">Selecciona una localidad</option>',
    ...DELIVERY_ZONES.map((zone) => `
      <option value="${zone.id}">${escapeHtml(zone.name)} · ${formatCurrency(getDeliveryFee(zone.id))}</option>
    `),
  ].join("");

  refs.customerLocality.value = getDeliveryZone(currentValue) ? currentValue : "";
}

function renderDeliveryFeeFields() {
  refs.deliveryFeesGrid.innerHTML = DELIVERY_ZONES.map((zone) => `
    <label class="delivery-field" for="deliveryFee-${zone.id}">
      <span>${escapeHtml(zone.name)}</span>
      <input id="deliveryFee-${zone.id}" name="deliveryFee:${zone.id}" type="number" min="0" step="1000" value="${getDeliveryFee(zone.id)}" />
    </label>
  `).join("");
}

function renderCategoryEventCategoryOptions() {
  refs.categoryEventCategory.innerHTML = CATEGORY_OPTIONS.map((category) => `
    <option value="${escapeHtml(category)}">${escapeHtml(category)}</option>
  `).join("");

  refs.categoryEventCategory.value = CATEGORY_OPTIONS.includes(state.pendingEventCategory)
    ? state.pendingEventCategory
    : CATEGORY_OPTIONS[0];
}

function renderCategoryEventPreview() {
  if (!state.pendingEventImage) {
    refs.categoryEventPreview.innerHTML = `
      <div class="preview-placeholder">
        <strong>Vista previa 20:16</strong>
        <span>Selecciona una foto en formato 20:16 para la categoría.</span>
      </div>
    `;
    return;
  }

  refs.categoryEventPreview.innerHTML = `<img src="${state.pendingEventImage}" alt="Vista previa de la foto de categoría" />`;
}

function renderCategoryEventList() {
  const category = refs.categoryEventCategory.value || state.pendingEventCategory;
  const images = state.categoryEvents[category] || [];

  if (!images.length) {
    refs.categoryEventList.innerHTML = `
      <article class="empty-state panel-card">
        <strong>No hay fotos de categoría.</strong>
        <span>Sube imágenes 20:16 para la categoría ${escapeHtml(category)}.</span>
      </article>
    `;
    return;
  }

  refs.categoryEventList.innerHTML = images.map((image, index) => `
    <article class="event-admin-card">
      <div class="event-admin-thumb media-frame media-frame-product">
        <img src="${image}" alt="Foto ${index + 1} de ${escapeHtml(category)}" loading="lazy" />
      </div>
      <div class="event-admin-meta">
        <strong>${escapeHtml(category)}</strong>
        <span class="subtext">Foto ${index + 1} de ${images.length}</span>
      </div>
      <button type="button" class="danger-button" data-event-action="delete" data-category="${escapeHtml(category)}" data-index="${index}">Eliminar</button>
    </article>
  `).join("");
}

function renderCategoryFilters() {
  const categories = getCategories();
  if (!categories.includes(state.activeCategory)) {
    state.activeCategory = categories[0];
  }

  refs.categoryFilters.innerHTML = categories
    .map((category) => `
      <button type="button" class="chip category-chip${getCompactTextClass(category, 14, 20)} ${category === state.activeCategory ? "active" : ""}" data-category="${escapeHtml(category)}" style="${buildCategoryThemeStyle(category)}">
        ${escapeHtml(category)}
      </button>
    `)
    .join("");
}

function renderMenuStage() {
  const categories = getCategories();
  const activeIndex = categories.indexOf(state.activeCategory);

  refs.menuStageViewport.innerHTML = categories.map((category, index) => {
    const delta = index - activeIndex;
    let side = "next";
    if (delta === 0) {
      side = "active";
    } else if (delta < 0) {
      side = "prev";
    }

    const centerOffset = Math.min(Math.abs(delta), 2);
    const themeStyle = buildCategoryThemeStyle(category);
    const image = (state.categoryEvents[category] || [])[0] || "";

    return `
      <button
        type="button"
        class="menu-stage-item${getCompactTextClass(category, 14, 20)} ${category === state.activeCategory ? "is-active" : ""} ${centerOffset >= 2 ? "is-distant" : ""}"
        data-menu-category="${escapeHtml(category)}"
        data-side="${side}"
        style="${themeStyle} --center-offset:${centerOffset};--i:${index};"
        aria-pressed="${category === state.activeCategory ? "true" : "false"}"
      >
        <div class="menu-stage-slide">
          ${image ? `<img src="${image}" alt="Vista previa de ${escapeHtml(category)}" loading="lazy" />` : `<div class="menu-stage-fill"></div>`}
          <div class="menu-stage-overlay">
            <span class="menu-stage-chip">${escapeHtml(category)}</span>
            <strong>${escapeHtml(category)}</strong>
          </div>
        </div>
      </button>
    `;
  }).join("");
}

function renderProducts() {
  const filteredProducts = getFilteredProducts();

  if (!state.products.length) {
    refs.productGrid.innerHTML = `
      <article class="empty-state panel-card">
        <strong>No hay productos publicados.</strong>
        <span>El catálogo publicado aún no tiene productos disponibles.</span>
      </article>
    `;
    return;
  }

  if (!filteredProducts.length) {
    refs.productGrid.innerHTML = `
      <article class="empty-state panel-card">
        <strong>No hay productos en esta categoría.</strong>
        <span>Prueba otro filtro.</span>
      </article>
    `;
    return;
  }

  refs.productGrid.innerHTML = filteredProducts.map((product) => {
    const productPrice = hasPublishedPrice(product)
      ? product.price
      : getTemporaryProductPrice(`${product.id}:${product.name}:${product.category}`);
    const productDescription = product.description
      ? escapeHtml(product.description)
      : "Sin descripcion por ahora.";

    return `
      <article class="product-card category-panel" style="${buildCategoryThemeStyle(product.category)}">
        <div class="product-image media-frame media-frame-product">
          <img src="${product.image}" alt="${escapeHtml(product.name)}" loading="lazy" />
        </div>

        <div class="product-top">
          <span class="category-badge${getCompactTextClass(product.category, 14, 20)}">${escapeHtml(product.category)}</span>
          <span class="product-price">${formatCurrency(productPrice)}</span>
        </div>

        <div class="product-copy${getCompactTextClass(product.name, 24, 36)}">
          <h3>${escapeHtml(product.name)}</h3>
        </div>

        <div class="product-description-box${product.description ? "" : " is-empty"}">
          <span>${productDescription}</span>
        </div>

        <button type="button" class="primary-button product-action-button" data-add-product="${product.id}">Agregar al carrito</button>
      </article>
    `;
  }).join("");
}

function renderCart() {
  const summary = getCartSummary();
  const selectedLocality = getDeliveryZone(getSelectedLocalityId());

  refs.cartCount.textContent = String(summary.totalItems);
  refs.cartSubtotal.textContent = formatCurrency(summary.productSubtotal);
  refs.cartDeliveryFee.textContent = formatCurrency(summary.deliveryFee);
  refs.cartDeliveryLabel.textContent = selectedLocality ? `Domicilio (${selectedLocality.name})` : "Domicilio por localidad";
  refs.cartTotal.textContent = formatCurrency(summary.totalAmount);
  refs.floatingCartLabel.textContent = summary.totalItems > 0 ? `Tu carrito (${summary.totalItems})` : "Tu carrito";
  refs.floatingCartTotal.textContent = formatCurrency(summary.totalAmount);
  refs.floatingCartButton.hidden = summary.items.length === 0;
  refs.clearCartButton.disabled = summary.items.length === 0;
  refs.sendOrderButton.disabled = summary.items.length === 0;

  if (!summary.items.length) {
    refs.cartItems.innerHTML = `
      <article class="empty-state panel-card">
        <strong>Tu carrito está vacío.</strong>
        <span>Agrega desayunos, arreglos florales, detalles, decoraciones o fresas para empezar el pedido.</span>
      </article>
    `;
    return;
  }

  refs.cartItems.innerHTML = summary.items
    .map((item) => `
      <article class="cart-item">
        <div class="cart-thumb">
          <img src="${item.product.image}" alt="${escapeHtml(item.product.name)}" loading="lazy" />
        </div>

        <div class="cart-meta">
          <div class="item-head">
            <div>
              <h4>${escapeHtml(item.product.name)}</h4>
              <span class="subtext">${formatCurrency(item.product.price)} c/u</span>
            </div>

            <button type="button" class="item-action" data-cart-action="remove" data-product-id="${item.product.id}">Quitar</button>
          </div>

          <div class="item-controls">
            <div class="qty-group">
              <button type="button" class="qty-button" data-cart-action="decrease" data-product-id="${item.product.id}">-</button>
              <span>${item.quantity}</span>
              <button type="button" class="qty-button" data-cart-action="increase" data-product-id="${item.product.id}">+</button>
            </div>

            <strong class="item-total">${formatCurrency(item.subtotal)}</strong>
          </div>
        </div>
      </article>
    `)
    .join("");
}

function renderImagePreview() {
  if (!state.pendingImage) {
    refs.imagePreview.innerHTML = `
      <div class="preview-placeholder">
        <strong>Vista previa 20:16</strong>
        <span>Selecciona una foto en formato 20:16 del producto.</span>
      </div>
    `;
    return;
  }

  refs.imagePreview.innerHTML = `<img src="${state.pendingImage}" alt="Vista previa del producto" />`;
}

function renderProductFormState() {
  refs.productFormTitle.textContent = state.editingProductId ? "Editar producto" : "Agregar producto";
  refs.cancelEditButton.hidden = !state.editingProductId;
}

function renderAdminProductList() {
  if (!state.products.length) {
    refs.adminProductList.innerHTML = `
      <article class="empty-state panel-card">
        <strong>No hay productos.</strong>
        <span>Agrega el primero desde esta gestión local.</span>
      </article>
    `;
    return;
  }

  refs.adminProductList.innerHTML = state.products
    .map((product) => {
      const priceLabel = hasPublishedPrice(product) ? ` · ${formatCurrency(product.price)}` : "";
      const description = product.description ? `<span class="subtext">${escapeHtml(product.description)}</span>` : "";

      return `
        <article class="admin-item">
          <div class="admin-thumb media-frame media-frame-product">
            <img src="${product.image}" alt="${escapeHtml(product.name)}" loading="lazy" />
          </div>

          <div class="admin-copy">
            <strong>${escapeHtml(product.name)}</strong>
            <span class="subtext">${escapeHtml(product.category)}${priceLabel}</span>
            ${description}
          </div>

          <div class="admin-actions">
            <button type="button" class="secondary-button" data-product-action="edit" data-product-id="${product.id}">Editar</button>
            <button type="button" class="danger-button" data-product-action="delete" data-product-id="${product.id}">Eliminar</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderApp() {
  syncCartWithProducts();
  renderBranding();
  renderFooterSections();
  renderCategoryFilters();
  renderMenuStage();
  renderProducts();
  renderDeliveryLocalityOptions();
  syncDeliveryDateField();
  renderCart();
  renderImagePreview();
  renderCategoryEventCategoryOptions();
  renderCategoryEventPreview();
  renderProductFormState();
  renderCategoryEventList();
  renderAdminProductList();
}

function openOverlay(overlay) {
  if (overlay === refs.cartOverlay) {
    syncDeliveryDateField();
    renderCart();
  }

  if (overlay === refs.footerInfoOverlay) {
    renderFooterModalContent();
  }

  overlay.hidden = false;
  document.body.classList.add("no-scroll");
}

function closeOverlay(overlay) {
  overlay.hidden = true;
  const anyOpen = [refs.cartOverlay, refs.adminLoginOverlay, refs.adminOverlay, refs.footerInfoOverlay].some((element) => !element.hidden);
  if (!anyOpen) {
    document.body.classList.remove("no-scroll");
  }
}

function addToCart(productId) {
  const product = state.products.find((item) => item.id === productId);
  if (!product) {
    showToast("No se pudo agregar el producto.");
    return false;
  }

  const nextCart = state.cart.some((item) => item.productId === productId)
    ? state.cart.map((item) => item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item)
    : [...state.cart, { productId, quantity: 1 }];

  if (!updateCart(nextCart)) {
    return false;
  }

  renderCart();
  playCartSound();
  showToast("Producto agregado al carrito.");
  return true;
}

function updateCartQuantity(productId, delta) {
  const nextCart = state.cart
    .map((item) => item.productId === productId ? { ...item, quantity: item.quantity + delta } : item)
    .filter((item) => item.quantity > 0);

  if (!updateCart(nextCart)) {
    return;
  }

  renderCart();
}

function removeFromCart(productId) {
  if (!updateCart(state.cart.filter((item) => item.productId !== productId))) {
    return;
  }

  renderCart();
  showToast("Producto eliminado del carrito.");
}

function resetProductForm() {
  refs.productForm.reset();
  state.editingProductId = null;
  state.pendingImage = "";
  refs.productForm.elements.productCategory.value = CATEGORY_OPTIONS[0];
  renderImagePreview();
  renderProductFormState();
}

function resetCategoryEventsForm() {
  refs.categoryEventsForm.reset();
  state.pendingEventCategory = CATEGORY_OPTIONS[0];
  state.pendingEventImage = "";
  renderCategoryEventCategoryOptions();
  renderCategoryEventPreview();
  renderCategoryEventList();
}

function startEditProduct(productId) {
  const product = state.products.find((item) => item.id === productId);
  if (!product) {
    return;
  }

  state.editingProductId = productId;
  state.pendingImage = product.image;
  refs.productForm.elements.productName.value = product.name;
  refs.productForm.elements.productCategory.value = product.category;
  refs.productForm.elements.productPrice.value = hasPublishedPrice(product) ? product.price : "";
  refs.productForm.elements.productDescription.value = product.description || "";
  refs.productForm.elements.productImage.value = "";
  renderImagePreview();
  renderProductFormState();
  openOverlay(refs.adminOverlay);
}

function resetStoreToDemo() {
  if (!window.confirm("¿Restaurar el catálogo base y borrar cambios locales?")) {
    return;
  }

  const settingsOk = updateSettings({
    ...defaultSettings,
    deliveryFees: { ...defaultDeliveryFees },
  });
  const eventsOk = updateCategoryEvents(createEmptyCategoryEvents());
  const footerSectionsOk = updateFooterSections(createDefaultFooterSections());
  const productsOk = updateProducts(cloneSeedProducts());
  const cartOk = updateCart([]);

  if (!settingsOk || !eventsOk || !footerSectionsOk || !productsOk || !cartOk) {
    return;
  }

  fillSettingsForm();
  if (refs.footerSectionsForm) {
    fillFooterSectionsForm();
  }
  refs.checkoutForm.reset();
  resetProductForm();
  resetCategoryEventsForm();
  renderApp();
  showToast("Se restauró el catálogo base.");
}

async function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("No se pudo leer la imagen."));
    reader.readAsDataURL(file);
  });
}

async function loadImage(source) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("No se pudo procesar la imagen."));
    image.src = source;
  });
}

async function optimizeImage(file) {
  const originalSource = await readFileAsDataUrl(file);
  const image = await loadImage(originalSource);
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const maxSide = 1280;
  const scale = Math.min(1, maxSide / Math.max(image.naturalWidth, image.naturalHeight));
  const width = Math.max(1, Math.round(image.naturalWidth * scale));
  const height = Math.max(1, Math.round(image.naturalHeight * scale));

  canvas.width = width;
  canvas.height = height;

  if (!context) {
    return originalSource;
  }

  const outputType = file.type === "image/png" ? "image/png" : "image/jpeg";
  if (outputType === "image/jpeg") {
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, width, height);
  }
  context.drawImage(image, 0, 0, width, height);

  const optimized = canvas.toDataURL(outputType, outputType === "image/png" ? undefined : 0.82);
  if (optimized.length > 4_500_000) {
    throw new Error("La imagen es muy pesada. Usa una foto más liviana.");
  }

  return optimized;
}

function buildWhatsAppMessage(customer, summary) {
  const lines = [
    `Hola, quiero realizar este pedido en ${state.settings.storeName}:`,
    "",
    ...summary.items.map((item, index) => `${index + 1}. ${item.product.name} x${item.quantity} - ${formatCurrency(item.subtotal)}`),
    "",
    `Subtotal productos: ${formatCurrency(summary.productSubtotal)}`,
    `Domicilio (${customer.locality}): ${formatCurrency(summary.deliveryFee)}`,
    `Total: ${formatCurrency(summary.totalAmount)}`,
    "",
    "Datos del cliente:",
    `Nombres: ${customer.name}`,
    `Teléfono: ${customer.phone}`,
    `Dirección: ${customer.address}`,
    `Localidad: ${customer.locality}`,
    `Entrega: ${customer.deliveryDateTime}`,
  ];

  if (customer.notes) {
    lines.push(`Notas: ${customer.notes}`);
  }

  return lines.join("\n");
}

function openWhatsappWindow(number, message) {
  if (!number) {
    return false;
  }

  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  const popup = window.open(url, "_blank", "noopener,noreferrer");
  return Boolean(popup);
}

function validateCheckoutForm() {
  syncCheckoutFieldMessages();
  syncDeliveryDateField();
  syncDeliveryDateValidity();

  const formData = new FormData(refs.checkoutForm);
  const customerName = String(formData.get("customerName") || "").trim();
  const customerPhone = String(formData.get("customerPhone") || "").trim();
  const customerAddress = String(formData.get("customerAddress") || "").trim();
  const localityId = String(formData.get("customerLocality") || "");
  const locality = getDeliveryZone(localityId);
  const deliveryDateTimeValue = String(formData.get("customerDeliveryDateTime") || "");
  const deliveryDateValidation = validateDeliveryDateTime(deliveryDateTimeValue);
  const phoneValidation = validateCustomerPhone(customerPhone);

  refs.customerDeliveryDateTime.setCustomValidity("");
  refs.checkoutForm.elements.customerPhone.setCustomValidity(phoneValidation.ok ? "" : phoneValidation.message);

  if (!customerName) {
    refs.checkoutForm.elements.customerName.setCustomValidity("Error en el pedido: faltan los nombres del cliente.");
    refs.checkoutForm.elements.customerName.reportValidity();
    showToast("Error en el pedido: faltan los nombres del cliente.");
    return null;
  }

  if (!phoneValidation.ok) {
    refs.checkoutForm.elements.customerPhone.reportValidity();
    showToast(phoneValidation.message);
    return null;
  }

  if (!customerAddress) {
    refs.checkoutForm.elements.customerAddress.setCustomValidity("Error en el pedido: falta la dirección de entrega.");
    refs.checkoutForm.elements.customerAddress.reportValidity();
    showToast("Error en el pedido: falta la dirección de entrega.");
    return null;
  }

  if (!locality) {
    refs.customerLocality.setCustomValidity("Error en el pedido: falta la localidad de entrega.");
    refs.customerLocality.reportValidity();
    showToast("Error en el pedido: falta la localidad de entrega.");
    return null;
  }

  if (!deliveryDateTimeValue) {
    refs.customerDeliveryDateTime.setCustomValidity("Error en el pedido: falta confirmar día y hora del pedido.");
    refs.customerDeliveryDateTime.reportValidity();
    showToast("Error en el pedido: falta confirmar día y hora del pedido.");
    return null;
  }

  if (!deliveryDateValidation.ok) {
    refs.customerDeliveryDateTime.setCustomValidity("Error en día y fecha: entrega no disponible.");
    refs.customerDeliveryDateTime.reportValidity();
    showToast("Error en día y fecha de la entrega: no disponible.");
    return null;
  }

  if (!refs.checkoutForm.reportValidity()) {
    return null;
  }

  return {
    customer: {
      address: customerAddress,
      deliveryDateTime: formatDateTimeLabel(deliveryDateValidation.date),
      locality: locality.name,
      name: customerName,
      notes: String(formData.get("customerNotes") || "").trim(),
      phone: customerPhone,
    },
    localityId,
    normalizedCustomerPhone: phoneValidation.normalizedPhone,
  };
}

function openWhatsAppOrder() {
  const summary = getCartSummary();
  if (!summary.items.length) {
    showToast("Error en el pedido: agrega productos al carrito antes de enviar la compra.");
    return;
  }

  const whatsappNumber = normalizeWhatsappNumber(state.settings.whatsappNumber);
  if (!whatsappNumber) {
    showToast("Error en el pedido: el WhatsApp del negocio no está configurado.");
    return;
  }

  const checkoutData = validateCheckoutForm();
  if (!checkoutData) {
    return;
  }

  const finalSummary = getCartSummary(checkoutData.localityId);
  const customerDataError = validateCustomerData(checkoutData.customer);
  if (customerDataError) {
    showToast(customerDataError);
    return;
  }

  const orderMessage = buildWhatsAppMessage(checkoutData.customer, finalSummary);
  const customerCopyMessage = [
    `Hola ${checkoutData.customer.name}, gracias por tu compra en ${state.settings.storeName}.`,
    "",
    "Este es el resumen de tu pedido:",
    "",
    orderMessage,
    "",
    "Pronto confirmaremos tu pedido por este medio.",
  ].join("\n");

  const businessOpened = openWhatsappWindow(whatsappNumber, orderMessage);
  const customerOpened = openWhatsappWindow(checkoutData.normalizedCustomerPhone, customerCopyMessage);

  if (!businessOpened || !customerOpened) {
    showToast("El navegador bloqueó una ventana de WhatsApp. Permite ventanas emergentes e intenta de nuevo.");
    return;
  }

  createConfettiBurst(window.innerWidth * 0.44, window.innerHeight * 0.38);
  window.setTimeout(() => {
    createConfettiBurst(window.innerWidth * 0.56, window.innerHeight * 0.42);
  }, 120);
  playOrderSuccessSound();

  updateCart([]);
  refs.checkoutForm.reset();
  closeOverlay(refs.cartOverlay);
  renderCart();
  showToast("Pedido enviado al negocio y copia preparada para el cliente.");
}

function handleSecretTap() {
  if (!LOCAL_MANAGEMENT_ENABLED) {
    return;
  }

  if (state.adminAuthenticated) {
    openOverlay(refs.adminOverlay);
    return;
  }

  refs.adminLoginForm.reset();
  openOverlay(refs.adminLoginOverlay);
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch((error) => {
      console.error("No se pudo registrar el service worker.", error);
    });
  });
}

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  state.deferredPrompt = event;
  refs.installButton.hidden = false;
});

window.addEventListener("appinstalled", () => {
  state.deferredPrompt = null;
  refs.installButton.hidden = true;
  showToast("La app quedó instalada en tu dispositivo.");
});

refs.installButton.addEventListener("click", async () => {
  if (!state.deferredPrompt) {
    showToast("Usa la opción de instalar del navegador.");
    return;
  }

  refs.installButton.hidden = true;
  state.deferredPrompt.prompt();
  await state.deferredPrompt.userChoice;
  state.deferredPrompt = null;
});

refs.skipIntroButton?.addEventListener("click", () => {
  hideIntroOverlay();
});

document.addEventListener("pointermove", handlePointerTrail, { passive: true });

refs.secretTrigger.addEventListener("click", handleSecretTap);

refs.cartOpenButton.addEventListener("click", () => {
  openOverlay(refs.cartOverlay);
});

refs.floatingCartButton.addEventListener("click", () => {
  openOverlay(refs.cartOverlay);
});

document.addEventListener("click", (event) => {
  const cartTrigger = event.target.closest("[data-open-cart='true']");
  if (cartTrigger) {
    openOverlay(refs.cartOverlay);
  }

  const footerTrigger = event.target.closest("[data-footer-open]");
  if (footerTrigger) {
    openFooterModal(footerTrigger.dataset.footerOpen);
  }

  const closeTrigger = event.target.closest("[data-close]");
  if (closeTrigger) {
    const overlay = document.querySelector(closeTrigger.dataset.close);
    if (overlay) {
      closeOverlay(overlay);
    }
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") {
    return;
  }

  for (const overlay of [refs.adminOverlay, refs.adminLoginOverlay, refs.cartOverlay, refs.footerInfoOverlay]) {
    if (!overlay.hidden) {
      closeOverlay(overlay);
      break;
    }
  }
});

for (const overlay of [refs.cartOverlay, refs.adminLoginOverlay, refs.adminOverlay, refs.footerInfoOverlay]) {
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeOverlay(overlay);
    }
  });
}

refs.categoryFilters.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-category]");
  if (!trigger) {
    return;
  }

  setActiveCategory(trigger.dataset.category);
  renderCategoryViews();
});

refs.menuStagePrev.addEventListener("click", () => {
  stepActiveCategory(-1);
  renderCategoryViews();
});

refs.menuStageNext.addEventListener("click", () => {
  stepActiveCategory(1);
  renderCategoryViews();
});

refs.menuStageViewport.addEventListener("touchstart", (event) => {
  const touch = event.touches && event.touches[0];
  if (!touch) {
    return;
  }

  menuStageTouchStartX = touch.clientX;
  menuStageTouchStartY = touch.clientY;
  menuStageTouchTracking = true;
}, { passive: true });

refs.menuStageViewport.addEventListener("touchend", (event) => {
  if (!menuStageTouchTracking) {
    return;
  }

  const touch = event.changedTouches && event.changedTouches[0];
  menuStageTouchTracking = false;
  if (!touch) {
    return;
  }

  const deltaX = touch.clientX - menuStageTouchStartX;
  const deltaY = touch.clientY - menuStageTouchStartY;
  if (Math.abs(deltaX) < 40 || Math.abs(deltaX) < Math.abs(deltaY)) {
    return;
  }

  stepActiveCategory(deltaX < 0 ? 1 : -1);
  renderCategoryViews();
}, { passive: true });

refs.menuStageViewport.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-menu-category]");
  if (!trigger) {
    return;
  }

  setActiveCategory(trigger.dataset.menuCategory);
  renderCategoryViews();
});

refs.categoryFilters.addEventListener("pointerover", handleCatalogMenuHover);
refs.categoryFilters.addEventListener("pointerout", handleCatalogMenuLeave);
refs.menuStageViewport.addEventListener("pointerover", handleCatalogMenuHover);
refs.menuStageViewport.addEventListener("pointerout", handleCatalogMenuLeave);

refs.productGrid.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-add-product]");
  if (!trigger) {
    return;
  }

  if (addToCart(trigger.dataset.addProduct)) {
    createConfettiBurst(event.clientX, event.clientY);
  }
});

refs.cartItems.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-cart-action]");
  if (!trigger) {
    return;
  }

  const { cartAction, productId } = trigger.dataset;
  if (cartAction === "increase") {
    updateCartQuantity(productId, 1);
  }

  if (cartAction === "decrease") {
    updateCartQuantity(productId, -1);
  }

  if (cartAction === "remove") {
    removeFromCart(productId);
  }
});

refs.clearCartButton.addEventListener("click", () => {
  if (!state.cart.length) {
    return;
  }

  if (!updateCart([])) {
    return;
  }

  renderCart();
  showToast("Carrito vaciado.");
});

refs.customerLocality.addEventListener("change", () => {
  renderCart();
});

refs.customerDeliveryDateTime.addEventListener("input", () => {
  syncDeliveryDateValidity();
});

refs.customerDeliveryDateTime.addEventListener("change", () => {
  syncDeliveryDateValidity();
});

refs.checkoutForm.addEventListener("submit", (event) => {
  event.preventDefault();
  openWhatsAppOrder();
});

refs.adminLoginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!LOCAL_MANAGEMENT_ENABLED) {
    closeOverlay(refs.adminLoginOverlay);
    showToast("La gestión local solo está disponible en tu copia del proyecto.");
    return;
  }

  state.adminAuthenticated = true;
  sessionStorage.setItem(STORAGE_KEYS.adminSession, "1");
  refs.adminLoginForm.reset();
  closeOverlay(refs.adminLoginOverlay);
  fillFooterSectionsForm();
  renderFooterSections();
  openOverlay(refs.adminOverlay);
  showToast("Gestión local habilitada.");
});

refs.adminLogoutButton.addEventListener("click", () => {
  state.adminAuthenticated = false;
  sessionStorage.removeItem(STORAGE_KEYS.adminSession);
  closeOverlay(refs.adminOverlay);
  resetProductForm();
  renderFooterSections();
  showToast("Sesión de gestión local cerrada.");
});

refs.storeLogoInput.addEventListener("change", async (event) => {
  const file = event.target.files && event.target.files[0];
  if (!file) {
    state.pendingStoreLogo = "";
    renderStoreLogoPreview();
    return;
  }

  if (file.type !== "image/png") {
    refs.storeLogoInput.value = "";
    showToast("Selecciona un logo PNG transparente.");
    return;
  }

  try {
    const logo = await optimizeLogo(file);
    state.pendingStoreLogo = logo;
    renderStoreLogoPreview();
    showToast("Logo listo para guardar.");
  } catch (error) {
    console.error(error);
    state.pendingStoreLogo = "";
    refs.storeLogoInput.value = "";
    showToast(error.message || "No se pudo preparar el logo.");
  }
});

refs.footerGalleryImageInput?.addEventListener("change", async (event) => {
  const file = event.target.files && event.target.files[0];
  if (!file) {
    state.pendingFooterGalleryImage = "";
    renderFooterGalleryPreview();
    return;
  }

  if (!file.type.startsWith("image/")) {
    refs.footerGalleryImageInput.value = "";
    showToast("Selecciona una imagen válida para la galería.");
    return;
  }

  try {
    state.pendingFooterGalleryImage = await optimizeImage(file);
    renderFooterGalleryPreview();
    showToast("Imagen de galería lista para guardar.");
  } catch (error) {
    console.error(error);
    state.pendingFooterGalleryImage = "";
    refs.footerGalleryImageInput.value = "";
    showToast(error.message || "No se pudo preparar la imagen de la galería.");
  }
});

refs.settingsForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(refs.settingsForm);
  const deliveryFees = DELIVERY_ZONES.reduce((fees, zone) => {
    const fee = Number(formData.get(`deliveryFee:${zone.id}`));
    fees[zone.id] = Number.isFinite(fee) && fee >= 0 ? Math.round(fee) : 0;
    return fees;
  }, {});

  const nextSettings = {
    brandLogo: state.pendingStoreLogo || state.settings.brandLogo || defaultSettings.brandLogo,
    deliveryFees,
    soundMode: ["off", "soft", "festive"].includes(String(formData.get("soundMode") || "")) ? String(formData.get("soundMode")) : defaultSettings.soundMode,
    storeName: String(formData.get("storeName") || "").trim() || defaultSettings.storeName,
    storePitch: String(formData.get("storePitch") || "").trim() || defaultSettings.storePitch,
    whatsappNumber: normalizeWhatsappNumber(formData.get("whatsappNumber")),
  };

  if (!nextSettings.whatsappNumber) {
    showToast("Agrega el número de WhatsApp del negocio.");
    return;
  }

  if (!updateSettings(nextSettings)) {
    return;
  }

  fillSettingsForm();
  renderBranding();
  renderDeliveryLocalityOptions();
  renderCart();
  showToast("Ajustes guardados.");
});

refs.footerSectionsForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(refs.footerSectionsForm);
  const currentGallery = state.footerSections.gallery || [];
  const nextGallery = state.pendingFooterGalleryImage
    ? [state.pendingFooterGalleryImage, ...currentGallery]
    : [...currentGallery];

  if (state.pendingFooterGalleryImage && currentGallery.length >= MAX_FOOTER_GALLERY_IMAGES) {
    showToast(`Solo puedes guardar ${MAX_FOOTER_GALLERY_IMAGES} imágenes en la galería.`);
    return;
  }

  const savedGalleryImage = Boolean(state.pendingFooterGalleryImage);
  const nextSections = {
    about: String(formData.get("footerAbout") || ""),
    contacts: String(formData.get("footerContacts") || ""),
    faq: String(formData.get("footerFaq") || ""),
    gallery: nextGallery,
    policies: String(formData.get("footerPolicies") || ""),
  };

  if (!updateFooterSections(nextSections)) {
    return;
  }

  fillFooterSectionsForm();
  renderFooterSections();
  showToast(savedGalleryImage ? "Pie de página y galería guardados." : "Pie de página guardado.");
});

refs.categoryEventCategory.addEventListener("change", (event) => {
  state.pendingEventCategory = event.target.value || CATEGORY_OPTIONS[0];
  renderCategoryEventList();
});

refs.categoryEventImage.addEventListener("change", async (event) => {
  const file = event.target.files && event.target.files[0];
  if (!file) {
    state.pendingEventImage = "";
    renderCategoryEventPreview();
    return;
  }

  if (!file.type.startsWith("image/")) {
    refs.categoryEventImage.value = "";
    showToast("Selecciona una imagen válida para la categoría.");
    return;
  }

  try {
    state.pendingEventImage = await optimizeImage(file);
    renderCategoryEventPreview();
  } catch (error) {
    console.error(error);
    refs.categoryEventImage.value = "";
    showToast(error.message || "No se pudo preparar la imagen de la categoría.");
  }
});

refs.categoryEventsForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const category = refs.categoryEventCategory.value || CATEGORY_OPTIONS[0];
  const currentImages = state.categoryEvents[category] || [];

  if (!state.pendingEventImage) {
    showToast("Agrega una fotografía para la categoría.");
    return;
  }

  if (currentImages.length >= MAX_EVENT_IMAGES_PER_CATEGORY) {
    showToast(`Solo puedes guardar ${MAX_EVENT_IMAGES_PER_CATEGORY} fotos por categoría.`);
    return;
  }

  const nextEvents = {
    ...state.categoryEvents,
    [category]: [state.pendingEventImage, ...currentImages],
  };

  if (!updateCategoryEvents(nextEvents)) {
    return;
  }

  state.pendingEventCategory = category;
  state.pendingEventImage = "";
  refs.categoryEventsForm.reset();
  refs.categoryEventCategory.value = category;
  renderMenuStage();
  renderProducts();
  renderCategoryEventPreview();
  renderCategoryEventList();
  showToast("Foto de categoría guardada.");
});

refs.productImageInput.addEventListener("change", async (event) => {
  const file = event.target.files && event.target.files[0];
  if (!file) {
    if (!state.editingProductId) {
      state.pendingImage = "";
      renderImagePreview();
    }
    return;
  }

  if (!file.type.startsWith("image/")) {
    refs.productImageInput.value = "";
    showToast("Selecciona una imagen válida.");
    return;
  }

  try {
    state.pendingImage = await optimizeImage(file);
    renderImagePreview();
  } catch (error) {
    console.error(error);
    refs.productImageInput.value = "";
    showToast(error.message || "No se pudo preparar la imagen.");
  }
});

refs.productForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const wasEditing = Boolean(state.editingProductId);
  const formData = new FormData(refs.productForm);
  const name = String(formData.get("productName") || "").trim();
  const category = normalizeCategory(formData.get("productCategory"));
  const description = String(formData.get("productDescription") || "").trim();
  const rawPrice = String(formData.get("productPrice") || "").trim();
  const parsedPrice = rawPrice ? Number(rawPrice) : null;
  const existingProduct = state.products.find((item) => item.id === state.editingProductId);
  const productId = existingProduct?.id || createId("product");
  const price = Number.isFinite(parsedPrice) && parsedPrice > 0
    ? Math.round(parsedPrice)
    : getTemporaryProductPrice(`${productId}:${name}:${category}`);
  const image = state.pendingImage || existingProduct?.image || "";

  if (!name || !category) {
    showToast("Completa el nombre y la categoría.");
    return;
  }

  if (rawPrice && (!Number.isFinite(parsedPrice) || parsedPrice < 0)) {
    showToast("Agrega un valor válido o deja el campo en blanco.");
    return;
  }

  if (!image) {
    showToast("Agrega una fotografía del producto.");
    return;
  }

  const product = {
    id: productId,
    name,
    category,
    description,
    image,
    price,
  };

  const nextProducts = state.editingProductId
    ? state.products.map((item) => item.id === state.editingProductId ? product : item)
    : [product, ...state.products];

  if (!updateProducts(nextProducts)) {
    return;
  }

  resetProductForm();
  renderApp();
  showToast(wasEditing ? "Producto actualizado." : "Producto agregado.");
});

refs.cancelEditButton.addEventListener("click", () => {
  resetProductForm();
});

refs.adminProductList.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-product-action]");
  if (!trigger) {
    return;
  }

  const productId = trigger.dataset.productId;
  if (trigger.dataset.productAction === "edit") {
    startEditProduct(productId);
    return;
  }

  if (trigger.dataset.productAction === "delete") {
    const product = state.products.find((item) => item.id === productId);
    if (!product || !window.confirm(`¿Eliminar ${product.name}?`)) {
      return;
    }

    if (!updateProducts(state.products.filter((item) => item.id !== productId))) {
      return;
    }

    updateCart(state.cart.filter((item) => item.productId !== productId));
    if (state.editingProductId === productId) {
      resetProductForm();
    }
    renderApp();
    showToast("Producto eliminado.");
  }
});

refs.categoryEventList.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-event-action='delete']");
  if (!trigger) {
    return;
  }

  const category = normalizeCategory(trigger.dataset.category);
  const index = Number(trigger.dataset.index);
  const currentImages = state.categoryEvents[category] || [];

  if (!Number.isInteger(index) || index < 0 || index >= currentImages.length) {
    return;
  }

  const nextEvents = {
    ...state.categoryEvents,
    [category]: currentImages.filter((_, imageIndex) => imageIndex !== index),
  };

  if (!updateCategoryEvents(nextEvents)) {
    return;
  }

  state.pendingEventCategory = category;
  refs.categoryEventCategory.value = category;
  renderMenuStage();
  renderProducts();
  renderCategoryEventList();
  showToast("Foto de categoría eliminada.");
});

refs.footerGalleryAdminList?.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-footer-gallery-action='delete']");
  if (!trigger) {
    return;
  }

  const index = Number(trigger.dataset.index);
  const currentGallery = state.footerSections.gallery || [];
  if (!Number.isInteger(index) || index < 0 || index >= currentGallery.length) {
    return;
  }

  const nextSections = {
    ...state.footerSections,
    gallery: currentGallery.filter((_, imageIndex) => imageIndex !== index),
  };

  if (!updateFooterSections(nextSections)) {
    return;
  }

  renderFooterSections();
  renderFooterGalleryAdminList();
  showToast("Imagen de galería eliminada.");
});

refs.footerModalContent?.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-footer-edit]");
  if (!trigger || !state.adminAuthenticated) {
    return;
  }

  focusFooterSectionEditor(trigger.dataset.footerEdit);
});

refs.facebookSocialButton?.addEventListener("click", () => {
  showToast("Falta configurar el enlace de Facebook.");
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stopMenuRain();
    return;
  }
});

refs.resetStoreButton.addEventListener("click", resetStoreToDemo);

fillSettingsForm();
if (refs.footerSectionsForm) {
  fillFooterSectionsForm();
}
renderApp();
playIntroOverlay();
registerServiceWorker();
