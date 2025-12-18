estados_lista = [
    {"nome": "Acre", "populacao": 830018, "regiao": "Norte", "idha": 0.719},
    {"nome": "Alagoas", "populacao": 3351543, "regiao": "Nordeste", "idha": 0.683},
    {"nome": "Amapá", "populacao": 877613, "regiao": "Norte", "idha": 0.740},
    {"nome": "Amazonas", "populacao": 4207714, "regiao": "Norte", "idha": 0.713},
    {"nome": "Bahia", "populacao": 15150143, "regiao": "Nordeste", "idha": 0.714},

    {"nome": "Ceará", "populacao": 9187103, "regiao": "Nordeste", "idha": 0.735},
    {"nome": "Espírito Santo", "populacao": 4108508, "regiao": "Sudeste", "idha": 0.772},
    {"nome": "Goiás", "populacao": 7207537, "regiao": "Centro-Oeste", "idha": 0.769},
    {"nome": "Maranhão", "populacao": 7153262, "regiao": "Nordeste", "idha": 0.683},
    {"nome": "Mato Grosso", "populacao": 3658649, "regiao": "Centro-Oeste", "idha": 0.773},

    {"nome": "Mato Grosso do Sul", "populacao": 2839188, "regiao": "Centro-Oeste", "idha": 0.766},
    {"nome": "Minas Gerais", "populacao": 21360000, "regiao": "Sudeste", "idha": 0.800},
    {"nome": "Pará", "populacao": 8777124, "regiao": "Norte", "idha": 0.700},
    {"nome": "Paraíba", "populacao": 4059905, "regiao": "Nordeste", "idha": 0.722},
    {"nome": "Paraná", "populacao": 11597484, "regiao": "Sul", "idha": 0.792},

    {"nome": "Pernambuco", "populacao": 9674793, "regiao": "Nordeste", "idha": 0.727},
    {"nome": "Piauí", "populacao": 3281480, "regiao": "Nordeste", "idha": 0.698},
    {"nome": "Rio de Janeiro", "populacao": 16718956, "regiao": "Sudeste", "idha": 0.799},
    {"nome": "Rio Grande do Norte", "populacao": 3570301, "regiao": "Nordeste", "idha": 0.738},
    {"nome": "Rio Grande do Sul", "populacao": 11466630, "regiao": "Sul", "idha": 0.787}
]

for item in estados_lista:
    print(item)


# Dicionario com listas
estados_dict = {
    "nome": [
        "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia",
        "Ceará", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso",
        "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná",
        "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul"
    ],

    "populacao": [
        830018, 3351543, 877613, 4207714, 15150143,
        9187103, 4108508, 7207537, 7153262, 3658649,
        2839188, 21360000, 8777124, 4059905, 11597484,
        9674793, 3281480, 16718956, 3570301, 11466630
    ],

    "regiao": [
        "Norte", "Nordeste", "Norte", "Norte", "Nordeste",
        "Nordeste", "Sudeste", "Centro-Oeste", "Nordeste", "Centro-Oeste",
        "Centro-Oeste", "Sudeste", "Norte", "Nordeste", "Sul",
        "Nordeste", "Nordeste", "Sudeste", "Nordeste", "Sul"
    ],

    "idha": [
        0.719, 0.683, 0.740, 0.713, 0.714,
        0.735, 0.772, 0.769, 0.683, 0.773,
        0.766, 0.800, 0.700, 0.722, 0.792,
        0.727, 0.698, 0.799, 0.738, 0.787
    ]
}

for i in range(0, len(estados_dict["nome"])):
    print(estados_dict["idha"][i])
