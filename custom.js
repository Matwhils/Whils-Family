function result(){
    let pseudo = document.getElementById('pseudo').value;
    let password = document.getElementById('password').value;

    sessionStorage.setItem('Pseudo',pseudo);
    sessionStorage.setItem('Password', password);


}
