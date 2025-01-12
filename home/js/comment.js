new Vue({
    el: '#app2',
    data() {
      return {
        name: '',
        newComment: '',
        comments: [],
        post: {
          reactions: {
            like: 0,
            love: 0,
            haha: 0,
            wow: 0,
            sad: 0,
            angry: 0
          }
        }
      };
    },
    methods: {
      react(reaction) {
        this.post.reactions[reaction]++;
      },
      addComment() {
        if (this.name && this.newComment) {
          const timestamp = new Date().toLocaleString();
          this.comments.push({
            name: this.name,
            text: this.newComment,
            timestamp: timestamp
          });
          this.newComment = '';
          this.name = '';
        } else {
          alert("Please fill in both your name and comment.");
        }
      }
    }
  });
  