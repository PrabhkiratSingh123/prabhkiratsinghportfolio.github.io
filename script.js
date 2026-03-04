// ========================================
// Modern Portfolio JavaScript (Clean & Optimized)
// ========================================

// ========== Theme Toggle ==========
const themeToggle = document.getElementById('themeToggle');
const rootElement = document.documentElement;
const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');

// Check for saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    rootElement.classList.add('light-mode');
    moonIcon.style.display = 'block';
    sunIcon.style.display = 'none';
}

themeToggle.addEventListener('click', () => {
    rootElement.classList.toggle('light-mode');
    
    if (rootElement.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    } else {
        localStorage.setItem('theme', 'dark');
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    }
});


// ========== Typing Animation ==========
const typingText = document.getElementById('typingText');

const phrases = [
    'Building innovative web applications',
    'Exploring Data Science & AI',
    'Crafting clean, efficient code',
    'Turning ideas into digital reality'
];

let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function typePhrase() {
    const currentPhrase = phrases[currentPhraseIndex];

    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, currentCharIndex - 1);
        currentCharIndex--;
    } else {
        typingText.textContent = currentPhrase.substring(0, currentCharIndex + 1);
        currentCharIndex++;
    }

    let delay = isDeleting ? 30 : 50;

    if (!isDeleting && currentCharIndex === currentPhrase.length) {
        delay = 1500;
        isDeleting = true;
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    }

    setTimeout(typePhrase, delay);
}

window.addEventListener('load', typePhrase);

// ========== Premium Smooth Navigation ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {

        const targetId = this.getAttribute('href');

        // allow default smooth scroll behavior
        if (targetId.startsWith('#')) {

            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;

            e.preventDefault();

            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // close mobile menu safely
            if (navMenu) navMenu.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
        }
    });
});



// ========== Mobile Menu ==========
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}



// ===== Ultra Smooth Reveal Animation =====

