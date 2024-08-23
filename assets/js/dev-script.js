function changeColor(card, activeClass) {
    
    document.querySelectorAll('.status-card').forEach(function(el) {
        el.classList.remove('pending-active', 'working-active', 'completed-active');
    });


    card.classList.add(activeClass);
}