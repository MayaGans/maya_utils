export default function pluck(key, array) {
  return array.reduce((values, current) => {
    values.push(current[key]);

    return values;
  }, [])
}