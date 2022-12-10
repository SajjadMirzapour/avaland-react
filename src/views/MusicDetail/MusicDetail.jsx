import { useMemo } from "react";
import { useGetSongs } from "src/hooks";
import MusicCard from "./MusicCard/MusicCard";
import Slider from "./Slider/Slider";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";

function MusicDetail() {
  // const dispatch = useDispatch();
  // const params = useParams();

  // useEffect(() => {
  //   getMusicDetail(params.id)(dispatch);
  // }, [params.id]);
  const { data: songs, isLoading: isLoadingSongs } = useGetSongs();
  const renderSlider = useMemo(() => <Slider data={songs} />, [songs]);

  // const { data: songs, isLoading: isLoadingSongs,refetch } = useGetSongs();
  // useMemo(() => refetch, [songs]);
  return (
    <main>
      <MusicCard />
      {renderSlider}
    </main>
  );
}

export default MusicDetail;
