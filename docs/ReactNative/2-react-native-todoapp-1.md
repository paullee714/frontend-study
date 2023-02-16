# React Native로 Todo App 만들기 - Todo 앱 레이아웃 잡기
- [Github Commit Ref](https://github.com/paullee714/frontend-study/tree/05754757af3e717ddc1c2eb19c230499e1d19012)
## Todo를 추가할 AddTodo 컴포넌트 추가하기
- Todo를 추가해주는 컴포넌트를 만들어서, App.tsx에 추가 해주자.
- 날짜를 나타내는 Header 밑에 AddTodo 컴포넌트를 추가 해 준다
    ```typescript
    import React from 'react';
    import {View, StyleSheet} from 'react-native';
    
    function AddTodo() {
        return <View style={styles.block}></View>;
    }

    const styles = StyleSheet.create({
        block: {
            backgroundColor: 'red',
            height: 100,
        },
    });

    export default AddTodo;

    ```
- App.tsx에 추가 해 준다
    ```typescript
    import React from 'react';
    import {StyleSheet} from 'react-native';
    import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
    import AddTodo from './components/AddTodo';
    import DateHeadComponents from './components/DateHeadComponents';

    const App = () => {
    const today = new Date();

    return (
        <SafeAreaProvider>
            <SafeAreaView edges={['bottom']}>
                <DateHeadComponents date={today} />
                <AddTodo />
            </SafeAreaView>
        </SafeAreaProvider>
        );
    };

    const style = StyleSheet.create({});

    export default App;
    ```


## Todo를 모두 처리했을 때 나타나는 컴포넌트 만들기
- Todo를 모두 처리했을 때 나타나는 컴포넌트를 만들어서, App.tsx에 추가 해주자.
    ```typescript
    import React from 'react';
    import {View, StyleSheet, Text} from 'react-native';

    function Empty() {
    return (
        <View style={styles.block}>
        <Text style={styles.description}> 할 일을 모두 해치웠습니다! </Text>
        </View>
    );
    }

    const styles = StyleSheet.create({
        block: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        description: {
            fontSize: 24,
            color: '#9e9e9e',
        },
    });

    export default Empty;
    ```
- App.tsx에 추가 해 준다
    ```typescript
    import React from 'react';
    import {StyleSheet} from 'react-native';
    import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
    import AddTodo from './components/AddTodo';
    import DateHeadComponents from './components/DateHeadComponents';
    import Empty from './components/Empty';

    const App = () => {
    const today = new Date();

    return (
        <SafeAreaProvider>
            <SafeAreaView edges={['bottom']} style={styles.block}>
                <DateHeadComponents date={today} />
                <Empty />
                <AddTodo />
            </SafeAreaView>
        </SafeAreaProvider>
    );
    };

    const styles = StyleSheet.create({
        block: {
            flex: 1,
        },
    });

    export default App;

    ```
    - 이 때, SafeAreaView에도 `flex:1` 을 적용해서, 화면 전체를 차지하도록 해준다.


## Todo를 모두 처리했을 때 나타나는 컴포넌트에 그림 넣기
- assets 폴더에 아이콘과 그림을 모두 넣는다
- `Empty.tsx` 컴포넌트 안에 그림을 넣어준다
    ```typescript
    import React from 'react';
    import {View, StyleSheet, Text, Image} from 'react-native';

    function Empty() {
    return (
        <View style={styles.block}>
        <Image
            source={require('../assets/images/young_and_happy.png')}
            style={styles.image}
            resizeMode="cover"
        />
        <Text style={styles.description}> 할 일을 모두 해치웠습니다! </Text>
        </View>
    );
    }

    const styles = StyleSheet.create({
    block: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 300,
        height: 200,
        marginBottom: 16,
    },
    description: {
        fontSize: 24,
        color: '#9e9e9e',
    },
    });

    export default Empty;

    ```