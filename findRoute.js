const findRoute = (obj, path) => {
    const paths = path.split('.')

    return  paths.reduce((acc, path) => {
        if (!acc) return acc;

        acc = acc[path]

        return acc;
    }, obj)
}

const obj = {
    value: {
        bar: 100
    }
}

console.log(findRoute(obj, 'value.bar'))