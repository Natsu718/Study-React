import React, { useState, useEffect } from 'react';

const CatFactsComponent: React.FC = () => {
  const [catFact, setCatFact] = useState<string>('');
  const [catImage, setCatImage] = useState<string>('');

  useEffect(() => {
    fetchCatFact();
    fetchCatImage();
  }, []);

  const fetchCatFact = async () => {
    try {
      const response = await fetch('https://catfact.ninja/fact');
      if (!response.ok) {
        throw new Error('Failed to fetch cat fact');
      }
      const data = await response.json();
      setCatFact(data.fact);
    } catch (error) {
      console.error('Error fetching cat fact:', error);
    }
    
  };
  

  const fetchCatImage = async () => {
    try {
      const response = await fetch('https://cataas.com/cat/says/hello');
      if (!response.ok) {
        throw new Error('Failed to fetch cat image');
      }
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setCatImage(imageUrl);
    } catch (error) {
      console.error('Error fetching cat image:', error);
    }
  };

  const getFirstLetter = (fact: string): string => {
    const words = fact.split(' ');
    return words[0];
  };

  const handleButtonClick = async () => {
    await fetchCatFact();
    await fetchCatImage();
  };

  return (
    <div>
      <h2>Random Cat Fact</h2>
      <button onClick={handleButtonClick}>Fetch Fact</button>
      {catFact ? (
        <p>{getFirstLetter(catFact)}</p>
      ) : (
        <p>Loading cat fact...</p>
      )
      }
      {catImage ? (
        <img src={catImage} alt="Cat saying hello" />
      ) : (
        <p>Loading cat image...</p>
      )}
    </div>
  );
};

export default CatFactsComponent;
