import React, { useState } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, StyleSheet, 
  ScrollView, Alert, KeyboardAvoidingView, Platform
} from 'react-native';

import CheckBox from 'expo-checkbox';



  

  const handleAddRecipe = async () => {
   
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Add Your Recipes</Text>

        {/* Image URL */}
        <TextInput
          style={styles.input}
          placeholder="Image URL"
          placeholderTextColor="#999"
          value={form.image}
          onChangeText={(t) => setForm({ ...form, image: t })}
        />

        {/* Title */}
        <TextInput
          style={styles.input}
          placeholder="Recipe Title"
          placeholderTextColor="#999"
          value={form.title}
          onChangeText={(t) => setForm({ ...form, title: t })}
        />

        {/* Ingredients */}
        <TextInput
          style={[styles.input, { height: 80 }]}
          placeholder="Ingredients (comma separated)"
          placeholderTextColor="#999"
          value={form.ingredients}
          onChangeText={(t) => setForm({ ...form, ingredients: t })}
          multiline
        />

        {/* Instructions */}
        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder="Step-by-step instructions"
          placeholderTextColor="#999"
          value={form.instructions}
          onChangeText={(t) => setForm({ ...form, instructions: t })}
          multiline
        />

        {/* Cuisine */}
        <TextInput
          style={styles.input}
          placeholder="Cuisine Type (Italian, Mexican, etc.)"
          placeholderTextColor="#999"
          value={form.cuisine}
          onChangeText={(t) => setForm({ ...form, cuisine: t })}
        />

        {/* Prep Time */}
        <TextInput
          style={styles.input}
          placeholder="Preparation Time (minutes)"
          placeholderTextColor="#999"
          keyboardType="numeric"
          value={form.prepTime}
          onChangeText={(t) => setForm({ ...form, prepTime: t })}
        />

        {/* Video Link */}
        <TextInput
          style={styles.input}
          placeholder="YouTube Video Link (optional)"
          placeholderTextColor="#999"
          value={form.video}
          onChangeText={(t) => setForm({ ...form, video: t })}
        />

        {/* Categories */}
        <Text style={styles.label}>Categories:</Text>
        {categoryOptions.map((category) => (
          <View key={category} style={styles.checkboxContainer}>
            <CheckBox
              value={categories.includes(category)}
              onValueChange={() => handleCheckboxChange(category)}
              color="#d97706"
            />
            <Text style={styles.checkboxLabel}>{category}</Text>
          </View>
        ))}

        {/* Like Count */}
        <TextInput
          style={[styles.input, { backgroundColor: '#f0f0f0', color: '#888' }]}
          value="0"
          editable={false}
        />

        {/* Submit Button */}
        <TouchableOpacity style={styles.addButton} onPress={handleAddRecipe}>
          <Text style={styles.addButtonText}>Add Recipe</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#d97706',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d97706',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 15,
    color: '#333', // user text color
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#d97706',
    marginBottom: 6,
  },
  checkboxContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  checkboxLabel: { marginLeft: 8, fontSize: 15, color: '#333' },
  addButton: {
    backgroundColor: '#d97706',
    paddingVertical: 15,
    borderRadius: 30,
    marginTop: 20,
    alignItems: 'center',
  },
  addButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
});
ssss