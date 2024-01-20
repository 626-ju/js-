"use strict";

///promise는 비동기 작업의 최종 성공 또는 실패를 나타내는 객체이다.

//promise 생성
const promise = new Promise((resolve, reject) => {
  console.log("a"); //excutor가 바로 실행된다.
  //resolve 성공했을때, reject 데이터를 받아오는 것을 실패했을 때

  setTimeout(() => {
    //서버와 통신하듯 딜레이를 발생시키자
    resolve("data"); ////1)
  }, 2000);

  setTimeout(() => {
    reject(new Error("no network")); ///2
  }, 2000);
});

// then, catch, finally를 통해 값을 가져옴
//promise.then(성공했을 때 반환값을 인자로 갖는 콜백함수)
//promise.catch(실패했을 때 에러를 인자로 갖는 콜백함수)
//promise.finally(성공여부 상관없이 그냥 실행시킬 콜백함수)

promise
  .then((value) => {
    ////1)promise가 정상적으로 수행되었을 때 resolve의 콜백함수를 통해서 전달된 값 //
    console.log(value);
  })
  .catch((error) => {
    ///2) promise가 실패했으면 reject의 콜백함수를 통해서 값 전달.
    console.log(error);
  })
  .finally(() => {
    console.log("finally"); ///promise가 실패하든 성공하든 실행.
  });

//promise.resolve(성공했을때실행될함수, 실패했을때실행될함수)
//=>promise.resolve()는 프로미스를 즉시 성공처리하므로 첫번째 인수인 함수 실행
//promise.reject()
//=> 즉시 실패처리

//promise 체이닝도가능

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(
    //fetch(리소스) // response 객체를 promise 데이터타입으로 리턴 
    //=> promise는 비동기 작업의 최종 성공 또는 실패를 나타내는 객체

    function (response) {
      return response.json(); ///resoponse를 json형태로 변경.
    }
  )
  .then(function (myJson) {
    console.log(myJson);

  });
