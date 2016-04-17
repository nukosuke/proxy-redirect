'use strict';
var redis = require('redis').createClient();

module.exports = class URL {
  constructor() {

  }

  find(id, callback) {
    redis.get(id, callback);
  }

  save(id, url, callback) {
    if(validate(url)) {
      redis.set(key, value, callback);
    }
    else {
      throw Error();
    }
  }


  // url validation
  validate(url) {
    return ;
  }
};
