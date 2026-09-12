const realProductCatalog = {
  "Phones": [
    { id: "p1", title: "Apple iPhone 15 Pro Max", price: 134900, specs: "A17 Pro chip • 256GB • Titanium Finish", img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=400&q=80" },
    { id: "p2", title: "Samsung Galaxy S24 Ultra", price: 129999, specs: "Snapdragon 8 Gen 3 • 12GB RAM • 256GB", img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=400&q=80" },
    { id: "p3", title: "Google Pixel 8 Pro", price: 98999, specs: "Google Tensor G3 • 12GB RAM • 128GB", img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=400&q=80" },
    { id: "p4", title: "OnePlus 12", price: 64999, specs: "Snapdragon 8 Gen 3 • 16GB RAM • 512GB", img: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=400&q=80" },
    { id: "p5", title: "Xiaomi 14 Pro", price: 79999, specs: "Leica Optics • Snapdragon 8 Gen 3 • 512GB", img: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=400&q=80" },
    { id: "p6", title: "Google Pixel 9 Pro", price: 109999, specs: "Google Tensor G4 • 16GB RAM • 256GB", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80" },
    { id: "p7", title: "OnePlus 12R", price: 39999, specs: "Snapdragon 8 Gen 2 • 8GB RAM • 128GB", img: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=400&q=80" }
  ],
  "Laptops": [
    { id: "l1", title: "Apple MacBook Pro 16 (M3 Max)", price: 349900, specs: "M3 Max • 36GB Unified Memory • 1TB SSD", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80" },
    { id: "l2", title: "Dell XPS 16 (2024)", price: 239990, specs: "Intel Core Ultra 7 • 32GB RAM • 1TB SSD • RTX 4070", img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=400&q=80" },
    { id: "l3", title: "Lenovo Legion Pro 7i", price: 215000, specs: "Intel i9-14900HX • 32GB RAM • RTX 4080", img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=400&q=80" },
    { id: "l4", title: "ASUS ROG Zephyrus G14", price: 174990, specs: "AMD Ryzen 9 8945HS • 32GB RAM • RTX 4060", img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=400&q=80" },
    { id: "l5", title: "Microsoft Surface Laptop 7", price: 134990, specs: "Snapdragon X Elite • 16GB RAM • 512GB SSD", img: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=400&q=80" },
    { id: "l6", title: "Apple MacBook Air 15 (M3)", price: 134900, specs: "M3 Chip • 16GB Unified Memory • 512GB SSD", img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=400&q=80" },
    { id: "l7", title: "HP Spectre x360 14", price: 149990, specs: "Intel Core Ultra 7 • OLED Touch Display • 1TB SSD", img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=400&q=80" }
  ],
  "Cameras": [
    { id: "c1", title: "Sony Alpha a7R V", price: 335990, specs: "61.0MP Full-Frame Exmor R CMOS • 8K Video", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80" },
    { id: "c2", title: "Fujifilm X-T5", price: 159999, specs: "40.2MP APS-X X-Trans CMOS 5 HR • 3-Way Tilt LCD", img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=400&q=80" },
    { id: "c3", title: "Canon EOS R6 Mark II", price: 219995, specs: "24.2MP Full-Frame CMOS • 40fps Electronic Shutter", img: "https://images.unsplash.com/photo-1519183071298-a2962feb14f2?auto=format&fit=crop&w=400&q=80" },
    { id: "c4", title: "Sony ZV-E10 Creator Kit", price: 69990, specs: "24.2MP APS-C Sensor • Interchangeable Lens", img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80" },
    { id: "c5", title: "Nikon Z8 Body", price: 319995, specs: "45.7MP FX-Format Stacked CMOS • 8K UHD Video", img: "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?auto=format&fit=crop&w=400&q=80" },
    { id: "c6", title: "Canon EOS R5 C", price: 399995, specs: "45MP Full-Frame • Cinema EOS Hybrid • 8K RAW", img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=400&q=80" },
    { id: "c7", title: "Sony FX30 Cinema Line", price: 179990, specs: "26.1MP APS-C Exmor R CMOS • 4K 120p", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80" }
  ],
  "Audio": [
    { id: "a1", title: "Sony WH-1000XM5", price: 29990, specs: "Industry-Leading Noise Canceling • 30hr Battery", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80" },
    { id: "a2", title: "Apple AirPods Max", price: 59900, specs: "Apple-designed Dynamic Driver • Spatial Audio", img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=400&q=80" },
    { id: "a3", title: "Bose QuietComfort Ultra", price: 35900, specs: "CustomTune Technology • Immersive Audio", img: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=400&q=80" },
    { id: "a4", title: "Sennheiser Momentum 4", price: 29990, specs: "60-Hour Battery Life • Smart Pause • ANC", img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=400&q=80" },
    { id: "a5", title: "Bang & Olufsen Beoplay H95", price: 79990, specs: "Adaptive Active Noise Cancellation • Titanium", img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=400&q=80" },
    { id: "a6", title: "JBL Tour One M2", price: 24999, specs: "True Adaptive Noise Cancelling • Spatial Sound", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80" },
    { id: "a7", title: "Marshall Major IV", price: 12999, specs: "80+ Hours Wireless Playtime • Iconic Design", img: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=400&q=80" }
  ],
  "Wearables": [
    { id: "w1", title: "Apple Watch Ultra 2", price: 89900, specs: "49mm Titanium Case • Dual-Frequency GPS • 3000 nits", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80" },
    { id: "w2", title: "Samsung Galaxy Watch 6 Classic", price: 36999, specs: "47mm Physical Rotating Bezel • BioActive Sensor", img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=400&q=80" },
    { id: "w3", title: "Garmin Fenix 7X Pro Solar", price: 98990, specs: "Power Sapphire Lens • Built-in LED Flashlight", img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=400&q=80" },
    { id: "w4", title: "Google Pixel Watch 2", price: 34999, specs: "100% Recycled Aluminum • Continuous HR Tracking", img: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=400&q=80" },
    { id: "w5", title: "Amazfit Balance", price: 22999, specs: "AI Fitness Coach • Dual-Band GPS • 14-Day Battery", img: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=400&q=80" },
    { id: "w6", title: "Oura Ring Gen 3 Horizon", price: 29990, specs: "Advanced Sleep & Readiness Tracking • Titanium", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80" },
    { id: "w7", title: "Whoop 4.0", price: 19990, specs: "24/7 Strain, Recovery & Sleep Coach • Waterproof", img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=400&q=80" }
  ],
  "Tablets": [
    { id: "t1", title: "Apple iPad Pro 13 (M4)", price: 129900, specs: "Ultra Retina XDR OLED • M4 Chip • 256GB", img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=400&q=80" },
    { id: "t2", title: "Samsung Galaxy Tab S9 Ultra", price: 108999, specs: "14.6\" Dynamic AMOLED 2X • Snapdragon 8 Gen 2", img: "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=400&q=80" },
    { id: "t3", title: "OnePlus Pad 2", price: 39999, specs: "12.1\" 144Hz Display • Snapdragon 8 Gen 3 • 12GB RAM", img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=400&q=80" },
    { id: "t4", title: "Lenovo Tab Extreme", price: 84990, specs: "14.5\" 3K OLED Display • Dimensity 9000 • Pen Included", img: "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=400&q=80" },
    { id: "t5", title: "Microsoft Surface Pro 11", price: 119990, specs: "Snapdragon X Plus/Elite • 13\" PixelSense Flow", img: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=400&q=80" }
  ],
  "Gaming Consoles": [
    { id: "g1", title: "Sony PlayStation 5 Pro", price: 69990, specs: "Advanced Ray Tracing • 2TB SSD • PSSR Upscaling", img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=400&q=80" },
    { id: "g2", title: "Microsoft Xbox Series X", price: 52990, specs: "12 Teraflops GPU • 1TB Custom NVMe SSD • 4K Gaming", img: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=400&q=80" },
    { id: "g3", title: "Nintendo Switch OLED Model", price: 34990, specs: "7-Inch OLED Screen • 64GB Storage • Enhanced Audio", img: "https://images.unsplash.com/photo-1578303512597-81e6cc155b2e?auto=format&fit=crop&w=400&q=80" },
    { id: "g4", title: "Valve Steam Deck OLED", price: 54990, specs: "HDR OLED Display • 6.8\" 90Hz • Custom AMD APU", img: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=400&q=80" },
    { id: "g5", title: "ASUS ROG Ally X", price: 89990, specs: "AMD Ryzen Z1 Extreme • 24GB RAM • 1TB SSD • 80Wh Battery", img: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=400&q=80" }
  ],
  "Smart Home": [
    { id: "s1", title: "Amazon Echo Show 15", price: 24999, specs: "15.6\" Full HD Smart Display • Fire TV Built-in • Alexa", img: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&w=400&q=80" },
    { id: "s2", title: "Google Nest Hub Max", price: 22999, specs: "10\" HD Screen • Stereo Speakers • Built-in Nest Cam", img: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&w=400&q=80" },
    { id: "s3", title: "Ring Video Doorbell Pro 2", price: 18999, specs: "150px HD Video • 3D Motion Detection • Head-to-Toe", img: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&w=400&q=80" },
    { id: "s4", title: "Philips Hue Gradient Lightstrip", price: 14999, specs: "Multi-Color Smart LED Strip • Bluetooth & Zigbee", img: "https://images.unsplash.com/photo-1550985616-19de109e97a4?auto=format&fit=crop&w=400&q=80" },
    { id: "s5", title: "Dyson Purifier Hot+Cool Gen1", price: 55900, specs: "HEPA H13 Filtration • Air Purifier, Heater & Fan", img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=400&q=80" }
  ]
};

const marketInventory = [];

let generatedId = 1;
Object.keys(realProductCatalog).forEach(catName => {
  const models = realProductCatalog[catName];
  for (let batch = 0; batch < 8; batch++) {
    models.forEach((model, idx) => {
      const uniqueIndex = (batch * models.length) + idx + 1;
      const tiersList = ["Brand New", "Refurbished", "Direct Sale"];
      const tier = tiersList[uniqueIndex % tiersList.length];
      
      let priceMultiplier = 1.0;
      if (tier === 'Refurbished') priceMultiplier = 0.80;
      if (tier === 'Direct Sale') priceMultiplier = 0.65;

      const trendPercent = (Math.sin(uniqueIndex) * 4.5).toFixed(1);

      marketInventory.push({
        id: generatedId++,
        title: model.title,
        category: catName,
        tier: tier,
        price: Math.round(model.price * priceMultiplier),
        specs: model.specs,
        imageUrl: model.img,
        trendVal: trendPercent,
        aiDiagnosticScore: "98.4% Pristine Grade"
      });
    });
  }
});

let cart = [];
let activeTier = 'All';
let activeCategory = 'All';
let activeSubmission = null;
let uploadedImagesCount = 0;
let uploadedDocsCount = 0;

let isLoggedIn = false;
let loggedInUserEmail = "";
let userRole = 'user';
let companyEntityName = "Partner Company";
let activeLoginTab = 'company';
let isRegisterMode = false;

function initDatabase() {
  let dbUsers = JSON.parse(localStorage.getItem('diptronic_db_users')) || [];
  if (dbUsers.length === 0) {
    dbUsers = [
      { email: "admin@diptronic.com", pass: "diptronic", role: "admin", name: "Diptronic Admin" },
      { email: "name@company.com", pass: "diptronic", role: "company", name: "Partner Store" },
      { email: "user@gmail.com", pass: "diptronic", role: "user", name: "Standard User" }
    ];
    localStorage.setItem('diptronic_db_users', JSON.stringify(dbUsers));
  }
}
initDatabase();

function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);
  document.getElementById('themeToggleBtn').innerText = newTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
}

function handleProtectedAction(callback) {
  if (!isLoggedIn) {
    openLoginModal();
    return;
  }
  callback();
}

function openLoginModal() {
  document.getElementById('loginModal').classList.add('active');
}

function closeLoginModal() {
  document.getElementById('loginModal').classList.remove('active');
}

function switchLoginTab(tab) {
  activeLoginTab = tab;
  document.getElementById('tabAdmin').classList.remove('active');
  document.getElementById('tabCompany').classList.remove('active');
  document.getElementById('tabUser').classList.remove('active');

  if (tab === 'admin') document.getElementById('tabAdmin').classList.add('active');
  if (tab === 'company') document.getElementById('tabCompany').classList.add('active');
  if (tab === 'user') document.getElementById('tabUser').classList.add('active');
}

function toggleAuthMode(e) {
  e.preventDefault();
  isRegisterMode = !isRegisterMode;

  const title = document.getElementById('modalTitle');
  const subtitle = document.getElementById('modalSubtitle');
  const submitBtn = document.getElementById('authSubmitBtn');
  const promptText = document.getElementById('promptText');
  const toggleBtn = document.getElementById('toggleAuthModeBtn');
  const nameField = document.getElementById('nameFieldGroup');

  if (isRegisterMode) {
    title.innerText = "Create Account";
    subtitle.innerText = "Register your profile in the Diptronic database.";
    submitBtn.innerText = "Create account";
    promptText.innerText = "Already have an account?";
    toggleBtn.innerText = "Sign in";
    nameField.style.display = "block";
  } else {
    title.innerText = "Welcome to Diptronic";
    subtitle.innerText = "Manage your profile and publish approved items.";
    submitBtn.innerText = "Login";
    promptText.innerText = "Need an account?";
    toggleBtn.innerText = "Create one";
    nameField.style.display = "none";
  }
}

function fillDemo(type) {
  if (isRegisterMode) toggleAuthMode(new Event('click'));
  switchLoginTab(type);
  const emailInput = document.getElementById('loginEmail');
  const passInput = document.getElementById('loginPassword');
  passInput.value = "diptronic";

  if (type === 'admin') emailInput.value = "admin@diptronic.com";
  if (type === 'company') emailInput.value = "name@company.com";
  if (type === 'user') emailInput.value = "user@gmail.com";
}

function handleAuthSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const pass = document.getElementById('loginPassword').value.trim();
  const nameVal = document.getElementById('regName')?.value.trim() || "";

  let dbUsers = JSON.parse(localStorage.getItem('diptronic_db_users')) || [];

  let evaluatedRole = 'user';
  if (email === 'admin@diptronic.com' || email.endsWith('@diptronic.com')) {
    evaluatedRole = 'admin';
  } else if (email.endsWith('@gmail.com') || email.endsWith('@yahoo.com') || email.endsWith('@outlook.com')) {
    evaluatedRole = 'user';
  } else {
    evaluatedRole = 'company';
  }

  if (activeLoginTab === 'admin' && evaluatedRole !== 'admin') {
    alert("Access Denied: Admin Review can only be accessed using an admin@diptronic.com email address.");
    return;
  }
  if (activeLoginTab === 'company' && evaluatedRole !== 'company') {
    alert("Access Denied: Partner Hub requires a corporate email (e.g., name@company.com).");
    return;
  }
  if (activeLoginTab === 'user' && evaluatedRole !== 'user') {
    alert("Access Denied: User tab requires a consumer email (e.g., name@gmail.com).");
    return;
  }

  if (isRegisterMode) {
    const existing = dbUsers.find(u => u.email === email);
    if (existing) {
      alert("An account with this email already exists. Please log in.");
      isRegisterMode = false;
      toggleAuthMode(new Event('click'));
      return;
    }

    const newUser = {
      email: email,
      pass: pass,
      role: evaluatedRole,
      name: nameVal || email.split('@')[0].toUpperCase()
    };

    dbUsers.push(newUser);
    localStorage.setItem('diptronic_db_users', JSON.stringify(dbUsers));
    alert("Account successfully created! Please sign in with your credentials.");
    
    isRegisterMode = false;
    toggleAuthMode(new Event('click'));
    document.getElementById('loginEmail').value = email;
    return;
  }

  let foundUser = dbUsers.find(u => u.email === email && u.pass === pass);
  
  if (!foundUser) {
    foundUser = {
      email: email,
      pass: pass,
      role: evaluatedRole,
      name: nameVal || email.split('@')[0].toUpperCase()
    };
    dbUsers.push(foundUser);
    localStorage.setItem('diptronic_db_users', JSON.stringify(dbUsers));
  }

  isLoggedIn = true;
  loggedInUserEmail = foundUser.email;
  userRole = foundUser.role;
  companyEntityName = foundUser.name;

  loadUserCart(loggedInUserEmail);

  if (userRole === 'admin') {
    alert(`Logged in as Admin (${loggedInUserEmail}). Review desk unlocked.`);
    setRole('admin', document.getElementById('btnRoleAdmin'));
  } else if (userRole === 'company') {
    alert(`Logged in as Partner [${companyEntityName}]. Portal unlocked.`);
    setRole('company', document.getElementById('btnRoleCompany'));
  } else {
    alert(`Logged in successfully as User (${loggedInUserEmail}).`);
    setRole('user', document.getElementById('btnRoleMarket'));
  }

  updateAuthUI();
  closeLoginModal();
}

function updateAuthUI() {
  const authBtn = document.getElementById('authNavBtn');
  authBtn.innerText = `👤 ${loggedInUserEmail.split('@')[0].toUpperCase()} (LOGOUT)`;
  authBtn.onclick = handleLogout;
}

function handleLogout() {
  saveUserCart();
  isLoggedIn = false;
  loggedInUserEmail = "";
  userRole = 'user';
  companyEntityName = "Partner Company";
  cart = [];
  updateCartUI();

  const authBtn = document.getElementById('authNavBtn');
  authBtn.innerText = "👤 LOG IN";
  authBtn.onclick = openLoginModal;

  setRole('user', document.getElementById('btnRoleMarket'));
  alert("Logged out successfully.");
}

function setRole(role, btnElement) {
  if (role === 'company') {
    if (!isLoggedIn || userRole !== 'company') {
      alert("Access Denied: Partner Hub is restricted strictly to Partner accounts. Please log in as a Partner.");
      openLoginModal();
      switchLoginTab('company');
      return;
    }
  }

  if (role === 'admin') {
    if (!isLoggedIn || userRole !== 'admin') {
      alert("Access Denied: Admin Review is restricted strictly to Admin accounts. Please log in as an Admin.");
      openLoginModal();
      switchLoginTab('admin');
      return;
    }
  }

  document.querySelectorAll('.role-btn').forEach(b => b.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');

  document.getElementById('viewUser').style.display = (role === 'user') ? 'block' : 'none';
  document.getElementById('viewCompany').style.display = (role === 'company') ? 'block' : 'none';
  document.getElementById('viewAdmin').style.display = (role === 'admin') ? 'block' : 'none';

  if (role === 'company') {
    document.getElementById('companyNameDisplay').innerText = companyEntityName;
    renderCompanyDesk();
  }
  if (role === 'admin') renderAdminDesk();
}

function openPaymentModal() {
  if (cart.length === 0) return alert("Your cart is empty.");
  toggleCart(false);
  document.getElementById('paymentModal').classList.add('active');
}

function closePaymentModal() {
  document.getElementById('paymentModal').classList.remove('active');
}

function switchPaymentTab(method) {
  document.getElementById('upiDetailsPanel').style.display = method === 'UPI' ? 'block' : 'none';
  document.getElementById('cardDetailsPanel').style.display = method === 'Card' ? 'block' : 'none';
  document.getElementById('codDetailsPanel').style.display = method === 'COD' ? 'block' : 'none';
}

function executePayment() {
  const selectedRadio = document.querySelector('input[name="payMethod"]:checked');
  const selectedMethod = selectedRadio ? selectedRadio.value : 'UPI';
  
  if (selectedMethod === 'Card') {
    const cardNum = document.getElementById('cardNumberInput').value.trim();
    const cvv = document.getElementById('cardCvvInput').value.trim();
    if (!cardNum || !cvv) {
      alert("Please enter valid card details and CVV.");
      return;
    }
  }

  const methodNameText = selectedMethod === 'UPI' ? 'UPI' : selectedMethod === 'Card' ? 'Credit / Debit Card' : 'Cash on Delivery';
  alert(`Order Placed successfully via ${methodNameText}! Order protected under safe purchase guarantee.`);
  cart = [];
  saveUserCart();
  updateCartUI();
  closePaymentModal();
}

function getBadgeClass(tier) {
  if (tier === 'Brand New') return 'badge-new';
  if (tier === 'Refurbished') return 'badge-refurb';
  return 'badge-verified';
}

function renderStorefront() {
  const container = document.getElementById('productsCatalogContainer');
  if (!container) return;
  container.innerHTML = "";

  const q = (document.getElementById('storeSearch')?.value || "").toLowerCase();

  const filtered = marketInventory.filter(item => {
    const matchTier = activeTier === 'All' || item.tier === activeTier;
    const matchCat = activeCategory === 'All' || item.category === activeCategory;
    const matchText = item.title.toLowerCase().includes(q) || item.specs.toLowerCase().includes(q);
    return matchTier && matchCat && matchText;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div style="text-align: center; color: var(--text-dim); padding: 3rem;">No devices found matching your criteria.</div>`;
    return;
  }

  const grouped = {};
  filtered.forEach(product => {
    if (!grouped[product.category]) grouped[product.category] = [];
    grouped[product.category].push(product);
  });

  Object.keys(grouped).forEach(catName => {
    const banner = document.createElement('div');
    banner.className = 'pink-category-banner';
    banner.innerText = catName.toUpperCase();
    container.appendChild(banner);

    const grid = document.createElement('div');
    grid.className = 'grid-market';

    grouped[catName].forEach(product => {
      const specsListItems = product.specs.split(' • ').map(spec => `<li>${spec}</li>`).join('');
      const trendText = `${product.trendVal > 0 ? '📈 +' + product.trendVal + '% market demand' : '📉 ' + product.trendVal + '% market demand'}`;

      const card = document.createElement('div');
      card.className = 'market-card';
      card.innerHTML = `
        <span class="item-badge ${getBadgeClass(product.tier)}">${product.tier}</span>
        <div class="item-img-box">
          <img src="${product.imageUrl}" alt="${product.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=400&q=80'">
        </div>
        <h4 class="item-title" style="text-align: center; margin-bottom: 0.5rem;">${product.title}</h4>
        <div style="text-align: center; font-size: 1.1rem; font-weight: 700; color: var(--text); margin-bottom: 0.75rem;">
          Price: ₹${product.price.toLocaleString('en-IN')}
        </div>
        <div style="font-size: 0.85rem; color: var(--text-dim); margin-bottom: 0.5rem; font-weight: 600;">
          Specifications:
        </div>
        <ul style="font-size: 0.82rem; color: var(--text-dim); margin-bottom: 1rem; padding-left: 1.2rem; line-height: 1.4;">
          ${specsListItems}
        </ul>
        <p class="item-trend" style="text-align: center;">${trendText}</p>
        
        <div class="item-card-actions-stacked">
          <button class="btn btn-action btn-full" style="padding: 0.65rem; font-size: 0.85rem; justify-content: center;" onclick="handleProtectedAction(() => addToCart(${product.id}))">ADD TO CART</button>
        </div>
      `;
      grid.appendChild(card);
    });

    container.appendChild(grid);
  });
}

function filterTier(tier, btn) {
  activeTier = tier;
  document.querySelectorAll('.tier-pill-modern').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderStorefront();
}

function filterCategory(cat, btn) {
  activeCategory = (activeCategory === cat && cat !== 'All') ? 'All' : cat;
  document.querySelectorAll('.cat-dropdown-item').forEach(b => b.style.color = 'var(--text)');
  if (btn && activeCategory !== 'All') btn.style.color = 'var(--neon-cyan)';
  renderStorefront();
}

function filterStorefront() {
  renderStorefront();
}

function saveUserCart() {
  if (loggedInUserEmail) {
    localStorage.setItem('diptronic_cart_' + loggedInUserEmail, JSON.stringify(cart));
  }
}

function loadUserCart(email) {
  const savedCart = localStorage.getItem('diptronic_cart_' + email);
  cart = savedCart ? JSON.parse(savedCart) : [];
  updateCartUI();
}

function addToCart(id) {
  const prod = marketInventory.find(p => p.id === id);
  if (prod) {
    cart.push(prod);
    saveUserCart();
    updateCartUI();
    toggleCart(true);
  }
}

function toggleCart(show) {
  document.getElementById('cartOverlay').classList.toggle('active', show);
}

function updateCartUI() {
  const countEl = document.getElementById('cartCount');
  if (countEl) countEl.innerText = cart.length;
  const itemsContainer = document.getElementById('cartItems');
  if (!itemsContainer) return;
  
  if (cart.length === 0) {
    itemsContainer.innerHTML = `<p style="color:var(--text-dim); text-align:center; margin-top:2rem;">Your cart is empty.</p>`;
    document.getElementById('cartSubtotal').innerText = "₹0";
    return;
  }

  itemsContainer.innerHTML = cart.map((item, idx) => `
    <div class="cart-item-row">
      <div>
        <strong style="font-size: 0.95rem;">${item.title}</strong>
        <span style="font-size: 0.72rem; display:block; color:var(--text-dim);">${item.tier}</span>
        <p style="color: var(--neon-blue); font-size: 0.85rem; font-weight:700;">₹${item.price.toLocaleString('en-IN')}</p>
      </div>
      <button style="background:none; border:none; color:var(--neon-pink); cursor:pointer; font-size:1.1rem;" onclick="removeFromCart(${idx})">✕</button>
    </div>
  `).join('');

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById('cartSubtotal').innerText = "₹" + total.toLocaleString('en-IN');
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  saveUserCart();
  updateCartUI();
}

function updateBattery(val) {
  document.getElementById('batDisplay').innerText = val + '%';
  calculateValuation();
}

function previewMultipleUploads(e) {
  uploadedImagesCount = e.target.files.length;
  const previewDiv = document.getElementById('uploadPreview');
  previewDiv.innerText = uploadedImagesCount > 0 ? `${uploadedImagesCount} image(s) selected.` : "No files selected";
}

function previewDocsUpload(e) {
  uploadedDocsCount = e.target.files.length;
  const previewDiv = document.getElementById('docsPreview');
  previewDiv.innerText = uploadedDocsCount > 0 ? `${uploadedDocsCount} document(s) attached.` : "No documents attached";
}

function runAIVisionScan() {
  if (uploadedImagesCount === 0) {
    alert("Please upload verification images first before running the photo check.");
    return;
  }
  alert("🤖 Photo check complete! No major external damage detected.");
  document.getElementById('deviceGrade').value = "1.00";
  calculateValuation();
}

function calculateValuation() {
  const base = 42000;
  const grade = Number(document.getElementById('deviceGrade').value);
  const battery = Number(document.getElementById('batteryHealth').value);

  let batCoeff = 1.0;
  if (battery < 80) batCoeff = 0.80;
  else if (battery < 90) batCoeff = 0.92;

  const finalQuote = Math.round(base * grade * batCoeff);
  document.getElementById('quoteResult').innerText = "₹" + finalQuote.toLocaleString('en-IN');
  return finalQuote;
}

function submitTradeIn() {
  if (!isLoggedIn) {
    openLoginModal();
    return;
  }

  const modelName = document.getElementById('deviceModelName').value.trim();
  const imageFiles = document.getElementById('deviceImages').files;
  const docFiles = document.getElementById('supportingDocs').files;

  if (!modelName) {
    alert("Please provide a device name & model.");
    document.getElementById('deviceModelName').focus();
    return;
  }

  if (imageFiles.length === 0) {
    alert("Please upload at least one device photo.");
    document.getElementById('deviceImages').focus();
    return;
  }

  if (docFiles.length === 0) {
    alert("Please attach your bill or warranty proof.");
    document.getElementById('supportingDocs').focus();
    return;
  }

  const quote = calculateValuation();
  const battery = document.getElementById('batteryHealth').value;

  activeSubmission = {
    id: "DIP-" + Math.floor(1000 + Math.random() * 9000),
    title: modelName,
    value: quote,
    battery: battery + "%",
    imagesCount: imageFiles.length,
    docsCount: docFiles.length,
    stage: 1,
    partnerBids: [
      { partner: "Store Alpha", bid: Math.round(quote * 1.02) },
      { partner: "Store Beta", bid: Math.round(quote * 1.05) }
    ]
  };

  updateStepperUI();
  alert("Device submitted successfully! Reviewing offers from partner stores.");
}

function updateStepperUI() {
  if (!activeSubmission) return;

  document.getElementById('activeListingTitle').innerText = activeSubmission.title + " (" + activeSubmission.id + ")";
  const notes = document.getElementById('statusNotes');
  const bidsBox = document.getElementById('partnerBidsBox');
  const bidsList = document.getElementById('partnerBidsList');

  for (let i = 1; i <= 4; i++) {
    document.getElementById('step' + i).className = 'step-node';
  }

  if (activeSubmission.stage === 1) {
    document.getElementById('step1').className = 'step-node completed';
    document.getElementById('step2').className = 'step-node active';
    notes.innerHTML = `<strong>Stage: Store Offers Review</strong><br>Partner stores are bidding on your device.`;
    bidsBox.style.display = "block";
    bidsList.innerHTML = activeSubmission.partnerBids.map(b => `• ${b.partner}: <strong>₹${b.bid.toLocaleString('en-IN')}</strong>`).join('<br>');
  } else if (activeSubmission.stage === 2) {
    document.getElementById('step1').className = 'step-node completed';
    document.getElementById('step2').className = 'step-node completed';
    document.getElementById('step3').className = 'step-node active';
    notes.innerHTML = `<strong>Stage: Quality Check Pending</strong><br>Waiting for final verification.`;
    bidsBox.style.display = "none";
  } else if (activeSubmission.stage === 3) {
    document.getElementById('step1').className = 'step-node completed';
    document.getElementById('step2').className = 'step-node completed';
    document.getElementById('step3').className = 'step-node completed';
    document.getElementById('step4').className = 'step-node active';
    notes.innerHTML = `<strong style="color:var(--neon-emerald)">Stage: Published & Live</strong><br>Your device is now live on the store!`;
  }
}

function renderCompanyDesk() {
  const tbody = document.getElementById('companyTableBody');
  if (!tbody) return;
  tbody.innerHTML = "";

  if (!activeSubmission || activeSubmission.stage !== 1) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--text-dim);">No pending devices awaiting offers.</td></tr>`;
    return;
  }

  const topBid = Math.max(...activeSubmission.partnerBids.map(b => b.bid));

  tbody.innerHTML = `
    <tr>
      <td><strong>${activeSubmission.title}</strong><br><small style="color:var(--text-dim);">${activeSubmission.id}</small></td>
      <td>₹${activeSubmission.value.toLocaleString('en-IN')} (Top: ₹${topBid.toLocaleString('en-IN')})</td>
      <td>98.4% Quality Score</td>
      <td><span class="tag tag-amber">Active Review</span></td>
      <td>
        <button class="btn btn-action" style="padding: 4px 12px; font-size: 0.75rem;" onclick="companyVerify()">Accept & Make Offer</button>
      </td>
    </tr>
  `;
}

function companyVerify() {
  activeSubmission.stage = 2;
  renderCompanyDesk();
  updateStepperUI();
  alert(`Offer accepted by [${companyEntityName}]. Routed to Admin Review.`);
}

function renderAdminDesk() {
  const tbody = document.getElementById('adminTableBody');
  if (!tbody) return;
  tbody.innerHTML = "";

  if (!activeSubmission || activeSubmission.stage !== 2) {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; color:var(--text-dim);">No devices waiting for store publication.</td></tr>`;
    return;
  }

  tbody.innerHTML = `
    <tr>
      <td><strong>${activeSubmission.title}</strong></td>
      <td>₹${activeSubmission.value.toLocaleString('en-IN')}</td>
      <td><span class="tag tag-emerald">Checked & Verified</span></td>
      <td>
        <button class="btn btn-action" style="padding: 4px 12px; font-size: 0.75rem;" onclick="adminApprovePublish()">Publish to Store</button>
      </td>
    </tr>
  `;
}

function adminApprovePublish() {
  activeSubmission.stage = 3;

  marketInventory.unshift({
    id: Date.now(),
    title: activeSubmission.title,
    category: 'Phones',
    tier: "Direct Sale",
    price: activeSubmission.value,
    specs: `Verified Grade • Battery: ${activeSubmission.battery}`,
    imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
    trendVal: 3.5
  });

  renderAdminDesk();
  renderStorefront();
  updateStepperUI();
  alert("Approved and published to the store!");
}

function openPrivacyModal() { document.getElementById('privacyModal')?.classList.add('active'); }
function closePrivacyModal() { document.getElementById('privacyModal')?.classList.remove('active'); }
function openTermsModal() { document.getElementById('termsModal')?.classList.add('active'); }
function closeTermsModal() { document.getElementById('termsModal')?.classList.remove('active'); }
function openContactModal() { 
  document.getElementById('contactModal')?.classList.add('active');
  const successMsg = document.getElementById('contactSuccessMsg');
  if (successMsg) successMsg.style.display = 'none';
}
function closeContactModal() { document.getElementById('contactModal')?.classList.remove('active'); }

function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const msg = document.getElementById('contactMessage').value.trim();

  if(name && email && msg) {
    const successMsg = document.getElementById('contactSuccessMsg');
    if (successMsg) successMsg.style.display = 'block';
    setTimeout(() => {
      document.getElementById('contactName').value = '';
      document.getElementById('contactEmail').value = '';
      document.getElementById('contactMessage').value = '';
    }, 500);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  renderStorefront();
  calculateValuation();
});