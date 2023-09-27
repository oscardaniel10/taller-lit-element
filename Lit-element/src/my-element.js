import { LitElement, html } from "lit-element";
import stylesScss from './my_elementsStyle';
export class MyElement extends LitElement {

    static get styles() {
        return [stylesScss]
    }

    render(){
        return html`
        

          <div class="formulario">
    <h1>PUMAS DC</h1>
    <form method="post">
      <div class="username">
        <input type="text" placeholder="Usuario" required autofocus>
        
      </div>
      <div class="contraseña">
        <input type="password" placeholder="Contraseña" required>
        
      </div>
     
      <input type="submit" value="INGRESAR">
      <a href="src/my_element2vista.js" class="recordar">Olvidó su contraseña?</a>
    </form>
  </div>`
        
    }
}



customElements.define('my-element', MyElement)


