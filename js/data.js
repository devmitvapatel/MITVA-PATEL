/* =========================================================
   PORTFOLIO DATA — edit this file to update your content
   ========================================================= */

var PROFILE = {
    name: "Mitva Patel",
    firstName: "Mitva",
    initials: "MP",
    role: "Full Stack Developer",
    email: "mitva.patel024@gmail.com",
    phone: "+91 93282 90795",
    whatsapp: "919328290795",
    linkedin: "",                                   // e.g. "linkedin.com/in/mitva-patel" — hidden while empty
    github: "",                                     // e.g. "github.com/mitvapatel" — hidden while empty
    noticePeriod: "Negotiable",
    location: "Ahmedabad, Gujarat",
    address: "Ahmedabad, Gujarat, India",
    resume: "resume.html",
    photo: ""                                       // e.g. "images/mitva.jpg" — initials are shown while empty
};

/* level: 90+ Expert • 84+ Advanced • 70+ Proficient • below Familiar */
var SKILLS = [
    // ---------- BACKEND ----------
    { name: "C#", cat: "backend", tag: "CORE LANGUAGE", years: "3.5+", level: 92, icon: "devicon-csharp-plain colored", color: "#a179dc",
      desc: "Strongly-typed, object-oriented development for reliable backends.",
      points: ["OOP & SOLID principles", "Async / await", "Generics, collections & LINQ", "Exception handling & clean code"] },
    { name: "ASP.NET Core", cat: "backend", tag: "PRIMARY FRAMEWORK", years: "3.5+", level: 92, icon: "devicon-dotnetcore-plain colored", color: "#512bd4",
      desc: "Scalable web applications and APIs for CRM and HRMS products.",
      points: ["Middleware & dependency injection", "Configuration & environments", "Validation & error handling", "Logging"] },
    { name: "ASP.NET MVC", cat: "backend", tag: "WEB FRAMEWORK", years: "3.5+", level: 88, icon: "devicon-dot-net-plain colored", color: "#512bd4",
      desc: "Server-rendered web apps with MVC architecture and Razor views.",
      points: ["Razor views & partials", "Model binding & validation", "Admin panels", "CRUD modules"] },
    { name: "ASP.NET Core Web API", cat: "backend", tag: "API DESIGN", years: "3.5+", level: 92, icon: "fa-solid fa-plug", color: "#0d9488",
      desc: "RESTful APIs for frontend applications and third-party integrations.",
      points: ["RESTful design", "Swagger / OpenAPI docs", "Pagination, filtering & sorting", "Third-party integrations"] },
    { name: "Entity Framework Core", cat: "backend", tag: "ORM", years: "3.5+", level: 88, icon: "fa-solid fa-database", color: "#6d28d9",
      desc: "Data access, data modelling and migrations with EF Core.",
      points: ["Code-first models", "Migrations", "Relationships", "Optimised queries"] },
    { name: "LINQ", cat: "backend", tag: "QUERY LAYER", years: "3.5+", level: 88, icon: "fa-solid fa-filter", color: "#7c3aed",
      desc: "Clean, readable queries over collections and databases.",
      points: ["Filtering & projections", "Joins & grouping", "Aggregations", "Deferred execution"] },
    { name: "JWT & Role-based Auth", cat: "backend", tag: "SECURITY", years: "3.5+", level: 88, icon: "fa-solid fa-shield-halved", color: "#16a34a",
      desc: "JWT authentication and role-based authorization to secure application access.",
      points: ["JWT tokens", "Role-based authorization", "Secure endpoints", "Authentication flows"] },

    // ---------- FRONTEND ----------
    { name: "React.js", cat: "frontend", tag: "COMPONENT UI", years: "1+", level: 74, icon: "devicon-react-original colored", color: "#61dafb",
      desc: "Component-based UIs connected to ASP.NET Core Web APIs.",
      points: ["Functional components & hooks", "Props & state", "API integration", "Forms & validation"] },
    { name: "React Hooks", cat: "frontend", tag: "STATE & EFFECTS", years: "1+", level: 76, icon: "devicon-react-original colored", color: "#61dafb",
      desc: "Reusable logic and state management inside functional components.",
      points: ["useState & useEffect", "useContext", "useMemo & useCallback", "Custom hooks"] },
    { name: "Redux Toolkit", cat: "frontend", tag: "GLOBAL STATE", years: "1+", level: 70, icon: "devicon-redux-original colored", color: "#764abc",
      desc: "Predictable global state for larger React applications.",
      points: ["Slices & store setup", "createAsyncThunk for API calls", "Selectors", "Redux DevTools"] },
    { name: "React Router", cat: "frontend", tag: "ROUTING", years: "1+", level: 74, icon: "devicon-reactrouter-plain colored", color: "#ca4245",
      desc: "Client-side routing for single-page applications.",
      points: ["Nested routes & layouts", "Route params", "Protected routes (JWT / roles)", "Navigation & redirects"] },
    { name: "Axios", cat: "frontend", tag: "HTTP CLIENT", years: "1+", level: 76, icon: "devicon-axios-plain colored", color: "#5a29e4",
      desc: "Calling ASP.NET Core Web APIs from React.",
      points: ["Axios instances", "JWT interceptors", "Error handling", "Loading states"] },
    { name: "Material UI", cat: "frontend", tag: "COMPONENT LIBRARY", years: "1+", level: 68, icon: "devicon-materialui-plain colored", color: "#007fff",
      desc: "Ready-made, responsive React components for admin dashboards.",
      points: ["Data grids & tables", "Forms & dialogs", "Theming", "Responsive layouts"] },
    { name: "React Hook Form", cat: "frontend", tag: "FORMS", years: "1+", level: 68, icon: "fa-solid fa-list-check", color: "#ec5990",
      desc: "Fast, validated forms in React.",
      points: ["Form state", "Validation rules", "Yup schema validation", "API error mapping"] },
    { name: "JavaScript", cat: "frontend", tag: "CORE LANGUAGE", years: "3.5+", level: 80, icon: "devicon-javascript-plain colored", color: "#f7df1e",
      desc: "Interactive behaviour for web applications.",
      points: ["ES6+ syntax", "DOM & events", "Fetch / async calls", "Client-side validation"] },
    { name: "jQuery & AJAX", cat: "frontend", tag: "DOM & ASYNC", years: "3.5+", level: 84, icon: "devicon-jquery-plain colored", color: "#0769ad",
      desc: "Dynamic UI and AJAX calls in MVC applications.",
      points: ["AJAX with Web API", "Dynamic forms", "Unobtrusive validation", "Partial page updates"] },
    { name: "HTML5 & CSS3", cat: "frontend", tag: "SEMANTIC UI", years: "3.5+", level: 86, icon: "devicon-html5-plain colored", color: "#e34f26",
      desc: "Clean and responsive layouts.",
      points: ["Semantic HTML", "Flexbox & Grid", "Responsive design", "Cross-browser support"] },
    { name: "Bootstrap", cat: "frontend", tag: "UI FRAMEWORK", years: "3.5+", level: 86, icon: "devicon-bootstrap-plain colored", color: "#7952b3",
      desc: "Fast, consistent and mobile-responsive UI.",
      points: ["Grid system", "Components", "Responsive layouts", "Custom theming"] },

    // ---------- DATABASE ----------
    { name: "SQL Server", cat: "database", tag: "PRIMARY DATABASE", years: "3.5+", level: 90, icon: "devicon-microsoftsqlserver-plain colored", color: "#cc2927",
      desc: "Relational database design, joins, indexing and query optimisation.",
      points: ["Database design", "Joins & indexing", "Query optimisation", "SSMS"] },
    { name: "Stored Procedures", cat: "database", tag: "PERFORMANCE", years: "3.5+", level: 90, icon: "fa-solid fa-gauge-high", color: "#f97316",
      desc: "Optimised stored procedures for complex business operations.",
      points: ["Pagination, filtering & sorting", "Dynamic searching", "Complex business logic", "Reporting queries"] },
    { name: "Functions", cat: "database", tag: "REUSABLE LOGIC", years: "3+", level: 84, icon: "fa-solid fa-code", color: "#0ea5e9",
      desc: "Scalar and table-valued functions for reusable query logic.",
      points: ["Scalar functions", "Inline & multi-statement table-valued functions", "Date & string helpers", "Calculations for reports"] },
    { name: "Triggers", cat: "database", tag: "AUTOMATION", years: "2+", level: 80, icon: "fa-solid fa-bolt-lightning", color: "#eab308",
      desc: "AFTER and INSTEAD OF triggers for auditing and data rules.",
      points: ["Audit / history tables", "INSERT, UPDATE & DELETE triggers", "Data validation rules", "Using inserted & deleted tables"] },
    { name: "Views", cat: "database", tag: "DATA ACCESS", years: "3+", level: 84, icon: "fa-solid fa-table-list", color: "#14b8a6",
      desc: "Views that simplify complex joins for reports and APIs.",
      points: ["Reporting views", "Hiding complex joins", "Security through limited columns", "Indexed views basics"] },
    { name: "Joins & CTEs", cat: "database", tag: "QUERYING", years: "3.5+", level: 88, icon: "fa-solid fa-diagram-project", color: "#6366f1",
      desc: "Complex queries with joins, CTEs, window functions and subqueries.",
      points: ["INNER / LEFT / CROSS joins", "Common table expressions (CTE)", "Window functions (ROW_NUMBER, RANK)", "Subqueries & GROUP BY"] },
    { name: "Indexing & Query Tuning", cat: "database", tag: "PERFORMANCE", years: "3+", level: 84, icon: "fa-solid fa-magnifying-glass-chart", color: "#16a34a",
      desc: "Faster queries through indexes and execution plan analysis.",
      points: ["Clustered & non-clustered indexes", "Execution plans", "Avoiding table scans", "Query optimization"] },
    { name: "Transactions", cat: "database", tag: "DATA INTEGRITY", years: "3+", level: 80, icon: "fa-solid fa-arrow-right-arrow-left", color: "#f97316",
      desc: "Safe multi-step operations with transactions and error handling.",
      points: ["BEGIN / COMMIT / ROLLBACK", "TRY...CATCH in T-SQL", "Isolation levels basics", "Keeping payroll & invoice data consistent"] },

    // ---------- BACKGROUND, REAL-TIME & CLOUD ----------
    { name: "Hangfire", cat: "services", tag: "BACKGROUND JOBS", years: "2+", level: 86, icon: "fa-solid fa-clock-rotate-left", color: "#0ea5e9",
      desc: "Background and scheduled jobs for automated processing.",
      points: ["Scheduled / recurring jobs", "Invoice generation", "Payroll processing", "Automated system tasks"] },
    { name: "SignalR", cat: "services", tag: "REAL-TIME", years: "2+", level: 84, icon: "fa-solid fa-bolt", color: "#8b5cf6",
      desc: "Real-time notifications for role-based alerts across users and departments.",
      points: ["Hubs & groups", "Role-based alerts", "Live notifications", "Department-wide broadcasts"] },
    { name: "AWS S3", cat: "services", tag: "CLOUD STORAGE", years: "2+", level: 84, icon: "fa-brands fa-aws", color: "#ff9900",
      desc: "Secure storage and retrieval of business files.",
      points: ["Documents, PDFs & images", "Payslip storage", "Secure uploads & downloads", "Pre-signed URLs"] },
    { name: "Email Workflows", cat: "services", tag: "AUTOMATION", years: "2+", level: 84, icon: "fa-solid fa-envelope-circle-check", color: "#16a34a",
      desc: "Automated email notifications for approvals, payroll updates and alerts.",
      points: ["Leave approval emails", "Payroll updates", "System alerts", "Templated emails"] },

    // ---------- TOOLS ----------
    { name: "Visual Studio", cat: "tools", tag: "IDE", years: "3.5+", level: 92, icon: "devicon-visualstudio-plain colored", color: "#5c2d91",
      desc: "Primary IDE for .NET development and debugging.",
      points: ["Debugging", "NuGet packages", "Publishing", "Code analysis"] },
    { name: "VS Code", cat: "tools", tag: "EDITOR", years: "3.5+", level: 86, icon: "devicon-vscode-plain colored", color: "#007acc",
      desc: "Lightweight editor for frontend work.",
      points: ["Extensions", "Integrated terminal", "Git integration", "Frontend development"] },
    { name: "Git", cat: "tools", tag: "VERSION CONTROL", years: "3.5+", level: 86, icon: "devicon-git-plain colored", color: "#f05032",
      desc: "Branching and collaborative workflows.",
      points: ["Branching & merging", "Pull requests", "Code reviews", "Conflict resolution"] },
    { name: "Postman & Swagger", cat: "tools", tag: "API TOOLING", years: "3.5+", level: 90, icon: "devicon-postman-plain colored", color: "#ff6c37",
      desc: "API testing, documentation and integration validation.",
      points: ["Postman collections", "Swagger UI", "Environments", "Integration validation"] },
    { name: "Cursor", cat: "tools", tag: "AI EDITOR", years: "1+", level: 80, icon: "fa-solid fa-arrow-pointer", color: "#1c1917",
      desc: "AI-assisted coding for faster development.",
      points: ["AI pair programming", "Refactoring", "Code navigation", "Faster debugging"] }
];

