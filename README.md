# Tecnologias em Saúde e Enfermagem — PGEnf/UFRN

Ambiente acadêmico bilíngue para a disciplina de mestrado e doutorado **Tecnologias em Saúde e Enfermagem**, período **2026.2**, com **45 horas e 3 créditos**. A proposta reúne leituras e anotações da turma, articulando ensino, pesquisa, assistência, gestão, inovação e ética.

## Autores

- ANA BEATRIZ DA SILVA
- AWHOBIWOM VICTORIA UNDIE
- CLARA CECI DIÓGENES RÊGO
- EDUARDO PINHEIRO E SILVA
- FLAVIA GOMES SILVA
- JONATAS GOMES NERI
- TERCIO SANTINO DE OLIVEIRA NETO

Docentes: **Dra. Isabelle Campos de Azevedo** e **Dr. Mércio Gabriel de Araújo**.

## Conteúdo e identidade

Os 18 arquivos fornecidos — 17 leituras e o plano da disciplina — fundamentam a síntese. Também foram consideradas três anotações discentes e preservadas as referências do HTML original. A bibliografia possui 24 entradas. Do e-book, utiliza-se exclusivamente o intervalo de páginas **12 a 22**.

A identidade lunar retoma a metáfora de Paim et al. (2009), relacionando fases lunares à visibilidade e às condições sociais e políticas da produção tecnológica da enfermagem. O site mantém os logos da UFRN e do PGEnf, a lua realista e as quatro ilustrações temáticas: cuidado, história, ensino e pesquisa.

Veja [FONTES.md](FONTES.md) para o mapa das leituras e [IMAGENS.md](IMAGENS.md) para identificação e prompts das imagens geradas por IA.

## Interface e interações

- Abertura em composição editorial, com lua em destaque e créditos completos.
- Menu **Conteúdo** com acesso aos temas na ordem da página.
- Cards com reação ao mouse e botão **Ler em foco**: abre uma janela de leitura com o texto e as fontes do card.
- Navegação entre cards do mesmo grupo, por botões ou setas do teclado. Escape fecha a janela e devolve o foco ao card.
- Animações suaves de entrada durante a rolagem, respeitando a preferência de movimento reduzido.
- Abas educacional, assistencial e gerencial com navegação por setas, Home e End.
- Questões de reflexão expansíveis.
- Alternância **EN/PT**, incluindo os controles, legendas e descrições das novas imagens.
- Assistente local com respostas temáticas, referências e links para as seções.
- Ajustes para telas pequenas e impressão.

Todo o texto acadêmico permanece no HTML. O modo de leitura em foco apenas amplia sua apresentação. Navegadores sem suporte à janela de leitura mantêm os textos acessíveis na página.

## Arquivos

```text
index.html
README.md
PUBLICAR.md
FONTES.md
IMAGENS.md
.nojekyll
assets/
  css/
    base.css
    complete.css
    interface.css
  js/
    translations.js
    app.js
    course-interactions.js
    interface.js
  images/
    ufrn-brasao.png
    pgenf-logo.jpg
    full-moon.png
    human-centered-nursing.png
    nursing-history.png
    nursing-education.png
    nursing-research.png
```

O site é estático, com CSS e JavaScript separados para facilitar manutenção. Não precisa de instalação ou compilação. Abra `index.html` depois de extrair o ZIP inteiro, mantendo a estrutura de pastas. Para usar um servidor local, execute `python -m http.server 8000` na pasta e acesse `http://localhost:8000`.

Para publicar, siga [PUBLICAR.md](PUBLICAR.md). Envie **o conteúdo da pasta inteira**, e não apenas o HTML.

## Assistente e idioma

O assistente apresenta respostas previamente elaboradas a partir das leituras. Ele não é uma IA generativa conectada a uma API e não envia as perguntas à internet. Pode não compreender questões fora dos temas cadastrados. Não oferece orientação clínica ou jurídica.

A tradução está incorporada aos arquivos JavaScript. A preferência de idioma pode ser guardada no navegador; a conversa é reiniciada ao trocar o idioma e não é enviada nem salva em servidores externos.

## Uso acadêmico e verificação

O conteúdo deve ser discutido e revisado pelos autores da atividade. Dados quantitativos e marcos normativos mantêm os períodos e limites das publicações. Não constituem uma atualização legislativa ou clínica. Os PDFs não são redistribuídos neste pacote.

Os logos pertencem às instituições e identificam a atividade acadêmica, sem representar endosso institucional. As imagens geradas por IA são conceituais e não documentam personagens, participantes ou resultados reais de estudos.

Foram conferidos os recursos locais, a sintaxe JavaScript, os textos preservados, as referências e a cobertura de tradução. Os testes do assistente e de idioma usam simulação do DOM. A apresentação final e as novas interações devem ser conferidas em navegador antes da publicação; esta entrega não inclui validação visual em navegador real.

Nenhuma publicação, commit ou push foi realizado automaticamente.
