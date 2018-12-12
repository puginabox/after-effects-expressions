
// Auto-Resizable Colorize Rectangle

title = thisComp.layer("Rectangle").sourceRectAtTime();
padding = effect("Padding")("Slider");
[title.width + padding, title.height + padding]

// change named Rectangle to your text layer name (IE: text-to-resize)


title = thisComp.layer("Text to Change").sourceRectAtTime();padding = effect("Background Padding")("Slider");[title.width + padding, title.height + padding]
