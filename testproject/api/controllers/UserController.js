/**
 * UserController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    
  
  /**
   * Action blueprints:
   *    `/user/login`
   */
   login: function (req, res) {

        username=req.body.username;
        password=req.body.password;
        User.findOne({
            name:username,
            pass:password
        }).done(function(error,user){
                    if(error){
                        return console.log("redirect to fail");
                    }else{
                            if(user){
                                // console.log(user.name);
                                 res.redirect("/dictionary?accessToken="+user.accesstoken);
                            }else
                            {
                                console.log("User not found:");
                            }
                    }
                });
  },

  /**
   * Action blueprints:
   *    `/user/signup`
   */
   signup: function (req, res) {
    
    // Send a JSON response
    username=req.body.username;
	password=req.body.password;
    var d=new Date();
    var seconds= d.getSeconds();
    var minute = d.getMinutes();
    var houre = d.getHours();
    var day = d.getDay();
    var date= d.getDate();
    var year= d.getFullYear();
    var randomNum=sails.models.ultils.getRandomString(32);
    dateString=seconds+':'+minute+':'+houre+' '+day+'/'+date+'/'+year;
	User.create({
		  name: username,
		  pass: password,
          accesstoken:randomNum,
          createdAt:dateString,
          updatedAt:dateString
		}).done(function(err, user) {

		  // Error handling
		  if (err) {
			return console.log("error");

		  // The User was created successfully!
		  }else {
			res.redirect('dictionnary?accessToken='+randomNum);
		  }
		});
  },
  test: function(req,res){
	    sails.models.ultils.display();
  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to UserController)
   */
  _config: {}

 
};
