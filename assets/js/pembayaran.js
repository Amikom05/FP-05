$(function(){
        $("#nomor").keypress(function(data){
            if(data.which!=8 && data.which!=0 && (data.which<48 || data.which>57))
            {
                return false;
            }
        });
    });

$(function(){
    $("form[name='frm-pembayaran']"),validate({
        rules: {
            nomor: "required",
            customRadio :{
                required : true,
            }  
        },
        messages: {
            nomor : "Isi Nomor Anda"  ,
            customRadio : "pilih salah satu"  
        },
        submitHandler : function(form){
        form.submit();
        }
    });
});
