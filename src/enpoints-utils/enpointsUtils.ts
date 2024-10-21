// apiKeys.ts
// export const apikey: string = "ab51f42e7da0a1028c12bd3f432339e2"; // Reemplaza con tu clave pública
// export const hash: string = "5f9ad9789a626058d5dc3b2045230d8e"; // Reemplaza con tu hash MD5
export const apikey: string = "a711ab622c0ccffe0eee039231aa181c";
export const hash: string = "44cbec27179652fd95c04428db4daf31";
export const ts: string = "1"; // Timestamp
export const urlMain: string = "https://gateway.marvel.com/v1/public/";

// [
//   "urlStory",
//   "urlCharacter",
//   "urlCharacterComics",
//   "urlCharacterSeries",
//   "urlEvent",
//   "urlCharactersPerPage",
//   "urlComic",
//   "urlComicCharacters",
//   "urlComicCreators",
//   "urlCreator",
//   "urlCreatorComics",
//   "urlCreatorSeries",
//   "urlEventComics",
//   "urlEventSeries",
// ];
// URL para obtener una historia específica
export const urlStory = (id: number | string): string =>
  `${urlMain}stories/${id}?ts=${ts}&apikey=${apikey}&hash=${hash}`;

// URL para obtener un personaje específico
export const urlCharacter = (id: number | string): string =>
  `${urlMain}characters/${id}?ts=${ts}&apikey=${apikey}&hash=${hash}`;

// URL para obtener cómics de un personaje específico
export const urlCharacterComics = (id: number | string): string => {
  console.log(
    `${urlMain}characters/${id}/comics?ts=${ts}&apikey=${apikey}&hash=${hash}`
  );
  return `${urlMain}characters/${id}/comics?ts=${ts}&apikey=${apikey}&hash=${hash}`;
};

// URL para obtener series de un personaje específico
export const urlCharacterSeries = (id: number | string): string =>
  `${urlMain}characters/${id}/series?ts=${ts}&apikey=${apikey}&hash=${hash}`;

// URL para obtener un evento específico
export const urlEvent = (id: number | string): string =>
  `${urlMain}events/${id}?ts=${ts}&apikey=${apikey}&hash=${hash}`;

//url para obtener por paginas
export const urlCharactersPerPage = (
  limit: number | string,
  offset: number | string,
  type: String = "characters"
): string =>
  `${urlMain}${type}?ts=1&limit=${limit}&offset=${offset}&apikey=${apikey}&hash=${hash}`;

//url para obtener por paginas
export const urlPorPage = (
  type: string | undefined,
  limit: number | string,
  offset: number | string
): string =>
  `${urlMain}${type}?ts=1&limit=${limit}&offset=${offset}&apikey=${apikey}&hash=${hash}`;

// URL para obtener un cómic específico
export const urlComic = (id: number | string): string =>
  `${urlMain}comics/${id}?ts=${ts}&apikey=${apikey}&hash=${hash}`;

// URL para obtener personajes de un cómic específico
export const urlComicCharacters = (id: number | string): string =>
  `${urlMain}comics/${id}/characters?ts=${ts}&apikey=${apikey}&hash=${hash}`;

// URL para obtener creadores de un cómic específico
export const urlComicCreators = (id: number | string): string =>
  `${urlMain}comics/${id}/creators?ts=${ts}&apikey=${apikey}&hash=${hash}`;

// URL para obtener un creador específico
export const urlCreator = (id: number | string): string =>
  `${urlMain}creators/${id}?ts=${ts}&apikey=${apikey}&hash=${hash}`;

// URL para obtener cómics de un creador específico
export const urlCreatorComics = (id: number | string): string =>
  `${urlMain}creators/${id}/comics?ts=${ts}&apikey=${apikey}&hash=${hash}`;

// URL para obtener series de un creador específico
export const urlCreatorSeries = (id: number | string): string =>
  `${urlMain}creators/${id}/series?ts=${ts}&apikey=${apikey}&hash=${hash}`;

// URL para obtener cómics de un evento específico
export const urlEventComics = (id: number | string): string =>
  `${urlMain}events/${id}/comics?ts=${ts}&apikey=${apikey}&hash=${hash}`;

// URL para obtener series de un evento específico
export const urlEventSeries = (id: number | string): string =>
  `${urlMain}events/${id}/series?ts=${ts}&apikey=${apikey}&hash=${hash}`;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// URL para obtener la lista de personajes
export const urlCharacters: string = `${urlMain}characters?ts=${ts}&apikey=${apikey}&hash=${hash}`;
// URL para obtener la lista de cómics
export const urlComics: string = `${urlMain}comics?ts=${ts}&apikey=${apikey}&hash=${hash}`;
// URL para obtener la lista de creadores
export const urlCreators: string = `${urlMain}creators?ts=${ts}&apikey=${apikey}&hash=${hash}`;
// URL para obtener la lista de eventos
export const urlEvents: string = `${urlMain}events?ts=${ts}&apikey=${apikey}&hash=${hash}`;
// URL para obtener la lista de series
export const urlSeries: string = `${urlMain}series?ts=${ts}&apikey=${apikey}&hash=${hash}`;

