class TituloDinamico extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});

        //Base
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("titulo");

        // Estilizar component
        const style = document.createElement("style");
        style.textContent = `
            h1{
                color: red;
            }
        `;

        // Enviar para o shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);

    }    
}

customElements.define("titulo-dinamico", TituloDinamico);