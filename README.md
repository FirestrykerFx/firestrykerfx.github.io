# Central de Scripts

Aplicação estática em `index.html`, compatível com GitHub Pages e uso local. Versão: **3.2.2**. As regras do Firebase continuam sendo candidatas para revisão separada.

## Desenvolvimento e verificação

Requisitos: Node.js 24, npm e Chromium. As tarefas na nuvem já são isoladas; use o checkout existente sem criar worktrees, salvo solicitação explícita.

```sh
npm ci
# Somente se não houver Chromium instalado:
npx playwright install chromium
python3 -m http.server 8001 --bind 127.0.0.1
npm test
npm run check:manifest
```

Os testes iniciam seu próprio servidor HTTP, bloqueiam serviços externos e usam contextos de navegador isolados. Se `/usr/bin/chromium` não existir, usam o navegador do Playwright; `CHROMIUM_PATH` permite escolher outro executável. Testes com backend simulado não validam Firebase real. O workflow de CI está preparado, mas sua execução no GitHub depende de uma futura publicação autorizada.

## Melhorias preparadas

- Idioma da interface independente do idioma dos documentos de OS/Teste Técnico. O padrão dos documentos continua sendo português. Alterar a opção em Conta ou no formulário persiste apenas essa preferência; scripts pessoais não são traduzidos.
- Telefone e dados essenciais obrigatórios por modelo. O Teste Técnico exige contato, relato e resumo. A cópia de questionários para pedir dados ao cliente continua disponível.
- Comparação com adições, alterações, remoções e movimentações por ID de card, com conteúdo anterior e posterior. Confirmações obsoletas são bloqueadas. Releituras remotas e transações protegem contra alterações concorrentes.
- Até três pontos locais de recuperação, conforme o espaço disponível, acessíveis em Conta. Cancelar uma revisão de conflito mantém a sincronização pendente até nova revisão. Snapshots excluem tokens de autenticação e configuração Firebase.
- Backup completo preserva áreas, comportamentos de variáveis, lixeira e preferências. Userscripts restaurados ficam desativados e não confiáveis; o conteúdo é preservado. O limite foi uniformizado em 60 scripts de até 100 KiB cada.
- Rótulos dinâmicos novos usam `APP_UI_MESSAGES` e `data-i18n`. O dicionário antigo permanece como compatibilidade para a interface existente, sem reconstruir o aplicativo.
- Correção dos horários de recorrência e soneca no fuso local.

## Atualizações e segurança

Depois de qualquer mudança no HTML, execute `npm run manifest` para atualizar o hash SHA-256 de `version.json`, e depois `npm run check:manifest`. Os arquivos ainda são locais: o endereço de atualização público só refletirá esta versão após uma publicação autorizada. O hash garante consistência dos bytes com o manifesto; não é uma assinatura independente do autor.

Leia [SECURITY_REVIEW.md](SECURITY_REVIEW.md) antes de considerar as regras candidatas de [firestore.rules](firestore.rules). As regras em produção não foram acessadas nem modificadas. Autorização no servidor, login Google e sincronização real precisam de validação adicional em projeto de testes; nenhuma credencial de produção é necessária para a suíte local.

## Comparação visual — 3.2.1

A revisão mostra cards lado a lado no computador e empilhados no celular, com área, aba, coluna e ícones para favoritos, tags, cópias e alarmes. Clientes e alarmes têm seleção individual; preferências mostram nomes e valores legíveis, sem JSON ou IDs internos.

Cards novos/alterados começam selecionados; exclusões e preferências exigem seleção explícita. Use a busca, “Selecionar exibidos”, “Limpar seleção” ou “Manter versão atual”. A estrutura mínima necessária acompanha os cards escolhidos; desmarcar uma exclusão preserva o card e impede a remoção da aba/área que o contém.

Nos envios manuais à nuvem, a seleção define a versão comum a este dispositivo e à nuvem; a versão local anterior recebe um ponto de recuperação. Nos recebimentos, alterações desmarcadas mantêm a versão local. As verificações de versão e recuperação continuam ativas. Os testes de nuvem usam um backend simulado; as regras reais do Firebase não são alteradas pela publicação do HTML.

Contadores de cópias não geram diferenças de conteúdo: sincronização usa o maior valor local/remoto, inclusive em seleções parciais.