const animatedElements = document.querySelectorAll('.animate-on-scroll');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${index * 0.08}s`;
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.15
});

animatedElements.forEach(el => revealObserver.observe(el));



// ========== Navbar Scroll Effect ==========
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});



// ========== Back To Top ==========
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



// ========== Modal Functionality ==========
const projectModal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.querySelector('.modal-close');

const projectDetails = {
    1: {
        title: 'ATM Simulator – Secure Banking Operations System',
        description: 'A full-stack ATM Simulator web application designed to simulate real banking workflows with secure user authentication and smooth transaction handling.',
        details: [
            'Secure user authentication system',
            'Balance inquiry & cash withdrawal',
            'Deposit & transaction history features',
            'Clean UI with backend validation & error handling',
            '99% consistency in transaction accuracy',
            'Designed for students, developers & banking-workflow learners'
        ],
        technologies: ['Python', 'HTML', 'CSS', 'JavaScript'],
        link: 'https://github.com/prabhkiratsingh123'
    },
    2: {
        title: 'Climate View – Real-Time Climate Intelligence Dashboard',
        description: 'A responsive, production-ready climate dashboard delivering live weather and air-quality intelligence with clear, actionable insights.',
        details: [
            'Live weather data integration',
            'AQI monitoring & air-quality intelligence',
            'Hourly & weekly forecasting',
            'Intelligent coaching features',
            'Responsive & production-ready design',
            'Google Analytics integrated'
        ],
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'OpenWeatherMap API', 'Google Analytics'],
        link: 'https://github.com/prabhkiratsingh123'
    },
    3: {
        title: 'StockPluse – Stock Market Analysis Platform',
        description: 'A comprehensive web-based Stock Market Analysis Platform that bridges the gap between raw market data and actionable insights, providing real-time tracking, technical indicators, and interactive visualizations for traders and investors.',
        details: [
            'Real-time stock price, volume & daily change tracking via yfinance',
            'Technical indicators: SMA, EMA, RSI & MACD auto-calculated',
            'Interactive candlestick & line charts powered by Plotly',
            'Historical data look-back for multi-month/year analysis',
            'Fundamental metrics: Market Cap, P/E Ratio & Dividend Yield',
            'Designed for beginners learning indicators and active traders scanning momentum'
        ],
        technologies: ['Python', 'Node.js', 'Plotly', 'yfinance', 'Pandas', 'NumPy'],
        link: 'https://github.com/PrabhkiratSingh123/StockPluse-Stock_market_analysis_platform-'
    },
    4: {
        title: 'Retail Sales & Feedback Dashboard – Power BI | 300K+ Records',
        description: 'An end-to-end Power BI analytics dashboard built on a 300,000+ row retail dataset. Covers sales, customer behaviour, product performance, and logistics operations — powered by a clean star schema and advanced DAX measures.',
        details: [
            'Cleaned & transformed 30+ messy columns using Power Query',
            'Star schema: Fact Table (Retail_Data) + 5 Dimension Tables (Customer, Product, Shipping, Feedback, Date)',
            'Advanced DAX: MoM, YoY, AOV, customer segmentation, brand rankings & delivery KPIs',
            'Sales Overview: total sales, orders, customers, category & country-wise trends',
            'Customer Insights: age, gender, income, new vs returning & rating trends',
            'Product Performance: top products, brands, categories & brand rating analysis',
            'Shipping & Operations: delivery success rate, payment methods & order status trends',
            'Dynamic titles, icons, navigation tabs & professional UI/UX enhancements'
        ],
        technologies: ['Power BI', 'DAX', 'Power Query', 'Star Schema', 'Data Modeling'],
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7404207648197218304/'
    },
    5: {
        title: 'Wine Quality Prediction – White & Red Wine ML Classification 🍷',
        description: 'An end-to-end Data Science project that predicts White & Red wine quality (Low / Medium / High) from physicochemical properties using five advanced ensemble ML models. CatBoost delivered the highest accuracy across both wine types.',
        details: [
            'Data preprocessing: Label Encoding, Standard Scaling & stratified train-test split',
            '5 ensemble models trained: Random Forest, Gradient Boosting, XGBoost, LightGBM & CatBoost',
            'CatBoost achieved the highest accuracy on both White & Red wine datasets',
            'Detailed classification reports, confusion matrices & accuracy comparison plots',
            'Feature importance: Alcohol, Volatile Acidity, Sulphates & Chlorides most influential',
            'Paired t-test & variance analysis — White wine models showed higher predictive stability',
            'Visual storytelling: accuracy plots, heatmaps & boxplots for comparative insight',
            'Dataset source: UCI Machine Learning Repository (White & Red Wine datasets)'
        ],
        technologies: ['Python', 'CatBoost', 'XGBoost', 'LightGBM', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
        link: 'https://archive.ics.uci.edu/dataset/186/wine+quality'
    }
};

document.querySelectorAll('.project-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        const projectId = btn.getAttribute('data-project');
        const project = projectDetails[projectId];

        if (project) displayProjectModal(project);
    });
});

function displayProjectModal(project) {
    modalBody.innerHTML = `
        <h2>${project.title}</h2>
        <p style="margin:15px 0;color:var(--text-secondary);">${project.description}</p>
        <ul style="margin-bottom:20px;">
            ${project.details.map(d => `<li>${d}</li>`).join('')}
        </ul>
        <div style="display:flex;flex-wrap:wrap;gap:10px;">
            ${project.technologies.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <a href="${project.link}" class="btn btn-primary" style="margin-top:15px;">View Project</a>
    `;

    projectModal.classList.add('active');
}

modalClose.addEventListener('click', () => {
    projectModal.classList.remove('active');
});

projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        projectModal.classList.remove('active');
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        projectModal.classList.remove('active');
    }
});



// ========== Live Background Dots (Optimized) ==========
const canvas = document.getElementById("background-canvas");
const ctx = canvas.getContext("2d");

let particles = [];
const particleCount = 30;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

class Particle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
        ctx.fillStyle = "rgba(102,126,234,0.6)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateParticles);
}

resizeCanvas();
initParticles();
animateParticles();

window.addEventListener("resize", () => {
    resizeCanvas();
    initParticles();
});
