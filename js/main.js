const tooltip = document.getElementById('tooltip');

document.querySelectorAll('.planet').forEach(planet => {
  planet.addEventListener('mouseenter', () => {
    tooltip.innerHTML = `<strong>${planet.dataset.name}</strong><br>${planet.dataset.description}`;
    tooltip.style.display = 'block';
  });

  planet.addEventListener('mousemove', (e) => {
    tooltip.style.top = (e.pageY + 15) + 'px';
    tooltip.style.left = (e.pageX + 15) + 'px';
  });

  planet.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
  });

  planet.addEventListener('click', () => {
    window.location.href = planet.dataset.url;
  });
});
