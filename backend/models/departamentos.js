import { Sequelize } from "sequelize";
import db from '../config/db.js';
import cargo from './cargo.js'

const Departamento = db.define('Departamentos',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    area:{
        type:Sequelize.STRING,
        allowNull:false
    },
    head:{
        type:Sequelize.STRING,
        allowNull:true
    }
})

Departamento.belongsTo(cargo,{foreignKey:'cargo_id'})

export default Departamento