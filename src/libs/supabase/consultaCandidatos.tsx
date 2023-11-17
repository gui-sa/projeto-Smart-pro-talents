import { supabase } from ".";

const consultaCanditato = supabase
  .from('countries')
  .select()

consultaCanditato.then((data)=>{
    console.log(data)
})
