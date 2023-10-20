import { v4 as uuidv4, v5 as uuidv5 } from "uuid";
import { useSyncExternalStore } from "react";

const MY_NAMESPACE = "1b671a64-40d5-491e-99b0-da01ff1f3341";

let v4 = uuidv4();
let v5 = uuidv5("Hello, world!", MY_NAMESPACE);

let store = { v4, v5 };

let listeners: any[] = [];

const subscribe = (listener: any) => {
  listeners = [...listeners, listener];
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
};

const getSnapshot = () => {
  return store;
};

const emitChange = () => {
  for (let listener of listeners) {
    listener();
  }
};

const generateV5 = () => {
  let str = (Math.random() + 1).toString(36).substring(7);
  const v5 = uuidv5(str, MY_NAMESPACE);
  store = { ...store, v5 };
};

setInterval(() => {
  store = { ...store, v4: uuidv4() };
  emitChange();
}, 1000);

export const useUUID = () => {
  const { v4, v5 } = useSyncExternalStore(subscribe, getSnapshot);
  return { v4, v5, generateV5 };
};
