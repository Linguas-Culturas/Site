# Para-casas no Notion: guia completo

Este documento explica como criar a base, conectá-la ao site e liberar atividades com segurança. A página pública é `para-casa.html`; ela lê somente o arquivo `data/para-casa.json`, gerado automaticamente pelo GitHub Actions.

## Como o fluxo funciona

1. A equipe cadastra todas as atividades no Notion, inclusive as futuras.
2. Uma atividade só é consultada quando a caixa `LIBERADO` está marcada.
3. O GitHub Actions consulta a base uma vez por dia (e também pode ser executado manualmente).
4. O script grava apenas as atividades liberadas em `data/para-casa.json`.
5. O GitHub Pages publica o JSON e a página organiza as atividades nos três trimestres.

> Importante: esconder um card apenas com JavaScript não seria suficiente, pois o aluno poderia encontrar a atividade no código ou no JSON. Aqui, o filtro `LIBERADO = true` é aplicado na consulta ao Notion, antes de o arquivo público ser criado. Portanto, uma atividade desmarcada não vai para o site.

Como o repositório é público, uma atividade que **já foi liberada e depois retirada** pode continuar registrada no histórico do Git. O checkbox é excelente para impedir a publicação antecipada, mas não deve ser tratado como controle de acesso para material sigiloso. Links do Drive também devem usar as permissões de compartilhamento adequadas.

## 1. Criar a base no Notion

Crie uma página nova no Notion e escolha uma **database em tabela**. Dê a ela um nome como `Para-casas — Línguas-Culturas`.

Crie as propriedades abaixo com estes nomes exatos (maiúsculas e sem acentos, como na tabela):

| Propriedade | Tipo no Notion | Como preencher |
| --- | --- | --- |
| `TITULO` | Title | Nome da atividade. Obrigatório. |
| `DESCRICAO` | Text | Explicação curta para o estudante. |
| `URL` | URL | Link do Google Drive, formulário, documento ou site. |
| `ARQUIVO` | Files & media | Alternativa opcional a `URL`. |
| `TRIMESTRE` | Select | Use exatamente `1º Trimestre`, `2º Trimestre` ou `3º Trimestre`. Obrigatório. |
| `IDIOMA` | Select | Ex.: Francês, Espanhol, Mandarim. |
| `TURMA` | Text | Ex.: 106, 1º ano ou todas as turmas. |
| `PRAZO` | Date | Data de entrega, quando houver. |
| `ORDEM` | Number | Ordem dos cards dentro do trimestre: 1, 2, 3... |
| `LIBERADO` | Checkbox | Só marque quando o estudante já puder acessar. |

É permitido deixar `URL` e `ARQUIVO` vazios. Nesse caso, o card aparece com a mensagem “Orientações em sala”. Se os dois forem preenchidos, `URL` tem prioridade.

### Sugestão de visualizações no Notion

- **Planejamento completo:** tabela sem filtro, para os professores.
- **Já liberados:** filtro `LIBERADO` marcado.
- **Por trimestre:** quadro agrupado por `TRIMESTRE`.

Essas visualizações ajudam a equipe, mas não alteram o filtro de segurança feito pelo script.

## 2. Dar acesso à integração existente

Pode ser usada a mesma integração criada para os Destaques. Abra a base dos para-casas no Notion, abra o menu de compartilhamento/conexões e adicione essa integração à página.

Conceda somente as permissões de leitura necessárias. O site não precisa editar o Notion.

## 3. Obter o ID da data source

Com a base aberta como página inteira, copie o link dela. O identificador costuma aparecer no endereço como uma sequência longa de letras e números. Nas versões atuais da API, uma database pode conter uma ou mais *data sources*; o fluxo precisa do **data source ID**, não apenas do database ID.

O caminho mais seguro é verificar o identificador que o Notion mostra ao copiar o link da fonte de dados ou consultar a database pela API. Se o workflow retornar `404` ou disser que a fonte não foi encontrada, confira primeiro:

