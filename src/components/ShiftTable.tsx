import { formatShift } from "../utils/utils";
import { useState } from "react";
import type { Job } from "../types/types";
import { Text } from "./components"

const ShiftTable = ({ shifts }: { shifts: Job['shifts'] }) => {
  const [showAll, setShowAll] = useState(false);
  const maxVisible = 3;
  const visibleShifts = showAll ? shifts : shifts.slice(0, maxVisible);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <Text variant="subtitle">Shift Dates</Text>
        <Text variant="caption">{shifts.length} total</Text>
      </div>

      <div className="space-y-1">
        {visibleShifts.map((shift) => {
          const { day, date, time } = formatShift(shift.startDate, shift.endDate);
          
          return (
            <div key={shift.startDate} className="flex justify-between items-center py-1 border-b border-gray-100 last:border-0">  
              <Text variant="body">{day}, {date}</Text>
              <Text variant="body">{time}</Text>
            </div>
          );
        })}
      </div>

      {shifts.length > maxVisible && (
        <button onClick={() => setShowAll(!showAll)} 
        className="mt-2 text-sm font-semibold text-blue-500 hover:text-blue-700 transition-colors">
          {showAll ? "Show less" : `Show ${shifts.length - maxVisible} more`}
        </button>
      )}
    </div>
  );
};

export default ShiftTable