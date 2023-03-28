const banhmi = ["bánh mì chả, bánh mì trứng"]
const html = getDropdown(countries);
function banhmi(banhmi){
    console.log(banhmi)
    let chon =  `<option value="">Please select</option>`
    countries.forEach(function(banhmi) {
        chon += `<option value="">${banhmi}</option>`
    })
    return chon
}

const select = document.querySelector("#banhmi")
select.innerHTML = chon;