import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 0,
  },
  lightContainer: {
    backgroundColor: '#FFFFFF',
  },
  darkContainer: {
    backgroundColor: '#1E1E1E',
  },
  switchButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#38a3a5',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 10,
  },
  switchButtonText: {
    color: '#1E1E1E',
    fontWeight: 'bold',
    marginRight: 5,
  },
  // Add more styles as needed
});