import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const IntialThemeState = {
  isThemeSelected: true,
};

const ThemeMode = createSlice({
  name: "theme",
  initialState: IntialThemeState,
  reducers: {
    isLightTheme(state) {
      state.isThemeSelected = true;
    },
    isDarkTheme(state) {
      state.isThemeSelected = false;
    },
  },
});

const initialToggleExperience = {
  isExperienced: true
}

const ToggleExperience = createSlice({
  name:'experience',
  initialState: initialToggleExperience,
  reducers: {
    isExperiencedOpen(state){
      state.isExperienced = true
    },
    isExperiencedClose(state){
      state.isExperienced = false
    }
  }
}) 

const store = configureStore({
    reducer: { selectedTheme: ThemeMode.reducer, Experience: ToggleExperience.reducer
    }});

export const ThemeActions = ThemeMode.actions;
export const ToggleActions = ToggleExperience.actions

export default store;
