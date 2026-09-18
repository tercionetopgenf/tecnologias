# Tecnologias em Saúde e Enfermagem — PGEnf/UFRN

Ambiente acadêmico bilíngue elaborado para a disciplina **Tecnologias em Saúde e Enfermagem**, do mestrado e doutorado do Programa de Pós-Graduação em Enfermagem da Universidade Federal do Rio Grande do Norte, período **2026.2**, com **45 horas e 3 créditos**.

O site articula leituras e anotações da turma, com sínteses sobre ensino, pesquisa, assistência, gestão, inovação e ética. É um material de estudo e discussão, não uma publicação institucional oficial nem um recurso de orientação clínica ou jurídica.

## Identidade e proposta

A identidade lunar retoma a metáfora de **Paim et al. (2009)** para discutir a construção tecnológica da enfermagem: pioneirismo, baixa visibilidade, renovação e expansão da produção científica. As fases não constituem uma cronologia astronômica ou uma sequência histórica rígida.

O projeto preserva a paleta azul-noturno, dourado e verde, os logos da UFRN e do PGEnf e os temas do HTML original. A lua cheia recebeu uma ilustração realista gerada por IA; um fundo estrelado discreto e uma ilustração sobre cuidado centrado na pessoa complementam a apresentação.

## Objetivos da atividade

- Discutir conceitos e diferentes perspectivas sobre tecnologia em saúde e enfermagem.
- Relacionar tecnologias duras, leve-duras e leves com tecnologias educacionais, assistenciais e gerenciais, sem confundir os eixos classificatórios.
- Compreender a construção histórica da produção tecnológica da enfermagem.
- Refletir sobre humanização, autonomia e o processo de cuidado em Collière.
- Examinar pesquisa clínica, inovação, patentes, avaliação de tecnologias e políticas de fomento.
- Discutir saúde digital, telessaúde, educação on-line, simulação e realidade virtual, considerando seus limites e contextos.

## Autores

- ANA BEATRIZ DA SILVA
- AWHOBIWOM VICTORIA UNDIE
- CLARA CECI DIÓGENES RÊGO
- EDUARDO PINHEIRO E SILVA
- FLAVIA GOMES SILVA
- JONATAS GOMES NERI
- TERCIO SANTINO DE OLIVEIRA NETO

## Docentes

- Dra. Isabelle Campos de Azevedo
- Dr. Mércio Gabriel de Araújo

## Fontes e limites da síntese

Foram integrados **18 arquivos: 17 leituras e o plano da disciplina**, além de três documentos de anotações discentes. O site também mantém as obras já citadas no HTML original, identificando-as separadamente das leituras recebidas.

Do e-book organizado por Santos, foi utilizado **exclusivamente o capítulo das páginas 12 a 22**, incluindo suas referências. Não foram incorporados conteúdos dos demais capítulos.

Veja [FONTES.md](FONTES.md) para o mapa dos 18 arquivos e seus lugares no site. As referências completas estão na seção **Referências**, com 24 entradas, incluindo fontes complementares e anotações. Os títulos das obras são mantidos no idioma original, inclusive na versão em inglês.

Resultados quantitativos e marcos normativos são apresentados no contexto e período das publicações. Por exemplo, os percentuais de pesquisa clínica de Pedrolo et al. não são estimativas atuais de toda a produção de enfermagem. O estudo de realidade virtual foi realizado com estudantes de Educação Primária, não com estudantes de enfermagem.

Os textos são sínteses didáticas e devem ser conferidos com as leituras e discutidos pela turma antes de sua entrega acadêmica. As anotações dos estudantes são apoio, não substitutas das fontes. O recorte de Collière não permite confirmar a edição; por isso, o capítulo é identificado sem atribuir uma edição não verificável.

## Recursos

- Navegação responsiva e atalhos para os temas.
- Seção das quatro fases lunares e linha do tempo histórica.
- Abas sobre tecnologias educacionais, assistenciais e gerenciais.
- Questões de reflexão expansíveis.
- Botão **EN/PT**, que alterna imediatamente os textos por traduções incorporadas ao projeto, sem depender de serviço externo.
- Assistente local bilíngue com respostas temáticas, indicação de fontes e links para as seções.
- Logos institucionais, créditos de autoria e ilustrações locais.
- Textos alternativos, foco visível, fechamento do assistente por Escape e respeito à preferência de movimento reduzido.

## Sobre o assistente

O assistente **não é uma IA generativa conectada a uma API**. Ele identifica palavras e expressões e apresenta respostas previamente elaboradas a partir das leituras. Pode não compreender perguntas complexas ou temas fora da base. Não oferece aconselhamento clínico ou jurídico.

As perguntas não são enviadas a servidores externos e a conversa permanece apenas na memória da página. A preferência de idioma pode ser salva no armazenamento local do navegador. A troca de idioma reinicia a conversa; se o armazenamento estiver desativado, o site continua funcionando.

## Estrutura dos arquivos

```text
index.html
README.md
FONTES.md
IMAGENS.md
assets/
  complete.css
  course-interactions.js
  full-moon.png
  human-centered-nursing.png
  pgenf-logo.jpg
  ufrn-brasao.png
```

O `index.html` contém o conteúdo completo pré-renderizado, os estilos-base, as traduções e os comportamentos originais. O arquivo `complete.css` acrescenta o visual revisado; `course-interactions.js` amplia o assistente. Não há compilação ou instalação necessária para usar este pacote.

## Executar localmente

Extraia o ZIP e abra `index.html` em um navegador moderno. Mantenha a pasta `assets` ao lado do HTML. O conteúdo, os estilos, as imagens, o assistente e a tradução não dependem de conexão à internet.

Se preferir, execute um servidor na pasta do projeto:

```bash
python -m http.server 8000
```

Acesse `http://localhost:8000`.

## Publicar no GitHub Pages

1. Copie o conteúdo desta pasta para a raiz do seu repositório, preservando `assets`.
2. Faça o commit e o envio ao GitHub.
3. Em **Settings > Pages**, selecione publicação por branch, escolha a branch desejada e a pasta raiz.
4. Aguarde a disponibilização do endereço pelo GitHub.

Este pacote foi entregue **sem nova publicação e sem commit ou push automáticos**.

## Imagens e atribuição

Os logos foram fornecidos para identificação acadêmica e pertencem às respectivas instituições. Não representam endosso institucional da página.

As duas ilustrações foram produzidas com geração de imagens por IA; não são fotografias de pessoas reais, material clínico ou imagem astronômica científica. Os prompts e a finalidade de cada imagem constam em [IMAGENS.md](IMAGENS.md).

Os PDFs não foram redistribuídos no pacote. Os direitos das obras citadas e dos logos permanecem com seus titulares. Não se presume uma licença aberta para esses materiais.

## Verificação

Foram verificados sintaxe JavaScript, arquivos referenciados, âncoras internas, ausência de IDs duplicados, cobertura de tradução e respostas temáticas do assistente, incluindo o funcionamento com armazenamento local desativado. Os testes de interação usaram uma simulação do DOM; não substituem uma inspeção visual em navegador. Recomenda-se conferir a apresentação no computador e no celular antes da publicação.
