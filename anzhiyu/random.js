var posts=["posts/2de62673.html","posts/4a17b156.html","posts/b9e80aa0.html","posts/3b4b656d.html","posts/9daba997.html","posts/25b9a8f7.html","posts/2b9cc7eb.html","posts/c497e77.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};