import { Outlet } from 'react-router';
import Footer from './Footer';

const main = () => {
  return (
    <div className='max-w-[1920px] bg-[#EFF6F9] min-h-screen mx-auto font-nouvelle'>
      <Outlet />
      <Footer />
    </div>
  );
};

export default main;
