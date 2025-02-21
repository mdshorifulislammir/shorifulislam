function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
    }
}

// Function to update Google time (GMT)
function updateGoogleTime() {
    const googleTimeElement = document.getElementById('google-time');
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000); // UTC time
    const gmtDate = new Date(utc);
    googleTimeElement.innerHTML = gmtDate.toUTCString(); // Current time in GMT format
}

// Update the Google time every second
setInterval(updateGoogleTime, 1000);

// Function to toggle calculator visibility
function toggleCalculator() {
    const calculator = document.getElementById('calculator');
    if (calculator.style.display === "none" || calculator.style.display === "") {
        calculator.style.display = "block";
    } else {
        calculator.style.display = "none";
    }
}

// Function to append value to calculator input
function appendToInput(value) {
    const input = document.getElementById('calc-input');
    input.value += value;
}

// Function to calculate result
function calculateResult() {
    const input = document.getElementById('calc-input');
    try {
        input.value = eval(input.value); // Calculate the result
    } catch (e) {
        input.value = "Error"; // Handle error
    }
}

// Function to clear calculator input
function clearInput() {
    const input = document.getElementById('calc-input');
    input.value = ""; // Clear the input
}

// Function to fetch live news
async function fetchLiveNews() {
    const newsList = document.getElementById('news-list');
    newsList.innerHTML = ""; // Clear current news items

    try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=bd&apiKey=');
        const data = await response.json();
        data.articles.forEach(article => {
            const li = document.createElement('li');
            li.textContent = article.title; // Display article title
            newsList.appendChild(li);
        });
    } catch (error) {
        console.error("Error fetching news:", error);
    }
}

// Fetch live news every 60 seconds
setInterval(fetchLiveNews, 60000);
fetchLiveNews(); // Initial call to fetch news