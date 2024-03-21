import getCategoryDataReducer from './slice/categorySlice'
import getLocationDataReducer from './slice/locationSlice'


const rootReducer = {
    getCategoryData : getCategoryDataReducer,
    getLocationData : getLocationDataReducer,

}

export default rootReducer;
