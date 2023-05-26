import { v4 } from "uuid";

let uuid = v4();
let intervalCallback: ((uuid: string) => void) | undefined = undefined;

setInterval(() => setUUID(v4()), 1000);

const getUUID = () => uuid;

const setUUID = (newUuid: string) => {
  uuid = newUuid;
  if (intervalCallback) intervalCallback(newUuid);
};

const registerCallback = (callback: (uuid: string) => void) => {
  intervalCallback = callback;
};

const unregisterCallback = () => (intervalCallback = undefined);

export { getUUID, registerCallback, unregisterCallback };