export const urlCharactersLimt = (limit: number | string): string =>
  `${urlMain}characters?ts=1&apikey=${apikey}&hash=${hash}&limit=${limit}`;

// URL para obtener eventos de un personaje específico
export const urlCharacterEvents = (id: number | string): string =>
  `${urlMain}characters/${id}/events?ts=${ts}&apikey=${apikey}&hash=${hash}`;

// URL para obtener historias de un personaje específico
export const urlCharacterStories = (id: number | string): string =>
  `${urlMain}characters/${id}/stories?ts=${ts}&apikey=${apikey}&hash=${hash}`;

// URL para obtener eventos de un cómic específico
export const urlComicEvents = (id: number | string): string =>
  `${urlMain}comics/${id}/events?ts=${ts}&apikey=${apikey}&hash=${hash}`;

// URL para obtener historias de un cómic específico
export const urlComicStories = (id: number | string): string =>
  `${urlMain}comics/${id}/stories?ts=${ts}&apikey=${apikey}&hash=${hash}`;

// URL para obtener eventos de un creador específico
export const urlCreatorEvents = (id: number | string): string =>
  `${urlMain}creators/${id}/events?ts=${ts}&apikey=${apikey}&hash=${hash}`;

// URL para obtener historias de un creador específico
export const urlCreatorStories = (id: number | string): string =>
  `${urlMain}creators/${id}/stories?ts=${ts}&apikey=${apikey}&hash=${hash}`;

// URL para obtener personajes de un evento específico
export const urlEventCharacters = (id: number | string): string =>
  `${urlMain}events/${id}/characters?ts=${ts}&apikey=${apikey}&hash=${hash}`;

// URL para obtener creadores de un evento específico
export const urlEventCreators = (id: number | string): string =>
  `${urlMain}events/${id}/creators?ts=${ts}&apikey=${apikey}&hash=${hash}`;

// URL para obtener historias de un evento específico
export const urlEventStories = (id: number | string): string =>
  `${urlMain}events/${id}/stories?ts=${ts}&apikey=${apikey}&hash=${hash}`;

// URL para obtener una serie específica
export const urlSeriesById = (id: number | string): string =>
  `${urlMain}series/${id}?ts=${ts}&apikey=${apikey}&hash=${hash}`;

// URL para obtener personajes de una serie específica
export const urlSeriesCharacters = (id: number | string): string =>
  `${urlMain}series/${id}/characters?ts=${ts}&apikey=${apikey}&hash=${hash}`;

// URL para obtener cómics de una serie específica
export const urlSeriesComics = (id: number | string): string =>
  `${urlMain}series/${id}/comics?ts=${ts}&apikey=${apikey}&hash=${hash}`;

// URL para obtener creadores de una serie específica
export const urlSeriesCreators = (id: number | string): string =>
  `${urlMain}series/${id}/creators?ts=${ts}&apikey=${apikey}&hash=${hash}`;

// URL para obtener eventos de una serie específica
export const urlSeriesEvents = (id: number | string): string =>
  `${urlMain}series/${id}/events?ts=${ts}&apikey=${apikey}&hash=${hash}`;

// URL para obtener historias de una serie específica
export const urlSeriesStories = (id: number | string): string =>
  `${urlMain}series/${id}/stories?ts=${ts}&apikey=${apikey}&hash=${hash}`;

// URL para obtener la lista de historias
export const urlStories: string = `${urlMain}stories?ts=${ts}&apikey=${apikey}&hash=${hash}`;

// URL para obtener personajes de una historia específica
export const urlStoryCharacters = (id: number | string): string =>
  `${urlMain}stories/${id}/characters?ts=${ts}&apikey=${apikey}&hash=${hash}`;

// URL para obtener cómics de una historia específica
export const urlStoryComics = (id: number | string): string =>
  `${urlMain}stories/${id}/comics?ts=${ts}&apikey=${apikey}&hash=${hash}`;

// URL para obtener creadores de una historia específica
export const urlStoryCreators = (id: number | string): string =>
  `${urlMain}stories/${id}/creators?ts=${ts}&apikey=${apikey}&hash=${hash}`;

// URL para obtener eventos de una historia específica
export const urlStoryEvents = (id: number | string): string =>
  `${urlMain}stories/${id}/events?ts=${ts}&apikey=${apikey}&hash=${hash}`;

// URL para obtener series de una historia específica
export const urlStorySeries = (id: number | string): string =>
  `${urlMain}stories/${id}/series?ts=${ts}&apikey=${apikey}&hash=${hash}`;