/* freelance: true shows the "Freelance" badge and puts the project under the Freelance filter */
var PROJECTS = [
    {
        num: "01", key: "airoc", category: "CRM APPLICATION",
        title: "AIROC — CRM Application",
        desc: "CRM platform covering Leads, Clients, Sales, Training, Accounts and Reporting, with secure document storage, automated invoicing and real-time role-based notifications.",
        tags: ["ASP.NET Core Web API", "C#", "SQL Server", "EF Core", "AWS S3", "SignalR", "Hangfire"],
        filters: ["company", "dotnet", "sql", "realtime"],
        featured: true,
        highlight: "Leads • Clients • Sales • Training • Accounts • Reporting",
        role: "Full Stack Developer",
        challenge: "The business needed one system to manage leads, clients, sales, training and accounts — with large, searchable data sets, secure documents and instant alerts for the right teams.",
        solution: "Developed RESTful ASP.NET Core Web APIs for every CRM module, designed optimised SQL Server stored procedures for pagination, filtering, sorting and dynamic searching, integrated AWS S3 for documents, PDFs and images, added Hangfire jobs for automated invoice generation and built SignalR notifications for role-based alerts.",
        impact: ["RESTful APIs for Leads, Clients, Sales, Training, Accounts and Reporting", "Fast lists with server-side pagination, filtering, sorting and dynamic search", "Secure document, PDF and image storage on AWS S3", "Automated invoice generation and scheduled processing with Hangfire", "Real-time role-based alerts across users and departments with SignalR"]
    },
    {
        num: "02", key: "hrms", category: "HR MANAGEMENT SYSTEM",
        title: "HRMS — Human Resource Management System",
        desc: "HR platform for Employee Management, Leave Management and Payroll Processing, with automated email workflows, scheduled jobs and secure payslip storage.",
        tags: ["ASP.NET Core Web API", "C#", "SQL Server", "EF Core", "AWS S3", "Hangfire"],
        filters: ["company", "dotnet", "sql"],
        highlight: "Employees • Leave management • Payroll • Payslips",
        role: "Full Stack Developer",
        challenge: "HR teams handled employee records, leave approvals and payroll manually, with documents and payslips spread across emails and folders.",
        solution: "Developed HRMS modules for employee management, leave management and payroll processing, automated email notifications for leave approvals, payroll updates and workflow alerts, scheduled background processing with Hangfire and integrated AWS S3 for employee documents and payslips.",
        impact: ["Centralised employee management", "Leave apply / approve workflow with automated emails", "Scheduled payroll processing with Hangfire", "Secure employee document and payslip management on AWS S3"]
    },
    {
        num: "03", key: "company", category: "CORPORATE WEBSITE",
        title: "Company Website",
        desc: "Responsive company website built with ASP.NET MVC, with an admin panel for dynamic content management and mobile-friendly pages.",
        tags: ["ASP.NET MVC", "HTML5", "CSS3", "Bootstrap", "SQL Server", "AJAX"],
        filters: ["company", "dotnet", "sql", "website"],
        highlight: "Responsive • Admin-managed content • Mobile-first",
        role: "Full Stack Developer",
        challenge: "The company needed a modern website that the team could update without a developer and that worked well on mobile.",
        solution: "Developed the website with ASP.NET MVC and SQL Server, added an administrative panel for dynamic content management and built mobile-responsive interfaces with Bootstrap, HTML5, CSS3 and AJAX.",
        impact: ["Responsive pages across mobile, tablet and desktop", "Dynamic content managed from the admin panel", "AJAX-powered forms and partial updates", "Clean ASP.NET MVC structure that is easy to maintain"]
    },
    {
        num: "04", key: "jobportal", category: "JOB PORTAL",
        title: "Job Portal — Hiring Platform",
        desc: "Job portal where employers post jobs and manage applicants, and candidates build profiles, upload resumes, search and apply for jobs.",
        tags: ["ASP.NET Core Web API", "EF Core", "SQL Server", "JWT", "React.js", "Redux Toolkit", "Axios"],
        filters: ["company", "dotnet", "sql"],
        highlight: "Job search & filters • Resume upload • Applicant tracking",
        role: "Full Stack Developer",
        challenge: "Employers and job seekers needed a simple platform to connect, apply and track applications without back-and-forth emails.",
        solution: "Built ASP.NET Core Web APIs with JWT role-based access for candidates, employers and admins — job posting, search with filters, resume upload and application status tracking — backed by SQL Server stored procedures.",
        impact: ["Job search with keyword, location and category filters", "Resume upload and one-click apply", "Employer dashboard to shortlist and track applicants", "Role-based access for candidates, employers and admins"]
    },
    {
        num: "05", key: "importexport", category: "FREELANCE • BUSINESS WEBSITE",
        title: "Import / Export Business Website",
        desc: "Freelance website for an import–export company showcasing product categories, company profile and global reach, with product inquiry (RFQ) forms and WhatsApp contact for international buyers.",
        tags: ["ASP.NET MVC", "SQL Server", "Bootstrap", "jQuery", "AJAX"],
        filters: ["freelance", "dotnet", "sql", "website"],
        freelance: true,
        highlight: "Product catalogue • Inquiry / RFQ form • WhatsApp contact",
        role: "Freelance Full Stack Developer",
        challenge: "The client needed a professional online presence to build trust with overseas buyers and collect product inquiries.",
        solution: "Designed and developed a responsive ASP.NET MVC website with a category-wise product catalogue, product detail pages, inquiry / quote request forms, WhatsApp chat and an admin panel to add products and view inquiries.",
        impact: ["Professional brand presence for international buyers", "Category-wise product catalogue managed from admin", "Inquiry / RFQ leads delivered by email and dashboard", "SEO-friendly pages for better search visibility"]
    },
    {
        num: "06", key: "fpvdrone", category: "FREELANCE • PRODUCT WEBSITE",
        title: "FPV Drone Website",
        desc: "Freelance website for an FPV drone brand featuring drones, parts and kits with detailed specs, video gallery, services (aerial shoots and training) and order / booking inquiries.",
        tags: ["ASP.NET Core", "SQL Server", "Bootstrap", "JavaScript"],
        filters: ["freelance", "dotnet", "sql", "website"],
        freelance: true,
        highlight: "Product specs • Video gallery • Service booking",
        role: "Freelance Full Stack Developer",
        challenge: "The client wanted a visually engaging site to showcase FPV drones and footage, and to collect orders and service bookings online.",
        solution: "Built a fast ASP.NET Core website with product pages and spec tables, an FPV video gallery, service pages for aerial shoots and training, and inquiry / booking forms saved to SQL Server with an admin panel.",
        impact: ["Eye-catching product and footage showcase", "Detailed spec tables for drones, parts and kits", "Online order and service booking inquiries", "Admin panel to update products and view bookings"]
    }
];

