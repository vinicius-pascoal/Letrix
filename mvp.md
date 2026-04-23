````md
# Letrix — MVP

## 1. Visão geral

**Letrix** é um jogo de palavras inspirado no estilo do Termo, mas com uma mecânica própria: antes de começar a rodada, o jogador recebe um **anagrama** da palavra secreta e precisa descobrir a ordem correta das letras.

A proposta do MVP é validar uma experiência simples, rápida e viciante, com foco em:
- partidas curtas;
- interface limpa;
- palavras comuns da língua portuguesa;
- modos de jogo reutilizáveis.

---

## 2. Proposta do produto

O jogador recebe:
- um **anagrama** da palavra secreta;
- um limite de tentativas;
- feedback visual a cada chute.

Diferente do Termo tradicional, no Letrix o jogador já conhece as letras da resposta, mas precisa encontrar a **ordem correta**.

---

## 3. Objetivo do MVP

Entregar uma primeira versão jogável que permita:

- iniciar partidas rapidamente;
- jogar nos modos **diário**, **aleatório** e **infinito**;
- validar palavras com base em uma lista local;
- gerar anagramas automaticamente;
- exibir feedback visual por posição;
- registrar vitória ou derrota ao final de cada rodada.

---

## 4. Regras do jogo

### 4.1 Estrutura da rodada
- cada rodada possui **1 palavra secreta**;
- a palavra terá **5 letras** na V1;
- antes do primeiro chute, o jogador verá um **anagrama** dessa palavra;
- o jogador terá **6 tentativas** para acertar.

### 4.2 Restrições da palavra
A base de palavras do MVP deve seguir estas regras:
- sem acentos;
- sem cedilha;
- sem hífen;
- sem espaços;
- sem nomes próprios;
- sem palavras excessivamente obscuras;
- preferencialmente palavras comuns e reconhecíveis.

### 4.3 Validação do chute
Um chute só será aceito se:
- tiver exatamente 5 letras;
- existir na base válida do jogo;
- usar exatamente as mesmas letras do anagrama.

### 4.4 Feedback
Após cada tentativa, o sistema deve informar:
- letra na posição correta;
- letra existente, mas em posição incorreta.

Como o jogador já conhece o conjunto de letras, o foco do feedback é a **ordem**.

### 4.5 Fim da rodada
A rodada termina quando:
- o jogador acerta a palavra; ou
- o jogador usa todas as 6 tentativas.

---

## 5. Modos de jogo

## 5.1 Diário
- todos os jogadores recebem a mesma palavra no dia;
- a palavra muda diariamente;
- ideal para retenção e compartilhamento.

## 5.2 Aleatório
- a palavra é sorteada ao iniciar uma partida;
- ideal para partidas rápidas e casuais.

## 5.3 Infinito
- após terminar uma rodada, outra começa em seguida;
- ideal para sessões longas.

---

## 6. Diferenciais do Letrix

- mecânica baseada em **anagrama**;
- desafio de reorganização de letras;
- experiência familiar para quem conhece Termo, mas com identidade própria;
- fácil de jogar em dispositivos móveis e desktop;
- boa base para expansão futura com ranking, desafios e temas.

---

## 7. Público-alvo

- jogadores casuais que gostam de jogos de palavras;
- usuários que já conhecem Termo/Wordle;
- pessoas que gostam de desafios rápidos de raciocínio verbal;
- público mobile/web que busca partidas curtas.

---

## 8. Escopo do MVP

## Incluído no MVP
- tela inicial;
- seleção de modo;
- geração de rodada;
- exibição do anagrama;
- grade de tentativas;
- teclado virtual;
- feedback visual das tentativas;
- validação de chute;
- tela de vitória/derrota;
- reinício de partida;
- base local de palavras.

## Fora do MVP
- login;
- ranking online;
- compartilhamento de resultado;
- estatísticas avançadas;
- sons e animações complexas;
- suporte a múltiplos tamanhos de palavra;
- categorias temáticas;
- multiplayer.

