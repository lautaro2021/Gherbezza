import { usePathname } from "next/navigation";

function useGetCurrentPathname() {
  const pathname = usePathname();

  return pathname;
}

export default useGetCurrentPathname;
