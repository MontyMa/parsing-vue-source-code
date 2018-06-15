console.log(Object.create(null));

function polyfillBind(fn, ctx) {
  function boundFn(a) {
    var l = arguments.length;
    // console.log(l);


    let sd;

    if (l) {
      if (l > 1) {
        sd = fn.apply(ctx, arguments)
      } else {
        sd = fn.call(ctx, a)
      }
    } else {
      sd = fn.call(ctx);
    }


    // console.log(
    //   l ? l > 1 ?
    //   fn.apply(ctx, arguments) :
    //   fn.call(ctx, a) :
    //   fn.call(ctx), 909909);


    // console.log(sd, 'sdsdsdsdsd');

    return sd;

    // return
  }
  boundFn._length = fn.length;
  return boundFn
}


// console.log(polyfillBind(() => {}, this)('1231', '12313321234'));

// polyfillBind(() => {}, this)('1231','12313321234');
let a = polyfillBind(() => {}, this);





let obj = {
  name: 'Monty',
  age: 20
};

let name = obj.name;

Object.defineProperty(obj, 'name', {
  get() {
    return name + '90';
  },
  set(val) {
    console.log(val);

    name = val;
  }
});

console.log(obj.name, 'obj.name');
let i = 0;
document.getElementById('button').addEventListener('click', () => {
  i++;
  name += String(i);
  obj.name = name;
})


const obs = new Observer();
console.log(obs);

// obs.sub('nihao', (res) => {
//   console.log(res, 'sub.nihao2');
// })

obs.pub('nihao', 'shsdfff');


obs.sub('hhhh', (res) => {
  console.log(res);
})
obs.pub('hhhh', '9090909090')

// obs.sub('nihao', (res) => {
//   console.log(res, 'sub.nihao');
// })

// setInterval(() => {
// }, 3000);

// document.body.addEventListener('click', () => {
//   obs.pub('nihao', 'shdfdf');
// })


// obs.sub('nihao', (res) => {

// })

let ooo = {
  name: 'monty'
};

let state = false;
try {
  Object.defineProperty(ooo, 'name', {
    get() {
      state = true;
      return 'chenyifang'
      console.log(12312);
      // return state
    }
  })
} catch (error) {

  console.log(ooo, 'state');
}

// 

// but


// document.getElementById('but').addEventListener

let request = new XMLHttpRequest();

request.open('POST', 'https://cnodejs.org/api/v1/post/topics');

let form = document.getElementById('form');

document.getElementById('but').addEventListener('click', ee => {

  let data = new FormData(form);
  // request.send(new URLSearchParams(data));
  request.overrideMimeType("text/plain; charset=x-user-defined");
  // request.send(new Blob(data));
  request.send(new Uint8Array(data).buffer);
  // ee.preventDefault();
})


// request.onreadystatechange = function()




window.addEventListener('test-passive', eee => {
  console.log(eee, 'eee');
}, {})


let oooo = {
  name: 'sdfsfd',
  getName: () => {
    console.log(this);
    
    return this.name.toUpperCase();
  }
}

console.log(oooo.getName());

// C
// D
// D