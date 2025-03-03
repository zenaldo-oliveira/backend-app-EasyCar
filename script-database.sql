CREATE TABLE users (
    user_id  INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    name     VARCHAR(50),
    phone    VARCHAR(100),
    email    VARCHAR(100) UNIQUE,
    password VARCHAR(100)
);

CREATE TABLE rides (
    ride_id          INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    passenger_user_id INTEGER NOT NULL,
    pickup_address   VARCHAR(100),
    pickup_date      DATETIME,
    pickup_latitude  DECIMAL(10,6),
    pickup_longitude DECIMAL(10,6),
    dropoff_address  VARCHAR(100),
    status          CHAR(1) CHECK (status IN ('P', 'A', 'F')),
    driver_user_id   INTEGER,

    FOREIGN KEY (passenger_user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (driver_user_id) REFERENCES users(user_id) ON DELETE SET NULL
);

-- Índices para melhorar a performance nas consultas
CREATE INDEX idx_passenger ON rides (passenger_user_id);
CREATE INDEX idx_driver ON rides (driver_user_id);


