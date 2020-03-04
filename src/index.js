const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    //console.log(expr);
    let ex=[];
    for (i=0;i<expr.length;i+=10){
        ex.push(expr.substring(i,i+10));
    }
    var mtc=[];
    console.log(MORSE_TABLE[1]);
    Object.keys(MORSE_TABLE).forEach((it)=>{
        let mc=""
        it.split("").forEach((jt)=>{
            if (jt=="-"){mc+="11"}
            if (jt=="."){mc+="10"}
        })
        while (mc.length<10){mc="0"+mc;}
        mtc.push(mc);
    })
    var res="";
    ex.forEach((it)=>{
        let mi=mtc.indexOf(it);
        if (mi!=-1){
            res+=Object.values(MORSE_TABLE)[mi];
        }else{res+=" ";}
    })
    console.log(ex);
    return res;
    // write your solution here
}

module.exports = {
    decode
}