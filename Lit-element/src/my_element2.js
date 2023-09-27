import {css} from "lit-element";

export default css`

.container {
    position: relative;
    background-color: red;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 32px;
    max-width: 400px;
}



.inner-container {
    background-color: white;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 20px;
    position: relative;
}

label {
    position: absolute;
    left: 70px;
    color: rgb(114, 116, 117);
    transform: translateY(-50%);
    font-size: 16px;
    pointer-events: none;
    font-weight: bold;
}

.circle {
    background-color: white;
    border-radius: 50%;
    width: 85px;
    height: 85px;
    position: absolute;
    top: -20px;
    left: -22px;
    background-size: cover;
    background-position: center;
    background-image: url("../img/logo.png");
}

.gray-box {
    background-color: #ccc;
    padding: 10px;
    border-radius: 10px;
    margin-top: 30px;
    margin-left: 15px;
    max-width: 270px;
}

.list {
    list-style-type:none;
    padding: 0;
}

.list li {
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 10px;
    color: rgb(79, 81, 83);
    font-weight: bold;
}


.list img {
    height: 15px;
    margin-right: 10px; 
}


.row1 {
    display: flex; /* Alineamos los elementos horizontalmente */
    align-items: flex-end; /* Alineamos los elementos verticalmente al pie */
    margin-bottom: 10px;
    max-width: auto;
    margin-top: -530px ;
    margin-left: 400px;
  }


  .row2 {
    display: flex; /* Alineamos los elementos horizontalmente */
    align-items: flex-end; /* Alineamos los elementos verticalmente al pie */
    margin-bottom: 10px;
    max-width: auto;
    margin-top: 35px;
    margin-left: 400px;
  }
  
  
  .card {
    flex: 1;
    width: 365px;
    max-height: 161px;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 65px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.7);
    margin-right: 102px;
    font-family: Arial, sans-serif;
    font-size: 16px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

/* Estilos para el título */
.card h2 {
  font-size: 17px;
  margin-bottom: 10px;
  color: rgb(79, 81, 83);
  text-decoration: none;
  border-bottom: 1px solid silver;
  width: 200px;
  text-align: center;
}

/* Estilos para la imagen */
.card img {
    max-width: 141px; /* Ajusta el valor según el tamaño deseado */
    height: 167px;
    margin-bottom: 10px;
}

/* Estilos para el botón */
.card button {
    background-color: #ff0000;
    color: white;
    border: none;
    padding: 10px 44px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
}



/* Posicionar el contenedor del menú en la esquina superior derecha */
.dropdown {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 55px;
  }
  
  /* Estilos para el ícono de las tres rayas (Font Awesome) */
  .menu-icon {
    display: flex; /* Activa el contenedor flex */
    align-items: center; /* Centra verticalmente los elementos */
    justify-content: center; /* Centra horizontalmente los elementos */
    cursor: pointer;
    font-size: 30px;
    padding: 8px;
    background-color: #5a5a5a;
    border-radius: 5px;
    color: #ffffff;

  }
  
  /* Estilos para la lista desplegable */
  .menu {
    display: none;
    position: absolute;
    background-color: #ffffff;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 8px;
    min-width: 150px;
    right: 20px;
    top: 20px;
  }
  
  .menu li {
    list-style: none;
  }
  
  .menu a {
    display: block;
    padding: 8px 16px;
    text-decoration: none;
    color: #333;
  }
  
/* Muestra y oculta el contenido de la lista desplegable al hacer clic en el ícono */
.menu-icon:hover + .menu,
.menu:hover {
  display: block;
}`
