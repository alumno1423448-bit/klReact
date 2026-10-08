export const obtenerTeams = async () => {
  const response = await fetch('https://pacopul.github.io/json/kl/teams.json');
  const data = await response.json();
  return data.teams;
};