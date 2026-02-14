const PORTFOLIO_DATA = {
    "bio": {
        "picture": "https://media.licdn.com/dms/image/v2/D4D03AQFMA1WsgEUPhQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1707637039273?e=1772668800&v=beta&t=er9F8HnGt-8HLZghJOFHEy9x6D5l-3TLEcxwxtblyLo",
        "name": "Bhaumik Gohel",
        "title": "SDET & AI Agent Developer",
        "tagline": "Building the Future of Automation, One Intelligent Agent at a Time.",
        "resume": "https://drive.google.com/file/d/1kjeVtjz4gj01fH4f0wkUBkjZ8Wpc9COH/view?usp=sharing",
        "about": "Results-driven Senior QA Automation Engineer with over 7 years of experience in manual, automation, and cross-browser testing. A strategic innovator and Inventor of the Smart AI Locator Chrome Extension, specializing in leveraging Agentic AI to accelerate dynamic locator generation and script conversion from Selenium to Playwright.",
        "skills": {
            "ai_skills": [
                "AI", "RAG", "MCP", "LangFlow", "n8n", "openCode", "LLM", "MCPs",
                "Prompt Eng", "GROQ", "AI Agents", "Ollama", "LM Studio", "Local LLM",
                "Langchain", "Generative AI", "Google AI Studio", "DeepEvAL", "PromptFoo", "Open AI Eval"
            ],
            "technical_skills": [
                "Manual Testing", "Automation Testing", "Selenium WebDriver", "TestNG", "POM",
                "Playwright Framework", "Java", "Maven", "Postman", "Jenkins", "Playwright",
                "Agentic AI", "AI Agents", "Cross-browser testing", "Android & iOS testing",
                "Web Automation", "API", "React", "Express", "SQLite"
            ],
            "tools_software": [
                "Eclipse", "Selenium IDE", "Postman", "Notepad++", "Jenkins", "Jira",
                "TestLink", "Google Anti gravity", "OpenClaw", "SQLite"
            ],
            "soft_skills": [
                "Team Collaboration", "Agile Methodology", "Daily Scrum Participation",
                "Retrospective Meetings", "QA Process Review"
            ]
        },
        "socials": {
            "github": "https://github.com/bhaumikgohel",
            "linkedin": "https://www.linkedin.com/in/bhaumik-gohel-b166917a/",
            "instagram": "https://www.instagram.com/bhaumik_gohel/",
            "whatsapp": "https://wa.me/918320268294",
            "email": "bhaumik41294@gmail.com"
        },
        "education": {
            "degree": "B.E Information Technology",
            "institution": "Atmiya Institute of Technology Science",
            "period": "07/2015 – 07/2018",
            "score": "8.4 CGPA"
        },
        "languages": ["English", "Hindi", "Gujarati (Native)"]
    },
    "projects": [
        {
            "id": "intelligent-test-plan-generator",
            "title": "Intelligent Test Plan Generator",
            "description": "A full-stack AI-powered application that automates test plan creation by integrating JIRA ticket data with LLM analysis. Features support for Groq, Ollama, and customizable PDF templates for professional QA workflows.",
            "tags": ["AI", "JIRA", "React", "Express", "QA"],
            "links": {
                "live": "https://intelligent-test-plan-generator.onrender.com",
                "repo": "https://github.com/bhaumikgohel/Intelligent-Test-Plan-Generator-Using-JIRA"
            }
        },
        {
            "id": "selenium-converter-pro",
            "title": "Universal Selenium to Playwright JS/TS Script Converter",
            "description": "An advanced AI-powered converter that transforms Selenium Java, C#, Python, and Puppeteer code into modern Playwright TypeScript and JavaScript scripts seamlessly.",
            "tags": ["AI", "Selenium", "Playwright", "TypeScript", "Automation"],
            "links": {
                "live": "https://ai-universal-selenium2-playwright-j.vercel.app/",
                "repo": "https://github.com/bhaumikgohel/AI-Universal-Selenium2Playwright_JSTS_Converter"
            }
        },
        {
            "id": "career-flow",
            "title": "CareerFlow | Pro Career Dashboard",
            "description": "A premium, local-first Kanban dashboard designed to streamline your job search journey. Track applications, manage interviews, and visualize your progress with a modern, glassmorphism-inspired UI.",
            "tags": ["AI", "Career", "Dashboard", "Local-first"],
            "links": {
                "live": "https://ai-job-application-tracking.vercel.app/",
                "repo": "https://github.com/bhaumikgohel/AI-Job-Application-Tracking"
            }
        },
        {
            "id": "smart-ai-locator",
            "title": "Smart AI Locator (Chrome Extension)",
            "description": "Inventor & Developer of a Chrome extension that leverages Agentic AI to accelerate dynamic locator generation and script conversion.",
            "tags": ["AI", "Chrome Extension", "Automation", "QA"],
            "links": {
                "live": "https://chromewebstore.google.com/detail/ecpbfmcejhgamolhopadjigfegofkiok?utm_source=item-share-cb",
                "repo": "#"
            }
        },
        {
            "id": "ai-testcase-generator",
            "title": "AI Test Case Generator",
            "description": "A privacy-focused, local-first AI Test Case Generator powered by Llama 3.2 and Ollama. This tool allows QA engineers to generate, classify, and archive professional test cases using local computer.",
            "tags": ["AI", "Automation", "QA"],
            "links": {
                "live": "https://ai-testcase-generator-nine.vercel.app/",
                "repo": "https://github.com/bhaumikgohel/AI-Testcase-Generator"
            }
        }
    ],
    "achievements": [
        "Generated AI Agents & AI Tools for QA and Automation.",
        "Selenium Web driver Java – Udemy/Coursera",
        "Employee of the Month for the year 2022 and 2023 at Amnex Infotech Pvt Ltd.",
        "Achieved 64% success rate in MMRDA Automation Project."
    ],
    "contact": {
        "email": "bhaumik41294@gmail.com",
        "location": "Ahmedabad, Gujarat, India"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded. Initializing Portfolio...');
    try {
        populatePortfolio(PORTFOLIO_DATA);
        initScrollReveal();
        initMobileMenu();
        initBackToTop();
        console.log('Portfolio successfully initialized.');
    } catch (err) {
        console.error('Failed to initialize portfolio:', err);
    }
});

