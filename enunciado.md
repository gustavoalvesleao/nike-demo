# Geolocalização Grupo SBF

No grupo SBF prezamos em oferecer a melhor experiência ao cliente. Uma delas consiste em comprar um produto nos sites e retirá-lo na loja. A partir da localização geográfica do cliente e das nossas lojas, gostaríamos de ter uma solução tecnológica que calcule as distâncias das lojas mais próximas para o cliente retirar seu produto.

_Dica: Nossa stack frontend é composta por react, typescript, styled-components e next.js entre outras tecnologias, caso queira se aproximar do dia-a-dia do nosso time de pessoas campeãs, indicamos o uso._

## Enunciado

Considerando um plano X,Y de tamanho MxN, em que o usuário estará numa determinada coordenada e as lojas em outras coordenadas, crie um algoritmo que seja capaz de ordenar as lojas pela menor distância e trazer as 3 lojas mais próximas.

Como entradas do algoritmo, considere os seguintes parâmetros:

```text
posicaoDoCliente = [X,Y], onde a entrada é um vetor de inteiros;
lojas = [[X,Y]...[Xn, Yn]], onde a entrada é uma matriz 2xN de inteiros;
plano = [M,N], onde a entrada é um vetor de inteiros.
0 ≤ X ≤ M
0 ≤ Y ≤ N
0 ≤ M ≤ 1000
0 ≤ N ≤ 1000
```

## Exemplo

```text
posicaoCliente = [20, 32],
lojas = [[40,88], [18, 56], [99, 2]]
plano = [100,100]
```

## Resultado esperado

```text
[[18,56],[40,88],[99,2]]
```

Considere a seguinte equação como fórmula para cálculo da distância entre o cliente e as lojas:

![image](https://s2.static.brasilescola.uol.com.br/be/2020/02/1-formula-distancia-entre-dois-pontos.jpeg)

## Material de apoio

Para esse desafio temos o layout proposto pelo time de Design:

[Figma - Interface](https://www.figma.com/file/yP8EVezGVQyW6dftG3McY2/Teste-geolocaliza%C3%A7%C3%A3o-front-end?node-id=16%3A3570)

[Figma - Protótipo](https://www.figma.com/proto/yP8EVezGVQyW6dftG3McY2/Teste-geolocaliza%C3%A7%C3%A3o-front-end?page-id=0%3A1&node-id=16%3A3055&viewport=2221%2C1362%2C0.37684541940689087&scaling=min-zoom&starting-point-node-id=16%3A3055&show-proto-sidebar=1)

[API disponível](https://api.gruposbf.com.br/geolocation-api/stores)

## Mostrando o resultado

Após realizar o teste de algoritmo, pedimos que você mostre o resultado desenvolvendo uma tela na qual nosso cliente possa digitar as coordenadas e visualizar as 3 lojas mais próximas de acordo com a [API disponível](https://api.gruposbf.com.br/geolocation-api/stores).

Para tanto você deve seguir layout conforme proposto [aqui](https://www.figma.com/proto/yP8EVezGVQyW6dftG3McY2/Teste-geolocaliza%C3%A7%C3%A3o-front-end?page-id=0%3A1&node-id=16%3A3055&viewport=2221%2C1362%2C0.37684541940689087&scaling=min-zoom&starting-point-node-id=16%3A3055&show-proto-sidebar=1).

**OBS: No site da Nike usamos a fonte Helvetica, padrão determinado pela Nike internacional, porém ela é uma fonte paga, por isso, você pode usar um fonte parecida, como por exemplo a Roboto.**

Usar os ícones que estão na pasta imagens.

[Aqui](https://www.figma.com/file/yP8EVezGVQyW6dftG3McY2/Teste-geolocaliza%C3%A7%C3%A3o-front-end?node-id=16%3A3570) você encontra mais informações sobre o layout usando o Figma desenvolvido por nossa equipe de designers.

## Resultado esperado frontend

Aqui é esperado que o cliente possa digitar as coordenadas no campo de busca e consiga visualizar as 3 lojas mais próximas em uma lista e em um mapa.

Suba a sua solução no github e nos envie o link do repositório.

Boa Sorte!