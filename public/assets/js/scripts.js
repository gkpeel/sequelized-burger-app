$('#burger__submit').on('click', function(event){
    event.preventDefault();
    var burgerName = $('#burger__value').val().trim();
    $('#burger__value').val('');
    console.log(burgerName);
    var burger = { burger_name: burgerName }

    $.ajax('/api/burgers', {
        type: "POST",
        data: burger
    }).then(function(){
        location.reload();
    });
});

$('.burger__devour-btn').on('click', function(event){
    var id = $(this).data('id');
    var devourState = {
        devoured: true
    };
    $.ajax('/api/burgers/' + id, {
        type: 'PUT',
        data: devourState
    }).then(function(){
        location.reload();
    });
});
