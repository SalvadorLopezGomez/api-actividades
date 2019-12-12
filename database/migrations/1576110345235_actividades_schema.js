'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ActividadesSchema extends Schema {
  up () {
    this.create('actividades', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('actividad', 150).notNullable()
      table.date('fecha', 50).notNullable()
      table.time('hora').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('actividades')
  }
}

module.exports = ActividadesSchema
