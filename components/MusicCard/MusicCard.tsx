import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import styles from "./MusicCard.style";
export interface Music {
  id: number | string;
  title: string;
  imageUrl: string;
  year: number;
  isSoldOut: boolean;
  album: string;
  artist: string;
}

function MusicCard({ song }: { song: Music }) {
  return (
    <SafeAreaView style={styles.container1}>
      <View style={styles.container}>
        <View style={styles.image_container}>
          <Image style={styles.image} source={{ uri: song.imageUrl }} />
        </View>
        <View style={styles.inner_container}>
          <Text style={styles.title}>{song.title}</Text>
          <View style={styles.content_container}>
            <View style={styles.year_cantainer}>
            <Text>{song.artist}</Text>
            <Text style={styles.year}>{song.year}</Text>
            </View>
           
            <View style={styles.active_container}>
            {song.isSoldOut&&<Text style={styles.text}>Tükenti</Text>}  
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default MusicCard;
