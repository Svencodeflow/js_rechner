const betrag = document.getElementById("euro")

// Get the form
const form = document.forms[0];
const nb = form.elements["subject"];
const prozent = form.elements["subject2"];

function calculate() {
    let betragvalue = betrag.value
    let prozentvalue = prozent.value
    let checknbvalue = nb.value
    let betragtext;
    let nbtext;
    let resttext;
    let nettodingtext;

    if (checknbvalue == 0 && prozentvalue == 0) {
        betragvalue * 1.19 // netto zu brutto 100 * 19 = 1.19
        resttext = ((betragvalue * 1.19) - (betragvalue)).toFixed(2)+"€";
        betragtext = (betragvalue * 1.19).toFixed(2)+"€";
        nbtext = "Bruttobetrag (Endpreis)"
        nettodingtext = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro"
    }else if (checknbvalue == 1 && prozentvalue == 0) {
        betragvalue / 1.19 // Brutto to netto 100 / 119 = 1.19 
        resttext = ((betragvalue) - (betragvalue / 1.19)).toFixed(2)+"€";
        betragtext = (betragvalue / 1.19).toFixed(2)+"€";
        nbtext = "Nettobetrag"
        nettodingtext = "Bruttobetrag (Preis Inklusive Mehrwertsteuer) in Euro"
    }else if (checknbvalue == 0 && prozentvalue == 1) {
        betragvalue * 1.07 // Netto zu Brutto 100 * 7 = 1.07
        resttext = ((betragvalue * 1.07) - (betragvalue)).toFixed(2)+"€";
        betragtext = (betragvalue * 1.07).toFixed(2)+"€";
        nbtext = "Bruttobetrag (Endpreis)"
        nettodingtext = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro"
    }else if (checknbvalue == 1 && prozentvalue == 1) {
        betragvalue / 1.07 // Netto zu Brutto 100 / 7 = 1.07
        resttext = ((betragvalue) - (betragvalue / 1.07)).toFixed(2)+"€";
        betragtext = (betragvalue / 1.07).toFixed(2)+"€";
        nbtext = "Nettobetrag"
        nettodingtext = "Bruttobetrag (Preis Inklusive Mehrwertsteuer) in Euro"
    }
    document.getElementById("aktuell").innerHTML = betragtext;
    document.getElementById("nbtext").innerHTML = nbtext;
    document.getElementById("differenz").innerHTML = resttext;
    document.getElementById("netto_brutto").innerHTML = nettodingtext;
    return
}
