document.addEventListener('DOMContentLoaded', (event) => {
        const currentPath = window.location.pathname;

        const menuItems = document.querySelectorAll('.menuItem');

        menuItems.forEach(item => {
            const mainLink = item.querySelector('a');

            if (mainLink) {
                const linkPath = mainLink.getAttribute('href');

                if (currentPath.includes(linkPath)) {
                    const submenu = item.querySelector('.submenu');

                    if (submenu) {
                        submenu.style.display = 'flex';
                    }
                }
            }
        });
    });

