// Language translations
const translations = {
    en: {
        siteTitle: "PDF Archive",
        heroTitle: "Explore Our Document Collection",
        heroSubtitle: "Browse, preview, and download PDF documents organized by category",
        searchPlaceholder: "Search documents...",
        searchBtn: "Search",
        categoriesTitle: "Categories",
        documentsTitle: "Documents",
        footerText: "© 2023 PDF Archive. All rights reserved.",
        documentTitle: "Document",
        downloadBtn: "Download",
        previewBtn: "Preview",
        allCategories: "All Documents",
        docCount: "documents available",
        noDocuments: "No documents found",
        noDocumentsHelp: "Try adjusting your search or filter criteria"
    },
    sw: {
        siteTitle: "Kumbukumbu za PDF",
        heroTitle: "Gundua Mkusanyiko wetu wa Nyaraka",
        heroSubtitle: "Vinjari, hakiki awali, na pakua nyaraka za PDF zilizopangwa kulingana na kategoria",
        searchPlaceholder: "Tafuta nyaraka...",
        searchBtn: "Tafuta",
        categoriesTitle: "Kategoria",
        documentsTitle: "Nyaraka",
        footerText: "© 2023 Kumbukumbu za PDF. Haki zote zimehifadhiwa.",
        documentTitle: "Nyaraka",
        downloadBtn: "Pakua",
        previewBtn: "Hakiki",
        allCategories: "Nyaraka Zote",
        docCount: "nyaraka zilizopo",
        noDocuments: "Hakuna nyaraka zilizopatikana",
        noDocumentsHelp: "Badilisha utafutaji wako au vigezo vya kuchuja"
    },
    rw: {
        siteTitle: "Ububiko bwa PDF",
        heroTitle: "Shakisha Itsinda ry'Inyandiko",
        heroSubtitle: "Rondora, urebe mbere, kandi ukuramo inyandiko za PDF zishyizwe mu byiciro",
        searchPlaceholder: "Shakisha inyandiko...",
        searchBtn: "Shakisha",
        categoriesTitle: "Ibyiciro",
        documentsTitle: "Inyandiko",
        footerText: "© 2023 Ububiko bwa PDF. Amahoro yose arinda.",
        documentTitle: "Inyandiko",
        downloadBtn: "Kuramo",
        previewBtn: "Reba mbere",
        allCategories: "Inyandiko Zose",
        docCount: "inyandiko zihari",
        noDocuments: "Nta nyandiko zishakishwe",
        noDocumentsHelp: "Gerageza gushakisha undi mushinga cyangwa guhindura ibisabwa"
    }
};

// Category icons
const categoryIcons = {
    "judah": "fas fa-star-of-david",
    "m.t zion report": "fas fa-mountain",
    "scanned pdf": "fas fa-file-image",
    "sivan": "fas fa-calendar-alt",
    "allul": "fas fa-calendar-alt",
    "bull": "fas fa-calendar-alt",
    "chesleu": "fas fa-calendar-alt",
    "tibet": "fas fa-globe-asia",
    "elul": "fas fa-calendar-alt",
    "nissan": "fas fa-calendar-alt",
    "ethanim": "fas fa-calendar-alt",
    "bulchisleu": "fas fa-calendar-alt",
    "zif": "fas fa-calendar-alt",
    "zifsivan": "fas fa-calendar-alt",
    "sebat": "fas fa-calendar-alt",
    "question mostly asked": "fas fa-question-circle",
    "tracks": "fas fa-road"
};

// Current language
let currentLanguage = 'en';

