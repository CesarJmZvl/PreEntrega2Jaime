const fetchSimulation = (dataBase, time) => {
    return new Promise((resolve, reaction) => {
        setTimeout(() => {
            resolve(dataBase);
            reaction(new Error("Something went wrong"))
        }, time)
    })
}

export default fetchSimulation;