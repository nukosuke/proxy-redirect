'use strict';

module.exports = class URL {
  constructor() {
    this.regex = require('./url_validator');
    this.redis = require('redis').createClient();
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
    return this.regex.test(url);
  }
};
