import "./hello-world-button.scss";

class HelloWorldBtn {
  buttonCSSClass = "hello-world-button";
  render() {
    const button = document.createElement("button");
    const body = document.querySelector("body");
    button.innerHTML = "Hello World";
    button.classList.add(this.buttonCSSClass);
    button.onclick = function () {
      const p = document.createElement("p");
      p.innerHTML = "Paragraph Rendered";
      p.classList.add("hello-world-text");
      body.appendChild(p);
    };
    body.appendChild(button);
  }
}

export default HelloWorldBtn;