// Document data structure
const documents = [
    { id: 1, title: "Judah Report 2023", category: "judah", fileName: "judah_report_2023.pdf", date: "2023-05-15", size: "2.4 MB" },
    { id: 2, title: "M.T. Zion Analysis", category: "m.t zion report", fileName: "mt_zion_analysis.pdf", date: "2023-04-22", size: "3.1 MB" },
    { id: 3, title: "Scanned Document 001", category: "scanned pdf", fileName: "scanned_doc_001.pdf", date: "2023-06-10", size: "1.8 MB" },
    { id: 4, title: "Sivan Monthly Report", category: "sivan", fileName: "sivan_monthly.pdf", date: "2023-05-30", size: "2.7 MB" },
    { id: 5, title: "Allul Findings", category: "allul", fileName: "allul_findings.pdf", date: "2023-04-15", size: "1.5 MB" },
    { id: 6, title: "Bull Quarterly", category: "bull", fileName: "bull_quarterly.pdf", date: "2023-03-20", size: "4.2 MB" },
    { id: 7, title: "Chesleu Analysis", category: "chesleu", fileName: "chesleu_analysis.pdf", date: "2023-02-28", size: "2.9 MB" },
    { id: 8, title: "Tibet Expedition", category: "tibet", fileName: "tibet_expedition.pdf", date: "2023-01-15", size: "5.3 MB" },
    { id: 9, title: "Elul Monthly", category: "elul", fileName: "elul_monthly.pdf", date: "2022-12-10", size: "2.1 MB" },
    { id: 10, title: "Nissan Report", category: "nissan", fileName: "nissan_report.pdf", date: "2022-11-05", size: "3.6 MB" },
    { id: 11, title: "Ethanim Studies", category: "ethanim", fileName: "ethanim_studies.pdf", date: "2022-10-20", size: "2.8 MB" },
    { id: 12, title: "Bulchisleu Analysis", category: "bulchisleu", fileName: "bulchisleu_analysis.pdf", date: "2022-09-15", size: "3.3 MB" },
    { id: 13, title: "Zif Report", category: "zif", fileName: "zif_report.pdf", date: "2022-08-22", size: "2.5 MB" },
    { id: 14, title: "Zifsivan Combined", category: "zifsivan", fileName: "zifsivan_combined.pdf", date: "2022-07-30", size: "4.7 MB" },
    { id: 15, title: "Sebat Findings", category: "sebat", fileName: "sebat_findings.pdf", date: "2022-06-18", size: "1.9 MB" },
    { id: 16, title: "FAQ Document", category: "question mostly asked", fileName: "faq_document.pdf", date: "2022-05-05", size: "1.2 MB" },
    { id: 17, title: "Tracks Report", category: "tracks", fileName: "tracks_report.pdf", date: "2022-04-12", size: "3.8 MB" }
];

// Get unique categories
const categories = [...new Set(documents.map(doc => doc.category))];

// DOM elements
const languageSelect = document.getElementById('language-select');
const siteTitle = document.getElementById('site-title');
const heroTitle = document.getElementById('hero-title');
const heroSubtitle = document.getElementById('hero-subtitle');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const categoriesTitle = document.getElementById('categories-title');
const documentsTitle = document.getElementById('documents-title');
const categoriesGrid = document.querySelector('.categories-grid');
const documentsContainer = document.querySelector('.documents-container');
const footerText = document.getElementById('footer-text');
const docCount = document.getElementById('doc-count');
const gridViewBtn = document.getElementById('grid-view');
const listViewBtn = document.getElementById('list-view');

// Initialize the application
function init() {
    // Set up language switcher
    languageSelect.addEventListener('change', (e) => {
        currentLanguage = e.target.value;
        updateLanguage();
        renderCategories();
        renderDocuments();
        updateDocumentCount();
    });
    
    // Set up search functionality
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
    
    // Set up view controls
    gridViewBtn.addEventListener('click', () => switchView('grid'));
    listViewBtn.addEventListener('click', () => switchView('list'));
    
    // Initial render
    updateLanguage();
    renderCategories();
    renderDocuments();
    updateDocumentCount();
}

// Update language throughout the page
function updateLanguage() {
    const t = translations[currentLanguage];
    
    siteTitle.textContent = t.siteTitle;
    heroTitle.textContent = t.heroTitle;
    heroSubtitle.textContent = t.heroSubtitle;
    searchInput.placeholder = t.searchPlaceholder;
    searchBtn.textContent = t.searchBtn;
    categoriesTitle.textContent = t.categoriesTitle;
    documentsTitle.textContent = t.documentsTitle;
    footerText.textContent = t.footerText;
    updateDocumentCount();
}

// Update document count
function updateDocumentCount(filteredDocs = documents) {
    const t = translations[currentLanguage];
    docCount.textContent = `${filteredDocs.length} ${t.docCount}`;
}

// Switch between grid and list view
function switchView(viewType) {
    if (viewType === 'grid') {
        documentsContainer.classList.remove('list-view');
        documentsContainer.classList.add('grid-view');
        gridViewBtn.classList.add('active');
        listViewBtn.classList.remove('active');
    } else {
        documentsContainer.classList.remove('grid-view');
        documentsContainer.classList.add('list-view');
        listViewBtn.classList.add('active');
        gridViewBtn.classList.remove('active');
    }
}

