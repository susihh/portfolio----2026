salario = float(input('digite o salário do funcionário:'))
if salario > 1250:
   aumento = salario * 0,10
else:
   aumento = salario * 0,15
novo_salario = salario + aumento
print(f'0 novo salário será de R$ {novo_salario:.2f}')
