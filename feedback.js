function submit(){
    var name1 = document.getElementById("name1").value;
    var email1 = document.getElementById("email1").value;
    var no = document.getElementById("no").value;
    var text = document.getElementById("text").value;
    var form1 = document.getElementById('form1')

    if(name1 == '' || email1 == '' || no ==''|| text == ''){
        alert('Fill your form correctly')
    } else{
        localStorage.setItem("Name", name1)
        localStorage.setItem("Email", email1)
        localStorage.setItem("Number", no)
        localStorage.setItem("Message", text)
        alert('Thank you!')
        form1.reset()
    }
}