(() => {
  const input = document.getElementById('video-query');
  if (!input) return;
  const normalize = value => value.normalize('NFKC').toLocaleLowerCase('ja').replace(/[\s,、・'’"「」【】\[\]]/g, '');
  const cards = Array.from(document.querySelectorAll('.performance-card')).map(element => ({ element, text: normalize(element.dataset.search) }));
  document.querySelector('.video-search').hidden = false;
  input.addEventListener('input', () => {
    const query = normalize(input.value);
    let count = 0;
    cards.forEach(({ element, text }) => {
      element.hidden = !text.includes(query);
      if (!element.hidden) count++;
    });
    document.getElementById('video-count').textContent = count;
    document.getElementById('video-empty').hidden = count !== 0;
  });
})();
