// js/planet.js
const params = new URLSearchParams(window.location.search);
const planetName = params.get('name')?.toLowerCase(); // приводим к нижнему регистру

if (planetName) {
  fetch(`api/planet.php?name=${encodeURIComponent(planetName)}`)
    .then(res => res.json())
    .then(data => {
      console.log('DATA FROM PHP:', data); // проверяем ответ
      if (data.error) {
        document.getElementById('planetTitle').textContent = data.error;
        return;
      }

      // Заполняем страницу
      document.title = data.name;
      document.getElementById('pageTitle').textContent = data.name;
      document.getElementById('planetTitle').textContent = data.name;
      document.getElementById('planetImage').src = data.image || '';
      document.getElementById('planetImage').alt = data.name;
      document.getElementById('planetDescription').textContent = data.description;
      document.body.style.backgroundImage = `url('${data.background || ''}')`;

      fetch(data.questions)
        .then(res => res.json())
        .then(json => questions = json);
    })
    .catch(err => {
      console.error('Fetch error:', err);
      document.getElementById('planetTitle').textContent = "Error loading planet";
    });
} else {
  document.getElementById('planetTitle').textContent = "No planet selected";
}
