function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation (e.g., API call)
    setTimeout(() => {
      const success = true; // This can be any condition

      if (success) {
        resolve("API response received successfully!");
      } else {
        reject(new Error("Failed to receive API response"));
      }
    }, 1000); // Simulate a delay of 1 second
  });
}

export default getResponseFromAPI;
