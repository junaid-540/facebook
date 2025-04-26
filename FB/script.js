$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            mail:{
                required:true,
                minlength:4,
                email:true
            },
            pass:{
                required:true,
                minlength:4,
                maxlength:8

            }
        },
        messages:{
            //you can either write it like above or ,
            //mail:"minimum character required",
            //required:"Enter first name"
        }
    })
})