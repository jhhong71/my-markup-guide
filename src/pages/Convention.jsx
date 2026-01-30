import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CodeBlock from '../components/common/CodeBlock';
import '../styles/pages/Guide.scss';

const Convention = () => {
  const { hash } = useLocation();

  // 스크롤 이동 로직
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
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
        규칙 가이드
      </h2>

      {/* ================= 1. 표준 규칙 ================= */}
      <section id="std-basic">
        <h3 className="section-title">1. 표준 규칙</h3>
        
        <h4 id="std-doc" className="sub-title">기본 문서 (HTML5 Boilerplate)</h4>
        <p className="desc-text">HTML5 표준 DTD를 사용하며, 언어 속성은 'ko'를 기본으로 합니다.</p>
        <CodeBlock language="html" code={`
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
</head>
<body>
  ...
</body>
</html>
        `} />

        <h4 id="std-semantic" className="sub-title">Semantic Markup</h4>
        <div className="table-scroll">
          <table className="guide-table">
            <colgroup>
              <col width="15%" />
              <col width="85%" />
            </colgroup>
            <thead>
              <tr>
                <th>Tag</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="font-bold text-center">&lt;article&gt;</td><td>문서, 페이지, 애플리케이션, 또는 사이트 안에서 독립적으로 구분해 배포하거나 재사용할 수 있는 구획을 나타냅니다.</td></tr>
              <tr><td className="font-bold text-center">&lt;aside&gt;</td><td>문서의 주요 내용과 간접적으로만 연관된 부분을 나타냅니다.</td></tr>
              <tr><td className="font-bold text-center">&lt;details&gt;</td><td>"열림" 상태일 때만 내부 정보를 보여주는 정보 공개 위젯을 생성합니다. <span className="code-span">&lt;summary&gt;</span> 요소로 레이블을 제공합니다.</td></tr>
              <tr><td className="font-bold text-center">&lt;figure&gt;</td><td>독립적인 콘텐츠를 표현합니다. <span className="code-span">&lt;figcaption&gt;</span>으로 설명을 붙일 수 있습니다.</td></tr>
              <tr><td className="font-bold text-center">&lt;footer&gt;</td><td>푸터를 나타냅니다. 작성자, 저작권 정보 등을 담습니다.</td></tr>
              <tr><td className="font-bold text-center">&lt;header&gt;</td><td>소개 및 탐색에 도움을 주는 콘텐츠를 나타냅니다.</td></tr>
              <tr><td className="font-bold text-center">&lt;main&gt;</td><td>문서 <span className="code-span">&lt;body&gt;</span>의 주요 콘텐츠를 나타냅니다.</td></tr>
              <tr><td className="font-bold text-center">&lt;nav&gt;</td><td>링크를 보여주는 구획을 나타냅니다. 메뉴, 목차 등에 사용됩니다.</td></tr>
              <tr><td className="font-bold text-center">&lt;section&gt;</td><td>문서의 독립적인 구획을 나타냅니다.</td></tr>
            </tbody>
          </table>
        </div>

        <h4 id="std-entity" className="sub-title">특수기호 Entity name</h4>
        <ul className="guide-list">
          <li>
            특수기호는 <a href="https://symbl.cc/kr/html-entities/" target="_blank" rel="noreferrer" className="text-link">Entity name</a>을 사용하여 entity 코드로 변환한다.
          </li>
        </ul>
      </section>


      {/* ================= 2. 코드 규칙 (HTML) ================= */}
      <section id="code-html">
        <h3 className="section-title">2. 코드 규칙 (HTML)</h3>

        <h4 id="html-tag" className="sub-title">적절한 태그 및 속성 사용</h4>
        <ul className="guide-list">
          <li>클릭했을 때 이벤트가 발생하는 경우 <span className="code-span">button</span> 태그를 사용한다.</li>
          <li>클릭했을 때 다른 페이지로 넘어가는 경우 <span className="code-span">a</span> 태그를 사용한다.</li>
          <li><span className="code-span">a</span> 태그 안에 <span className="code-span">button</span> 태그를 넣는 등 인터랙티브 요소에 인터랙티브 요소를 넣지 않도록 한다.</li>
          <li>단락이 아닌 경우, 단순히 block 속성을 사용하기 위해서 <span className="code-span">p</span> 태그를 사용하지 않는다.</li>
          <li><span className="code-span">heading</span> 태그는 레벨 순서를 지켜 작성한다.</li>
          <li><span className="code-span">button</span> 태그에는 <span className="code-span">type</span>을 명시한다.</li>
          <li>레이아웃을 표현하기 위하여 표를 사용하지 않는다.</li>
        </ul>

        <h4 id="html-access" className="sub-title">웹접근성</h4>
        <ul className="guide-list">
          <li><span className="code-span">img</span> 요소의 <span className="code-span">alt</span> 속성은 반드시 제공되어야 하며, 의미없는 이미지에 한하여 빈 값을 허용한다.</li>
          <li><span className="code-span">input</span> 요소는 <span className="code-span">label</span>과 연결하거나 <span className="code-span">title</span> 값을 지정하여야 한다.</li>
          <li>분리된 입력폼은 각각 <span className="code-span">title</span> 값을 지정하여야 한다.</li>
          <li>적절한 <span className="code-span">label</span> 텍스트 또는 <span className="code-span">title</span>를 사용하여야 한다.</li>
          <li>적절한 태그로 작성이 어려울 경우 <a href="#" className="text-link">wai-aria</a>를 활용하여 웹접근성을 강화할 수 있다.</li>
          <li><span className="code-span">body</span> 상단에 본문 바로가기 링크를 제공하여야 한다.</li>
          <li>키보드 탭키 이동으로 접근이 불가능한 내용이 없어야 한다.</li>
        </ul>

        <h4 id="html-idclass" className="sub-title">ID와 클래스 / 들여쓰기</h4>
        <ul className="guide-list">
          <li>ID는 개발을 위해서만 사용하고, 퍼블리싱 작업시에는 클래스를 활용한다.</li>
          <li>1탭 들여쓰기 하며, 1탭의 크기는 공백 4칸으로 설정한다.</li>
        </ul>
      </section>


      {/* ================= 3. 코드 규칙 (CSS) ================= */}
      <section id="code-css">
        <h3 className="section-title">3. 코드 규칙 (CSS)</h3>

        <h4 id="css-prop" className="sub-title">속성 / 선택자</h4>
        <ul className="guide-list">
          <li>모든 속성은 영문 소문자로만 작성한다.</li>
          <li>공통 선택자(<span className="code-span">*</span>)는 사용하지 않는다.</li>
          <li><span className="code-span">!important</span>는 불가피한 상황을 제외하고는 사용하지 않는다.</li>
        </ul>
        <CodeBlock language="css" code={`
.class-name {
  background: #fff url("../images/image.jpg") no-repeat 50% / cover;
}
        `} />

        <h4 id="css-space" className="sub-title">세미콜론 / 공백</h4>
        <ul className="guide-list">
          <li>마지막 선언된 속성에도 세미콜론(<span className="code-span">;</span>)을 사용한다.</li>
          <li>선택자 간, 중괄호간 한칸의 공백을 사용한다.</li>
        </ul>

        <h4 id="css-blind" className="sub-title">숨김 텍스트</h4>
        <ul className="guide-list">
          <li>숨김 텍스트 처리할 시에 <span className="code-span">text-indent: -9999px</span> 등을 사용하지 않는다.</li>
        </ul>
        <CodeBlock language="css" code={`
.blind {
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
}
        `} />
      </section>

      {/* ================= 4. 코드 규칙 (SCSS) ================= */}
      <section id="code-scss">
        <h3 className="section-title">4. 코드 규칙 (SCSS)</h3>

        <h4 id="scss-struct" className="sub-title">파일 구조</h4>
        <ul className="guide-list">
          <li>파일 구조는 가능하다면 컴포넌트 형식으로 파일을 나누어 작업한다.</li>
        </ul>
        <CodeBlock language="scss" code={`
_button.scss
_checkbox.scss
...
        `} />

        <h4 id="scss-etc" className="sub-title">주석 / 반복</h4>
        <ul className="guide-list">
          <li>중첩 스타일 작성 시 주석으로 클래스 이름을 전체 표기한다.</li>
          <li>반복되는 값은 변수나 mixin을 활용한다.</li>
        </ul>
      </section>

      {/* ================= 5. 네임 규칙 ================= */}
      <section id="name-rule">
        <h3 className="section-title">5. 네임 규칙</h3>
        <h4 id="name-notation" className="sub-title">표기법 (Notation)</h4>
        
        <div className="table-scroll"> 
          <table className="guide-table">
            <thead>
              <tr><th>분류</th><th>표기법</th><th>예시</th></tr>
            </thead>
            <tbody>
              <tr><td className="font-bold text-center">HTML Class</td><td className="text-center">kebab-case</td><td>btn-primary</td></tr>
              <tr><td className="font-bold text-center">Image File</td><td className="text-center">snake_case</td><td>icon_arrow.png</td></tr>
            </tbody>
          </table>
        </div>

        <h4 id="name-idclass" className="sub-title">ID vs Class / 예약어</h4>
        <ul className="guide-list">
          <li><strong>ID:</strong> 페이지 내 유일한 요소 (개발용)</li>
          <li><strong>Class:</strong> 재사용 가능한 스타일</li>
        </ul>
        
        <h5 id="name-reserved" className="small-title">레이아웃 예약어</h5>
        <div className="table-scroll"> 
          <table className="guide-table">
            <colgroup><col width="20%" /><col width="30%" /><col width="50%" /></colgroup>
            <thead><tr><th>구분</th><th>예약어</th><th>설명</th></tr></thead>
            <tbody>
              <tr><td>헤더</td><td>header-</td><td>헤더 영역</td></tr>
              <tr><td>전체 영역</td><td>-container</td><td>컨텐츠 전체</td></tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
};

export default Convention;