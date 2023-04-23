
var digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var tenToTwenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var tens = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

var MAX_NUMBER = 999999999999999;

function clicked(value) {
    if (Number.isNaN(parseInt(value)) && value != undefined && value != '' && value.trim() !== '') {
        throw new TypeError("Value is not a number");
    }
    else if(value > MAX_NUMBER){
        throw new RangeError("Number is too large");
    } 
    //  var text = getText(value)
     var text = numberToNepaliAlphabets(value)
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
    if (value < 1000000000) {
        return getText(Math.floor(value / 10000000)) + " crore " + getText(value % 10000000);
    }
    if (value < 100000000000) {
        return getText(Math.floor(value / 1000000000)) + " arba " + getText(value % 1000000000);
    }
    if (value < 10000000000000) {
        return getText(Math.floor(value / 100000000000)) + " kharba " + getText(value % 100000000000);
    }

    return "";

}

const nepaliNumbers = ['शून्य','एक','दुई','तीन','चार','पाँच','छ','सात','आठ','नौ','दस','एघार','बाह्र','तेह्र','चौध','पन्ध्र','सोह्र','सत्र','अठार','उन्नाइस','बीस',
'एक्काइस','बाइस','तेईस','चौबिस','पच्चिस','छब्बिस','सत्ताइस','अठ्ठाइस','उनन्तिस','तिस','एकत्तिस','बत्तिस','तेत्तिस','चौंतिस','पैंतिस','छत्तिस','सैंतिस','अठ्ठतिस',
'उनन्चालीस','चालीस','एकचालीस','बयालीस','त्रियालीस','चवालीस','पैंतालीस','छयालीस','सच्चालीस','अठ्ठालीस','उनन्चास','पचास','एकाउन्न','बाउन्न','त्रिपन्न','चौवन्न','पचपन्न',
'छपन्न','सन्ताउन्न','अन्ठाउन्न','उनन्साठी','साठी','एकसट्ठी','बैसट्ठी','त्रिसट्ठी','चौंसट्ठी','पैंसट्ठी','छयसट्ठी','सत्सट्ठी','अठ्ठसट्ठी','उनन्सत्तरी','सत्तरी','एकहत्तर','बहत्तर','त्रिहत्तर',
'चौहत्तर','पचहत्तर','छयहत्तर','सतहत्तर','अठहत्तर','उनासी','अस्सी','एकासी','बयासी','त्रियासी','चौरासी','पचासी','छयासी','सतासी','अठासी','उनान्नब्बे','नब्बे',
'एकान्नब्बे','बयान्नब्बे','त्रियान्नब्बे','चौरान्नब्बे','पन्चान्नब्बे','छयान्नब्बे','सन्तान्नब्बे','अन्ठान्नब्बे','उनान्सय','सय']
function numberToNepaliAlphabets(num) {
    if(num == 0 || num == undefined) return "";

    if (num < 100) {
        return nepaliNumbers[num];
    }

    if (num < 1000) {
        return nepaliNumbers[Math.floor(num / 100)] + ' सय ' + numberToNepaliAlphabets(num % 100);
    }
    if (num < 100000) {
        return numberToNepaliAlphabets(Math.floor(num / 1000)) + " हजार " + numberToNepaliAlphabets(num % 1000);
    }
    if (num < 10000000) {
        return numberToNepaliAlphabets(Math.floor(num / 100000)) + " लाख " + numberToNepaliAlphabets(num % 100000);
    }
    if (num < 1000000000) {
        return numberToNepaliAlphabets(Math.floor(num / 10000000)) + " करोड " + numberToNepaliAlphabets(num % 10000000);
    }
    if (num < 100000000000) {
        return numberToNepaliAlphabets(Math.floor(num / 1000000000)) + " अर्ब " + numberToNepaliAlphabets(num % 1000000000);
    }
    if (num < 10000000000000) {
        return numberToNepaliAlphabets(Math.floor(num / 100000000000)) + " खर्ब " + numberToNepaliAlphabets(num % 100000000000);
    }

    return "";


   

   
}
