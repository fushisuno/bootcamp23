class CardNews extends HTMLElement{
    constructor(){
        super();


        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");
        
        const card_left = document.createElement("div");
        card_left.setAttribute("class", "card-left");

        const autor_not = document.createElement("span");
        const linkTitle_not = document.createElement("a");
        const description_not = document.createElement("p");

        card_left.appendChild(autor_not);
        card_left.appendChild(linkTitle_not);
        card_left.appendChild(description_not);

        const card_right = document.createElement("div");
        card_right.setAttribute("class", "card-right");
        const image_not = document.createElement("img");
        card_right.appendChild(image_not);

        componentRoot.appendChild(card_left);
        componentRoot.appendChild(card_right);
        
        return componentRoot;
    }

    styles(){

    }
}

customElements.define("card-news", CardNews);