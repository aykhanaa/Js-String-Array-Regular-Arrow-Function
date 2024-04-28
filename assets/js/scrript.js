"use strict"

// let person = {
//     name:"Nurlan",
//     surname: "Umudov",
//     age:22
// }

// let datas = [
//     {
//         name: "Fatime",
//         surname: "Qayxanova",
//         groups: [
//             "PB101",
//             "P314"
//         ],
//         teachers: [
//             "Cavid",
//             "Hemid"
//         ]
//     },
//     {
//         name: "Fexriyye",
//         surname: "Tagizade",
//         groups: [
//             "PB101"
//         ],
//         teachers: [
//             "Cavid",
//         ]
//     },
//     {
//         name: "Afide",
//         surname: "Veliyeva",
//         groups: [
//             "PB101",
//             "P312"
//         ],
//         teachers: [
//             "Cavid",
//             "Elcin"
//         ]
//     }
// ]

// console.log(datas);


// let fullname = "Tagizade Fexriyye";

// console.log(surname.length);

// console.log(surname.toLowerCase());

// console.log(surname.toUpperCase());

// console.log(surname.trim());

// console.log(surname.startsWith("t"));

// console.log(surname.indexOf("a"));

// console.log(surname.lastIndexOf("a"));

// console.log(surname.substring(0,3))

// for (let i = 0; i < surname.length; i++) {
//     const element = surname[i];
// }
// console.log(element);

// console.log(surname.includes("t".toUpperCase));

// let array = surname.split();

// console.log(array);

// console.log(surname.charAt("0"));

// console.log(surname.charCodeAt("T"));

// console.log(surname.charCodeAt("T"));

// console.log(surname.slice(1,3));

// console.log(surname.replace("Azerbaycan","Italya"));

// let nums  = [1,4,5,6,7,8,8];

// for (const item of nums) {
//     console.log(item); 
// }

// let person = {
//     name:"Nurlan",
//     surname: "Umudov",
//     age:22
// }

// for (const key in person) {
//     if (key == "name"|| key =="surname"){
//         console.log(person[key]);
//     } 
// }

// let nums  = [1,4,5,6,7,8,8];

// nums.forEach((element,i)=> {
//     console.log(element + " " +i)
// });

// let data = nums.toString();

// nums.pop();

// nums.push(100);

// nums.shift();

// nums.unshift(500);

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// const myChildren = myGirls.concat(myBoys);


// console.log(myChildren);

// let adress = "Ehmedli";

// let result = [...adress];

// console.log(result);

// let obj = {
//     name:"test",
//     surname:"testov"
// }

// let data = {...obj};

// console.log(data);

// let nums  = [1,4,5,6,7,8,8];

// let datas = [...nums];

// console.log(datas);

// showText();

// function showText(){
//     let a = 100;

//     if(a > 50){
//         console.log("Hellow world");
//     }
// }



// function showText(text){
//    console.log(text);
// }

// showText("salamlar");

// function  sum(a,b){
// let result = a+b;
// return;
// console.log(result);
// }

// sum(100,200)

// let datas = [1,2,100,5,600,9,90]

// function findData(arr){
//     for(const item of arr) {
//         if(item == 100){
//             console.log("100 already found");
//             return;
//         }
//     }
// }

// findData(datas)

// function sum(a,b){
//     return a+b
// }
// let result = sum (4,5);

// console.log(result);

// function test(){
//     let datas = [1,2,100,5,600,9,90]
//     let newArr = ["salam","sagol"];
//     datas = newArr;

//     newArr[0] = 100;

//     console.log(datas);

//     console.log(newArr);
// }





// test(datas);
 
// console.log(datas);

// let arr1 = [1,2,3];

// let arr2 = arr1;
// arr2[0] = 100;

// console.log(arr1);
// console.log(arr2); 

// let b = 100;

// function test (a){
//    a = 20;
//     console.log(a);
// }

// test(b);
 
// console.log(b);

// function test(a,... datas){
    // for (let i = 0; i < datas.length; i++) {
    //     const element = datas[i];
    //     console.log(element);
    // }

//     datas.forEach(element => {
//         console.log(element);
//     });
// }
// test(1,2,3,4,5)


// function test() { 
//     for (let i = 0; i < datas.length; i++) {
//                 const element = datas[i];
//                 console.log(element);
//         }
// }
// test(1,2,3,4,5)

// console.log(this);

 

// function showNumber(){
//     console.log(this);
// }
// showNumber();

// const showText = ()=>{
//     console.log(this);
// }

