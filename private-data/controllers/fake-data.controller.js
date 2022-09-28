module.exports.fakeData = () => {
  try {
    return {
        name: "David",
        lastname: "Cooper",
        age: 34
    };
  } catch (error) {
    throw error;
  }
}