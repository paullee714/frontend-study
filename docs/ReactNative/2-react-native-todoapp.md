# React Native로 Todo App 만들기 - 헤더 만들기

- [Github Commit Ref](https://github.com/paullee714/frontend-study/tree/10cb94f5c150e22f7e6209232c2dc3d4c646de28)
- React Native로 간단한 Todo App을 만들어보자

## React Native 프로젝트 생성

- 프로젝트를 생성한다
    ```bash
    npx react-native init SimpleTodoApp
    ```
- 프로젝트 생성시, TypeScript를 사용하고싶다면 `--template` 옵션을 넣어준다
    ```bash
    npx react-native init SimpleTodoApp --template react-native-template-typescript
    ```

## React Native 프로젝트 실행

- 프로젝트 세팅 (init) 이 완료되었으면 앱을 실행 해 본다
    ```bash
    yarn ios
    ```
    ```bash
    yarn android
    ```

## React Native 프로젝트 세팅

### App.tsx 초기확

- 기본적으로 만들어주는 컴포넌트가 아닌, 내가 새로 만들기 위한 App.tsx를 초기화 해 준다
    ```typescript
    import React from 'react';
    import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

    const App = () => {
        const today = new Date();

        return (
            <SafeAreaView>
            <View>
                <Text> Todo App</Text>
            </View>
            </SafeAreaView>
        );
    };

    const style = StyleSheet.create({});

    export default App;
    ```

### DateHeader 컴포넌트 만들기
- "언제" 할일을 표시 해 주기 위해서, 날짜를 표시 해 주는 컴포넌트를 만든다
- props로 상위 컴포넌트에서 Date를 받아 각각 `year` `month` `day`로 나눠서 표시 해 준다
    ```typescript
    import React from 'react';
    import {View, Text, StyleSheet, StatusBar} from 'react-native';

    function DateHeadComponents({date}) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return (
            <View style={style.block}>
                <Text style={style.dateText}>
                {year}년 {month}월 {day}일
                </Text>
            </View>
        );
    }

    const style = StyleSheet.create({
        block: {
            padding: 16,
            backgroundColor: '#26a69a',
        },
        dateText: {
            fontSize: 24,
            color: 'white',
        },
    });

    export default DateHeadComponents;
    ```

### DateHeader의 StatusBar 꾸미기
- DateHeader는 상단에 위치 할 수 있도록 만든 컴포넌트다. 모바일 기기에는 상단 위에 위치한 StatusBar가 있다. 이 StatusBar에 따라 모바일 앱이 깨져보이기도, 일체되어보이기도한다. 이 StatusBar의 색상을 잡아주자.
- iOS와 Android가 설정방법이 다르기 때문에 따로 설정 해 주자
    
    #### Android
    - Android는 `<StatusBar />` 컴포넌트로 가능하다  아래와 같이 작업 해 준다
    ```typescript
    import React from 'react';
    import {View, Text, StyleSheet, StatusBar} from 'react-native';

    function DateHeadComponents({date}) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return (
            <>
            <StatusBar backgroundColor="#26a69a" />
            <View style={style.block}>
                <Text style={style.dateText}>
                {year}년 {month}월 {day}일
                </Text>
            </View>
            </>
        );
    }

    const style = StyleSheet.create({
        block: {
            padding: 16,
            backgroundColor: '#26a69a',
        },
        dateText: {
            fontSize: 24,
            color: 'white',
        },
    });

    export default DateHeadComponents;
    ```

    #### iOS
    - iOS는 `StatusBar`로 설정을 완료 해 줄 수 없다.
    - 노치와 하단 홈스와이프 영역을 `SafeAreaView`로 체크 해 주고 있는데, `SafeAreaView`이 지켜주고있는 상단여백을 없앤 다음, 없앤 영역을 `<View></View>` 로 채워야 한다

    1. `react-native-safe-area-context`  라이브러리 사용하기
       - `yarn add react-native-safe-area-context` 명령어로 설치
    2. `ios` 폴더로 들어가서 `pod install` 명령어로, 라이브러리를 ios 내부에서 사용 하도록 install 과정을 진행 해 준다
    3. `yarn ios` 로 다시 실행 해주기


    ```typescript
    import React from 'react';
    import {StyleSheet} from 'react-native';
    import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
    import DateHeadComponents from './components/DateHeadComponents';

    const App = () => {
        const today = new Date();

        return (
            <SafeAreaProvider>
                <SafeAreaView edges={['bottom']}>
                    <DateHeadComponents date={today} />
                </SafeAreaView>
            </SafeAreaProvider>
        );
    };

    const style = StyleSheet.create({});

    export default App;
    ```
    - `react-native-safe-area-context`에서 제공하는 `SafeAreaView`, `SafeAreaProvider` 를 가져와서 사용하고, `edges`라는 Props를 사용해 여백을 없애주면, 상단의 시간표시와 우리가 만든 DateHeaderComponents가 합쳐진다
    - 노치 부분, 상단 StatusBar의 높이를 `useSafeAreaInsets` 라는 Hook을 사용해 가져올 수 있다. DateHeader 컴포넌트에 적용 해 주자
    ```typescript
    import React from 'react';
    import {View, Text, StyleSheet, StatusBar} from 'react-native';
    import {useSafeAreaInsets} from 'react-native-safe-area-context';

    function DateHeadComponents({date}) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const {top} = useSafeAreaInsets();

    return (
        <>
            <View style={[style.statuisBarPlaceholder, {height: top}]} />
            <StatusBar backgroundColor="#26a69a" />
            <View style={style.block}>
                <Text style={style.dateText}>
                {year}년 {month}월 {day}일
                </Text>
            </View>
        </>
        );
    }

    const style = StyleSheet.create({
        statuisBarPlaceholder: {
            backgroundColor: '#26a69a',
        },
        block: {
            padding: 16,
            backgroundColor: '#26a69a',
        },
        dateText: {
            fontSize: 24,
            color: 'white',
        },
    });

    export default DateHeadComponents;
    ```