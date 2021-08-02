console.log('before');

const getUser = (id, callback) => {
    setTimeout(() => {
        console.log('reading user from db');
        callback({id: id, name:'bingo'});
    }, 2000);
}
getUser(1, (user) => {
    console.log('User', user);
    })
console.log('after');