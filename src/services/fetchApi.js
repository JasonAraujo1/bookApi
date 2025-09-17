export async function fetchApiTitle(){
    try{
        const res = await fetch(`https://openlibrary.org/search.json?title=the+lord+of+the+rings`)
        const data = await res.json()
        return data
    }
    catch(error){
        console.log("erro no fetch title", error)
    }
}