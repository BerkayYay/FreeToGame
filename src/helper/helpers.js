import {showMessage} from 'react-native-flash-message';
const showError = (message, description) => {
  showMessage({
    message: message,
    description: description,
    type: 'warning',
    icon: 'warning',
  });
};

// show success message
const showSuccess = (message, description) => {
  showMessage({
    message,
    description,
    type: 'success',
    icon: 'success',
  });
};

export {showError, showSuccess};
