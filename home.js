const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

// console.log(loggedInUser)

const userNameDisplay = document.getElementById('userNameDisplay')
userNameDisplay.textContent = `${loggedInUser.firstName} ${loggedInUser.lastName}`


const userNameDisplay2 = document.getElementById('userNameDisplay2')
userNameDisplay2.textContent = `${loggedInUser.firstName} ${loggedInUser.lastName}`

// Post Submit Form Data,,,
const getPost = JSON.parse(localStorage.getItem('loggedInUser.post'))
console.log(getPost)



const postCol = document.getElementById('postCol')


document.getElementById('postSubmit').addEventListener('submit', function (event) {
    event.preventDefault();
    const textarea = document.querySelector('textarea').value
    const postImgUrl = document.querySelector('#postImgUrl').value

    localStorage.setItem('post', JSON.stringify('post'))

    const cuttent = new Date()
    console.log(cuttent)
    // console.log(textarea, postImgUrl);
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = ` 
                <div class="card__header">
                    <img src="${postImgUrl}" alt="card__image" class="card__image"
                        width="600">
                </div>
                <div class="card__body">
                    <span class="tag tag-blue">Technology</span>
                    <h4>What's new in 2024 Tech</h4>
                    <p>${textarea}</p>
                </div>
                <div class="card__footer">
                    <div class="user">
                        <img src="https://i.pravatar.cc/40?img=1" alt="user__image" class="user__image">
                        <div class="user__info">
                            <h5>Jane Doe</h5>
                            <small>${cuttent.getDate()} - ${cuttent.getMonth() + 1} - ${cuttent.getFullYear()}</small>
                        </div>
                    </div>
            </div>`
    postCol.appendChild(card)
    // textarea.value = " "
    // postImgUrl.value = " "
})

