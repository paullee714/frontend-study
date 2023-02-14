# React Native로 간단한 Counter 만들기

- Github Commit Ref : ...
- 나만의 컴포넌트를 만들어보고, 해당하는 컴포넌트를 사용해서 Counter App을 만들어보자

## Custom 컴포넌트 만들기

- 리액트를 실행하면 가장 처음 작성되어있는 기본 App.tsx를 모두 지우고 기본 틀만 남겨보자

    ```typescript
    import React from 'react';
    import {View, Text} from 'react-native';

    const App = () => {
        return (
            <View>
                <Text> hello World! </Text>
            </View>
        );
    };

    export default App;
    ```


- 새로운 컴포넌트를 하나 더 만들고, App.tsx에서 import 해서 사용해보자

    ```typescript
    // components/Greeting.tsx
    import React from 'react';
    import {View, Text} from 'react-native';

    function Greeting(props: {name: string}) {
    return (
        <View>
          <Text> Greeting React {props.name} </Text>
        </View>
        );
    }

    Greeting.defaultProps = {
        name: 'John',
    };

    export default Greeting;
    ```

    - pros는, 컴포넌트 내에서 사용 할 수 있는 속성들을 의미한다.
    - 컴포넌트를 사용 할 때 임의의 값을 넣어 줄 수 있다
    - `defaultProps` 를 통해 props 내부의 기본값을 설정 해 줄 수 있다

- 새로운 컴포넌트를 적용시켜보자

    ```typescript
    import React from 'react';
    import {View, Text} from 'react-native';
    import Greeting from './components/Greeting';

    const App = () => {
    return (
        <View>
            <Greeting name="홍길동" />
        </View>
        );
    };

    export default App;
    ````
## Custom 컴포넌트에 스타일 적용하기

- 스타일은 `react-native`에서 제공하는 `StyleSheet`를 사용해서 적용 할 수 있다
  
    ```typescript
    import React, {useState} from 'react';
    import {SafeAreaView, StyleSheet} from 'react-native';
    import Counter from './components/Counter';

    import React from 'react';
        import {View, Text} from 'react-native';
        import Greeting from './components/Greeting';

    const App = () => {
        return (
            <View style={styles.full}>
                <Greeting name="홍길동" />
            </View>
        );
    };

    const styles = StyleSheet.create({
    full: {
        flex: 1,
        backgroundColor: 'aqua',
    },
    });

    export default App;
    ```

## Props 객체 구조 분해 할당
- 지금까지, props는 {props} 로 적고, 사용할 때 {props.name} 으로 사용했다
- 내부에 어떤 객체들이 있는지 알기전까지는 사요에 어려움이 있다
- 객체 구조 분해 할당은 props를 명시하여 컴포넌트 내에 적어주어 확인 할 수 있도록 해 준다

    ```typescript
    import React from 'react';
    import {View, Text} from 'react-native';

    function Greeting({name, age, color}) {
    return (
        <View>
            <Text> Greeting My name is {name} </Text>
            <Text> Greeting Age is {age} </Text>
            <Text> My Favorite color is {color} </Text>
        </View>
        );
    }

    Greeting.defaultProps = {
        name: 'John',
    };

    export default Greeting;
    ```
    - styleSheet를 적용해서, props를 통해 여러가지 형태를 적용 해 볼 수 있다


## useState Hook 사용하기
- useState는 리액트에서 제공하는 Hook으로, 컴포넌트 내부에서 상태를 관리 할 수 있도록 해 준다
- useState는 배열을 반환하는데, 첫번째 요소는 상태값, 두번째 요소는 상태를 설정하는 함수이다

    ```typescript
    import React, {useState} from 'react';
    import {SafeAreaView, StyleSheet} from 'react-native';
    import Counter from './components/Counter';

    const App = () => {
        const [count, setCount] = useState(0); // useState(0) : 초기값을 0으로 설정
        return (
            <SafeAreaView style={styles.full}>
                <Counter count={count} setCount={setCount} />
            </SafeAreaView>
        );
    };

    const styles = StyleSheet.create({
        full: {
            flex: 1,
            backgroundColor: 'aqua',
        },
    });

    export default App;
    ```
    - useState가 사용되어있는 라인을 보면, count와 setCount가 있다. count는 데이터를 저장하는 변수이고, setCount는 데이터를 변경하는 함수이다
    - useState(0)으로 count의 초기값을 0으로 설정해주었다
    - setCount(1)으로 count의 값을 1로 변경 할 수 있다. 이부분을 응용해서 함수를 만들어서 사용 할 수 있다
      - ```typescript
        const onIncrease = () => setCount(count + 1);
        const onDecrease = () => setCount(count - 1);
        ```

## Counter 컴포넌트 만듥고, App.tsx에 불러오기

- 위에서 hook을 정리하면서 만들어 둔 `App` 함수와 `onIncrease`,`onDecrease` 를 활용하여 Counter 앱을 완성 해 보자

### Counter Component
- components 폴더 하위에 `Counter.tsx`를 만들고 아래와 같이 넣어준다

    ```typescript
    import React from 'react';
    import {View, Text, StyleSheet, Button} from 'react-native';

    function Counter({count, onIncrease, onDecrease}) {
    return (
        <View style={styles.wrapper}>
        <View style={styles.numberArea}>
            <Text style={styles.number}>{count}</Text>
        </View>
        <Button title="Increment" onPress={onIncrease} />
        <Button title="Decrement" onPress={onDecrease} />
        </View>
    );
    }

    Counter.defaultProps = {
        count: 0,
    };

    const styles = StyleSheet.create({
        wrapper: {
            flex: 1,
        },
        numberArea: {
            flex: 12,
            alignItems: 'center',
            justifyContent: 'center',
        },
        number: {
            fontSize: 72,
            fontWeight: 'bold',
        },
    });

    export default Counter;
    ```

### App.tsx를 완성하자
- App.tsx로 돌아가, Counter 컴포넌트를 불러와서 사용해보자

    ```typescript
    import React, {useState} from 'react';
    import {SafeAreaView, StyleSheet} from 'react-native';
    import Counter from './components/Counter';

    const App = () => {
        const [count, setCount] = useState(0); // useState(0) : 초기값을 0으로 설정
        const onIncrease = () => setCount(count + 1);
        const onDecrease = () => setCount(count - 1);
        return (
            <SafeAreaView style={styles.full}>
                <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
            </SafeAreaView>
        );
    };

    const styles = StyleSheet.create({
        full: {
            flex: 1,
            backgroundColor: 'aqua',
        },
    });

    export default App;
    ```

### App 실행하기

- iOS
  ```bash
  yarn ios
  ```
- Android
  ```bash
  yarn android
  ```