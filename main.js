const password = document.querySelector(".password");
const btnGenerar = document.querySelector(".generar");
const copiarPass = document.querySelector(".copiar");
const formGuardar = document.querySelector(".form-guardar");
const passList = document.querySelector(".pass-list");

const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
+ "abcdefghijklmnopqrstuvwxyz1234567890@-.!$#"

btnGenerar.addEventListener("click", () => {
  for(let i = 1; i <= 8; i++){
    // el metodo charAt devuelve en un nuevo string el
    // caracter de una cadena
    const caracter = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    console.log(caracter)
    password.textContent += caracter;
  }
})

copiarPass.addEventListener("click", () => {
  let pass = password.textContent;
  if(!pass == "") {
    /*
    navigator es referencia al objeto Navigator
    clipboard es la propiedad del objeto navigator ayuda a copiar y pegar texto
    writeText escribe la cadena de texto especificada en el portapapeles
    */
    navigator.clipboard.writeText(pass);
    alert("La contraseña se copio al portapapeles");
    password.textContent = "";
  }
  else{
    alert("No hay contraseña en el campo");
  }
})

formGuardar.addEventListener("submit", (e) =>{
  e.preventDefault();
  const passGenerada =  document.querySelector("#contrasena-generada").value;
  const passNombre = document.querySelector("#name-pass").value;

  if(passGenerada == "" || passNombre == "" ) {
    alert("Debes ingresar un nombre y una contraseña");
  }
  else {
    const li = document.createElement("li");
    const contenido = `
      <p>
        <strong>Contraseña</strong>: ${passGenerada}
      </p>
      <p>
        <strong>Nombre</strong>: ${passNombre}
      </p>
    `;
    li.innerHTML = contenido;
    li.classList.add("pass-item");
    passList.appendChild(li);

    formGuardar.reset();
  }

})



