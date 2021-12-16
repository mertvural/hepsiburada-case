import { createSlice } from '@reduxjs/toolkit'
let datas = require('../data');

const initialState = {
  value: datas,
  colorActiveText: false,
  brandActiveText: false,
  basketVal: [],
  basketProductLength: 0,
  searchTxt : ""
}

export const DataSlice = createSlice({
  name: 'datas',
  initialState,
  reducers: {
    colorFilter: (state, payload) => {
      if (state.colorActiveText) {
        state.value = datas;
        state.colorActiveText = false;
        state.brandActiveText = false
      } else {
        state.value = state.value.filter(x => x.colorId === payload.payload)
        state.colorActiveText = true;
      }
    },
    brandFilter: (state, payload) => {
      if (state.brandActiveText) {
        state.value = datas
        state.brandActiveText = false
        state.colorActiveText = false
      } else {
        state.value = state.value.filter(x => x.brandId === payload.payload)
        state.brandActiveText = true
      }
    },
    lowestPrice: function (state, target) {
      document.getElementById(target.payload).checked = true
      state.value.sort(function (a, b) {
        return parseFloat(a.price) - parseFloat(b.price);
      });

    },
    highestPrice: function (state, target) {
      document.getElementById(target.payload).checked = true
      state.value.sort(function (a, b) {
        return parseFloat(b.price) - parseFloat(a.price)
      });
    },
    newest: function (state, target) {
      document.getElementById(target.payload).checked = true
      state.value = state.value.reverse()
    },
    oldest: function (state, target) {
      document.getElementById(target.payload).checked = true
      state.value = state.value.reverse()
    },
    searchText: function (state, val) {
      state.searchTxt = val.payload;
      String.prototype.trLowerCase = function () {
        var string = this;
        var letters = { "İ": "i", "I": "ı", "Ş": "ş", "Ğ": "ğ", "Ü": "ü", "Ö": "ö", "Ç": "ç" };
        string = string.replace(/(([İIŞĞÜÇÖ]))+/g, function (letter) { return letters[letter]; })
        return string.toLowerCase();
      }

      if(val.payload != 0) {
        state.value = datas.filter(x => !x.name.trLowerCase().indexOf(val.payload.trLowerCase()))
      } else {
        state.value = datas
        state.searchTxt = ""
      }

     

    },
    addBasket: (state, id) => {
      let filterData = datas.filter(x => x.id === id.payload)
      state.basketVal.push(filterData[0]);
      let objIndex = state.value.findIndex((obj => obj.id == id.payload));
      state.value[objIndex].isBasket = true
      state.basketProductLength += 1;
    },
    deleteProduct: (state, id) => {
      if (window.confirm("Ürünü silmek istediğinize emin misiniz?")) {
        state.basketVal = state.basketVal.filter(x => x.id !== id.payload)
        state.basketProductLength -= 1;
        let objIndex = state.value.findIndex((obj => obj.id == id.payload));
        state.value[objIndex].isBasket = false
      }
    }
  },
})

export const { colorFilter, brandFilter, lowestPrice, highestPrice, newest, oldest, searchText, addBasket, getProductSize, deleteProduct } = DataSlice.actions
export default DataSlice.reducer
