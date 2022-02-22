const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favorites: [],
      characters: [],
      planets: [],
      // demo: [
      // 	{
      // 		title: "FIRST",
      // 		background: "white",
      // 		initial: "white"
      // 	},
      // 	{
      // 		title: "SECOND",
      // 		background: "white",
      // 		initial: "white"
      // 	}
      // ]
    },
    actions: {
      addFavorites: (name) => {
        let favsList = getStore().favorites;
        if (!getStore().favorites.find((item) => item == name)) {
          favsList.push(name);
        }
        setStore({ favorites: favsList });
		console.log(getStore().favorites);
      },
      deleteFavorite: (name) => {
        let filterFavorites = getStore().favorites.filter(
          (favoriteToRemove, index) => name != favoriteToRemove
        );
        setStore({ favorites: filterFavorites });
      },
    },
  };
};


export default getState;