var PROJECT_FILTERS = [
    { key: "all", label: "All" },
    { key: "company", label: "Company projects" },
    { key: "freelance", label: "Freelance" },
    { key: "dotnet", label: "ASP.NET" },
    { key: "sql", label: "SQL Server" },
    { key: "realtime", label: "SignalR & Hangfire" },
    { key: "website", label: "Websites" }
];

var EXPERIENCE = [
    {
        role: "Full Stack Developer", company: "Helix Tech-It Solutions", location: "Ahmedabad",
        period: "Aug 2023 – Present", duration: "Current role", current: true,
        highlight: "CRM & HRMS • Web API • SQL Server • Hangfire • SignalR • AWS S3",
        points: [
            "Build CRM and HRMS modules with C#, ASP.NET Core and SQL Server.",
            "Design secure REST APIs with JWT and role-based authorization.",
            "Optimise stored procedures for paging, filtering and dynamic search.",
            "Add Hangfire jobs, SignalR alerts and AWS S3 file storage.",
            "Build React.js screens and test APIs with Postman and Swagger."
        ],
        tech: ["C#", "ASP.NET Core", "SQL Server", "React.js", "Hangfire", "SignalR"]
    },
    {
        role: ".NET Developer Intern", company: "Helix Tech-It Solutions", location: "Ahmedabad",
        period: "Apr 2023 – Jul 2023", duration: "4 months",
        highlight: "Foundation & fundamentals",
        points: [
            "Built ASP.NET MVC features with CRUD and server-side validation.",
            "Worked with C#, Entity Framework and SQL Server.",
            "Helped with bug fixing, UI updates and code reviews."
        ],
        tech: ["ASP.NET MVC", "C#", "Entity Framework", "SQL Server"]
    }
];

var EDUCATION = [
    {
        degree: "Bachelor of Engineering — Computer Engineering",
        school: "Silver Oak College of Engineering & Technology",
        location: "Ahmedabad",
        period: "2019 – 2023"
    }
];

var ACHIEVEMENTS = [
    { title: "Rising Star Award", desc: "Recognized for outstanding project contributions.", icon: "fa-solid fa-star" },
    { title: "Star Performer of the Month", desc: "Recognized for quality work and timely delivery.", icon: "fa-solid fa-trophy" }
];
