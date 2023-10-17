// Card.js (カードコンポーネント)
import React from 'react';

function Card({ inputData }) {
  return (
    <div>
      <h2>カードコンテンツ</h2>
      <p>{inputData}</p> {/* 入力データを表示 */}
    </div>
  );
}

export default Card;
