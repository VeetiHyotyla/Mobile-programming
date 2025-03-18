import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AddLocationScreen = ({ addLocation }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    if (name && rating) {
      addLocation({ name, description, rating });
      navigation.goBack();
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Location Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        placeholder="Rating (1-5)"
        value={rating}
        onChangeText={setRating}
        keyboardType="numeric"
      />
      <Button title="Add Location" onPress={handleSubmit} />
    </View>
  );
};

export default AddLocationScreen;
