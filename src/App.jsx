import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import DetailPage from './components/DetailPage';

export default function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (item) => {
    setSelectedItem(item);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedItem(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar onBack={handleBack} showBack={!!selectedItem} />

      {selectedItem ? (
        <DetailPage item={selectedItem} onBack={handleBack} />
      ) : (
        <HomePage onSelect={handleSelect} />
      )}
    </>
  );
}
