var Estimate = require('./estimates');
module.exports = function(Request) {


  Request.remoteMethod(
    'request',
    {
      http: {path: '/', verb: 'post'},
      accepts: [
        {arg: 'product_id', type: 'string'},
        {arg: 'start_latitude', type: 'number'},
        {arg: 'start_longitude', type: 'number'},
        {arg: 'start_nickname', type: 'string'},
        {arg: 'start_address', type: 'string'},
        {arg: 'start_place_id', type: 'string'},
        {arg: 'end_latitude ', type: 'number'},
        {arg: 'end_longitude', type: 'number'},
        {arg: 'end_nickname ', type: 'string'},
        {arg: 'end_address ', type: 'string'},
        {arg: 'end_place_id ', type: 'string'},
        {arg: 'surge_confirmation_id', type: 'string'},
        {arg: 'payment_method_id ', type: 'string'}
      ],
      returns: [
        {arg: 'request_id', type: 'string'},
        {arg: 'status', type: 'string'},
        {arg: 'vehicle_details', type: 'object'},// send JSON in string fromat and convert it to JSON in app
        {arg: 'driver_details', type: 'object'},
        {arg: 'location', type: 'object'},
        {arg: 'eta', type: 'number'},
        {arg: 'surge_multiplier', type: 'number'}
      ]
    }
  );
  Request.remoteMethod(
    'current',
    {
      http: {path: '/current', verb: 'get'},
      returns: [
        {arg: 'request_id', type: 'string'},
        {arg: 'status', type: 'string'},
        {arg: 'location', type: 'object'},
        {arg: 'pickup', type: 'object'},
        {arg: 'destination', type: 'object'},
        {arg: 'driver_details', type: 'object'},
        {arg: 'vehicle_details', type: 'object'},// send JSON in string fromat and convert it to JSON in app
        {arg: 'surge_multiplier', type: 'number'},
        {arg: 'eta', type: 'number'}
      ]
    }
  );
  Request.remoteMethod(
    'current',
    {
      http: {path: '/current', verb: 'patch'},
      returns: [
        {arg: 'request_id', type: 'string'},
        {arg: 'status', type: 'string'},
        {arg: 'location', type: 'object'},
        {arg: 'pickup', type: 'object'},
        {arg: 'destination', type: 'object'},
        {arg: 'driver_details', type: 'object'},
        {arg: 'vehicle_details', type: 'object'},// send JSON in string fromat and convert it to JSON in app
        {arg: 'surge_multiplier', type: 'number'},
        {arg: 'eta', type: 'number'}
      ]
    }
  );
};



/*

isStatic: false,
  +        http: {verb: 'get', path: '/' + pathName},
+        accepts: {arg: 'refresh', type: 'boolean', http: {source: 'query'}},
+        description: 'Fetches hasOne relation ' + relationName + '.',
  +        accessType: 'READ',
  +        returns: {arg: relationName, type: relation.modelTo.modelName, root: true},
+        rest: {after: convertNullToNotFoundError.bind(null, toModelName)}*/
