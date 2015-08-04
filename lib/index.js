
/**
 * Module dependencies.
 */

var integration = require('segmentio-integration');
var mapper = require('./mapper');

/**
 * Expose `Lifecycle`
 */

var Lifecycle = module.exports = integration('Lifecycle')
  .channels(['server', 'mobile'])
  .endpoint('https://api.lifecycle.io')
  .ensure('settings.apiKey')
  .ensure('message.userId')
  .mapper(mapper)
  .retries(2);

/**
 * Track.
 *
 * @apram {Track} track
 * @param {Function} fn
 * @api private
 */

Lifecycle.prototype.track = function(payload, fn){
  return this
    .post('/v1/track')
    .set('lifecycle-api-key', this.settings.apiKey)
    .type('json')
    .send(payload)
    .end(this.handle(fn));
};

/**
 * Identify.
 *
 * @param {Identify} identify
 * @param {Function} fn
 * @api private
 */

Lifecycle.prototype.identify = function(payload, fn){
  return this
    .post('/v1/identify')
    .set('lifecycle-api-key', this.settings.apiKey)
    .type('json')
    .send(payload)
    .end(this.handle(fn));
};

/**
* Group.
*
* @param {Group} group
* @param {Function} fn
* @api private
*/

Lifecycle.prototype.group = function(payload, fn){

  // Lifecycle v1
  return this
    .post('/v1/identify')
    .set('lifecycle-api-key', this.settings.apiKey)
    .type('json')
    .send(payload)
    .end(this.handle(fn));
};

/**
* Alias.
*
* @param {Alias} alias
* @param {Function} fn
* @api private
*/

Lifecycle.prototype.alias = function(payload, fn){

  // Lifecycle v1
  return this
    .post('/v1/identify')
    .set('lifecycle-api-key', this.settings.apiKey)
    .type('json')
    .send(payload)
    .end(this.handle(fn));
};
