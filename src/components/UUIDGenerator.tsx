import { useUUID } from "../hooks/useUUID";

import "./UUIDGenerator.css";

const UUIDGenerator: React.FC = () => {
  const { uuid } = useUUID();

  return (
    <div className="container">
      <strong>Logging your UUID (inner):</strong>
      <p>{uuid}</p>
    </div>
  );
};

export default UUIDGenerator;
