                       --> Rotas - Projeto EasyCa <--  Projeto em estatus de construção

[x] Consultar se existe corrida pedente (hoje) para o usuario logado
GET -> /rides
filtros: passenger_user_id, pickap_date, ride_id, driver_user_id, status

[x] Cadastrar novas carona
POST -> /rides

[x] Cancelar um pedido de carona (excluir o pedido )
DELETE -> /rides/123

[x] Finalizar uma carona que foi concluida
PUT -> /rides/123/finish
Body: passenger_user_id

[x] Consultar as corridas para o motorista (corrida dele + corridas pendentes sem motorista)
GET -> /rides/drivers/id motorista

[x] Consultar todos os dados de uma determinada corrida
GET -> /rides/123

[x] Motorista aceitar uma carona
PUT -> /rides/123/accep
Body: drive_user_id

[x] Motorista cancela uma carona
PUT -> /rides/123/cancel

## Busines Rules (Regras de Negocio)

[ ] O usuario do pode pedir uma carona por vez

[ ] O Motorista só pode aceitar uma carona por vez
