import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "../AppContext";

const URL = `https://api.unsplash.com/search/photos/?client_id=${
  import.meta.env.VITE_API_KEY
}`;

const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  // useQuery
  const { data, isLoading, isError } = useQuery({
    queryKey: ["Tasks", searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${URL}&query=${searchTerm}`);
      return result.data;
    },
  });

  // loading
  if (isLoading) {
    return (
      <section className="image-container">
        <h1>Loading...</h1>
      </section>
    );
  }

  // error
  if (isError) {
    return (
      <section className="image-container">
        <h1>An issue has occurred...</h1>
      </section>
    );
  }
  // no results found
  if (data.results < 1) {
    return (
      <section className="image-container">
        <h1>No results found...</h1>
      </section>
    );
  }

  // iterating fetched data
  return (
    <section className="image-container">
      {data?.results?.map((item) => {
        const imageData = item?.urls;

        return (
          <img
            key={item.id}
            src={imageData?.regular}
            alt={imageData?.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
};
export default Gallery;
