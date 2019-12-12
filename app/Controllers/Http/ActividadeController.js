'use strict'
const Actividade = use('App/Models/Actividade')
const User = use('App/Models/User');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class ActividadeController {
  /**Get All Activities*/
  async index ({ response }) {
    const activity =  await Actividade.all()
    return response.json({ activity });
  }

  /**Create Activity*/
  async create ({ request }) {
    const { user_id, actividad, fecha, hora } = request.all();
    const act = Actividade.create({
      user_id, 
      actividad, 
      fecha, 
      hora
    })
    return act;
  }

  /**Get Activity*/
  async show ({ params }) {
    const activity = Actividade.find(params.id);
    return activity;
  }

  /**Update activity*/
  async update ({ params, request }) {
    const { actividad, fecha, hora } = request.all();
    const activity = await Actividade.find(params.id);

    activity.actividad = actividad;
    activity.fecha = fecha;
    activity.hora = hora;
    await activity.save();

    return activity;
  }

  /**Delete Activity*/
  async destroy ({ params, response }) {
    const activity = await Actividade.find(params.id)
    await activity.delete()
    return response.json({activity, message: 'Activity deleted!'})
  }
}

module.exports = ActividadeController
