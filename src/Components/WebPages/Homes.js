import React from 'react';
import Crousal from '../Crousal/Crousal';
import News from '../News/News';
import Itemlist from '../Itemlist/Itemlist';
import SocialAccounts from '../SocialAccounts/SocialAcc';
import Govt from '../GovertLogo/Govt';
import Footers from '../Footers/Footers';
import Cards from '../CardsOfficer/Cards';
import Navbar from '../MenueBar/MenueBar';


const Homes = () => {
  return (
    <>
    <Navbar />
    <Crousal />
    <News />
    <Cards />
    <Itemlist />
    <Govt />
    <Footers />
    <SocialAccounts />
    </>
  );
}

export default Homes;
