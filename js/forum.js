const postForm = document.getElementById("postForm");
const forumPosts = document.getElementById("forumPosts");

// Load saved posts from browser
let posts = JSON.parse(localStorage.getItem("forumPosts")) || [];

// Render existing posts
renderPosts();

// Handle new post submission
postForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("postTitle").value.trim() || "Untitled Story";
  const message = document.getElementById("postMessage").value.trim();

  if (!message) {
    alert("Please write a story before posting!");
    return;
  }

  const newPost = {
    id: Date.now(),
    title,
    message,
    likes: 0,
    comments: []
  };

  posts.unshift(newPost); // newest first
  localStorage.setItem("forumPosts", JSON.stringify(posts));
  renderPosts();
  postForm.reset();
});

// Render all posts
function renderPosts() {
  forumPosts.innerHTML = "";
  posts.forEach(post => {
    const postCard = document.createElement("div");
    postCard.className = "post-card";
    postCard.innerHTML = `
      <h4>${post.title}</h4>
      <p>${post.message}</p>
      <div class="post-actions">
        <button class="like-btn" onclick="likePost(${post.id})">❤️ <span>${post.likes}</span></button>
        <button class="comment-btn" onclick="addComment(${post.id})">💬 Comment</button>
      </div>
      <div class="comment-section" id="comments-${post.id}">
        ${post.comments.map(c => `<div class="comment">${c}</div>`).join("")}
      </div>
    `;
    forumPosts.appendChild(postCard);
  });
}

// Like button function
function likePost(id) {
  const post = posts.find(p => p.id === id);
  if (post) {
    post.likes++;
    localStorage.setItem("forumPosts", JSON.stringify(posts));
    renderPosts();
  }
}

// Add comment function
function addComment(id) {
  const comment = prompt("Enter your comment:");
  if (comment) {
    const post = posts.find(p => p.id === id);
    if (post) {
      post.comments.push(comment);
      localStorage.setItem("forumPosts", JSON.stringify(posts));
      renderPosts();
    }
  }
}
