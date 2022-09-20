const bttFirstPage = document.getElementById('bttFirstPage');
const bttLastPage = document.getElementById('bttLastPage');
const bttNextPage = document.getElementById('bttNextPage');
const bttPrevPage = document.getElementById('bttPrevPage');
const containerNumbers = document.getElementById('containerNumbers');

const itensPorLista = 5;
const itensPorPagina = 6;
const itens = Array.from({length:52}).map((item, ind) => ind+1);
const pages = Array.from({length:Math.ceil(itens.length/itensPorPagina)}).map((item, ind) => ind+1);

let paginaAtual = 0; 
let position = 1; // Intervalo de página que estou, ex.: position 2 -> 2 3 4 5 6

bttLastPage.addEventListener('click', (e)=>{
    position = (pages.length - itensPorLista) + 1; // Fórmula da quantidade de listas possíveis === ultima position, será ultilizado no bttLastPage
    paginaAtual = itensPorLista - 1;
    defListPages();
    changeSection(pages.length);
})

bttFirstPage.addEventListener('click', (e)=>{
    position = 1;
    paginaAtual = 0;
    defListPages();
    changeSection(1);
})

bttNextPage.addEventListener('click', ()=>{
    let numbersListPage = [...document.getElementsByClassName('bttNumberPage')];
    numbersListPage[paginaAtual].style.color = 'black';
    if(numbersListPage[paginaAtual].innerHTML != pages.length){ // SE NÃO FOR O ÚLTIMO ELEMENTO
        paginaAtual++;
    }
    

    if(paginaAtual == itensPorLista - 1 && numbersListPage[paginaAtual].innerHTML != pages.length && position < (pages.length - itensPorLista) + 1){
        position++;
        paginaAtual = 3;
        defListPages();
        let numbersListPage = [...document.getElementsByClassName('bttNumberPage')]; // PRECISO BUSCAR A LISTA ATUALIZADA
        changeSection(numbersListPage[paginaAtual].innerText);
    }else{
        numbersListPage[paginaAtual].style.color = 'red';
        changeSection(numbersListPage[paginaAtual].innerText);
    }
})

bttPrevPage.addEventListener('click', ()=>{
    let numbersListPage = [...document.getElementsByClassName('bttNumberPage')];
    numbersListPage[paginaAtual].style.color = 'black';
    if(numbersListPage[paginaAtual].innerHTML != 1){
        paginaAtual--
    }

    if(paginaAtual == 0 && numbersListPage[paginaAtual].innerHTML != 1 && position != 1){
        position--;
        paginaAtual = 1;
        defListPages();
        let numbersListPage = [...document.getElementsByClassName('bttNumberPage')]; // PRECISO BUSCAR A LISTA ATUALIZADA
        changeSection(numbersListPage[paginaAtual].innerText);
    }else{
        numbersListPage[paginaAtual].style.color = 'red';
        changeSection(numbersListPage[paginaAtual].innerText);
    }
})

function defEventBtts(){
    let numbersListPage = [...document.getElementsByClassName('bttNumberPage')];

    numbersListPage[paginaAtual].style.color = 'red';
    

    numbersListPage.forEach((el, ind, arr)=>{
        el.addEventListener('click', (e)=>{

            if(ind == 4 && el.innerHTML != pages.length){ // QTDE MÁXIMA DE PÁGINAS == ÚLTIMO ELEMENTO
                position++;
                paginaAtual = 3; // PENÚLTIMO ELEMENTO
                defListPages();
                changeSection(el.innerText);
            }else if(ind == 0 && el.innerHTML != 1){ // PRIMEIRO ELEMENTO
                //console.log(el);
                position--;
                paginaAtual = 1; // SEGUNDO ELEMENTO
                defListPages();
                changeSection(el.innerText);
            }else{
                arr[paginaAtual].style.color = 'black';
                el.style.color = 'red';
                paginaAtual = ind;
                changeSection(el.innerText);
            }

            //defListPages();
        })
    })
}

function defListPages(){
    const listReferencePosition = Array.from({length:itensPorLista}).map((item, ind)=>{ // Definindo a lista de acordo com a position: ;
        return `<span class='bttNumberPage'>${ind+position}</span>`;
    });
    containerNumbers.innerHTML = listReferencePosition.join('');
    defEventBtts(); // ATIVAR O EVENTO DE CLICK EM CADA BTT
}

defListPages();