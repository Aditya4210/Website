// Home Page Surprise Button
const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseText = document.getElementById('surpriseText');

if (surpriseBtn) {
  surpriseBtn.addEventListener('click', () => {
    surpriseText.textContent = "Riya, you're my forever Valentine! 💖 I love you more than words can say. 🥰";
    surpriseText.classList.remove('hidden');
  });
}