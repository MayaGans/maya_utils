let uniqueArr = []
export default function removeDuplicates(arr) {

  // Accepts an array from which the duplicates
  // will be removed
  if (!Array.isArray(arr)){
    arr = []
  }

  let theSet = new Set(arr)
  let uniqueArr = [...theSet]

  return uniqueArr
}