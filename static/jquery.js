$(document).ready(function(){
    let name1=$('');
    let name2=$('');
    let emailId=$('');
    let presc=$('');
    phoneNo=$('');
    let list=$("#list");
    let button=$('#btn1');

    function check(obj){
        if(obj.presc && obj.name1 && obj.name2 && obj.phoneNo && obj.emailId){
            $("#success").append("File uploaded successfully");
        }
        if(!obj.name2 || !obj.name1 || !obj.phoneNo || !obj.emailId || !obj.presc){
            alert("Something went wrong. Some fields are missing");
        } 
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
        //console.log(obj.presc);
        check(obj);
    });
});