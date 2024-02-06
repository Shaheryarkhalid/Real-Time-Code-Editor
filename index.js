function Render()
{
    let HTML=document.getElementById("HTML").value;
    let CSS=document.getElementById("CSS").value;
    let JavaScript=document.getElementById("JavaScript").value;
    if(HTML){ document.getElementById("render").contentDocument.body.innerHTML=HTML;}
    if(CSS){  document.getElementById("render").contentDocument.head.innerHTML="<style>"+CSS+"</style>";}
    if(JavaScript){ document.getElementById("render").contentWindow.eval(JavaScript)}
}
var HTML = document.getElementById('HTML');
var CSS_ = document.getElementById('CSS');
var JavaScript = document.getElementById('JavaScript');
function handleTabKey(event) {
    if (event.keyCode === 9) {
        event.preventDefault();
        document.execCommand('insertText', false, '\t');
    }
}
HTML.addEventListener('keydown', handleTabKey);
CSS_.addEventListener('keydown', handleTabKey);
JavaScript.addEventListener('keydown', handleTabKey);


