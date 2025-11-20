const tooltip = document.getElementById('tooltip');
const planets = document.querySelectorAll('.planet');

planets.forEach(planet => {
  // наведение мыши
  planet.addEventListener('mouseenter', () => {
    tooltip.innerHTML = `<strong>${planet.dataset.name}</strong><br>${planet.dataset.description}`;
    tooltip.style.display = 'block';
  });

  // движение мыши
  planet.addEventListener('mousemove', (e) => {
    const tooltipWidth = tooltip.offsetWidth;
    const viewportWidth = window.innerWidth;
    let left = e.pageX + 15;
    let top = e.pageY + 15;

    if (left + tooltipWidth + 5 > viewportWidth) {
      left = e.pageX - tooltipWidth - 15;
    }

    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';
  });

  // уход мыши
  planet.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
  });
});
