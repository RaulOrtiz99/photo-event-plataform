const faceapi = require('face-api.js');

// Configurar face-api.js (puedes ajustar estas configuraciones según tus necesidades)
faceapi.env.monkeyPatch({ DataView });

async function recognizeFaces(imageUrl) {
  await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
  await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
  await faceapi.nets.faceRecognitionNet.loadFromUri('/models');

  const img = await faceapi.fetchImage(imageUrl);
  const detections = await faceapi.detectAllFaces(img, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptors();

  return detections.map((detection) => ({
    descriptor: detection.descriptor,
    landmarks: detection.landmarks,
  }));
}

module.exports = { recognizeFaces };
