module.exports = function (Estimates) {

  
  var isStatic = true;
  Estimates.disableRemoteMethod('deleteById', isStatic);
  // Estimates.disableRemoteMethod('create', isStatic);
  // Estimates.disableRemoteMethod('upsert', isStatic);
  Estimates.disableRemoteMethod('exists', isStatic);
  Estimates.disableRemoteMethod('findById', isStatic);
  Estimates.disableRemoteMethod('find', isStatic);
  Estimates.disableRemoteMethod('findOne', isStatic);
  Estimates.disableRemoteMethod('count', isStatic);
  Estimates.disableRemoteMethod('prototype.updateAttributes', isStatic);
  Estimates.disableRemoteMethod('createChangeStream', isStatic);
  Estimates.disableRemoteMethod('updateAll', isStatic);


  Estimates.remoteMethod(
    'prices',
    {
      http: {path: '/prices', verb: 'get'},
      accepts: [
        {arg: 'start_latitude', type: 'number'},
        {arg: 'start_longitude', type: 'number'},
        {arg: 'end_latitude', type: 'number'},
        {arg: 'end_longitude', type: 'number'}
      ],
      returns: [
        {arg: 'product_id', type: 'string'},
        {arg: 'currency_code', type: 'string'},
        {arg: 'display_name', type: 'string'},
        {arg: 'estimate', type: 'string'},
        {arg: 'low_estimate', type: 'number'},
        {arg: 'high_estimate', type: 'number'},
        {arg: 'surge_multiplier', type: 'number'},
        {arg: 'duration', type: 'number'},
        {arg: 'distance', type: 'number'}
      ]
    }
  );
  Estimates.remoteMethod(
    'times',
    {
      http: {path: '/times', verb: 'get'},
      accepts: [
        {arg: 'start_latitude', type: 'number'},
        {arg: 'start_longitude', type: 'number'},
        {arg: 'product_id', type: 'string'}
      ],
      returns: [
        {arg: 'product_id', type: 'string'},
        {arg: 'display_name', type: 'string'},
        {arg: 'estimate', type: 'number'}
      ]
    }
  );
};
