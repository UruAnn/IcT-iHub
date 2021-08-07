// //class Declaration

// class user{
//     constructor(username,age){
//         this.username = username;
//         this.age =age;
//     }
// }

// const userOne = new user ('flexy', 'flexy@gmail.com');
// const userTwo = new user

// console.log(userOne)
const ul = document.getElementById('users')

fetch ('https://randomuser.me/api/?results=10')
.then((resp) => resp.json())
.then(function (data){
    let users = data.results;
    return users.map((user) => {
        console.log(users);
        const li = document.createElement('li');
        const img = document.createElement('img');
        const p = document.createElement('p');

        ul.appendChild(li);
        let paragraph = li.appendChild(p);
        let image = li.appendChild(img);
        let firstName = user.name.first;
        let lastName =user.name.last;
        console.log(user.picture.large);
        paragraph.innerHTML =`${firstName} ${lastName}`;
        image.src = user.picture.large;
    });
})
.catch(function(error){
    console.log(error)

});
