

function printer(event)
{
    event.preventDefault();
//getting value from input
var Name=document.getElementById('name').value;
let emailID=document.getElementById('email').value;
let Phone=document.getElementById('phone').value;
let linkedIn=document.getElementById('linkedin').value;
let gitHub=document.getElementById('github').value;
let college=document.getElementById('college').value;
let dept=document.getElementById('field').value;
let date=document.getElementById('graduation').value;
let job=document.getElementById('job-title').value;
let companyName=document.getElementById('company').value;
let month=document.getElementById('job-duration').value;
let role=document.getElementById('job-description').value;
let project=document.getElementById('project-title').value;
let projectDescription=document.getElementById('project-description').value;
let projectFeatures=document.getElementById('project-features').value;
let Skill1=document.getElementById('skills1').value;
let Skill2=document.getElementById('skills2').value;
let Skill3=document.getElementById('skills3').value;
let Skill4=document.getElementById('skills4').value;

let formData = {
    Name,
    emailID,
    Phone,
    linkedIn,
    gitHub,
    college,
    dept,
    date,
    job,
    companyName,
    month,
    role,
    project,
    projectDescription,
    projectFeatures,
    Skill1,
    Skill2,
    Skill3,
    Skill4
};
localStorage.setItem('formData', JSON.stringify(formData));

// Redirecting to the resume page
window.location.href = 'resume1.html';


}

function printDoc(DivId)
{
    var division=document.getElementById(DivId).innerHTML;
    var original=document.body.innerHTML;

    document.body.innerHTML=division;
    window.print();
    document.body.innerHTML=original;
}