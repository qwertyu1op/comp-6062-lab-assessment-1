const studentFullName="Nihal Brarath";
const studentNumber=1163212;
const result= `${studentFullName} - ${studentNumber}`;

console.log(result);


const headerContent=document.querySelector("h1");

headerContent.innerHTML=result;

headerContent.classList.add("headingPrimary");
