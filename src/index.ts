// returns your name
const getMyName = (name?: string) => name || "jamcry";
// logs your name
const sayMyName = (name?: string) => console.log(getMyName(name));

export { getMyName, sayMyName };
