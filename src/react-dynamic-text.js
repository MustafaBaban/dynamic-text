import React, { useRef, useEffect } from 'react';
import DynamicTextCore from './index';

const useDynamicText = (elementRef, options) => {
  useEffect(() => {
    const dynamicTextInstance = new DynamicTextCore(elementRef.current, options);
    elementRef.current.__dynamicTextInstance__ = dynamicTextInstance;

    return () => {
      window.removeEventListener('resize', elementRef.current.__dynamicTextInstance__.updateFontSize);
    };
  }, [elementRef, options]);
};

const DynamicText = ({
  children,
  minFontSize = 12,
  maxFontSize = 48,
  scalingFactor = 0.03,
  adjustmentFactor = 0.5,
}) => {
  const textRef = useRef();

  useDynamicText(textRef, { minFontSize, maxFontSize, scalingFactor, adjustmentFactor });

  return <span ref={textRef}>{children}</span>;
};

export default DynamicText;