const app = Vue.createApp({
  data() {
    return {
      images: [
        { src: "https://scontent-mnl1-2.cdninstagram.com/v/t1.15752-9/471791012_1874488376419631_7017690026170038498_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=ivuDdzWLMSAQ7kNvgFT5u6X&_nc_zt=23&_nc_ht=scontent-mnl1-2.cdninstagram.com&oh=03_Q7cD1gHfMD6ghO_IHHLWKqmoa0gr_qIcnWmlnhffD6yAjDMQ2Q&oe=67AB40C2", alt: "Image 2", caption: "🌸" },
      { src: "https://scontent.xx.fbcdn.net/v/t1.15752-9/473023151_796392376010616_8356821401254784342_n.png?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=2GeMYPUT4IgQ7kNvgGthqCU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gFa3biLtFgcPqgyL0i45lJTNDKG2liXw3VdbW_1MR6h-A&oe=67AB3E9C", alt: "Image 3", caption: "🍒" },
      { src: "https://scontent-mnl3-1.cdninstagram.com/v/t1.15752-9/472923551_1528867204489044_9165857664788152387_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=_Qt7SXP08kAQ7kNvgH-66Ql&_nc_zt=23&_nc_ht=scontent-mnl3-1.cdninstagram.com&oh=03_Q7cD1gEhl8ejCjctt2dinIeUm-_vVu7GTJQ5261VjdJpEQJwlQ&oe=67AB45F1", alt: "Image 4", caption: "🎀" },
      { src: "https://scontent.xx.fbcdn.net/v/t1.15752-9/460269217_558471613371227_1006433589030257075_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=goOxcr9KSWMQ7kNvgE1hbq3&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gHvbZQATekzLPWJSounSuOKxbTwQlPjjjuSbCeDCumx5Q&oe=67AB1AD6", alt: "Image 5", caption: "❤" },
      { src: "https://scontent-mnl3-1.cdninstagram.com/v/t1.15752-9/462645525_1325142925331095_4303345775918687039_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Jgnp4j9MrNQQ7kNvgG7hbLe&_nc_zt=23&_nc_ht=scontent-mnl3-1.cdninstagram.com&oh=03_Q7cD1gEsurBLatd-deQkwvCpjjoPuz41oMxEz7MPwmAt3R65Jg&oe=67AB4ECA", alt: "Image 6", caption: "🍓" },
      { src: "https://scontent.xx.fbcdn.net/v/t1.15752-9/472935075_1160315968893475_7171588243414608001_n.png?_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=qqzReBC7oqgQ7kNvgGbKN7n&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gEQ4ZeKigTTAhI3To2DCiUV9G2IlemEN-IrQelmnU48Fg&oe=67AB38EC", alt: "Image 7", caption: "🐚" },
      { src: "https://scontent.xx.fbcdn.net/v/t1.15752-9/473175191_573185255554109_6496740864305458395_n.png?_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_ohc=wauxuLS7dfMQ7kNvgF8pyyn&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gFKTTks60A4TmRk0SbUaJkC1Mt5Bu1ruHzNgteNGvv4rg&oe=67AB43EE", alt: "Image 8", caption: "🐞" },
      { src: "https://scontent-mnl3-1.cdninstagram.com/v/t1.15752-9/471540519_933808988846248_6511807479409109329_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=2N6QsZZFQWcQ7kNvgEelLdO&_nc_zt=23&_nc_ht=scontent-mnl3-1.cdninstagram.com&oh=03_Q7cD1gHHCiAfgkzG3qC9RdzyUUxc4K3LpaV8NmT1tURg1XOq9w&oe=67AB3F14", alt: "Image 9", caption: "🐧" },
      { src: "https://scontent.xx.fbcdn.net/v/t1.15752-9/462575040_1924701821375730_3939960551639160827_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=MaslT2LQuNgQ7kNvgE6JMzr&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gE3b6Zsg7ufymTYrx0uLrH1QiSY7o-rRdPhO-Ix0Q7gFw&oe=67AB3F62", alt: "Image 10", caption: "🌼" },
      { src: "https://scontent.xx.fbcdn.net/v/t1.15752-9/472919567_1694900787753468_3274221652388169505_n.png?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=EdvXPMz-IMUQ7kNvgHFn4lA&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gGw7lMMZOxJlMaFZi9wx47HCQNSBDBtklT3YZyIz-wO8Q&oe=67AB3944", alt: "Image 11", caption: "🤗" },
      { src: "https://scontent-mnl3-1.cdninstagram.com/v/t1.15752-9/473316022_902341552058112_5259580325564591547_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=ic1x8pd6mgMQ7kNvgGRCR8x&_nc_zt=23&_nc_ht=scontent-mnl3-1.cdninstagram.com&oh=03_Q7cD1gFZ5Wj0SiCbNRxDgtmGo0-ITLYHhssZEhyvlaGvKw-Upw&oe=67AB4442", alt: "Image 12", caption: "😍" },
      { src: "https://scontent.xx.fbcdn.net/v/t1.15752-9/472727758_2408110139550309_1864389887352940187_n.png?_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=B2RS1tL_HEQQ7kNvgEk20fR&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gFtMTbI691XHtOhu2PsTd9x69zHi3ybyrF_xXTwo_gmQA&oe=67AB311C", alt: "Image 13", caption: "✨" },
      { src: "https://scontent.xx.fbcdn.net/v/t1.15752-9/467827529_911340944515017_6877975722804921797_n.png?_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_ohc=n65VeWu6Y8UQ7kNvgE43-I2&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gGfVS3W_ExyC4lF3Z084qxImjFijqqSvsTWQWBt-3XfWw&oe=67AB2750", alt: "Image 14", caption: "🥰" },
      { src: "https://scontent.xx.fbcdn.net/v/t1.15752-9/472560914_512627564577966_8581246320038243813_n.png?_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=NHAzzqnv8FQQ7kNvgHYsydw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gG0g4DaDyUddBKgc38B8yA_Yz3m65XAvoddTn1PQeSvCw&oe=67AB310A", alt: "Image 15", caption: "😊" },
      { src: "https://scontent.xx.fbcdn.net/v/t1.15752-9/472637368_1262389628394124_5744283988315005677_n.png?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=79ufKQw1BG8Q7kNvgF33heE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gEuGSnYRTDcI1ftpsW54nef-Fsi2KMoc5Bq4ubcJ6s3HA&oe=67AB5567", alt: "Image 16", caption: "🐢" }
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
