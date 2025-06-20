<script>
function openModal() {
    document.getElementById('modalOverlay').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal(event) {
    if (!event || event.target.id === 'modalOverlay' || event.target.classList.contains('close-btn')) {
        document.getElementById('modalOverlay').style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
</script>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Créer le menu burger s'il n'existe pas
    const headerNav = document.querySelector('.header-nav');
    const headerMenu = document.querySelector('.header-menu');
    
    // Vérifier si le burger menu existe déjà
    let burgerMenu = document.querySelector('.burger-menu');
    
    if (!burgerMenu) {
        // Créer le menu burger
        burgerMenu = document.createElement('div');
        burgerMenu.className = 'burger-menu';
        burgerMenu.innerHTML = '<span></span><span></span><span></span>';
        
        // L'insérer après le logo
        const headerLogo = document.querySelector('.header-logo');
        headerLogo.parentNode.insertBefore(burgerMenu, headerLogo.nextSibling);
    }
    
    // Toggle du menu burger
    burgerMenu.addEventListener('click', function() {
        burgerMenu.classList.toggle('active');
        headerMenu.classList.toggle('active');
    });
    
    // Fermer le menu en cliquant sur un lien
    const menuLinks = document.querySelectorAll('.header-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            burgerMenu.classList.remove('active');
            headerMenu.classList.remove('active');
        });
    });
});

// Votre script de scroll existant reste inchangé
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector(".header-nav").classList.add("scrolled");
    } else {
        document.querySelector(".header-nav").classList.remove("scrolled");
    }
}
</script>