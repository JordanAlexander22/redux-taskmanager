const initialState = [
    {
        id: 1,
        title: 'Learn ReactJS',
        description: 'Lets Learn React',
        status: 'Completed'
    },
    {
        id: 2,
        title: 'Learn Redux',
        description: 'Learn Redux Today',
        status: 'Unstarted'
    },
    {
        id: 3,
        title: 'Learn varial flip',
        description: 'Learn varial flip',
        status: 'In Progress'
    }
]

const tasks = (state= {tasks: initialState}, action) => {
    return state
}

export default tasks;