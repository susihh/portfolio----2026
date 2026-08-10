nome = input("Digite seu nome completo: ").strip()
print(f"Nome em maiúsculas: {nome.upper()}")
print(f"Nome em minúsculas: {nome.lower()}")
total_letras = len(nome.replace(" ", ""))
print(f"Total de letras (sem espaços): {total_letras}")
posicao_primeiro_espaco = nome.find(" ")

if posicao_primeiro_espaco == -1:
    letras_primeiro = len(nome)
else:
   
    letras_primeiro = posicao_primeiro_espaco

print(f"O seu primeiro nome tem {letras_primeiro} letras")