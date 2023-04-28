import { type FormEvent, useState } from "react";
import { api } from "~/utils/api";
import { DefaultWithIconInput } from "../inputs";
import { SubjectIcon } from "~/components/svg/icons";
const CreateSubjectForm = () => {
  const subject = api.subjects.create.useMutation();
  const [name, setName] = useState<string>("");
  const SubjectCreate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    subject.mutate(name);
  };
  return (
    <form onSubmit={SubjectCreate}>
      <DefaultWithIconInput
        type="text"
        value={name}
        placeholder="Название предмета"
        onChange={(e) => setName(e.target.value)}
        whereSVG="left"
        width={400}
      >
        <SubjectIcon />
      </DefaultWithIconInput>
      <input type="submit" />
    </form>
  );
};

export default CreateSubjectForm;
