                 <--Rotas - Projeto EasyCar-->

[] Consultar se existe corrida pedente (hoje) para o usuario logado
GET -> /rides
filtros: passenger_user_id, pickap_date, ride_id driver_user_id, status

[] Cadastrar novas carona
POST -> /rides

[] Cancelar um pedido de carona (excluir o pedido )
DELETE -> /rides/123

[ ] Finalizar uma carona que foi concluida
PUT -> /rides/123/finish
Body: passenger_user_id

[ ] Consultar as corridas para o motorista (corrida dele + corridas pendentes sem motorista)
GET -> /rides/drivers/id motorista

[ ] Consultar todos os dados de uma determinada corrida
GET -> /rides/123

[ ] Motorista aceitar uma carona
PUT -> /rides/123/accep
Body: drive_user_id

[ ] Motorista cancela uma carona
PUT -> /rides/123/cancel

## Busines Rules (Regras de Negocio)

[ ] O usuario do pode pedir uma carona por vez

[ ] O Motorista só pode aceitar uma carona por vez
