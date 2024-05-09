
import React, { useRef } from 'react';

function ImageUploader() {
  const inputRef = useRef(null);
  const imageRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      if (imageRef.current) {
        imageRef.current.src = reader.result;
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        ref={inputRef}
        style={{ display: 'none' }}
      />
      <button onClick={() => inputRef.current.click()}>Choose Image</button>
      <div>
        <img
          ref={imageRef}
          alt="Selected"
          style={{ maxWidth: '300px', maxHeight: '300px' }}
        />
      </div>
    </div>
  );
}

export default ImageUploader;