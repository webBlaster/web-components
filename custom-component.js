const template = document.createElement("template");
template.innerHTML = `
<style>
    h3 {
        background: yellow;
    }
    .card {
        margin:20px;
    }
</style>
<div class="card">
<img/>
<h3></h3>
<h2 class="info">
</h2>
<button>
Do something
</button>
</div>
`;

class CustomComponent extends HTMLElement {
  constructor() {
    super();
    this.count = 0;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");
    this.shadowRoot.querySelector("img").src = this.getAttribute("avatar");
  }

  doPushUps() {
    this.count++;
    this.shadowRoot.querySelector(".info").innerText = `${this.count} Push ups`;
  }
  connectedCallback() {
    this.shadowRoot.querySelector("button").addEventListener("click", () => {
      this.doPushUps();
    });
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector("button").removeEventListener();
  }
}

window.customElements.define("custom-component", CustomComponent);
