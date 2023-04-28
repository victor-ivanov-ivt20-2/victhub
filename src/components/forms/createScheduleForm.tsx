import { type FormEvent, useState, useEffect, type FC } from "react";
import { api } from "~/utils/api";
import { NumberSelectInput } from "../inputs";
type values = { value: number; label: string }[] | undefined;
const times: values = [];
const days: values = [];
const weeks: values = [];
const subjects: values = [];
const _times = [
  "08:00 - 09:35",
  "09:50 - 11:25",
  "11:40 - 13:15",
  "14:00 - 15:35",
  "15:50 - 17:25",
  "17:40 - 19:15",
];
const _days = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
_times.forEach((t, i) => {
  times[i] = { value: i, label: t };
});
_days.forEach((d, i) => {
  days[i] = { value: i, label: d };
});

weeks[0] = { value: 0, label: "чётные/нечётные" };
weeks[1] = { value: 1, label: "нечётные" };
weeks[2] = { value: 2, label: "чётные" };
interface SubjectData {
  id: number;
  name: string;
}
interface SubjectProps {
  data: SubjectData[] | undefined;
}
const CreateScheduleForm: FC<SubjectProps> = ({ data }) => {
  const schedule = api.schedule.create.useMutation();
  const [time, setTime] = useState<number>(0);
  const [day, setDay] = useState<number>(0);
  const [week, setWeek] = useState<number>(0);
  const [subject, setSubject] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const scheduleItemCreate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = {
      time: time,
      day: day,
      week: week,
      subject_id: subject,
    };
    console.log(input);
    schedule.mutate(input);
  };
  useEffect(() => {
    if (data && isLoading) {
      data?.forEach((d) => {
        subjects.push({ value: d.id, label: d.name });
      });
      setIsLoading(false);
    }
  }, [data, isLoading]);
  return (
    <form onSubmit={scheduleItemCreate} className="flex justify-between">
      <div className="w-full">
        <label>Время</label>
        <NumberSelectInput value={times} setValue={setTime} />
      </div>
      <div className="w-full">
        <label>День</label>

        <NumberSelectInput value={days} setValue={setDay} />
      </div>
      <div className="w-full">
        <label>Чётность недели</label>

        <NumberSelectInput value={weeks} setValue={setWeek} />
      </div>
      <div className="w-full">
        <label>ID</label>
        {!isLoading ? (
          <NumberSelectInput value={subjects} setValue={setSubject} />
        ) : (
          ""
        )}
      </div>

      <input type="submit" />
    </form>
  );
};

export default CreateScheduleForm;
