this.onmessage = (ev) => {
  const sum = ev.data.a + ev.data.b

  this.postMessage(sum)
}