// Define a function in the JavaScript file

function web_bench() {
    let begin = Date.now(); //ms
    
    let container = document.getElementById("container");
    while (container.lastChild){
        container.removeChild(container.lastChild);
    }
    
    for(let i = 0; i < 10000; i += 1) {
      let str = "1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890" +
        "123456789012345678901234567890123456abcd123456789012345678901234567890123456789012345678901234567890" +
        "1234567890123456789012345678901234567890123456789012345678哈哈1234567890123456789012345678901234567890" +
        "1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890" +
        "1234567890123456789012345678901234567890123456789哈哈2345678901234567890123456789012345678901234567890" +
        "1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890" +
        "1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890" +
        "1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890" +
        "123456789012345678901234567890123456789012345678901234567890123嘻嘻67890123456789012345678901234567890" +
        "12345678901234567890123456789012345678901234哈哈哈012345678901234567890123456789012345678901234567890";
  
      let p = document.createElement("p");
      p.innerHTML = str;
      container.appendChild(p);
    }
    let time = Date.now() - begin;
    console.log(Date.now(), ': cost time:', time);
  }