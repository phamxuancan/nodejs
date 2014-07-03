/**
 * FileController
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
   *    `/file/upload`
   */
   upload: function (req, res) {
      var fs = require('fs');
      fs.readFile(req.files.file.path, function (err, data) {
      var nameimage = req.files.file.name;
          if(!nameimage){
              console.log("there are error");
              res.redirect("/");
              res.end();
          }
            else {
             var  newpath="C:/sailsframework/testproject/upload/"+nameimage;
              fs.writeFile(newpath, data, function (err) {

                  console.log(newpath);

              });
          }
      });
  },




  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to FileController)
   */
  _config: {}

  
};
