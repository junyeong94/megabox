function subPosition(){
    var movie=$('a[title="영화"]').offset().left;
    var tiket=$('a[title="예매"]').offset().left;
    var theater=$('a[title="극장"]').offset().left;
    var event=$('a[title="이벤트"]').offset().left;
    var member=$('a[title="혜택"]').offset().left;

    $('#movie_sub').css('padding-left',movie-130);
    $('#tiketing_sub').css('padding-left',tiket-170);
    $('#theater_sub').css('padding-left',theater-70);
    $('#event_sub').css('padding-left',event-180);
    $('#member_sub').css('padding-left',member-130);
};