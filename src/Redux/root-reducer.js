import { CombinedReducers } from 'redux';
import userReducer from './User/user.reducer';


export default CombinedReducers({
  user:userReducer
})
