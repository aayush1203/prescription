$(document).ready(function(){
    let name1=$('');
    let name2=$('');
    let emailId=$('');
    let presc=$('');
    phoneNo=$('');
    let list=$("#list");
    let button=$('#btn1');

    function network(){
    }

    $("#btn1").click(function(){
        $("ul").empty();
        var obj={
            emailId : $(email).val(),
            phoneNo : $(phone).val(),
            name2 : $(Lname).val(),
            name1 : $(Fname).val(),
            presc : $(prescription).val()
        }
        console.log(obj);
    });
});