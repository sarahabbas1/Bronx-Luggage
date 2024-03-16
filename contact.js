function submit(){
    var name2 = document.getElementById("name2").value;
    var name3 = document.getElementById("name3").value;
    var email1 = document.getElementById("email1").value;
    var no1 = document.getElementById("no1").value;
    var form1 = document.getElementById('form1')

    if(name2 == '' || name3 == '' || email1 ==''|| no1 == ''){
        alert('Fill your form correctly')
    } else{
        localStorage.setItem("Name", name2)
        localStorage.setItem("Email", name3)
        localStorage.setItem("Number", email1)
        localStorage.setItem("Message", no1)
        alert('Thank you!')
        form1.reset()
    }
}