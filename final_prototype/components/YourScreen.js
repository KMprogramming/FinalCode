import React from 'react';
import { View } from 'react-native';
import StarRating from './StarRating'; // Path to your StarRating component

const YourScreen = () => {
  const handleRating = (newRating) => {
    // Handle the updated rating value (e.g., save it to state or perform an action)
    console.log('New rating:', newRating);
  };

  return (
    <View>
      <StarRating defaultRating={3} maxRating={5} onRate={handleRating} />
    </View>
  );
};

export default YourScreen;
