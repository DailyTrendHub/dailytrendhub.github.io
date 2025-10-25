// assets/js/script.js

document.addEventListener('DOMContentLoaded', function () {
  // ===== MOBILE MENU FUNCTIONALITY =====
  const hamburger = document.getElementById('hamburger-menu');
  const navLinks = document.querySelector('.nav-links');
  const menuOverlay = document.createElement('div');
  
  menuOverlay.className = 'menu-overlay';
  document.body.appendChild(menuOverlay);

  function toggleMenu() {
    const isActive = navLinks.classList.contains('active');
    navLinks.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    document.body.style.overflow = isActive ? 'auto' : 'hidden';
  }

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', toggleMenu);
    menuOverlay.addEventListener('click', toggleMenu);
  }

  // ===== THEME TOGGLE FUNCTIONALITY =====
  const themeToggle = document.getElementById('theme-toggle');
  
  function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark-mode') {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
      if (themeToggle) themeToggle.textContent = '☀️';
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
      if (themeToggle) themeToggle.textContent = '🌙';
    }
  }

  if (themeToggle) {
    initTheme();
    
    themeToggle.addEventListener('click', function() {
      const isDark = document.body.classList.contains('dark-mode');
      
      if (isDark) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
        themeToggle.textContent = '🌙';
      } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
        themeToggle.textContent = '☀️';
      }
    });
  }

// ===== SEARCH FUNCTIONALITY =====
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const headerSearch = document.getElementById('header-search');

if (searchInput && searchResults && headerSearch) {
  // Use the global variables from default.html
  const SEARCH_URL = '/dailytrendhubforyou/search.json';
  let postsIndex = [];
  let searchLoaded = false;

  console.log('🔍 Search URL:', SEARCH_URL);

  // Debounce function
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Load search index
  function loadSearchIndex() {
    console.log('📥 Loading search index from:', SEARCH_URL);
    
    fetch(SEARCH_URL)
      .then(response => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then(json => {
        postsIndex = json;
        searchLoaded = true;
        console.log('✅ Search index loaded with', json.length, 'posts');
      })
      .catch(error => {
        console.warn('❌ Search failed:', error);
        searchLoaded = true;
        postsIndex = [];
      });
  }

  // Render search results
  function renderResults(results) {
    searchResults.innerHTML = '';
    
    if (results.length === 0) {
      const noResults = document.createElement('div');
      noResults.className = 'no-results';
      noResults.textContent = 'No posts found';
      searchResults.appendChild(noResults);
    } else {
      results.slice(0, 8).forEach(post => {
        const resultItem = document.createElement('a');
        resultItem.className = 'search-item';
        resultItem.href = post.url;
        resultItem.textContent = post.title;
        searchResults.appendChild(resultItem);
      });
    }
    
    searchResults.classList.add('active');
  }

  // Perform search
  function performSearch() {
    const query = searchInput.value.trim().toLowerCase();
    
    if (query.length < 2) {
      searchResults.classList.remove('active');
      return;
    }

    if (!searchLoaded) {
      const loading = document.createElement('div');
      loading.className = 'no-results';
      loading.textContent = 'Loading search...';
      searchResults.innerHTML = '';
      searchResults.appendChild(loading);
      searchResults.classList.add('active');
      return;
    }

    const results = postsIndex.filter(post => {
      const titleMatch = post.title && post.title.toLowerCase().includes(query);
      const contentMatch = post.content && post.content.toLowerCase().includes(query);
      const categoryMatch = post.categories && 
        post.categories.some(cat => cat && cat.toLowerCase().includes(query));
      
      return titleMatch || contentMatch || categoryMatch;
    });

    console.log('🔎 Found', results.length, 'results for:', query);
    renderResults(results);
  }

  // Debounced search
  const debouncedSearch = debounce(performSearch, 300);

  // Event listeners
  searchInput.addEventListener('input', debouncedSearch);
  
  // Close search results when clicking outside
  document.addEventListener('click', function(event) {
    if (!headerSearch.contains(event.target)) {
      searchResults.classList.remove('active');
    }
  });

  // Keep results open when clicking on them
  searchResults.addEventListener('click', function(event) {
    event.stopPropagation();
  });

  // Load search index when page loads
  loadSearchIndex();
}
  // Close mobile menu when clicking on a link
  const navLinksList = document.querySelectorAll('.nav-links a');
  navLinksList.forEach(link => {
    link.addEventListener('click', function() {
      if (navLinks.classList.contains('active')) {
        toggleMenu();
      }
    });
  });
});