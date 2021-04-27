$(document).ready(function(){
    $(".submitbutton").click(function(e){
        e.preventDefault();
        let name = $("#comment-name").val();
        let comment = $("#comment-comment").val();
        let code = ` <div class="incomingcomment">
        <input type="submit" name="deletecomment" class="deletecomment" value="Yorumu Sil.">
        <h2 class="peoplename">`+name+`</h2>
        <h1 class="commentcontent">`+comment+`</h1>
        </div>
        `;
        $(".form-comment").append(code);
        $("#comment-name").val('');
        $("#comment-comment").val('');
        $(".form-h1").hide();
  });
  $(document).on('click', '.deletecomment', function () {
    $(this).closest('.incomingcomment').remove();
    if($(".incomingcomment").length==0){
        $(".form-h1").show();
    }
  });
});
