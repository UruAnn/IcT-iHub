//class Declaration

class user{
    constructor(username,age){
        this.username = username;
        this.age =age;
    }
}

const userOne = new user('flexy', 'flexy@gmail.com');
const userTwo = new user('kaka', 'kaka@gmail.com');

console.log(userOne)

fetch ('http://randomuser.me/api/?results=10')
.then((resp) => resp.json())
.then(function (data) {
    console.log(data);
})
.catch(function (error) {
    console.log(error);
});

