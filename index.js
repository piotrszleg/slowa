pokaz=litera=>{
    result="";
    write(`<table style="width:100%">`);
    write(`<tr><td>Slowa</td></tr>`);
    write=text=>result+=text;
    slowa.filter(slowo=>slowo[0]===litera).forEach(slowo => {
        write(`<tr><td><a href="https://sjp.pl/${slowo}">${slowo}</a></td></tr>`);
    });
    write("</table>");
    document.getElementById("slowa").innerHTML=result;
}
window.addEventListener('load', (event)=>{
    let wystepowanie_liter={};
    for(slowo of slowa){
        if(slowo.length>0){
            if(typeof wystepowanie_liter[slowo[0]]==='undefined'){
                wystepowanie_liter[slowo[0]]={"liczba":1};
            } else {
                wystepowanie_liter[slowo[0]].liczba++;
            }
        }
    }
    for(wystepowanie of  Object.values(wystepowanie_liter)){
        wystepowanie.procent=wystepowanie.liczba/slowa.length;
    }
    result="";
    write=text=>result+=text;
    write(`<table style="width:100%">`);
    write(`<tr>
        <td>Pierwsza Litera</td>
        <td>Liczba słów</td>
        <td>Procent słów</td>
    </tr>`);
    for(let [k, v] of Object.entries(wystepowanie_liter)){
        write(`<tr>
            <td>${k}</td>
            <td>${v.liczba}</td>
            <td>${(v.procent*100).toFixed(2)}%</td>
            <td><a onclick="pokaz('${k}')" href="javascript:void(0);">pokaż</a><td>
        </tr>`);
    }
    write("</table>");
    document.getElementById("tablica").innerHTML=result;
});