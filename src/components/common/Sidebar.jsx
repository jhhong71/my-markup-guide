import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// 1. FiX 추가 (누락되었던 import)
import { FiFileText, FiCheckSquare, FiBox, FiUserCheck, FiChevronDown, FiX } from 'react-icons/fi';
import '../../styles/components/Sidebar.scss';

// ArrowIcon 컴포넌트 (외부 선언)
const ArrowIcon = ({ isOpen }) => (
  <FiChevronDown 
    className={`arrow-icon ${isOpen ? 'open' : ''}`} 
    size={18} 
  />
);

const Sidebar = ({ isOpen, onClose }) => {
  const { pathname, hash } = useLocation();

  const [openSections, setOpenSections] = useState({
    basic: true,
    convention: true,
    library: false,
    accessibility: false,
  });

  const [openSubSections, setOpenSubSections] = useState({
    std: true,
    html: false,
    css: false,
    scss: false,
    name: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleSubSection = (subSection) => {
    setOpenSubSections((prev) => ({ ...prev, [subSection]: !prev[subSection] }));
  };

  const renderLink = (to, text) => {
    const fullPath = to.includes('#') ? to : to; 
    const currentPath = hash ? pathname + hash : pathname;
    const isActive = currentPath === fullPath;

    return (
      <Link 
        to={to} 
        className={`nav-link ${isActive ? 'active' : ''}`}
      >
        {text}
      </Link>
    );
  };

  return (
    <>
      {/* 1. 모바일용 배경 오버레이 (사이드바 바깥에 위치해야 함) */}
      <div 
        className={`sidebar-overlay ${isOpen ? 'show' : ''}`} 
        onClick={onClose}
      ></div>

      {/* 2. 사이드바 본체 */}
      {/* isOpen 상태에 따라 모바일에서 열림 클래스 추가 */}
      <aside className={`sidebar ${isOpen ? 'mobile-open' : ''}`}>
        
        {/* 모바일용 닫기 버튼 (우측 상단) */}
        <div className="mobile-close-btn" onClick={onClose}>
           <FiX size={24} />
        </div>

        {/* --- 메뉴 컨텐츠 시작 --- */}
        
        {/* 1. 기본 정책 */}
        <div>
          <div className="group-header" onClick={() => toggleSection('basic')}>
            <div className="header-title">
              <FiFileText size={18} style={{ marginRight: '8px' }} />
              <span>기본 정책</span>
            </div>
            <ArrowIcon isOpen={openSections.basic} />
          </div>
          {openSections.basic && (
            <ul className="nav-list depth-1">
              <li>{renderLink('/basic#basic-environment', '프로젝트 환경')}</li>
              <li>{renderLink('/basic#basic-file-rule', '파일 / 폴더 규칙')}</li>
              <li>{renderLink('/basic#basic-process', '진행 프로세스')}</li>
            </ul>
          )}
        </div>

        <div className="divider"></div>

        {/* 2. 규칙 가이드 */}
        <div>
          <div className="group-header" onClick={() => toggleSection('convention')}>
            <div className="header-title">
              <FiCheckSquare size={18} style={{ marginRight: '8px' }} />
              <span>규칙 가이드</span>
            </div>
            <ArrowIcon isOpen={openSections.convention} />
          </div>
          
          {openSections.convention && (
            <div>
              {/* 서브 메뉴들 */}
              <div className="sub-header" onClick={() => toggleSubSection('std')}>
                <span>1. 표준 규칙</span>
                <ArrowIcon isOpen={openSubSections.std} />
              </div>
              {openSubSections.std && (
                <ul className="nav-list">
                  <li>{renderLink('/convention#std-doc', '기본문서')}</li>
                  <li>{renderLink('/convention#std-semantic', 'Semantic Markup')}</li>
                  <li>{renderLink('/convention#std-entity', '특수기호 Entity')}</li>
                </ul>
              )}

              <div className="sub-header" onClick={() => toggleSubSection('html')}>
                 <span>2. HTML 규칙</span>
                 <ArrowIcon isOpen={openSubSections.html} />
              </div>
              {openSubSections.html && (
                <ul className="nav-list">
                  <li>{renderLink('/convention#html-tag', '태그 / 속성')}</li>
                  <li>{renderLink('/convention#html-access', '웹접근성')}</li>
                  <li>{renderLink('/convention#html-idclass', 'ID / 들여쓰기')}</li>
                </ul>
              )}

              <div className="sub-header" onClick={() => toggleSubSection('css')}>
                 <span>3. CSS 규칙</span>
                 <ArrowIcon isOpen={openSubSections.css} />
              </div>
              {openSubSections.css && (
                <ul className="nav-list">
                  <li>{renderLink('/convention#css-prop', '속성 / 선택자')}</li>
                  <li>{renderLink('/convention#css-space', '세미콜론 / 공백')}</li>
                  <li>{renderLink('/convention#css-blind', '숨김 텍스트')}</li>
                </ul>
              )}

              <div className="sub-header" onClick={() => toggleSubSection('scss')}>
                 <span>4. SCSS 규칙</span>
                 <ArrowIcon isOpen={openSubSections.scss} />
              </div>
              {openSubSections.scss && (
                <ul className="nav-list">
                  <li>{renderLink('/convention#scss-struct', '파일 구조')}</li>
                  <li>{renderLink('/convention#scss-etc', '주석 / 반복')}</li>
                </ul>
              )}

              <div className="sub-header" onClick={() => toggleSubSection('name')}>
                 <span>5. 네임 규칙</span>
                 <ArrowIcon isOpen={openSubSections.name} />
              </div>
              {openSubSections.name && (
                <ul className="nav-list">
                  <li>{renderLink('/convention#name-notation', '표기법')}</li>
                  <li>{renderLink('/convention#name-idclass', 'ID vs Class')}</li>
                  <li>{renderLink('/convention#name-reserved', '예약어')}</li>
                </ul>
              )}
            </div>
          )}
        </div>

        <div className="divider"></div>

        {/* 3. 라이브러리 */}
        <div>
          <div className="group-header" onClick={() => toggleSection('library')}>
            <div className="header-title">
              <FiBox size={18} style={{ marginRight: '8px' }} />
              <span>라이브러리</span>
            </div>
            <ArrowIcon isOpen={openSections.library} />
          </div>
          {openSections.library && (
            <ul className="nav-list depth-1">
              <li>{renderLink('/library', 'UI 컴포넌트')}</li>
            </ul>
          )}
        </div>

        <div className="divider"></div>

        {/* 4. 웹접근성 */}
        <div>
          <div className="group-header" onClick={() => toggleSection('accessibility')}>
            <div className="header-title">
              <FiUserCheck size={18} style={{ marginRight: '8px' }} />
              <span>웹접근성</span>
            </div>
            <ArrowIcon isOpen={openSections.accessibility} />
          </div>
          {openSections.accessibility && (
            <ul className="nav-list depth-1">
              <li>{renderLink('/accessibility#acc-overview', '1. 개요')}</li>
              <li>{renderLink('/accessibility#acc-aria', '2. WAI-ARIA')}</li>
              <li>{renderLink('/accessibility#acc-checklist', '3. 체크리스트')}</li>
            </ul>
          )}
        </div>

      </aside>
    </>
  );
};

export default Sidebar;