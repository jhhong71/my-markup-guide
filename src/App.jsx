// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import Basic from './pages/Basic';
// 1. Library 페이지 import (추가된 부분)
import Library from './pages/Library'; 
import Convention from './pages/Convention';
import Accessibility from './pages/Accessibility';
import './styles/main.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Basic />} />
        <Route path="basic" element={<Basic />} />
        {/* 2. 라우트 연결 (추가된 부분) */}
        <Route path="library" element={<Library />} />
        <Route path="convention" element={<Convention />} />
        <Route path="accessibility" element={<Accessibility />} />
      </Route>
    </Routes>
  );
}

export default App;