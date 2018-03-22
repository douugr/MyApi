# MyApi
Api CRUD para controle de PF e PJ

https://my-api-crud.herokuapp.com/pf/{id} -> GET de pessoa fisica passando o ID como parâmetro
https://my-api-crud.herokuapp.com/pj/{id} -> GET de pessoa juridica passando o ID como parâmetro

https://my-api-crud.herokuapp.com/salvapf -> POST de pessoa fisica, retorna o ID do documento
https://my-api-crud.herokuapp.com/salvapj -> POST de pessoa juridica, retorna o ID do documento

https://my-api-crud.herokuapp.com/deletepf/{id} -> DELETE de pessoa fisica passando o ID como parâmetro
https://my-api-crud.herokuapp.com/deletepj/(id} -> DELETE de pessoa juridica passando o ID como parâmetro

https://my-api-crud.herokuapp.com/updatepf/{id} -> UPDATE de pessoa fisica passando o ID como parâmetro
https://my-api-crud.herokuapp.com/updatepj/{id} -> UPDATE de pessoa juridica passando o ID como parâmetro

MODELO DE ENVIO JSON:

{
	"cnpj": "222222222222",
    "razaoSocial": "Maria Ltda. Me.",
    "telefone": "5678-1234",
    "rua": "Rua das Rosas",
    "numero": "2",
    "bairro": "Bairro das Flores",
    "cidade": "Suzano",
    "estado": "RO",
    "cep": "22222-222"
}
