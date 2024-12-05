const employees = [
  { name: 'Alice', department: 'HR', team: 'Recruitment' },
  { name: 'Bob', department: 'IT', team: 'Development' },
  { name: 'Charlie', department: 'IT', team: 'Support' },
  { name: 'David', department: 'HR', team: 'Training' },
  { name: 'Eve', department: 'IT', team: 'Development' },
];

function groupByDepartment(arr){
  return arr.reduce((acc, {name, department, team}) => {
    acc[department] = acc[department] || {}
    acc[department][team] = acc[department][team] || []

    acc[department][team].push(name)

    return acc
  }, {})
}

console.log(groupByDepartment(employees))
