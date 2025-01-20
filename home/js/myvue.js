const app = Vue.createApp({
  data() {
    return {
      images: [
        { src: "pictures/pic1.jfif", alt: "Image 2", caption: "🌸" },
      { src: "pictures/pic2.jfif", alt: "Image 3", caption: "🍒" },
      { src: "pictures/pic3.jfif", alt: "Image 4", caption: "🎀" },
      { src: "pictures/pic4.jfif", alt: "Image 5", caption: "❤" },
      { src: "pictures/pic5.jfif", alt: "Image 6", caption: "🍓" },
      { src: "pictures/pic6.jfif", alt: "Image 7", caption: "🐚" },
      { src: "pictures/pic7.jfif", alt: "Image 8", caption: "🐞" },
      { src: "pictures/pic8.jfif", alt: "Image 9", caption: "🐧" },
      { src: "pictures/pic9.jfif", alt: "Image 10", caption: "🌼" },
      { src: "pictures/pic10.jfif", alt: "Image 11", caption: "🤗" },
      { src: "pictures/pic11.jfif", alt: "Image 12", caption: "😍" },
      { src: "pictures/pic12.jfif", alt: "Image 13", caption: "✨" },
      { src: "pictures/pic13.jfif", alt: "Image 14", caption: "🥰" },
      { src: "pictures/pic14.jfif", alt: "Image 15", caption: "😊" },
      { src: "pictures/pic15.jfif", alt: "Image 16", caption: "🐢" }
      ]
    };
  },
  template: `
    <div class="gallery">
      <div v-for="image in images" :key="image.src" class="gallery-item">
        <img :src="image.src" :alt="image.alt" class="gallery-image" />
        <div class="caption">{{ image.caption }}</div>
      </div>
    </div>
  `
});

app.mount('#app');
