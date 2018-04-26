var mainContainer = document.getElementById("main-container"),
    videoContainer = document.getElementById("videoContainer"),
    overlay = document.getElementById("overlay"),
    newvideo = document.getElementById("playVideo");

var videos = [
    // Initial Clips
    'bluededa.mp4',
    'rednos.mp4',
    'rednos2.mp4',
    'hockeyFight1.mp4',
    'fireBlast.mp4',
    'dTrump.mp4',
    'zelda.mp4',
    'pokemonStadium.mp4',
    'nfsUG.mp4',
    '1080ava.mp4',
    'f0X.mp4',
    'fiddycent.mp4',
    // Ferrari Stuff //
    'flockaBoy.mp4',
    'flockaBoy2.mp4',
    'flockaBoy3.mp4',
    'flockaBoy4.mp4',
    'flockaBoy5.mp4',
    'nfsMod1.mp4',
    'nfsMod2.mp4',
    'nfsMod3.mp4',
    'nfsMod4.mp4',
    'ferCom1.mp4',
    'ferCom2.mp4',
    'ferCom3.mp4',
    'ferCom4.mp4',
    'ferCom5.mp4',
    'sexCar1.mp4',
    'sexCar2.mp4',
    'sexCar3.mp4',
    '02Fer360Review1.mp4',
    '02Fer360Review2.mp4',
    '02Fer360Review3.mp4',
    'yHurn1.mp4',
    'yHurn2.mp4',
    'yHurn3.mp4',
    'yHurn4.mp4',
    'ferDrift1.mp4',
    'ferDrift2.mp4',
    'ferDrift3.mp4',
    'ferDrift4.mp4',
    'forzaFer1.mp4',
    'forzaFer2.mp4',
    'forzaFer3.mp4',
    'forzaFer4.mp4',
    'forzaFer5.mp4',
    'forzaFer6.mp4',
    'forzaFer7.mp4',
    'forzaFer8.mp4',
    'gtaFer1.mp4',
    'gtaFer2.mp4',
    'gtaFer3.mp4',
    'gtaFer4.mp4',
    'gtaFer5.mp4',
    'miniFer1.mp4',
    'miniFer2.mp4',
    'miniFer3.mp4',
    'miniFer4.mp4',
    'miniFer5.mp4',
    'miniFer6.mp4',
    'miniFer7.mp4',
    'miniFer8.mp4',
    'ferBurnout1.mp4',
    'perFerRed1.mp4',
    'perFerRed2.mp4',
    //Fire Memes
    'seanPaulTemp1.mp4',
    'seanPaulTemp2.mp4',
    'seanPaulTemp3.mp4',
    'seanPaulTemp4.mp4',
    'seanPaulTemp5.mp4',
    'fireplace1.mp4',
    'fireplace2.mp4',
    'fireplace3.mp4',
    'fireMatrix1.mp4',
    'fireMatrix2.mp4',
    'fireMatrix3.mp4',
    'volcanoLava1.mp4',
    'volcanoLava2.mp4',
    'volcanoLava3.mp4',
    'volcanoLava4.mp4',
    'volcanoLava5.mp4',
    'volcanoLava6.mp4',
    'volcanoLava7.mp4',
    'fireDemons1.mp4',
    'fireDemons2.mp4',
    'fireDemons3.mp4',
    'fireDemons4.mp4',
    'fireDemons5.mp4',
    'hotD1.mp4',
    'bigBoom1.mp4',
    'bigBoom2.mp4',
    'bigBoom3.mp4',
    'bigBoom4.mp4',
    'movieBoom5.mp4',
    'movieBoom6.mp4',
    'movieBoom7.mp4',
    'usherBurn1.mp4',
    'usherBurn2.mp4',
    'usherBurn3.mp4',
    'usherBurn4.mp4',
    'usherBurn5.mp4',
    'arcaPokemon1.mp4',
    'arcaPokemon2.mp4',
    // Hockey Clips
    'hockeyFight2.mp4',
    'hockeyFight3.mp4',
    'hockeyFight4.mp4',
    'hockeyFight5.mp4',
    'hockeyFight6.mp4',
    'slapShot1.mp4',
    'slapShot2.mp4',
    'slapShot3.mp4',
    'slapShot4.mp4',
    'slapShot5.mp4',
    'slapShot6.mp4',
    'slapShot7.mp4',
    'hockeyHit1.mp4',
    'hockeyHit2.mp4',
    'hockeyHit3.mp4',
    'hockeyHit4.mp4',
    'hockeyHit5.mp4',
    'hockeyHit6.mp4',
    'mattCooke1.mp4',
    'mattCooke2.mp4',
    'trumpVid1.mp4',
    'trumpVid2.mp4',
    'trumpVid3.mp4',
    'trumpVid4.mp4',
    'adrHo1.mp4',
    'adrHo2.mp4',
    'adrHo3.mp4',
    'adrHo4.mp4',
    'cs1.mp4',
    'cs2.mp4',
    'cs3.mp4',
    'cs4.mp4',

];

var _length = videos.length;
var updateVideo = () => {
    setInterval(() => {
        var oldvideo = newvideo;
        newvideo = document.createElement("video");
        newvideo.className = "videos";
        newvideo.autoplay = true;
        newvideo.loop = true;
        newvideo.muted = true;

        newvideo.setAttribute('muted', true);
        newvideo.setAttribute('playsinline', true);
        newvideo.setAttribute('muted', true);

        newvideo.src = 'vids/' + videos[Math.floor(Math.random() * Math.floor(_length))];

        newvideo.addEventListener("loadeddata", () => {
            videoContainer.appendChild(newvideo);
        });
        setTimeout(() => {
            videoContainer.removeChild(oldvideo);
            oldvideo = null;
        }, 1200);
    }, 1200);
};
updateVideo();