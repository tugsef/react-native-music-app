import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
    padding:20
    },
    container1:{
        flex:1,
    },
    image:{
        width:90,
        height:90,
        borderRadius:45,
       
    },
    inner_container:{
        flex:1,
        justifyContent:'center',
        gap:6,
    },
    content_container:{
        flexDirection:'row',
    
  
    
    },
    active_container:{
      flex:1,
        alignItems:'flex-end',

  
    },
    image_container:{
   marginEnd:10
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        
    },
    text:{
      borderWidth:1,
      padding:2,
      color:'red',
      borderRadius:5,
      borderColor:'red',
      fontWeight:'300'
     
    },
    year:{
        color:'grey',
        marginLeft:10,
        fontSize:10
    },
    year_cantainer:{
        flex:1,
        flexDirection:'row'
    }

})