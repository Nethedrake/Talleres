class TopBanner extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {    
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
            
            .banner {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 20px 30px;
                background: linear-gradient(135deg, #1c1c1c, #3c3c3c);
                border-radius: 12px;
                margin-bottom: 25px;
                color: #ffffff;
                box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
                font-family: 'Roboto', sans-serif;
            }
            .date-time {
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 18px;
                font-weight: bold;
            }
            .current-time {
                font-size: 22px;
                font-weight: 700;
                padding: 0 10px;
                color: #ffcc00;
            }
            .chat-link {
                text-decoration: none;
                color: #ffffff;
                background-color: rgba(255, 255, 255, 0.1);
                padding: 10px 25px;
                border-radius: 25px;
                transition: all 0.3s ease;
                font-weight: bold;
                box-shadow: 0 4px 15px rgba(255, 255, 255, 0.1);
            }
            .chat-link:hover {
                background-color: rgba(255, 255, 255, 0.2);
                transform: translateY(-3px);
                box-shadow: 0 6px 20px rgba(255, 255, 255, 0.2);
            }
        </style>
        <div class="banner">
            <div class="date-time">
                ${this.getCurrentDate()}
            </div>
            <div class="date-time">
                <h3>Bienvenidos, son las:</h3>
                <span id="current-time" class="current-time">${this.getCurrentTime()}</span>
            </div>
            <a href="https://chat.openai.com" target="_blank" class="chat-link">
                Ir a ChatGPT
            </a>
        </div>
        `;

        // Actualiza la hora cada segundo
        setInterval(() => {
            const timeElement = shadowRoot.querySelector('#current-time');
            timeElement.textContent = this.getCurrentTime();
        }, 1000);
    }

    getCurrentDate() {
        const today = new Date();
        return today.toLocaleDateString('es-ES');
    }

    getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString('es-ES');
    }
}

customElements.define("top-banner", TopBanner);

class buscarChatGpt extends HTMLElement {
    constructor() {
      // Always call super first in constructor
      super();
    }
    connectedCallback() {
      // Create a shadow root
      const shadow = this.attachShadow({ mode: "open" });
      // Create caja de texto
      const buscarcaja = document.createElement("input");
      buscarcaja.type = 'text';
      buscarcaja.name = 'buscar';
      buscarcaja.id = 'buscar';
  
      buscarcaja.placeholder = 'Burcar con ChatGPT';
      buscarcaja.setAttribute("class", "buscarcaja buscarcaja:focus");
      const style = document.createElement("style");
      style.textContent = `
        .buscarcaja {       
         
        width: 100%;           /* Ancho de la caja de texto */
    padding: 10px;         /* Espaciado interno */
    border: 2px solid #007bff; /* Color y grosor del borde */
    border-radius: 20px;   /* Esquinas redondeadas */
    outline: none;         /* Quitar el contorno al hacer clic */
    transition: border-color 0.3s; /* Transición suave para el color del borde */
  
        }
          .buscarcaja:focus {
    border-color: #CD5C5C;  /* Color del borde al enfocar */
  }
       
      `;
      // Attach the created elements to the shadow dom
      shadow.appendChild(style);   
      shadow.appendChild(buscarcaja);
      
    }
  }
  customElements.define("buscar-chatgpt", buscarChatGpt);

  class CardCarrito extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.innerHTML = `
        <style>
             .card {
            border: 2px solid #000;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden; 
            margin: 10px; 
            max-width: 300px; 
            background-color: #fff; 
          }
          .card img {
            width: 100%; 
            height: auto; 
          }
          .card-body {
            padding: 15px;
          }
          .card h5 {
            margin: 0 0 10px; /* Remove default margin */
            font-size: 20px; /* Title font size */
          }
          .card p {
            font-size: 14px; /* Body text size */
            line-height: 1.5; /* Line height for readability */
          }
          .btn-custom {
            background-color: #28a745; /* Button background color */
            color: white; /* Button text color */
            padding: 10px 20px; /* Button padding */
            border: none; /* Remove border */
            border-radius: 5px; /* Rounded corners */
            cursor: pointer; /* Change cursor on hover */
            font-size: 16px; /* Button font size */
            transition: background-color 0.3s; /* Smooth transition for hover */
          }
          .btn-custom:hover {
            background-color: #218838; /* Darker shade on hover */
          }
        </style>
        
          <div class="card flex alling-items ">
            <img src="#" alt="#" class="img-fluid">
            <div class="card-body">
              <h5>Agua</h5>
              <p>Es rica</p>
              <a href="#"><button class="btn btn-custom">Ir al carrito</button></a>
            </div>
          </div>
        
      `;
    }
  }
  
  customElements.define("card-carrito", CardCarrito);
  
  

