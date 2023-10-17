import { IonButton, IonContent, IonPage } from "@ionic/react";
import UUIDGenerator from "../components/UUIDGenerator";
import { useUUID } from "../hooks/useUUID";
import "./Home.css";

const Home: React.FC = () => {
  const { v4, generateV5, v5 } = useUUID();
  return (
    <IonPage>
      <IonContent fullscreen>
        <div style={{ padding: "1em" }}>
          <p>{v5}</p>
          <IonButton onClick={generateV5} expand="full">
            Generate v5
          </IonButton>
        </div>

        <div className="home-container">
          <strong>Logging your UUID (outer):</strong>
          <p>{v4}</p>
        </div>
        <UUIDGenerator />
      </IonContent>
    </IonPage>
  );
};

export default Home;
