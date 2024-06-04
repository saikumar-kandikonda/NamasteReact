const heading= React.createElement("h1",{id:"heading"},"Hello world from React");
const heading3='<h1>This is heading 3</h1>'
console.log("heading",heading)
console.log("heading3",heading3)

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading3)