---

## 9. Fluxo do usuário

## 9.1 Fluxo principal
1. usuário acessa a tela inicial;
2. escolhe um modo de jogo;
3. sistema carrega a palavra da rodada;
4. sistema gera e exibe o anagrama;
5. jogador digita um chute;
6. sistema valida a palavra;
7. sistema exibe feedback;
8. jogador continua até vencer ou perder;
9. sistema mostra resultado final;
10. jogador inicia nova rodada ou volta ao menu.

---

## 10. Telas do MVP

## 10.1 Tela inicial
### Objetivo
Apresentar o jogo e permitir o início da partida.

### Elementos
- logo/nome Letrix;
- botão "Jogar Diário";
- botão "Jogar Aleatório";
- botão "Modo Infinito";
- botão opcional "Como jogar".

---

## 10.2 Tela de jogo
### Objetivo
Permitir a interação principal da rodada.

### Elementos
- modo atual;
- anagrama em destaque;
- contador de tentativas;
- grade com 6 linhas;
- teclado virtual;
- mensagens de erro e validação.

### Exemplo de exibição
Anagrama: `MRETO`

Tentativas:
- _ _ _ _ _
- _ _ _ _ _
- _ _ _ _ _
- _ _ _ _ _
- _ _ _ _ _
- _ _ _ _ _

---

## 10.3 Modal ou seção "Como jogar"
### Conteúdo
- explicar que o jogador recebe um anagrama;
- explicar que precisa descobrir a ordem correta;
- explicar cores/feedback;
- informar limite de tentativas.

---

## 10.4 Tela de resultado
### Em caso de vitória
- mensagem de sucesso;
- palavra correta;
- quantidade de tentativas usadas;
- botão para próxima partida.

### Em caso de derrota
- mensagem de fim de jogo;
- palavra correta;
- botão para tentar novamente.

---

## 11. Requisitos funcionais

### RF01
O sistema deve permitir iniciar partidas nos modos diário, aleatório e infinito.

### RF02
O sistema deve selecionar uma palavra válida da base local.

### RF03
O sistema deve gerar um anagrama diferente da palavra original.

### RF04
O sistema deve exibir o anagrama ao jogador no início da rodada.

### RF05
O sistema deve aceitar tentativas de 5 letras.

### RF06
O sistema deve validar se a tentativa existe na base do jogo.

### RF07
O sistema deve validar se a tentativa usa exatamente as letras do anagrama.

### RF08
O sistema deve retornar feedback visual por posição.

### RF09
O sistema deve encerrar a rodada ao acertar a palavra ou atingir o limite de tentativas.

### RF10
O sistema deve permitir iniciar nova partida ao final da rodada.

---

## 12. Requisitos não funcionais

### RNF01
O jogo deve carregar rapidamente.

### RNF02
A interface deve funcionar bem em desktop e mobile.

### RNF03
As regras devem ser simples de entender em poucos segundos.

### RNF04
A validação de palavras deve ser previsível e consistente.

### RNF05
A arquitetura deve permitir expansão futura.

---

## 13. Stack sugerida

## Frontend
- Next.js
- TypeScript
- Tailwind CSS

## Backend
Opção simples para MVP:
- API Routes do Next.js

## Dados
- arquivo local `.json` com a base de palavras

---

## 14. Estrutura inicial do projeto