function initBackToTop() {
    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function initMobileMenu() {
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('#nav-menu a');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target) && navMenu.classList.contains('active')) {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

function populatePortfolio(data) {
    const { bio, projects, contact, achievements } = data;

    // Bio & Hero (Set values directly)
    document.title = `${bio.name} | ${bio.title}`;
    const nameEl = document.getElementById('hero-name');
    const titleEl = document.getElementById('hero-title');
    const aboutEl = document.getElementById('about-text');

    // Add Profile Picture to Hero
    const heroSection = document.getElementById('hero');
    if (heroSection && bio.picture && !document.getElementById('profile-pic')) {
        const picContainer = document.createElement('div');
        picContainer.style.marginBottom = '30px';
        picContainer.innerHTML = `<img id="profile-pic" src="${bio.picture}" alt="${bio.name}" style="width: 150px; height: 150px; border-radius: 50%; border: 3px solid var(--accent-primary); box-shadow: var(--glow-shadow); object-fit: cover;">`;
        heroSection.insertBefore(picContainer, nameEl);
    }

    if (nameEl) nameEl.textContent = bio.name;
    if (titleEl) titleEl.textContent = bio.title;

    // Tagline in Hero
    const hero = document.getElementById('hero');
    if (hero && bio.tagline && !document.getElementById('hero-tagline')) {
        const taglineEl = document.createElement('p');
        taglineEl.id = 'hero-tagline';
        taglineEl.className = 'tagline reveal visible';
        taglineEl.textContent = bio.tagline;
        hero.insertBefore(taglineEl, document.getElementById('hero-socials'));
    }

    // Socials in Hero
    const heroSocials = document.getElementById('hero-socials');
    if (heroSocials) {
        heroSocials.innerHTML = `
            <a href="${bio.socials.github}" target="_blank" aria-label="GitHub" class="social-icon"><i class="fab fa-github"></i></a>
            <a href="${bio.socials.linkedin}" target="_blank" aria-label="LinkedIn" class="social-icon"><i class="fab fa-linkedin"></i></a>
            <a href="${bio.socials.instagram}" target="_blank" aria-label="Instagram" class="social-icon"><i class="fab fa-instagram"></i></a>
            <a href="${bio.socials.whatsapp}" target="_blank" aria-label="WhatsApp" class="social-icon"><i class="fab fa-whatsapp"></i></a>
            <a href="mailto:${bio.socials.email}" aria-label="Email" class="social-icon"><i class="fas fa-envelope"></i></a>
        `;
    }

    if (aboutEl) {
        aboutEl.innerHTML = `
            ${bio.about}
            <div style="margin-top: 20px; color: var(--accent-primary); font-weight: 600;">
                Languages: ${bio.languages.join(', ')}
            </div>
        `;
    }

    // Skills
    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer) {
        skillsContainer.innerHTML = '';
        Object.keys(bio.skills).forEach(category => {
            const div = document.createElement('div');
            const title = category.replace(/_/g, ' ').toUpperCase();
            div.className = 'reveal';
            div.innerHTML = `
                <h3 style="color: var(--accent-primary); margin-bottom: 20px; font-size: 1.1rem; letter-spacing: 0.1em;">${title}</h3>
                <ul class="skills-list" style="color: var(--text-dim); list-style: none; padding: 0; display: flex; flex-wrap: wrap; gap: 10px;">
                    ${bio.skills[category].map(skill => `<li style="background: rgba(255,255,255,0.05); padding: 5px 12px; border-radius: 4px; border: 1px solid var(--glass-border); font-size: 0.9rem;">${skill}</li>`).join('')}
                </ul>
            `;
            skillsContainer.appendChild(div);
        });
    }


    // Projects
    const projectsGrid = document.getElementById('projects-grid');
    if (projectsGrid) {
        projectsGrid.innerHTML = '';
        projects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card glass reveal';
            card.innerHTML = `
                <div style="height: 4px; background: var(--accent-gradient); border-radius: 2px; margin-bottom: 20px; width: 40px;"></div>
                <h3 style="margin-bottom: 15px;">${project.title}</h3>
                <p style="color: var(--text-dim); font-size: 0.95rem; margin: 0 0 25px 0; line-height: 1.6;">${project.description}</p>
                <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 30px;">
                    ${project.tags.map(tag => `<span style="font-size: 0.75rem; font-weight: 500; padding: 6px 14px; background: rgba(255,255,255,0.03); border-radius: 50px; border: 1px solid var(--glass-border); color: var(--accent-primary)">${tag}</span>`).join('')}
                </div>
                <div style="display: flex; gap: 20px; align-items: center; margin-top: auto;">
                    ${project.links.repo !== '#' ? `<a href="${project.links.repo}" target="_blank" style="font-size: 0.9rem; font-weight: 600; color: #fff; border-bottom: 2px solid var(--accent-primary); padding-bottom: 2px; opacity: 0.8; transition: 0.3s;">View Source</a>` : ''}
                    ${project.links.live !== '#' ? `<a href="${project.links.live}" target="_blank" style="font-size: 0.9rem; font-weight: 600; color: var(--text-dim); transition: 0.3s; padding-bottom: 2px; border-bottom: 2px solid transparent;">Live Demo</a>` : ''}
                </div>
            `;
            projectsGrid.appendChild(card);
        });
    }

    // Education
    const eduContainer = document.getElementById('education-container');
    if (eduContainer) {
        eduContainer.innerHTML = `
            <div class="glass" style="padding: 25px; border-radius: 15px;">
                <h3 style="color: #fff; margin-bottom: 10px;">${bio.education.degree}</h3>
                <p style="color: var(--accent-primary); font-weight: 600; margin-bottom: 5px;">${bio.education.institution}</p>
                <p style="color: var(--text-dim); font-size: 0.9rem;">${bio.education.period} | ${bio.education.score}</p>
            </div>
        `;
    }

    // Achievements
    const achContainer = document.getElementById('achievements-container');
    if (achContainer) {
        achContainer.innerHTML = `
            <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 15px;">
                ${achievements.map(ach => `
                    <li class="glass" style="padding: 15px 20px; border-radius: 10px; border-left: 4px solid var(--accent-primary); color: var(--text-dim); font-size: 0.95rem;">
                        ${ach}
                    </li>
                `).join('')}
            </ul>
        `;
    }

    // Contact
    const contactInfo = document.getElementById('contact-info');
    if (contactInfo) {
        contactInfo.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 15px; margin-bottom: 40px; font-size: 1.1rem; align-items: center;">
                <p><span style="color: var(--accent-primary); font-weight: 600;">Email:</span> ${contact.email}</p>
                <p><span style="color: var(--accent-primary); font-weight: 600;">Location:</span> ${contact.location}</p>
            </div>
        `;
    }
    const emailLink = document.getElementById('email-link');
    if (emailLink) emailLink.href = `mailto:${contact.email}`;
}

// PREMIUM SCROLL REVEAL
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

function initScrollReveal() {
    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });
}
