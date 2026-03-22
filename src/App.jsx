import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './Components/ui/LoadingScreen';
import IEBrowser from './Components/IEBrowser/IEBrowser';
import { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <LoadingScreen onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>
      {!loading && <IEBrowser />}
    </>
  );
}

export default App;
