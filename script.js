function showPage(pageId) {
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active");
  });
  document.getElementById(pageId).classList.add("active");
}

const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const nav = document.querySelector("nav");

mobileMenuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
    nav.classList.remove("active");
  }
});

// js for carousel
const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".carousel-slide");
const navContainer = document.querySelector(".carousel-nav");
let currentSlide = 0;

// Create navigation dots
slides.forEach((_, index) => {
  const dot = document.createElement("button");
  dot.classList.add("carousel-dot");
  dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
  dot.addEventListener("click", () => goToSlide(index));
  navContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".carousel-dot");

function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

function goToSlide(n) {
  currentSlide = n;
  const offset = -currentSlide * 100;
  carousel.style.transform = `translateX(${offset}%)`;
  updateDots();
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  goToSlide(currentSlide);
}

// Initialize the carousel
goToSlide(0);

// Auto-scroll every 5 seconds
setInterval(nextSlide, 2000);

// bento grid
const topperSlides = document.querySelectorAll(".topper-slide");
let currentTopperSlide = 0;

function showTopperSlide(n) {
  topperSlides.forEach((slide) => slide.classList.remove("active"));
  currentTopperSlide = (n + topperSlides.length) % topperSlides.length;
  topperSlides[currentTopperSlide].classList.add("active");
}

function nextTopperSlide() {
  showTopperSlide(currentTopperSlide + 1);
}

// Auto-advance toppers carousel
setInterval(nextTopperSlide, 4000);

// Restart news ticker when it ends
const newsTicker = document.querySelector(".news-ticker");
newsTicker.addEventListener("animationend", () => {
  newsTicker.style.animation = "none";
  void newsTicker.offsetWidth; // Trigger reflow
  newsTicker.style.animation = "tickerScroll 20s linear infinite";
});


// js for time table, mobile app
function openBranchesModal() {
  document.getElementById('branchesModal').classList.add('active');
}

function closeBranchesModal() {
  document.getElementById('branchesModal').classList.remove('active');
}

function showTimetable() {
  const selectedClass = document.getElementById('classSelect').value;
  if (selectedClass) {
      document.getElementById('timetableDisplay').classList.add('active');
  } else {
      alert('Please select a class');
  }
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById('branchesModal');
  if (event.target === modal) {
      closeBranchesModal();
  }
}

const months = [
  'April 2025', 'May 2025', 'June 2025', 'July 2025', 'August 2025', 
  'September 2025', 'October 2025', 'November 2025', 'December 2025',
  'January 2026', 'February 2026', 'March 2026'
];

let currentMonthIndex = 0;

const events = {
  'April 2025': [
      { date: '5', event: 'New Academic Year Begins' },
      { date: '15', event: 'Parent-Teacher Meeting' }
  ],
  'May 2025': [
      { date: '15', event: 'Summer Vacation Begins' }
  ],
  // Add events for other months
};

function updateCalendar() {
  document.getElementById('currentMonth').textContent = months[currentMonthIndex];
  
  // Update events list
  const monthEvents = events[months[currentMonthIndex]] || [];
  const eventsHTML = monthEvents.map(event => 
      `<div class="event-item">
          <span class="event-date">${event.date}</span>: ${event.event}
      </div>`
  ).join('');
  document.getElementById('monthEvents').innerHTML = eventsHTML;
}

function nextMonth() {
  currentMonthIndex = (currentMonthIndex + 1) % months.length;
  updateCalendar();
}

function previousMonth() {
  currentMonthIndex = (currentMonthIndex - 1 + months.length) % months.length;
  updateCalendar();
}

// Initialize calendar
updateCalendar();


// js for academic page
function showAcademicContent(section) {
  // Hide all content sections
  document.querySelectorAll(".academic-content").forEach((content) => {
    content.style.display = "none";
  });

  // Remove active class from all buttons
  document.querySelectorAll(".sidebar-nav button").forEach((button) => {
    button.classList.remove("active");
  });

  // Show selected content
  document.getElementById(`${section}-content`).style.display = "block";

  // Activate the correct button using data attribute
  document
    .querySelector(`button[data-section="${section}"]`)
    .classList.add("active");
}

// js for accordion
function toggleAccordion(header) {
  const item = header.parentElement;
  const isActive = item.classList.contains('active');
  
  // If it's a nested accordion, only close siblings within the same parent
  const parent = item.parentElement;
  const items = parent.getElementsByClassName('accordion-item');
  
  Array.from(items).forEach(accItem => {
      accItem.classList.remove('active');
  });
  
  if (!isActive) {
      item.classList.add('active');
  }
}

// gallery section js
function showGallerySection(sectionType) {
  // Update navigation buttons
  document.querySelectorAll('.gallery-nav button').forEach(button => {
      button.classList.remove('active');
  });
  event.target.classList.add('active');

  // Show selected section
  document.querySelectorAll('.gallery-section').forEach(section => {
      section.classList.remove('active');
  });
  if (sectionType === 'photo') {
      document.getElementById('photo-gallery').classList.add('active');
  } else {
      document.getElementById('video-gallery').classList.add('active');
  }
}

// branch change js
function switchBranch(branchNumber) {
  // Update button states
  document.querySelectorAll('.branch-btn').forEach(btn => {
      btn.classList.remove('active');
  });
  document.querySelector(`.branch-btn:nth-child(${branchNumber})`).classList.add('active');

  // Update content visibility
  document.querySelectorAll('.branch-content').forEach(content => {
      content.classList.remove('active');
  });
  document.getElementById(`branch${branchNumber}`).classList.add('active');
}

// uniform
function toggleUniform() {
  const content = document.getElementById('uniformContent');
  const arrow = document.querySelector('.dropdown-arrow');
}
// syllabus
function toggleSyllabus() {
  const content = document.getElementById('syllabusContent');
  const arrow = document.querySelector('.syllabus-section .dropdown-arrow');
}

// annual planner

function toggleMonth(monthId) {
  const content = document.getElementById(monthId);
  const arrow = content.previousElementSibling.querySelector('.dropdown-arrow');
  content.classList.toggle('active');
  arrow.textContent = content.classList.contains('active') ? '▲' : '▼';
}


// landing page
document.addEventListener('DOMContentLoaded', () => {
  // Always show landing page on first load or when no campus is selected
  if (!localStorage.getItem('campusSelected')) {
      // Do nothing - the landing page is already the entry point
  } else {
      // If a campus was previously selected, go to main site
      const selectedCampus = localStorage.getItem('selectedCampus') || 'downtown';
      changeBranch(selectedCampus);
  }
});

function selectCampus(campus) {
  // Mark that a campus has been selected
  localStorage.setItem('campusSelected', 'true');
  localStorage.setItem('selectedCampus', campus);
  
  // Redirect to main website
  window.location.href = 'main.html'; // Rename your existing website HTML to main.html
}

// Optional: Add a way to reset and show landing page again
function resetCampusSelection() {
  localStorage.removeItem('campusSelected');
  localStorage.removeItem('selectedCampus');
}