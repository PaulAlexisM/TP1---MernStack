const countries = require('./countries.json');

function getCountryByIso3(isoCode){
    for(let cpic = 0; cpic < countries.length; cpic++) {
        if(countries[cpic].iso3 == isoCode){
          return countries[cpic]
    }
 }
}

function getCountryTranslatedName(isoCode, language){

    for(let cptn = 0; cptn < countries.length; cptn++) {
        if(countries[cptn].iso3 == isoCode ){
            return countries[cptn].translations[language]
        }
    }
}


function main(){
    console.log('//////ejercicio 1, ////\n', getCountryByIso3('ARG'),'\n');

    console.log('///// Ejercicio 2 /////\n', getCountryTranslatedName('ATG', 'ja'),'\n');
}

main();