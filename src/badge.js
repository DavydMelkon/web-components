import "./badge.css";

class CustomBadge extends HTMLElement {
  constructor() {
    super();
    this.render(); // Render content immediately
  }

  static get observedAttributes() {
    return ["variant", "type"];
  }

  connectedCallback() {
    this.render();

    // Make it focusable for accessibility
    if (!this.hasAttribute("tabindex")) {
      this.setAttribute("tabindex", "0");
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    // You don't need to do anything special here if you're not generating content
    // Just preserve any inner HTML
    const content = this.innerHTML || this.textContent;
    this.innerHTML = content;
  }

  setText(text) {
    this.textContent = text;
  }

  setVariant(variant) {
    this.setAttribute("variant", variant);
  }

  setType(type) {
    this.setAttribute("type", type);
  }
}

customElements.define("custom-badge", CustomBadge);
