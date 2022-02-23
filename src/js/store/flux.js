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
      toggleFavorites: (name) => {
        let favsList = getStore().favorites;
        let found = favsList.find((item) => item == name)
        if (found) {
          favsList = favsList.filter(item => item != name);
        }
        else {
          favsList = [...favsList,name]
        }
        setStore({ favorites: favsList });
	
      },
      
    },
  };
};


export default getState;
