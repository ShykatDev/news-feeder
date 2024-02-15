import { useContext, useEffect, useRef, useState } from "react";
import { NewsContext } from "../../../context/all-contexts";

const Search = () => {
  // Accessing searchQuery and setSearchQuery from NewsContext
  const { searchQuery, setSearchQuery } = useContext(NewsContext);
  const [showSearch, setShowSearch] = useState(false);
  const ref = useRef()

  useEffect(()=>{
    if(showSearch){
      ref.current.focus()
    }
  },[showSearch])

  // Function to handle input change
  const handleChange = (e) => {
    setSearchQuery(e.target.value); // Update searchQuery with the new value
  };
const handleSeachToggle = ()=> {setShowSearch(!showSearch); ref.current.focus()}
  return (
    <>
      {/* Search input field */}
      <div className={`p-3 rounded-lg relative text-gray-600 flex justify-end items-center w-[300px] ${showSearch && "border-2 border-gray-300 bg-white"}`}>
        {showSearch && <input
          className=" h-full w-full rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Search"
          ref={ref}
        />}
        {/* Search button */}
        <button type="submit" onClick={handleSeachToggle} className="">
          <svg
            className="text-gray-600 h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 56.966 56.966"
            style={{ enableBackground: "new 0 0 56.966 56.966" }}
            xmlSpace="preserve"
            width="512px"
            height="512px"
          >
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Search;
