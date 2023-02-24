const BaseUrl = "http://localhost:3000/api/tasques";
var llista = [];

const fecha = new Date();
if((fecha.getMonth()+1) < 10 && fecha.getDate() < 10){
    var dataact = (fecha.getFullYear()+`-0`+(fecha.getMonth()+1)+`-0`+fecha.getDate());

}else if((fecha.getMonth()+1) < 10 && fecha.getDate() >= 10){
    var dataact = (fecha.getFullYear()+`-0`+(fecha.getMonth()+1)+`-`+fecha.getDate());

}else{
    var dataact = (fecha.getFullYear()+`-`+(fecha.getMonth()+1)+`-`+fecha.getDate());
}


function inicialitzacio(){
    var zonaTodo = document.getElementById("todo");
    var zonaDoing = document.getElementById("doing");
    var zonaDone = document.getElementById("done");

     fetch(BaseUrl).then((res) => {
        if(res.ok) {
            res.json().then((dades) => {
                
 
                for(i = 0;i < dades.length;i++){

                    var cosNota = `
                      <div class="tasca row align-items-start justify-content-lg-center" style="height: 275px;">
                        <div id="primari" class="col-10 col-sm-10 col-md-10 col-lg-9 bg-transparent border `+dades[i].prioritat+` border-4" style="height: 100%">
                          <p id="num" hidden>`+dades[i]._id+`</p>
                          <p id="posi" hidden>`+dades[i].position+`</p>
                          <p id="prioritat" hidden>`+dades[i].prioritat+`</p>
                          <p id="titol" class="modif text-break fw-bold fs-5" contentEditable="false" >`+dades[i].titol+`</p>
                          <p id="nom" class="modif text-capitalize text-break fw-bold fs-5" contentEditable="false" >`+dades[i].responsable+`</p>
                          <p id="contingut" class="modif text-break fw-bold fs-6" contentEditable="false">`+dades[i].contingut+`</p>
                          <br>
                          <label for="start" class="text-capitalize text-break fw-bold fs-6">Data Inici:</label>
                          <input class="modif" type="date" id="start" value="`+dades[i].dataIni.slice(0,10)+`">
                          <br>
                          <label for="finish" class="text-capitalize text-break fw-bold fs-6">Data Límit</label>
                          <input class="modif" type="date" id="finish" value="`+dades[i].dataFin.slice(0,10)+`">
                        </div>
                        <div id="secundari" class="opcions col-2 col-sm-2 col-md-2 col-lg-2 bg-transparent border `+dades[i].prioritat+` border-4" style="height: 100%">
                      <div class="save"> 
                        <svg xmlns="http://www.w3.org/2000/svg"  width="31px" height="31px" fill="currentColor" style="color:#00BE4F;" class="bi bi-save-fill mt-2" viewBox="0 0 16 16">
                          <path d="M8.5 1.5A1.5 1.5 0 0 1 10 0h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6c-.314.418-.5.937-.5 1.5v7.793L4.854 6.646a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l3.5-3.5a.5.5 0 0 0-.708-.708L8.5 9.293V1.5z"/>
                        </svg>
                      </div>
                      <div class="del"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="31px" height="31px" fill="currentColor" style="color:#E91E63;" class="bi bi-trash-fill mt-2" viewBox="0 0 16 16">
                          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                        </svg>
                      </div>
                      <div class="move"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="31px" height="31px" fill="currentColor" style="color:#FFAE00;" class="bi bi-arrow-right-square-fill mt-2" viewBox="0 0 16 16">
                          <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
                        </svg>
                      </div>
                      <div class="prio"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="31px" height="31px" fill="currentColor" style="color: #2c2fa5;" class="bi bi-palette-fill mt-2" viewBox="0 0 16 16">
                          <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07zM8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                        </svg>
                      </div>
                    </div>
                      </div>`

                    if(dades[i].position == 'todo'){
                      zonaTodo.innerHTML += cosNota
                    }else if(dades[i].position == 'doing'){
                      zonaDoing.innerHTML += cosNota
                    }else{
                      zonaDone.innerHTML += cosNota
                    }
                  }
                  addfunctions();
            } )
        } else {
            console.log("Error!");
        }
    })
    .catch((err) => {
        console.log("Error: ", err);
    })
} 

