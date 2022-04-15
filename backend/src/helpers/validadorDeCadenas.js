const eliminarEspaciosInnecesarios = (cadena) => {
    let cadenaPreprocesada = cadena.trim();
    const regexEspaciosInnecesarios = /([a-z]+)+\s{2,}/g;
    let cadenaSinEspaciosInnecesarios = cadena;
    if (regexEspaciosInnecesarios.test(cadena)) {
        cadenaSinEspaciosInnecesarios = cadenaPreprocesada.replaceAll(regexEspaciosInnecesarios, (cadenaConDobleEspacio, cadenaSola) => {
            return cadenaSola + " ";
        });
    }
    return cadenaSinEspaciosInnecesarios;
}
console.log(eliminarEspaciosInnecesarios(""));
module.exports = {
    eliminarEspaciosInnecesarios
}