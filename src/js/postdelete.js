/* ------- Page Details  --------- 
Author: Prasad Patil
Updated Date: 03 Aug 2016
Purpose: Delete post confirmation and handle response. 
--------- Page Details ---------- */
$(document).ready(function(){
    $("#deletepost").click(function(){          
        var r = confirm("Are you sure, you want to delete this post?");
        if (r == true) {
            $.ajax({url: $("#deletepostapiurl").val(), success: function(result){
            if(result == 1){
                window.location.href = $("#redirctposturl").val();
            }
            else
            {
                alert("Something went wrong, Please try again.");
            }            
        }});
        }        
    });
});