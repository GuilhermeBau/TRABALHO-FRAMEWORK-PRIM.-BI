# GestorMultasCTB 

Repositório referente à Parte 2 (Prática) do trabalho de Frameworks de Desenvolvimento de Software. O objetivo aqui é aplicar na prática os conceitos de criação de frameworks, focando em reutilização e organização de código.

## Equipe
- João Felipe da Costa – R.A 60002975
- Gabriel Francisco Gelde – R.A 60000307
- Guilherme Bau da Silva – R.A 60001565

---

## O problema que resolvemos
A ideia do projeto surgiu de um cenário real da Ghelere Transportes. Notamos que desenvolver sistemas de gestão de frota exige programar repetidas vezes as mesmas regras do Código de Trânsito Brasileiro (CTB) — como somar valores de multas e calcular o risco de suspensão da CNH baseado na gravidade. 

O nosso miniframework centraliza toda essa regra de negócio em um lugar só, evitando repetição de código.

## O que o framework faz (Funcionalidades)
O código principal foi feito em JavaScript puro (Node.js) e exporta 3 métodos principais:

1. **`calcularCustoTotal(multas)`**: Recebe uma lista de infrações e devolve o valor total a ser pago.
2. **`verificarRiscoSuspensao(pontosAtuais, qtdGravissimas)`**: Aplica a regra atual do CTB (limites de 20, 30 ou 40 pontos) para avisar se a CNH corre risco de suspensão.
3. **`formatarMoeda(valor)`**: Utilitário para formatar o valor final para o padrão de moeda brasileiro (R$).

## Como rodar e testar
O framework (`GestorMultasCTB.js`) é independente e pode ser usado em qualquer projeto JS. Para o trabalho, criamos uma telinha em React para demonstrar o uso na prática.

**Exemplo prático de como importar no seu código:**
```javascript
import GestorMultasCTB from './GestorMultasCTB.js';

const gestorDeMultas = new GestorMultasCTB();
