var Ajax = (url, type) => {
  return new Promise((reslove, reject) => {
    let xml = new XMLHttpRequest();
    xml.onreadystatechange = () => {
      if(xml.readyState == 4 && xml.status == 200){
        reslove(xml.responseText);
      }
    }
    xml.open(type, url, true);
    xml.send();
  })
}
