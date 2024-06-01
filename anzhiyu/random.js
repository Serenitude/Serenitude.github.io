var posts=["2024/06/01/hello-world/","2024/06/01/小女孩/","2024/06/01/小河流水/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };