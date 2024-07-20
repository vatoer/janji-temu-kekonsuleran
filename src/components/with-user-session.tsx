import { auth } from "@/app/(auth)/auth";
import { useEffect, useState } from "react";

interface User {
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

const withUserSession = (WrappedComponent: React.ComponentType<any>) => {
  return function WithUserSessionWrapper(props: any) {
    const [user, setUser] = useState<User>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchSession = async () => {
        const session = await auth();
        if (session) {
          setUser(session.user);
        }
        setLoading(false);
      };

      fetchSession();
    }, []);

    if (loading) {
      return <div>Loading...</div>; // or a loading spinner
    }

    if (!user) {
      return <div>User not authenticated</div>; // or a redirect to login
    }

    return <WrappedComponent {...props} user={user} />;
  };
};

export default withUserSession;
