import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetFetch } from "../../utils/GetFetch";
import {
  urlCharacter,
  urlCharacterComics,
  urlCharacterEvents,
  urlCharacterSeries,
} from "../../enpoints-utils/enpointsUtils";
import { characters } from "../../types/types";
import { StateLoading } from "../../components/state-loading/StateLoading";
import { CardObjects } from "../../components/card-objects/CardObjects";
import ReactLoading from "react-loading";
import { verify } from "../../utils/loadingVerifiqued";

export default function CharactersDetail() {
  const { id } = useParams();
  const [Character, setCharacter] = useState<characters>();
  const [Comics, setComics] = useState<[]>();
  const [Series, setSeries] = useState<[]>();
  const [Events, setEvents] = useState<[]>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingComics, setLoadingComics] = useState(true);
  const [loadingSeries, setLoadingSeries] = useState(true);
  const [loadingEvents, setLoadingEvents] = useState(true);

  const get = async () => {
    try {
      const data = await GetFetch(urlCharacter(id as string));
      if (data && data.data?.results?.length > 0) {
        setCharacter(data.data.results[0]);
      } else {
        setError(true);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (Character && Character.name) {
      setLoading(false);
      verify(setComics, urlCharacterComics, setLoadingComics, Character);
      verify(setSeries, urlCharacterSeries, setLoadingSeries, Character);
      verify(setEvents, urlCharacterEvents, setLoadingEvents, Character);
    }
  }, [Character]);
  useEffect(() => {
    get();
  }, [id]);
  if (loading) return <StateLoading />;
  if (error) return <p>error</p>;
  if (Character && Character.name)
    return (
      <div className="min-h-screen  bg-black text-red-500 p-6">
        <div className="max-w-4xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg border border-red-600">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-5xl font-extrabold text-red-600 hover:text-red-400 transition-all duration-300 transform hover:scale-105">
              {Character.name}
            </h1>
            <p className="text-yellow-400 text-lg mt-2">
              {Character.description || "No description available"}
            </p>
          </div>
          <div className="flex flex-col justify-around flex-wrap">
            {/* Thumbnail */}
            <div className="flex justify-center mb-6">
              <img
                src={`${Character.thumbnail.path}.${Character.thumbnail.extension}`}
                alt={Character.name}
                className="w-72 h-72 object-cover rounded-full border-4 border-red-600 shadow-2xl transform transition-all duration-300 hover:scale-110"
              />
            </div>

            {/* URLs */}
            <div className="mb-6">
              <h2 className="text-3xl font-semibold text-red-400">Links</h2>
              <ul className="list-inside mt-2 space-y-2 text-gray-300">
                {Character.urls.map((urlObj) => (
                  <li key={urlObj.url}>
                    <a
                      href={urlObj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-500 underline hover:text-yellow-500 transition-colors duration-200"
                    >
                      {urlObj.type.toUpperCase()}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex flex-col">
                {/* Comics */}
                <div className="mb-6">
                  <h2 className="text-3xl font-semibold text-red-400">
                    Comics
                  </h2>
                  <p className="mt-1 text-yellow-500">
                    Available: {Character.comics.available}
                  </p>{" "}
                  {loadingComics ? (
                    <span>
                      <ReactLoading type={"spokes"} color="#ddd" />
                    </span>
                  ) : (
                    <CardObjects series={Comics} type="comics" />
                  )}
                </div>
                {/* Series */}
                <div className="mb-6">
                  <h2 className="text-3xl font-semibold text-red-400">
                    Series
                  </h2>
                  <p className="mt-1 text-yellow-500">
                    Available: {Character.series.available}
                  </p>
                  {loadingSeries ? (
                    <span>
                      {" "}
                      <ReactLoading type={"spokes"} color="#ddd" />
                    </span>
                  ) : (
                    <CardObjects series={Series} type="series" />
                  )}
                </div>
              </div>
              {/* Stories */}
              <div className="mb-6">
                <h2 className="text-3xl font-semibold text-red-400">Stories</h2>
                <p className="mt-1 text-yellow-500">
                  Available: {Character.stories.available}
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-300">
                  {Character.stories.items.map((story) => (
                    <li
                      key={story.resourceURI}
                      className="hover:text-red-400 transition-colors duration-200"
                    >
                      {story.name} - {story.type}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Events */}
              <div className="mb-6">
                <h2 className="text-3xl font-semibold text-red-400">Events</h2>
                <p className="mt-1 text-yellow-500">
                  Available: {Character.events.available}
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-300">
                  {loadingEvents ? (
                    <span>
                      <ReactLoading type={"spokes"} color="#ddd" />
                    </span>
                  ) : (
                    <CardObjects series={Events} type="events" />
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
