import { type FormEvent, useState } from "react";
import { api } from "~/utils/api";
const CreateScheduleForm = () => {
  const schedule = api.schedule.create.useMutation();
  const [time, setTime] = useState<number>(0);
  const [day, setDay] = useState<number>(0);
  const [week, setWeek] = useState<number>(0);
  const [subject, setSubject] = useState<number>(0);
  const scheduleItemCreate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = {
      time: time,
      day: day,
      week: week,
      subject_id: subject,
    };
    schedule.mutate(input);
  };
  return (
    <form onSubmit={scheduleItemCreate} className="flex">
      <div>
        <label>Время</label>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(Number(e.target.value))}
        />
      </div>
      <div>
        <label>День</label>

        <input
          type="number"
          value={day}
          onChange={(e) => setDay(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Чётность недели</label>

        <input
          type="number"
          value={week}
          onChange={(e) => setWeek(Number(e.target.value))}
        />
      </div>
      <div>
        <label>ID</label>

        <input
          type="number"
          value={subject}
          onChange={(e) => setSubject(Number(e.target.value))}
        />
      </div>

      <input type="submit" />
    </form>
  );
};

export default CreateScheduleForm;
