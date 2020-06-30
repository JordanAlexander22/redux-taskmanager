const initialState = [
    {
        id: 1,
        title: 'Learn ReactJS',
        description: 'Lets Learn Redux',
        status: 'In Progress'
    },
    {
        id: 2,
        title: 'Learn Redux',
        description: 'Learn Redux Today',
        status: 'In progress'
    }
]

const tasks = (state= {tasks: initialState}, action) => {
    return state
}