function remapData(data){

}


console.log(remapData([
    ['Cucumber', 'Roman', 'Yarik'],
    ['Tomato', 'Liza', 'Roma'],
    ['Rice','Liza', 'Roma', 'Maksim'],
    ['Fish', 'Roma']
]))

/*
{
'Yarik': ['Cucumber'],
'Roman': ['Cucumber', 'Tomato', 'Rice', 'Fish'],
'Liza': ['Tomato', 'Rice'],
'Maksim': ['Rice']
}
 */
