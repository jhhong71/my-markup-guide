import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CodeBlock from '../components/common/CodeBlock';
import '../styles/pages/Guide.scss'; // ★ 공통 스타일 SCSS 임포트

const Accessibility = () => {
  const { hash } = useLocation();

  // 스크롤 이동 로직
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
        웹접근성
      </h2>

      {/* ================= 1. 웹접근성 개요 ================= */}
      <section id="acc-overview">
        <h3 className="section-title">1. 웹접근성 개요</h3>
        
        <h4 className="sub-title">웹접근성이란?</h4>
        <p className="desc-text">
          모든 사용자(장애인, 고령자 등)가 어떠한 기술 환경에서도 전문적인 능력 없이 웹 사이트에서 제공하는 모든 정보에 접근하고 이용할 수 있도록 보장하는 것을 말합니다.
        </p>

        <h4 className="sub-title">한국형 웹 콘텐츠 접근성 지침 2.1 (KWCAG 2.1)</h4>
        <p className="desc-text">
          4가지 원칙과 13개 지침, 24개의 검사 항목을 준수하여야 합니다.
        </p>
        <div class="table-scroll">
          <table className="guide-table">
            <colgroup>
              <col width="20%" />
              <col width="25%" />
              <col width="55%" />
            </colgroup>
            <thead>
              <tr>
                <th>원칙</th>
                <th>지침</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan="4" className="text-center font-bold" style={{ borderRight: '1px solid #eee' }}>인식의 용이성</td>
                <td className="text-center">대체 텍스트</td>
                <td>텍스트가 아닌 콘텐츠는 그 의미나 용도를 인식할 수 있도록 대체 텍스트를 제공해야 한다.</td>
              </tr>
              <tr>
                <td className="text-center">멀티미디어 대체 수단</td>
                <td>동영상, 음성 등에는 자막, 대본 또는 수화를 제공해야 한다.</td>
              </tr>
              <tr>
                <td className="text-center">명료성</td>
                <td>콘텐츠는 색에 관계없이 인식될 수 있어야 하고, 지시 사항은 모양, 크기, 위치, 방향, 색 등에 관계없이 인식될 수 있어야 한다.</td>
              </tr>
              <tr>
                <td className="text-center">가독성</td>
                <td>텍스트 콘텐츠와 배경 간의 명도 대비는 4.5:1 이상이어야 한다.</td>
              </tr>
              
              <tr>
                <td rowSpan="4" className="text-center font-bold" style={{ borderRight: '1px solid #eee' }}>운용의 용이성</td>
                <td className="text-center">입력장치 접근성</td>
                <td>모든 기능은 키보드만으로도 사용할 수 있어야 한다.</td>
              </tr>
              <tr>
                <td className="text-center">충분한 시간 제공</td>
                <td>시간 제한이 있는 콘텐츠는 응답 시간을 조절할 수 있어야 한다.</td>
              </tr>
              <tr>
                <td className="text-center">광과민성 발작 예방</td>
                <td>초당 3~50회 주기로 깜빡이거나 번쩍이는 콘텐츠를 제공하지 않아야 한다.</td>
              </tr>
              <tr>
                <td className="text-center">쉬운 내비게이션</td>
                <td>콘텐츠의 반복되는 영역은 건너뛸 수 있어야 하고, 페이지의 제목을 제공해야 한다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>


      {/* ================= 2. WAI-ARIA ================= */}
      <section id="acc-aria">
        <h3 className="section-title">2. WAI-ARIA</h3>
        
        <h4 className="sub-title">WAI-ARIA란?</h4>
        <p className="desc-text">
          WAI-ARIA(Web Accessibility Initiative – Accessible Rich Internet Applications)는 웹 페이지의 접근성을 높이기 위해 W3C에서 제정한 기술 명세입니다.<br/>
          스크린 리더가 인식하지 못하는 동적인 콘텐츠(AJAX, Tab, Modal 등)에 의미를 부여하여 접근성을 향상시킵니다.
        </p>

        <h4 className="sub-title">주요 속성</h4>
        <div class="table-scroll">
          <table className="guide-table">
            <colgroup>
              <col width="20%" />
              <col width="80%" />
            </colgroup>
            <thead>
              <tr>
                <th>구분</th>
                <th>설명 및 예시</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center font-bold">Role (역할)</td>
                <td>
                  UI 요소의 역할을 정의합니다.<br/>
                  예: <span className="code-span">role="button"</span>, <span className="code-span">role="tab"</span>, <span className="code-span">role="dialog"</span>
                </td>
              </tr>
              <tr>
                <td className="text-center font-bold">Property (속성)</td>
                <td>
                  요소의 성질이나 특징을 정의합니다.<br/>
                  예: <span className="code-span">aria-label="닫기"</span> (레이블 제공), <span className="code-span">aria-controls="content-1"</span> (제어 대상)
                </td>
              </tr>
              <tr>
                <td className="text-center font-bold">State (상태)</td>
                <td>
                  요소의 현재 상태를 정의합니다. (동적으로 변경됨)<br/>
                  예: <span className="code-span">aria-expanded="true"</span> (펼쳐짐), <span className="code-span">aria-selected="false"</span> (선택 안됨)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4 className="sub-title" style={{ color: 'var(--black-900)' }}>사용 예시 (Tab UI)</h4>
        <CodeBlock language="html" code={`
<ul role="tablist">
  <li role="tab" aria-selected="true" aria-controls="panel1" id="tab1" tabindex="0">탭 1</li>
  <li role="tab" aria-selected="false" aria-controls="panel2" id="tab2" tabindex="-1">탭 2</li>
</ul>

<div role="tabpanel" id="panel1" aria-labelledby="tab1">
  <p>탭 1의 내용입니다.</p>
</div>
<div role="tabpanel" id="panel2" aria-labelledby="tab2" hidden>
  <p>탭 2의 내용입니다.</p>
</div>
        `} />
      </section>


      {/* ================= 3. 역할별 체크리스트 ================= */}
      <section id="acc-checklist">
        <h3 className="section-title">3. 역할별 체크리스트</h3>
        <p className="desc-text">프로젝트 진행 단계별로 점검해야 할 주요 항목입니다.</p>

        <h4 className="sub-title">기획 / 디자인 단계</h4>
        <div class="table-scroll">
          <table className="guide-table">
            <colgroup>
              <col width="30%" />
              <col width="70%" />
            </colgroup>
            <thead>
              <tr>
                <th>항목</th>
                <th>내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">명도 대비</td>
                <td>텍스트와 배경의 명도 대비는 4.5:1 이상이어야 한다. (큰 텍스트는 3:1)</td>
              </tr>
              <tr>
                <td className="text-center">색상 무관한 인식</td>
                <td>정보를 전달할 때 색상만으로 구분하지 않고 패턴이나 텍스트를 병행해야 한다. (예: 그래프)</td>
              </tr>
              <tr>
                <td className="text-center">일관된 UI</td>
                <td>사이트 전체에서 동일한 기능을 하는 요소는 일관된 디자인과 위치를 가져야 한다.</td>
              </tr>
              <tr>
                <td className="text-center">초점 이동 순서</td>
                <td>논리적인 순서로 탭 키 이동이 가능하도록 레이아웃을 구성해야 한다.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4 className="sub-title">퍼블리싱 / 개발 단계</h4>
        <div class="table-scroll">
          <table className="guide-table">
            <colgroup>
              <col width="30%" />
              <col width="70%" />
            </colgroup>
            <thead>
              <tr>
                <th>항목</th>
                <th>내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">대체 텍스트 (Alt)</td>
                <td>모든 <span className="code-span">img</span> 태그에는 <span className="code-span">alt</span> 속성을 제공해야 한다. (장식용 이미지는 빈 값 <span className="code-span">alt=""</span>)</td>
              </tr>
              <tr>
                <td className="text-center">키보드 접근성</td>
                <td>마우스로 할 수 있는 모든 동작(메뉴 열기, 슬라이드 넘기기 등)은 키보드로도 가능해야 한다.</td>
              </tr>
              <tr>
                <td className="text-center">초점 시각화</td>
                <td>키보드 탭 키로 이동 시 현재 위치(Focus Ring)가 시각적으로 명확히 보여야 한다. (<span className="code-span">outline: none</span> 금지)</td>
              </tr>
              <tr>
                <td className="text-center">폼 레이블 제공</td>
                <td>모든 <span className="code-span">input</span>, <span className="code-span">select</span> 요소는 <span className="code-span">label</span> 태그 또는 <span className="code-span">title</span> 속성을 가져야 한다.</td>
              </tr>
              <tr>
                <td className="text-center">표의 구성</td>
                <td>데이터 테이블은 <span className="code-span">caption</span>, <span className="code-span">scope</span> 속성을 사용하여 구조화해야 한다.</td>
              </tr>
              <tr>
                <td className="text-center">스킵 내비게이션</td>
                <td>페이지 최상단에 "본문 바로가기" 링크를 제공해야 한다.</td>
              </tr>
              <tr>
                <td className="text-center">WAI-ARIA 활용</td>
                <td>HTML 태그만으로 의미 전달이 부족한 경우 ARIA 속성을 적절히 사용하여 보완한다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
};

export default Accessibility;