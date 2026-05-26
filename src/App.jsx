import UnlockScreen, { MusicToggle } from './components/UnlockScreen';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Schedule from './components/Schedule';
import Location from './components/Location';
import Details from './components/Details';
import DressCode from './components/DressCode';
import RsvpForm from './components/RsvpForm';
import Contacts from './components/Contacts';
import { useUnlock } from './hooks/useUnlock';
import './styles/global.css';

export default function App() {
  const { unlocked, unlock, audioRef, toggleMusic } = useUnlock();

  return (
    <>
      <UnlockScreen unlocked={unlocked} onUnlock={unlock} />

      <div className={`app ${unlocked ? 'app--visible' : ''}`}>
        {unlocked && <MusicToggle audioRef={audioRef} onToggle={toggleMusic} />}

        <main>
          <Hero />
          <Welcome />
          <Schedule />
          <Location />
          <Details />
          <DressCode />
          <RsvpForm />
          <Contacts />
        </main>
      </div>
    </>
  );
}
