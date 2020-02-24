importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

console.log(`testing`);
if (workbox) {
console.log(`Yay! Workbox is loaded 🎉`);
}else{
  console.log(`Sorry, Workbox is not loaded :(`);
}

workbox.precaching.precacheAndRoute([
  "/index.html",
  "https://kyle-test-68.github.io/AMPStory/pets-completed.html"

  ]);