export function submitForm(formData) {
  return new Promise((resolve, reject) => {
    // Simulate server response randomly
    const random = Math.random();
    if (random < 0.5) {
      const response = {
        status: "error",
        fields: {
          inputName: "Error message for name field",
          inputEmail: "Error message for email field",
          inputPhone: "Error message for phone field",
          inputMessage: "Error message for message field",
        },
      };
      reject(response);
    } else {
      const response = {
        status: "success",
        msg: "Your request has been successfully submitted",
      };

      formData.reset();

      resolve(response);
    }
  });
}
