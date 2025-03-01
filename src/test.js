// const getCats = async () => {
//   const catsUrl = "https://api.thecatapi.com/v1/breeds";

//   try {
//     const response = await fetch(catsUrl);
//     const cats = await response.json();
//     const topFiveCats = cats.slice(0, 5);
//     console.log(topFiveCats);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getCats()


const getUsers = async () => {
  const usersUrl = "https://jsonplaceholder.typicode.com/users";

  try {
    const response = await fetch(usersUrl);
    const users = await response.json();
    const topFiveUsers = users.slice(0, 5);
    console.log(topFiveUsers);
  } catch (error) {
    console.log(error);
  }
};


getUsers()