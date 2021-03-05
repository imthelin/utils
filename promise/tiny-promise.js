class TinyPromise {
  constructor(func) {
    this.status = 'pending'
    this.value = undefined
    this.fulfilledList = []
    this.rejectedList = []
    func(TinyPromise.resolve.bind(this), TinyPromise.reject.bind(this))
  }
  then(onFulfilled, onRejected) {
    const { value, status } = this

    return new TinyPromise((onNextFulfilled, onNextRejected) => {
      function onFinalFulfilled(val) {
        if (typeof onFulfilled !== 'function') {
          onNextFulfilled(val)
        } else { 
          const res = onFulfilled(val)
          if (res instanceof TinyPromise) {
            res.then(onNextFulfilled, onNextRejected)
          } else {
            onNextFulfilled(val)
          }
        }
      }
      function onFinalRejected(err) {}
      switch (status) {
        case 'pending':
          this.fulfilledList.push(onFinalFulfilled)
          this.rejectedList.push(onFinalRejected)
          break
        case 'fulfilled':
          onFinalFulfilled(val)
          break
      }
    })
  }
  catch() {}
  finally() {}
  static resolve(val) {
    setTimeout(() => {
      if (this.status !== 'pending') return
      this.status = 'fulfilled'
      this.value = val
      this.triggerFulfilled(val)
    }, 0)
  }
  triggerFulfilled(val) {
    this.fulfilledList.forEach(item => {
      item(val)
    })
    this.fulfilledList = []
  }
  static reject(err) {
    setTimeout(() => {
      if (this.status !== 'pending') return
      console.log(err, `err`)
    }, 0)
  }
  static all(promiseList) {}
  static any(promiseList) {}
  static allSettled(promiseList) {}
  static race(promiseList) {}
}

let promise = new TinyPromise((resolve, reject) => {
  setTimeout(() => resolve('resolve 2000'), 2000)
})

promise.then(val => {
  console.log(val, `val`)
})
console.log('hello', `'hello'`)
