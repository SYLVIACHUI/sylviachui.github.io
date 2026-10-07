// Navigation stays usable without JavaScript; native details elements handle project expansion.
const navigation = [...document.querySelectorAll('.profile nav a')];
const sections = navigation.map(link => document.querySelector(link.getAttribute('href')));
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting);
    if (!visible.length) return;
    const id = visible[0].target.id;
    navigation.forEach(link => {
      if (link.getAttribute('href') === `#${id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-5% 0px -65% 0px', threshold: 0 });
  sections.forEach(section => observer.observe(section));
}
document.getElementById('print-button').addEventListener('click', () => window.print());
let detailsBeforePrint = [];
window.addEventListener('beforeprint', () => {
  detailsBeforePrint = [...document.querySelectorAll('details')].map(detail => [detail, detail.open]);
  detailsBeforePrint.forEach(([detail]) => { detail.open = true; });
});
window.addEventListener('afterprint', () => {
  detailsBeforePrint.forEach(([detail, open]) => { detail.open = open; });
});
