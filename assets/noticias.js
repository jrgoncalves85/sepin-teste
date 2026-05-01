// Filter buttons
const filtros = document.querySelectorAll('.filtros__btn');
const cards   = document.querySelectorAll('.noticia-card');

filtros.forEach(btn => {
  btn.addEventListener('click', () => {
    filtros.forEach(b => b.classList.remove('filtros__btn--active'));
    btn.classList.add('filtros__btn--active');

    const filter = btn.dataset.filter;

    cards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('noticia-card--hidden', !match);
    });
  });
});
