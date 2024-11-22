"use strict";
import { icons } from '../assets/icons/final/index.js';

const iconCache = /* @__PURE__ */ new Map();
async function loadIcon(iconName) {
  if (iconCache.has(iconName)) {
    return iconCache.get(iconName);
  } else {
    const { default: Icon } = await icons[iconName]();
    iconCache.set(iconName, Icon);
    return Icon;
  }
}

export { loadIcon };
//# sourceMappingURL=load-icon.js.map
