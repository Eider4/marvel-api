import { useParams } from "react-router-dom";
import { GetFetch } from "../../utils/GetFetch";
import {
  urlEvent,
  urlEventCharacters,
  urlEventComics,
  urlEventCreators,
  urlEventSeries,
} from "../../enpoints-utils/enpointsUtils";
import { useEffect, useState } from "react";
import { StateLoading } from "../../components/state-loading/StateLoading";
import { CardObjects } from "../../components/card-objects/CardObjects";
import { verify } from "../../utils/loadingVerifiqued";
import ReactLoading from "react-loading";
export const EventDetal = () => {
  const { id } = useParams();
  const [event, setEvent] = useState<any>();
  const [comic, setComics] = useState<[]>();
  const [creators, setCreators] = useState<[]>();
  const [Characters, setCharacters] = useState<[]>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [series, setSeries] = useState<[]>();
  const [loadingComics, setLoadingComics] = useState<boolean>(true);
  const [loadingSeries, setLoadingSeries] = useState<boolean>(true);
  const [loadingCharacters, setLoadingCharacters] = useState<boolean>(true);
  const [loadingCreators, setLoadingCreators] = useState<boolean>(true);
  const get = async () => {
    try {
      const data = await GetFetch(urlEvent(id as string));
      setEvent(data.data.results[0]);
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
    if (event && event.title) {
      setLoading(false);
      verify(setComics, urlEventComics, setLoadingComics, event);
      verify(setSeries, urlEventSeries, setLoadingSeries, event);
      verify(setCharacters, urlEventCharacters, setLoadingCharacters, event);
      verify(setCreators, urlEventCreators, setLoadingCreators, event);
    }
  }, [event]);
  if (loading) return <StateLoading />;
  if (error) return <p>error</p>;
  if (event && event.title)
    return (
      <div className="p-6 bg-slate-500">
        {/* Título y años */}
        <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
        <p className="text-gray-700 mb-4">{event.description}</p>

        {/* Imagen */}
        <img
          src={`${event.thumbnail.path}.${event.thumbnail.extension}`}
          alt={event.title}
          className="w-96 mb-4"
        />

        {/* Creadores */}
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Creadores</h2>

          {loadingCreators ? (
            <span>
              <ReactLoading type={"spokes"} color="#fff" />
            </span>
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
          <h2 className="text-2xl font-semibold">Characters</h2>
          {loadingCharacters ? (
            <span>
              <ReactLoading type={"spokes"} color="#fff" />
            </span>
          ) : (
            <>
              {creators && creators.length > 0 && (
                <CardObjects series={Characters} type="characters" />
              )}{" "}
            </>
          )}
        </div>

        {/* Cómics */}
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Cómics</h2>

          {loadingComics ? (
            <span>
              <ReactLoading type={"spokes"} color="#fff" />
            </span>
          ) : (
            <>
              {comic && comic.length > 0 && (
                <CardObjects series={comic} type="comics" />
              )}
            </>
          )}
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Series</h2>

          {loadingSeries ? (
            <span>
              <ReactLoading type={"spokes"} color="#fff" />
            </span>
          ) : (
            <>
              {series && series.length > 0 && (
                <CardObjects series={series} type="series" />
              )}
            </>
          )}
        </div>
      </div>
    );
};
