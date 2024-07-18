import React from 'react'
import { SafeAreaView, Text, TextInput, TextInputProps } from 'react-native'
import styles from './SearchBar.style'
function SearchBar({updateText}:{updateText:({text}:{text:string})=>void}) {

  return (
    <SafeAreaView>
        <TextInput style={styles.input} placeholder='Search...' onChangeText={text=>updateText({text})}/>
    </SafeAreaView>
  )
}

export default SearchBar