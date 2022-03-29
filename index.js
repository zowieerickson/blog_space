let postsArray = [];
const form = document.querySelector("#post-form")

function renderPosts() {
    let html = "";
    postsArray.forEach(post => {
        html += `
        <div>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr />
        </div>
        `
    }) 
    document.querySelector("#blog-list").innerHTML = html
}

fetch("https://jsonplaceholder.typicode.com/posts/")
    .then(response => response.json())
    .then(data => {
        postsArray = data.slice(0, 5);
        renderPosts()
    })

    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const postTitle = document.querySelector("#post-title").value
        const postBody = document.querySelector("#post-body").value
        const postData = {
        title: postTitle,
        body: postBody
    }

    fetch('https://jsonplaceholder.typicode.com/posts/', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            postsArray.unshift(data)
            renderPosts()
            form.reset()
        })
    
})