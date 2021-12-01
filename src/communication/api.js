const baseURL ="https://yifeicua-imagequiz-backend.herokuapp.com";

let getFlowers = () => {
    return fetch(`${baseURL}/flowers`).then((x) => {
        let y = x.json();
        console.log(y);
        return y;
    });
}

let getQuiz = (name) =>{
    return fetch(`${baseURL}/quiz/${name}`)
    .then((x) => x.json())
    /*
    .then(x => {
        if (x.status == 401) {
            window.location.replace("/login");
        } 
    })
    */
    .then((x)=> x.map((y) => {
        return{
            picture: y.picture,
            choices: y.choices.split(","),
            answer: y.answer,
        };
    })
    
    )
    
}

let setUser = (name, email, password) =>{
    return fetch(`${baseURL}/register`,{
        method: "POST",
        body: JSON.stringify({name,email,password}),
        headers:{
            "Content-Type": "application/json",
        },
    });
}
let getUser = (email, password) =>{
    return fetch(`${baseURL}/login`,{
        method: "POST",
        body: JSON.stringify({email,password}),
        headers:{
            "Content-Type": "application/json",
        },
    });
}


let api = {
    getFlowers: getFlowers,
    getQuiz: getQuiz,
    setUser: setUser,
    getUser: getUser
}

export default api;