let classNames = [
    'header', 'menu', 'menu-item', 'menu-item', 'menu-item', 'footer', 'menu', 'link','link','link','link',
];

/*result = [link, menu-item, menu, header, footer]*/


const sortByPopularity = (arr) => {
    const dictionary = {}
    arr.forEach((item) => {
        dictionary[item] = (dictionary[item] || 0) + 1;
    })
    const array = Object.keys(dictionary);
    return array.sort((a, b) =>{
        if (dictionary[a] > dictionary[b]){
            return -1;
        }
        if (dictionary[a] < dictionary[b]){
            return 1;
        }
        return 0;
    })
}

console.log(sortByPopularity(classNames))
