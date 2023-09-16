// 게시물 데이터
const POSTS = [
  {
    username: "pan._.da",
    likes: 10,
    description: "안녕 나는 판다야!",
    image:
      "https://cdn.pixabay.com/photo/2016/03/04/22/54/animal-1236875_1280.jpg",
  },
  {
    username: "rrred_panda",
    likes: 30,
    description: "안녕 나는 레서판다야!",
    image:
      "https://cdn.pixabay.com/photo/2018/06/28/12/34/panda-3503779_1280.jpg",
  },
  {
    username: "kitty__",
    likes: 20,
    description: "안녕 나는 고양이야!",
    image:
      "https://cdn.pixabay.com/photo/2018/01/14/14/42/cat-3081939_1280.jpg",
  },
  {
    username: "doosan_bear",
    likes: 25,
    description: "안녕 나는 곰이야!",
    image:
      "https://cdn.pixabay.com/photo/2021/11/05/18/23/bear-6771842_1280.jpg",
  },
  {
    username: "puppy123",
    likes: 32,
    description: "안녕 나는 강아지야!",
    image:
      "https://cdn.pixabay.com/photo/2016/02/18/18/37/puppy-1207816_1280.jpg",
  },
  {
    username: "im_bunny",
    likes: 17,
    description: "안녕 나는 토끼야!",
    image:
      "https://cdn.pixabay.com/photo/2017/04/02/22/36/easter-2197043_1280.jpg",
  },
];

function createPost(post) {
  const postElement = document.createElement("div");

  // # 1.1 createPost 함수 구현

  postElement.className = "post";

  // 사용자 이름을 표시
  var usernameElement = document.createElement("p");
  usernameElement.className = "username";
  usernameElement.textContent = post.username;

  // 이미지를 표시
  var imageElement = document.createElement("img");
  imageElement.className = "post-image";
  imageElement.src = post.image;

  // 좋아요 정보를 표시
  var likesElement = document.createElement("p");
  likesElement.className = "likes";
  likesElement.textContent = "Likes: " + post.likes;

  // description을 표시
  var captionElement = document.createElement("p");
  captionElement.className = "caption";
  captionElement.textContent = post.description;

  // 각 요소를 추가
  postElement.appendChild(usernameElement);
  postElement.appendChild(imageElement);
  postElement.appendChild(likesElement);
  postElement.appendChild(captionElement);

  // # 1.1 createPost 함수 구현 완료

  return postElement;
}

// 좋아요(likes) 많은 순으로 포스트 정렬하는 함수
function sortPostsByLikes() {
  const postsContainer = document.getElementById("posts");
  const sortedPosts = POSTS.slice().sort((a, b) => b.likes - a.likes);
  postsContainer.innerHTML = "";

  for (var i = 0; i < sortedPosts.length; i++) {
    postsContainer.appendChild(createPost(sortedPosts[i]));
  }
}

const btn = document.querySelector('#btn');
btn.addEventListener('click',
  function () {
    window.scrollTo({ right: 0, top: 0, behavior: 'smooth' })
  });

// main 실행 함수
function main() {
  // 게시물 엘리먼트를 넣어야 하는 곳
  const postsContainer = document.getElementById("posts");

  // # 1.2 createPost로 만든 post를 postsContainer에 하나씩 넣는 코드

  for (var i = 0; i < POSTS.length; i++) {
    // 생성된 게시물을 'posts' div에 추가
    postsContainer.appendChild(createPost(POSTS[i]));
  }

  // # 1.2 createPost로 만든 post를 postsContainer에 하나씩 넣는 코드 구현 완료
}


main();