1. se a integração foi conectada à base;
2. se foi copiado o data source ID correto;
3. se a propriedade foi salva como variável, sem espaços antes ou depois.

Referências oficiais: [Query a data source](https://developers.notion.com/reference/query-a-data-source) e [Database e data source IDs](https://developers.notion.com/docs/working-with-databases).

## 4. Configurar o GitHub

No repositório, acesse **Settings → Secrets and variables → Actions**.

> Ao clonar, transferir ou criar um novo repositório, essas configurações precisam
> ser cadastradas novamente. Secrets e variables pertencem ao repositório no
> GitHub e não são transportados junto com os arquivos do Git.

### Secret já existente

Na aba **Secrets**, confira se existe:

- Nome: `NOTION_TOKEN`
- Valor: token secreto da integração do Notion

Não coloque o token em arquivos do repositório. Secrets ficam protegidos; variáveis comuns não são mascaradas nos logs.

### Nova variável

Na aba **Variables**, clique em **New repository variable** e crie:

- Nome: `NOTION_PARA_CASA_DATA_SOURCE_ID`
- Valor: o data source ID obtido na etapa anterior

Referências oficiais: [criar variáveis no GitHub Actions](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-variables) e [usar secrets no GitHub Actions](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets).

## 5. Fazer o primeiro teste

1. No Notion, crie uma atividade de teste no primeiro trimestre.
2. Preencha `TITULO`, `TRIMESTRE` e `ORDEM`.
3. Deixe `LIBERADO` desmarcado.
4. No GitHub, abra **Actions → Sincronizar para-casas do Notion → Run workflow**.
5. Confirme que a atividade não apareceu em `data/para-casa.json`.
6. Marque `LIBERADO` no Notion e execute o workflow novamente.
7. Confirme que o JSON recebeu a atividade e abra `para-casa.html` pelo GitHub Pages.

O agendamento automático roda diariamente às `05:32 UTC` (aproximadamente `02:32` no horário de Brasília, dependendo do horário legal). Para publicar imediatamente, use sempre **Run workflow**.

## Operação cotidiana

- Para **publicar**, marque `LIBERADO` e rode o workflow (ou aguarde o horário diário).
- Para **retirar**, desmarque `LIBERADO` e rode o workflow novamente.
- Para **reordenar**, altere `ORDEM`.
- Para **mudar de trimestre**, altere `TRIMESTRE`; não é necessário editar HTML.
- Para **criar atividades futuras**, cadastre normalmente e mantenha `LIBERADO` desmarcado.

## Diagnóstico rápido

### O workflow mostra `NOTION_PARA_CASA_DATA_SOURCE_ID não está configurada`

A variável não foi criada no GitHub ou o nome está diferente.

### O workflow mostra `Configuração do Notion ausente`

Abra **Settings → Secrets and variables → Actions** no repositório atual e confira:

- na aba **Secrets**, `NOTION_TOKEN`;
- na aba **Variables**, `NOTION_PARA_CASA_DATA_SOURCE_ID`.

O aviso lista exatamente os campos ausentes sem exibir nenhum valor secreto.

### O Notion responde `object_not_found` ou `404`

Normalmente a integração ainda não está conectada à base ou o ID informado não é o da data source.

### Uma propriedade não foi encontrada

Confira os nomes exatos da tabela deste guia. O script diferencia `TITULO` de `Título`, por exemplo.

### A página funciona no GitHub Pages, mas não ao clicar duas vezes no HTML

O navegador bloqueia a leitura do JSON local quando a página usa `file://`. Use a extensão **Live Server** do VS Code ou outro servidor local.

### Um arquivo do Notion parou de abrir

Arquivos enviados diretamente ao Notion costumam usar URLs temporárias. Como a sincronização diária renova os dados, isso tende a se corrigir; para links mais estáveis, prefira preencher `URL` com um arquivo compartilhado no Drive.
