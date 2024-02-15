import Footer from "./components/global-components/footer/Footer";
import NavigationBar from "./components/global-components/navigation-bar/NavigationBar";
import LandingPage from "./pages/LandingPage";
import NewsProvider from "./providers/NewsProvider";

const App = () => {
  return (
    <>
      <NewsProvider>
        <NavigationBar />
        <LandingPage />
        <Footer />
      </NewsProvider>
    </>
  );
};

export default App;
