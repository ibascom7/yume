"use client";

import dynamic from "next/dynamic";
import WidgetLoading from "@/app/components/widgets/WidgetLoading";

// Interactive pieces an example can embed by name, since data files can't hold components.
// Each loads as its own chunk the first time its example is opened, so the notes pages stay light.
const lazy = (load: Parameters<typeof dynamic>[0]) => dynamic(load, { ssr: false, loading: WidgetLoading });

export const widgets = {
  "coordinatewise": lazy(() => import("./CoordinatewiseWidget")),
};

export type WidgetName = keyof typeof widgets;
