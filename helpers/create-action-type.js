const createActionType = function(namespace, types) {
  return types.reduce(function(a, b) {
      a[b] = `${namespace}/${b}`;
      return a;
   }, {});
}

export default createActionType
