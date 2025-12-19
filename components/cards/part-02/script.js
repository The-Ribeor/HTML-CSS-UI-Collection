 document.querySelectorAll('.heart').forEach(h => {
      h.addEventListener('click', () => h.classList.toggle('active'))
    })