document.getElementById('btn').addEventListener('click', () => {
  const now = new Date();
  document.getElementById('out').textContent = `تم النقر الساعة ${now.toLocaleTimeString()} – بالتوفيق!`;
});
