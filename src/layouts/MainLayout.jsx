import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow mt-[80px]"> 
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
