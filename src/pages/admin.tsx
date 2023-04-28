import { type NextPage } from "next";
import CreateScheduleForm from "~/components/forms/createScheduleForm";
import CreateSubjectForm from "~/components/forms/createSubjectForm";
import Schedule from "~/components/schedule";
import AdminLayout from "~/layouts/adminLayout";
import { api } from "~/utils/api";
const AdminPage: NextPage = () => {
  const { data } = api.schedule.getAll.useQuery();
  const subjects = api.subjects.getAll.useQuery();
  return (
    <AdminLayout title="Крутая админка">
      <div>ADMINKA</div>

      <CreateScheduleForm data={subjects.data} />
      <CreateSubjectForm />
      {data ? <Schedule data={data} /> : ""}
    </AdminLayout>
  );
};

export default AdminPage;
