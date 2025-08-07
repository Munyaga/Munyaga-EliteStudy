// Disable right-click
window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  alert('Right-click is disabled to protect content.');
});

// Detect PrintScreen key
window.addEventListener('keyup', function (e) {
  if (e.key === 'PrintScreen') {
    alert('Screenshots are not allowed on this platform!');
    document.body.style.filter = 'blur(10px)';
    setTimeout(() => {
      document.body.style.filter = 'none';
    }, 3000);
  }
});

// Attempt to detect screen recording or dev tools
setInterval(() => {
  if (
    window.outerHeight - window.innerHeight > 100 ||
    window.outerWidth - window.innerWidth > 100
  ) {
    alert('Suspicious activity detected. Inspect element or screen recording may be active.');
    window.location.href = '../login.html';
  }
}, 1500);

// Blur page when window loses focus
window.addEventListener('blur', () => {
  document.body.style.filter = 'blur(8px)';
});
window.addEventListener('focus', () => {
  document.body.style.filter = 'none';
});