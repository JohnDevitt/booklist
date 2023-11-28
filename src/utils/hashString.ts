const hashString = (text: string) => {
  let hash = 0;

  for (let i = 0; i < text.length; i++) {
    hash = (hash << 5) - hash + text.charCodeAt(i);
  }

  return ((hash & 0x7fffffff) % 11) + 1;
};

export default hashString;