```txt
letrix/
├─ public/
│  ├─ icons/
│  └─ images/
├─ src/
│  ├─ app/
│  │  ├─ page.tsx
│  │  ├─ daily/page.tsx
│  │  ├─ random/page.tsx
│  │  └─ infinite/page.tsx
│  ├─ components/
│  │  ├─ GameBoard.tsx
│  │  ├─ Keyboard.tsx
│  │  ├─ AnagramHint.tsx
│  │  ├─ ResultModal.tsx
│  │  └─ Header.tsx
│  ├─ lib/
│  │  ├─ words.ts
│  │  ├─ anagram.ts
│  │  ├─ validateGuess.ts
│  │  ├─ feedback.ts
│  │  └─ dailySeed.ts
│  ├─ data/
│  │  ├─ answer-words.json
│  │  └─ valid-words.json
│  └─ types/
│     └─ game.ts
├─ package.json
└─ README.md
````

---

## 15. Estrutura de dados

## 15.1 Palavra de resposta

```json
{
  "word": "termo",
  "length": 5,
  "difficulty": "easy"
}
```

## 15.2 Estado da rodada

```json
{
  "mode": "daily",
  "word": "termo",
  "anagram": "mreto",
  "attempts": [],
  "maxAttempts": 6,
  "status": "playing"
}
```

---

## 16. Regras técnicas de geração do anagrama

Para gerar um anagrama válido:

1. embaralhar as letras da palavra;
2. verificar se o resultado é diferente da palavra original;
3. repetir se ficar igual;
4. retornar o novo valor.

### Exemplo

* palavra: `termo`
* anagrama válido: `mreto`

---

## 17. Lógica de validação

## 17.1 Validação do chute

O chute deve:

* possuir 5 caracteres;
* existir na lista de palavras válidas;
* conter exatamente as mesmas letras da palavra da rodada.

## 17.2 Exemplo

Palavra secreta: `termo`
Anagrama exibido: `mreto`

Chutes aceitos:

* `termo`
* `metro` só se existir na base e usar as mesmas letras

Chutes rejeitados:

* `teste` -> letras diferentes
* `amor` -> tamanho inválido
* `xxxxx` -> não existe na base

---

## 18. Feedback visual sugerido

### Estados possíveis por letra

* `correct` -> letra correta na posição correta
* `present` -> letra existe, mas está em posição errada
* `absent` -> opcional, mas no conceito do Letrix tende a ocorrer menos, pois o chute deve usar as mesmas letras

### Observação

Como o jogo restringe o chute às letras do anagrama, o estado mais importante é:

* correta;
* fora de posição.

---

## 19. API do MVP

## 19.1 Iniciar jogo

### Endpoint

`GET /api/game?mode=daily`

### Resposta

```json
{
  "mode": "daily",
  "anagram": "mreto",
  "length": 5,
  "maxAttempts": 6
}
```

---

## 19.2 Validar chute

### Endpoint

`POST /api/guess`

### Body

```json
{
  "mode": "daily",
  "guess": "termo"
}
```

### Resposta

```json
{
  "valid": true,
  "correct": true,
  "feedback": ["correct", "correct", "correct", "correct", "correct"],
  "remainingAttempts": 5,
  "status": "won"
}
```

---

## 20. Critérios de aceite do MVP

O MVP será considerado pronto quando:

* o jogador conseguir iniciar os 3 modos;
* o sistema conseguir gerar uma palavra e um anagrama válidos;
* o jogo aceitar e validar tentativas;
* o feedback visual funcionar corretamente;
* a rodada puder terminar com vitória ou derrota;
* o fluxo funcionar em desktop e mobile;
* a base local de palavras estiver integrada.

---

## 21. Futuras evoluções

* suporte a palavras de 6 e 7 letras;
* estatísticas por jogador;
* compartilhamento de resultado;
* ranking diário;
* temas de palavras;
* sistema de dicas;
* animações;
* efeitos sonoros;
* modo competitivo;
* login e perfil.

---

## 22. Resumo final

**Letrix** é um jogo web de palavras onde o jogador recebe um anagrama e deve descobrir a palavra correta em poucas tentativas.

O MVP será focado em:

* palavras comuns de 5 letras;
* base local sem acentos;
* experiência simples e rápida;
* modos diário, aleatório e infinito;
* interface leve e responsiva.

A proposta é validar primeiro a mecânica principal com uma implementação enxuta, mas já preparada para expansão futura.

```

Se quiser, no próximo passo eu posso transformar esse MVP em uma versão mais **profissional e enxuta**, pronta para colocar direto no `README.md` do projeto.
```
