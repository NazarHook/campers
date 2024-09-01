import { createSelector } from "@reduxjs/toolkit";
import { selectBodyTypes, selectFilterName, selectOptionFilters } from "../filters/selectors.js";

export const selectLoading = (state) => state.transports.loading;
export const selectError = (state) => state.transports.error;
export const selectCamps = (state) => state.transports.items;

export const selectFilteredCamps = createSelector(
  [selectCamps, selectFilterName, selectOptionFilters, selectBodyTypes],
  (camps, filterParam, optionsFilters, bodyTypes) => {
    return camps.filter((camp) => {
      const matchesLocation = camp.location
        .toLowerCase()
        .includes(filterParam.toLowerCase());

      const matchesBath = optionsFilters.Bathroom ? camp.bathroom === optionsFilters.Bathroom : true;
      const matchesAC = optionsFilters.AC ? camp.AC === optionsFilters.AC : true;
      const matchesTV = optionsFilters.TV ? camp.TV === optionsFilters.TV : true;
      const matchesKitchen = optionsFilters.Kitchen ? camp.kitchen === optionsFilters.Kitchen : true;
      const matchesAutomatic = optionsFilters.Automatic ? camp.transmission === 'automatic' : true;

      const matchesBodyType = (
        (bodyTypes.Van && camp.form === 'panelTruck') ||
        (bodyTypes.Fully && camp.form === 'fullyIntegrated') ||
        (bodyTypes.Alcove && camp.form === 'alcove')
      ) || (!bodyTypes.Van && !bodyTypes.Fully && !bodyTypes.Alcove); 

      return matchesLocation && matchesBath && matchesAC && matchesTV && matchesKitchen && matchesAutomatic && matchesBodyType;
    });
  }
);
