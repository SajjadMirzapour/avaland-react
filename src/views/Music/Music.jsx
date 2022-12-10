import "./music.scoped.scss";
import { useGetSongs } from "src/hooks";
import Card from "src/components/Card/Card";

export default function Music() {
  const { data: songs, isLoading: isLoadingSongs } = useGetSongs();
  return (
    <main>
      {songs.map((song) => (
        <Card data={song} key={song.id} />
      ))}
    </main>
  );
}
