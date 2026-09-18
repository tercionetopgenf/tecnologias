# Publicar a pasta completa

1. Extraia o ZIP em seu computador.
2. Abra a pasta extraída. Você deve ver `index.html`, `assets`, `README.md` e os outros documentos.
3. Copie **esses arquivos e a pasta `assets` inteira** para a raiz do repositório, substituindo a versão anterior.
4. Faça commit e push de todos os arquivos alterados e adicionados.
5. Confirme que a origem do GitHub Pages corresponde à pasta na qual você colocou o site. Se usa `docs`, todo o conteúdo deve ficar dentro de `docs`.
6. Aguarde a publicação terminar e abra o site. Se aparecer a versão anterior, recarregue sem cache.

Não envie somente o ZIP ao repositório: o GitHub Pages precisa dos arquivos extraídos. Preserve nomes e letras minúsculas nas pastas. `assets` deve ficar ao lado de `index.html`.

## Conferência rápida

- Logos e lua devem aparecer na abertura, sobre o fundo estrelado.
- O botão **Conteúdo** deve abrir o índice dos temas.
- Um card com **Ler em foco** deve abrir a janela de leitura. Teste também Escape e os botões anterior/próximo.
- As abas de tecnologias educacionais, assistenciais e gerenciais devem trocar o texto.
- O botão **EN/PT** deve traduzir os textos e os controles.
- O assistente deve responder, por exemplo, à pergunta “Explique as fases lunares”.

Se faltar o visual, confira `assets/css/interface.css`. Se os cliques falharem, confira `assets/js/interface.js`. Se imagens falharem, confira `assets/images`. Abra os respectivos arquivos no repositório para confirmar que foram incluídos no commit.

Todas as referências usam caminhos relativos e funcionam tanto na raiz de um domínio quanto no endereço de um repositório do GitHub Pages.
