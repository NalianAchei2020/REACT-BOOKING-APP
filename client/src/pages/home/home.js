import Featured from "../../Components/featured/Featured";
import FeaturedProperties from "../../Components/featuredProperty/featuredProperty";
import Footer from "../../Components/footer/footer";
import Header from "../../Components/header/header";
import MailList from "../../Components/mailist/mailist";
import Navbar from "../../Components/navbar/navbar";
import PropertyList from "../../Components/propertyList/propertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;