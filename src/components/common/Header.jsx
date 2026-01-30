// src/components/common/Header.jsx
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import '../../styles/components/Header.scss';

const Header = ({ onToggleSidebar }) => {
  return (
    <header className="header-wrapper">
      {/* 로고 영역 */}
      <div className="logo-area">
        <h1>
          <Link to="/">웹퍼블리싱 가이드</Link>
        </h1>
        <span className="author-text">작성자: 홍진희</span>
      </div>

      {/* 우측 네비게이션 */}
      <nav className="gnb">
        <ul className="gnb-list">
          <li><Link to="/basic">기본 정책</Link></li>
          <li><Link to="/convention">규칙 가이드</Link></li>
          <li><Link to="/library">라이브러리</Link></li>
          <li><Link to="/accessibility">웹접근성</Link></li>
        </ul>
      </nav>

      {/* 모바일용 햄버거 버튼 */}
      <button className="mobile-menu-btn" onClick={onToggleSidebar}>
        <FiMenu size={24} />
      </button>
    </header>
  );
};

export default Header;