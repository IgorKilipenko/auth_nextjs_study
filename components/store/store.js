import { configureStore } from '@reduxjs/toolkit'
import { slicies } from './reducers'
import { createLogger } from 'redux-logger'

const logger = createLogger({
    predicate: (getState, action) =>
        action.type !== 'components/setMainComponentMousePosition',
    collapsed: (getState, action, logEntry) => !logEntry.error,
})

const componentsSlice = slicies.components
const todoSlice = slicies.todos

const actions = {
    components: { ...componentsSlice.actions },
    todos: { ...todoSlice.actions },
}

const configureAppStore = ({ theme, components, todos }) => {
    const reducer = {
        components: componentsSlice.reducer,
        todos: todoSlice.reducer,
    }
    const store = configureStore({
        reducer,
        preloadedState: {
            components: { ...componentsSlice.getInitialState(), ...components },
            todos: { ...todoSlice.getInitialState(), ...todos },
        },
        middleware: (getDefaultMiddleware) => {
            if (process.env.NODE_ENV === `development`) {
                return getDefaultMiddleware().concat(logger)
            }
            return getDefaultMiddleware()
        },
        devTools: process.env.NODE_ENV !== 'production',
    })
    return store
}

export default configureAppStore
export { actions }
