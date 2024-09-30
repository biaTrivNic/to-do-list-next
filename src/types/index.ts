export interface Task {
    id: number;
    status: 'done' | 'pending';
    title: string;
}