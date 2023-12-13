import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Make sure to import Ionicons from Expo

const StarRating = ({ defaultRating, maxRating, onRate }) => {
  const [rating, setRating] = useState(defaultRating);

  const renderStars = () => {
    const stars = [];
    const starStyle = {
      marginRight: 5,
      color: '#FFD700', // Set star color
    };

    for (let i = 1; i <= maxRating; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => handleRating(i)}>
          <Ionicons name={i <= rating ? 'star' : 'star-outline'} size={24} style={starStyle} />
        </TouchableOpacity>
      );
    }
    return stars;
  };

  const handleRating = (selectedRating) => {
    setRating(selectedRating);
    onRate(selectedRating); // Execute callback to parent component
  };

  return (
    <View style={styles.container}>
      {renderStars()}
      <Text>{rating}/{maxRating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default StarRating;
