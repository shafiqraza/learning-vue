export const fruitMixin = {
  data(){
    return {
      searchFruit: '',
      fruits: ['Apple','Mango', 'Banana','Orange','Lichi']
    }
  },
  computed: {
    filteredFruit() {
      return this.fruits.filter((fruit) =>{
        return fruit.match(this.searchFruit)
      }) 
    }
  },
}