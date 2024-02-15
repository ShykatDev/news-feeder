import logo from "../../../assets/logo.png";
import Categories from "./Categories";
import Search from "./Search";
import TimeAndDate from "./TimeAndDate";

const NavigationBar = () => {
  return (
    <>
      <nav className="border-b border-black py-6 md:py-8">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-6">
          <TimeAndDate />
          <a href="/">
            <img
              className="max-w-[100px] md:max-w-[165px]"
              src={logo}
              alt="Lws"
            />
          </a>
          <Search />
        </div>
        <Categories />
      </nav>
    </>
  );
};

export default NavigationBar;
