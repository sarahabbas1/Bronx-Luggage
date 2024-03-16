function register(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var form = document.getElementById('form')

    if(name == '' || email == '' || password ==''){
        alert('Fill your form correctly')
    } else{
        localStorage.setItem("Name", name)
        localStorage.setItem("Email", email)
        localStorage.setItem("Password", password)
        window.location.href = 'index.html';
        alert('Thank you!')
        form.reset()
    }
}
    function uname(){
        var uname = localStorage.getItem("name")
        document.getElementById("uname").innerHTML = uname
    }