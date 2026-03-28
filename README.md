# 🚦 GestorMultasCTB - Miniframework

Este projeto representa a **Parte 2 (Prática)** da atividade sobre Frameworks de Desenvolvimento de Software. O objetivo é demonstrar a compreensão sobre a criação, utilidade e aplicação de frameworks no desenvolvimento moderno, focando em produtividade, organização e reutilização de código.

## 👥 Equipe Desenvolvedora
- **João Felipe da Costa** – R.A 60002975
- **Gabriel Francisco Gelde** – R.A 60000307
- **Guilherme Bau da Silva** – R.A 60001565

---

## 🎯 Qual problema o miniframework resolve?
Ele foi pensado para resolver um problema real de empresas de logística (inspirado na rotina da Ghelere Transportes). Desenvolvedores perdem muito tempo programando regras complexas e repetitivas sobre pontuação, custos de multas e risco de suspensão de CNH baseadas no Código de Trânsito Brasileiro (CTB). O framework abstrai toda essa matemática e legislação.

## 🚀 Funcionalidades (O que ele faz)
O miniframework foi construído de forma modular em JavaScript (Node.js) e possui 3 funcionalidades principais:
1. **`calcularCustoTotal(multas)`**: Recebe um array de infrações e calcula o valor financeiro total com base na gravidade atualizada da lei.
2. **`verificarRiscoSuspensao(pontosAtuais, qtdGravissimas)`**: Verifica se a CNH corre risco de suspensão aplicando os limites corretos (20, 30 ou 40 pontos).
3. **`formatarMoeda(valor)`**: Padroniza a exibição de valores para o formato Real Brasileiro (R$).

## 💻 Como utilizar na prática
O framework (`GestorMultasCTB.js`) é totalmente independente e pode ser importado em qualquer projeto JS. 

**Exemplo de Importação:**
```javascript
import GestorMultasCTB from './GestorMultasCTB.js';
const gestorDeMultas = new GestorMultasCTB();
