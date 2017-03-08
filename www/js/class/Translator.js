function Translator(language, dictionary) {}

Translator.translate = function(ctx, language, literals) {
    if(!dictionary[language]) {
        language = "default";
        console.log("ERROR :: Fallo al buscar idioma, se seleccionara el idimoa por defecto.")
    }
    for(var i = 0; i < literals.length; i++) 
        ctx[literals[i]] = dictionary[language][literals[i]]
}