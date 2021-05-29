import WebFontLoader from 'webfontloader';

export const init = () => {
  WebFontLoader.load({
    google: {
      families: ['Barlow:300,400,600,900', 'JetBrains Mono:300,400,600,900']
    }
  });
};
