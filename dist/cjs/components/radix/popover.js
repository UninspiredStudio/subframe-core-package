"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPopoverScope = exports.Trigger = exports.Root = exports.Portal = exports.PopoverTrigger = exports.PopoverPortal = exports.PopoverContent = exports.PopoverClose = exports.PopoverArrow = exports.PopoverAnchor = exports.Popover = exports.Content = exports.Close = exports.Arrow = exports.Anchor = void 0;
const RadixPopover = __importStar(require("@radix-ui/react-popover"));
exports.Anchor = RadixPopover.Anchor;
exports.Arrow = RadixPopover.Arrow;
exports.Close = RadixPopover.Close;
exports.Content = RadixPopover.Content;
exports.Popover = RadixPopover.Popover;
exports.PopoverAnchor = RadixPopover.PopoverAnchor;
exports.PopoverArrow = RadixPopover.PopoverArrow;
exports.PopoverClose = RadixPopover.PopoverClose;
exports.PopoverContent = RadixPopover.PopoverContent;
exports.PopoverPortal = RadixPopover.PopoverPortal;
exports.PopoverTrigger = RadixPopover.PopoverTrigger;
exports.Portal = RadixPopover.Portal;
exports.Root = RadixPopover.Root;
exports.Trigger = RadixPopover.Trigger;
exports.createPopoverScope = RadixPopover.createPopoverScope;
