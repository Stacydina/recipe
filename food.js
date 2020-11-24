const APP_ID = '4b569930';
const APP_KEY =  '5c2831f321fb9ede1edd9bd581e059b9';

const recipe = async ()=> {
const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10&calories=591-722&health=alcohol-free`;

  const response = await fetch(url);

  if (response.status != 200){
      throw new Error('Cannot fetch data,');
  }
  const data = await response.json();
  return data;
  
  }
  
 recipe()
 .then(data=> {
 // console.log( 'resolved', data.hits)
  let table = document.createElement("table");
      let thead = document.createElement("thead");
      let trow = document.createElement("tr");
      thead.appendChild(trow);
      table.appendChild(thead);
      // let overallTable = "";
      // overallTable += `${data.hits[0].recipe.label}
      //   ${data.hits[0].recipe.calories}`;
      for (let i = 0; i < (`${data.hits.recipe}`).length; i++) {
        //console.log(i);
        let trow = document.createElement("tr");
        
        let td = document.createElement("td");
        td.appendChild(document.createTextNode(`${data.hits[i].recipe.label}`));
        trow.appendChild(td);
        td = document.createElement("td");
        td.appendChild(document.createTextNode(`${data.hits[i].recipe.calories}`));
        trow.appendChild(td);
        table.appendChild(trow);
      }
      //console.log(overallTable);

     // document.getElementById("app").innerHTML = overallTable;
      document.getElementById("table").appendChild(table);
      
  }) 
  .catch( err => console.log('rejected:', err.message));
  
  
    

      // const tableData = [{
      //   meal: ` ${data.recipe.label}`,
      //   calories: `${data.recipe.calories}`
      // }];
    //   const { recipe: [ { table: tableData } ] } = data;
    //   const rowDataHTML = tableData.reduce(
    //     (html, { meal ,calories }) => html += `
    //       <tr>
    //         <td>${meal}</td>
    //         <td>${calories}</td>
    //      </tr>
    //     `, '');
   


    
