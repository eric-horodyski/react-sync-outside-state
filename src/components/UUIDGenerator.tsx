import { IonButton } from "@ionic/react";
import { useUUID } from "../UUIDProvider";
import "./UUIDGenerator.css";

const UUIDGenerator: React.FC = () => {
  const { uuid, stop, start } = useUUID();
  return (
    <div className="container">
      <strong>Generating your unique identifiers:</strong>
      <p>{uuid}</p>
      <br />
      <IonButton color="danger" onClick={stop}>
        Stop
      </IonButton>
      <IonButton color="success" onClick={start}>
        Start
      </IonButton>
    </div>
  );
};

export default UUIDGenerator;
