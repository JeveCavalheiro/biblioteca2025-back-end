import express from "express";
import { Sequelize, DataTypes } from "sequelize";

//configuração da conexão com o banco de dados.
const sequelize = new Sequelize('biblioteca2025', 'postgres', 'JevePostgres', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres', 
    define: {
        timestamps: false,
        freezeTableName: true
    }
  });

//mapeamento da model Editora
const Editora = sequelize.define(
    'editora',
    {
      // Model attributes are defined here
      ideditora: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      nomeeditora: {
        type: DataTypes.STRING(60),
        allowNull: false
      },
      cnpj: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      enreco: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    }
  );

  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados realizada com sucesso.');
  } catch (error) {
    console.error('Erro ao conectar com o banco de dados:', error);
  }

const app = express();
app.use(express.json());

app.get('/teste', (req, res)=>{
    res.send('Teste ok.');
});

app.listen(3000, ()=>{console.log(`Servidor rodando.`) });
