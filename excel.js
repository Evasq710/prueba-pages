var selectedFile;
var input_file = document.getElementById('input')
input_file.addEventListener("change", (event) => {
    selectedFile = event.target.files[0];
})

document.getElementById('button').addEventListener("click", () => {
    if(selectedFile){
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(selectedFile);
        fileReader.onload = (event)=>{
         let data = event.target.result;
         let workbook = XLSX.read(data,{type:"binary"});
         workbook.SheetNames.forEach(sheet => {
              let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
              rowObject = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
              document.getElementById("jsondata").innerHTML = JSON.stringify(rowObject,undefined,4)
         });
        /*
         let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets["Datos recopilados"]);
         rowObject = XLSX.utils.sheet_to_json(workbook.Sheets[1]);
         document.getElementById("jsondata").innerHTML = JSON.stringify(rowObject,undefined,4)
         */
        }
    }
});