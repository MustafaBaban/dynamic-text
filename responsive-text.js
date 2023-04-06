class ResponsiveText {
  constructor(element, options = {}) {
    this.element = element;
    this.minFontSize = options.minFontSize || 12;
    this.maxFontSize = options.maxFontSize || 48;
    this.scalingFactor = options.scalingFactor || 0.1;
    this.adjustmentFactor = options.adjustmentFactor || 1;

    this.init();
  }

  init() {
    this.updateFontSize();
    window.addEventListener('resize', () => this.updateFontSize());
  }

  updateFontSize() {
    const containerWidth = this.element.parentElement.clientWidth;
    let newFontSize = containerWidth * this.scalingFactor * this.adjustmentFactor;

    newFontSize = Math.max(this.minFontSize, newFontSize);
    newFontSize = Math.min(this.maxFontSize, newFontSize);
    
    this.element.style.fontSize = `${newFontSize}px`;
  }
}
export default ResponsiveText;