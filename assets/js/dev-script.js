function changeColor(card, activeClass, tableId) {
  
    document.querySelectorAll('.status-card').forEach(function(el) {
        el.classList.remove('pending-active', 'working-active', 'completed-active');
    });

    
    document.querySelectorAll('.status-table').forEach(function(table) {
        table.parentElement.classList.add('d-none');
    });

    card.classList.add(activeClass);

   
    document.getElementById(tableId).classList.remove('d-none');
}

  document.getElementById('reject').addEventListener('click', function() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, reject it!'
    }).then((result) => {
      if (result.isConfirmed) {
     
        Swal.fire(
          'Rejected!',
          'Your request has been rejected.',
          'success'
        );
      }
    });
  });
