# Front-Alego
Framework da Assembleia Legislativa do Estado de Goiás. Desenvolvido ao longo de 2015 pela Seção de Programação Web com o objetivo de padronizar o CSS e facilitar a criação do front-end dos sistemas.

Os arquivos presentes no *read-me* fazem uso do [Front-Alego] em seu estado quase que bruto (sem alterações nas configurações básicas) e servem de modelo para visualizar o projeto atual. As alterações que você fizer no sistema serão refletivas nos arquivos da pasta, bastando compilar o CSS novamente. Configurações específicas são encontradas no `info.scss` nesta mesma pasta. Compile este arquivo depois de aplicar suas configurações.

Os arquivos na pasta *read-me* são:

* `index.html`: uma adaptação deste mesmo arquivo.
* `doc.html`: regras de padronização e como usar o Front-Alego.
* `elementos.html`: exibe os elementos disponíveis e quais foram escolhidos.
* `info.scss`: folha de estilo para formatar os arquivos de html da pasta. Lembre-se de converter o arquivo depois que alterar as configurações básicas.

Para converter o scss para css use:

```
sass info.scss info.css --style expanded
```
