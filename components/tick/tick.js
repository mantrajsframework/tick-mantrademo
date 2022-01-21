"use strict";

class tickStarter {
    async onStart(Mantra) { }
}

module.exports = () => {
    return {
        Start: new tickStarter()
    };
}