import { IonContent, IonPage } from "@ionic/react";
import UUIDGenerator from "../components/UUIDGenerator";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <UUIDGenerator />
      </IonContent>
    </IonPage>
  );
};

export default Home;
