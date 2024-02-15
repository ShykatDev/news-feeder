import { useContext } from "react";
import { NewsContext } from "../context/all-contexts";
import ErrorMessage from "../components/page-components/landing-page/ErrorMessage";
import LoadingMessage from "../components/page-components/landing-page/LoadingMessage";
import NewsList from "../components/page-components/landing-page/NewsList";

const LandingPage = () => {
  // Accessing news, isLoading, and error state from NewsContext
  const { news, isLoading, error } = useContext(NewsContext);

  // Variable to store news items
  let newsItems;

  // Check if news object exists and has a 'result' or 'articles' property
  if (news && news?.result) {
    // If 'result' exists, map over it
    newsItems = news?.result.map((item) => item);
  } else if (news && news?.articles) {
    // If 'articles' exists, map over it
    newsItems = news?.articles.map((item) => item);
  }

  return (
    <>
      {error ? (
        // If there's an error, display ErrorMessage component
        <ErrorMessage message={error.message} />
      ) : isLoading.active ? (
        // If loading is active, display LoadingMessage component
        <LoadingMessage message={isLoading.message} />
      ) : newsItems?.length <= 0 ? (
        // If no news items found, display a message
        <div className="min-h-[80vh] flex justify-center items-center text-lg font-semibold text-red-500">
          Sorry! No news found.
        </div>
      ) : (
        // If news items exist, display NewsList component
        <NewsList newsItems={newsItems} />
      )}
    </>
  );
};

export default LandingPage;
