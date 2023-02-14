# ReactNative 기본내용 정리
- 공부하면서 정리한 내용이기때문에 지속적으로 업데이트 될 예정입니다.
- 개발환경은 MacOS를 기준으로 작성되었습니다.
- 기본적으로 필요한 IDE
  - VS CODE
  - Android Studio
  - WebStorm(선택)


## 설치
<details>
<summary>설치 문서</summary>
<div markdown="1">
- 공식홈페이지가 최고다. [링크](https://reactnative.dev/docs/environment-setup)
- expo로 쉽게 설치할수도 있지만, React Native를 직접 실행하려고 한다

### 1. Homebrew 설치
- [brew.sh](https://brew.sh/)
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
- 설치 확인
    ```bash
    brew -v
    ```
### Node & Watchman 설치
- Node는 nvm과 함께 설치하면 좋다
- nvm은 Node버전을 관리해주는 툴이다
    ```bash
    brew install node
    brew install watchman
    ```

### Java 설치
- Android Studio 혹은 Intellij를 설치하면 같이 설치 할 수 있다
    ```bash
    brew tap homebrew/cask-versions
    brew install --cask zulu11
    ```

### Android Studio 및 Virtual Device 세팅
- [Android Studio](https://developer.android.com/studio) 설치
- Virtual Device생성
  - AVD Manager를 통해 생성
  - 해당하는 부분은, 안드로이드 스튜디오 설정에서 할 수 있다


### Ruby 설치 - iOS
- [Ruby](https://www.ruby-lang.org/ko/) 설치
    ```bash
    brew install ruby
    ```
- 루비 설정 후, 차후에 `rbenv: version x.x.x is not installed...` 가 나오면, 아래의 명령어를 통해 루비환경을 재설정 해주자
  ```bash
  rbenv install x.x.x
  brew update && brew upgrade ruby-build
  ```
</div>
</details>


