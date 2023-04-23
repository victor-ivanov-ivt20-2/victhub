import { type NextPage } from "next";
import CreateScheduleForm from "~/components/forms/createScheduleForm";
import CreateSubjectForm from "~/components/forms/createSubjectForm";
import AdminLayout from "~/layouts/adminLayout";
const AdminPage: NextPage = () => {
  return (
    <AdminLayout title="Крутая админка">
      <div>ADMINKA</div>

      <CreateScheduleForm />
      <CreateSubjectForm />
    </AdminLayout>
  );
};

export default AdminPage;
