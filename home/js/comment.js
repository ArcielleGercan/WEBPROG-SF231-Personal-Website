const app2 = Vue.createApp({
    data() {
      return {
        post: {
          id: 1,
          title: "Reactions & Thoughts Welcome!",
          content: "Hi! I hope you enjoy exploring my personal website. Feel free to leave a reaction and share your thoughts in the comment section below. Thank you for visiting!",
          reactions: {
            like: 0,
            love: 0,
            haha: 0,
            wow: 0,
            sad: 0,
            angry: 0,
          },
          comments: [],
        },
        newComment: "",
      };
    },
    methods: {
      react(type) {
        this.post.reactions[type]++;
      },
      addComment() {
        if (this.newComment.trim() !== "") {
          this.post.comments.push({ text: this.newComment, timestamp: new Date() });
          this.newComment = "";
        }
      },
    },
  });

  app2.mount('#app2');
  