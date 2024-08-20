const arrDates = [
    {date: "30.11.2021"},
    {date: "15.04.2005"},
    {date: "20.06.2012"},
    {date: "10.06.2016"},
]


function sortByDates(arr) {
    return arr.sort((a, b) => {
        const parseDate = (strDate) => {
            const [day, month, year] = strDate.split('.')

            return new Date(year, month, day)
        }
        return parseDate(a.date) - parseDate(b.date)
    })

}

console.log(sortByDates(arrDates))
