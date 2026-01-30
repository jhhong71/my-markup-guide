// src/pages/Library.jsx
import React from 'react';

const Library = () => {
  return (
    <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      {/* iframe을 사용하여 Storybook을 통째로 불러옵니다.
        개발 중에는 localhost:6006을 바라보게 합니다.
      */}
      <iframe
        src="http://localhost:6006"
        title="Storybook"
        style={{
          width: '100%',
          height: 'calc(100vh - 85px)', // 헤더 높이(약 80~85px)를 뺀 나머지 전체 높이
          border: 'none'                 // iframe 테두리 제거
        }}
      />
    </div>
  );
};

export default Library;