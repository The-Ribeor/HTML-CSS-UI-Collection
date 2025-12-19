const data = {
  cards: ['part-01', 'part-02'],
  footers: ['part-01'],
  navbars: ['part-01'],
  buttons: ['part-01'],
};

const grid = document.getElementById('components-grid');
const title = document.getElementById('page-title');
const navButtons = document.querySelectorAll('[data-category]');
const scrollToTopBtn = document.getElementById('scroll-to-top');

navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    navButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    render(btn.dataset.category);
  });
});

function render(category) {
  title.textContent = capitalize(category);
  grid.innerHTML = '';

  data[category].forEach(part => {
    const path = `components/${category}/${part}`;
    const url = `../${path}/index.html`;

    const card = document.createElement('div');
    card.className = 'component-card';

    card.addEventListener('click', () => {
      window.open(url, '_blank');
    });

    card.innerHTML = `
      <h3>${category} / ${part}</h3>

      <iframe src="${url}"></iframe>

      <div class="component-meta">
        <span>Located at: ${path}</span>
        <a href="${url}" target="_blank">Open →</a>
      </div>
    `;

    grid.appendChild(card);
  });
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Scroll to Top functionality
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 400) {
    scrollToTopBtn.classList.add('visible');
  } else {
    scrollToTopBtn.classList.remove('visible');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// const data = {
//   cards: ['part-01'],
//   footers: ['part-01'],
//   navbars: ['part-01'],
//   buttons: ['part-01'],
// };

// const grid = document.getElementById('components-grid');
// const title = document.getElementById('page-title');
// const navButtons = document.querySelectorAll('[data-category]');
// const scrollToTopBtn = document.getElementById('scroll-to-top');

// navButtons.forEach(btn => {
//   btn.addEventListener('click', () => {
//     navButtons.forEach(b => b.classList.remove('active'));
//     btn.classList.add('active');
//     render(btn.dataset.category);
//   });
// });

// function render(category) {
//   title.textContent = capitalize(category);
//   grid.innerHTML = '';

//   data[category].forEach(part => {
//     const path = `components/${category}/${part}`;
//     const url = `../${path}/index.html`;

//     const card = document.createElement('div');
//     card.className = 'component-card';

//     // 👉 ABRIR EN LA MISMA VENTANA
//     card.addEventListener('click', () => {
//       window.location.href = url;
//     });

//     card.innerHTML = `
//       <h3>${category} / ${part}</h3>

//       <iframe src="${url}"></iframe>

//       <div class="component-meta">
//         <span>Located at: ${path}</span>
//         <a href="${url}">Open →</a>
//       </div>
//     `;

//     grid.appendChild(card);
//   });
// }

// function capitalize(text) {
//   return text.charAt(0).toUpperCase() + text.slice(1);
// }

// // Scroll to Top functionality
// window.addEventListener('scroll', () => {
//   if (window.pageYOffset > 400) {
//     scrollToTopBtn.classList.add('visible');
//   } else {
//     scrollToTopBtn.classList.remove('visible');
//   }
// });

// scrollToTopBtn.addEventListener('click', () => {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth'
//   });
// });
