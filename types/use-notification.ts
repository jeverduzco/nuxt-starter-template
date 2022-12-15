export type Notification = {
    show: boolean;
    severity: "success" | "info" | "warn" | "error";
    summary: string;
    detail: string;
    life: number;
}
