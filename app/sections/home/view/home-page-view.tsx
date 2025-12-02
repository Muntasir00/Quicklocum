import About from '../about';
import Data from '../data';
import Digitalize from '../digitalize';
import Experience from '../experience';
import Faq from '../faq';
import Hero from '../hero';
import Match from '../match';
import Method from '../method';
import Service from '../service';

const HomePageView = () => {
  return (
    <div>
      <Hero />
      <Experience />
      <Service />
      <Data />
      <Digitalize />
      <Method />
      <About />
      <Match />
      <Faq />
    </div>
  );
};

export default HomePageView;
