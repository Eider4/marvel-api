import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetFetch } from "../../utils/GetFetch";
import {
  urlCreator,
  urlCreatorComics,
  urlCreatorSeries,
} from "../../enpoints-utils/enpointsUtils";
import { StateLoading } from "../../components/state-loading/StateLoading";
import { CardObjects } from "../../components/card-objects/CardObjects";
import { verify } from "../../utils/loadingVerifiqued";
import ReactLoading from "react-loading";

export const CreatorDetail = () => {
  const { id } = useParams();
  const [creator, setCreator] = useState<any>();
  const [comics, setComics] = useState<[]>();
  const [series, setSeries] = useState<[]>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingComics, setLoadingComics] = useState<boolean>(true);
  const [loadingSeries, setLoadingSeries] = useState<boolean>(true);
  const get = async () => {
    try {
      const data = await GetFetch(urlCreator(id as string));
      setCreator(data.data.results[0]);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    get();
  }, [id]);
  useEffect(() => {
    if (creator && creator.firstName) {
      console.log(creator);
      setLoading(false);
      verify(setComics, urlCreatorComics, setLoadingComics, creator);
      verify(setSeries, urlCreatorSeries, setLoadingSeries, creator);
    }
  }, [creator]);
  if (loading) return <StateLoading />;
  if (error) return <p>error</p>;
  if (creator && creator.firstName)
    return (
      <div className="p-4 text-red-300">
        {creator && (
          <div>
            <h1 className="text-2xl font-bold mb-4">{creator.fullName}</h1>
            <img
              src={`${creator.thumbnail.path}.${creator.thumbnail.extension}`}
              alt={creator.fullName}
              className="mb-4 w-52 object-cover"
            />
            <h2 className="text-xl font-semibold">Comics</h2>
            <p>{creator.comics.available}</p>
            {loadingComics ? (
              <ReactLoading type={"spokes"} color="#fff" />
            ) : (
              <ul className="mb-4">
                {comics && <CardObjects series={comics} type="comics" />}
              </ul>
            )}
            <h2 className="text-xl font-semibold">Series</h2>
            <p>{creator.series.available}</p>
            {loadingSeries ? (
              <ReactLoading type={"spokes"} color="#fff" />
            ) : (
              <ul className="mb-4">
                {series && <CardObjects series={series} type="series" />}
              </ul>
            )}
          </div>
        )}
      </div>
    );
};