// showText('Nesir');

// let student = {
//     name:"Reshad",
//     surname:"Agayev",
//     age:21,
//     address:"Nefciler",
//     getFullName:function(){
//         console.log(this.name + " " +this.surname);
//     },
//     getFullData:()=>{
//         console.log(this.name + " " +this.surname);
//     }
// }
// student.getFullName();
// student.getFullData();

// const test = () => {
//     for (let i = 0; i < argumets.length; i++) {
//         const element = argumets[i];
//         console.log(element);
//     }
// }
// test(1,2,3);
 
// function test(){
//     for (let i = 0; i < arguments.length; i++) {
//         const element = arguments[i];
//         console.log(element)
//     }
// }
// test(1,2,3);

// this.alert();




/////////////////////////////////////////////////////////////////////HomeWork////////////////////////////////////////////////////////////////////////






// 1) Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.

// function divisonNum(){
//      let n=21;

//     if(n%3==0 && n%7==0){
//     console.log("Bolunur")
// }
// else{
//     console.log("Bolunmur")
// }
// }

// divisonNum();



//2) Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir.

// function factorialNum(n){
//     let result = 1;
   
//         for(let i =n;i>0;i--){
            
//             result*=i
//         }
//         return result;
//     }

// console.log(factorialNum(5)); 



//3) Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.

// function SumofSquareNum() {
//     let arr = [1,2,4,5,6]//4+16+36
//     let sum = 0;
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//         sum += arr[i] * arr[i];
//       }                                                                                                         
//     }
//     return sum;
//   }

//   console.log(SumofSquareNum()); 



// 4) Funtiona-a  mail ve password gelir. Mail beraberdirse cavid@code.edu.az -a ve password beraberdirse 12345 -e, 
// ekranda "Girish olundu" yazilsin, eks halda "Mail ve yaxud password sehvdir" yazilsin. 

// function checkSingIn(){
//     let email = "cavid@code.edu.az";
//     let password = "12345";

//     if(email==="cavid@code.edu.az" && password==="12345"){
//         console.log("Girish olundu");
//     }
//     else
//     {
//         console.log("Mail ve yaxud password sehvdir");
//     }
// }
// checkSingIn();



//5) Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir.

// function sumOddNum(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 ==1) {
//             sum += array[i];
//         }
//     }
//     return sum;
// }
// console.log(sumOddNum([1,2,3,4,5,7]));



// 6) Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.

// function countEvenNum(array){
//     let count = 0;
//     for (let i = 0; i < array.length; i++) {
//         if(array[i]%2==0){
//             count++;
//         }
        
//     }
//     return count;
// }
// console.log(countEvenNum([1,2,3,4,5,6,8])); 



// 8) Icerisinde name, surname, age, email olan bir nece student objectleriniz var. 
// Ashagida elave etdiklerimi functionlar sekilinde yazin,functionlar objectlerden ibaret array qebul edecek.
//      1) Yashi 18-25 araliginda olan telebelerin sayi.
//      2) Emailinde "c" herfi olan studentlerin sayi.


// let students = [
//     { name: 'Reshad', surname: 'Agayev', age: 22, email: 'reshad@gmail.com' },
//     { name: 'Nazim', surname: 'Hesenov', age: 17, email: 'nazim@lode.edu.az' },
//     { name: 'Mirze', surname: 'Qasimov', age: 25, email: 'mirze@gmail.com' },
//     { name: 'Behruz', surname: 'Eliyev', age: 19, email: 'behruz@gmail.com' },
//     { name: 'Fuad', surname: 'Siriyev', age: 24, email: 'fuad@lode.edu.az' }
// ];


// function countStudentsAge(students) {
//     let count = 0;
//     for (let student of students) {
//         if (student.age >= 18 && student.age <= 25) {
//             count++;
//         }
//     }
//     return count;
// }

// function countStudentsWithEmail(students) {
//     let count = 0;
//     for (let student of students) {
//         if (student.email.includes('c') || student.email.includes('C')) {
//             count++;
//         }
//     }
//     return count;
// }

// let ageCount = countStudentsAge(students);
// let emailCount = countStudentsWithEmail(students);

// console.log(ageCount);
// console.log(emailCount);



// 9) Function yazacaqsiz, Functiona parametr olaraq string gelecek.
//  Hemin function gelen parametrin ilk herfini boyuk herf edib geri qaytarsin.

// function firstIndexToUp(string)
// {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }

// const text = "hello"
// const result = firstIndexToUp(text)
// console.log(result);
