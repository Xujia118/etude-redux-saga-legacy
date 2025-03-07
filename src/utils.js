export const filterUsers = (originalUsers, filters) => {
  return originalUsers.filter((user) => {
    const matchesGender = !filters.gender || user.gender === filters.gender;
    const matchesAge =
      !filters.age ||
      (filters.age === "18-25" && user.age >= 18 && user.age <= 25) ||
      (filters.age === "26-35" && user.age >= 26 && user.age <= 35) ||
      (filters.age === "36+" && user.age >= 36);
    return matchesGender && matchesAge;
  });
};
