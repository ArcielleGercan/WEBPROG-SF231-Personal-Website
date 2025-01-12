const app2 = Vue.createApp({
    data() {
      return {
        name: '', 
        newComment: '',
        comments: [],
        reactions: {
          like: 0,
          love: 0,
          haha: 0,
          wow: 0,
          sad: 0,
          angry: 0
        }
      };
    },
    methods: {
      react(type) {
        this.reactions[type]++;
      },
      addComment() {
        if (this.name.trim() && this.newComment.trim()) {
          const timestamp = new Date().toLocaleString();
          this.comments.push({
            name: this.name,
            text: this.newComment,
            timestamp: timestamp
          });
          this.newComment = '';
          this.name = ''; 
        } else {
          alert('Please enter both a name and a comment!');
        }
      }
    }
  });
  
  app2.mount('#app2');
  