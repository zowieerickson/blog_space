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