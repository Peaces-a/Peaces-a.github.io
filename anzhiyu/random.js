var posts=["posts/9daba997.html","posts/4a17b156.html","posts/3b4b656d.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};