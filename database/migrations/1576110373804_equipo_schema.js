'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EquipoSchema extends Schema {
  up () {
    this.create('equipos', (table) => {
      table.increments()
      table.integer('actv_id').unsigned().references('id').inTable('actividades')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('objeto', 200).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('equipos')
  }
}

module.exports = EquipoSchema
