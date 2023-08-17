import React, { useEffect, useRef, useState } from 'react';
import Quagga from 'quagga';

const BarcodeScanner = ({ onBarcodeDetected }) => {
  const videoRef = useRef(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const initializeScanner = async () => {
      try {
        await Quagga.init({
          inputStream: {
            name: 'Live',
            type: 'LiveStream',
            target: videoRef.current,
            constraints: {
              facingMode: 'environment',
            },
          },
          decoder: {
            readers: ['ean_reader'],
          },
        });

        Quagga.onDetected((result) => {
          const code = result.codeResult.code;
          onBarcodeDetected(code);
        });

        Quagga.start();
        setInitialized(true);
      } catch (error) {
        console.error('Erro ao inicializar o scanner:', error);
      }
    };

    if (videoRef.current && !initialized) {
      initializeScanner();
    }

    return () => {
      if (initialized) {
        Quagga.stop();
      }
    };
  }, [onBarcodeDetected, initialized]);

  return (
    <div className="barcode-scanner">
      <video ref={videoRef} className="video-stream" autoPlay muted playsInline />
    </div>
  );
};

export default BarcodeScanner;
