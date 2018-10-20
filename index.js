
class BASE {}


function mixin(superClass, ...classes) {
  let C = superClass;
  classes.forEach((D) => {
    C = D(C);
  });
  return C;
}


function combine(...stores) {
  return mixin(BASE, ...stores)
}


export {
  combine
}
