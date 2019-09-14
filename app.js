$(function(){
    $("#search").keyup(function (e) { 
        let search = $("#search").val();
        $.ajax({
            type: "POST",
            url: "task-search.php",
            data: {search: search},
            //dataType: "dataType",
            success: function (response) {
                console.log(response);
            }
        });
        
    });
})