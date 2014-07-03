// api/models/User.js
module.exports = {

  adapter: 'mysql',

  config: {
    user: 'root',
    password: '',
    database: 'nodejs',
    host: '127.0.0.1'
  },

  attributes: {
    name: 'string',
    pass: 'string',
    accesstoken: 'string'
  },
	display:function(){
		console.log("model");
	}
};