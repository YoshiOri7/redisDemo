const Promise = require('bluebird');
const redis = Promise.promisifyAll(require('redis'));

// connect to Redis server
const client = redis.createClient();
client.on('connect', function() {
  console.log('connected');
});

// ==============================================
// store and get key value pairs
client.set('key1', 'value1', function(err, reply) {
  console.log(reply, ' saved to redis');
});
client.exists('key1', function(err, reply) {
  console.log( reply === 1 ? 'exists' : 'does not exist' );
});
client.get('key1', function(err, reply) {
  console.log(reply, ' received from redis');
});

// ==============================================
// store and get key values pairs using promise
client.setAsync('key2', 'value2')
.then(function(reply) {
  console.log(reply, ' saved to redis');
  return client.existsAsync('key2');
})
.then(function(reply) {
  console.log( reply === 1 ? 'exists' : 'does not exist' );
  return client.getAsync('key1');
})
.then(function(reply) {
  console.log(reply, ' received from redis');
})
.catch(function(err) {
  console.log('error: ', err)
});

// ==============================================
// use setTimeout because of asynch op with promise above
setTimeout(client.quit.bind(client), 2000);


