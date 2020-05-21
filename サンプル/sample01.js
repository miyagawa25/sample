$(function(){

    let id = "user";
    let ps = "groupA";
    
    $('.button').on("click",function(){
    let id1 = $('.user').val();
    let ps1 = $('.pass').val();
    if(id==id1&&ps==ps1){
    
    location.href= "in.html";
    
    }else{
    
    alert("誤り！");
    }
    
    });
});