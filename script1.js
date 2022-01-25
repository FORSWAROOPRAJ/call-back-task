
/*  var timeleft = 10;
var downloadTimer = setInterval(function(){
if(timeleft <= 0){
  clearInterval(downloadTimer);
  document.getElementById("countdown").innerHTML = "Finished";
} else {
  document.getElementById("countdown").innerHTML = timeleft ;
}
timeleft -= 1;
}, 1000);*/

let div = document.getElementById("count");


/*let  setTimeout=(delay,callback)=> {
    var start = new Date().getTime(); 
    while (new Date().getTime() < start + delay);
    callback();
}*/



//let display=(num)=>{div.innerText = num;console.log(num)};


let wish = () => { setTimeout(() => { div.innerHTML = "Happy<br>Independence<br>day" }, 1000); }

let countOne = (callback) => {
  setTimeout(() => {
    div.innerText = 1;
    console.log(1)
    callback()
  }
    , 1000);
}

let countTwo = (callback) => {
  setTimeout(() => {
    div.innerText = 2;
    console.log(2)
    callback()
  }
    , 1000);
}



let countThree = (callback) => {
  setTimeout(() => {
    div.innerText = 3;
    console.log(3)
    callback()
  }
    , 1000);
}

let countFour = (callback) => {
  setTimeout(() => {
    div.innerText = 4;
    console.log(4)
    callback()
  }
    , 1000);
}
let countFive = (callback) => {
  setTimeout(() => {
    div.innerText = 5;
    console.log(5)
    callback()
  }
    , 1000);
}
let countSix = (callback) => {
  setTimeout(() => {
    div.innerText = 6;
    console.log(6)
    callback()
  }
    , 1000);
}
let countSeven = (callback) => {
  setTimeout(() => {
    div.innerText = 7;
    console.log(7)
    callback()
  }
    , 1000);
}
let countEight = (callback) => {
  setTimeout(() => {
    div.innerText = 8;
    console.log(8)
    callback()
  }
    , 1000);
}
let countNine = (callback) => {
  setTimeout(() => {
    div.innerText = 9;
    console.log(9)
    callback()
  }
    , 1000);
}
let countTen = (callback) => {
  setTimeout(() => {
    div.innerText = 10;
    console.log(10)
    callback()
  }
    , 1000);
}
// callback hell


var button1 = document.getElementById('start');

button1.addEventListener('click', () => {
  countTen(() => {
    countNine(() => {
      countEight(() => {
        countSeven(() => {
          countSix(() => {
            countFive(() => {
              countFour(() => {
                countThree(() => {
                  countTwo(() => {
                    countOne(() => {
                      wish();
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  })
})
