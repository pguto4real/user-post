const userId = localStorage.getItem('userId')
const postWrapper = document.querySelector('.post-list');

async function main(userId) {

    const postData = await fetch("https://jsonplaceholder.typicode.com/posts?userId=" + userId)
    const usersPostData = await postData.json()

    const postHTML = usersPostData.map((element) => userPostData(element)).join("")

    postWrapper.innerHTML = postHTML
    console.log(usersPostData)
}
main(userId)

function userPostData(data) {
    return `  
            <div class="post">
                <div class="post__title">
                     ${data.title}
                </div>
                <p class="post__body">
                ${data.body}
                </p>
            </div>
  `
}

async function onSearchChange(event) {

    const userId = event.target.value
    main(userId)
}