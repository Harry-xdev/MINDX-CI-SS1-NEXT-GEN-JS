// RENDER MAIN PAGE
const mainPage = document.getElementById("mainPage")
function renderQuestTion() {
    mainPage.innerHTML += `
    <form action="/form/submit" method="post">
        <h2>Câu 1: var khai báo một biến có phạm vi trong block?
        </h2>
        <input type="radio" name="var">True
        <br>
        <input type="radio" name="var">False

        <h2>Câu 2: const khai báo một biến có phạm vi trong block?
        </h2>
        <input type="radio" name="const">True
        <br>
        <input type="radio" name="const">False

        <h2>Câu 3: let khai báo một biến có phạm vi trong block?
        </h2>
        <input type="radio" name="const">True
        <br>
        <input type="radio" name="const">False

        <h2>Câu 4: Giá trị sau cùng của obj trong ví dụ sau là gì?<br><br>
        const obj = { foo: 1 }<br>
        obj.bar = 2
        </h2>
        <ol>
        <li><input type="radio" name="result">{foo: 1}</li>
        <li><input type="radio" name="result">Error</li>
        <li><input type="radio" name="result">{foo: 1, bar: 2}</li>
        <li><input type="radio" name="result">{foo: 1, 2: bar}</li>
        </ol>
    
        <h2>Câu 5: Kết quả của ví dụ sau đây là gì?<br>
        <p>const speed = 'quick'
        'The S{speed} brown fox jumps over the lazy dog.
        </p>
        </h2>
        <ol>
        <li><input type="radio" name="cau5">{foo: 1}</li>
        <li><input type="radio" name="cau5">Error</li>
        <li><input type="radio" name="cau5">{foo: 1, bar: 2}</li>
        <li><input type="radio" name="cau5">{foo: 1, 2: bar}</li>
        </ol>

        <h2>Câu 6: Giá trị của câu lệnh obj[123] trong ví dụ sau:
        <p>const obj = {<br><br>

        }
        </p>
        </h2>
        <ol>
        <li><input type="radio" name="cau6">undefined</li>
        <li><input type="radio" name="cau6">'party!'</li>
        </ol>

        <h2>Câu 7: Giá trị của array trong ví dụ sau:
        <p>const array = [1, 2, 3]<br>
        const extension = [4, 5, 6]<br>
        array = [...extension, ...array]
        </p>
        </h2>
        <ol>
        <li><input type="radio" name="cau7">[1, 2, 3]</li>
        <li><input type="radio" name="cau7">[1, 2, 3, 4, 5, 6]</li>
        <li><input type="radio" name="cau7">[4, 5, 6, 1, 2, 3]</li>
        <li><input type="radio" name="cau7">Error</li>
        </ol>

        <h2>Câu 8: Giá trị của a trong ví dụ sau?
        <p>function mystery(...params) {<br>
            return params<br>
        }<br>
        let a = mystery(1, 23, 4);<br>
        </p>
        </h2>
        <ol>
        <li><input type="radio" name="cau8">undefined</li>
        <li><input type="radio" name="cau8">[1, 23, 4]</li>
        <li><input type="radio" name="cau8">“1 23 4”</li>
        <li><input type="radio" name="cau8">1 23 4</li>
        </ol>
        
        <h2>Câu 9: Giá trị của biểu thức sau?<br>
        <p>
        [...[..."..."]].length<br>
        </p>
        </h2>
        <ol>
        <li><input type="radio" name="cau9">3</li>
        <li><input type="radio" name="cau9">6</li>
        <li><input type="radio" name="cau9">9</li>
        <li><input type="radio" name="cau9">Error</li>
        </ol>

        <h2>Câu 10: Giá trị của a và b với ví dụ sau?<br>
        <p>
        let a = 12, b = 3;<br>
        [a, b] = [b, a];
        </p>
        </h2>
        <ol>
        <li><input type="radio" name="cau10">a = 12, b = 3</li>
        <li><input type="radio" name="cau10">a = 3, b = 12</li>
        <li><input type="radio" name="cau10">a = 12, b = 12</li>
        <li><input type="radio" name="cau10">a = 3, b = 3</li>
        </ol>

        <h2>Câu 11: Giá trị của a và b với ví dụ sau?<br>
        <p>
        const obj = {<br>
            name: "MindX"<br>
        }<br>
        const sayHello = (x) => {<br>
            let {name} = x<br>
          name = "Code Intensive"<br>
        }<br>
        sayHellO(obj)
        </p>
        </h2>
        <ol>
        <li><input type="radio" name="cau11">{name: “MindX”}</li>
        <li><input type="radio" name="cau11">{name: “Code Intensive”}</li>
        <li><input type="radio" name="cau11">Error</li>
        </ol>











    </form>

    `

    const obj = { foo: 1 }
    obj.bar = 2
    console.log(obj)
}
renderQuestTion()

