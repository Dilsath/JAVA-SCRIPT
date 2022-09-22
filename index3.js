// geting a document from html file and create an element and styling 
 



const doc=window.document;
const div=doc.createElement("div");
const body=doc.body;

body.style.display="flex";
body.style.justifyContent="center";
body.style.alignItems="center";
body.style.height="100vh";

div.style.height="100px";
div.style.width="100px";
div.style.backgroundColor="blue"

body.appendChild(div);