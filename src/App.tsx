import { SuperDatePicker } from "./features/super-date-picker/ui/SuperDatePicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  return (
    <>
      <div className="min-h-screen p-8 bg-gray-100 dark:bg-gray-800">
        <SuperDatePicker
          onChange={({ mode, value, preset }) => {
            console.log("Получено снаружи:", { mode, value, preset });
          }}
        />
      </div>
    </>
  );
}

export default App;
