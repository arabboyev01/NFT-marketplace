import { useRouter } from 'next/router';

export const useCustomRouter = () => {
  const router = useRouter();

  const customNavigate = (path: string) => router.push(path);

  return {
    ...router,
    navigate: customNavigate,
  };
};

export default useCustomRouter;
