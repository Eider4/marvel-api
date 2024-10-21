import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetFetch } from "../../utils/GetFetch";
import { urlCharactersPerPage } from "../../enpoints-utils/enpointsUtils";
import { StateLoading } from "../state-loading/StateLoading";
import ShowCharacters from "../../sections/show-characters/ShowCharacters";
import Pagination from "../pagination/Pagination";

interface PagesProps {
  type: string;
  type2: string | null | undefined;
}

interface CharacterResponse {
  data: {
    results: Array<any>; // Puedes definir un tipo más específico para los personajes
  };
}

export default function Pages({ type, type2 }: PagesProps) {
  const { page } = useParams<{ page?: string }>();
  const [data, setData] = useState<Array<any>>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const getFetchData = async () => {
    try {
      const offset = page ? parseInt(page, 10) * 20 : 0;
      const response: CharacterResponse = await GetFetch(
        urlCharactersPerPage(20, offset, type)
      );

      setData(response.data.results);

      if (response.data.results.length === 0) {
        setError(true);
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

  if (error) return <p>Error</p>;
  if (loading) return <StateLoading />;

  return (
    <div>
      <ShowCharacters data={data} type={type2 ? type2 : type} />
      <Pagination page={page} type={type} />
    </div>
  );
}
