fetch("https://jsonplaceholder.typicode.com/posts/")
    .then(response => response.json())
    .then(data => {
        let postsArr = data.slice(0, 5);
        let html = "";
        postsArr.forEach(post => {
            html += `
            <div>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                <hr />
            </div>
            `
        }) 
        document.querySelector("#blog-list").innerHTML = html
    })

let postArray = [];

document.querySelector("#post-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const postTitle = document.querySelector("#post-title").value
    const postBody = document.querySelector("#post-body").value
    postArray.push({
        title: postTitle,
        body: postBody
    })
    console.log(postArray)
    
})