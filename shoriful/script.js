// Function to update the digital clock
function updateClock() {
    const now = new Date();
    const options = { timeZone: 'Asia/Dhaka', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const bangladeshTime = now.toLocaleTimeString('en-US', options);
    document.getElementById('digital-clock').textContent = bangladeshTime;
}

// Fetch Sehri and Iftar timings (dummy data for demonstration)
function fetchTimings() {
    // Replace this with actual API or data source
    const sehriTime = "5:04 AM";
    const iftarTime = "6:02 PM";

    document.getElementById('sehri-time').textContent = sehriTime;
    document.getElementById('iftar-time').textContent = iftarTime;

    return { sehriTime, iftarTime };
}

// Play Azan at Iftar time
function playAzanAtIftar(iftarTime) {
    const now = new Date();
    const [hour, minute] = iftarTime.split(/[: ]/);
    const ampm = iftarTime.includes("PM") ? "PM" : "AM";
    const iftarDateTime = new Date(now);

    if (ampm === "PM" && hour !== "12") {
        iftarDateTime.setHours(parseInt(hour) + 12);
    } else {
        iftarDateTime.setHours(parseInt(hour));
    }
    iftarDateTime.setMinutes(parseInt(minute));
    iftarDateTime.setSeconds(0);

    const timeUntilIftar = iftarDateTime - now;

    if (timeUntilIftar > 0) {
        setTimeout(() => {
            const azanAudio = document.getElementById('azan-audio');
            azanAudio.play();
        }, timeUntilIftar);
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    setInterval(updateClock, 1000); // Update clock every second
    const { iftarTime } = fetchTimings(); // Fetch timings
    playAzanAtIftar(iftarTime); // Play Azan at Iftar time
});