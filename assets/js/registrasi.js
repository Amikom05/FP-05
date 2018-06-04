$(document).ready(function () {
$('#formregistrasi').jqxValidator({
onError: function () {
         alert('Maaf Data Yang Anda input Kurang');
     }, 
onSuccess: function () {
         alert('Pendaftaran Berhasil');
         $('#formregistrasi').submit();
     }, 
    rules: [
        { input: '#inputPassword4', message: 'Username is required!', action: 'keyup,blur', rule: 'required' },
        { input: '#inputPassword4', message: 'Password Minimal 3 and 12 characters!', action: 'keyup,blur', rule: 'length=6,16' },
        ],
    
});
 $("#tombolsubmit").jqxButton({
     theme: 'energyblue',
     width: 100,
     height: 30
 });
 $("#tombolsubmit").click(function () {
     $('#formregistrasi').jqxValidator('validate');
});
});