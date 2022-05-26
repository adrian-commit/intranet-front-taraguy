import React from "react";
import { HotTable, HotColumn } from "@handsontable/react"
import { registerAllModules } from "handsontable/registry"

import "handsontable/dist/handsontable.full.css"

registerAllModules();


function Tareas() {
    const [usuarios, setUsuarios] = React.useState([]);

    const hotTableComponent = React.useRef(null);

    React.useEffect(() => {
      function getData() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setUsuarios(data));
      }
    getData();
  
  
    }, []);

const descargarArchivo = () => {

const pluginDescarga = 
  hotTableComponent.current.hotInstance.getPlugin("exportFile");

pluginDescarga.downloadFile("csv", { 
  filename: "usuarios",
  fileExtension: "csv",
  nimeType: "text/csv",
  columnHeaders: true,
}); 
};
    
    return (
        <div>
        <h1> Historial / Tareas </h1>
        <p> Detalle de Tareas </p>
        <button onClick={() => descargarArchivo()}>Descargar Archivo</button>
        {usuarios &&
        
        <HotTable
       ref={hotTableComponent}
        data={usuarios}
        licenseKey="non-commercial-and-evaluation"
        colHeaders={true}
        rowHeaders={true}
        columnSorting={true}
       
       
        >
          <HotColumn data="name" title="NOMBRE"/>
          <HotColumn data="username" title="APELLIDO"/>
          <HotColumn data="email" title="EMAIL"/>
          <HotColumn data="address.street" title="DIRECCION"/>
          <HotColumn data="address.city" title="CIUDAD"/>
        </HotTable>
        }
       
        </div>
    )
}

export default Tareas;