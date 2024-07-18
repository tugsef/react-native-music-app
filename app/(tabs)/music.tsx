import React, { useState } from "react";
import {View, StyleSheet, SafeAreaView, Text, FlatList } from "react-native";

import musicList from "@/assets/data/music-data.json";
import MusicCard from "@/components/MusicCard";
import { Music } from "@/components/MusicCard/MusicCard";
import SearchBar from "@/components/SearchBar";
export default function TabTwoScreen() {
   
  const [text,setText] = useState('');


  const renderSong = ({ item }: { item: Music }) => <MusicCard song={item} />;
  const separator = ()=> <View style={styles.separator}/>
 
  const updateText = ({text}:{text:string}) =>{
   setText(text)
  }

  let searchList = musicList.filter((obje) =>
    Object.values(obje).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(text.toLowerCase())
    )
  );



  
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar updateText={updateText}/>
      <FlatList
        style={styles.list_container}
        data={searchList}
        renderItem={renderSong}
        ItemSeparatorComponent={separator}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list_container: {
    flex: 1,
  },
  separator:{
width:'100%',
height:1,
backgroundColor:'#B6BBC4'

  }
});
