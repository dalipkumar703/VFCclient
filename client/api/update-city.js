export default async function updateUser(city){

  try {
     let response = await fetch('http://localhost:3001/update-city',{
       method:'POST',
       headers: {
        'Accept':"application/json",
     'Content-Type':"application/json"
  },
  body: JSON.stringify(city)
});
     let responseJson = await response.json();
      console.log("res:",responseJson);
     return responseJson;
   } catch(error) {
     console.error(error);
   }
}
