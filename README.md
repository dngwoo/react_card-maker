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

1. query string
   쿼리 스트링이란 주소에서 ? 뒤에 오는 것들을 의미한다. 클라이언트가 어떤 특정 리소스에 접근하고 싶어하는지 정보를 담는다. 쿼리 스트링에 여러 정보를 담을 수 있는 데 정보 하나를 쿼리 파라미터라고 한다. & 로 여러개 이어 붙일 수 있다.

1. components/login.jsx에서 react-router-dom을 활용하여 페이지 이동 시 값 보내기

   ```jsx
   const goToMaker = (userId) => {
     history.push({
       pathname: "/maker",
       state: { id: userId }, // 값을 같이 전달하고 싶을때 이렇게 사용한다.
     });
   };

   const onLogin = (event) => {
     authService //
       .login(event.currentTarget.textContent)
       .then((data) => goToMaker(data.user.uid)); // 여기 반환값에 user안에 uid라는 것이 있는데 unique id를 의미한다. db에 사용한다.
   };
   ```

   이렇게 /maker에 state값을 보내게 되면 Router.Provider의 props에 value.location.state에 담기게 된다. 확인해보니 제일 상단의 Route.Consumer의 context부터 props로 전달한다.

   ![스크린샷 2020-12-05 오후 7 16 54](https://user-images.githubusercontent.com/56942649/101239965-555bc400-372f-11eb-84fe-690be71afe1f.png)

1. 효율적인 데이터 형태
   array를 사용하게 되면 해당 값을 찾을 때 안에 요소만큼 for문을 돌게된다. 하지만 object를 사용하게 되면 object['key'] 이런식으로 한번에 찾을 수 있으므로 효율적이다. 그래서 DB에서 데이터를 받아서 SET, MAP 자료구조에 따라 잘 생각해서 처리를 해주면 좋을 것 같다.

1. setState
   setState는 비동기 훅(메소드)이므로 예전 값을 바탕으로 다른값을 만들어서 바꾸는 경우 (ex) [...preObj, newObj])에는 예전 값이 최신 값이라고 확신할 수 없다. 그러므로 setState에서 제공하는 callback 함수를 사용해야 한다.

   ```js
   setState((prevState) => {
     const updated = { ...prevState, newObj };
     return updated;
   });
   ```

1. 리액트에서 권장하는 form
   Form은 Controlled components중 하나로, 순수 HTML input에서 사용자가 자유롭게 입력한 데이터를 submit과 같은 특정한 이벤트가 발생했을때 입력받은 데이터에 접근하는 방식과는 다르게, 리액트 폼에서는 컴포넌트안 State 데이터가 하나의 사실일 수 있도록, 즉, 사용자가 화면에 보고 있는 데이터와 State에서 담고 있는 데이터가 동일하도록, 그렇게 만드는것이 권장되어진다.

   Form은 일반적으로 작은 영역이기 때문에, 입력할때마다 특정한 부분이 re-rendering이 되어도 리액트 자체적으로 효율적으로 DOM에 업데이트 해주기 때문에 성능은 크게 걱정하지 않아도 된다.
