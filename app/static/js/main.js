Server = {
  // Get Posts
  posts(){
    fetch('/post')
    .then(response => response.json())
    .then(data => App.posts = data);
  },



  // create post
  push(username, data){
    payload = {
      username: username,
      post: data,
    };
    fetch('/push/',{
      method:'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify(payload)
    })
    .then(res=>res.json())
    .then(data=>{
      App.update(data)
    })

  },

  upvote(id){
    fetch('/upvote/'+id)
    .then(response => response.json())
    .then(data => App.update(data));
  },
  downvote(id){
    fetch('/downvote/'+id)
    .then(response => response.json())
    .then(data => App.update(data));
  },






}



App = new Vue({
  delimiters: ['[[', ']]'],
  el:'#app',
  data:{
    username:'',
    ready:'',

    userName:'',

    //create
    entry:'',

    posts:[{
      id:0, username:'System', post:'Fetching Data From Server', upvote:0, downvote:0,
    }],

  },
  methods:{
    start(){
      if(this.username=='')return;
      this.userName = this.username;
      this.ready = true;
    },


    update(post){
      var old = false;
      this.posts = this.posts.map( cache=>{
        if(post.id==cache.id) {
          cache = post
          old = true
        }
        return cache;
      })
      if(!old){
        this.post.push(post);
      };

    },


    push(){
      Server.push(this.userName, this.entry);
      this.entry = ''; 

    },

    up(id){
      Server.upvote(id);
    },

    down(id){
      Server.downvote(id);
    },

  },

  mounted(){
    //onload event
    Server.posts();
  }





})
