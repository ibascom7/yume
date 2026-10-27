import SpanWidget from "./SpanWidget";

// Interactive pieces an example can embed by name, since data files can't hold components
export const widgets = {
  "span-r3": SpanWidget,
};

export type WidgetName = keyof typeof widgets;
