"use strict";
'use strict';

var index = require('../assets/icons/final/index.js');

const iconCache = /* @__PURE__ */ new Map();
async function loadIcon(iconName) {
  if (iconCache.has(iconName)) {
    return iconCache.get(iconName);
  } else {
    const { default: Icon } = await index.icons[iconName]();
    iconCache.set(iconName, Icon);
    return Icon;
  }
}

exports.loadIcon = loadIcon;
//# sourceMappingURL=load-icon.js.map
