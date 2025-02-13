Função generateSecurityStatus(): Agora gera um status de segurança aleatório entre várias opções, como "Sistema seguro", "Ameaças detectadas", "Firewall ativo", etc.
Função updateSecurityStatus(): Atualiza o status de segurança no HTML e altera a cor de acordo com o status atual (verde para seguro, vermelho para ameaças e risco).
Função generateStatisticsData(): Gera dados aleatórios para o gráfico.
Função createChart(): Cria um gráfico de barras com os dados gerados.
Função updateApp(): Chama as funções de atualização de status e criação do gráfico. A página é atualizada automaticamente a cada 5 segundos.
Como funciona agora:
O status de segurança será atualizado a cada 5 segundos com um valor aleatório.
O gráfico será regenerado a cada 5 segundos, com novos dados simulados.
A cor do status de segurança será alterada conforme o tipo de status.
