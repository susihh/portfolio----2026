import random 
numero_computador = random.randint(0, 5)
numero_usuario = int(input('tente adivinhar o número escolhido (entre 0 e 5): '))
if numero_usuario == numero_computador:
    print('parabéns! você venceu, o número era', numero_computador)
else:
    print('você perdeu, o numero era', numero_computador)