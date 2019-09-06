if ('serviceWorker' in navigator) {
    const swUrl = "./server-worker.js";
    navigator.serviceWorker
        .register(swUrl)
        .then(function () {
            console.log('Service Worker Registered');
        });
}