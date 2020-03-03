export default (state, action) => {
    switch(action.type){
        case 'add-transaction':
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        case 'delete-transaction':
            return {
                ...state,
                transactions: state.transactions.filter(t => t.id !== action.payload)
            }
        default:
            return state
    }
}