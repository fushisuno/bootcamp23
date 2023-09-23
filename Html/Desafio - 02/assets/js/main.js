const frm = document.querySelector("form"); 
const dvQuadro = document.querySelector(".items_vet");
let fileImg = document.querySelector("#picture-input");

 /* Metodo 1*/ 
 frm.addEventListener("submit", (e)=>{
    e.preventDefault();

    let srcImg = "";

    fileImg.addEventListener('load', (ev)=>{
        let reader = FileReader();
        
        reader.onload = ()=>{
            srcImg = reader.result;
        }

        reader.readAsDataURL(fileImg.files[0]);
    })

    console.log(frm.inAutor.value)

    dvQuadro.insertAdjacentHTML("beforeend", `
    <card-news
        autor="${frm.inAutor.value}"
        title="${frm.inTitle.value}"
        url-link="https://www.google.com.br/search?q=${frm.inTitle.value}&imagens&tbm=isch"
        contet="${frm.inContent.value}"
        photo="${srcImg}">
    </card-news>`);

    frm.inAutor.value = "";
    frm.inTitle.value = "";
    frm.inContent.value = "";
 });