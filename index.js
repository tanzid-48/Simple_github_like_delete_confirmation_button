document.getElementById('input-delete')
.addEventListener('keyup', function(event){

    let text = event.target.value;

    let btnDelete = document.getElementById('btn-delete');

    if(text.trim().toLowerCase() === 'delete'){
        btnDelete.removeAttribute('disabled');
         
    }
    else{
        btnDelete.setAttribute('disabled', true);
    }

});


document.getElementById('btn-delete')
.addEventListener('click', function(){

    let mySecret = document.getElementById('my-secret');
    let successMsg = document.getElementById('success-msg');

    mySecret.style.display = 'none';
    successMsg.style.display = 'block';
      

});