function newElement(){

    var zonaTodo = document.getElementById("todo");

        var aux = {

            "titol":"Titol de la tasca",
            "responsable":"Responsable",
            "contingut":"Breu explicació de la tasca a realitzar",
            "dataIni": dataact,
            "dataFin": dataact,
            "prioritat": "border-success",
            "position":"todo"
        };
       
        fetch(BaseUrl, 
        {
            method: "POST",
            body: JSON.stringify(aux),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                if(res.ok) {
                    res.json().then((res2) => {
                        const id = res2[0]._id;

                var cosNota = ` 
                <div class="tasca row align-items-start justify-content-lg-center" style="height: 275px;">
                <div id="primari" class="col-10 col-sm-10 col-md-10 col-lg-9 bg-info border border-info border-4" style="height: 100%">
                  <p id="num" hidden>`+id+` </p>
                  <p id="posi" hidden>todo</p> 
                  <p id="prioritat" hidden>`+aux.prioritat+`</p> 
                  <p id="titol" class="modif text-break fw-bold fs-5" contentEditable="false" >`+aux.titol+`</p>
                  <p id="nom" class="modif text-capitalize text-break fw-bold fs-5" contentEditable="false" >`+aux.responsable+`</p>
                  <p id="contingut" class="modif text-break fw-bold fs-6" contentEditable="false" >`+aux.contingut+`</p>
                  <br>
                  <label for="start" class="text-capitalize text-break fw-bold fs-6">Data Inici:</label>
                  <input class="modif" type="date" id="start" value="`+aux.dataIni+`">
                  <br>
                  <label for="finish" class="text-capitalize text-break fw-bold fs-6">Data Límit</label>
                  <input class="modif" type="date" id="finish" value="`+aux.dataFin+`">
                  </div>
                  <div id="secundari" class="opcions col-2 col-sm-2 col-md-2 col-lg-2 bg-transparent border border-info border-4" style="height: 100%">
                    <div class="save"> 
                      <svg xmlns="http://www.w3.org/2000/svg"  width="31px" height="31px" fill="currentColor" style="color:#00BE4F;" class="bi bi-save-fill mt-2" viewBox="0 0 16 16">
                        <path d="M8.5 1.5A1.5 1.5 0 0 1 10 0h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6c-.314.418-.5.937-.5 1.5v7.793L4.854 6.646a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l3.5-3.5a.5.5 0 0 0-.708-.708L8.5 9.293V1.5z"/>
                      </svg>
                    </div>
                    <div class="del"> 
                      <svg xmlns="http://www.w3.org/2000/svg" width="31px" height="31px" fill="currentColor" style="color:#E91E63;" class="bi bi-trash-fill mt-2" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                      </svg>
                    </div>
                    <div class="move"> 
                      <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" fill="currentColor" style="color:#FFAE00;" class="bi bi-arrow-right-square-fill mt-2" viewBox="0 0 16 16">
                        <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
                      </svg>
                    </div>
                    <div class="prio"> 
                      <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" fill="currentColor" style="color: #2c2fa5;" class="bi bi-palette-fill mt-2" viewBox="0 0 16 16">
                        <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07zM8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                      </svg>
                    </div>
                  </div>
                </div>`
            
                zonaTodo.innerHTML += cosNota;
                
                addfunctions();
                    })
                } else {
                    console.log("Error!");
                }})
                .catch((err) => {
                    console.log("Error: ", err);
                })    
}

