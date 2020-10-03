
const fields = retrieveTags(".js--field");
const details = retrieveTags(".js--detail");


for (let detail of details) {
    detail.classList.add("hide");
}

for (let field of fields) {
    field.addEventListener("input", () => {
        for (let detail of details) {
            if (detail.classList.contains("hide")) {
                detail.classList.remove("hide");
            }
        }
        calcDetails();
    });
}

fields[1].addEventListener("input", function() {
    details[0].textContent = `${this.value}%`;
});

fields[2].addEventListener("input", function() {
    if (this.value === "1") {
        details[3].textContent = `${this.value} person`;
    } else {
        details[3].textContent = `${this.value} people`;
    }    
});


function retrieveTags(name) {
    return Array.from(document.body.querySelectorAll(name))
}

function calcDetails() {
    const bill = parseFloat(fields[0].value);
    const tip = bill * (parseInt(fields[1].value) / 100);
    const split = parseInt(fields[2].value);

    const total =  bill + tip;
    const billEach = total / split;
    const tipEach = tip / split;

    validateInput(details, 1, tip);
    validateInput(details, 2, total);
    validateInput(details, 4, billEach);
    validateInput(details, 5, tipEach);
}

function validateInput(arr, i, name) {
    arr[i].textContent = String(name) === "NaN" ? "$ 0.00" : `$ ${name.toFixed(2)}`;
}