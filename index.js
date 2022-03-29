fetch("https://jsonplaceholder.typicode.com/posts/")
    .then(response => response.json())
    .then(data => {
        let postsArr = data.slice(0, 5);
        let html = "";
        postsArr.forEach(post => {
            html += `
            <div>
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
            </div>
            `
        }) 
        document.querySelector("#blog-list").innerHTML = html
    })

    
    document.querySelector("#post-form").addEventListener("submit", (e) => {
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
            console.log(data)
            let currentStr = document.querySelector("#blog-list").innerHTML;
            let tempStr =  `
            <div>
                <h3>${data.title}</h3>
                <p>${data.body}</p>
                <hr />
            </div>
            `
            document.querySelector("#blog-list").innerHTML = tempStr + currentStr
        })
    
})