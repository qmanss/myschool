// Дані таблиці
const classes = [
    { class: 9, points: 3, details: ["Насрали під двері крисі", "куриці"] },
    { class: 8, points: 100, details: ["навно", "пурки"] },
    { class: 7, points: 85, details: ["кіскі", "Танцювальний конкурс"] },
    { class: 6, points: 70, details: ["Робота на ярмарку", "Спортивні досягнення"] },
];

// Генерація таблиці
function populateLeaderboard() {
    const leaderboard = document.getElementById('leaderboard');
    leaderboard.innerHTML = ''; // Очищуємо таблицю
    classes.sort((a, b) => b.points - a.points); // Сортуємо за балами

    classes.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.class} клас</td>
            <td>${item.points}</td>
            <td><button onclick="showDetails(${index})">Детальніше</button></td>
        `;
        leaderboard.appendChild(row);
    });
}

// Модальне вікно для деталей
const modal = document.getElementById('detailsModal');
const closeModal = document.getElementById('closeModal');
const detailsList = document.getElementById('detailsList');

function showDetails(index) {
    const details = classes[index].details;
    detailsList.innerHTML = details.map(detail => `<li>${detail}</li>`).join('');
    modal.style.display = 'block';
}

// Закриття модального вікна
closeModal.onclick = () => {
    modal.style.display = 'none';
};

window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Завантажуємо дані при старті
document.addEventListener('DOMContentLoaded', populateLeaderboard);
