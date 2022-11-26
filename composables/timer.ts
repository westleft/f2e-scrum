// 打字機效果
export function useTextType(){
  const done = ref(false);
  const result = ref("");
  function typeEffect(text: string){
    
    let i = 0;

    let timer = setInterval(() => {
      result.value += text[i]
      i++

      if(i === text.length){
        clearInterval(timer)
        done.value = true;
      }
      // console.log(i)

    }, 25)
  }

  return { result, typeEffect, done }
}