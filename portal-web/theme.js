// Dark/Light mode switch logic
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', function() {
  document.body.classList.toggle('light-mode');
  if(document.body.classList.contains('light-mode')) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
});
// Restore theme on page load
if(localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-mode');
}
