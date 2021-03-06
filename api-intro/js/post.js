function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => displayPosts(data))
}
loadPosts();
function displayPosts(posts) {
    const postContainer = document.getElementById('posts');
    for(const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h3>Titel: ${post.title}</h3>
        <p>Description: ${post.body}</p>
        `;
        postContainer.appendChild(div);
    }
}