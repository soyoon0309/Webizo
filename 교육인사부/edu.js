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
});
