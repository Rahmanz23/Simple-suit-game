var lang = prompt('choose language\n1 Bahasa Indonesia\n2 English \n3 日本語');
if (lang == '1'){

    var tanya = true;
while(tanya){

    var p = prompt('pilih gunting / kertas / batu ');

var comp = Math.random();


if(comp < 0.34 ){
    comp = 'gunting';
} else if (comp >= 0.34 && comp < 0.67){
    comp = 'kertas';
} else {
    comp = 'batu';
} ;



var hasil = '';

if(p == comp ){
    hasil = 'SERI';
} else if (p == 'gunting'){
hasil = (comp == 'kertas') ? 'MENANG' : 'KALAH';
}
else if (p == 'gunting'){
    hasil = (comp == 'batu') ? 'KALAH' : 'MENANG';
}
else if (p == 'kertas'){
    hasil = (comp == 'batu') ? 'MENANG':'KALAH';
}
else if (p == 'kertas'){
    hasil = (comp == 'gunting') ? 'KALAH' : 'MENANG';
}
else if (p == 'batu'){
    hasil = (comp == 'gunting') ? 'MENANG':'KALAH';
}
else if (p == 'batu'){
    hasil = (comp == 'kertas') ? 'KALAH' : 'MENANG';
} else { hasil = 'memasukan pilihan yang salah!'}

alert('Kamu memilih :' +p + '\nKomputer memilih : ' + comp +'\nMaka hasilnya kamu : ' + hasil);
tanya = confirm('lagi?')
}
alert ('terima kasih sudah bermain');

} else if (lang == '2'){
    var tanya = true;
    while(tanya){

    var p = prompt('choose scisors / paper / rock');

var comp = Math.random();


if(comp < 0.34 ){
    comp = 'scisors';
} else if (comp >= 0.34 && comp < 0.67){
    comp = 'paper';
} else {
    comp = 'rock';
} ;



var hasil = '';

if(p == comp ){
    hasil = 'DRAW';
} else if (p == 'scisors'){
hasil = (comp == 'paper') ? 'WIN':'LOSE';
}
else if (p == 'scisors'){
    hasil = (comp == 'rock') ? 'LOSE' : 'WIN';
}
else if (p == 'paper'){
    hasil = (comp == 'rock') ? 'WIN':'LOSE';
}
else if (p == 'paper'){
    hasil = (comp == 'scisors') ? 'LOSE' : 'WIN';
}
else if (p == 'rock'){
    hasil = (comp == 'scisors') ? 'WIN':'LOSE';
}
else if (p == 'rock'){
    hasil = (comp == 'paper') ? 'LOSE' : 'WIN';
} else { hasil = 'Choosed wrong option '}

alert('You choosed : ' +p + '\nComputer choosed ' + comp +'\nThe Result Is : ' + hasil);
tanya = confirm('again?')
}
alert ('thanks for playing');


} else if (lang == '3'){
    var tanya = true;
    while(tanya){

    var p = prompt('ハサミ か 紙 か 石 を 選んでください');

    var comp = Math.random();



    if(comp < 0.34 ){
        comp = 'ハサミ';
    } else if (comp >= 0.34 && comp < 0.67){
        comp = '紙';
    } else {
        comp = '石';
    } ;
    
    
    
    var hasil = '';
    
    if(p == comp ){
        hasil = '引き分け';
    } else if (p == 'ハサミ'){
    hasil = (comp == '紙') ? '且つ':'負ける';
    }
    else if (p == 'ハサミ'){
        hasil = (comp == '石') ? '負ける' : '且つ';
    }
    else if (p == '紙'){
        hasil = (comp == '石') ? '且つ':'負ける';
    }
    else if (p == '紙'){
        hasil = (comp == 'ハサミ') ? '負ける' : '且つ';
    }
    else if (p == '石'){
        hasil = (comp == 'ハサミ') ? '且つ':'負ける';
    }
    else if (p == '石'){
        hasil = (comp == '紙') ? '負ける' : '且つ';
    } else { hasil = '間違った選択肢を選んだ'}
    
    alert('あなたが選んだ :' +p + '\n コンピュータが選択されました ' + comp +'\n結果 は' + hasil);
    tanya = confirm('また？')
}
alert ('遊んでくれてありがとう');

} else {
    alert('choose number 1/2/3 \n pilih angka 1/2/3 \n 数字 1/2/3 を選択してください')
} 




