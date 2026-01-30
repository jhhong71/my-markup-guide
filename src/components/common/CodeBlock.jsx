// src/components/common/CodeBlock.jsx
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'; // VS Code 다크 테마

const CodeBlock = ({ language = 'html', code }) => {
  return (
    <div style={{ fontSize: '14px', margin: '20px 0', borderRadius: '8px', overflow: 'hidden' }}>
      <SyntaxHighlighter 
        language={language} 
        style={vscDarkPlus}
        customStyle={{ margin: 0, padding: '20px' }} // 기본 여백 제거 후 재설정
      >
        {code.trim()} 
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;