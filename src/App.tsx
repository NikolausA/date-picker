import { SuperDatePicker } from "./features/super-date-picker/ui/SuperDatePicker";
import "react-datepicker/dist/react-datepicker.css";

const quickRanges = [
  { label: "Last 15 minutes", from: "now-15m", to: "now" },
  { label: "Last 1 hour", from: "now-1h", to: "now" },
  { label: "Last 7 days", from: "now-7d", to: "now" },
  { label: "Today", from: "now-0d", to: "now" },
];

function App() {
  return (
    <>
      <div className="min-h-screen p-8 bg-gray-100 dark:bg-gray-800">
        <SuperDatePicker
          quickRanges={quickRanges}
          onChange={({ start, end }) => {
            console.log("[App] Selected range:", start, end);
          }}
        />
      </div>
    </>
  );
}

export default App;
