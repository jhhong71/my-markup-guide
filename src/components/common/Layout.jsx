import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import '../../styles/components/Layout.scss';

const Layout = () => {
  const location = useLocation();
  const isLibraryPage = location.pathname === '/library';

  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  useEffect(() => {
    if (isMobileSidebarOpen) {
      setIsMobileSidebarOpen(false);
    }
  }, [location.pathname]);

  return (
    <div className="layout-container">
      <Header onToggleSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)} />
      
      <div className="layout-body">
        {!isLibraryPage && (
          <Sidebar 
            isOpen={isMobileSidebarOpen} 
            onClose={() => setIsMobileSidebarOpen(false)} 
          />
        )}
        
        <main className={`main-outer ${isLibraryPage ? 'is-full' : ''}`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;