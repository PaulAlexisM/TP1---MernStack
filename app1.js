const countries = require('./countries.json');

function getCountryByIso3(isoCode){
    for(let cpic = 0; cpic < countries.length; cpic++) {
        if(countries[cpic].iso3 == isoCode){
          return countries[cpic]
    }
}
}

function main(){
    console.log('//////ejercicio 1, ////\n', getCountryByIso3('ARG'),'\n');
}

main();