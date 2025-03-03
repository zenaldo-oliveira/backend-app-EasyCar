import { execute } from "../database/sqlite.js";

// Função para listar as corridas com filtros
async function List(
  passenger_user_id,
  pickup_date,
  ride_id,
  driver_user_id,
  status
) {
  let filtro = [];

  // SQL base
  let sql = `select * from rides where ride_id > 0`;

  // Filtro para passenger_user_id
  if (passenger_user_id) {
    sql = sql + " and passenger_user_id = ?";
    filtro.push(passenger_user_id);
  }

  // Filtro para pickup_date
  if (pickup_date) {
    sql = sql + " and pickup_date = ?";
    filtro.push(pickup_date);
  }

  // Adicionar outros filtros, se necessário
  if (driver_user_id) {
    sql = sql + " and driver_user_id = ?";
    filtro.push(driver_user_id);
  }

  if (status) {
    sql = sql + " and status = ?";
    filtro.push(status);
  }

  try {
    const rides = await execute(sql, filtro);
    return rides;
  } catch (error) {
    console.error("Erro ao buscar as corridas:", error);
    throw new Error("Erro ao buscar as corridas");
  }
}

// Função para inserir uma nova corrida
async function Insert(
  passenger_user_id,
  pickup_address,
  pickup_latitude,
  pickup_longitude,
  dropoff_address
) {
  let sql = `insert into rides(
    passenger_user_id,
    pickup_address,
    pickup_latitude,
    pickup_longitude,
    dropoff_address,
    pickup_date,
    status
  ) values(?,?,?,?,?, CURRENT_DATE, ?) returning ride_id`; // Retorna apenas o ride_id

  try {
    const ride = await execute(sql, [
      passenger_user_id,
      pickup_address,
      pickup_latitude,
      pickup_longitude,
      dropoff_address,
      "pending", // Status 'pending' por padrão
    ]);
    return ride; // Retorna o ride_id inserido
  } catch (error) {
    console.error("Erro ao inserir corrida:", error);
    throw new Error("Erro ao inserir corrida");
  }
}

export default { List, Insert };
