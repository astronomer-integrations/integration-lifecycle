
/**
 * Module dependencies.
 */

var integration = require('segmentio-integration');
var mapper = require('./mapper');

/**
 * Expose `Venn`
 */

var Venn = module.exports = integration('Venn')
  .channels(['server', 'mobile'])
  .endpoint('https://api.getvenn.io')
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

Venn.prototype.track = function(payload, fn){
  return this
    .post('/v1/track')
    .set('venn-api-key', this.settings.apiKey)
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

Venn.prototype.identify = function(payload, fn){
  return this
    .post('/v1/identify')
    .set('venn-api-key', this.settings.apiKey)
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

Venn.prototype.group = function(payload, fn){

  // Venn v1
  return this
    .post('/v1/identify')
    .set('venn-api-key', this.settings.apiKey)
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

Venn.prototype.alias = function(payload, fn){

  // Venn v1
  return this
    .post('/v1/identify')
    .set('venn-api-key', this.settings.apiKey)
    .type('json')
    .send(payload)
    .end(this.handle(fn));
};
