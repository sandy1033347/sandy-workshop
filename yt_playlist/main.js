let player;
let currentPlay = 0;

function onYouTubeIframeAPIReady(){
    console.log("onYouTubeIframeAPIReady"); //確定api有接入成功
     player = new YT.Player("player",{
        height:"390",
        width:"640",
        videoId:playList[currentPlay],
        playerVars:{
            autoplay:0,
            controls:0,
            start:playTime[currentPlay][0],
            end:playTime[currentPlay][1],
            iv_load_policy:3
        },
        events:{
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    });
}

function onPlayerReady(event){
    $("#playbutton").on("click", function(){
        $("h2").text(player.getVideoData().title);
        player.playVideo();
    });
}

function onPlayerStateChange(event){
    console.log(event.data);
    if(Math.floor(player.getCurrentTime())==playTime[currentPlay][1]){

        if(currentPlay<playList.length-1){

            currentPlay++;
            player.loadVideoById({
                videoId:playList[currentPlay],
                startSeconds:playTime[currentPlay][0],
                endSeconds:playTime[currentPlay][1],
                suggestQuality:"large"

        });
    }
        else{
            //最後一首
            currentPlay = 0;
            player.cueVideoById({
                videoId:playList[currentPlay],
                startSeconds:playTime[currentPlay][0],
                endSeconds:playTime[currentPlay][1],
                suggestQuality:"large"
            });

            $("h2").text("");

        }
    }

    if(event.data==1){
        $("h2").text(player.getVideoData().title);
    }
        
    }
