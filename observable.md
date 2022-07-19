Promise.timeout = function () {
  return new Promise((res) => {
    console.log("đã kích hoạt"); // khác với Observable, trong này chạy ngay khi new
    setTimeout(() => {
      res();
    });
  });
};

function Observable(waitToRun) {
  this.subscribe = waitToRun;
}

Observable.timeout = function (second) {
  function waitToTimeout(observer) {
    setTimeout(() => {
      observer.next();
    }, second);
  }
  return new Observable(waitToTimeout);
};
Observable.interval = function (second) {
  function waitToTimeout(observer, error =()=>{}, complete = ()=>{}) {
    // chưa kích hoạt do chưa chạy hàm này
    let newObserver;
    if(typeof observer === 'function'){
        newObserver = {
          next: observer,
          error,
          complete
        };
    }
    else newObserver = observer
    const intervalId = setInterval(() => {

      observer.next();
      observer.complete()
    }, second);
    return new Subscription(() => {
      clearInterval(intervalId);
    });
  }
  return new Observable(waitToTimeout);
};
function Subscription(unsubscribe) {
  this.unsubscribe = unsubscribe;
}

const observer = {
  next: () => {},
  complete: () => {},
  error: () => {},
};
const observable$ = Observable.interval(1000);
const subscription = observable$.subscribe(observer);
console.log("subscription", subscription);
//Chú ý : để instance chấm tới một fn thì cần khai báo Obj.prototype.nameFn
