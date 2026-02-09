// import UserDetails from "@/components/scrach/user-details";
import { getUserById } from "@/actions";
import { UserProfile } from "@/components/scrach/user-profile";
import { Card, CardContent } from "@/components/ui/card";
import { UserStatus } from "@/lib/utils";
import { GoAlert } from "react-icons/go";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log(id.trim().toLocaleUpperCase());
  const user = await getUserById(id.trim().toLocaleUpperCase());

  console.log("-----------------", user);

  return (
    <div className="max-w-md mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="text-center py-4">
        <h1 className="text-xl font-semibold text-foreground">
          Profil de l'agent
        </h1>
        {/* informe is current developpement and will be change in future */}
        <p className="text-sm text-muted-foreground">
          * Attention: Cette application est actuellement en développement.
          Certaines informations peuvent être incomplètes.
        </p>
      </div>
      {user.error || !user.data || user.data?.status == UserStatus.Inactif ? (
        <Card className="border-border shadow-sm">
          <CardContent className="pt-6 pb-4">
            <div className="text-center py-4">
              {/* erreur icon */}
              <div className="flex justify-center items-center">
                <GoAlert className="h-8 w-8 text-destructive" />
              </div>
              <p className="font-bold">Utilisateur non trouvé</p>
              <p className="text-sm text-muted-foreground">
                L'utilisateur avec le matricule{" "}
                <span className="font-bold"> {id} </span>n'a pas été trouvé.
              </p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <UserProfile user={user.data} />
      )}
    </div>
  );
}
