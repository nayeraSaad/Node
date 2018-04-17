$.ajax('/api/users',{
    accepts:'application/json',
    success:function(data,status){
        var $body = $('body');
        data.forEach((user)=>{
            var $elem = '<div>' + user.username + user.age + '</div>';
            $body.append($elem);
        });
        
    }
});

$('#submitbtn').on('click',function(e){
    var username = $('input[name="username"]').val();
    var age = $('input[name="age"]').val();
    $.ajax('/api/users/send',{
        method: "POST",
        contentType:'application/json',
        data:JSON.stringify( {
            username: username,
            age:age
        }),
        success:function(data,status){

        }

    });
});