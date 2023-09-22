class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const card_left = document.createElement("div");
    card_left.setAttribute("class", "card-left");

    const autor_not = document.createElement("span");
    autor_not.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

    const linkTitle_not = document.createElement("a");
    linkTitle_not.textContent = this.getAttribute("title");
    linkTitle_not.href = this.getAttribute("url-link");

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("contet");

    card_left.appendChild(autor_not);
    card_left.appendChild(linkTitle_not);
    card_left.appendChild(newsContent);

    const card_right = document.createElement("div");
    card_right.setAttribute("class", "card-right");

    const image_not = document.createElement("img");
    image_not.src =
      this.getAttribute("photo") ||
      "https://i.ytimg.com/vi/71aBMGHsq1s/maxresdefault.jpg";
    image_not.alt = "Foto da Noticia";
    card_right.appendChild(image_not);

    componentRoot.appendChild(card_left);
    componentRoot.appendChild(card_right);

    return componentRoot;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
    .card{
        width: 100%;
        border: 1px solid gray;
        -webkit-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
        box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 1rem;
    }

    .card-left{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 0.725rem;
        padding-right: 0.725rem;
    }

    .card-left > span{
        font-weight: 400;
    }

    .card-left > a{
        margin-top: 0.938rem;
        font-size: 1.563rem;
        text-decoration: none;
        color: black;
        font-weight: bold;
    }

    .card-left > p{
        color: rgb(70, 70, 70);
    }

    .card-right > img{
        width: 100%;
        height: 12.5rem;   
    }

    @media screen and (max-width: 480px){
        .card{
            display: flex;
            flex-direction: column;
        }
        .card-left{
            padding-top: 0.725rem;
        }
    }

    @media screen and (min-width: 480px) and (max-width: 720px){
        .card-left{
            width: 50%
        } 
    }

    @media screen and (min-width: 992px){
        .card{
            width: 62rem;
        }

    `
    return style;
  }
}

customElements.define("card-news", CardNews);
