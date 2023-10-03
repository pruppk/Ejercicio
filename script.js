function User(name, edad) {
    this.name = name,
    this.edad = edad
}

function pruebas () {
    let user = {
        name  : "Rodolfo",
        email : "rodol@gmail.com",
        edad  : 35
    }
    user.password = "admin1234";
    console.log(user);

    resultado.innerHTML = user.name;
}
