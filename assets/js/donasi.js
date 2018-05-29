 $(document).ready(function(){
        $("#number").keypress(function(data){
            if(data.which!=8 && data.which!=0 && (data.which<48 || data.which>57))
            {
                return false;
            }
        });
    });
$(document).ready(function(){
	 $('button').click(function(){
		 var rupiah = $('#number').val();
		 if(rupiah == ''){
			 alert('donasi tidak boleh kosong')	 
		} 
	})
})