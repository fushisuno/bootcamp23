//Requisição HTTP

URL: minhaurl <br>
    ${IP}/${path = caminho de identificação do recurso}

IP= meudominio
    http://127.0.0.1:8080
// Dns tranforma o dominio em ip

Path= caminho


// Tipo de request <br>
Request Method: GET | POST | PUT | DELETE | PATH  <br>
Get: Busca<br>
Post: Inserir dados<br>
Put: Atualizar dados<br>
Delete: deletar dados<br>

> Query String (?) : Descrição de Busca | é como se fosse a clausula where
https://ubiquitous-bassoon-p44jxqp7q5vh7jgq-5500.app.github.dev/Html/Pokedex {?type=grass}query or {&name=bolb} <br>
type = grass | name = bolb

> Header () : metadados  descrevem ou complementam nosssa requisição 

##


> Request Header

    Configuração
    acept-languages:
        pt-br
        en
        xon
        glo
    Authorization:
        basic
        reader
> Response Header

    Configuração
    acept-languages:
        pt-br
        en
        xon

##

> Body: dados que eu quero trafegar 

    Request Headers
        content-type: application.json

    Request Body
    {
    'name': "Teste"
    }

    Status Code : 200 OK
        "Indica o que aconteceu com a requisição"
        Response Header
        Response Body
