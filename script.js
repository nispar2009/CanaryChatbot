ask = () => {
    const q = getInput("q")
    if (q != "+") {
        setValue("ans", "")
        let answers = []
        for (const iterator of Object.keys(localStorage)) {
            if (q.toLowerCase().includes(iterator.toLowerCase())) {
                answers.push(localStorage.getItem(iterator))
            }
        }
        for (const iterator of answers) {
            document.getElementById("ans").innerHTML += `${iterator} `
        }

        if (answers.length == 0) {
            setValue("ans", "Sorry, there are no matches for your search")
        }
    } else {
        const kw = prompt("Enter a keyword below.")
        const ans = prompt("Enter the answer below.")
        localStorage.setItem(kw, ans)
    }
}