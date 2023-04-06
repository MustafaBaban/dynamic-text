// for Vue
import DynamicText from './dynamic-text';

export default {
  install(app) {
    app.directive('dynamic-text', {
      mounted(el, binding) {
        const options = binding.value || {};
        const dynamicTextInstance = new DynamicText(el, options);
        el.__dynamicTextInstance__ = dynamicTextInstance;
      },
      beforeUnmount(el) {
        window.removeEventListener('resize', el.__dynamicTextInstance__.updateFontSize);
      },
    });
  },
};
