// function getArea(w,h){
//     return w * h
// }
//     let dt = getArea(3,2)
// console.log(dt)
// let getArea = function(w,h) {
//     return w * h;
// }
// let dt = getArea(2,8)
// console.log(dt)

    //ARROW

// let getArea = (w,h) =>{
//     return w * h
// }
// let dt = getArea(3,5)
// console.log(dt)

// let getArea = (w,h) => w * h
// let dt = getArea(3,3)
// console.log(dt)

    //ĐỆ QUY

// function pow(x,n){
//     let result = 1;
//     for(let i=1;i<n;i++){
//     result = result * x
// }
// return result
// }

// let pow = (x,n) =>{
//     if(n==1){
//         return x
//     } else {
//         return x * pow(x,n-1)
//     }
// }
// console.log(pow(2,3))
// document.writeln(`<h2>the result is ${pow(2,4)}</h2>`)

    //CLOSURE
// function shortName(firstname,lastname){
// let intro = 'welcome'
// function makeFullName() {
//     return `${intro} ${firstname} ${lastname}`
// }
// return makeFullName()
// }
// let fullName = shortName('Duc','Manh')
// document.writeln(`${fullName}`)

    //FACTORY
// function makeAdder(x){
//     return function(y){
//         return x + y
//     }
// }
// let add5 = makeAdder(5)
// let add2 = makeAdder(2)

// let tong = add5(3)
// let tong1 = add2(9)

// document.writeln( `<p>tong la ${tong}</p>`)
// document.writeln(`<p>tong la ${tong1}</p>`)
const countries = ["Netherlands", "Japan", "Mongolia"]; 
const getDropdown = (countries) => {    
    console.log(countries); // [Netherlands, Japan, Mongolia]
    let html = `<option value="">Please select</option>`
    countries.forEach(country => {
         html += `<option value="">${country}</option>`
    });
    return html
}


