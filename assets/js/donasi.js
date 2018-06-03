$(function(){
        $("#number").keypress(function(data){
            if(data.which!=8 && data.which!=0 && (data.which<48 || data.which>57))
            {
                return false;
            }
        });
    });

$(function(){
    $("form[name='frm-donasi']"),validate({
        rules: {
            number: "required"        
        },
        messages: {
            number : "Isi Nominal Donasi Anda"    
        },
        submitHandler : function(form){
        form.submit();
        }
    });
});
