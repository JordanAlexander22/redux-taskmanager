import { EDIT_TASK, CREATE_TASK } from '../actions/types'; 

const initialState = [
	// {
	// 	id: 1,
	// 	title: 'Learn ReactJS',
	// 	description: 'Lets Learn React',
	// 	status: 'Completed'
	// },
	// {
	// 	id: 2,
	// 	title: 'Learn Redux',
	// 	description: 'Learn Redux Today',
	// 	status: 'Unstarted'
	// },
	// {
	// 	id: 3,
	// 	title: 'Learn varial flip',
	// 	description: 'Learn varial flip',
	// 	status: 'In Progress'
	// }
];

const tasks = (state = { tasks: initialState }, action) => {
	// if(action.type === EDIT_TASK) {   IF ELSE
	//     const {payload} = action;
	//     return {
	//         tasks: state.tasks.map((task) => {
	//             if(task.id === payload.id) {
	//                 return Object.assign({}, task, payload.params )
	//             }
	//             return task
	//         }),
	//     }
	// }

	// SWITCH VERSION BELOW

	const { payload } = action;

	switch (action.type) {
		case EDIT_TASK: {
			return {
				tasks: state.tasks.map((task) => {
					if (task.id === payload.id) {
						return Object.assign({}, task, payload.params);
					}
					return task;
				})
			};
        }
        case CREATE_TASK: {
            return {
                tasks: state.tasks.concat(action.payload),
            };
        }

		default:
			return state;
	}
};

export default tasks;
