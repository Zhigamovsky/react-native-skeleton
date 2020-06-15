import { NavigationProp } from "@react-navigation/native";
import { ReactElement } from "react";

export type TDefaultNavigationElement = {
  (
    props: {
      navigation: NavigationProp<any>
    }
  ): ReactElement
}