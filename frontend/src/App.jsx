import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Content from "./components/Sections/Content";
import Content2 from "./components/Sections/Content2";
import Hero from "./components/Sections/Hero";
const App = () => {
  return (
    <div className="">
      <Nav />
      <Hero />
      <Content />
      <Content2 />
      <Footer />
    </div>
  );
};

export default App;