function addfunctions(){
    //definim els botons per aplicar cada funció, del(eliminar), add(afegir al LocalStorage), move(modificar l'estat), prio(modificar prioritat), canvi(marcar a l'usuari que hi han canvis sense desar)
    var del = document.getElementsByClassName("del");
    var add = document.getElementsByClassName("save");
    var move = document.getElementsByClassName("move");
    var prio = document.getElementsByClassName("prio");
    var canvi = document.getElementsByClassName("modif");
    var i;

    for (i = 0; i < canvi.length; i++){

        canvi[i].onclick = function() {
        //seleccionem els elements que necesitem
        var containerNota = this.parentElement;
        var containerButtons = containerNota.nextElementSibling;
        //mirem quina prioritat té la nota
        var prio = containerNota.querySelector('#prioritat').innerHTML;
        this.contentEditable = true;

        //modifiquem el color per identificarla com a nota no desada
        containerNota.classList.remove(prio);
        containerNota.classList.add('border-info');
        containerNota.classList.remove('bg-transparent');
        containerNota.classList.add('bg-info');
        containerButtons.classList.remove(prio);
        containerButtons.classList.add('border-info');

        containerButtons.innerHTML = `
<div class="save"> 
<svg xmlns="http://www.w3.org/2000/svg"  width="31px" height="31px" fill="currentColor" style="color:#00BE4F;" class="bi bi-save-fill mt-2" viewBox="0 0 16 16">
    <path d="M8.5 1.5A1.5 1.5 0 0 1 10 0h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6c-.314.418-.5.937-.5 1.5v7.793L4.854 6.646a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l3.5-3.5a.5.5 0 0 0-.708-.708L8.5 9.293V1.5z"/>
</svg>
</div>
<div class="del"> 
<svg xmlns="http://www.w3.org/2000/svg" width="31px" height="31px" fill="currentColor" style="color:#E91E63;" class="bi bi-trash-fill mt-2" viewBox="0 0 16 16">
    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg>
</div>
<div class="move"> 
<svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" fill="currentColor" style="color:#FFAE00;" class="bi bi-arrow-right-square-fill mt-2" viewBox="0 0 16 16">
    <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
</svg>
</div>
<div class="prio"> 
<svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" fill="currentColor" style="color: #2c2fa5;" class="bi bi-palette-fill mt-2" viewBox="0 0 16 16">
    <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07zM8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
</svg>
</div>
</div>
</div>`;

    addfunctions();

    }

    } 
        //fem un recorregut per aplicar funcions pròpies de botonera a cada nota
    for(i = 0; i < add.length; i++){

    //creem la funció add(afegir al LocalStorage)
    add[i].onclick = function() {
        //escalem per l'element pare fins arribar a seleccionar la "nota" completament
        var containerButtons = this.parentElement;
        var nota = containerButtons.parentElement;
        var containerNota = nota.firstElementChild;
        //primer mirarem quina id té
        var iden = nota.querySelector('#num').innerHTML;
        //ara seleccionem el contingut del div
        var tit = nota.querySelector('#titol').innerHTML;
        var cont = nota.querySelector('#contingut').innerHTML;
        var pos = nota.querySelector('#posi').innerHTML;
        var res = nota.querySelector('#nom').innerHTML;
        var prio = nota.querySelector('#prioritat').innerHTML;
        var iniciD = nota.querySelector('#start').value;
        var finalD = nota.querySelector('#finish').value;
        
        //creem una estructura per guardar les dades seleccionades
        let aux = {
        "prioritat": prio,
        "titol": tit,
        "responsable": res,
        "contingut": cont,
        "position": pos,
        "dataIni": iniciD,
        "dataFin": finalD
        }
        

        fetch(BaseUrl + "/" + iden, 
{
    method: "PUT",
    body: JSON.stringify(aux),
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then((res) => {
        console.log(res);
        if(!res.ok) {

            console.log("Error!")
        }
    })
    .catch((err) => {
        console.log("Error: ", err);
    })


        //treiem l'estat "modificat" i tornem a deixar l'estat que tenia anteriorment
        containerNota.classList.remove('border-info');
        containerNota.classList.add(prio);
        containerNota.classList.remove('bg-info');
        containerNota.classList.add('bg-transparent');
        containerButtons.classList.remove('border-info');
        containerButtons.classList.add(prio);
        //tornem a afegir la botonera amb la mesura normal
        containerButtons.innerHTML = `
        <div class="save"> 
        <svg xmlns="http://www.w3.org/2000/svg"  width="31px" height="31px" fill="currentColor" style="color:#00BE4F;" class="bi bi-save-fill mt-2" viewBox="0 0 16 16">
            <path d="M8.5 1.5A1.5 1.5 0 0 1 10 0h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6c-.314.418-.5.937-.5 1.5v7.793L4.854 6.646a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l3.5-3.5a.5.5 0 0 0-.708-.708L8.5 9.293V1.5z"/>
        </svg>
        </div>
        <div class="del"> 
        <svg xmlns="http://www.w3.org/2000/svg" width="31px" height="31px" fill="currentColor" style="color:#E91E63;" class="bi bi-trash-fill mt-2" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
        </svg>
        </div>
        <div class="move"> 
        <svg xmlns="http://www.w3.org/2000/svg" width="31px" height="31px" fill="currentColor" style="color:#FFAE00;" class="bi bi-arrow-right-square-fill mt-2" viewBox="0 0 16 16">
            <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
        </svg>
        </div>
        <div class="prio"> 
        <svg xmlns="http://www.w3.org/2000/svg" width="31px" height="31px" fill="currentColor" style="color: #2c2fa5;" class="bi bi-palette-fill mt-2" viewBox="0 0 16 16">
            <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07zM8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
        </svg>
        </div>
    </div>
        </div>`;

        addfunctions();

    }

    del[i].onclick = function() {
        //seleccionem els elements necesaris i busquem la id de la nota
        var containerButtons = this.parentElement;
        var nota = containerButtons.parentElement;
        var iden = nota.querySelector('#num').innerHTML;
        //apliquem style none perque desaparegui de la vista de l'usuari
        nota.style.display = "none";

        fetch(BaseUrl + "/" + iden, 
{
    method: "DELETE",
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then((res) => {
        if(!res.ok) {
            console.log("Error!")
        }
    })
    .catch((err) => {
        console.log("Error: ", err);
    })

    addfunctions();
    }

    move[i].onclick = function (){
        //primer adquirim les dades que necesitem
        var containerButtons = this.parentElement;
        var nota = containerButtons.parentElement;
        var iden = nota.querySelector('#num').innerHTML;
        var tit = nota.querySelector('#titol').innerHTML;
        var cont = nota.querySelector('#contingut').innerHTML;
        var loc = nota.querySelector('#posi').innerHTML;
        var res = nota.querySelector('#nom').innerHTML;
        var prio = nota.querySelector('#prioritat').innerHTML;
        var iniciD = nota.querySelector('#start').value;
        var finalD = nota.querySelector('#finish').value;

        //mirem quina posició té actualment i guardem la seguent en una variable auxiliar.
        if (loc == 'todo'){
            locaux = 'doing';
        }else if(loc == 'doing'){
            locaux = 'done'
        }else{
            locaux = 'todo';
        }
        //creem l'estructura d'informació i tornem a guardar-ho al local storage.
        let aux = {
            "prioritat": prio,
            "titol": tit,
            "responsable": res,
            "contingut": cont,
            "position": locaux,
            "dataIni": iniciD,
            "dataFin": finalD
            }
    
            fetch(BaseUrl + "/" + iden, 
            {
                method: "PUT",
                body: JSON.stringify(aux),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                if(res.ok) {
                    res.json()
                        .then((res2) => {
                            window.location.reload();
                        })
                } else {
                    console.log("Error!")
                }
            })
            .catch((err) => {
                console.log("Error: ", err);
            })
            addfunctions();
    }

    prio[i].onclick = function () {
        /* 
        COLOR VERD = border-success
        COLOR GROC = border-warning
        COLOR VERMELL = border-danger*/
    
        //primer adquirim les dades que necesitem
        var containerButtons = this.parentElement;
        var nota = containerButtons.parentElement;
        var containerNota = nota.firstElementChild;
    
        var iden = nota.querySelector('#num').innerHTML;
        var tit = nota.querySelector('#titol').innerHTML;
        var cont = nota.querySelector('#contingut').innerHTML;
        var loc = nota.querySelector('#posi').innerHTML;
        var res = nota.querySelector('#nom').innerHTML;
        var prio = nota.querySelector('#prioritat').innerHTML;
        var iniciD = nota.querySelector('#start').value;
        var finalD = nota.querySelector('#finish').value;

    
            //mirem quina posició té actualment i guardem la seguent en una variable auxiliar.
        if (prio == 'border-success'){
            prio = 'border-warning';
            containerNota.classList.remove('border-success');
            containerNota.classList.add('border-warning');
            containerButtons.classList.remove('border-succes');
            containerButtons.classList.add('border-warning');
    
        }else if(prio == 'border-warning'){
            prio = 'border-danger';
            containerNota.classList.remove('border-warning');
            containerNota.classList.add('border-danger');
            containerButtons.classList.remove('border-warning');
            containerButtons.classList.add('border-danger');
            
        }else{
            prio = 'border-success';
            containerNota.classList.remove('border-danger');
            containerNota.classList.add('border-success');
            containerButtons.classList.remove('border-danger');
            containerButtons.classList.add('border-success');
        }
    
                    //creem l'estructura d'informació i tornem a guardar-ho al local storage.
                    let aux = {
                    "prioritat": prio,
                    "titol": tit,
                    "responsable": res,
                    "contingut": cont,
                    "position": loc,
                    "dataIni": iniciD,
                    "dataFin": finalD
                    }
            
                    fetch(BaseUrl + "/" + iden, 
                    {
                        method: "PUT",
                        body: JSON.stringify(aux),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then((res) => {
                        if(res.ok) {
                            res.json()
                                .then((res2) => {
                                    window.location.reload();
                                })
                        } else {
                            console.log("Error!")
                        }
                    })
                    .catch((err) => {
                        console.log("Error: ", err);
                    })
    }
}
}