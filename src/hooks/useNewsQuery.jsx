import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

const useNewsQuery = () => {
  
  const [news, setNews] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState({ active: false, message: "" });
  const [error, setError] = useState(null);
  const debouncedSearchQuery = useDebounce(searchQuery, 1000);

  const fetchNews = async (category, query = "") => {
    try {
      setIsLoading({
        active: true,
        message: "Fetching news for you! Please wait...",
      });

      let url = "http://localhost:8000/v2/top-headlines";

      if (query) {
        url = `http://localhost:8000/v2/search?q=${query}`;
      } else if (category) {
        url = `http://localhost:8000/v2/top-headlines?category=${category}`;
      }

      const response = await fetch(url);

      if (!response.ok) {
        const errorMessage = `No News found For This Category || Status - ${response.status}`;
        throw new Error(errorMessage);
      } else {
        setError(null);
      }

      const data = await response.json();
      setNews(data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading({ active: false, message: "" });
    }
  };

  useEffect(() => {
    if (debouncedSearchQuery !== "") {
      fetchNews(null, debouncedSearchQuery);
    } else {
      fetchNews();
    }
  }, [debouncedSearchQuery]);

  return { news, fetchNews, searchQuery, setSearchQuery, isLoading, error };
};

export default useNewsQuery;
