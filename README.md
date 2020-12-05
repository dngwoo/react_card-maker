# 사용하는 기술

- [ ] Firebase
- [ ] Cloudinary
- [ ] React

# 알게 된 것

1. 이벤트 버블링 & 캡쳐링
   이벤트 버블링이란 어떤 이벤트가 발생되었을 때 해당 이벤트가 발생된 요소의 부모 요소를 통하여 최상위 요소까지 이벤트 전달되는 현상이다. 캡쳐링이란 그 반대이다. 캡쳐링을 확인하기 위해서는 addEventListener안에 capture: true를 넣어주자.

1. 이벤트 위임
   부모요소에 이벤트를 하나만 주어 코드의 재사용성을 높이고 메모리를 절약할 수 있다.

   ```js
   <ul id="parent-list">
   <li id="1">Item 1</li>
   <li id="2">Item 2</li>
   <li id="3">Item 3</li>
   <li id="4">Item 4</li>
   <li id="5">Item 5</li>
   <li id="6">Item 6</li>
   </ul>

   <script>
   document.getElementById("parent-list").addEventListener("click", function(e) {
       if(e.target && e.target.nodeName == "LI") {
           console.log(e.target.id);
       }
   });
   </script>

   ```

1. event.target vs event.currentTarget
   currentTarget은 이벤트가 걸려있는 위치를 반환한다.(this가 가르키는 것과 같음) event.target은 실제 이벤트가 발생하는 위치를 반환한다. 예를 들어보면 이벤트 위임의 코드에서 보면 currentTarget은 parent-list가 되고 target은 li가 될 것이다.
