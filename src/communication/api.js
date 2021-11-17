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
    .then((x)=> x.map((y) => {
        return{
            picture: y.picture,
            choices: y.choices.split(","),
            answer: y.answer,
        };
    })
    
    )
}

let api = {
    getFlowers: getFlowers,
    getQuiz: getQuiz
}

export default api;