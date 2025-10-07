def controle_estoque(nome_produtos, quantidade_produtos):
    for index, item in enumerate(quantidade_produtos):
        if item == 0:
            print(f'{nome_produtos[index]} estoque zerado')

        if item > 0 and item < 5:
            print(f'{nome_produtos[index]} menor que 5 no estoque')




controle_estoque(["Arroz", "Feijao"], [10, 0])