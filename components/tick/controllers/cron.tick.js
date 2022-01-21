"use strict";

module.exports = {
    newtick_config: "*/1 * * * * *",
    newtick : async ( ) => {
        let api = global.Mantra.MantraAPIFactory();

        await api.LogInfo( `New tick! at ${new Date().toISOString() }`)
    }
}