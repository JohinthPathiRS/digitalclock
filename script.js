function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var day = now.getDate();
    var month = now.toLocaleString('default', { month: 'long' });
    var year = now.getFullYear();

    // Add leading zeros to hours, minutes, and seconds
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    // Update the clock's display
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('day').textContent = day;
    document.getElementById('month').textContent = month;
    document.getElementById('year').textContent = year;
}

// Update the clock every second
setInterval(updateClock, 1000);
