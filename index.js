// function delayedPromise(text, time) {
//   const promise = new Promise((reslove) => {
//     setTimeout(() => {
//         reslove(text);
//     }, time)
//   });
//   return promise;
// }

// const promise1 = delayedPromise("text1", 1000)
// const promise2 = delayedPromise("text2", 2000)
// const promise3 = delayedPromise("text3", 3000)
// const promise4 = delayedPromise("text4", 4000)
// const promise5 = delayedPromise("text5", 5000)

// Promise.all([promise1, promise2, promise3, promise4, promise5]).then((data) => {
//   console.log(data)
// }).catch((error) => {
//   console.log(error)
// })


function randomDelay (text, time) {
    const promice = new Promise((reslove, reject) => {
      setTimeout(() => {
        reslove(`${text}`)
      }, time)
    })
    return promice
}

const timePromice1 = randomDelay("1", 1000)
const timePromice2 = randomDelay("2", 1000)
const timePromice3 = randomDelay("3", 1000)
const timePromice4 = randomDelay("4", 1000)
const timePromice5 = randomDelay("5", 1000)

Promise.race([timePromice1, timePromice2, timePromice3, timePromice4, timePromice5]).then((data) => {
  console.log(data)
}).catch((error) => {
  console.log(error)
})