$(function(){
    $("#button").bind("click",function(){

        var abc , def;
        abc = $("#birth").val();
        re = new RegExp(abc);

        $("#table tbody tr").each(function(){
            var txt = $(this).find("td").text();
            if(txt.match(re) != null){

                            if(txt.match(re2) != null){
                                    $(this).show();
                            }else{
                                    $(this).hide();
                            }
            }else{
                $(this).hide();
            }
        });
    });

    $("#button2").bind("click",function(){
        $("#data tr").show();
    });
});