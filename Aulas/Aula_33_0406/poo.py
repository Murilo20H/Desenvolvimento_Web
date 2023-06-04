class Pessoa:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade
    
pessoa = Pessoa("Jorge", 35)

print(pessoa.nome, pessoa.idade)