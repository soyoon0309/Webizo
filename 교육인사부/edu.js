document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.toggle-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling; // <h2> 이후의 <div> 요소
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });

    const submenus = document.querySelectorAll('.submenu a');
    submenus.forEach(menu => {
        menu.addEventListener('click', function(event) {
            event.preventDefault(); // 하이퍼링크 기본 동작 방지
            submenus.forEach(sub => sub.classList.remove('active'));
            menu.classList.add('active'); // 현재 클릭된 메뉴에 active 클래스 추가
            window.location.href = menu.href; // 페이지 이동
        });
    });

    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach
});
