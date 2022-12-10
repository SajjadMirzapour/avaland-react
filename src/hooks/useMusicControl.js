import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playingMusicControl } from "src/store/music.slice";

function useMusicControl(player, volume, currentTime, inputTime, totalTime) {
    const isPlayingMusic = useSelector((store) => store.musicReducer.isPlayingMusic)
    const showPauseIcon = useSelector((store) => store.musicReducer.showPauseIcon)

    const dispatch = useDispatch()

    const playMusic = () => {

        playingMusicControl()(dispatch)

        const isPlaying = !player?.paused && !player?.ended

        if (!isPlaying) {
            console.log('inside play');
            player?.play();
        } else {
            console.log('inside pause');
            player?.pause();
        }


    };

    const changeVolume = () => {

        player.volume = volume.value;
        // player.volume = document.getElementById("change_vol").value;
    };

    const timeString = (secs) => {
        let ss = Math.floor(secs),
            hh = Math.floor(ss / 3600),
            mm = Math.floor((ss - hh * 3600) / 60);
        ss = ss - hh * 3600 - mm * 60;

        if (hh > 0) {
            mm = mm < 10 ? "0" + mm : mm;
        }
        ss = ss < 10 ? "0" + ss : ss;
        return hh > 0 ? `${hh}:${mm}:${ss}` : `${mm}:${ss}`;
    };


    // let aSeek = inputTime;


    useEffect(() => {
        if (player) {
            player.controls = false;

            // let aNow = currentTime;
            // let aTime = totalTime;
            // let aSeek = inputTime;

            let aNow = document.getElementById("aNow");
            let aTime = document.getElementById("aTime");
            let aSeek = document.getElementById("aSeek");

            // console.log('volume', volume);
            // console.log('aNow', aNow);
            // console.log('aSeek2', aSeek);


            player.onloadplay = () => {
                aNow.innerHTML = "Loading";
                aTime.innerHTML = "";
            };

            player.onloadedmetadata = () => {
                aNow.innerHTML = timeString(0);
                aTime.innerHTML = timeString(player?.duration);

                aSeek.max = Math.floor(player?.duration);

                let aSeeking = false;
                aSeek.oninput = () => {
                    aSeeking = true;
                };
                aSeek.onchange = () => {
                    player.currentTime = aSeek.value;
                    if (!player?.paused) {
                        player?.play();
                    }
                    aSeeking = false;
                };

                player.ontimeupdate = () => {
                    if (!aSeeking) {
                        aSeek.value = Math.floor(player?.currentTime);
                        aNow.innerHTML = timeString(player?.currentTime);
                    }
                };
            };
        }

    }, []);

    return { playMusic, changeVolume, isPlayingMusic, showPauseIcon }
}

export default useMusicControl;