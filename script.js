const eleves = [
    "Philip B.",
    "Ida",
    "Cyril",
    "Adrien",
    "Tom",
    "Emine",
    "Samincha",
    "Anaïs",
    "Aïssatou",
    "Lionel",
    "Esteban",
    "Emma",
    "Liam",
    "Arnaud",
    "Bryan",
    "Philip P.",
    "Mattia",
    "Victoria",
    "Lotina",
    "Felix",
    "Enola",
    "Ruizhi",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
]

const tableau_classe = {
    "P1":"",
    "P2": "",
    "P3": "",
    "P4": "",
    "P5": "",
    "P6": "",
    "P7": "",
    "P8": "",
    "P9": "",
    "P10": "",
    "P11": "",
    "P12": "",
    "P13": "",
    "P14": "",
    "P15": "",
    "P16": "",
    "P17": "",
    "P18": "",
    "P19": "",
    "P20": "",
    "P21": "",
    "P22": "",
    "P23": "",
    "P24": "",
    "P25": "",
    "P26": "",
    "P27": ""
}

function brasser(liste_eleves, places){
    copie_liste = [...liste_eleves];
    place_nb = 1;

    for (let i = 0; i < liste_eleves.length; i++){
        let j = Math.floor(Math.random() * copie_liste.length);
        places[`P${place_nb}`] = copie_liste[j]
        copie_liste.splice(j, 1)
        place_nb ++
    }

    return places
}

function afficher_plan(){
    plan_classe = brasser(eleves, tableau_classe)
    for (let i=1; i<=27; i++){
        document.getElementById(`P${i}`).textContent = plan_classe[`P${i}`]
    }
    document.getElementById("plan_classe").style.display = "table"
}