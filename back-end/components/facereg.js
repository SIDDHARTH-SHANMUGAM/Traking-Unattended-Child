// const faceapi = require('face-api.js');

// async function facereg(req) {
//   const ImageUpload = req.file;

//   await Promise.all([
//     faceapi.nets.faceRecognitionNet.loadFromDisk('/models'),
//     faceapi.nets.faceLandmark68Net.loadFromDisk('/models'),
//     faceapi.nets.ssdMobilenetv1.loadFromDisk('/models')
//   ]);

//   // Call the start function to perform face recognition
//   const recognized = await start(ImageUpload);
//   console.log('Recognized:', recognized);

//   // Return the recognition result
//   return recognized;
// }

// async function start(imageUpload) {
  
//   const labeledFaceDescriptors = await loadLabeledImages()
//   const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, 0.6)
//   const detections = await faceapi.detectAllFaces(imageUpload).withFaceLandmarks().withFaceDescriptors()
//   const results = detections.map(d => faceMatcher.findBestMatch(d.descriptor))
//   const faceDetected = results.length > 0
// console.log(results);
// console.log(faceDetected);

// }

// function loadLabeledImages() {
//   const labels = ['Black Widow', 'Captain America', 'Captain Marvel', 'Hawkeye', 'Jim Rhodes', 'Thor', 'Tony Stark']
//   return Promise.all(
//     labels.map(async label => {
//       const descriptions = []
//       for (let i = 1; i <= 2; i++) {
//         const img = await faceapi.fetchImage(`https://raw.githubusercontent.com/WebDevSimplified/Face-Recognition-JavaScript/master/labeled_images/${label}/${i}.jpg`)
//         const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
//         descriptions.push(detections.descriptor)
//       }

//       return new faceapi.LabeledFaceDescriptors(label, descriptions)
//     })
//   )
// }

// module.exports = { facereg };
