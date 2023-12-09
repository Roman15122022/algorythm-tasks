/*let a = 'sda';
let b = a.length;
let c = a.replace('s', 'b');
console.log(c)


let arr = [1,2,3,[12,23],[[213]]];

console.log(arr.flat(Infinity))
console.log(arr)


let strArr = arr.toString().split(',').map(Number)
console.log(strArr)*/

console.log(1)
const a = new Promise((resolve,reject) => resolve(console.log(2)));
a.then(res => console.log(3));

setTimeout(()=>{
    console.log(4);
})
a.then(res => console.log(5));
console.log(6);

/*const btn = document.getElementById('submit');

function submitForm(event){
    event.preventDefault();
    const form = document.getElementById('myform');
    const formData = new FormData(form);

    fetch('http://localhost:63342/algorythm-tasks/test.html?_ijt=hhckqpectis1b5cjtr3cnfej2v',{
        method: 'POST',
        body: formData,
    }).then(response => response.json())
        .then(data => {
            console.log('Successful:', data);
        })
        .catch(error => {
            console.log('Error:', error)
        })
}

btn.addEventListener('click', submitForm);*/

String.prototype.hello = function() {
    console.log(this + ' HELLO');
};

let fgr = 'Roma';
fgr.hello(); // Output: Roma HELLO

Array.prototype.output = function (){
    this.forEach(item => console.log(item));
}

let array = [1,2,3,4,5];
array.output()

Object.prototype;
Symbol.prototype;
Number.prototype;
Boolean.prototype;


