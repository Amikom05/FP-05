$(document).ready(function () {
$('#formregistrasi').jqxValidator({
onError: function () {
         alert('You have not filled the form correctly!');
     }, 
onSuccess: function () {
         $('#formregistrasi').submit();
     }, 
    rules: [
        { input: '#inputPassword4', message: 'Username is required!', action: 'keyup,blur', rule: 'required' },
        { input: '#inputPassword4', message: 'Password Minimal 3 and 12 characters!', action: 'keyup', rule: 'length=3,12' },
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