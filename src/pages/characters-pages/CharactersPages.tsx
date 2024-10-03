import { useParams } from "react-router-dom";
import Pagination from "../../components/pagination/Pagination";
import ShowCharacters from "../../sections/show-characters/ShowCharacters";
import { useEffect, useState } from "react";
import { GetFetch } from "../../utils/GetFetch";
import { urlCharactersPerPage } from "../../enpoints-utils/enpointsUtils";
import { StateLoading } from "../../components/state-loading/StateLoading";

export default function CharactersPages() {
  const { page } = useParams<{ page?: string }>();
  const [data, setData] = useState<Array<any>>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const getFetchData = async () => {
    try {
      const offset = page ? parseInt(page, 10) * 20 : 0;
      const respone = await GetFetch(urlCharactersPerPage(20, offset));
      setData(respone.data.results);
      if (respone.data.results.length === 0) {
        setError(true);
        setLoading(false);
      }
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    getFetchData();
  }, [page]);
  if (error) return <p>error</p>;
  if (loading) return <StateLoading />;
  return (
    <div>
      <ShowCharacters data={data} />
      <Pagination page={page} />
    </div>
  );
}
