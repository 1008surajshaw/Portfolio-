import Contact from "../components/contact/Contact";
import Socialbar from "../components/hero/Socialbar";
import Project from "../components/project/Project";
import Tech from "../components/tech/Tech";
import HeroSec from "../components/hero/HeroSec";

const Home = () => {

  return (
    <div className="mt-5 relative  mx-auto flex flex-col w-11/12 items-center max-w-maxContent text-white justify-between bg-gradient-to-r from-white to-richblack-50">
      <Socialbar />
      <HeroSec/>
      <Tech/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default Home;
