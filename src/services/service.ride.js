import repositoryRide from "../repositories/repository.ride.js";

async function List(
  passenger_user_id,
  pickap_date,
  ride_id,
  driver_user_id,
  status
) {
  const rides = await repositoryRide.List(
    passenger_user_id,
    pickap_date,
    ride_id,
    driver_user_id,
    status
  );
  return rides;
}
async function Insert(
  passenger_user_id,
  pickap_address,
  pickap_latitude,
  pickap_longitude,
  dropoff_address
) {
  const rides = await repositoryRide.Insert(
    passenger_user_id,
    pickap_address,
    pickap_latitude,
    pickap_longitude,
    dropoff_address
  );
  return rides;
}

export default { List, Insert };
