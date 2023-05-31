import Image from "next/image";
import FormStepper from "../components/FormStepper";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <Link href="/forms/formik">Formik</Link>
      </div>
      <div>
        <Link href="/forms/react-forms">React Forms</Link>
      </div>
    </>
  );
}
