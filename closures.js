const obj = {
    a: 5,
    say: function (){
        setTimeout(()=>{
            console.log(this.a);  //not working with function declaration;
        })
    }
}

obj.say();
