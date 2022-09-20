let containerItens = document.getElementById('container');

let cont = 0;
let arrSection = [];
let arrSections = [];

itens.forEach((item, id)=>{
    cont++
    arrSection.push(item);
    if(cont == itensPorPagina){
        arrSections.push(arrSection);
        cont = 0;
        arrSection = [];
    }else if(id == itens.length - 1){
        arrSections.push(arrSection);
        cont = 0;
        arrSection = [];
    }
})

function changeSection(section){
    //console.log(containerItens);
    if(!section){
        let itensSection = arrSections[0].map((value, ind)=>{ //PRIMEIRA SECTION
            return `<div class='card'><span>${value}</span></div>`
        })
        containerItens.innerHTML = itensSection.join('');
    }else{
        console.log(arrSections[section-1])
        let itensSection = arrSections[section-1].map((value, ind)=>{
            return `<div class='card'><span>${value}</span></div>`
        })
        containerItens.innerHTML = itensSection.join('');
    }
    
}

changeSection(null);