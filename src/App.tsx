import { Outlet } from 'react-router-dom';
import CustomScrollbar from './pages/general-components/CustomScrollBar';
import Header from './pages/general-components/Header';
import Footer from './pages/general-components/Footer';
import HeroContent from './pages/general-components/HeroContent';

function App() {

  return (
        <div>
          <Header />
          <HeroContent />
          <Outlet />
          <CustomScrollbar />
          <Footer />
        </div>
  )
}

export default App