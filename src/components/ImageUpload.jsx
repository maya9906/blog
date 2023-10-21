// import React, { useState } from 'react';

// function ImageUpload({ onImageSelect }) {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageSelect = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSelectedImage(file);
//       onImageSelect(file); // アップロードされた画像を親コンポーネントに渡す
//     }
//   };

//   return (
//     <div>
//       <input 
//       type="file" 
//       accept="image/*" 
//       onChange={handleImageSelect} 
//       title="Select an Image"
//       />
//       {/* ここでは画像を表示しない */}
//     </div>
//   );
// }

// export default ImageUpload;
import React, { useState, useRef } from 'react';
import '../css/cbtn-ubtn.css'; // CSS ファイルをインポート

function ImageUpload({ onImageSelect }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageSelect = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      onImageSelect(file);
    }
  };

  return (
    <div className="image-upload-container"> {/* カスタムクラス名を追加 */}
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
      <button onClick={handleImageSelect} className="select-button"> {/* カスタムクラス名を追加 */}
        Select an Image
      </button>
      {selectedImage && (
        <p className="selected-image"> {/* カスタムクラス名を追加 */}
          Selected: {selectedImage.name}
        </p>
      )}
    </div>
  );
}

export default ImageUpload;

