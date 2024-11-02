
//Ayuda Span
class AyudaSpan extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
            <span class="ayuda">${this.textContent}</span>
            <style>
                .ayuda {
                    background-color: #e7f3fe;
                    color: #31708f;
                    padding: 5px 10px;
                    border-radius: 5px;
                    font-weight: bold;
                    font-size: 14px;
                }
            </style>
        `;
    }
}
customElements.define("ayuda-span", AyudaSpan);


//Boton Notificaciones 
class BotonNotificaciones extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
            <button class="notificaciones">
                🔔 Notificaciones
            </button>
            <style>
                .notificaciones {
                    background-color: #007bff;
                    color: white;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-weight: bold;
                    display: flex;
                    align-items: center;
                }
                .notificaciones:hover {
                    background-color: #0056b3;
                }
            </style>
        `;
    }
}
customElements.define("boton-notificaciones", BotonNotificaciones);


//Caja de texto
class CajaTextoClave extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
            <input type="password" class="clave" placeholder="Ingrese su clave">
            <style>
                .clave {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    margin-bottom: 10px;
                }
            </style>
        `;
    }

    get value() {
        const input = this.shadowRoot.querySelector('.clave');
        return btoa(input.value);
    }
}
customElements.define("caja-texto-clave", CajaTextoClave);

//Formulario web
class FormularioDescuento extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
            <div class="form-container">
                <label for="nombre">Nombre</label>
                <input type="text" id="nombre" class="form-control">

                <label for="cupon">Cupón de descuento</label>
                <input type="text" id="cupon" placeholder="Ingrese su cupón" class="form-control">

                <button type="button" class="btn">Aplicar Cupón</button>
            </div>
            <style>
                .form-container {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    max-width: 400px;
                    padding: 20px;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    background-color: #f9f9f9;
                }
                .form-control {
                    padding: 10px;
                    margin-bottom: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                }
                .btn {
                    background-color: #007bff;
                    color: white;
                    padding: 10px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-weight: bold;
                }
                .btn:hover {
                    background-color: #0056b3;
                }
            </style>
        `;
    }
}
customElements.define("formulario-descuento", FormularioDescuento);

