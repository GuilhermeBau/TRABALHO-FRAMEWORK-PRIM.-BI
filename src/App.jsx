import { useState } from 'react';
// Importando o nosso miniframework com o nome novo!
import GestorMultasCTB from './ctb-manager/GestorMultasCTB';

function App() {
  // Inicializando o framework
  const gestorDeMultas = new GestorMultasCTB();

  // Simulando os dados de um motorista da Ghelere Transportes
  const multasMotorista = [
    { id: 1, descricao: "Excesso de velocidade (até 20%)", gravidade: "Media", pontos: 4 },
    { id: 2, descricao: "Avançar sinal vermelho", gravidade: "Gravissima", pontos: 7 }
  ];

  const pontosTotais = 11;
  const qtdGravissimas = 1;

  // USANDO AS FUNCIONALIDADES DO FRAMEWORK:
  const custoTotal = gestorDeMultas.calcularCustoTotal(multasMotorista);
  const valorFormatado = gestorDeMultas.formatarMoeda(custoTotal);
  const analiseCNH = gestorDeMultas.verificarRiscoSuspensao(pontosTotais, qtdGravissimas);

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ color: '#003366' }}>Painel de Frota - Ghelere Transportes</h1>
      
      <h3>Resumo de Infrações do Motorista</h3>
      <ul style={{ background: '#f4f4f4', padding: '20px', borderRadius: '8px' }}>
        {multasMotorista.map(multa => (
          <li key={multa.id} style={{ marginBottom: '10px' }}>
            {multa.descricao} - <strong>{multa.gravidade}</strong> ({multa.pontos} pts)
          </li>
        ))}
      </ul>

      <h3>Análise Automática do Miniframework:</h3>
      <p style={{ fontSize: '18px' }}><strong>Custo Total das Multas:</strong> {valorFormatado}</p>
      
      <div style={{ 
        padding: '15px', 
        borderRadius: '8px', 
        backgroundColor: analiseCNH.risco ? '#ffcccc' : '#d4edda',
        color: analiseCNH.risco ? '#900' : '#060',
        border: `1px solid ${analiseCNH.risco ? '#f5c6cb' : '#c3e6cb'}`
      }}>
        <p style={{ margin: '0 0 10px 0' }}><strong>Status da CNH:</strong> {analiseCNH.mensagem}</p>
        <p style={{ margin: '0' }}>Pontos acumulados: {analiseCNH.pontosAtuais} / Limite permitido: {analiseCNH.limitePermitido}</p>
      </div>
    </div>
  );
}

export default App;