import { useSyncExternalStore } from "react";
import { subscribe, getSnapshot } from "../uuidStore";

import "./UUIDGenerator.css";

const UUIDGenerator: React.FC = () => {
  const uuid = useSyncExternalStore(subscribe, getSnapshot);

  return (
    <div className="container">
      <strong>Generating your unique identifiers:</strong>
      <p>{uuid}</p>
    </div>
  );
};

export default UUIDGenerator;
