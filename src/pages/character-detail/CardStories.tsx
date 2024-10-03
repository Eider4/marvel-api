import { useEffect, useState } from "react";
import { GetFetch } from "../../utils/GetFetch";
import { urlStory } from "../../enpoints-utils/enpointsUtils";

type Props = {
  stories: any;
};
export const Cardstories: React.FC<Props> = ({ stories }) => {
  const [storiess, setstoriess] = useState<any>([]);
  const p = stories.resourceURI.split("/");
  const getstoriess = async (storiesId: string) => {
    try {
      const data = await GetFetch(urlStory(storiesId as string));
      setstoriess(data.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getstoriess(p[p.length - 1]);
  }, []);

  return (
    <li className="">
      {storiess.map((stories: any) => (
        <>
          <p>
            {stories.title} - {stories.type}
          </p>
        </>
      ))}
    </li>
  );
};
[
  "urlStory",
  "urlCharacter",
  "urlCharacterComics",
  "urlCharacterSeries",
  "urlEvent",
  "urlCharactersPerPage",
  "urlComic",
  "urlComicCharacters",
  "urlComicCreators",
  "urlCreator",
  "urlCreatorComics",
  "urlCreatorSeries",
  "urlEvent",
  "urlEventComics",
  "urlEventSeries",
];
