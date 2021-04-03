function result(){
    let pseudo = document.getElementById('pseudo');
    let password = document.getElementById('password');

    sessionStorage.setItem('Pseudo',pseudo);
    sessionStorage.setItem('Password', password);

}