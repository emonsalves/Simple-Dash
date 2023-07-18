import SequelizeAuto from "sequelize-auto";
import Sequelize from 'sequelize';

export const test = async () => {
     const sequelizeD = new Sequelize("WMSTEK_KAYSER", "wms", "pjc3l1", {
        host: "192.168.0.17",
        dialect: "mssql",
        logging: false,
        timezone: "-04:00", // Ajusta el horario a Chile
      });
      
      const auto = new SequelizeAuto("WMSTEK_KAYSER", "wms", "pjc3l1", {
        dialect: "mssql",
        logging: false,
        timezone: "-04:00", // Ajusta el horario a Chile
        directory: "./modelsWMS",
        sequelize: sequelizeD,
      });
      
      auto.run(function (err) {
        if (err) throw err;
        console.log(auto.tables); // Lista de tablas encontradas en la base de datos
        console.log(auto.foreignKeys); // Lista de claves foráneas encontradas en la base de datos
        console.log("Modelos generados correctamente");
      });
}

