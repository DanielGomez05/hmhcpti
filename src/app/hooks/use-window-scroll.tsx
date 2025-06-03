import * as React from 'react';

interface WindowScrollState {
  x: number | null;
  y: number | null;
  isScrolled: boolean | null;
}

type ScrollToOptions = globalThis.ScrollToOptions;

type ScrollTo = (...args: ScrollToOptions[]) => void;

export const useWindowScroll = (): [WindowScrollState, ScrollTo] => {
  const [state, setState] = React.useState<WindowScrollState>({
    x: null,
    y: null,
    isScrolled: null,
  });

  const scrollTo: ScrollTo = React.useCallback((...args) => {
    if (typeof args[0] === 'object') {
      window.scrollTo(args[0]);
    } else if (typeof args[0] === 'number' && typeof args[1] === 'number') {
      window.scrollTo(args[0], args[1]);
    } else {
      throw new Error(
        `Invalid arguments passed to scrollTo. See here for more info. https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo`
      );
    }
  }, []);

  React.useLayoutEffect(() => {
    const handleScroll = () => {
      setState({
        x: window.scrollX,
        y: window.scrollY,
        isScrolled: window.scrollY > 0,
      });
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return [state, scrollTo];
};
