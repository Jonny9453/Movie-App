

export async  function getmovies() {
   
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWE1NTcwOTBhMzZjNTRlM2NhNzNlZjljMTNjY2ZkOSIsInN1YiI6IjY0NDEyODY5YjNmNmY1MDQ5YzlkNjBlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rUjHWbQEg4GYMZfnoJgnJXWUKDU6oSg2OwHWaczQuGY'
        }
      };
    const res =await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
    if(!res.ok){
        throw{
            message:"Failed to fetch vans",
            statusText:res.statusText,
            status:res.status
        }
    }
    const data=await res.json();
    
    
  return data
  
}
