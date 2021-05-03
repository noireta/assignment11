async function facuser(empdata_file){
    try{
      
const response = await fetch(empdata_file); 
let  employees = await response.json();
return employees;

}catch(error){
  
    return null;
}


}
