import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetFetch } from "../../utils/GetFetch";
import {
  urlComic,
  urlComicCharacters,
  urlComicCreators,
} from "../../enpoints-utils/enpointsUtils";
import { CardObjects } from "../../components/card-objects/CardObjects";
import { verify } from "../../utils/loadingVerifiqued";
import ReactLoading from "react-loading";
import { StateLoading } from "../../components/state-loading/StateLoading";
interface Comic {
  id: number;
  title: string;
  issueNumber: number;
  description: string;
  format: string;
  pageCount: number;
  thumbnail: { path: string; extension: string };
  prices: { type: string; price: number }[];
  creators: {
    items: { name: string; role: string }[];
  };
  characters: {
    items: { name: string }[];
  };
  dates: { type: string; date: string }[];
  urls: { type: string; url: string }[];
}

export const ComicsDetail: React.FC = () => {
  const [comic, setComic] = useState<Comic | null>(null);
  const [creators, setCreators] = useState<[]>();
  const [character, setCharacter] = useState<[]>();
  const [loadinfCreators, setLoadingCreators] = useState<boolean>(true);
  const [loadinfCharacter, setLoadingCharacter] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const { id } = useParams();

  const get = async () => {
    try {
      const data = await GetFetch(urlComic(id as string));
      setComic(data.data.results[0]);
      if (data.data.results[0].creators.items.length > 0) {
        const creatorsFetch = await GetFetch(urlComicCreators(id as string));
        setCreators(creatorsFetch.data.results);
        const charactersFetch = await GetFetch(
          urlComicCharacters(id as string)
        );
        setCharacter(charactersFetch.data.results);
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (comic && comic.title) {
      setLoading(false);
      verify(setCreators, urlComicCreators, setLoadingCreators, comic);
      verify(setCharacter, urlComicCharacters, setLoadingCharacter, comic);
    }
  }, [comic]);
  useEffect(() => {
    get();
  }, [id]);

  if (loading) return <StateLoading />;
  if (error) return <p>error</p>;

  return (
    <div className="bg-white p-6">
      <h1 className="text-3xl font-bold mb-2">
        {comic?.title} #{comic?.issueNumber}
      </h1>
      <img
        src={`${comic?.thumbnail.path}.${comic?.thumbnail.extension}`}
        alt={comic?.title}
        width="300"
      />
      <p>{comic?.description}</p>
      <p>
        <b>Format:</b> {comic?.format}
      </p>
      <p>
        <b>Page Count:</b> {comic?.pageCount}
      </p>

      <h2>Creators</h2>
      {loadinfCreators ? (
        <ReactLoading type={"spokes"} color="#000" />
      ) : (
        <div className="bg-white p-6">
          {creators && creators.length > 0 && (
            <CardObjects series={creators} type="creators" />
          )}
        </div>
      )}

      <h2>Characters</h2>
      {loadinfCharacter ? (
        <ReactLoading type={"spokes"} color="#000" />
      ) : (
        <ul>
          {character && character.length > 0 && (
            <CardObjects series={character} type="characters" />
          )}
        </ul>
      )}
      <details className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
        <summary className="text-xl font-bold text-gray-700 cursor-pointer">
          Prices
        </summary>
        {comic?.prices.map((price) => (
          <p key={price.type} className="text-gray-600">
            {price.type}: <span className="font-semibold">${price.price}</span>
          </p>
        ))}
      </details>

      <details className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
        <summary className="text-xl font-bold text-gray-700 cursor-pointer">
          Purchase Links
        </summary>
        {comic?.urls.map((url) => (
          <p key={url.type} className="mt-2 text-gray-600">
            <a
              href={url.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {url.type}
            </a>
          </p>
        ))}
      </details>

      <details className="bg-gray-100 p-4 rounded-lg shadow-md">
        <summary className="text-xl font-bold text-gray-700 cursor-pointer">
          Release Dates
        </summary>
        {comic?.dates.map((date) => (
          <p key={date.type} className="mt-2 text-gray-600">
            {date.type}: {new Date(date.date).toLocaleDateString()}
          </p>
        ))}
      </details>
    </div>
  );
};
