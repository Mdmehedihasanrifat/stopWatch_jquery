$(function () {

    var mode = false;//app mode
    var timecounter=0;//time counter
    var lapcounter=0;//lapcounter
    var action;//for set interval
    var lapnumber = 0;//total lap number


    var timeMinute,timeSecond,timemiliSecond,lapMinute,lapSecond,lapmiliSecond;
    hide("#startbutton","#lapbutton");
$("#startbutton").click(function () {

      mode=1;
   hide("#lapbutton","#stopbutton");
   startaction();


});

$("#stopbutton").click(function () {

    hide("#resumebutton","#resetbutton");

    clearInterval(action);

})

    $("#resumebutton").click(function () {

        hide("#stopbutton","#lapbutton");

        startaction();

    });


    $("#resetbutton").click(function () {
        location.reload();
    })


    $("#lapbutton").click(function () {

        if(mode==1){

            clearInterval(action);
            lapcounter=0;
            addlaps();
            startaction();

        }

    })



function format(number) {

    if(number<10){
        return'0'+number;
    }

    else {
        return number;
    }

}


//showbutton
    function hide(x,y) {

        $(".control").hide();
        $(x).show();
        $(y).show();

    }
    //startAction
    
    function startaction() {
      action=setInterval(function () {
        timecounter++;
        if(timecounter==100*100*60)
        {
            timecounter=0;

        }
        lapcounter++;
          if(lapcounter==100*100*60)
          {
              lapcounter=0;

          }

        updatetime();
      },10);
    }


    function updatetime() {
timeMinute=Math.floor(timecounter/6000);
timeSecond=Math.floor((timecounter%6000)/100);
timemiliSecond=Math.floor(timecounter%6000)%100;
        $("#Timeminute").text(format(timeMinute));
        $("#Timesecond").text(format(timeSecond));

        $("#Timemilisecond").text(format(timemiliSecond));
        lapMinute=Math.floor(lapcounter/6000);
        lapSecond=Math.floor((lapcounter%6000)/100);
        lapmiliSecond=Math.floor(lapcounter%6000)%100;
        $("#lapminute").text(format(lapMinute));
        $("#lapsecond").text(format(lapSecond));

        $("#milisecond").text(format(lapmiliSecond));

    }
    function addlaps() {
        lapnumber++;
        var mylaps='<div class="lap">'+
            '<div class="title">'+'Lap'+lapnumber+'</div>'
            +'<div class="lapM">'+
            '<span>'+format(lapMinute)+':'+'</span>'+

            '<span>'+':'+format(lapSecond) +'</span>'+

            '<span>'+':'+format(lapmiliSecond)+'</span>'+
            '</div>'

            +'</div>';
        $(mylaps).appendTo("#laps");
    }

});