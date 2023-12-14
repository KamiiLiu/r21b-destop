export default interface GameMode {
    key: number;
    name: string;
    label: string;
    route: string;
    required: string[];
    options: string[];
}
