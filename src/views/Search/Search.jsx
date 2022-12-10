import "./search.scoped.scss";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import TableList from "src/components/Table/Table";
import { useGetSongs } from "src/hooks";

export default function Search() {
  const searchValue = useSelector((store) => store.searchReducer.search);
  const { data: songs, isLoading: isLoadingSongs } = useGetSongs();
  const searchResult = useMemo(
    () => songs?.filter?.((song) => song.name.includes(searchValue)),
    [searchValue, songs]
  );

  return (
    <div>
      {isLoadingSongs ? (
        <div className="loading">
          <p>در حال جستجو ...</p>
        </div>
      ) : (
        <div>
          {searchResult.length === 0 ? (
            <p className="not_found">متاسفانه آهنگی یافت نشد !!</p>
          ) : (
            <TableList data={searchResult} />
          )}
        </div>
      )}
    </div>
  );
}
