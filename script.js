const tripForm = document.getElementById('tripForm');
const tripList = document.getElementById('tripList');

tripForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const destination = document.getElementById('destination').value;
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;
  const notes = document.getElementById('notes').value;

  const tripCard = document.createElement('div');
  tripCard.className = 'trip-card';
  tripCard.innerHTML = `
    <h3>${destination}</h3>
    <p><strong>From:</strong> ${startDate}</p>
    <p><strong>To:</strong> ${endDate}</p>
    ${notes ? `<p><strong>Notes:</strong> ${notes}</p>` : ''}
  `;

  tripList.appendChild(tripCard);

  tripForm.reset();
});
