# Front-Alego
Framework da Assembleia Legislativa do Estado de Goiás. Desenvolvido ao longo de 2015/16 pela Seção de Programação Web com o objetivo de padronizar o CSS e facilitar a criação do front-end dos sistemas.

Os arquivos presentes no *read-me* fazem uso do [Front-Alego] em seu estado quase que bruto (sem alterações nas configurações básicas) e servem de modelo para visualizar o projeto atual. As alterações que você fizer no sistema serão refletivas nos arquivos da pasta, bastando compilar o CSS novamente. Configurações específicas são encontradas no `info.scss` na mesma pasta. Compile este arquivo depois de aplicar suas configurações.

Os arquivos na pasta *read-me* são:

* `index.html`: uma adaptação deste mesmo arquivo.
* `doc.html`: regras de padronização e como usar o Front-Alego.
* `elementos.html`: exibe os elementos disponíveis e quais foram escolhidos.
* `info.scss`: folha de estilo para formatar os arquivos de html da pasta. Lembre-se de converter o arquivo depois que alterar as configurações básicas.

Para converter o scss para css use:

```
sass info.scss info.css --style expanded
```
---
## Aplicando o Front-Alego
Depois de criado o layout em um programa de imagem (existe um arquivo do Illustrator preparado para estes padrões) copie todas as pastas para a pasta `stylesheets` do projeto (exceto a pasta `bourbon`).

A pastas são:

* `base`: Esta pasta contém todos os arquivos imutáveis do CSS. **Não modifique nenhum destes arquivos!**
* `bourbon`: O bourbon para caso o projeto não seja rails. Do contrário use a gem e não esta pasta.
* `config`: Os arquivos de configuração do próprio CSS, incluindo cores, quais classes serão escritas no arquivo final, z-index, etc. Para mais detalhes, cheque a documentação.
* `extra`: Esta pasta está vazia e serve para personalizar elementos que aparecem na pasta `base`. Os arquivos devem ser importados manualmente no arquivo `config/_base.scss`.
* `fontes`: As fontes do sistema.
* `read-me`: Contém a documentação. Ver mais detalhes acima.

Crie o arquivo básico para o CSS fora de qualquer pasta (`app.scss`) e dentro dele inclua:

```
  @import "config/base";
```
