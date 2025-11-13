import { Outlet } from 'react-router-dom';
import { Header } from "../components/header";
import { Footer } from '../components/Footer';


function MainLayout() {
  return (
    <>
      <div className="main-layout">
        <Header/>
          <Outlet />
          <Footer/>
      </div>
    </>

  );
}

export default MainLayout;