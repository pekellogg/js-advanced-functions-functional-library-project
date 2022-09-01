const standardObject = srcArr => {
  if (srcArr instanceof Array) {
    return srcArr.slice()
  }
  else {
    return Object.values(srcArr)
  }
}

const myEach = (srcArr, alert) => {
  const standardSrcArr = standardObject(srcArr);
  for (let i = 0; i < standardSrcArr.length; i++) {
    alert(standardSrcArr[i]);
  }
  return srcArr;
}

const myMap = (srcArr, callback) => {
  const standardSrcArr = standardObject(srcArr);
  const container = [];
  for (let i = 0; i < standardSrcArr.length; i++) {
    container.push(callback(standardSrcArr[i]));
  }
  return container;
}

const myReduce = (srcArr, callback, acc) => {
  // init using "let" to allow for mutability if myReduce not passed acc value arg
  let standardSrcArr = standardObject(srcArr);
  if (!acc) {
    acc = standardSrcArr[0];
    standardSrcArr = standardSrcArr.slice(1);
  } 
  for (let i = 0; i < standardSrcArr.length; i++) {
    acc = callback(acc, standardSrcArr[i], standardSrcArr);
  }
  return acc;
}

const myFind = (srcArr, predicateCallback) => {
  const standardSrcArr = standardObject(srcArr);
  for (let i = 0; i < standardSrcArr.length; i++) {
    if (predicateCallback(standardSrcArr[i])) {
      return standardSrcArr[i]
    }}
  return undefined;
}

const myFilter = (srcArr, predicateCallback) => {
  const standardSrcArr = standardObject(srcArr);
  const container = [];
  for (let i = 0; i < standardSrcArr.length; i++) {
    if (predicateCallback(standardSrcArr[i])) container.push(standardSrcArr[i]);
  }
  return container;
}

const mySize = (srcArr) => {
  const standardSrcArr = standardObject(srcArr);
  return standardSrcArr.length;
}


const myFirst = (srcArr, stop = false) => {
  return ((stop) ? (srcArr.slice(0, stop)) : (srcArr[0]));
}

const myLast = (srcArr, start = false) => {
  if (start) {
    return srcArr.slice(srcArr.length - start, srcArr.length);
  }
  else {
    return srcArr[srcArr.length - 1];
  }
}

const mySortBy = (srcArr, callback) => {
  const container = [...srcArr];
  return container.sort( (a, b) => {
    if (callback(a) > callback(b)) { return 1}
    else if (callback(b) > callback(a)) { return -1}
    else { return 0 }
  });
}

// myFlatten helper function
const unpack = (receiver, srcArr) => { for (let i of srcArr) { receiver.push(i); } }

const myFlatten = (srcArr, shallow, container = []) => {
  if (shallow) {
    for (let i of srcArr) { Array.isArray(i) ? unpack(container, i) : container.push(i); }
  }
  else {
    for (let i of srcArr) {
      if (Array.isArray(i)) { myFlatten(i, false, container); }
      else { container.push(i); }
    }
  }
  return container;
}

// container of keys
const myKeys = obj => {
  const keys = [];
  for (let key in obj) { keys.push(key); }
  return keys;
}

// container of keys' values
const myValues = obj => {
  const values = [];
  for (let key in obj) { values.push(obj[key]); }
  return values;
}