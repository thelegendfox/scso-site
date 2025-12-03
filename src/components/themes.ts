import { DefaultTheme } from "@react-navigation/native";
import * as React from "react";

export const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "rgb(140, 201, 125)",
    primary: "rgb(255, 45, 85)",
  },
};
