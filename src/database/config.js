export default {
  development: {
    username: 'postgres',
    password: '12345',
    database: 'academico_psi',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: 'expresos_admin',
    password: '@000000',
    database: 'expresos_circular',
    host: '127.0.0.1',
    dialect: 'mysql'
  }
}
