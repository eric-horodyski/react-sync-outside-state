import { IonContent, IonPage } from "@ionic/react";
import UUIDGenerator from "../components/UUIDGenerator";
import { useUUID } from "../hooks/useUUID";
import "./Home.css";

const Home: React.FC = () => {
  const { uuid } = useUUID();
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="home-container">
          <strong>Logging your UUID (outer):</strong>
          <p>{uuid}</p>
        </div>

        <UUIDGenerator />
      </IonContent>
    </IonPage>
  );
};

export default Home;
