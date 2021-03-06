$(document).ready(function() {
    

    $(".commentdelete").click(function() {
        
        var postId = $(this).data("id");

        $.ajax({
            url: "/deletecomment",
            crossDomain: true,
            method: "DELETE",
            data: {
                postId: postId
            }
        });

        $(this).closest(".commentpanel").remove();

    });

    $("#commentWrite").on("submit", function(e) {
        e.preventDefault();

        var commentText = $("#commentWrite textarea").val();
        var yourName = $("#yourname").val();
        var articleId = $("#commentWrite").data("artid");

        if (commentText.trim() != "" && yourName.trim() != "") {
            $.post("/addcomment/" + articleId, {
                yourName: yourName,
                commentText: commentText
            }, function(response) {
                $("#commentBox").hide(200, function() {
                    window.location = "/commentshow/" + articleId;
                });
            });
            
        }
    });
});