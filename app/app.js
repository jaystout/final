function initListeners(){
    $("#nav nav a").click(function(e){
        var btnID = this.id;
        MODEL.getView(btnID);
        //console.log(btnID);
    });
    $(".navicon").click(function() {
        console.log('clicked');
        $('nav').toggleClass("navMobileView");
        $('nav .links').slideToggle(300).toggleClass('linksMobileView');
        //it works this way  $(".links").css("display", "flex");
      })

}
function initListeners2(){
    $("#footer footer a").click(function(e){
        var btnID = this.id;
        MODEL.getView(btnID);
        //console.log(btnID);
});
}

function initSite() {
    $.get('views/nav.html', function(nav){
        $("#nav").html(nav);
        initListeners();
    });

$.get("views/home/home.html", function (data){
    $("#app").html(data);
});

$.get("views/footer.html", function (data){
    $("#footer").html(data);
    initListeners2();
});
}

$(document).ready(function(){
    initSite();
});

