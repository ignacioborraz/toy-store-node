document.getElementById('login').addEventListener('click',(event)=>{
    event.preventDefault()
    let data = {
        email: document.querySelector('#mail').value,
        password: document.querySelector('#password').value,
    }
    //console.log(data)
    fetch(`/api/auth/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(res=> {
        //console.log(res)
        if (res.success) {
            alert(res.message)
            window.location.replace('/')
        } else {
            alert(res.message)
        }
    })
})