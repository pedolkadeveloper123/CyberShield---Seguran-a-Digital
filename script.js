// Função para gerar status de segurança aleatório
function generateSecurityStatus() {
  const statuses = ['Sistema seguro', 'Ameaças detectadas', 'Firewall ativo', 'Proteção em risco'];
  return statuses[Math.floor(Math.random() * statuses.length)];
}

// Função para atualizar o status de segurança
function updateSecurityStatus() {
  const securityStatusElement = document.getElementById('securityStatus');
  const status = generateSecurityStatus();
  securityStatusElement.textContent = status;

  if (status === 'Sistema seguro') {
    securityStatusElement.style.color = '#2f8555'; // Verde
  } else if (status === 'Ameaças detectadas' || status === 'Proteção em risco') {
    securityStatusElement.style.color = '#e53e3e'; // Vermelho
  } else {
    securityStatusElement.style.color = '#f59e0b'; // Laranja
  }
}

// Função para gerar dados para o gráfico
function generateStatisticsData() {
  return {
    labels: ['Segurança', 'Malware', 'Intrusões', 'Atividades suspeitas', 'Ataques'],
    datasets: [{
      label: 'Dados de Segurança',
      data: [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100],
      backgroundColor: ['#38b2ac', '#f56565', '#e53e3e', '#ed8936', '#3182ce'],
      borderColor: '#fff',
      borderWidth: 2
    }]
  };
}

// Função para criar o gráfico
function createChart() {
  const ctx = document.getElementById('statsChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: generateStatisticsData(),
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    });
}

// Atualiza o status de segurança e o gráfico a cada 5 segundos
function updateApp() {
  updateSecurityStatus();
  createChart();
}

// Inicializa o app
document.addEventListener('DOMContentLoaded', function() {
  updateApp();
  setInterval(updateApp, 5000); // Atualiza a cada 5 segundos
});
