import "./playlist.scoped.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "src/components/Card/Card";
import { fetchPlaylist } from "src/store/playlists.slice";

export default function Playlist() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchPlaylist()(dispatch);
    // const interval = setInterval(() => {
    //   refetch();
    // }, 5000);
    // return () => {
    //   clearInterval(interval);
    // };
  }, []);

  const playlists = useSelector((store) => store.playlistReducer.playlists);

  return (
    <main>
      {playlists.map((playlist) => (
        <Card data={playlist} key={playlist.id} />
      ))}
    </main>
  );
}
