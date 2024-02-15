import AsideNews from "./AsideNews";
import MainNewsLayout from "./MainNewsLayout";

const NewsList = ({ newsItems }) => {
  const newsWithDescription = newsItems?.filter((item) => item.description);

  const newsWithoutDescription = newsItems?.filter((item) => !item.description);

  return (
    <>
      <main className="my-10 lg:my-14">
        <div className="container mx-auto grid grid-cols-12 gap-8">
          <MainNewsLayout newsWithDescription={newsWithDescription} />
          <AsideNews newsWithoutDescription={newsWithoutDescription} />
        </div>
      </main>
    </>
  );
};

export default NewsList;
