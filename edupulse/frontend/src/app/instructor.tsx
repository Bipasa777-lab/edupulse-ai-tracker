import NavBar from "@/components/NavBar";
import StudentCard from "@/components/StudentCard";
export type StudentStatus = "live" | "spoof" | "inactive";

interface Student {
  name: string;
  status: StudentStatus;
}

export default function InstructorPage() {
  const mockStudents: Student[] = [
    { name: "Alice", status: "live" },
    { name: "Bob", status: "spoof" },
    { name: "Charlie", status: "inactive" },
  ];

  return (
    <div>
      <NavBar />
      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockStudents.map((student) => (
          <StudentCard key={student.name} name={student.name} status={student.status} />
        ))}
      </main>
    </div>
  );
}