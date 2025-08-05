class CustomBadge extends HTMLElement {
  constructor() {
    super();

    // Create shadow DOM for better encapsulation (optional)
    // Uncomment the next 3 lines if you want to use Shadow DOM
    // this.attachShadow({ mode: 'open' });
    // this.render();
    // return;

    // For simplicity, we'll use light DOM
    this.render();
  }

  // Define which attributes to observe for changes
  static get observedAttributes() {
    return ["variant"];
  }

  // Called when component is added to the DOM
  connectedCallback() {
    this.render();
    this.applyCustomColors();

    // Make it focusable for accessibility
    if (!this.hasAttribute("tabindex")) {
      this.setAttribute("tabindex", "0");
    }
  }

  // Called when observed attributes change
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
      this.applyCustomColors();
    }
  }

  // Render the component content
  render() {
    // Get the slot content (text inside the tag)
    const content = this.innerHTML || this.textContent;

    // Clear and set the content
    this.innerHTML = content;
  }

  // Method to update the badge text programmatically
  setText(text) {
    this.textContent = text;
  }

  // Method to update the variant programmatically
  setVariant(variant) {
    this.setAttribute("variant", variant);
  }
}

// Example usage in console:
// const myBadge = createBadge('New Badge', { variant: 'success', size: 'large' });
// document.body.appendChild(myBadge);
