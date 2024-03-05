import React, { useState, useEffect } from 'react';

const CatFactsComponent: React.FC = () => {
  const [catFact, setCatFact] = useState<string>('');
  const [catImage, setCatImage] = useState<string>('');

  useEffect(() => {
    fetchCatFact();
    fetchCatImage();
  }, []);

  const fetchCatFact = async () => {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      setCatFact(data.fact);
  };
  

  const fetchCatImage = async () => {
    const response = await fetch('https://cataas.com/cat/says/hello');
    const blob = await response.blob();
    const imageUrl = URL.createObjectURL(blob);
    setCatImage(imageUrl);
  };

  const getFirstLetter = (fact: string): string => {
    const words = fact.split(' ');
    return words[0];
  };

  const handleButtonClick = async () => {
    await fetchCatFact();
    await fetchCatImage();
  };

  if (catFact ==="" && catImage ==="" ){
    
    return (
      <div>
        <button onClick={handleButtonClick}>Fetch Fact</button>
        <p>Loading cat fact...<br />Loading cat image...</p>
      </div>
    );
  } {
    return (
      <div>
        <h2>Random Cat Fact</h2>
        <button onClick={handleButtonClick}>Fetch Fact</button>
          {
          <div>
          <p>{getFirstLetter(catFact)}</p>
          <img src={catImage} alt="Cat saying hello" />
          </div>
        }
      </div>
    );
  }


  
};

export default CatFactsComponent;
