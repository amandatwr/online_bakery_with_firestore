<template>
  <div>
    <ul>
        <li v-for="item in itemsList" v-bind:key="item.name" v-on:click="item.show = !item.show">
            <h2>{{item.name}}</h2>
            <h3 v-show="item.show">{{item.category}}</h3>
            <button name="delete" v-bind:id="item.id" v-on:click="deleteItem(index,item)">Delete</button>
        </li>
    </ul>

  </div>
</template>


<script>
import database from '../firebase.js'
export default {
  
  data(){
    return{
        itemsList: []
        }
  },
  methods:{
    fetchItems:function(){
      database.collection('items').get().then((querySnapShot)=>{
        let item={}
        querySnapShot.forEach(doc=>{
            item=doc.data()
            item.show=false
            item.id=doc.id
            this.itemsList.push(item) 
            })      })    
        },
    deleteItem:function(index,item){
      //Deleting from DB
      database.collection('items').doc(item.id).delete()
      //Deleting from the itemsList Array
      this.itemsList.splice(index,1)
      //Msg to be displayed. Can be made as an alert
      console.log("Item Deleted Successfully")
    }
    
  },
  created(){
      this.fetchItems()    
      }

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#itemsList{
    width: 100%;
    max-width: 1000px;
    margin: 30px auto;
    padding: 0 5px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 10px;
    border: 1px solid #222;
    margin: 8px;
}

</style>