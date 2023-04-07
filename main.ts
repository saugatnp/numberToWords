var digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var tenToTwenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var tens = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];



function clicked(value) {
    var text = getText(value)
    // var text = numberToNepaliAlphabets(value)
    const label = document.getElementById("text");
    label ? label.innerHTML = text : "";

}
function getText(value) {
    if (value == 0 || value == undefined)
        return "";
    if (value < 10) {
        return digits[value];
    }
    if (value < 20) {
        return tenToTwenty[value - 10];
    }
    if (value < 100) {
        return tens[Math.floor(value / 10) - 1] + " " + getText(value % 10);
    }
    if (value < 1000) {
        return getText(Math.floor(value / 100)) + " hundred " + getText(value % 100);
    }
    if (value < 100000) {
        return getText(Math.floor(value / 1000)) + " thousand " + getText(value % 1000);
    }
    if (value < 10000000) {
        return getText(Math.floor(value / 100000)) + " lakh " + getText(value % 100000);
    }
    return "";

}

const nepaliNumbers = ['शून्य','एक','दुई','तीन','चार','पाँच','छ','सात','आठ','नौ','दस','एघार','बाह्र','तेह्र','चौध','पन्ध्र','सोह्र','सत्र','अठार','उन्नाइस','बीस',
'एक्काइस','बाइस','तेईस','चौबिस','पच्चिस','छब्बिस','सत्ताइस','अठ्ठाइस','उनन्तिस','तिस','एकत्तिस','बत्तिस','तेत्तिस','चौंतिस','पैंतिस','छत्तिस','सैंतिस','अठ्ठतिस',
'उनन्चालीस','चालीस','एकचालीस','बयालीस','त्रियालीस','चवालीस','पैंतालीस','छयालीस','सच्चालीस','अठ्ठालीस','उनन्चास','पचास','एकाउन्न','बाउन्न','त्रिपन्न','चौवन्न','पचपन्न',
'छपन्न','सन्ताउन्न','अन्ठाउन्न','उनन्साठी','साठी','एकसट्ठी','बैसट्ठी','त्रिसट्ठी','चौंसट्ठी','पैंसट्ठी','छयसट्ठी','सत्सट्ठी','अठ्ठसट्ठी','उनन्सत्तरी','सत्तरी','एकहत्तर','बहत्तर','त्रिहत्तर',
'चौहत्तर','पचहत्तर','छयहत्तर','सतहत्तर','अठहत्तर','उनासी','अस्सी','एकासी','बयासी','त्रियासी','चौरासी','पचासी','छयासी','सतासी','अठासी','उनान्नब्बे','नब्बे',
'एकान्नब्बे','बयान्नब्बे','त्रियान्नब्बे','चौरान्नब्बे','पन्चान्नब्बे','छयान्नब्बे','सन्तान्नब्बे','अन्ठान्नब्बे','उनान्सय','सय']
const Nepaliones = [
    '', 'एक', 'दुई', 'तीन', 'चार', 'पाँच', 'छ', 'सात', 'आठ', 'नौ'
];
const Nepalitens = [
    '', '', 'बीस', 'तीस', 'चौर्न्न', 'पचास', 'साठी', 'सत्तरी', 'अठासी', 'नब्बे'
];
function numberToNepaliAlphabets(num) {
    if(num == 0 || num == undefined) return "";

    if (num < 100) {
        return nepaliNumbers[num];
    }

    if (num < 1000) {
        return Nepaliones[Math.floor(num / 100)] + ' सय ' + numberToNepaliAlphabets(num % 100);
    }
    if (num < 100000) {
        return numberToNepaliAlphabets(Math.floor(num / 1000)) + " हजार " + numberToNepaliAlphabets(num % 1000);
    }


   

    // if (num < 100000) {
    //     const quotient = Math.floor(num / 1000);
    //     const remainder = num % 1000;
    //     const word = numberToNepaliAlphabets(quotient) + ' हजार';
    //     if (remainder === 0) {
    //         return word;
    //     }
    //     return word + ' ' + numberToNepaliAlphabets(remainder);
    // }

    // if (num < 10000000) {
    //     const quotient = Math.floor(num / 100000);
    //     const remainder = num % 100000;
    //     const word = numberToNepaliAlphabets(quotient) + ' लाख';
    //     if (remainder === 0) {
    //         return word;
    //     }
    //     return word + ' ' + numberToNepaliAlphabets(remainder);
    // }

    // const quotient = Math.floor(num / 10000000);
    // const remainder = num % 10000000;
    // const word = numberToNepaliAlphabets(quotient) + ' करोड';
    // if (remainder === 0) {
    //     return word;
    // }
    // return word + ' ' + numberToNepaliAlphabets(remainder);
}
