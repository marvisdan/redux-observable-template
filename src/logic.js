import { Observable } from "rxjs";

export const reactiveFunc = () => {
  const observable = new Observable(subscriber => {
    subscriber.next("1 time");
    subscriber.next("2 times");

    setTimeout(() => {
      subscriber.next("1 second delayed ");
      subscriber.complete();
      subscriber.next(" data after completion");
    }, 1000);
    subscriber.next("3 times");
    return;
  });

  observable.subscribe({
    next: x => console.log(x),
    error: x => console.log(x),
    complete: () => console.log("complete")
  });
};

export const reactiveTimer = () => {
  const observable = new Observable(subscriber => {
    let count = 1;
    const interval = setInterval(() => {
      subscriber.next(count++);

      if (count > 10) {
        clearInterval(interval);
      }
    }, 1000);
  });

  observable.subscribe({
    next: value => console.log(`Observer 1 ${value}`)
  });

  setTimeout(() => {
    observable.subscribe({
      next: value => console.log(`Observer 2 ${value}`)
    });
  }, 5000);
};
