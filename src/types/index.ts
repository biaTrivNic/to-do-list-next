export interface Task {
    id: number;
    status: 'done' | 'pending';
    name: string;
}