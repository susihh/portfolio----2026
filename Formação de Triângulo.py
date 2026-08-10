a = float(input('digite o comprimento da primeira reta:'))
b = float(input('digiite o comprimento da segunda reta:'))
c = float(input('digete o comprimento da terceira reta:'))

if a < b + c and b < a + c and c < a + b:
   print('as retas podem formar um triângulo!')
else:
   print('as retas NÃO podem formar um triângulo.')
   