const data = {
  cards: ['part-01'],
  footers: ['part-01'],
  navbars: ['part-01'],
  buttons: ['part-01'],
};

const grid = document.getElementById('components-grid');
const title = document.getElementById('page-title');
const navButtons = document.querySelectorAll('[data-category]');

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

    // Make the whole card clickable
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
