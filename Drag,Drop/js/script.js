//#region Yoxlama

// let forms = document.forms.Adform;

// input1.addEventListener("change", (e) => {
//   e.preventDefault();

//   let label1 = document.querySelector("#first-input-label");
//   let img = document.createElement("img");
//   img.classList.add("img");

//   let file = [...input1.files];
//   // console.log(file);
//   let imagefile = file[0];

//   let fr = new FileReader();
//   // console.log(fr);
//   fr.readAsDataURL(imagefile);

//   fr.onloadend = () => {
//     img.src = fr.result;
//   };

//   label1.innerHTML = "";
//   label1.appendChild(img);
// });
//#endregion

//#region Task-1
//Task - 1;
// let imageDiv1 = document.getElementById("image-1");
// let imageDiv2 = document.getElementById("image-2");
// let image1 = document.querySelector(".image-1 img");
// let image2 = document.querySelector(".image-2 img");

// let allow = (e) => {
//   e.preventDefault();
// };

// let dragMove = (e) => {
//   let element = e.target.id;

//   e.dataTransfer.setData("text", element);
// };

// let allowDrop = (e) => {
//   let element = document.getElementById(e.dataTransfer.getData("text"));

//   var srcParent = element.parentNode;

//   console.log(srcParent);
//   var currentElement = e.currentTarget.firstElementChild;

//   console.log(currentElement);
//   e.currentTarget.replaceChild(element, currentElement);
//   srcParent.appendChild(currentElement);
// };

// image1.addEventListener("dragstart", (e) => {
//   dragMove(e);
// });
// imageDiv1.addEventListener("dragover", (e) => {
//   allow(e);
// });
// imageDiv1.addEventListener("drop", (e) => {
//   allowDrop(e);
// });
// image2.addEventListener("dragstart", (e) => {
//   dragMove(e);
// });
// imageDiv2.addEventListener("dragover", (e) => {
//   allow(e);
// });
// imageDiv2.addEventListener("drop", (e) => {
//   allowDrop(e);
// });
//#endregion

//#region Task-2

let wrapped = document.getElementById("wrapped");
let img = document.getElementById("image");
let drag = document.getElementById("drag");
let allow = (e) => {
  e.preventDefault();
};
let drop = (e) => {
  let img = document.createElement("img");
  img.style.width = "100%";
  img.style.height = "250px";

  let files = [...e.dataTransfer.files];
  let imagefile = files[0];

  let fr = new FileReader();

  fr.readAsDataURL(imagefile);

  fr.onloadend = () => {
    img.src = fr.result;
    drag.innerHTML = "";
    drag.append(img);
  };
};
//#endregion
