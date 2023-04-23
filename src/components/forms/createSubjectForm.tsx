import { type FormEvent, useState } from "react";
import { api } from "~/utils/api";

const CreateSubjectForm = () => {
  const subject = api.subjects.create.useMutation();
  const [name, setName] = useState<string>("");
  const SubjectCreate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    subject.mutate(name);
  };
  return (
    <form onSubmit={SubjectCreate}>
      <input
        type="text"
        value={name}
        placeholder="Название"
        onChange={(e) => setName(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
};

export default CreateSubjectForm;
