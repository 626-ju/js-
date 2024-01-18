
function Person(name, job){
    this.name = name;
    this.job = job;

   
}
Person.prototype.greet  = function(){
    console.log(`Hello my name is ${this.name}, I'm a ${this.job}` );
    };


const 성주 = new Person("성주", "student");
성주.greet();


for(const keys in 성주){

    console.log(keys);
}


console.log(Person.prototype.hasOwnProperty("greet")); //true
console.log(Person.hasOwnProperty("greet")); //falswe




class introduce {
    constructor(name, job){
        this.name = name;
        this.job = job;
    }

    greeting(){
     console.log(`Hello my name is ${this.name}, I'm a ${this.job}` ); 
    } 

    static farewell (){
       console.log( `goodbye ${this.name}`);
    }

}
const 시은 = new introduce("시은", "student");
시은.greeting();

//시은.farewell() //위에서 정적으로 선언했기 때문에 class의 인스턴스에서는 접근 불가
introduce.farewell();

//extends를 통한 확장을 할때는 항상 super생각하기

class WhatToDo extends introduce{
    constructor(name,job, doing){
        super(name, job);
        this.doing = doing
    }

    whatAreYouDoing (){
        console.log(`hi I'm ${this.name}, I'm ${this.job}, but I'm ${this.doing} now`)
    }
}

const 현준 = new WhatToDo("현준", "student", "sleeping")
console.log(현준.name);
현준.whatAreYouDoing();


//getter와 setter를 사용한 예외처리


class 세터와게터 extends WhatToDo{
    constructor(name, job, doing, age){
        super(name, job, doing);
        this.age = age
    }

    set age(value){/// class로 오브젝트 만들 때 age에 값을 할당할 경우 실행
        if(value<1){ 
            console.log("???나이가 1보다 작다고?!?! 다시 적어주세여")
        }
        this.입력값 = value;  //// age에 할당되려는 value의 값이 올바른 경우 age값으로 세팅해준다.
    }

    get age(){
        return this.입력값; //그냥 age를 쓰면 age가 세팅될때마다 루프가 계속 돌아감. 이를 방지하기 위해 _age
    }


}


const 재환 = new 세터와게터("재환", "baby", 'sleeping', 27);

console.log(재환.job);
재환.whatAreYouDoing();
//-----------------------------------------------------------//super 안쓰더라도 오버라이팅이 되나?

class 메서드수정하기 extends WhatToDo{
     whatAreYouDoing(){

        console.log(`hi ${this.name} is modified Class`)
     }

}

const a = new 메서드수정하기("수정")
a.whatAreYouDoing();





