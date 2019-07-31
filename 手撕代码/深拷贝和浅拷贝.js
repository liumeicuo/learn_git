// 深拷贝
function deepClone(elem){
    if(typeof elem !== 'object' || elem == null){
        return new Error('must object type');
    }
    const newObj = elem instanceof Array ? []:{};
    for(let i in elem){
       if(elem.hasOwnProperty(i)){
            newObj[i] = typeof elem[i] === 'object' ? deepClone(elem[i]) : elem[i]
       } 
    }
    return newObj;
}

let elem = {1:[123,'asd'], 2:2 , a:'s', df:'p'};
let lel = deepClone(elem)

lel[1] = 'asdfsd'
console.log(lel,elem)

let arr = [5,4,1,4,5]
 function singleNumber(arr){
    for (let i = 1; i < arr.length; i++) {
      arr[0] ^= arr[i]
    }
    return arr[0]
  }
console.log(singleNumber(arr))

const sleep = (time) => {
  return new Promise(resolve => {console.log('qwe');setTimeout(resolve, time)})
}

sleep(1000).then(() => {
    // 这里写你的骚操作
    console.log('qweqwe')
})
