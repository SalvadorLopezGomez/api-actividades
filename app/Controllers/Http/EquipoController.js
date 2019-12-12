'use strict'

const Equipo = use('App/Models/Equipo')
const Actividade = use('App/Models/Actividade')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class EquipoController {
  /**Get All Equipos*/
  async index ({ response }) {
    const equipos =  await Equipo.all()
    return response.json({ equipos });
  }

  /**Create Equipo*/
  async create ({ request }) {
    const { actv_id, user_id, objeto } = request.all();
    const equipo = Equipo.create({
      actv_id, 
      user_id, 
      objeto
    })
    return equipo;
  }

  /**Get Equipo*/
  async show ({ params }) {
    const equipos = Equipo.find(params.id);
    return equipos;
  }

  /**Update Equipo*/
  async update ({ params, request }) {
    const { objeto } = request.all();
    const equipo = await Equipo.find(params.id);
    equipo.objeto = objeto;
    await equipo.save();
    return equipo;
    
  }

  /**Delete Equipo*/
  async destroy ({ params, response }) {
    const equipos = await Equipo.find(params.id)
    await equipos.delete()
    return response.json({equipos, message: 'Equipo deleted!'})
  }
}

module.exports = EquipoController
