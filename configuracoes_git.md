# GIT - Configurações

### Comandos prontos
    git config --global user.name Murilo20H
    git config --global user.email murilohenrique123correa@gmail.com
    git clone https://github.com/Murilo20H/Desenvolvimento_Web.git
    git add .
    git status
    git commit -m "Listas e aulas"
    git status
    git push

### Configurar usuário
    - Comandos
        git config --global user.name "nome sobrenome"
        git config --global user.email "pessoa@gmail.com"

### Baixar o repositório do github
    - Comandos
        git clone link-repositorio

### Adicionar e subir alterações no repositório
    - Comandos
        git add .                   | prepara arquivos para serem subidos no repositório
        git commit -m "mensagem"    | adiciona mensagem
        git status
        git push                    | sobe arquivos no repositório

### Criar branch e mudar de branch
    - Comandos
        git branch noma-da-branch       | cria uma branch
        git checkout nome-da-branch     | muda de branch
        git branch -a                   | listar todas as branches
        git checkout -b nome-da-branch  | cria uma branch e troca para a branch criada
        git branch -d noma-da-branch    | apaga uma branch
        git pull                        | atualiza repositório