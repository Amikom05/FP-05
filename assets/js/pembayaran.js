$(document).ready(function(){
        $("#nomor").keypress(function(data){
            if(data.which!=8 && data.which!=0 && (data.which<48 || data.which>57))
            {
                return false;
            }
        });
    });
$(document).ready(function(){
    $("#customRadio1").click(function(){
        $("#div2").fadeIn("slow");
    });
});
$(document).ready(function(){
	 $('button').click(function(){
		 var nomor = $('#nomor').val();
		 if(nomor == ''){
			 alert('nomor tidak boleh kosong')	 
		} 
	})
})