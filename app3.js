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

function getCountriesBySubregion(subregion){
    for(let cbsr = 0; cbsr < countries.length; cbsr++) {
        if(countries[cbsr].subregion == subregion ){
            return countries[cbsr]
     }
    }   
}

function main(){
    console.log('//////ejercicio 1, ////\n', getCountryByIso3('ARG'),'\n');

    console.log('///// Ejercicio 2 /////\n', getCountryTranslatedName('ATG', 'ja'),'\n');
    
    console.log('///// Ejercicio 3 /////\n',getCountriesBySubregion('South America'),'\n');
}

main();