
import axios from "axios";
import { getQuery } from "./cookies";

interface SearchImagesProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setHasMore: React.Dispatch<React.SetStateAction<boolean>>;
  page?: number;
}

const searchImages = async (props: SearchImagesProps) => {
  const { setPage, setHasMore, page = 1 } = props;
  const query = getQuery();

  if (!query) return [];

  const { data } = await axios.get("/api/getPhotos/", {
    params: { query, page: 1 },
  });

  setPage((prev) => prev + 1);

  if (data.length < 15) {
    setHasMore(false);
  } else {
    setHasMore(true);
  }

  return data;
};

export default searchImages;

