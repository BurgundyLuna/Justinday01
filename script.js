const wishForm = document.getElementById('wishForm');
const wishesFeed = document.getElementById('wishesFeed');

wishForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !message) {
    return;
  }

  const card = document.createElement('article');
  card.className = 'wish-card';
  card.innerHTML = `
    <h4>${escapeHtml(name)}</h4>
    <p>${escapeHtml(message)}</p>
  `;

  const emptyState = wishesFeed.querySelector('.empty-state');
  if (emptyState) {
    emptyState.remove();
  }

  wishesFeed.prepend(card);
  wishForm.reset();
});

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
