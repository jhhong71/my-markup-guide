import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/pages/Guide.scss';

const Basic = () => {
  const { hash } = useLocation();

  // URL에 #이 있으면 해당 위치로 스크롤 이동
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        // sticky 헤더 등에 가려지지 않도록 스크롤 위치 보정
        const headerOffset = 20; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  }, [hash]);

  return (
    <div className="guide-container">
      <h2 className="page-title">
        기본 정책
      </h2>

      {/* 1. 프로젝트 환경 */}
      <section id="basic-environment">
        <h3 className="section-title">프로젝트 환경</h3>
        <div className="table-scroll">
          <table className="guide-table">
            <colgroup>
              <col width="25%" />
              <col width="75%" />
            </colgroup>
            <tbody>
              <tr>
                <th>문서 및 버전</th>
                <td>HTML5, CSS3, JavaScript, React</td>
              </tr>
              <tr>
                <th>인코딩</th>
                <td>UTF-8</td>
              </tr>
              <tr>
                <th>웹 유형</th>
                <td>PC, Mobile, Responsive</td>
              </tr>
              <tr>
                <th>크로스 브라우징</th>
                <td>ie, chrome, firefox, safari</td>
              </tr>
              <tr>
                <th>해상도 기준 / 디자인 너비</th>
                <td>1920px / 1200px</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 2. 파일 / 폴더 규칙 */}
      <section id="basic-file-rule">
        <h3 className="section-title">파일 / 폴더 규칙</h3>
        <div className="table-scroll">
          <table className="guide-table">
            <colgroup>
              <col width="15%" />
              <col width="15%" />
              <col width="30%" />
              <col width="40%" />
            </colgroup>
            <thead>
              <tr>
                <th>분류 폴더</th>
                <th>서브 폴더</th>
                <th>파일 이름</th>
                <th>파일 설명</th>
              </tr>
            </thead>
            <tbody>
              {/* 폰트 */}
              <tr>
                <td className="text-center">폰트</td>
                <td className="text-center">-</td>
                <td>
                  font.css<br />
                  _font.scss
                </td>
                <td>웹폰트 - 가져오기</td>
              </tr>
              {/* CSS */}
              <tr>
                <td className="text-center">CSS</td>
                <td className="text-center">styles</td>
                <td>style.css</td>
                <td>스타일 - 가져오기</td>
              </tr>
              {/* SCSS (rowSpan 적용) */}
              <tr>
                <td rowSpan="6" className="text-center" style={{ borderRight: '1px solid #eee' }}>SCSS</td>
                <td rowSpan="6" className="text-center" style={{ borderRight: '1px solid #eee' }}>scss/include</td>
                <td>style.scss</td>
                <td>스타일 - 가져오기</td>
              </tr>
              <tr>
                <td>_variable.scss</td>
                <td>스타일 - 변수</td>
              </tr>
              <tr>
                <td>_mixin.scss</td>
                <td>스타일 - 믹스인</td>
              </tr>
              <tr>
                <td>_reset.scss</td>
                <td>스타일 - 초기화</td>
              </tr>
              <tr>
                <td>_common.scss</td>
                <td>스타일 - 공통 영역</td>
              </tr>
              <tr>
                <td>_layout.scss</td>
                <td>스타일 - 레이아웃</td>
              </tr>
              {/* JS */}
              <tr>
                <td className="text-center">JS</td>
                <td className="text-center">script</td>
                <td>script.js</td>
                <td>스크립트 - 가져오기</td>
              </tr>
              {/* IMG */}
              <tr>
                <td rowSpan="2" className="text-center" style={{ borderRight: '1px solid #eee' }}>img</td>
                <td rowSpan="2" className="text-center" style={{ borderRight: '1px solid #eee' }}>assets</td>
                <td>images</td>
                <td>이미지</td>
              </tr>
              <tr>
                <td>icons</td>
                <td>아이콘</td>
              </tr>
              {/* 레이아웃 */}
              <tr>
                <td rowSpan="4" className="text-center" style={{ borderRight: '1px solid #eee' }}>레이아웃</td>
                <td rowSpan="4" className="text-center" style={{ borderRight: '1px solid #eee' }}>layout/include</td>
                <td>_header.html</td>
                <td>레이아웃 - 헤더</td>
              </tr>
              <tr>
                <td>_aside.html</td>
                <td>레이아웃 - 사이드</td>
              </tr>
              <tr>
                <td>_contents.html</td>
                <td>레이아웃 - 컨텐츠</td>
              </tr>
              <tr>
                <td>_footer.html</td>
                <td>레이아웃 - 푸터</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. 프로젝트 진행 프로세스 */}
      <section id="basic-process">
        <h3 className="section-title">프로젝트 진행 프로세스</h3>
        <div className="table-scroll">
          <table className="guide-table">
            <colgroup>
              <col width="20%" />
              <col width="40%" />
              <col width="40%" />
            </colgroup>
            <thead>
              <tr>
                <th>작업 단계</th>
                <th>기술 구현 항목</th>
                <th>구현 항목별 코멘트</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center font-bold">스토리보드 검토</td>
                <td>
                  UI/UX 기술 구현 가능 여부 검토<br /><br />
                  UI/UX 접근성 제고 여부 검토
                </td>
                <td>
                  구현 어려울 시 대체 기술 기획자 협의<br /><br />
                  웹 콘텐츠 접근성 지침 2.1을 기준으로 함<br /><br />
                  접근성 미제고시 UI/UX 접근성 제고 요청
                </td>
              </tr>
              <tr>
                <td className="text-center font-bold">웹 리소스 구조화</td>
                <td>
                  리소스 폴더 구조 설계 및 생성<br /><br />
                  파일 네이밍 가이드 수립
                </td>
                <td>개발자 협의</td>
              </tr>
              <tr>
                <td className="text-center font-bold">시안 검토</td>
                <td>
                  컨텐츠 분석 및 정보의 논리적 선형화<br />
                  디자인에 따라 구역 분할<br /><br />
                  논리구조에 따른 HTML 문서 구조화<br />
                  디자인에 따라 구역 분할<br /><br />
                  공통 CSS, JS 가이드 작성<br /><br />
                  디자인적 접근성 제고 여부 검토
                </td>
                <td>
                  <br /><br />
                  웹 콘텐츠 접근성 지침 2.1을 기준으로 함<br /><br />
                  접근성 미제고시 시안 수정 요청
                </td>
              </tr>
              <tr>
                <td className="text-center font-bold">퍼블리싱</td>
                <td>
                  CSS 가이드 수립, 문서내 ID / Class 구조화 및 정리<br /><br />
                  웹 표준, 웹접근성 지침을 기준으로 JavaScript 사용불가 환경 마크업 진행<br /><br />
                  마크업 유효성 검사<br /><br />
                  CSS 작성<br /><br />
                  브라우저 렌더링 화면과 시안 비교<br /><br />
                  JavaScript 오류 테스트
                </td>
                <td>
                  <br /><br /><br />
                  W3C Markup Validator 이용<br /><br />
                  IE 11, Chrome, Firefox, Safari 등 Major 웹 브라우저 동작 테스트
                </td>
              </tr>
              <tr>
                <td className="text-center font-bold">산출물 최종 확인</td>
                <td>
                  브라우저 테스트<br /><br />
                  웹 표준 검사<br /><br />
                  문서의 논리적/의미론적 구조 수동 검사<br /><br />
                  웹 접근성 최종 검토
                </td>
                <td>
                  Major 웹 브라우저 렌더링 및 동작 테스트<br /><br />
                  W3C Markup Validator 이용<br /><br />
                  정량 / 정성 평가 진행
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Basic;