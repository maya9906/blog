import React, { useState } from 'react';

function ImageUpload({ onImageSelect }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      onImageSelect(file); // アップロードされた画像を親コンポーネントに渡す
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageSelect} />
      {/* ここでは画像を表示しない */}
    </div>
  );
}

export default ImageUpload;
