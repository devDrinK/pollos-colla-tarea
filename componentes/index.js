document.addEventListener('DOMContentLoaded', function() {
    const menuArticles = document.querySelectorAll('#menu article');

    menuArticles.forEach(article => {
        article.addEventListener('click', (event) => {
            const menuList = article.querySelector('ul');
            
            if (menuList) {
                menuList.classList.toggle('active');
            }
        });
    });
});