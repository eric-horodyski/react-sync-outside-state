import { useUUID } from "../hooks/useUUID";

import "./UUIDGenerator.css";

const UUIDGenerator: React.FC = () => {
  const { v4 } = useUUID();

  return (
    <div className="container">
      <strong>Logging your UUID (inner):</strong>
      <p>{v4}</p>
    </div>
  );
};

export default UUIDGenerator;
