document.addEventListener('DOMContentLoaded', function () {
    console.log(document.getElementById('electronics'));
    window.addEventListener('resize', function () {
        if (window.innerWidth < 1100) {
            document.getElementById('electronics').textContent = 'Electronics';
            document.getElementById('mens').textContent = 'Men\'s';
            document.getElementById('womens').textContent = 'Women\'s';
            document.getElementById('jewelry').textContent = 'Jewelry';
        } else {
            document.getElementById('electronics').textContent = 'Electronics';
            document.getElementById('mens').textContent = 'Men\'s Clothing';
            document.getElementById('womens').textContent = 'Women\'s Clothing';
            document.getElementById('jewelry').textContent = 'Jewelry';
        }
    });
});