import "./favorites.scoped.scss";
import Card from "src/components/Card/Card";
import { useGetFavoriteMusic } from "src/hooks";

export default function Favorites() {
  const { data: favoriteMusic, isLoading } = useGetFavoriteMusic();
  return (
    <main className="">
      {favoriteMusic.map((music) => (
        <Card data={music} key={music.id} />
      ))}
    </main>
  );
}
