import onResize from "../resize";
import {getSize} from '../filter'
const screen = {
  mobile: window.matchMedia('(min-width: 300px)'),
  tablet: window.matchMedia('(min-width: 768px)'),
  desktop: window.matchMedia('(min-width: 1280px)'),
};

for (let [scr, mq] of Object.entries(screen)) {
  if (mq) mq.addEventListener('change', mqHandler);
}
export function mqHandler() {
  let size = null;
  let toRemove = [];
  for (let [scr, mq] of Object.entries(screen)) {
    if (!mq || mq.matches) {
      size = scr;
    } else if (scr !== size) toRemove.push(scr);
  }

  onResize(size, toRemove);
  if (
    window.location.pathname === '/' ||
    window.location.pathname === '/index.html'
  ) {
    getSize(size)
  }
}
