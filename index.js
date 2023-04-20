function submitData(name,email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
         body: JSON.stringify({
            name: `${name}`,
            email: `${email}`,
        }),
    })
    .then(resp => resp.json())
    .then(data => {
        const element = document.createElement("div")
        element.textContent = `${data.id}`
        console.log(element)
        document.body.append(element)
    })
    .catch(function (error) {
        const mess = document.createElement("div")
        mess.textContent = error.message;
        console.log(error.message)
        document.body.append(mess)
    });
}

