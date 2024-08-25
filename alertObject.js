const obj = {
    name: 'Roma',
    hobby: 'football',

    [Symbol.toPrimitive](hint) {
        return hint === "string" ? `{name: "${this.name}"}` : null
    }
}

alert(obj)
