const form = document.getElementById("uploadForm");
const gallery = document.getElementById("gallery");

// Load saved posts from browser (if any)
let posts = JSON.parse(localStorage.getItem("challengePosts")) || [];

// Render existing posts
renderPosts();

// Handle form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const dishName = document.getElementById("dishName").value.trim();
  const story = document.getElementById("story").value.trim();
  const imageFile = document.getElementById("imageUpload").files[0];

  if (!dishName && !story && !imageFile) {
    alert("Please upload an image or write a story!");
    return;
  }

  const reader = new FileReader();
  reader.onload = function () {
    const newPost = {
      id: Date.now(),
      dishName: dishName || "Untitled Dish",
      story: story || "",
      image: imageFile ? reader.result : null,
      likes: 0,
    };
    posts.unshift(newPost); // newest first
    launchConfetti();
    localStorage.setItem("challengePosts", JSON.stringify(posts));
    renderPosts();
    form.reset();
  };

  if (imageFile) {
    reader.readAsDataURL(imageFile);
  } else {
    reader.onload();
  }
});

// Render posts to gallery
function renderPosts() {
  gallery.innerHTML = "";
  posts.forEach((post) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      ${post.image ? `<img src="${post.image}" alt="${post.dishName}">` : ""}
      <div class="content">
        <h4>${post.dishName}</h4>
        <p>${post.story}</p>
      </div>
      <button class="like-btn" onclick="likePost(${post.id})">
        ❤️ <span class="like-count">${post.likes}</span>
      </button>
    `;
    gallery.appendChild(card);
  });
}

// Like button function
function likePost(id) {
  const post = posts.find((p) => p.id === id);
  if (post) {
    post.likes++;
    localStorage.setItem("challengePosts", JSON.stringify(posts));
    renderPosts();
  }
}
// ===== CONFETTI EFFECT =====
function launchConfetti() {
  for (let i = 0; i < 25; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = randomColor();
    confetti.style.animationDuration = (Math.random() * 1 + 1) + "s";
    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 1500);
  }
}

function randomColor() {
  const colors = ["#FFD700", "#A4161A", "#0047AB", "#f4e1c1"];
  return colors[Math.floor(Math.random() * colors.length)];
}
