import ResponsiveText from './responsive-text';

export default {
  install(app) {
    app.directive('responsive-text', {
      mounted(el, binding) {
        const options = binding.value || {};
        const responsiveTextInstance = new ResponsiveText(el, options);
        el.__responsiveTextInstance__ = responsiveTextInstance;
      },
      beforeUnmount(el) {
        window.removeEventListener('resize', el.__responsiveTextInstance__.updateFontSize);
      },
    });
  },
};
