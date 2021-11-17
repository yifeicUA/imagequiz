let getFlowers = () => {
    return fetch("https://yifeicua-imagequiz-backend.herokuapp.com/flowers").then((x) => {
        let y = x.json();
        console.log(y);
        return y;
    });

}



let api = {
    getFlowers: getFlowers,
}

export default api;