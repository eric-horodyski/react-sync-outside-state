import { v4 } from "uuid";

let uuid = v4();
let listeners: any[] = [];

const subscribe = (listener: any) => {
  listeners = [...listeners, listener];
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
};

const getSnapshot = () => {
  return uuid;
};

const emitChange = () => {
  for (let listener of listeners) {
    listener();
  }
};

setInterval(() => {
  uuid = v4();
  emitChange();
}, 1000);

export { subscribe, getSnapshot, uuid };
