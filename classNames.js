let classNames = [
    'header', 'menu', 'menu-item', 'menu-item', 'menu-item', 'footer', 'menu', 'link','link','link','link',
];

/*result = [link, menu-item, menu, header, footer]*/


const sortByPopularity = (arr) => {
    const dictionary = {}
    arr.forEach((item) => {
        dictionary[item] = (dictionary[item] || 0) + 1;
    })
    return  Object.keys(dictionary).sort((a, b) => dictionary[b] - dictionary[a]);
}

console.log(sortByPopularity(classNames))
