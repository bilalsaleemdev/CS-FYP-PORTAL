import Task from '../../models/admin/Task';

export default interface TaskListRes {
    [category: string]: Array<Task>;
}