// Render categories
function renderCategories() {
    const t = translations[currentLanguage];
    
    categoriesGrid.innerHTML = `
        <div class="category-card active" data-category="all">
            <i class="fas fa-folder-open category-icon"></i>
            <span>${t.allCategories}</span>
        </div>
    `;
    
    categories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.innerHTML = `
            <i class="${categoryIcons[category] || 'fas fa-file-pdf'} category-icon"></i>
            <span>${category}</span>
        `;
        categoryCard.dataset.category = category;
        
        categoryCard.addEventListener('click', () => {
            // Remove active class from all categories
            document.querySelectorAll('.category-card').forEach(card => {
                card.classList.remove('active');
            });
            
            // Add active class to clicked category
            categoryCard.classList.add('active');
            
            // Filter documents
            filterDocumentsByCategory(category);
        });
        
        categoriesGrid.appendChild(categoryCard);
    });
}

// Render documents
function renderDocuments(filteredDocs = documents) {
    const t = translations[currentLanguage];
    
    documentsContainer.innerHTML = '';
    
    if (filteredDocs.length === 0) {
        documentsContainer.innerHTML = `
            <div class="no-documents">
                <i class="fas fa-search fa-3x"></i>
                <h3>${t.noDocuments}</h3>
                <p>${t.noDocumentsHelp}</p>
            </div>
        `;
        return;
    }
    
    filteredDocs.forEach(doc => {
        const documentCard = document.createElement('div');
        documentCard.className = 'document-card';
        
        const isListView = documentsContainer.classList.contains('list-view');
        
        documentCard.innerHTML = `
            <div class="document-header">
                <i class="fas fa-file-pdf document-icon"></i>
                <div class="document-info">
                    <h4 class="document-title">${doc.title}</h4>
                    <span class="document-category">${doc.category}</span>
                    ${isListView ? `
                        <div class="document-meta">
                            <span><i class="fas fa-calendar"></i> ${doc.date}</span>
                            <span><i class="fas fa-weight-hanging"></i> ${doc.size}</span>
                        </div>
                    ` : ''}
                </div>
            </div>
            <div class="document-actions">
                <button class="btn btn-download" data-id="${doc.id}">
                    <i class="fas fa-download"></i> ${t.downloadBtn}
                </button>
                <button class="btn btn-preview" data-id="${doc.id}">
                    <i class="fas fa-eye"></i> ${t.previewBtn}
                </button>
            </div>
        `;
        
        documentsContainer.appendChild(documentCard);
    });
    
    // Add event listeners to buttons
    document.querySelectorAll('.btn-download').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const docId = e.target.closest('.btn').dataset.id;
            downloadDocument(docId);
        });
    });
    
    document.querySelectorAll('.btn-preview').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const docId = e.target.closest('.btn').dataset.id;
            previewDocument(docId);
        });
    });
}

// Filter documents by category
function filterDocumentsByCategory(category) {
    if (category === 'all') {
        renderDocuments();
        updateDocumentCount();
        return;
    }
    
    const filteredDocs = documents.filter(doc => doc.category === category);
    renderDocuments(filteredDocs);
    updateDocumentCount(filteredDocs);
}

// Handle search
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        renderDocuments();
        updateDocumentCount();
        return;
    }
    
    const filteredDocs = documents.filter(doc => 
        doc.title.toLowerCase().includes(searchTerm) || 
        doc.category.toLowerCase().includes(searchTerm)
    );
    
    renderDocuments(filteredDocs);
    updateDocumentCount(filteredDocs);
}

// Download document (placeholder function)
function downloadDocument(docId) {
    const doc = documents.find(d => d.id == docId);
    if (doc) {
        // In a real implementation, this would link to the actual PDF file
        alert(`Downloading: ${doc.title}`);
        // window.location.href = `pdfs/${doc.fileName}`;
    }
}

// Preview document (placeholder function)
function previewDocument(docId) {
    const doc = documents.find(d => d.id == docId);
    if (doc) {
        // In a real implementation, this would open a PDF viewer
        alert(`Previewing: ${doc.title}`);
        // window.open(`pdfs/${doc.fileName}`, '_blank');
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);