function runner2(_gen){
  const gen = _gen()

  let res = gen.next()
  
  if(!res.done) {
    let obj=res.value;

    if(obj.then){
      obj.then((ret)=>{
        gen.next(ret)
      }, (err)=>{
        reject(err);
      });
    }  
  }
}