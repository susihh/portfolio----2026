numero = int(input (" digite um numero entre 0 a 9999: "))
unidade = numero // 1 % 10
dezena = numero // 10 % 10
centena = numero // 100 % 10
milhar = numero // 1000 % 10
print(f"analisando o numero {numero}:")
print(f"unidade: {3}")
print(f"dezena: {2}")
print(f"centena: {1}")
print(f"milhar: {0}") 