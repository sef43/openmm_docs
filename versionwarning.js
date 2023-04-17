/* -*- js -*-
 * versionwarning.js
 add this line to a page for this version warning to show:
 <script>var script = document.createElement("script"); script.type = "text/javascript"; script.src = "/versionwarning.js"; document.head.appendChild(script);</script>
 */



 let versionUrl="/versions.json"
 let versionPage="/all_versions.html"
 
 async function getJson(url) {
     let response = await fetch(url);
     let data = await response.json()
     return data;
 }
 
 async function main(){
     jsondata = await getJson(versionUrl)
     latest_version = jsondata.latest
     jsondata.versions.forEach((element) => {
         console.log(element.version)
     })   
 
     console.log(latest_version)
     pathname=location.pathname
     console.log(pathname)
     if ( !(pathname.includes("development") || pathname.includes("latest") || pathname.includes(latest_version))){
 
         body = document.getElementsByClassName('body')[0];
         msg = "this documentation is for an old release of OpenMM, you can change to a different version <a href="+versionPage+">here</a>."
         newHTML = '<div style="padding: 1em; border: 1px solid red; background: pink;" class="versionwarning">' + msg + '</div>'
         body.insertAdjacentHTML('afterBegin', newHTML)
 
     }
 }
 
 main()
 
 