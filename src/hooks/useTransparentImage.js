import { useState, useEffect } from 'react';

// Loads an image and removes near-white pixels, returns a blob URL
export default function useTransparentImage(src, threshold = 228) {
  const [url, setUrl] = useState(null);

  useEffect(() => {
    if (!src) return;
    let objectUrl = null;

    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width  = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      const id   = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = id.data;
      for (let i = 0; i < data.length; i += 4) {
        if (data[i] > threshold && data[i + 1] > threshold && data[i + 2] > threshold) {
          data[i + 3] = 0;
        }
      }
      ctx.putImageData(id, 0, 0);

      canvas.toBlob(blob => {
        objectUrl = URL.createObjectURL(blob);
        setUrl(objectUrl);
      });
    };
    img.src = src;

    return () => { if (objectUrl) URL.revokeObjectURL(objectUrl); };
  }, [src]);

  return url;
}
