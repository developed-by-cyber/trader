import { useRef } from "react";
import {
  Collection1,
  Collection2,
  Explore,
  Footer,
  Header,
  Subscribe,
} from "../../components";
const Home = () => {
  const exploreRef = useRef(null);
  const worksRef = useRef(null);
  const handleEx = () => {
    exploreRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  const handleWorks = () =>{
    worksRef.current?.scrollIntoView({behavior: "smooth"});
  }

  return (
    <>
      <Header handleEx={handleEx} handleWorks={handleWorks}/>
      <div className="collection-hold">
        <div className="collection-holder">
          <Collection1 />
          <div className="circle"></div>
          <Collection2 worksRef={worksRef} />
        </div>
        <Explore exploreRef={exploreRef} />
      </div>
      <Subscribe />
      <Footer />
    </>
  );
};

export default Home;
