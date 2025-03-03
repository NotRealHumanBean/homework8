import { createStore } from 'vuex'
import { laptops } from '@/constants/laptops'
import { products } from '@/constants/products'
import { accums } from '@/constants/accums'
import { tablets } from '@/constants/tablets'
import { cars, trucks } from '@/constants/cars'
import { getSelectorList } from "./helpers/getSelectorList"
import { v4 as uuidv4 } from 'uuid';

export default createStore({
  state: {
    currentSection: null,
    carList: [],
    typeList: [
      { id: 1, type: "Легкові автомобілі" },
      { id: 2, type: "Грузові автомобілі" },
    ],
    currentType: "Легкові автомобілі",
    currentBrand: "Не вибрано",
    currentYear: "Не вибрано",
    currentCity: "Не вибрано",
    checkbox: null,
    renderList: null,
    loading: null,
    error: null,
  },
  getters: {
    getCurrentSection: ({ currentSection }) => currentSection,
    getRenderList: ({ renderList }) => renderList,
    getLoading: ({ loading }) => loading,
    getError: ({ error }) => error,
    getCurrentYear: ({ currentYear }) => currentYear,
    getCurrentBrand: ({ currentBrand }) => currentBrand,
    getCurrentCity: ({ currentCity }) => currentCity,

    getCarList(state) {
      let filteredList = state.carList
      if (state.currentBrand === "Всі марки" || state.currentYear === "Всі роки" || state.currentCity === "Всі міста") {
        filteredList = state.carList
      } else if (state.currentBrand === "Не вибрано" && state.currentYear === "Не вибрано" && state.currentCity === "Не вибрано") {
        filteredList = []
      } else {
        // selectFilter(state.currentBrand, "Всі марки", "Не вибрано", filteredList, 'brand')
        if (state.currentBrand !== "Всі марки" && state.currentBrand !== "Не вибрано") {
          filteredList = filteredList.filter(i =>
            i.brand === state.currentBrand
          )
        }
        if (state.currentYear !== "Всі роки" && state.currentYear !== "Не вибрано") {
          filteredList = filteredList.filter(i =>
            i.year === state.currentYear
          )
        }
        if (state.currentCity !== "Всі міста" && state.currentCity !== "Не вибрано") {
          filteredList = filteredList.filter(i =>
            i.city === state.currentCity
          )
        }
      }
      if (state.checkbox) {
        let filteredItemsStore = []
        for (let key in state.checkbox) {
          let sampleList = filteredList
          if (state.checkbox[key]) {
            sampleList = filteredList.filter(i => i.bodyType === key)
            let mywArr = [...sampleList]
            filteredItemsStore.push(...mywArr)
          }
        }
        filteredList = filteredItemsStore
      }

      return filteredList

    },
    getTruckList(state) {
      return state.truckList
    },
    getBrandList(state) {
      let selectorList
      selectorList = getSelectorList(state.carList, "brand")
      selectorList.unshift({ id: uuidv4(), type: "Всі марки" })
      selectorList.unshift({ id: uuidv4(), type: "Не вибрано" })
      return selectorList
    },
    getYearList(state) {
      let yearList
      yearList = getSelectorList(state.carList, "year")
      yearList.unshift({ id: uuidv4(), type: "Всі роки" })
      yearList.unshift({ id: uuidv4(), type: "Не вибрано" })
      return yearList
    },
    getCityList(state) {
      let cityList
      cityList = getSelectorList(state.carList, "city")
      cityList.unshift({ id: uuidv4(), type: "Всі міста" })
      cityList.unshift({ id: uuidv4(), type: "Не вибрано" })
      return cityList
    },
    getTypeList: ({ typeList }) => typeList,
    getCurrentType: ({ currentType }) => currentType,
  },
  mutations: {
    setCurrentSection(state, param) {
      state.currentSection = param
    },
    setRenderList(state, param) {
      state.renderList = param
    },
    setValue(state, { prop, val }) {
      state[prop] = val

    },
    clearValue(state) {
      state.currentBrand = "Не вибрано"
      state.currentYear = "Не вибрано"
    },
    //////////////////////////////////////////////////////////////////////////////////////
    setCarList(state) {
      if (state.currentType === "Легкові автомобілі") { state.carList = cars }
      else { state.carList = trucks }
      console.log(state.carList)
    }
  },
  actions: {
    async mainRenderAction({ commit, dispatch, getters, }, param) {
      commit('setCurrentSection', param)
      if (getters.getCurrentSection === "Ноутбуки") {
        await dispatch('setUpAction', laptops)
      } else if (getters.getCurrentSection === "Продукти") {
        await dispatch('setUpAction', products)
      }
      else if (getters.getCurrentSection === "Зарядні станції") {
        await dispatch('setUpAction', accums)
      } else if (getters.getCurrentSection === "Планшети") {
        await dispatch('setUpAction', tablets)
      }

    },
    setValueAction({ commit }, { prop, val }) {
      commit('setValue', { prop, val })
    },


    setUpAction({ commit }, param) {
      commit('setValue', { prop: 'loading', val: true })
      commit('setValue', { prop: 'error', val: null })

      setTimeout(() => {
        try {
          commit('setRenderList', param)
        } catch (err) {
          commit("setValue", { prop: 'error', val: err })
        } finally {
          commit('setValue', { prop: 'loading', val: false })
        }
      }, 3000)
    },
    setCarAction({ commit }) {
      commit('setCarList')
    },
    clearAction({ commit }) {
      commit('clearValue')
    }
  },
})
