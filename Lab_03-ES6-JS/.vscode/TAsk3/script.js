const isError = false;

function fetchUsers() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (!isError) {
                const users = [
                    { id: 1, name: "Ali", email: "ali@email.com" },
                    { id: 2, name: "Sara", email: "sara@email.com" },
                    { id: 3, name: "Hassan", email: "hassan@email.com" }
                ];
                resolve(users);
            } else {
                reject("Failed to load user data!");
            }

        }, 3000); // 3 seconds delay

    });
}

function loadUsers() {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<p>Loading users...</p>";

    fetchUsers()
        .then(users => {
            resultDiv.innerHTML = users.map(user => `
                <div class="user-card">
                    <strong>${user.name}</strong><br>
                    ${user.email}
                </div>
            `).join("");
        })
        .catch(error => {
            resultDiv.innerHTML = `<p style="color:red;">${error}</p>`;
        });
}