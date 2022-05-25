/**
 * It takes a category as a parameter, makes a request to the Giphy API, and returns an array of
 * objects with the id, title, and url of the gifs.
 * @param category - The category of the gifs you want to get.
 * @returns An array of objects.
 */
export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=8&api_key=e5z09oHxGhhYOZIKo1AORFtPq6b5lyMJ`;
  const resp = await fetch(url);

  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });
  return gifs;
};
