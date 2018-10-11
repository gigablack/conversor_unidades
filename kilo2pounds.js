const kilo2pounds = {
    toPounds(kilos,digitsAfterComma = 2){
        return (kilos * 2.20462).toFixed(digitsAfterComma)
    },

    toKilos(pounds,digitsAfterComma = 2){
        return (pounds / 2.20462).toFixed(digitsAfterComma)
    }
}


module.exports = kilo2pounds