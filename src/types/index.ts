export interface Task {
    id: number;
    status: 'done' | 'pending';
    task: string;
}