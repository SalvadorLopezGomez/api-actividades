'use strict'
const Database = use('Database')
const User = use('App/Models/User');
const Hash = use('Hash')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class UserController {
/**Login*/
  async login ({ request, response, auth }) {
    const {email, password} = request.all();
    const token = await auth.attempt(email, password)
    const user = await User.findByOrFail('email', email)
    if( user ){
      var users = {
        id: user.id,
        name: user.name,
        type: token.type,
        token: token.token
      }
      return response.json({users});
    }
  }
/**Get All Users*/
  async index ({ }) {
    const users =  await Database.select('*').from('users')
    return users;
  }

  /**Register User*/
  async create ({ request }) {
    const { name, email, password, phone} = request.all();
    await User.create({
      name,
      email,
      password,
      phone,
    });
    return this.login(...arguments);
  }

  /**Get User*/
  async show ({ params }) {
    const users = User.find(params.id);
    return users;
  }

  /**Update User*/
  async update ({ params, request }) {
    const { name, email, password, phone} = request.all();
    const users = await User.find(params.id);

    users.name = name;
    users.email = email;
    users.password = password;
    users.phone = phone;
    await users.save();

    return users
  }

  /**Delete User*/
  async destroy ({ params, response }) {
    const users = await User.find(params.id)
    await users.delete()
    return response.json({users, message: 'User deleted!'})
  }
}

module.exports = UserController
