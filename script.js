const/tos-button = document.getElementById('tos-button');
const/privacy-button = document.getElementById('privacy-button');

/tos-button.addEventListener('click', () => {
  const/tos-content = document.getElementById('tos-content');
  if (/tos-content.style.display === 'none') {
    /tos-content.style.display = 'block';
    /tos-button.textContent = 'Hide TOS';
} else {
    /tos-content.style.display = 'none';
    /tos-button.textContent = 'View TOS';
}

/privacy-button.addEventListener('click', () => {
  const/privacy-content = document.getElementById('privacy-content');
 if (/privacy-content.style.display === 'none') {
   /privacy-content.style.display = 'block';
   /privacy-button.textContent = 'Hide Privacy Policy';
 } else {
   /privacy-content.style.display = 'none';
   /privacy-button.textContent = 'View Privacy Policy';
 }
