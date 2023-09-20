import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playingPlaylistControl, playingPlaylistPause } from "src/store/player.slice";

export default function usePlaylistControl() {

    const isPlayingPlaylist = useSelector((store) => store.playerReducer.isPlayingPlaylist)
    const showPauseIcon = useSelector((store) => store.playerReducer.showPauseIcon)
    const playlistDetail = useSelector((store) => store.playlistReducer.playlistDetail)

    const dispatch = useDispatch()

    const play_aud_playlist = (num) => {

        playingPlaylistControl()(dispatch)
        playingPlaylistPause()(dispatch)

        const player = document.getElementById("playlist_player");
        const image = document.getElementById("playlist_player__img");
        const nextBtn = document.getElementById('nextBtn');
        const previousBtn = document.getElementById('previousBtn')
        const songname = document.getElementById('songname')
        const singerName = document.getElementById('singerName')


        player.src = playlistDetail?.songs[num]?.src_path
        image.src = playlistDetail?.songs[num]?.image_path
        songname.innerHTML = playlistDetail?.songs[num]?.name
        singerName.innerHTML = playlistDetail?.songs[num]?.singer

        const musicPlayer = document.getElementById("music_player");
        if (musicPlayer.play) {
            musicPlayer.pause()
        }

        if (player.paused) {
            playingPlaylistPause()(dispatch)
            setTimeout(() =>
                player.play()
                , 10)

        } else {
            playingPlaylistPause()(dispatch)
            setTimeout(() =>
                player.pause()
                , 10)
        }

        player.addEventListener("ended", () => {
            num++;
            if (num >= playlistDetail?.songs?.length) { num = 0; }
            playingPlaylistPause()(dispatch)
            play_aud_playlist(num);
        });

        nextBtn.addEventListener("click", () => {
            num++
            if (num >= playlistDetail?.songs?.length) { num = 0; }
            // playingPlaylistPause()(dispatch)
            play_aud_playlist(num);
        })

        previousBtn.addEventListener("click", () => {
            num--
            if (num < 0) { num = playlistDetail?.songs?.length - 1 }
            // playingPlaylistPause()(dispatch)
            play_aud_playlist(num);
        })

    };

    const handlePlay = () => {
        const player = document.getElementById("playlist_player");

        // var isPlaying = player.currentTime > 0 && !player.paused && !player.ended
        //     && player.readyState > player.HAVE_CURRENT_DATA;

        // if (!isPlaying) {
        //     store.dispatch('musicStore/playingPlaylistPause');

        //     player.play();
        // } else {
        //     store.dispatch('musicStore/playingPlaylistPause');

        //     player.pause();
        // }

        if (player.paused) {
            playingPlaylistPause()(dispatch)
            setTimeout(() =>
                player.play()
                , 10)

        } else {
            playingPlaylistPause()(dispatch)
            setTimeout(() =>
                player.pause()
                , 10)
            // player.pause();
        }
    }

    const change_vol = () => {
        const player = document.getElementById("playlist_player");
        player.volume = document.getElementById("change_vol_playlist").value;
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

    useEffect(() => {
        const player = document.getElementById("playlist_player");
        player.controls = false;

        let aNow_playlist = document.getElementById("aNow_playlist");
        let aTime_playlist = document.getElementById("aTime_playlist");
        let aSeek_playlist = document.getElementById("aSeek_playlist");


        player.onloadplay = () => {
            aNow_playlist.innerHTML = "Loading";
            aTime_playlist.innerHTML = "";
        };

        player.onloadedmetadata = () => {
            aNow_playlist.innerHTML = timeString(0);
            aTime_playlist.innerHTML = timeString(player.duration);

            aSeek_playlist.max = Math.floor(player.duration);

            let aSeeking = false;
            aSeek_playlist.oninput = () => {
                aSeeking = true;
            };
            aSeek_playlist.onchange = () => {
                player.currentTime = aSeek_playlist.value;
                if (!player.paused) {
                    player.play();
                }
                aSeeking = false;
            };

            player.ontimeupdate = () => {
                if (!aSeeking) {
                    (aSeek_playlist.value = Math.floor(player.currentTime));
                    (aNow_playlist.innerHTML = timeString(player.currentTime));
                }
            };
        };
    });
    return { play_aud_playlist, handlePlay, change_vol, isPlayingPlaylist, showPauseIcon }
}