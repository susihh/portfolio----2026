distancia = int(input('digite a distancia da viagem em KM: '))
if distancia <= 200:
    preco = distancia * 0.50
    print(f' o preço da passagem é R$ {preco:.2f}')
else:
    preco = distancia * 0.45
    print(f' o preço da passagem é R$ {preco:.2f}')