import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPlaylistDetail } from "src/store/playlists.slice";
import PlaylistCard from "./PlaylistCard/PlaylistCard";
import PlaylistTable from "../../components/Table/Table";

export default function PlaylistDetail() {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    fetchPlaylistDetail(params.id)(dispatch);
  }, []);

  const playlistDetail = useSelector(
    (store) => store.playlistReducer.playlistDetail
  );

  return (
    <>
      <PlaylistCard playlistDetail={playlistDetail} />
      <PlaylistTable data={playlistDetail?.songs} />
    </>
  );
}
