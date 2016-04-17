'use strict';
var URL = require('./url_model');

module.exports = class URLController {
  constructor() {
    this.model = new URL();
  }

  get(req, res) {
    this.model.find(req.params['id'], (err, url) => {
      if(err) {
        return res.status(404).send('Not Found');
      }
      return res.redirect(301, url);
    });
  }
}
