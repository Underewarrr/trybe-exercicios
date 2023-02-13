# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.
# Necessario rodar com python3 -i filename
def bigger(number, other):
    if other > number:
        return other
    return number

# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.
def mean(numbers):
    total = 0
    for number in numbers:
        total += number
    return total / len(numbers)

# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
def draw_square(n):
    for row in range(n):
        print(n * '*')

# Exercício 4: Um posto está vendendo combustíveis com a seguinte tabela de descontos
def fuel_price(type, liters):
    if type == "A":
        price = 1.90
        discount = 0.03
        if liters > 20:
            discount = 0.05
    elif type == "G":
        price = 2.50
        discount = 0.04
        if liters > 20:
            discount = 0.06
    total = price * liters
    total -= total * discount
    return total

# Bonus
def minimum(numbers):
    smaller = numbers[0]
    for number in numbers:
        if number < smaller:
            smaller = number
    return smaller
