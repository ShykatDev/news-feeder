import { useContext } from "react";
import { NewsContext } from "../../../context/all-contexts";

// Define an array of news categories with unique IDs
const newsCategories = [
  { id: crypto.randomUUID(), name: "General" },
  { id: crypto.randomUUID(), name: "Business" },
  { id: crypto.randomUUID(), name: "Entertainment" },
  { id: crypto.randomUUID(), name: "Health" },
  { id: crypto.randomUUID(), name: "Science" },
  { id: crypto.randomUUID(), name: "Sports" },
  { id: crypto.randomUUID(), name: "Technology" },
  { id: crypto.randomUUID(), name: "Environment" },
  { id: crypto.randomUUID(), name: "Education" },
  { id: crypto.randomUUID(), name: "Fashion" },
  { id: crypto.randomUUID(), name: "Food" },
  { id: crypto.randomUUID(), name: "Travel" },
  { id: crypto.randomUUID(), name: "Art & Culture" },
  { id: crypto.randomUUID(), name: "Opinion" },
];

const Categories = () => {
  // Accessing fetchNews function from NewsContext
  const { fetchNews } = useContext(NewsContext);

  // Function to handle category click
  const handleClick = (categoryName) => {
    // Convert the category name to lowercase and fetch news for that category
    fetchNews(categoryName.toLowerCase());
  };

  return (
    <>
      {/* Container for categories */}
      <div className="container mx-auto mt-6">
        {/* List of categories */}
        <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
          {newsCategories.map((item) => (
            <li key={item.id}>
              {/* Category link */}
              <a
                className="cursor-pointer"
                onClick={() => handleClick(item.name)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Categories;
