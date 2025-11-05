import * as React from "react";
import { DefaultTheme } from "@react-navigation/native";

export const MyTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: "rgb(140, 201, 125)",
		primary: "rgb(255, 45, 85)",
	},
};
