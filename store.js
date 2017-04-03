import { observable, action, computed } from 'mobx'

class Store {
  @observable counter = 0;

  @action increment() {
    this.counter += 1
  }

  @action decrement() {
    this.counter -= 1
  }

  @action incrementAsync() {
    setTimeout(() => {
      this.counter++
    }, 1000)
  }
}

// create the state
export var store = new Store()
