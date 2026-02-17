// A simple heart animation
const body = document.body;
setInterval(() => {
  const heart = document.createElement('div');
  heart.textContent = '💖';
  heart.className = 'floating-heart';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
  body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 500);

const style = document.createElement('style');
style.textContent = `
  .floating-heart {
    position: fixed;
    bottom: 0;
    font-size: 1.5rem;
    animation: floatUp 4s linear forwards;
  }
  @keyframes floatUp {
    from { transform: translateY(0); opacity: 1; }
    to { transform: translateY(-100vh); opacity: 0; }
  }
`;
document.head.appendChild(style);
