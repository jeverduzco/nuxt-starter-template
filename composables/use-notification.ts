// define app states
import { Notification } from "@/types/use-notification";

// export notifications state
export const useNotification = () => useState<Notification>("notification", () => ({
  show: false,
  severity: "info",
  summary: "",
  detail: "",
  life: 3000
}));
