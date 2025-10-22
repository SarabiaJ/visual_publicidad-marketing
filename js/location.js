document.addEventListener("DOMContentLoaded", function () {
            const mapa = L.map('mapa').setView([10.981178, -74.785270], 17); // Coordenadas de la tienda
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
            }).addTo(mapa);

            L.marker([10.981196, -74.785270]).addTo(mapa)
            .bindPopup('Visual - Publicidad y Marketing')
            .openPopup();
        });