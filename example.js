
import { action, observable } from 'mobx';
import { combine } from 'combine-mobx-store';


function StoreFoo(Mixin) {
  return class extends Mixin {
    @observable foo = 1;
    @action plusFoo = () => this.foo += 1;
  };
}

function StoreBar(Mixin) {
  return class extends Mixin {
    @observable bar = 2;
    @action plusBar = () => this.bar += 1;
  };
}

const Store = combine(StoreFoo, StoreBar);
const store = new Store();


console.log(store.foo); // 1
store.plusFoo();
console.log(store.foo); // 2

console.log(store.bar); // 2
store.plusBar();
console.log(store.bar); // 3
