const str = "console.log(a)";
const func = new Function('a', str);

func(5);
