import { combineReducers } from 'redux'

function reducer(state = {mainVideo: [], sidebar: []}, action){
  switch (action.type) {
    case "FETCH_VIDEOS":
      return Object.assign({}, state, {mainVideo: action.payload.data.items[0], sidebar: action.payload.data.items.slice(1)})
    case "SWITCH_VIDEOS":
      return switchVideoLogic(state, action)
    default:
      return state
  }
}



//const rootReducer = combineReducers({reducer})

export default reducer

  function switchVideoLogic(state, action) {
      let tempMainVideo;
      let tempSidebar = state.sidebar;
      let searchUrl = action.payload;

      let index = state.sidebar.findIndex(function(obj){
        return obj.snippet.thumbnails.medium.url === searchUrl
      })

      tempMainVideo = state.sidebar[index]

      tempSidebar[index] = state.mainVideo
      return Object.assign({}, state, {mainVideo: tempMainVideo, sidebar: tempSidebar})
    }
