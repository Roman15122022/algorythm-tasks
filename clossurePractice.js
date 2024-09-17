function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let shooter = function (i) {
            return function (){
                console.log(i)
            }
        };
        shooters.push(shooter(i));
        i++;
    }

    return shooters;
}

let army = makeArmy();


army[0]()
army[1]()
army[2]()
army[3]()
army[9]()
