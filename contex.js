const user = {
    name: "Roman",
    roles: ['friend', 'boss', 'bro'],
    getRoles: function () {
        /*const contex = this*/
        return this.roles.map(function (role){
            return this.name + ' is ' + role
        }.bind(this))
    }
}

console.log(user.getRoles())
