// Theme Toggle
document.getElementById("themeToggle")?.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const theme = document.body.classList.contains("dark-theme") ? "Dark" : "Light";
    alert(`Switched to ${theme} Mode`);
});

// Form Enhancement + Validation
document.getElementById("contactForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("nameInput").value.trim();
    const message = document.getElementById("messageInput").value.trim();
    if (name === "" || message === "") {
        alert("Please fill out all fields.");
    } else {
        document.getElementById("response").innerText = `Thanks, ${name}. We'll get back to you soon!`;
        e.target.reset(); // Optional: reset form
    }
});

// Fetch API Integration
document.getElementById("loadUsersBtn")?.addEventListener("click", async () => {
    const userList = document.getElementById("userList");
    userList.innerHTML = "<li>Loading...</li>"; // Show loading message
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await res.json();
        userList.innerHTML = ""; // Clear the list before adding new users
        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = user.name;
            userList.appendChild(li);
        });
    } catch (err) {
        console.error("Failed to load users:", err);
        userList.innerHTML = "<li>Failed to load users. Please try again later.</li>";
    }
});

// Add an Interactive FAQ Component
document.querySelectorAll(".question").forEach((q) => {
    q.addEventListener("click", () => {
        const answer = q.nextElementSibling;
        answer.classList.toggle("visible");
        const isVisible = answer.classList.contains("visible");
        q.style.fontWeight = isVisible ? "bold" : "normal"; // Change font weight on toggle
    });
});