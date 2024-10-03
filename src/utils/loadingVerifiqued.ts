import { GetFetch } from "./GetFetch";

export const verify = async (
  set: Function,
  fetchUrl: Function,
  setLoadingf: Function,
  character: any
) => {
  try {
    const data = await GetFetch(fetchUrl(character?.id as string));
    set(data?.data?.results);
  } catch (error) {
    console.log(error, "error in verify function ");
  } finally {
    setLoadingf(false);
  }
};
