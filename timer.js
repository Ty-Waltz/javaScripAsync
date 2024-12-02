let notificationInterval = null; 

let deadline = new Date("2024-12-07T00:00:00-05:00").getTime(); 

let x = setInterval(function () {
    let now = new Date().getTime(); 
    let time = deadline - now;

    let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((time % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML =
        minutes + " minutes " + seconds + " seconds";
    if (time < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);

function showNotification() {
    const notification = document.getElementById("notification");
    notification.style.display = "block";

    if (!notificationInterval) {
        notificationInterval = setInterval(() => {
            notification.style.display = "block";
        }, 5000); 
    }
}

function dismissNotification() {
    const notification = document.getElementById("notification");
    notification.style.display = "none";

    clearInterval(notificationInterval);
    notificationInterval = null;
}
function showNotificationAfterDelay(delayInMs) {
    setTimeout(() => {
        const notification = document.getElementById("notification");
        notification.style.display = "block";
    }, delayInMs); 
}

window.onload = function () {
    showNotificationAfterDelay(5000);
};