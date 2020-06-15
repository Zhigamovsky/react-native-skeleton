//@ts-ignore
import Log from '@zhigamovsky/styled-console-log'
import { NavigationProp, Route, NavigationState, PartialState } from "@react-navigation/native"

export type TGenerateUID = () => string;

const generateUID: TGenerateUID = () => {
  let d: number = new Date().getTime();
  let uuid: string = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    let r = (d + Math.random()*16)%16 | 0;
    d = Math.floor(d/16);
    return (c=='x' ? r : (r&0x3|0x8)).toString(16);
  });
  return uuid;
};

type TNavigationParents = (
  Route<string> & {
    state?: NavigationState | PartialState<NavigationState> | undefined;
  }
)[];

export type THistoryNavigation = {
  id: string,
  path: string,
  props: any,
  date: string,
  action: 'pop' | 'navigate',
  parents: TNavigationParents | undefined
} 

let historyNavigation: THistoryNavigation[] = [];

export type TEventHistoryNavigation = () => THistoryNavigation[];

export const getHistoryNavigation: TEventHistoryNavigation = () => {
  return historyNavigation;
}

export const clearHistoryNavigation: TEventHistoryNavigation = () => {
  historyNavigation = [];
  return historyNavigation;
}

export type TNavigateShell = {
  (
    navigation: NavigationProp<any>,
    path: string,
    props?: any
  ): THistoryNavigation
}

export const navigateShell: TNavigateShell = (navigation, path, props = null) => {
  let date = new Date();
  let historyItem: THistoryNavigation = {
    id: generateUID(),
    path: path,
    props: props,
    action: 'navigate',
    date: date.toLocaleString() + ':' + date.getMilliseconds(),
    parents: navigation.dangerouslyGetParent()?.dangerouslyGetState().routes
  }
  navigation.navigate(path, props);
  historyNavigation.push(historyItem);
  const hookOutParent = (): string => {
    let parent: string = 'ROOT_PAGE';
    if((historyItem.parents || []).length) {
      //@ts-ignore
      parent = historyItem.parents[historyItem.parents.length - 2].name;
    }
    return parent;
  }
  Log.check('[Shell] Navigate to <' + path + '> from <' + hookOutParent() + '>', historyItem)
  return historyItem;
}