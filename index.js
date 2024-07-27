// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"


async function main(){
  
    const userWrapper = document.querySelector('.user-list');
    const users = await fetch("https://jsonplaceholder.typicode.com/users")
    const userData = await users.json();

    const userHTML = userData.map((element) => userHTMLData(element)).join("")


    userWrapper.innerHTML = userHTML
}

 function ShowUserPost(userId){
    localStorage.setItem("userId",userId)
    window.location.href = `${window.location.origin}/user.html`
}

main()
function userHTMLData(data){
    return `  
<div class="user" onclick="ShowUserPost(${data.id})">
    <div class="user-card">
      <div class="user-card__container">
        <h3>${data.name}</h4>
          <p><b>Email:</b> ${data.email}</p>
          <p><b>Phone:</b> ${data.phone}</p>
          <p><b>Website:</b> <a href="https://${data.website}" target="_blank">${data.website}</a></p>
      </div>
    </div></div>
  `
}

