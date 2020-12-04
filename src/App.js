import React, { useState } from 'react';

import Button from './components/Button/Button';
import Image from './components/Image/Image';
import placeholder from './assets/images/placeholder.png';
import image1 from './assets/images/image1.jpg';
import image2 from './assets/images/image2.jpg';
import image3 from './assets/images/image3.jpg';

const images = [image1, image2, image3];
let currentImage = -1;

function App() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [image, setImage] = useState(placeholder);

  const handleChange1 = (checked) => {
    setChecked1(checked);
    if (checked) {
      currentImage = 0;
      setChecked2(false);
      setChecked3(false);
      setImage(image1);
    } else {
      setImage(placeholder);
    }
  };

  const handleChange2 = (checked) => {
    setChecked2(checked);
    if (checked) {
      currentImage = 1;
      setChecked1(false);
      setChecked3(false);
      setImage(image2);
    } else {
      setImage(placeholder);
    }
  };

  const handleChange3 = (checked) => {
    setChecked3(checked);
    if (checked) {
      currentImage = 2;
      setChecked1(false);
      setChecked2(false);
      setImage(image3);
    } else {
      setImage(placeholder);
    }
  };

  const handleImageClick = () => {
    currentImage++;
    const image = images[currentImage % 3];
    setImage(image);

    if (image === image1) {
      setChecked1(true);
      setChecked2(false);
      setChecked3(false);
    } else if (image === image2) {
      setChecked1(false);
      setChecked2(true);
      setChecked3(false);
    } else if (image === image3) {
      setChecked1(false);
      setChecked2(false);
      setChecked3(true);
    }
  };

  return (
    <div>
      <Button
        title="Button 1"
        checked={checked1}
        handleChange={handleChange1}
      />
      <Button
        title="Button 2"
        checked={checked2}
        handleChange={handleChange2}
      />
      <Button
        title="Button 3"
        checked={checked3}
        handleChange={handleChange3}
      />
      <Image image={image} handleImageClick={handleImageClick} />
    </div>
  );
}

export default App;
