const text = document.getElementById('text');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  setTimeout(() => {
    text.textContent = 'ボタンクをクリックしました';
  }, 2000);
});