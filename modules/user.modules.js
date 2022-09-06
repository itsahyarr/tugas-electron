// Helper database yang dibuat
const mysql = require('../helpers/database');

// Input validation
const Joi = require('joi');

class _user {
//   // List all todos
//   listTodo = async () => {
//     try {
//       const list = await mysql.query(
//         'SELECT * FROM d_todo',
//         []
//       )
//       return {
//         status: true,
//         data: list
//       }
//     } catch (error) {
//       console.error('listTodo todo module error : ', error)
//       return {
//         status: false,
//         error
//       }
//     }
//   }

  // Detail Todo
  // detailTodo = async (id) => {
  //   try {
  //     const schema = Joi.number().required()
  //     const validation = schema.validate(id)
  //     if (validation.error) {
  //       const errorDetails = validation.error.details.map(detail => detail.message)
  //       return {
  //         status: false,
  //         code: 422,
  //         error: errorDetails.join(', ')
  //       }
  //     }
  //     const detailTodo = await mysql.query(
  //       'SELECT id, title, description, created_at, updated_at FROM d_todo WHERE id = ?',
  //       [id]
  //     )
  //     if (detailTodo.length <= 0) {
  //       return {
  //         status: false,
  //         code: 404,
  //         error: 'Sorry, todo not found'
  //       }
  //     }
  //     return {
  //       status: true,
  //       data: detailTodo[0]
  //     }
  //   } catch (error) {
  //     console.error('detailTodo todo module error : ', error)
  //     return {
  //       status: false,
  //       code: 422,
  //       error: errorDetails.join(', ')
  //     }
  //   }
  // }

  // Create User
  addUser = async (body) => {
    try {
      const schema = Joi.object({
        name: Joi.string().required(),
        username: Joi.string().required(),
        password: Joi.string().require()
      })
      const validation = schema.validate(body)

      if (validation.error) {
        const errorDetails = validation.error.details.map(detail => detail.message)
        return {
          status: false,
          code: 422,
          error: errorDetails.join(',')
        }
      }
      const add = await mysql.query(
        'INSERT INTO auth_user (nama_user, username, password)  VALUES (?, ?, ?)', [body.name, body.username, body.password]
      )
      return {
        status: true,
        data: add
      }
    } catch (error) {
      
    }
  }

  // Edit todo
  // editTodo = async (body) => {
  //   try {
  //     const schema = Joi.object({
  //       id: Joi.number().required(),
  //       title: Joi.string(),
  //       description: Joi.string()
  //     })
  //     const validation = schema.validate(body)

  //     if (validation.error) {
  //       const errorDetails = validation.error.details.map(detail => detail.message)
  //       return {
  //         status: false,
  //         code: 422,
  //         error: errorDetails.join(',')
  //       }
  //     }
  //     const edit = await mysql.query(
  //       'UPDATE d_todo SET title = ?, description = ? WHERE id = ?', [body.title, body.description, body.id]
  //     )
  //     return {
  //       status: true,
  //       data: edit
  //     }
  //   } catch (error) {
      
  //   }
  // }
  // // Delete Todo
  // deleteTodo = async (id) => {
  //   try {
  //     const body = { id }
  //     const schema = Joi.object({
  //       id: Joi.number().required()
  //     })
  //     const validation = schema.validate(body)

  //     if (validation.error) {
  //       const errorDetails = validation.error.details.map(detail => detail.message)
  //       return {
  //         status: false,
  //         code: 422,
  //         error: errorDetails.join(',')
  //       }
  //     }
  //     const del = await mysql.query(
  //       'DELETE FROM d_todo WHERE id = ?',
  //       [id]
  //     )
  //     return {
  //       status: true,
  //       data: del
  //     }
  //   } catch (error) {
  //     console.error('deleteTodo todo module error : ', error)
  //     return {
  //       status: false,
  //       error
  //     }
  //   }
  // }
}

module.exports = new _todo();