var posts=["posts/4a17b156.html","posts/2de62673.html","posts/3b4b656d.html","posts/9daba997.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};