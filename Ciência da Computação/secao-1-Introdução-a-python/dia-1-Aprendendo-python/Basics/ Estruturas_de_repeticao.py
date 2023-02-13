restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]
# Em alguns casos, podemos ainda querer percorrer uma sequência numérica, e para isto iteramos sobre a estrutura de dados range. 

# Lista Comun
filtered_restaurants = []

# A compreensão de listas é declarada da mesma maneira que uma lista comum, porém no lugar dos elementos nós colocamos a iteração que vai gerar os elementos da nova lista.
min_rating = 3.0
for restaurant in restaurants:
  filtered_restaurants = [restaurant["name"] ]
    #if restaurant["nota"] > min_rating:
        # filtered_restaurants.append(restaurant)
print(filtered_restaurants) 
# imprime a lista de restaurantes, sem o B e D

# A compreensão de listas é declarada da mesma maneira que uma lista comum, porém no lugar dos elementos nós colocamos a iteração que vai gerar os elementos da nova lista.
for index in range(5):
    print(index)

# Strings
names_list = ['Duda', 'Rafa', 'Cris', 'Yuri']
new_names_list = [name for name in names_list if 'a' in name]

# Aqui o for percorre cada nome em "names_list", verifica se existe a letra "a" nele,
# o adiciona à variável "name", e então gera nossa nova lista "new_names_list"
print(new_names_list)
# Saída
['Duda', 'Rafa']

quadrados = [x*x for x in range(11)]
print(quadrados)

# Saída
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]


#While

n = 10
last, next = 0, 1
while last < n:
    print(last)
    last, next = next, last + next

# enumerate

languages = ['Python', 'Java', 'JavaScript']

enumerate_prime = enumerate(languages)

# converte um objeto enumerate em uma lista
print(list(enumerate_prime))

# Saída: [(0, 'Python'), (1, 'Java'), (2, 'JavaScript')]

#enumerateTupla

languages = ['Python', 'Java', 'JavaScript']

for index, language in enumerate(['Python', 'Java']):
    print(f'{index} - {language}')
# Saída: 0 - Python 1 - Java


# Fatorial exec 12
number = 10
count = 1
result = 1

while count <= number:
    result = result * count
    count += 1
print(result)

# mult * 10 exec 13
ratings = [6, 8, 5, 9, 10]
ar_ratings = []

for rating in ratings:
    ar_ratings.append(rating * 10)
print(ar_ratings)
# percorrer array exec 14
for rating in ratings:
    if (rating % 3) == 0:
        print(f'{rating} é múltiplo de 3')