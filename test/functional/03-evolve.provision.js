'use strict';

var assert  = require('assert');
var exec    = require('child_process').exec;

describe('cap production evolve:provision', function(done) {
  it('should not fail', function(done) {
    this.timeout(1000 * 1000);

    exec('bundle exec cap production evolve:provision', {
      cwd: process.cwd() + '/temp'
    }, function(err, stdout, stderr) {
      assert.ifError(err);
      done();
    });
  });
});
