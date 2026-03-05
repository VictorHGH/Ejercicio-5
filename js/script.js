
        // --- Lógica del Reloj ---
        function startTime() {
            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
            m = checkTime(m);
            s = checkTime(s);
            document.getElementById('reloj').innerHTML = h + ":" + m + ":" + s;
            setTimeout(startTime, 500);
        }

        function checkTime(i) {
            if (i < 10) { i = "0" + i; }
            return i;
        }

        // --- Lógica de Modo Oscuro ---
        const themeButton = document.getElementById('theme-button');
        const bodyElement = document.body;

        themeButton.addEventListener('click', () => {
            bodyElement.classList.toggle('dark-mode');
            
            // Cambiar el texto del botón según el modo
            if (bodyElement.classList.contains('dark-mode')) {
                themeButton.textContent = "Modo Claro";
            } else {
                themeButton.textContent = "Modo Oscuro";
            }
        });

        // Iniciar reloj al cargar
        window.onload = startTime;
