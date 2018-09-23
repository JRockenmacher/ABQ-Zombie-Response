// Update with your config settings.

module.exports = {

  development: {
    client: "pg",
    connection: process.env.DATABASE_URL || 'postgres:///ABQ_Zom_Res'  
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL ||'postgres:///ABQ_Zom_Res'
  }     
}