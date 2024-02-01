const inputfields = document.querySelector('.input-fields')
const output = document.querySelector('.output')

let inputShow = true

function TextEditor(element){
  const newEditor = ClassicEditor
  .create(element,{})
  return newEditor
}

let carerobj;
TextEditor(inputfields["objective"]).then(Editor=>{
    carerobj=Editor
})
let Academic;
TextEditor(inputfields["academics"]).then(Editor=>{
  Academic = Editor
})
let Skills;
TextEditor(inputfields["technicalskills"]).then(Editor=>{
    Skills=Editor
})
let Softskills;
TextEditor(inputfields["softskills"]).then(Editor=>{
    Softskills=Editor
})
let Certificates;
TextEditor(inputfields["certifications"]).then(Editor=>{
    Certificates=Editor
})
let Contact;
TextEditor(inputfields["contact"]).then(Editor=>{
    Contact=Editor
})
let Strengths;
TextEditor(inputfields["strengths"]).then(Editor=>{
    Strengths=Editor
})
let Hobbies;
TextEditor(inputfields["hobbies"]).then(Editor=>{
    Hobbies=Editor
})
let Interests;
TextEditor(inputfields["interests"]).then(Editor=>{
    Interests=Editor
})
let Languages;
TextEditor(inputfields["languages"]).then(Editor=>{
    Languages=Editor
})
let Declaration;
TextEditor(inputfields["declaration"]).then(Editor=>{
    Declaration=Editor
})



function toggle(){
    if(inputShow){
         inputfields.style.display = "none"
         inputShow = false 
         output.innerHTML=`
         <div class="main">
         <div class="left">
             <br/>
             <div class="picture"><img src="./pic.1.jpg"></div>
             <br/>
             <div class="box">
                 <div class="heading">
                     <h1>PROFILE</h1>
                 </div>
                 <h3 class="p1">${Contact.getData()}</h3>
             </div>
             <br/>
             <div class="box">
                 <div class="heading">
                     <h1>TECHNICAL SKILLS</h1>
                 </div>
                 
                 <h3 class="p1">${Skills.getData()}</h3>
             </div>
             <br/>
             <div class="box">
                 <div class="heading">
                     <h1>SOFT SKILLS</h1>
                 </div>
                 <h3 class="p1">${Softskills.getData()}</h3>            
             </div>
             <br/>
             <div class="box">
                 <div class="heading">
                     <h1>CERTIFICATIONS</h1>
                 </div>
                 <h3 class="p1">${Certificates.getData()}</h3>           
             </div>
             <br/>
             <div class="box">
                 <div class="heading">
                     <h1>LANGUAGES KNOWN</h1>
                 </div>
                 <h3 class="p1">${Languages.getData()}</h3>           
             </div>
         </div>
     
         <div class="right">
             <div class="name">
                 <h1 class="bsk">${inputfields["name"].value}</h1>
                 <h3 class="role">${inputfields["title"].value}</h3>
             </div>
             <br/>
             <div class="box">
                 <div class="headingryt">
                     <h2>CAREER OBJECTIVE:</h2>
                 </div>
                 <p class="p1">${carerobj.getData()}</p>
             </div>
             <br/>
             <div class="box">
                 <div class="headingryt">
                     <h2>EDUCATIONAL QUALIFICATIONS:</h2>
                 </div>
                 <h3 class="p1">${Academic.getData()}</h3>
             </div>
             <br/>
             <div class="box">
                 <div class="headingryt">
                     <h2>STRENGTHS:</h2>
                 </div>
                 <h3 class="p1">${Strengths.getData()}</h3>
             </div>
             <br/>
             <div class="box">
                 <div class="headingryt">
                     <h2>INTERESTS:</h2>
                 </div>
                 <h3 class="p1">${Interests.getData()}</h3>
             </div>
             <br/>
             <div class="box">
                 <div class="headingryt">
                     <h2>HOBBIES:</h2>
                 </div>
                 <h3 class="p1">${Hobbies.getData()}</h3>
             </div>
             <br/>
             <div class="box">
                 <div class="headingryt">
                     <h2>DECLARATION:</h2>
                 </div>
                 <p class="p1">${Declaration.getData()}</p>
             </div>
             <br/>
             <p class="sign">${inputfields["name"].value}<br/>(Signature)</p>
         </div>
        </div>
        <div class="btn">
              <button onclick="print()">Print Resume</button>
        </div>
         `
    }else{
        inputfields.style.display =  "block"
        inputShow = true
        output.innerHTML=""
    }
}