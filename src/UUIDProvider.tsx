import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { getUUID, registerCallback, unregisterCallback } from "./uuid-api";

type Props = { children?: ReactNode };
type Context = { uuid: string; stop: () => void; start: () => void };

const Context = createContext<Context>({
  uuid: "",
  stop: () => {},
  start: () => {},
});
const UuidProvider = ({ children }: Props) => {
  const [uuid, setUuid] = useState<string>(getUUID());

  const stop = () => unregisterCallback();
  const start = () => registerCallback((newUuid: string) => setUuid(newUuid));

  useEffect(() => {
    registerCallback((newUuid: string) => setUuid(newUuid));

    return () => unregisterCallback();
  }, []);

  return (
    <Context.Provider value={{ uuid, start, stop }}>
      {children}
    </Context.Provider>
  );
};
export const useUUID = () => {
  const context = useContext(Context);
  if (context === undefined)
    throw new Error("useUUID must be used within UuidProvider");
  return context;
};
export default UuidProvider;
