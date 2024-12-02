async function fetchUserProfile() {
    await new Promise(resolve =>(resolve, 2000));
    
    const userData = {
    name: "John Doe",
    age: 30,
    email: "john@example.com"
    };
    return userData;
}
    async function displayUserProfile() {
        try {
            const userProfi1e = await fetchUserProfile();
            const userProfi1eE1ement = document.getE1ementById( 'userProfile' )
            userProfi1eE1ement. innerHTML = `
            <h2>User Profile</h2>
            <p><strong>Name:</strong> ${userProfi1e.name}</p>
            <p><strong>Age:</strong> ${userProfi1e.age}</p>
            <p><strong>Email:</strong>${userProfi1e .email}</p>
    `;
    } catch (error) {
        console.error("Error fetching user profile: ", error);
        const userProfi1eE1ement = document.getE1ementById( 'userProfile');
        userProfi1eE1ement. innerHTML ="<h2>Error loading user profile</h2>";
    }
}
 
document.addEventListener('DOMContentLoaded', displayUserProfile);