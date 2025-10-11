const tooltip = document.getElementById('tooltip');

document.querySelectorAll('.planet').forEach(planet => {
  planet.addEventListener('mouseenter', () => {
    tooltip.innerHTML = `<strong>${planet.dataset.name}</strong><br>${planet.dataset.description}`;
    tooltip.style.display = 'block';
  });

  planet.addEventListener('mousemove', (e) => {
    const tooltipWidth = tooltip.offsetWidth;
    const viewportWidth = window.innerWidth;
    
    let left = e.pageX + 15;
    let top = e.pageY + 15;

    if (left + tooltipWidth + 5 > viewportWidth) {
      left = e.pageX - tooltipWidth - 15;
    }

    tooltip.style.top = top + 'px';
    tooltip.style.left = left + 'px';
  });

  planet.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
  });

  planet.addEventListener('click', () => {
    window.location.href = planet.dataset.url;
  });
});
