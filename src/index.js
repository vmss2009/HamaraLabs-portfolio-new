import ReactDOM from 'react-dom/client';
import App from './App';

// Bursty layout changes (e.g. many images loading inside an iframe) can fire
// more ResizeObserver notifications than the browser can deliver in one
// frame, which surfaces as a benign but noisy "ResizeObserver loop completed
// with undelivered notifications" error. Debouncing every observer's
// callback keeps notifications from piling up within a single frame.
const NativeResizeObserver = window.ResizeObserver;
if (NativeResizeObserver) {
  window.ResizeObserver = class DebouncedResizeObserver extends NativeResizeObserver {
    constructor(callback) {
      let frame = 0;
      super((...args) => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => callback(...args));
      });
    }
  };
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
