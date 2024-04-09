function injectEditor() {
  const editorHTML = `<div style="position:fixed;top:0;left:0;height:100vh;width:100%;z-index:1000;background:transparent;">
  <div style="position:absolute;top:0;left:0;width:100px;height:calc(100vh - 100px);background:rgba(255,255,0,0.8);display:flex;align-items:center;justify-content:center;"><h1 style="color:white;">LEFT</h1></div>
   <div style="position:absolute;top:0;right:0;width:100px;height:calc(100vh - 100px);background:rgba(0,255,255,0.8);display:flex;align-items:center;justify-content:center;"><h1 style="color:white;">Right</h1></div>
    <div style="display:flex;align-items:center;justify-content:center;height:100px;width:100%;background:white;position:absolute;bottom:0;left:0;"><h1 style="color:black;">BOTTOM SECTION HERE</h1></div>
  </div>`;

  const currentEditor = document.querySelector("#ab-editor");

  if (currentEditor) document.body.removeChild(currentEditor);

  const div = document.createElement("div");
  div.id = "ab-editor";
  div.innerHTML = editorHTML;

  document.body.appendChild(div);
}

// console.log(window.location.href.includes("permar"));
// injectEditor();

if (window.location.href.includes("permar")) injectEditor();
