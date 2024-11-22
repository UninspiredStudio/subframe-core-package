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
exports.Trigger = exports.SubTrigger = exports.SubContent = exports.Sub = exports.Separator = exports.Root = exports.RadioItem = exports.RadioGroup = exports.Portal = exports.Label = exports.ItemIndicator = exports.Item = exports.Group = exports.ContextMenuTrigger = exports.ContextMenuSubTrigger = exports.ContextMenuSubContent = exports.ContextMenuSub = exports.ContextMenuSeparator = exports.ContextMenuRadioItem = exports.ContextMenuRadioGroup = exports.ContextMenuPortal = exports.ContextMenuLabel = exports.ContextMenuItemIndicator = exports.ContextMenuItem = exports.ContextMenuGroup = exports.ContextMenuContent = exports.ContextMenuCheckboxItem = exports.ContextMenuArrow = exports.ContextMenu = exports.Content = exports.CheckboxItem = exports.Arrow = void 0;
const RadixContextMenu = __importStar(require("@radix-ui/react-context-menu"));
exports.Arrow = RadixContextMenu.Arrow;
exports.CheckboxItem = RadixContextMenu.CheckboxItem;
exports.Content = RadixContextMenu.Content;
exports.ContextMenu = RadixContextMenu.ContextMenu;
exports.ContextMenuArrow = RadixContextMenu.ContextMenuArrow;
exports.ContextMenuCheckboxItem = RadixContextMenu.ContextMenuCheckboxItem;
exports.ContextMenuContent = RadixContextMenu.ContextMenuContent;
exports.ContextMenuGroup = RadixContextMenu.ContextMenuGroup;
exports.ContextMenuItem = RadixContextMenu.ContextMenuItem;
exports.ContextMenuItemIndicator = RadixContextMenu.ContextMenuItemIndicator;
exports.ContextMenuLabel = RadixContextMenu.ContextMenuLabel;
exports.ContextMenuPortal = RadixContextMenu.ContextMenuPortal;
exports.ContextMenuRadioGroup = RadixContextMenu.ContextMenuRadioGroup;
exports.ContextMenuRadioItem = RadixContextMenu.ContextMenuRadioItem;
exports.ContextMenuSeparator = RadixContextMenu.ContextMenuSeparator;
exports.ContextMenuSub = RadixContextMenu.ContextMenuSub;
exports.ContextMenuSubContent = RadixContextMenu.ContextMenuSubContent;
exports.ContextMenuSubTrigger = RadixContextMenu.ContextMenuSubTrigger;
exports.ContextMenuTrigger = RadixContextMenu.ContextMenuTrigger;
exports.Group = RadixContextMenu.Group;
exports.Item = RadixContextMenu.Item;
exports.ItemIndicator = RadixContextMenu.ItemIndicator;
exports.Label = RadixContextMenu.Label;
exports.Portal = RadixContextMenu.Portal;
exports.RadioGroup = RadixContextMenu.RadioGroup;
exports.RadioItem = RadixContextMenu.RadioItem;
exports.Root = RadixContextMenu.Root;
exports.Separator = RadixContextMenu.Separator;
exports.Sub = RadixContextMenu.Sub;
exports.SubContent = RadixContextMenu.SubContent;
exports.SubTrigger = RadixContextMenu.SubTrigger;
exports.Trigger = RadixContextMenu.Trigger;
