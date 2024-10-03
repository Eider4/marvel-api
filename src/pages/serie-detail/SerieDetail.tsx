import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetFetch } from "../../utils/GetFetch";
import {
  urlSeriesById,
  urlSeriesCharacters,
  urlSeriesComics,
  urlSeriesCreators,
} from "../../enpoints-utils/enpointsUtils";
import { CardObjects } from "../../components/card-objects/CardObjects";
import { verify } from "../../utils/loadingVerifiqued";
import { StateLoading } from "../../components/state-loading/StateLoading";
import ReactLoading from "react-loading";

export const SerieDetail: React.FC = () => {
  const { id } = useParams();
  const [serie, setSerie] = useState<any>();
  const [comic, setComic] = useState<[]>();
  const [creators, setCreators] = useState<[]>();
  const [Characters, setCharacters] = useState<[]>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingComics, setLoadingComics] = useState(true);
  const [loadingEvents, setLoadingEvents] = useState(true);
  const [LoadingCreators, setLoadingCreators] = useState(true);

  const get = async () => {
    try {
      const data = await GetFetch(urlSeriesById(id as string));
      setSerie(data.data.results[0]);
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
    if (serie && serie.title) {
      setLoading(false);
      verify(setComic, urlSeriesComics, setLoadingComics, serie);
      verify(setCharacters, urlSeriesCharacters, setLoadingEvents, serie);
      verify(setCreators, urlSeriesCreators, setLoadingCreators, serie);
    }
  }, [serie]);
  if (loading) return <StateLoading />;
  if (error) return <p>error</p>;
  if (serie)
    return (
      <div className="p-6 bg-slate-500">
        {/* Título y años */}
        <h1 className="text-3xl font-bold mb-2">{serie.title}</h1>
        <p className="text-gray-700 mb-4">
          {serie.startYear} - {serie.endYear}
        </p>

        {/* Imagen */}
        <img
          src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
          alt={serie.title}
          className="w-full max-w-xs mb-4"
        />

        {/* Creadores */}
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Creadores</h2>

          {LoadingCreators ? (
            <ReactLoading type={"spokes"} color="#fff" />
          ) : (
            <>
              {creators && creators.length > 0 && (
                <CardObjects series={creators} type="creators" />
              )}
            </>
          )}
        </div>

        {/* Personajes */}
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Personajes</h2>

          {loadingEvents ? (
            <ReactLoading type={"spokes"} color="#fff" />
          ) : (
            <>
              {Characters && Characters.length > 0 && (
                <CardObjects series={Characters} type="characters" />
              )}
            </>
          )}
        </div>

        {/* Cómics */}
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Cómics</h2>
          {loadingComics ? (
            <ReactLoading type={"spokes"} color="#fff" />
          ) : (
            <>
              {comic && comic.length > 0 && (
                <CardObjects series={comic} type="comics" />
              )}
            </>
          )}
        </div>
      </div>
    );
};
