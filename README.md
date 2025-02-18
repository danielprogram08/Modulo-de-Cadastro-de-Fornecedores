# Sistema de Cadastro de Fornecedores + Autenticação de Administrador

Este projeto trata-se de uma aplicação full-stack completa voltada para o gerenciamento de fornecedores. Ele permite cadastrar novos fornecedores, editá-los e excluí-los de forma eficiente, além de contar com as validações de segurança em prol das ações do administrador e interágir de maneira eficiente e fácil com o mesmo, oferecendo uma estrutura flexível para que os administradores possam gerenciar todos os fornecedores de acordo com suas necessidades.

## Modelo de domínio do Sistema

![Modelo de domínio do Sistema](https://github.com/danielprogram08/Registration_Module/blob/main/Img/ClassDiagram.png?raw=true)

Nesta seção, é apresentado o Diagrama de Classe (UML), que ilustra a estrutura e as relações dos dados armazenados em memória.

## Estrutura de Dados

### Administrador
![Estrutura de dados do Administrador](https://github.com/danielprogram08/Registration_Module/blob/main/Img/Structure-Data-Administrator.png?raw=true)

### Fornecedores
![Estrutura de dados do Fornecedor](https://github.com/danielprogram08/Registration_Module/blob/main/Img/Structure-Data-Suppliers.png?raw=true)

Nesta seção, é apresentada toda a Estrutura de Dados, organizada em tabela pelo banco de dados, que ilustra como os dados tanto do Administrador quanto dos Fornecedores são apresentados pelo Banco de Dados.

A primeira imagem ilustra claramente como os dados do Administrador são montados no Banco de Dados, contendo apenas seu respectivo ID, nome e senha para autenticar-se no sistema.
A segunda imagem ilustra todos os fornecedores já cadastrados no sistema **(ATENÇÃO: ESTES DADOS SÃO FICTICIOS E USADOS APENAS PARA FINS DIDÁTICO).** Os dados contam com mais algumas colunas como Email, Telefone, Endereço, Rasão Social e etc. 

### Página de Login do Administrador

![Login do Administrador](https://github.com/danielprogram08/Registration_Module/blob/main/Img/Login-ADM-Page.png?raw=true)

Nesta seção, é ilustrado como o sistema inicializa mostrando a primeira página de autenticação do Administrador para acesso completo do sistema. O próprio sistema aciona alertas para caso o Administrador esqueça de preencher todos os campos ou em caso de haver errado o nome ou senha.

### Página "Esqueci minha Senha."

![Atualizar Senha](https://github.com/danielprogram08/Registration_Module/blob/main/Img/New-Password-Page.png?raw=true)

Nesta seção, o Administrador atualiza sua senha e o sistema retorna a página de autenticação. O sistema conta com uma verificação precisa do nome do Administrador no Banco de Dados, em caso de não haver existência do Administrador no Banco de Dados, o Sistema aciona um alerta para informar de que o Administrador não foi encontrado no Banco de Dados.

### Página Inicial do Sistema

![Sistema](https://github.com/danielprogram08/Registration_Module/blob/main/Img/Supplier-Page.png?raw=true)

A página inicial do Sistema conta com algumas verificações para cadastro ou consulta de Fornecedores, o sistema é responsável por identificar se o fornecedor já foi cadastrado anteriormente pelo Administrador e o informa através de alerta para fazer uma consulta no sistema se o fornecedor existe.
Além disso, o sistema conta também com a verificação se o fornecedor existe ao ser consultado, em caso de inexistência do mesmo, o sistema usa outro alerta para notificar ao Administrador.

### Página de Consulta por todos os Fornecedores

![Consultar Todos os Fornecedores](https://github.com/danielprogram08/Registration_Module/blob/main/Img/Show-All-Suppliers.png?raw=true)

Ao clicar no Botão **"Consultar"** sem preencher todos os campos, o Sistema encaminhará para a página de todos os fornecedores cadastrados no Banco de Dados e os mostrará para o Administrador, contendo em cada um deles um botão de **"EDITAR"** e **"DELETAR"**.

### Consultar apenas um único Fornecedor

![Consultar um único Fornecedor](https://github.com/danielprogram08/Registration_Module/blob/main/Img/Show-Just-OneSupplier.png?raw=true)

Para consultar apenas um único fornecedor, o Administrador terá que preencher todos os dados desse fornecedor corretamente e clicar no botão **"CONSULTAR"**, em caso de algum dado escrito incorretamente, o Sistema não o indentificará no Banco de Dados e exibirá um alerta de Fornecedor não encontrado.

### Botões "EDITAR" e "DELETAR"

#### EDITAR

![Editar Fornecedor](https://github.com/danielprogram08/Registration_Module/blob/main/Img/Edit-Supplier-Page.png?raw=true)

#### DELETAR

![Deletar Fornecedor](https://github.com/danielprogram08/Registration_Module/blob/main/Img/Delete-Supplier-Page.png?raw=true)

Nesta seção, ao clicar no botão **"EDITAR"**, o Administrador só poderá sair desta opção caso preencher todos os campos, no entanto, é necessário bastante atenção para não clicar inconcientemente. Em caso de não preencher todos os dados, o sistema fará uma verificação e exibirá um alerta para preenchimento de todos os campos. Logo após preencher todos os campos corretamente, clicando na tecla "ENTER" do computador, o Administrador terá editado o fornecedor com sucesso e será redirecionado a página principal do Sistema.
Ao clicar no botão **"DELETAR"**, o Sistema exibirá uma notificação para a confirmação de exclusão do fornecedor, caso o Administrador clique **"Sim"** para excluir, o Sistema exluirá instantaneamente e redirecionará para a página principal. Ao clicar **"Não"**, o Administrador cancelará o processo de exclusão do fornecedor e a notificação será removida da página.


## Tecnologias Utilizadas:

- HTML, CSS **(Apresentação)**

- JAVASCRIPT **(Linguagem Front-End)**

- BOOTSTRAP **(Framework Front-End)**

- JAVA **(Linguagem Back-End)**

- SPRING **(FrameWork Back-End)**

- DOCKER **(Ambiente)**

- H2 **(Banco de Dados 'Teste')**

- MYSQL **(Banco de Dados 'Homologação')**

- GIT, GITHUB **(Versionamento de Código)**<br>

<br><p>
  <img src="https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png" alt="BOOTSTRAP" width="40" style="margin: 0 50px;">
  <img src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="HTML" width="40" style="margin: 0 50px;">
  <img src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" width="40" style="margin: 0 50px;">
  <img src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JS" width="40" style="margin: 0 50px;">
  <img src="https://user-images.githubusercontent.com/25181517/117201156-9a724800-adec-11eb-9a9d-3cd0f67da4bc.png" alt="JAVA" width="40" style="margin: 0 50px;">
  <img src="https://user-images.githubusercontent.com/25181517/183891303-41f257f8-6b3d-487c-aa56-c497b880d0fb.png" alt="SPRING-BOOT" width="40" style="margin: 0 50px;">
  <img src="https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png" alt="MYSQL" width="40" style="margin: 0 50px;">
  <img src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png" alt="GIT" width="40" style="margin: 0 50px;">
  <img src="https://user-images.githubusercontent.com/25181517/117207330-263ba280-adf4-11eb-9b97-0ac5b40bc3be.png" alt="DOCKER" width="40" style="margin: 0 50px;">
  <img src="https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png" alt="VSCODE" width="40" style="margin: 0 50px;">
</p><br>

## Autor

- [@danielprogram08](https://github.com/danielprogram08)

## Referência

- Desafio Full-Stack Módulo de Cadastro LAB Insight
