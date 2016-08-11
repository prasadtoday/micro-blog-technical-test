/* ------- Page Details  --------- 
Author: Prasad Patil
Updated Date: 03 Aug 2016
Purpose: Add/Update Post Validations
--------- Page Details ---------- */
$(document).ready(function(){ 
    $("#submit").click(function(){    
        
        var errormessage = '';  
        var title = $("#title").val().trim();
        var content = $("#content").val().trim();
        
        if(title==''){
            errormessage += "- Please enter post title.</br>";
        } 
        if(title.length < 5){
            errormessage += "- Post title should be at least 5 characters.</br>";
        } 
        if(content=='') {
            errormessage += "- Please enter post description.</br>";
        } 
        if (content.length < 25) {
            errormessage += "- Post description should be at least 25 characters.</br>";
        }
       
        if(errormessage !=''){            
            $("#errMsg").html( errormessage );        
            return false;
        }
        
    });
});