
    <script>
        function openModal() {
            document.getElementById('legalModal').style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            document.getElementById('legalModal').style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Fermer la modal en cliquant à l'extérieur
        window.onclick = function(event) {
            const modal = document.getElementById('legalModal');
            if (event.target === modal) {
                closeModal();
            }
        }

        // Fermer avec la touche Escape
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeModal();
            }
        });
    </script>