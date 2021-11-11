/* const titulo = document.querySelector("h1");
const btn1 = document.getElementById(1);
const btn2 = document.getElementById(2);




const cambiarTitulo = () =>{
    btn2.classList.replace('btn-danger', 'btn-success');
    let nuevo = "SI"
    btn2.textContent = nuevo;
}


const comoEstaba = () =>{
    btn2.classList.replace('btn-success', 'btn-danger');
    let nuevo = "No"
    btn2.textContent = nuevo;
}

console.log("Hola")
btn2.addEventListener("mouseover", cambiarTitulo);
btn2.addEventListener("mouseleave", comoEstaba);
btn2.addventListener("click", alert("Lo Sabia Uwu")) */
var myModal = new bootstrap.Modal(document.getElementById("exampleModal"), {});
document.onreadystatechange = function () {
    setTimeout("myModal.show()",5000)
    //myModal.show();
};


