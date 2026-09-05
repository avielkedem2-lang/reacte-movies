import { createContext } from "react";



export const LikeContext = createContext({
    favorites: [],
    addFavorite: () => { },
    removeFavorite: () => { },
})

