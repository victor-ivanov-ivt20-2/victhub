import { type FC } from "react";

interface ScheduleData {
  id: number;
  time: number;
  day: number;
  week: number;
  subject: {
    name: string;
  };
}
interface ScheduleProps {
  data: ScheduleData[];
}
const time = [
  "08:00 - 09:35",
  "09:50 - 11:25",
  "11:40 - 13:15",
  "14:00 - 15:35",
  "15:50 - 17:25",
  "17:40 - 19:15",
];
const days = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
const findSubject = (y: number, x: number, data: ScheduleData[]) => {
  const result = data.filter((subj) => subj.time === y && subj.day === x);
  return result.map((r) => <span key={r.id}>{r.subject.name}</span>);
};
const Schedule: FC<ScheduleProps> = ({ data }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Пары</th>
            {days.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {time.map((t, y) => (
            <tr key={t}>
              <td>{t}</td>
              {time.map((t, x) => (
                <td key={t}>{findSubject(y, x, data) || ""}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
