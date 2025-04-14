const form=document.getElementById("form");
const rowElement=document.getElementById("row");
const colElement=document.getElementById("col");
const btnElement=document.getElementById("submitBtn");
const tableElement=document.getElementById("tableContent");

let rows=0;
let cols=0;

rowElement.addEventListener('change',(e)=>{
 rows=e.target.value;
});

colElement.addEventListener('change',(e)=>{
    cols=e.target.value;
});

function createTable(){
    //Clear the existing table
    tableElement.innerHTML='';

    //Now create new table
    const table=document.createElement("table");
    for(let i=0;i<=rows;i++){
       const rowElement=document.createElement("tr");
      
       for(let j=1;j<=cols;j++){
         const tableCellELement= i==0 ? document.createElement("th") : document.createElement("td");
         tableCellELement.textContent= i==0 ? `Column ${j}` : `Row ${i} Column ${j}`;
         rowElement.appendChild(tableCellELement);
       }
       table.appendChild(rowElement);
   
    }
    tableElement.appendChild(table);
    
    form.reset();
}

form.addEventListener('submit',(e)=>{
 e.preventDefault();
 createTable();

});