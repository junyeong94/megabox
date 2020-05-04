function sitemap(){
$('#sitemap_btn').click(function(){
    $('.sitemap').toggle();
    var cnt=$('#sitemap_btn');
    if(cnt.attr('src')=='images/hamburger01.png'){
        cnt.attr('src','images/hamburger02.png');
    }else{
        cnt.attr('src','images/hamburger01.png');
    }
});
}